import api from "../services/api";

export default function Login() {
  const login = async () => {
    try {
      const res = await api.post("/auth/login", {
        email: "test3@test.com",
        password: "123456",
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return <button onClick={login}>Login</button>;
}
