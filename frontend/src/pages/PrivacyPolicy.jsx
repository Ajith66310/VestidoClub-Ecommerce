import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-36 py-16 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-black tracking-wide">
        Privacy Policy
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        At <strong>Vestido Club</strong>, your privacy is our priority. We are committed to providing a premium, safe, and transparent shopping experience.
      </p>

      <h2 className="text-2xl font-semibold text-black mt-10 mb-3">
        Information We Collect
      </h2>
      <p className="text-gray-600">
        We collect personal information such as your name, email, shipping address,
        and order details to ensure smooth delivery and customer support.
      </p>

      <h2 className="text-2xl font-semibold text-black mt-10 mb-3">
        How We Use Your Data
      </h2>
      <ul className="list-disc ml-6 text-gray-600 space-y-2">
        <li>To process and deliver your orders</li>
        <li>To improve and personalize your shopping experience</li>
        <li>To provide updates, exclusive offers, and promotions</li>
      </ul>

      <h2 className="text-2xl font-semibold text-black mt-10 mb-3">
        Data Protection
      </h2>
      <p className="text-gray-600">
        We use industry-standard security protocols to protect your information.
        Your data is never sold or shared with unauthorized third parties.
      </p>

      <h2 className="text-2xl font-semibold text-black mt-10 mb-3">
        Your Rights
      </h2>
      <p className="text-gray-600">
        You may request access, update, or deletion of your personal data at any time.
      </p>

      <footer className="mt-16 border-t pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Vestido Club — Crafted with elegance & care.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
