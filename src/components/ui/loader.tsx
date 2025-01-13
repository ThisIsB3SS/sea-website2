import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div className="w-screen h-screen bg-slate-200 z-50 flex flex-col items-center justify-start m-0 p-0">
      <motion.div
        className="mx-auto z-50 border-none size-fit "
        initial={{ translateY: '20rem' }}
        animate={{ translateY: '-3rem' }}
        transition={{ delay: 1.5, duration: 0.3 }}
      >
        <motion.div className="relative size-fit">
          <motion.img
            src="/assets/SEA_Webstudio_logo_full.svg"
            alt="Logo SEA Webstudio"
            className="size-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute h-full top-0 right-0  bg-slate-200 z-50"
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 1.2 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Loader;
