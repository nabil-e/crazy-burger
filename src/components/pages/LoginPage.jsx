import { useState } from "react";

export default function LoginPage() {
  const [prenom, setPrenom] = useState("");

  const handleChange = (e) => {
    setPrenom(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${prenom}`);
    setPrenom("");
  };

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prenom}
          onChange={handleChange}
          placeholder="Entrez votre prénom..."
          required
        ></input>
        <button>Accéder à votre espace</button>
      </form>
    </>
  );
}
