import data from '@/data/data.json';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
type Card = {
  id: number;
  name: string;
  job: string;
  message: string;
  avatar: string;
};
const cardsData: Card[] = data.testimonials;
const SwipeCards = () => {
  const [cards, setCards] = useState<Card[]>(() => {
    return [...cardsData].sort((a) => (a.id === 1 ? 1 : -1));
  });
  return (
    <div className="swipe-cards size-full grid place-items-center pl-[10vw]">
      {cards.slice(0, 3).map((card) => (
        <Card key={card.id} cards={cards} setCards={setCards} {...card} />
      ))}
    </div>
  );
};

const Card = ({
  id,
  name,
  job,
  message,
  avatar,
  cards,
  setCards,
}: Card & { cards: Card[]; setCards: Dispatch<SetStateAction<Card[]>> }) => {
  const x = useMotionValue(0);
  const index = cards.findIndex((card) => card.id === id);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const rotate = useTransform(() => {
    const offset = index * (index === 0 ? 2 : index === 1 ? 0 : -2);
    return `${rotateRaw.get() + offset}deg`;
  });
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const translateX = index === 0 ? 0 : index === 1 ? -100 : -200;
  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      // Supprimer la carte en front
      setCards((prevCards) => {
        const [frontCard, ...rest] = prevCards;
        // Ajouter la carte en front à la fin
        return [...rest, frontCard];
      });
    }
  };

  return (
    <motion.div
      className="card h-[50vh] w-[35vw] flex flex-col items-center justify-center bg-transparent backdrop-blur-xl p-4 gap-8 rounded-lg border-2 border-gray-400 size-1/2 hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        rotate,
        opacity,
        transition: '0.125s transform',
        translateX,
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      data-id={index}
      role="article"
      aria-label={`Témoignage de ${name}`}
    >
      <img
        src={avatar}
        alt={name}
        className="size-32 object-cover rounded-full"
      />
      <p className="text-black text-lg font-medium text-pretty">{message}</p>
      <span className="text-black font-bold">{name}</span>
      <span className="text-gray-500 text-sm -mt-4">{job}</span>
    </motion.div>
  );
};
function Testimonials() {
  return (
    <section
      className="testimonials-section size-full px-12 h-[60vh] flex md:flex-row flex-col items-start justify-start  md:gap-0 gap-8 "
      aria-label="Témoignages de SEA Webstudio"
    >
      <h2
        className="text-gray-500 text-2xl font-regular text-nowrap z-10 cursor-default"
        role="heading"
        aria-level={2}
      >
        Témoignages
      </h2>
      <SwipeCards />
    </section>
  );
}

export default Testimonials;
