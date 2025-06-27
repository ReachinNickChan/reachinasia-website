import React from 'react';
import { TrendingUp, Users, Target, Award, Building, Zap } from 'lucide-react';

const CustomerWins = () => {
  const caseStudies = [
    {
      category: 'Media Agency',
      icon: Building,
      title: 'O2O Media Agency Case Study #1',
      company: 'Local Hong Kong Media Agency specializing in TikTok solution',
      details: [
        'A leading TikTok media agency specializing in TikTok advertising solutions',
        'Certified TikTok Partner with a proven track record in delivering successful projects',
        'Employee Base: Over 30 employees worldwide, 20 employees in HK',
        'Headquarters: Hong Kong'
      ],
      challenge: [
        'Aiming to increase brand awareness with the targeted emerging markets and expand market share',
        'Failed to identifying right and/or related contact points of prospects with contact points under reasonable cost'
      ],
      services: [
        'Lead Generation and Business Development Support',
        'Identify and qualify potential clients within various targeted industries',
        'Manage and nurture relationships with prospects',
        'Initiate leads for 1 on 1 meetings or initial registrations for webinars',
        'Follow up with prospects after webinar for feedback collection and 1 on 1 consultations'
      ],
      results: [
        { metric: 'Lead Generations', value: '250+ prospects reached with 4 webinars, 70+ 1 on 1 meetings set up' },
        { metric: 'Prospecting Efficiency', value: '+45% with same sales force manpower' },
        { metric: 'YoY Growth', value: '15% (FY2022 vs 2023)' }
      ]
    },
    {
      category: 'Media Agency',
      icon: Zap,
      title: 'Media Agency Case Study #2 – Data Rental Campaign',
      company: 'E-commerce Marketing Campaign',
      details: [
        'Focus on e-commerce businesses during work-from-home period',
        'Targeted campaign: "6 in 10 WFH are shopping online during virtual meetings"'
      ],
      challenge: [
        'Need to reach relevant e-commerce decision makers',
        'Understand customer behavior during remote work period'
      ],
      services: [
        'Data Rental Campaign execution',
        'Email marketing with targeted messaging',
        'Lead qualification and follow-up'
      ],
      results: [
        { metric: 'Unique Contacts', value: '2,083 contacts reached' },
        { metric: 'Total Opens/Reads', value: '395 total (209 unique opens)' },
        { metric: 'Clicks', value: '102 clicks generated' },
        { metric: 'Interest in Services', value: '94 leads showed interest, 6 leads interested in cross-border e-commerce' }
      ]
    },
    {
      category: 'IT Services',
      icon: Building,
      title: 'IT Service Companies Case Study #1',
      company: 'World Largest 3rd Party Maintenance Corporate',
      details: [
        'A global leader in third-party IT hardware maintenance and data center solutions',
        'A recognized industry leader with a focus on innovative solutions and service excellence',
        'Global Workforce: Over 2,500 employees worldwide',
        'Headquarters: Mayfield Heights, Ohio, USA'
      ],
      challenge: [
        'Market Expansion: Aimed to penetrate emerging markets to increase global market share in the APAC region',
        'Sought to address the diverse needs of enterprise-level clients while strengthening core offerings',
        'Client Engagement: Required tailored strategies to identify, qualify, and convert enterprise leads'
      ],
      services: [
        'Lead Generation and Sales Support',
        'Identify and qualify potential clients/partners within various industries',
        'Manage and nurture relationships with prospects to convert them into customers',
        'Follow up with leads and initial meeting via online/Face to Face',
        'Customer Support and After-Sales Services',
        'Gather user feedback to help improve service SLA and win-back from competitors'
      ],
      results: [
        { metric: 'Customer Acquisition', value: '2M+ contract value business customers onboarded' },
        { metric: 'Market Penetration', value: 'Successfully entered key Asian markets: Singapore, Hong Kong, Australia, Malaysia' },
        { metric: 'Industry Engagement', value: 'Successfully engaged with technology, finance, manufacturing industries' }
      ]
    },
    {
      category: 'SaaS',
      icon: Target,
      title: 'SaaS Companies Case Study #2',
      company: 'Monday.com',
      details: [
        'A cloud-based Work Operating System (Work OS) for teams',
        'Successful IPO on NASDAQ, raising over $570 million in 2021',
        'Employee Base: Over 1,500 employees worldwide',
        'Headquarters: Tel Aviv, Israel'
      ],
      challenge: [
        'Market Expansion: Plans to penetrate emerging markets and increase global market share',
        'Enterprise-level clients involve tailor solutions while their primary market was for small and medium-sized businesses'
      ],
      services: [
        'Lead Generation and Sales Support',
        'Identify and qualify potential clients/partners within various industries',
        'Manage and nurture relationships with prospects to convert them into customers',
        'Follow up with leads and initial registrations via online',
        'Customer Support and After-Sales Services',
        'Gather user feedback to help improve and win-back from competitors'
      ],
      results: [
        { metric: 'Customer Acquisition', value: '800+ users converted into paying business customers' },
        { metric: 'Market Penetration', value: 'Successfully entered key Asian markets: Singapore, Hong Kong, Malaysia' },
        { metric: 'Industry Success', value: 'Successfully engaged with technology, finance, manufacturing, and retail' }
      ]
    },
    {
      category: 'SaaS',
      icon: Building,
      title: 'SaaS Companies Case Study #3',
      company: 'Local Hong Kong SI specializing in Salesforce solution',
      details: [
        'A leading Salesforce System Integrator specializing in cloud-based CRM implementations and customizations',
        'Certified Salesforce Partner with a proven track record in delivering successful projects',
        'Employee Base: Over 50 employees worldwide',
        'Headquarters: Singapore'
      ],
      challenge: [
        'Aiming to increase brand awareness with the targeted emerging markets and expand market share',
        'Failed to identifying related contact points of prospects with contact points under reasonable cost'
      ],
      services: [
        'Lead Generation and Business Development Support',
        'Identify and qualify potential clients within various targeted industries',
        'Manage and nurture relationships with prospects',
        'Initiate leads and initial registrations for webinar and seminar',
        'Follow up with prospects after webinar and seminar for feedback collection and 1 on 1 consultations'
      ],
      results: [
        { metric: 'Lead Generations', value: '250+ prospects reached with 4 webinars and 1 seminar' },
        { metric: 'Prospecting Efficiency', value: '+85% with same sales force manpower' },
        { metric: 'YoY Growth', value: '13% (FY2022 vs 2023)' }
      ]
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Media Agency':
        return 'bg-purple-100 text-purple-800';
      case 'IT Services':
        return 'bg-blue-100 text-blue-800';
      case 'SaaS':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Wins</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Real Results from Real Customers
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Discover how Reachin has helped businesses across different industries achieve their 
              sales and business development goals through our proven methodologies and expert services.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600">Proven results across industries</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <TrendingUp size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600">Max Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Users size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2M+</div>
              <div className="text-gray-600">Contract Value Generated</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Target size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">800+</div>
              <div className="text-gray-600">Customers Acquired</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Award size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15%</div>
              <div className="text-gray-600">Average YoY Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600">Detailed success stories from our clients</p>
          </div>
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <study.icon className="text-blue-600" size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium mr-3 ${getCategoryColor(study.category)}`}>
                          {study.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-lg text-gray-600">{study.company}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Company Details */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Company Profile</h4>
                      <ul className="space-y-2">
                        {study.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-gray-600 text-sm">
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenge & Services */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Challenge & Services</h4>
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 mb-2">Challenge:</h5>
                        <ul className="space-y-1">
                          {study.challenge.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-600 text-sm">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Services Provided:</h5>
                        <ul className="space-y-1">
                          {study.services.slice(0, 3).map((service, serviceIndex) => (
                            <li key={serviceIndex} className="text-gray-600 text-sm">
                              • {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Results Achieved</h4>
                      <div className="space-y-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-green-50 p-4 rounded-lg">
                            <div className="font-semibold text-green-800 text-sm mb-1">
                              {result.metric}
                            </div>
                            <div className="text-green-700 text-sm">
                              {result.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Proven success across multiple sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Technology', 'Finance', 'Manufacturing', 'Retail', 'Healthcare', 'Education',
              'Media & Marketing', 'SaaS', 'IT Services', 'Consulting', 'E-commerce', 'Telecommunications'
            ].map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-sm font-medium text-gray-900">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to become our next success story?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join the companies that have already transformed their business development with Reachin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </a>
            <a
              href="/services"
              className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerWins;

