import { useNavigate } from 'react-router';

export default function ErrorPage() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <h1>ErrorPage</h1>
      <button onClick={handleClick}>Retourner vers la page d'accueil</button>
    </div>
  )
}