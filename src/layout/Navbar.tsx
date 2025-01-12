function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 size-fit backdrop-blur-lg bg-gradient-to-tr from-slate-600 to-slate-900 mb-8 fixed bottom-0 left-1/2 -translate-x-1/2 right-0 z-50 rounded-2xl border-2 border-slate-200">
      <ul className="flex gap-4 size-full justify-center flex-nowrap p-2">
        {['Projets', 'A propos', 'Services', 'Contact'].map((item) => (
          <li
            className=" hover:text-white first:text-white  lg:text-xl md:text-lg sm:text-md text-slate-400 uppercase font-bold  text-nowrap transition-all duration-300"
            key={item}
          >
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
