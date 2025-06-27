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
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Fuel Innovation by Optimizing Business Development</h1>
            <p>
              Join > 500 organizations - including Fortune 500 - and fuel innovation by dramatically reducing time and money spent on business development, while simultaneously boosting performance and results.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn btn-yellow btn-large">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/about" className="btn btn-secondary btn-large">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Not just bigger … better.</h2>
            <p className="text-large">As the global leader in business development outsourcing, Reachin provides an unrivaled support experience–letting you focus on strategic priorities.</p>
          </div>
          <div className="grid grid-3">
            {benefits.map((benefit, index) => (
              <div key={index} className={benefit.colorClass}>
                <div className="card-header">
                  <div className="card-icon">
                    <benefit.icon size={28} />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{benefit.title}</h3>
                    <p className="card-description">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>How we help.</h2>
            <p className="text-large">Unlock budget and staff time to reinvest in innovation.</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3 className="card-title">Save</h3>
              <ul className="feature-list">
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-check" />
                  Save 30-40% vs. traditional methods on business development
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-check" />
                  Save 50-90% on lead generation costs
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-check" />
                  Bundle services to save even more
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-check" />
                  Consolidate several tools into one platform
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">Simplify</h3>
              <ul className="feature-list">
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-check" />
                  Complement internal skills with our expert service teams
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-check" />
                  Comprehensive, global 24/7 monitoring and management
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-check" />
                  Expert-level support on legacy and emerging technologies
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-check" />
                  Refocus your staff on innovative initiatives
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title">Innovate</h3>
              <ul className="feature-list">
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-check" />
                  Focus internal staff on transformation and change
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-check" />
                  Reinvest cost savings into new technologies
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-check" />
                  Vendor and technology agnostic solutions
                </li>
                <li className="feature-item">
                  <CheckCircle size={20} className="feature-check" />
                  Design solutions that best meet your needs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>How Reachin energizes, unlocks, and multiplies your potential</h2>
            <p className="text-large">Our proven 3-step process delivers consistent results</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-number">{step.number}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
                <div className="process-details">{step.details}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Trusted by thousands of businesses worldwide</h2>
            <p className="text-large">Our track record demonstrates consistent success</p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Customer Testimonials</h2>
            <p className="text-large">What our clients say about working with Reachin</p>
          </div>
          <div className="grid grid-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">{testimonial.author}</div>
                <div className="testimonial-company">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Factors Section */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Why leading companies choose Reachin</h2>
            <p className="text-large">Trusted by businesses worldwide for reliable results</p>
          </div>
          <div className="grid grid-2">
            {trustFactors.map((factor, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div className="card-icon">
                    <factor.icon size={28} />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{factor.title}</h3>
                  </div>
                </div>
                <ul className="feature-list">
                  {factor.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <CheckCircle size={20} className="feature-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-navy">
        <div className="container text-center">
          <h2>Get Started with Reachin</h2>
          <p className="text-large mb-4">
            Ready to optimize your business development?
          </p>
          <div className="btn-group justify-content-center">
            <Link to="/contact" className="btn btn-yellow btn-large">
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-large">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ml-2 {
          margin-left: 0.5rem;
        }

        @media (max-width: 768px) {
          .btn-group {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

