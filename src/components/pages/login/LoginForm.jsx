import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setPrenom(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/order", { state: { prenom } });
    setPrenom("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        value={prenom}
        onChange={handleChange}
        placeholder="Entrez votre prénom..."
        required
      ></input>
      <button>Accéder à votre espace</button>
    </form>
  );
}
