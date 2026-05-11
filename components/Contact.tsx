
import React, { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectDetails: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: any = {
      name: '',
      email: '',
      projectDetails: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Project details are required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_n5b18t5'; // Replace with your EmailJS service ID
      const templateId = 'template_665efiu'; // Replace with your EmailJS template ID
      const userId = 'vmIgK5PSYRGeP4ZYG'; // Replace with your EmailJS user ID

      // Send email
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_company: formData.company,
        from_email: formData.email,
        project_details: formData.projectDetails,
        to_email: 'info@pixlfab.com'
      }, userId);

      // Reset form and show success message
      setFormData({
        name: '',
        company: '',
        email: '',
        projectDetails: ''
      });
      setIsSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send inquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Let's Build the Future Together</h3>
            <p className="text-slate-500 text-lg mb-10">
              Ready to start your next additive manufacturing project? Contact our engineering team for a feasibility study and competitive quotation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Headquarters</p>
                  <p className="text-slate-500">PixlFab Technology (Shanghai) Co., Ltd.<br />Shanghai, China</p>
                </div>
              </div>

              <a href="mailto:info@pixlfab.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Email Address</p>
                  <p className="text-slate-500 group-hover:text-blue-600 transition-colors">info@pixlfab.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Phone / WhatsApp</p>
                  <p className="text-slate-500">+86 13120585188</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Web Presence</p>
                  <p className="text-slate-500">www.pixlfab.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Inquiry Sent Successfully!</h4>
                <p className="text-slate-500">
                  Thank you for your inquiry. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h4 className="text-2xl font-bold text-slate-900 mb-6">Quick Inquiry</h4>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2" htmlFor="name">Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-slate-50 border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all rounded-xl ${errors.name ? 'border-red-500' : 'border-slate-200'}`}
                        placeholder="Your Name" 
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2" htmlFor="company">Company</label>
                      <input 
                        type="text" 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                        placeholder="Company Name" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2" htmlFor="email">Work Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all rounded-xl ${errors.email ? 'border-red-500' : 'border-slate-200'}`}
                      placeholder="email@company.com" 
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2" htmlFor="projectDetails">Project Details</label>
                    <textarea 
                      id="projectDetails"
                      name="projectDetails"
                      rows={4} 
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50 border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all rounded-xl ${errors.projectDetails ? 'border-red-500' : 'border-slate-200'}`}
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                    {errors.projectDetails && <p className="text-xs text-red-500 mt-1">{errors.projectDetails}</p>}
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry <Send size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    NDA guaranteed. We usually reply within 24 hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
