function Logo() {
  return (
    <div className="fixed -top-0 mx-auto z-50 w-full lg:w-[90%] h-20  backdrop-blur-lg  rounded-full flex items-center justify-center">
      <a href="/" className="border-none size-fit ">
        <img
          src="/assets/SEA_Webstudio_logo_full.svg"
          alt="Logo SEA Webstudio - Agence web spécialisée dans la création de sites web, applications et stratégie digitale. Basée en France."
          className="size-60"
        />
      </a>
    </div>
  );
}

export default Logo;
