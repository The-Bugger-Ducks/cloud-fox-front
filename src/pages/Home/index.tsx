import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <h1 onClick={() => navigate('/login')}>Login</h1>
    </>
  );
}
