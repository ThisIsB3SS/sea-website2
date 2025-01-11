import '@/App.css';
import Navbar from '@/layout/navbar';
import Logo from '@/layout/Logo';
import { motion } from 'framer-motion';
function App() {
  return (
    <>
      <Logo />
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <motion.p
          className="text-xl text-gray-500"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 1 }}
        >
          Surfez sur le digital
        </motion.p>
        <motion.p
          className="text-xl text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 100 }}
          transition={{ duration: 1.5 }}
        >
          Donnez de l'émotion
        </motion.p>
      </div>
    </>
  );
}

export default App;
