import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, TrendingUp, Users, Award, CheckCircle, Target, DollarSign } from 'lucide-react';

const Partnership = () => {
  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Expand your revenue streams by offering our proven business development services to your clients.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access our global network spanning 34 countries and 160+ major cities worldwide.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Leverage our experienced business development specialists and lead generation experts.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Partner with a WBAF2020 winner with demonstrated success across multiple industries.'
    },
    {
      icon: Target,
      title: 'Comprehensive Solutions',
      description: 'Offer complete business development outsourcing solutions from lead generation to deal closing.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Commissions',
      description: 'Earn attractive commissions and incentives through our partner program structure.'
    }
  ];

  const partnerTypes = [
    {
      title: 'Reseller Partners',
      description: 'Sell Reachin services under your brand and earn commissions on every successful deal.',
      features: [
        'White-label solutions available',
        'Comprehensive sales training',
        'Marketing materials provided',
        'Dedicated partner support'
      ]
    },
    {
      title: 'Technology Partners',
      description: 'Integrate your technology solutions with our business development services.',
      features: [
        'API integration support',
        'Joint solution development',
        'Co-marketing opportunities',
        'Technical collaboration'
      ]
    },
    {
      title: 'Consulting Partners',
      description: 'Refer clients to Reachin and earn referral fees while focusing on your core consulting services.',
      features: [
        'Referral fee structure',
        'Joint client presentations',
        'Complementary service offerings',
        'Shared success metrics'
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Form long-term strategic alliances to expand market reach and capabilities.',
      features: [
        'Joint go-to-market strategies',
        'Shared resources and expertise',
        'Co-branded solutions',
        'Executive-level partnerships'
      ]
    }
  ];

  const partnershipProcess = [
    {
      step: 1,
      title: 'Initial Discussion',
      description: 'Contact our partnership team to discuss your business goals and partnership interests.'
    },
    {
      step: 2,
      title: 'Partnership Evaluation',
      description: 'We evaluate mutual fit and explore potential collaboration opportunities.'
    },
    {
      step: 3,
      title: 'Agreement & Onboarding',
      description: 'Finalize partnership agreement and complete onboarding process with training and resources.'
    },
    {
      step: 4,
      title: 'Launch & Support',
      description: 'Launch partnership activities with ongoing support and regular performance reviews.'
    }
  ];

  const requirements = [
    'Established business with proven track record',
    'Alignment with Reachin\'s values and quality standards',
    'Commitment to customer success and satisfaction',
    'Adequate resources to support partnership activities',
    'Willingness to invest in training and certification',
    'Strong market presence in target industries or regions'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Users size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partnership Program</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Join Forces with Reachin to Expand Your Business
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Partner with the leading business development outsourcing company and unlock new revenue 
              opportunities while delivering exceptional value to your clients.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Partner with Reachin?</h2>
            <p className="text-xl text-gray-600">Unlock the benefits of strategic partnership</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <benefit.icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partnership Types</h2>
            <p className="text-xl text-gray-600">Choose the partnership model that fits your business</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partnership Process</h2>
            <p className="text-xl text-gray-600">Simple steps to become a Reachin partner</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
                {index < partnershipProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="text-gray-300 mx-auto" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Partnership Requirements</h2>
              <p className="text-lg text-gray-600 mb-8">
                We seek partners who share our commitment to excellence and customer success. 
                Here are the key requirements for becoming a Reachin partner:
              </p>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Partner?</h3>
              <p className="text-gray-600 mb-6">
                Take the first step towards a successful partnership with Reachin. 
                Contact our partnership team to discuss opportunities.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Partnership Inquiries</h4>
                  <p className="text-gray-600">partnerships@reachinasia.com</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Business Development</h4>
                  <p className="text-gray-600">bd@reachinglobal.com</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 mt-6"
              >
                Contact Partnership Team
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partner Success</h2>
            <p className="text-xl text-gray-600">Our partners achieve remarkable results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-xl text-gray-900 font-semibold mb-2">Active Partners</div>
              <div className="text-gray-600">Across multiple regions and industries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">200%</div>
              <div className="text-xl text-gray-900 font-semibold mb-2">Average Revenue Growth</div>
              <div className="text-gray-600">For partners in their first year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-xl text-gray-900 font-semibold mb-2">Partner Satisfaction</div>
              <div className="text-gray-600">Based on annual partner surveys</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Partnership Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our growing network of successful partners and unlock new business opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Apply for Partnership
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Learn More About Reachin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;

