import React, { useEffect } from "react";

const PrivacyPolicy = () => {

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-800 px-6 md:px-36 py-20 mt-20 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-black tracking-wide">
        <span className="text-red-600">Privacy</span> Policy
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        At <strong className="text-red-600">Vestido Club</strong>, your{" "}
        <span className="text-red-600 font-semibold">privacy</span> is our priority.
        We are committed to providing a premium, safe, and transparent shopping experience.
      </p>

      {/* SECTION 1 */}
      <h2 className="text-2xl font-semibold text-black mt-12 mb-3">
        Information <span className="text-red-600">We Collect</span>
      </h2>
      <p className="text-gray-600">
        We collect personal details including your{" "}
        <span className="text-red-600 font-medium">name</span>,{" "}
        <span className="text-red-600 font-medium">email</span>,{" "}
        <span className="text-red-600 font-medium">shipping address</span>, and
        order-related data to ensure smooth delivery and customer support.
      </p>

      {/* SECTION 2 */}
      <h2 className="text-2xl font-semibold text-black mt-12 mb-3">
        How We <span className="text-red-600">Use</span> Your Data
      </h2>
      <ul className="list-disc ml-6 text-gray-600 space-y-2">
        <li>
          <span className="text-red-600 font-medium">Process</span> and deliver your orders
        </li>
        <li>
          Improve and{" "}
          <span className="text-red-600 font-medium">personalize</span> your shopping experience
        </li>
        <li>
          Provide <span className="text-red-600 font-medium">exclusive offers</span> and updates
        </li>
      </ul>

      {/* SECTION 3 */}
      <h2 className="text-2xl font-semibold text-black mt-12 mb-3">
        <span className="text-red-600">Data Protection</span>
      </h2>
      <p className="text-gray-600">
        We use industry-standard security measures to safeguard your information.
        Your data is <span className="text-red-600 font-medium">never sold</span> or shared with unauthorized parties.
      </p>

      {/* SECTION 4 */}
      <h2 className="text-2xl font-semibold text-black mt-12 mb-3">
        Your <span className="text-red-600">Rights</span>
      </h2>
      <p className="text-gray-600">
        You may request{" "}
        <span className="text-red-600 font-medium">access</span>,{" "}
        <span className="text-red-600 font-medium">updates</span>, or{" "}
        <span className="text-red-600 font-medium">deletion</span> of your data at any time.
      </p>

      <footer className="mt-20 border-t pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Vestido Club —{" "}
        <span className="text-red-600 font-medium">Crafted with elegance & care.</span>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
