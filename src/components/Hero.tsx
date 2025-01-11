import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen z-50">
      <h1 className="text-xl text-gray-500">SEA Webstudio - Agence digitale</h1>
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
        transition={{ duration: 1.2 }}
      >
        Donnez de l'émotion
      </motion.p>
    </div>
  );
}

export default Hero;
