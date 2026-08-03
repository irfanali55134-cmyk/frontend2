import { useState } from "react";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await api.post("/admin/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("admin", JSON.stringify(res.data.admin));

      alert("Login Successful");

      navigate("/admin/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1220] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#16213A] border border-[#263353] rounded-2xl p-8 shadow-2xl">

        <div className="flex justify-center mb-5">
          <ShieldCheck size={60} className="text-[#3ECF8E]" />
        </div>

        <h1 className="text-white text-3xl font-bold text-center">
          Admin Login
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Welcome Back
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#0B1220] border border-[#263353] rounded-xl p-4 text-white outline-none"
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#0B1220] border border-[#263353] rounded-xl p-4 text-white outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-400"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>

          </div>

          <button
            disabled={loading}
            className="w-full bg-[#3ECF8E] text-black py-4 rounded-xl font-semibold hover:bg-[#2ab474] duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;