import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      navigate("/restaurants");
    } else {
      alert("Invalid OTP. Try 123456");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-950 via-indigo-950 to-black text-white overflow-hidden">
      {/* OTP Card */}
      <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/20 border border-indigo-500/30 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(99,102,241,0.4)] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] max-w-lg p-6 sm:p-8 md:p-10 text-center transform transition-all hover:scale-[1.02] duration-300">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 drop-shadow-lg mb-6 sm:mb-8">
          Enter OTP
        </h1>

        {/* OTP Form */}
        <form onSubmit={handleVerify} className="space-y-4 sm:space-y-5">
          <input
            type="text"
            placeholder="Enter 123456"
            className="w-full p-3 sm:p-4 rounded-xl bg-white/10 border border-indigo-500/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 tracking-widest text-center text-base sm:text-lg"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-pink-500 font-semibold tracking-wide text-base sm:text-lg shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            Verify OTP ✅
          </button>
        </form>

        {/* Info Text */}
        <p className="text-gray-400 text-xs sm:text-sm mt-5 sm:mt-6 md:mt-8">
          Didn’t receive OTP?{" "}
          <span className="text-indigo-400 hover:text-indigo-300 cursor-pointer underline">
            Resend
          </span>
        </p>
      </div>
    </div>
  );
}
