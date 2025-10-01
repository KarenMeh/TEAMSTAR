import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from './translations.tsx';

const TermsAndConditions: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{t('footer.legal.terms')} – TEAMSTAR</title>
        <meta name="description" content="Terms and Conditions for TEAMSTAR" />
        <meta property="og:title" content={`${t('footer.legal.terms')} – TEAMSTAR`} />
        <meta property="og:description" content="Terms and Conditions for TEAMSTAR" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://${language}.teamstar.me/terms`} />
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
            <h1 className="text-4xl font-light text-black mb-8">{t('footer.legal.terms')}</h1>
            
            {/* Terms and Conditions */}
            <section className="mb-12">
              <div className="prose prose-gray max-w-none">
                <div className="space-y-6 text-gray-700">
                  {/* Content will be added here */}
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

export default TermsAndConditions;
