import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Users, Clock, DollarSign, Award, Shield, Globe, Zap, CheckCircle } from 'lucide-react';

const Home = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Enlarge Your Market',
      description: 'Expand your reach into new markets and customer segments with our proven strategies and global network.',
      colorClass: 'service-card card-blue'
    },
    {
      icon: Target,
      title: 'Identify Hot Leads',
      description: 'Find prospects with immediate business needs using our advanced lead intelligence and data analytics.',
      colorClass: 'service-card card-teal'
    },
    {
      icon: Users,
      title: 'Prioritize Sales Resources',
      description: 'Focus your team on the most promising opportunities for maximum return on investment.',
      colorClass: 'service-card card-orange'
    },
    {
      icon: Clock,
      title: 'Save Management Time',
      description: 'Free your team from repetitive tasks and focus on strategic initiatives that drive growth.',
      colorClass: 'service-card card-yellow'
    },
    {
      icon: DollarSign,
      title: 'Enhance Cost Efficiency',
      description: 'Lower overall cost for generating new sales while improving lead quality and conversion rates.',
      colorClass: 'service-card card-navy'
    },
    {
      icon: Award,
      title: 'Maximize ROI',
      description: 'Get higher return on your investment with our proven methodologies and expert team.',
      colorClass: 'service-card card-blue'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Laser focus on your target prospects',
      description: '1M+ companies across 38 industries with 140+ sub-sectors',
      details: '3M+ unique data subjects for comprehensive market coverage'
    },
    {
      number: '02',
      title: 'Initiate interest and connect with prospects',
      description: 'Org charts and work scope of subject data for targeted outreach',
      details: 'Only reach prospects who are genuinely interested in your service'
    },
    {
      number: '03',
      title: 'Empower your team with business results',
      description: 'Pipeline management with qualified leads updated daily',
      details: 'Business meetings arranged with matched potential customers'
    }
  ];

  const trustFactors = [
    {
      icon: Shield,
      title: 'Your Trusted Partner',
      features: [
        'Highest confidentiality above industry standard',
        'Zero leaking of customer insights and data by design',
        'NDA policy applies to all external parties'
      ]
    },
    {
      icon: Users,
      title: 'Professional Business Development Team',
      features: [
        'Dedicated Business Development Specialist + Service Delivery Manager',
        'Cross-industry, product, and service selling experience',
        'Proven "Sell me this pen" ability and expertise'
      ]
    },
    {
      icon: Zap,
      title: 'Supreme Lead Generation Team',
      features: [
        'Turn data into actionable knowledge and insights',
        'Empowered by Machine Learning constantly scanning websites',
        'Seamless collaboration with conferences and exhibitions'
      ]
    },
    {
      icon: Globe,
      title: 'Global Coverage Support',
      features: [
        'Covering 34 countries, 160 major cities worldwide',
        'Philippines and China provide 24/7 support',
        'Multi-lingual support capabilities'
      ]
    }
  ];

  const stats = [
    { number: '1M+', label: 'Unique contacts', description: 'generated' },
    { number: '10K+', label: 'Hot leads', description: 'created' },
    { number: '5K+', label: 'Business meetings', description: 'arranged' }
  ];

  const testimonials = [
    {
      text: "The time savings in people management is incredible. We have been able to reallocate associates' time to more important duties than driving to data centers and checking for blinking lights.",
      author: "Rob Kruthaupt",
      company: "Cincinnati Bell"
    },
    {
      text: "From our Account Rep to the CEO and CIO, all the way from stem to stern, there is exceptional communication and consistency of message. Reachin knows what its process is.",
      author: "Andrew Balazs",
      company: "University Hospitals"
    },
    {
      text: "Very responsive. I reach out to them, and they respond back immediately. If I want to get on the phone with them, they will set up a Teams call right away.",
      author: "Joel Ludwig",
      company: "Foundever"
    }
  ];

  return (
    <div className="home-page bg-white">
      {/* Hero Section */}
      <section className="relative text-white text-center py-20 md:py-32">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url('/src/assets/hero-business-team.jpg')` }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 via-blue-800 to-transparent opacity-80"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Fuel Innovation by Optimizing Business Development</h1>
            <p className="text-xl mb-8">
              Join > 500 organizations - including Fortune 500 - and fuel innovation by dramatically reducing time and money spent on business development, while simultaneously boosting performance and results.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact" className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-transform transform hover:scale-105 inline-flex items-center">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/about" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Not just bigger … better.</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">As the global leader in business development outsourcing, Reachin provides an unrivaled support experience–letting you focus on strategic priorities.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-500 text-white rounded-lg w-12 h-12 flex items-center justify-center">
                      <benefit.icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How we help.</h2>
            <p className="mt-4 text-lg text-gray-600">Unlock budget and staff time to reinvest in innovation.</p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Save</h3>
              <ul className="space-y-4">
                {['Save 30-40% vs. traditional methods on business development',
