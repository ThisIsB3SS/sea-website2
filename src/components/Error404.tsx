import Logo from '@/layout/Logo';
import { useNavigate } from 'react-router-dom';

function Error404() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      <Logo />
      <h1 className="text-6xl font-montserratalt font-bold text-indigo-900 mb-4">
        404
      </h1>
      <p className="text-2xl font-montserratalt text-gray-700 mb-8">
        Page non trouvée
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-indigo-900 text-white rounded-lg hover:bg-indigo-700 duration-300 transition-colors font-montserratalt"
      >
        Retour à l'accueil
      </button>
    </div>
  );
}

export default Error404;
