import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from './translations.tsx';

const PrivacyPolicy: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{t('footer.legal.privacy')} – TEAMSTAR</title>
        <meta name="description" content="Privacy Policy for TEAMSTAR" />
        <meta property="og:title" content={`${t('footer.legal.privacy')} – TEAMSTAR`} />
        <meta property="og:description" content="Privacy Policy for TEAMSTAR" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://${language}.teamstar.me/privacy`} />
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
            <h1 className="text-4xl font-light text-black mb-8">{t('footer.legal.privacy')}</h1>
            
            {/* Privacy Policy */}
            <section className="mb-12">
              <div className="prose prose-gray max-w-none">
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-lg font-medium text-black mb-3">1. Privacy at a Glance</h3>
                    <h4 className="text-base font-medium text-black mb-2">General Information</h4>
                    <p>The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you can be personally identified. Detailed information on the subject of data protection can be found in our privacy policy listed below this text.</p>
                    
                    <h4 className="text-base font-medium text-black mb-2">Data Collection on this Website</h4>
                    <p><strong>Who is responsible for data collection on this website?</strong><br />
                    Data processing on this website is carried out by the website operator. You can find their contact details in the 'Information on the Responsible Party' section of this privacy policy.</p>
                    
                    <p><strong>How do we collect your data?</strong><br />
                    Your data is collected on the one hand by you providing it to us. This can be, for example, data that you enter in a contact form.</p>
                    
                    <p>Other data is collected automatically or after your consent when visiting the website by our IT systems. These are mainly technical data (e.g. internet browser, operating system or time of page access). The collection of this data takes place automatically as soon as you enter this website.</p>
                    
                    <p><strong>What do we use your data for?</strong><br />
                    Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.</p>
                    
                    <p><strong>What rights do you have regarding your data?</strong><br />
                    You have the right to receive information free of charge at any time about the origin, recipient and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.</p>
                    
                    <p>You can contact us at any time about this and other questions on the subject of data protection.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-black mb-3">2. Hosting</h3>
                    <p>We host the content of our website with the following provider:</p>
                    
                    <h4 className="text-base font-medium text-black mb-2">Hetzner</h4>
                    <p>The provider is Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen (hereinafter Hetzner).</p>
                    
                    <p>For details, see Hetzner's privacy policy: <a href="https://www.hetzner.com/de/rechtliches/datenschutz" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">https://www.hetzner.com/de/rechtliches/datenschutz</a>.</p>
                    
                    <p>The use of Hetzner is based on Art. 6 para. 1 lit. f GDPR. We have a legitimate interest in the most reliable presentation of our website. If a corresponding consent has been requested, the processing takes place exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG, insofar as the consent includes the storage of cookies or access to information on the user's end device (e.g. device fingerprinting) within the meaning of the TTDSG. The consent can be revoked at any time.</p>
                    
                    <h4 className="text-base font-medium text-black mb-2">Order Processing</h4>
                    <p>We have concluded a contract for order processing (AVV) for the use of the above-mentioned service. This is a contract required by data protection law, which ensures that this party only processes the personal data of our website visitors in accordance with our instructions and in compliance with the GDPR.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-black mb-3">3. General Information and Mandatory Information</h3>
                    <h4 className="text-base font-medium text-black mb-2">Privacy</h4>
                    <p>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.</p>
                    
                    <p>When you use this website, various personal data is collected. Personal data is data with which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.</p>
                    
                    <p>We point out that data transmission on the Internet (e.g. when communicating by e-mail) can have security gaps. Complete protection of data against access by third parties is not possible.</p>
                    
                    <h4 className="text-base font-medium text-black mb-2">Information on the Responsible Party</h4>
                    <p>The party responsible for data processing on this website is:</p>
                    
                    <p><strong>d3.net internet technologien gmbh</strong><br />
                    Langenstr. 34<br />
                    28195 Bremen (Germany)<br />
                    Geschäftsführer: Marco Lutze<br />
                    Amtsgericht Bremen HRB 27448<br />
                    VAT-ID: DE284413301<br />
                    Tel: +49 (0)421 9896 1510<br />
                    Fax: +49 (0)421 9896 1516</p>
                    
                    <p><strong>d3.net Asia Limited</strong><br />
                    Shop 58, 2/F Beverley Commercial Centre, 87-105<br />
                    Cahtham Road South, Tsim Sha Tsui<br />
                    Hong Kong<br />
                    RegNo: 2961914<br />
                    Telefon: +49 (0)421 9896 1510<br />
                    E-Mail: info@d3.net</p>
                    
                    <p>The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, e-mail addresses, etc.).</p>
                    
                    <h4 className="text-base font-medium text-black mb-2">Storage Duration</h4>
                    <p>Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us until the purpose for data processing ceases to apply. If you assert a legitimate request for deletion or revoke consent to data processing, your data will be deleted, unless we have other legally permissible reasons for storing your personal data (e.g. tax or commercial law retention periods); in the latter case, deletion will take place after these reasons cease to apply.</p>
                    
                    <h4 className="text-base font-medium text-black mb-2">General Information on the Legal Basis for Data Processing on this Website</h4>
                    <p>If you have consented to data processing, we process your personal data on the basis of Art. 6 para. 1 lit. a GDPR or Art. 9 para. 2 lit. a GDPR, insofar as special categories of data according to Art. 9 para. 1 GDPR are processed. In the event of express consent to the transfer of personal data to third countries, data processing also takes place on the basis of Art. 49 para. 1 lit. a GDPR. If you have consented to the storage of cookies or to access to information on your end device (e.g. via device fingerprinting), data processing also takes place on the basis of § 25 para. 1 TTDSG. The consent can be revoked at any time. If your data is required for contract fulfillment or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6 para. 1 lit. b GDPR. Furthermore, we process your data if this is necessary to fulfill a legal obligation on the basis of Art. 6 para. 1 lit. c GDPR. Data processing may also take place on the basis of our legitimate interest according to Art. 6 para. 1 lit. f GDPR. Information on the relevant legal basis in each individual case is provided in the following paragraphs of this privacy policy.</p>
                    
                    <h4 className="text-base font-medium text-black mb-2">Revocation of Your Consent to Data Processing</h4>
                    <p>Many data processing operations are only possible with your express consent. You can revoke consent that has already been given at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.</p>
                    
                    <h4 className="text-base font-medium text-black mb-2">Right to Object to Data Collection in Special Cases and Against Direct Advertising (Art. 21 GDPR)</h4>
                    <p>IF DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6 PARA. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL DATA CONCERNED, UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR PROCESSING THAT OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS OR THE PROCESSING SERVES TO ASSERT, EXERCISE OR DEFEND LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21 PARA. 1 GDPR).</p>
                    
                    <p>IF YOUR PERSONAL DATA IS PROCESSED FOR THE PURPOSE of DIRECT ADVERTISING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS CONNECTED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL NO LONGER BE USED FOR THE PURPOSE OF DIRECT ADVERTISING (OBJECTION PURSUANT TO ART. 21 PARA. 2 GDPR).</p>
                    
                    <h4 className="text-base font-medium text-black mb-2">Right to Lodge a Complaint with the Competent Supervisory Authority</h4>
                    <p>In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the member state of their habitual residence, their place of work or the place of the alleged violation. The right to lodge a complaint exists without prejudice to other administrative or judicial remedies.</p>
                    
                    <h4 className="text-base font-medium text-black mb-2">Right to Data Portability</h4>
                    <p>You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another responsible party, this will only take place insofar as it is technically feasible.</p>
                    
                    <h4 className="text-base font-medium text-black mb-2">Information, Deletion and Correction</h4>
                    <p>Within the framework of the applicable legal provisions, you have the right to free information about your stored personal data, its origin and recipient and the purpose of data processing and, if applicable, a right to correction or deletion of this data at any time. You can contact us at any time about this and other questions on the subject of personal data.</p>
                    
                    <h4 className="text-base font-medium text-black mb-2">Right to Restriction of Processing</h4>
                    <p>You have the right to request the restriction of processing of your personal data. You can contact us at any time about this. The right to restriction of processing exists in the following cases:</p>
                    
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>If you dispute the accuracy of your personal data stored with us, we usually need time to verify this. For the duration of the verification, you have the right to request the restriction of processing of your personal data.</li>
                      <li>If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.</li>
                      <li>If we no longer need your personal data, but you need it to exercise, defend or assert legal claims, you have the right to request the restriction of processing of your personal data instead of deletion.</li>
                      <li>If you have lodged an objection pursuant to Art. 21 para. 1 GDPR, a balance must be struck between your and our interests. As long as it is not yet clear whose interests prevail, you have the right to request the restriction of processing of your personal data.</li>
                      <li>If you have restricted the processing of your personal data, this data may only be processed - apart from its storage - with your consent or for the assertion, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of an important public interest of the European Union or a member state.</li>
                    </ul>
                    
                    <h4 className="text-base font-medium text-black mb-2">SSL or TLS Encryption</h4>
                    <p>This page uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator. You can recognize an encrypted connection by the fact that the address line of the browser changes from 'http://' to 'https://' and by the lock symbol in your browser line.</p>
                    
                    <p>If SSL or TLS encryption is activated, the data that you transmit to us cannot be read by third parties.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-black mb-3">4. Data Collection on this Website</h3>
                    <h4 className="text-base font-medium text-black mb-2">Cookies</h4>
                    <p>Our Internet pages use so-called 'cookies'. Cookies are small data packets and do not cause any damage to your end device. They are either stored temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your end device. Session cookies are automatically deleted after your visit. Permanent cookies remain stored on your end device until you delete them yourself or automatic deletion takes place through your web browser.</p>
                    
                    <p>Cookies can come from us (first-party cookies) or from third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain services from third-party companies within websites (e.g. cookies for processing payment services).</p>
                    
                    <p>Cookies have various functions. Numerous cookies are technically necessary, as certain website functions would not work without them (e.g. the shopping cart function or the display of videos). Other cookies can be used to evaluate user behavior or for advertising purposes.</p>
                    
                    <p>Cookies that are required to carry out the electronic communication process, to provide certain functions you have requested (e.g. for the shopping cart function) or to optimize the website (e.g. cookies for measuring web audiences) (necessary cookies) are stored on the basis of Art. 6 para. 1 lit. f GDPR, unless another legal basis is specified. The website operator has a legitimate interest in the storage of necessary cookies for the technically error-free and optimized provision of its services. If consent to the storage of cookies and comparable recognition technologies has been requested, processing takes place exclusively on the basis of this consent (Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG); the consent can be revoked at any time.</p>
                    
                    <p>You can set your browser so that you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or in general and activate the automatic deletion of cookies when closing the browser. If cookies are deactivated, the functionality of this website may be restricted.</p>
                    
                    <p>Which cookies and services are used on this website can be found in this privacy policy.</p>
                    
                    <h4 className="text-base font-medium text-black mb-2">Contact by E-Mail, Telephone or Fax</h4>
                    <p>When you contact us by e-mail, telephone or fax, your request including all resulting personal data (name, request) will be stored and processed by us for the purpose of processing your request. We do not pass on this data without your consent.</p>
                    
                    <p>The processing of this data takes place on the basis of Art. 6 para. 1 lit. b GDPR, insofar as your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of requests addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this was requested; the consent can be revoked at any time.</p>
                    
                    <p>The data you send to us via contact requests will remain with us until you request deletion, revoke your consent to storage or the purpose for data storage ceases to apply (e.g. after your request has been processed). Mandatory legal provisions - in particular legal retention periods - remain unaffected.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-black mb-3">5. Plugins and Tools</h3>
                    <h4 className="text-base font-medium text-black mb-2">Google Fonts (Local Hosting)</h4>
                    <p>This page uses so-called Google Fonts for the uniform display of fonts, which are provided by Google. The Google Fonts are installed locally. A connection to Google servers does not take place.</p>
                    
                    <p>Further information on Google Fonts can be found at <a href="https://developers.google.com/fonts/faq" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">https://developers.google.com/fonts/faq</a> and in Google's privacy policy: <a href="https://policies.google.com/privacy?hl=de" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
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

export default PrivacyPolicy;
