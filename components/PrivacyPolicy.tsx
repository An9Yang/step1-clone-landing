import React from 'react';

const PrivacyPolicy: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
          <p className="text-slate-500 mb-2">How Step1.dev collects, uses, and protects your information</p>
          <p className="text-sm text-slate-400">Effective Date: May 20, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-10">

          {/* Section 1 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              Welcome to Step1.dev ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website builder service and our integration with Notion (the "Service").
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-base font-medium text-slate-800 mt-6 mb-3">A. Personal Information</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              When you register for Step1.dev, we may collect personal contact information, such as your name, email address, and billing information (processed securely by our payment processors).
            </p>

            <h3 className="text-base font-medium text-slate-800 mt-6 mb-3">B. Data from Notion (Crucial for Integration)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              To provide our Service, we require access to your Notion workspace. We collect and process the following data based on your explicit authorization via OAuth:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600 mb-4">
              <li><strong>Page Content:</strong> We read the text, databases, and structure of the Notion pages you select to transform them into websites.</li>
              <li><strong>Media Files:</strong> We access images, videos, and files embedded in your Notion pages. Note: Due to Notion API limitations regarding temporary URLs, we may download and securely store copies of these media files on our servers to ensure they remain visible on your published website.</li>
              <li><strong>User Information:</strong> We access your Notion user ID and workspace name to authenticate your account.</li>
            </ul>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
              <p className="text-slate-700 font-medium mb-2">We DO NOT access or store:</p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Pages you have not explicitly selected or shared with the Step1.dev integration.</li>
                <li>• Your Notion payment information or password.</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
              <li><strong>Generate and Host Your Website:</strong> The core function of Step1.dev is to transform your Notion data into a live website.</li>
              <li><strong>AI Processing:</strong> We use third-party AI models (e.g., OpenAI) to analyze your content for the purpose of generating layout, design, and code structure. Your data is NOT used to train these third-party foundation AI models.</li>
              <li><strong>Improve Our Service:</strong> To analyze usage patterns and fix bugs.</li>
              <li><strong>Communication:</strong> To send you updates, security alerts, and support messages.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">4. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We retain your personal information and Notion content only for as long as necessary to fulfill the purposes set out in this Privacy Policy. If you disconnect your Notion account or delete your Step1.dev account, we will delete your synced content from our servers within 30 days, unless we are required to retain it for legal reasons.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">5. Sharing Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We do not sell your personal data. We may share information with:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
              <li><strong>Service Providers:</strong> Third-party vendors who perform services for us (e.g., AWS for hosting, Stripe for payments, OpenAI for AI processing).</li>
              <li><strong>Legal Requirements:</strong> If required by law or to protect our rights.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">6. Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">7. Your Privacy Rights</h2>
            <p className="text-slate-600 leading-relaxed">
              Depending on your location (e.g., GDPR for EU users, CCPA for California users), you may have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:support@step1.dev" className="text-slate-900 underline hover:text-slate-600">support@step1.dev</a>.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">8. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have questions or comments about this policy, you may email us at <a href="mailto:support@step1.dev" className="text-slate-900 underline hover:text-slate-600">support@step1.dev</a> or by post to:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-slate-700 font-medium">INFERNET AI PTE. LTD.</p>
              <p className="text-slate-600 text-sm">144 ROBINSON ROAD #12-01, ROBINSON SQUARE, SINGAPORE 068908, SINGAPORE</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
