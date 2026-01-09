import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <section className="pt-8 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
            ← Back to Home
          </a>
        </div>

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-slate-200">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Terms of Use</h1>
          <p className="text-slate-500 mb-2">Terms and conditions for using Step1.dev</p>
          <p className="text-sm text-slate-400">Last Updated: May 20, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-10">

          {/* Section 1 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using the Step1.dev platform and our Notion integration, you agree to be bound by these Terms of Use ("Terms"). If you disagree with any part of the terms, you may not access the Service.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">2. Description of Service</h2>
            <p className="text-slate-600 leading-relaxed">
              Step1.dev is an AI-powered platform that allows users to create websites using content from their Notion workspace. We provide this service "as is" and do not guarantee that the generated code will be error-free.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">3. User Accounts and Notion Integration</h2>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
              <li>You must provide accurate information when creating an account.</li>
              <li>You represent that you have the necessary rights and permissions to use the content in your Notion workspace for creating a public website.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">4. Intellectual Property</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <p className="text-slate-700 font-medium mb-2">Your Content</p>
                <p className="text-slate-600 text-sm">
                  You retain full ownership of the content (text, images, data) you import from Notion. By using Step1.dev, you grant us a worldwide, royalty-free license to host, display, and distribute this content solely for the purpose of providing your website.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <p className="text-slate-700 font-medium mb-2">Our Platform</p>
                <p className="text-slate-600 text-sm">
                  Step1.dev Inc. owns all rights, title, and interest in the Step1.dev platform, software, AI generation algorithms, and trademarks.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">5. Acceptable Use</h2>
            <p className="text-slate-600 leading-relaxed mb-4">You agree NOT to use Step1.dev to generate websites that:</p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
              <li>Contain illegal, defamatory, or fraudulent content.</li>
              <li>Distribute malware or viruses.</li>
              <li>Infringe on the intellectual property rights of others.</li>
              <li>Violate Notion's Terms of Service.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">6. AI Disclaimer</h2>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
              <p className="text-slate-700 font-medium mb-2">Important Notice</p>
              <p className="text-slate-600 text-sm">
                Step1.dev uses Artificial Intelligence to generate website structures and content.
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">You acknowledge that:</p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
              <li>AI may produce inaccurate or unexpected results ("hallucinations").</li>
              <li>You are responsible for reviewing and verifying your website content before publishing.</li>
              <li>We are not liable for any errors introduced by the AI generation process.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, Step1.dev Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data (including Notion data), or use, resulting from your use of the Service.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">8. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms on this page.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">9. Contact</h2>
            <p className="text-slate-600 leading-relaxed">
              For any questions regarding these Terms, please contact us at <a href="mailto:support@step1.dev" className="text-slate-900 underline hover:text-slate-600">support@step1.dev</a>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
