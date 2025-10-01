import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from './translations.tsx';

const LegalNotice: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{t('footer.legal.notice')} – TEAMSTAR</title>
        <meta name="description" content="Legal Notice, Terms and Conditions, and Privacy Policy for TEAMSTAR" />
        <meta property="og:title" content={`${t('footer.legal.notice')} – TEAMSTAR`} />
        <meta property="og:description" content="Legal Notice, Terms and Conditions, and Privacy Policy for TEAMSTAR" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://${language}.teamstar.me/legal-notice`} />
      </Helmet>

      {/* Header */}
      <header className="fixed w-full bg-white z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center -my-2">
              <Link to="/">
                <img src="/teamstar1.png" alt="TEAMSTAR Logo" className="h-14 w-auto object-contain" />
              </Link>
            </div>

            {/* Back to Home */}
            <div className="flex items-center">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                ← {t('nav.home')}
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-light text-black mb-8">{t('footer.legal.notice')}</h1>
            
            {/* Legal Notice */}
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-black mb-6">Legal Notice</h2>
              <div className="prose prose-gray max-w-none">
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">Information according to § 5 TMG</h3>
                    <p><strong>d3.net internet technologien GmbH</strong></p>
                    <p>Langenstr. 34</p>
                    <p>28195 Bremen</p>
                    <p>Germany</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">Commercial Register</h3>
                    <p><strong>Commercial Register:</strong> HRB 27448</p>
                    <p><strong>Register Court:</strong> District Court Bremen</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">Represented by</h3>
                    <p><strong>Managing Director:</strong> Marco Lutze</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">Contact</h3>
                    <p><strong>Phone:</strong> +49 (0)421 9896 1510</p>
                    <p><strong>Fax:</strong> +49 (0)421 9896 1516</p>
                    <p><strong>E-Mail:</strong> info@d3.net</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">Postal Address</h3>
                    <p><strong>d3.net Asia Limited</strong></p>
                    <p>Shop 58, 2/F Beverley Commercial Centre, 87-105</p>
                    <p>Cahtham Road South, Tsim Sha Tsui</p>
                    <p>Hong Kong</p>
                    <p><strong>RegNo:</strong> 2961914</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">VAT ID</h3>
                    <p><strong>VAT identification number according to § 27 a VAT Act:</strong> DE284413301</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">EU Dispute Resolution</h3>
                    <p>The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.</p>
                    <p>Our email address can be found above in the legal notice.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">Consumer Dispute Resolution/Universal Dispute Resolution Body</h3>
                    <p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer dispute resolution body.</p>
                  </div>
                </div>
              </div>
            </section>


            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-black mb-6">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3 text-gray-700">
                  <p><strong>Email:</strong> info@d3.net</p>
                  <p><strong>Phone:</strong> +49 (0)421 9896 1510</p>
                  <p><strong>Fax:</strong> +49 (0)421 9896 1516</p>
                  <p><strong>Address:</strong> d3.net internet technologien GmbH, Langenstr. 34, 28195 Bremen, Germany</p>
                </div>
              </div>
            </section>

            {/* Last Updated */}
            <div className="text-sm text-gray-500 text-center pt-8 border-t border-gray-200">
              <p>Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default LegalNotice;
