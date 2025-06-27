import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Database, Network, Mail, MessageCircle, Target, CheckCircle, Globe, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'bdo',
      icon: Users,
      title: 'Business Development Outsourcing (BDO)',
      subtitle: 'Enterprise-Grade Lead Generation + Tele-marketing Business Development',
      description: 'Our experienced, professional business development team work on prospecting, lead generation, pipeline management, and connect you with hot leads with immediate business needs for business meetings.',
      keyValue: 'Free your reps from repetitive tasks of the sales cycle, prioritize them working on hot actable leads, negotiation, structure deals, closing.',
      features: [
        'Laser focus on your target prospects',
        'Dedicated Tele-Sales Rep',
        'Full Account management included',
        'Global coverage across 34 countries'
      ]
    },
    {
      id: 'reachin-g',
      icon: Database,
      title: 'Reachin G',
      subtitle: 'Leading cloud-base business lead database & Intelligence',
      description: 'With Reachin G, you can search by job function, industry company size, location, other keywords, focus on your most-wanted prospects, discover the unknown prospects and contacts for lead generation and business development.',
      keyValue: 'Uncover the details of your targeted prospects including the movers, opinion leaders, and decision-makers. Find out the full complete, actionable lead contacts and intelligence for your lead generation and business development success.',
      features: [
        'Extensive Contribution Network',
        'AI empowered Web-crawling',
        'Professional Lead Generation team',
        'News Updates, Company Info, Org Charts'
      ]
    },
    {
      id: 'reachin-link',
      icon: Network,
      title: 'ReachinLink',
      subtitle: 'Expert Network Platform',
      description: 'Engage 100,000+ Reachin Experts worldwide, including CEOs, 3Cs, executives, specialist engineers, and top consultants to help consulting growth opportunities, strategic decisions, operational structure / frameworks, connections, advice and mentorship.',
      keyValue: 'Get the right knowledge & insights for your business with ReachinLink Experts to gain access to deep local market, sector expertise.',
      features: [
        'Tailor-made to your needs',
        'Flexible for your business needs',
        'Reliable and trusted by customers',
        'Dedicated Enterprise Solutions team'
      ]
    },
    {
      id: 'reachin-mail',
      icon: Mail,
      title: 'ReachinMail',
      subtitle: 'Email Marketing Automation',
      description: 'Helping you to put the right emails to the right targets. Automate your email marketing, empowering marketing functions including subscription forms, dynamic content, email segmentation, split testing etc.',
      keyValue: 'Using us as your extra employee without adding an extra desk. We help creating campaigns with Reachin database, sending the right emails to the right audience which they will want to see.',
      features: [
        'Automated email marketing',
        'Dynamic content creation',
        'Email segmentation',
        'Split testing capabilities'
      ]
    },
    {
      id: 'reachin-chat',
      icon: MessageCircle,
      title: 'ReachinChat',
      subtitle: 'Live Chat Support Solutions',
      description: 'To help engaging with visitors on your website, delivering real time support with humanized touches. Options of getting LiveChat built in with additional discount or getting Reachin professional team act as your 24/7 support team.',
      keyValue: 'Connect with customers to boost your online sales and to improve customer satisfactions.',
      features: [
        'SELL MORE by suggesting products directly in chat',
        'SUPPORT BETTER with personal assistance',
        'AUTOMATE with automatic replies and routing',
        '24/7 professional support team'
      ]
    },
    {
      id: 'reachin-salesforce',
      icon: Target,
      title: 'ReachinSalesForce',
      subtitle: 'Complete Sales Cycle Outsourcing',
      description: 'By outsourcing Reachin as your business development function, we will be acting as your in-country (local) resource and/or liaison to expand your operations in new markets. Handling the complete sales cycle, we will manage the leads into accounts on your behalf.',
      keyValue: 'Cost saving solution with guaranteed results. Fully flexible and scalable base on your business needs.',
      features: [
        'Complete sales cycle management',
        'In-country local resources',
        'Account development and management',
        'Flexible and scalable solutions'
      ]
    }
  ];

  const bdo_process = [
    { week: '1st-2nd week', phase: 'Transitioning', activities: ['Kick-Off', 'Knowledge Base', 'Communications Process Documents'] },
    { week: '3rd-4th week', phase: 'Customer Acceptance', activities: ['Customer Acceptance of Documentations', 'Officially Commence!'] },
    { week: 'On-going', phase: 'Improvement', activities: ['Daily Reporting', 'Weekly Review', 'On-going Improvement'] }
  ];

  const benefits = [
    { icon: Clock, title: 'Time Saving', description: 'Free your team from repetitive tasks' },
    { icon: Target, title: 'Reliability', description: 'Consistent and dependable results' },
    { icon: CheckCircle, title: 'Convenience', description: 'Seamless integration with your workflow' },
    { icon: Globe, title: 'Cost Savings', description: 'Lower overall cost for generating new sales' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services Overview</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">Get More Business.</p>
            <p className="text-lg text-blue-100 max-w-4xl mx-auto">
              Get your Prospect Generation, Qualified Leads, Business Meetings and Sales Revenue Targets HIT. 
              Reachin empowers growth of B2B companies through data, technology, and professional business development 
              teams that increases penetration of the market, enlarges lead resources, supercharges new business 
              development process with lower cost.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <service.icon className="text-blue-600" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-lg text-gray-600">{service.subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">What it does:</h4>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Key business value:</h4>
                      <p className="text-gray-600">{service.keyValue}</p>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                      >
                        Learn more about {service.title}
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BDO Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Development Outsourcing Process
            </h2>
            <p className="text-xl text-gray-600">Comprehensive Transitioning Process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bdo_process.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{phase.week}</h3>
                  <p className="text-lg text-blue-600 font-medium">{phase.phase}</p>
                </div>
                <ul className="space-y-2">
                  {phase.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={16} />
                      <span className="text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Global Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">34</div>
                <div className="text-xl">Countries Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">160+</div>
                <div className="text-xl">Major Cities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-xl">Support Available</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg mb-2">Supported Languages:</p>
            <p className="text-xl font-semibold">English / Mandarin / Cantonese</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to learn more about how our services can help your business grow.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Get a Quote
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

