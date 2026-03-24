import { useLocation, useNavigate } from "react-router";

export default function OrderPage() {
  const location = useLocation();
  const { prenom } = location.state || { prenom: "inconnu" };
  const navigate = useNavigate();
  return (
    <>
      <h1>Bonjour {prenom}</h1>
      <button onClick={() => navigate("/")}>Déconnexion</button>
    </>
  );
}
