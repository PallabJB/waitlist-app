"use client";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [emailError, setEmailError] = useState("");
  const [reasonError, setReasonError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const blockedDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "rediffmail.com",
    "aol.com",
    "icloud.com",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    const domain = email.split("@")[1];

    if (!domain || blockedDomains.includes(domain.toLowerCase())) {
      setEmailError("Business emails only.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (reason.trim().length < 20) {
      setReasonError("Must be at least 20 characters.");
      isValid = false;
    } else {
      setReasonError("");
    }

    if (isValid) {
      setLoading(true);

      // Simulate real submission delay (better UX)
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 900);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-4">
      <div
        className={`
        bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl 
        w-full max-w-md transform transition-all duration-500
        ${submitted ? "scale-95 opacity-90" : "scale-100 opacity-100"}
      `}
      >
        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Internal Tools Access
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Enter your business details to request access
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="email"
                  placeholder="Your business email"
                  className={`
                    w-full p-3 border rounded-lg transition-all duration-200
                    focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-950
                    ${emailError ? "border-red-400" : "border-gray-300"}
                  `}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1 animate-pulse">
                    {emailError}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Why do you need access?"
                  className={`
                    w-full p-3 border rounded-lg h-28 transition-all duration-200
                    focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none text-gray-950
                    ${reasonError ? "border-red-400" : "border-gray-300"}
                  `}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                ></textarea>

                <div className="flex justify-between items-center mt-1">
                  <p
                    className={`text-sm ${
                      reason.length < 20 ? "text-gray-500" : "text-green-600"
                    }`}
                  >
                    {reason.length} / 20 characters
                  </p>

                  {reasonError && (
                    <p className="text-red-500 text-sm animate-pulse">
                      {reasonError}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full p-3 rounded-lg font-medium text-white
                  transition-all duration-300 transform hover:-translate-y-0.5
                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 shadow-md"
                  }
                `}
              >
                {loading ? "Submitting..." : "Request Access Token"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-3 animate-fadeIn">
            <div className="text-green-600 text-3xl">✔</div>
            <p className="font-medium text-gray-900">
              You have been added to the queue.
            </p>
            <p className="text-sm text-gray-900">
              We will review your request shortly.
            </p>
          </div>
        )}
      </div>

      {/* Small animation style */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
