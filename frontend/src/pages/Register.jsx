import api from "../services/api";

export default function Register() {
  const register = async () => {
    await api.post("/auth/register", {
      name: "Test",
      email: "test@test.com",
      password: "123456"
    });
    alert("Registered");
  };

  return <button onClick={register}>Register</button>;
}
