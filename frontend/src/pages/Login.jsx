import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await api.post("/auth/login", {
        email: "test@test.com",
        password: "123456",
      });

      localStorage.setItem("token", res.data.token);

      // ✅ React navigation
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  return <button onClick={login}>Login</button>;
}
