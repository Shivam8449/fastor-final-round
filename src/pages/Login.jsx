import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile.length === 10) {
      localStorage.setItem("mobile", mobile);
      toast.success("Your OTP is 123456 🔐", {
        style: {
          borderRadius: "10px",
          background: "#1f2937",
          color: "#fff",
        },
        iconTheme: {
          primary: "#6366f1",
          secondary: "#fff",
        },
      });
      setTimeout(() => navigate("/otp"), 800);
    } else {
      toast.error("Please enter a valid 10-digit mobile number", {
        style: {
          borderRadius: "10px",
          background: "#7f1d1d",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-black text-white p-6">
      <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/20 border border-indigo-500/30 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(99,102,241,0.4)] w-full max-w-sm sm:max-w-md p-8 text-center transform transition-all hover:scale-[1.02] duration-300">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 drop-shadow-lg mb-8">
          Welcome to Fastor
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className="w-full p-3 rounded-xl bg-white/10 border border-indigo-500/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-center text-lg tracking-wider"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-pink-500 font-semibold tracking-wide text-lg shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            Get OTP 📱
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-6">
          Secure login powered by Fastor 🔒
        </p>
      </div>
    </div>
  );
}
