import React from 'react';
import { Shield, Users, Globe, Award, Calendar, TrendingUp } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      date: 'Oct., 2018',
      title: 'Reachin founded!',
      description: 'Rising star in Business Development as a service (BDaaS)!'
    },
    {
      date: 'Apr., 2019',
      title: '1st Centre in China!',
      description: 'Chinese Service Delivery Centre Established!'
    },
    {
      date: 'Jun., 2019',
      title: '3rd Language Developed!',
      description: 'English Service Delivery Team Available!'
    },
    {
      date: 'Feb., 2020',
      title: 'World Business Angel Investment Forum Winner!',
      description: 'WBAF2020 winner out of among 1,456 startup applications'
    }
  ];

  const securityFeatures = [
    {
      icon: Users,
      title: 'People',
      subtitle: 'Everything starts with people, including Security',
      description: 'Reachin first line of defense starts with people. By implementing best practices of security within us, Reachin offers training and education program for employees, contractors, and third-party service providers as well as background checks for all employees before hiring.'
    },
    {
      icon: Shield,
      title: 'Environment',
      subtitle: 'Protects against physical intrusion, promote up-time',
      description: 'Reachin\'s data centers provide above global average up-time of at least 99.99%, giving customers reliable experience to our business development service. We work with top-tier cloud infrastructure providers like Google.'
    },
    {
      icon: Globe,
      title: 'Infrastructure',
      subtitle: 'Our Security Infrastructure enable BDaaS',
      description: 'In Reachin, we believe deep in the defense-in-depth strategy. Our infrastructure is protected by several layers of network-based security controls including firewalls, intrusion detection systems, load balancers, and virtual firewalls.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Reachin</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Leading Business Development Solution
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get More Business.</h2>
              <p className="text-lg text-gray-600 mb-6">
                Reachin connects B2B companies to business opportunities with lower cost, reach into more customers, 
                make business even more successful than before.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Watch Our Company Video</h3>
                <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
                  <a 
                    href="https://www.youtube.com/watch?v=sr-Cljr3gRQ&feature=youtu.be" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Play Video
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  Our entire business is to maximize business opportunities with lower cost. From experienced, 
                  professional business development team that understand what it takes in B2B world, to intelligence 
                  & data that has whatever customers need to open businesses, we'll always help to Reachin.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Do</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free from repetitive tasks of the sales cycle</li>
                  <li>• Empower with updated and actionable business data</li>
                  <li>• Give insights, connect you with prospects in meaningful way</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Numbers */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Reachin Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
                <div className="text-xl">Unique contacts generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
                <div className="text-xl">Hot leads created</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">5K+</div>
                <div className="text-xl">Business meetings arranged</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All rounded Reachin Security</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing business development solutions that you can trust. Reachin appreciates, and don't take for granted, 
              for the trust that you have given us to keep your information safe.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <feature.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Milestone</h2>
            <p className="text-xl text-gray-600">Enterprise Growth & Strategic Move</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-32 text-right pr-8">
                  <div className="text-lg font-semibold text-blue-600">{milestone.date}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 relative">
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-blue-300"></div>
                  )}
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Relations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Investor Relations</h2>
              <p className="text-lg text-gray-600 mb-6">
                Reachin is a pioneer in B2B Business Development Solution. Reachin is a combine of lead provider and 
                Business Development Outsourcing service provider, who enables B2B companies to unlock their sales 
                potentials, get their prospect generation, qualified leads, business meetings and sales revenue targets HIT.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="text-blue-600 mr-3" size={20} />
                  <span className="text-gray-700">100% Focus on Customer Success</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="text-blue-600 mr-3" size={20} />
                  <span className="text-gray-700">High Net Renewal Rates</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Latest News</h3>
              <div className="border-l-4 border-blue-600 pl-4 mb-6">
                <div className="text-sm text-gray-500 mb-1">18/Feb/2020</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Reachin – Winners of World Business Angel Investment Forum 2020
                </h4>
                <p className="text-gray-600">WBAF2020 winner out of among 1,456 startup applications</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact Investor Relations</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>ir@reachinasia.com (For APAC Enquiry)</p>
                    <p>ir@reachinglobal.com (For Global Enquiry)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

