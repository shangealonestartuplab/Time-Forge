import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logging in with: ${email}`);
    // This is where your Supabase authentication will go later!
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100 font-sans">
      <div className="w-full max-w-md p-8 space-y-6 bg-slate-800 rounded-2xl shadow-xl border border-slate-700">
        {/* Logo / Branding */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-indigo-400">Time-Forge</h1>
          <p className="mt-2 text-sm text-slate-400">Sign in to manage your workspace</p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-slate-300">Email Address</label>
            <input
              type="email"
              required
              className="mt-1 block w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="you@company.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300">Password</label>
            <input
              type="password"
              required
              className="mt-1 block w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded bg-slate-950 border-slate-700 text-indigo-500 focus:ring-0" />
              <span className="text-slate-400">Remember me</span>
            </label>
            <a href="#" className="text-indigo-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition mt-6"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
