import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    'Business Development Outsourcing (BDO)',
    'Reachin G - Lead Database & Intelligence',
    'ReachinLink - Expert Network',
    'ReachinMail - Email Marketing',
    'ReachinChat - Live Chat Support',
    'ReachinSalesForce - Complete Sales Cycle',
    'Partnership Opportunities',
    'Other'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'ir@reachinasia.com (APAC Enquiry)',
        'ir@reachinglobal.com (Global Enquiry)',
        'partnerships@reachinasia.com (Partnership)'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+852 XXXX XXXX (Hong Kong)',
        '+86 XXXX XXXX (China)',
        '+1 XXX XXX XXXX (Global)'
      ]
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'Hong Kong Office',
        'China Service Centre',
        'Global Operations'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Mon - Fri: 9:00 AM - 6:00 PM (HKT)',
        '24/7 Support Available',
        'Multi-timezone Coverage'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you start working on our project?',
      answer: 'We can typically begin within 1-2 weeks after the initial consultation and agreement finalization. Our transitioning process takes 2-4 weeks for full implementation.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work across 38+ industries including technology, finance, manufacturing, healthcare, SaaS, and more. Our team has cross-industry experience.'
    },
    {
      question: 'Do you provide services globally?',
      answer: 'Yes, we provide services across 34 countries and 160+ major cities worldwide with 24/7 support and multi-lingual capabilities.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'Our pricing is flexible and depends on the scope of services, project duration, and specific requirements. Contact us for a customized quote.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Ready to unlock your sales potential?
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Get in touch with our business development experts to discuss how Reachin can help 
              your business achieve its sales and growth objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get a Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your business development needs and goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2" size={20} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you unlock your business potential. Reach out to us through 
                  any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <info.icon className="text-blue-600" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{info.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Coverage</h2>
            <p className="text-xl text-gray-600">We serve clients worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">34</div>
              <div className="text-xl text-gray-900 font-semibold mb-2">Countries</div>
              <div className="text-gray-600">Global presence across major markets</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">160+</div>
              <div className="text-xl text-gray-900 font-semibold mb-2">Cities</div>
              <div className="text-gray-600">Local expertise in major business centers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-xl text-gray-900 font-semibold mb-2">Support</div>
              <div className="text-gray-600">Round-the-clock assistance available</div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-4">
              Countries include: Australia, Austria, Brazil, Canada, Denmark, China, France, Germany, 
              Italy, Israel, Ireland, India, Iceland, Hungary, Hong Kong, Greece, Romania, Puerto Rico, 
              Portugal, Peru, Norway, Netherlands, Mexico, Malaysia, Russia, Slovakia, South Korea, 
              Spain, Sweden, Switzerland, Taiwan, Singapore, United Kingdom, United States
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

