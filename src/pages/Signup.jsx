import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Form validations
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email) {
      setError("Email address is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    // Simulate network latency for a high-quality feel
    setTimeout(() => {
      const res = signup(name, email, password);
      setIsLoading(false);
      if (res.success) {
        navigate("/");
      } else {
        setError(res.message);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-500 flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Glowing backdrop elements */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-blue-400/10 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-indigo-400/10 dark:bg-indigo-900/10 rounded-full blur-3xl -z-10"></div>

        <div className="w-full max-w-md bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/80 shadow-2xl p-8 md:p-10 rounded-[2rem] transition-all duration-300">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Create Account
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Join ShopEase to start your premium experience
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200/55 dark:border-rose-900/40 text-rose-600 dark:text-rose-400 text-sm rounded-2xl">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label 
                htmlFor="name" 
                className="block text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-3 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:bg-white dark:focus:bg-slate-800/80 text-slate-900 dark:text-white transition-all duration-200 placeholder-slate-400"
                disabled={isLoading}
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:bg-white dark:focus:bg-slate-800/80 text-slate-900 dark:text-white transition-all duration-200 placeholder-slate-400"
                disabled={isLoading}
              />
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:bg-white dark:focus:bg-slate-800/80 text-slate-900 dark:text-white transition-all duration-200 placeholder-slate-400"
                disabled={isLoading}
              />
            </div>

            <div>
              <label 
                htmlFor="confirm-password" 
                className="block text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-5 py-3 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:bg-white dark:focus:bg-slate-800/80 text-slate-900 dark:text-white transition-all duration-200 placeholder-slate-400"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform active:scale-[0.98] focus:outline-none flex items-center justify-center gap-2 disabled:opacity-80 mt-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Creating Account...</span>
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/60 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="font-bold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Signup;
