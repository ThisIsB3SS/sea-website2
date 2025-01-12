function Services() {
  const data = [
    {
      title: 'Webflow Development',
      description:
        'You’re coming in for an amazing custom Webflow website, crafted with expertise and attention to detail.',
      price: '1000€',
      tags: ['Webflow', 'Development', 'Custom'],
    },
    {
      title: 'UI/UX Design & Web Design',
      description:
        'Let’s catch some eyes with designs that combine form and function to deliver an exceptional user journey',
      price: '1000€',
      tags: ['UI/UX', 'Design', 'Web'],
    },
    {
      title: 'SEO & Marketing',
      description:
        'Let’s catch some eyes with designs that combine form and function to deliver an exceptional user journey',
      price: '1000€',
      tags: ['SEO', 'Marketing'],
    },
  ];
  return (
    <section className="services-section size-full" id="Services">
      <h2 className="text-gray-500 text-2xl font-bold">Services</h2>
      <div className="services-cards-container flex items-center justify-center gap-4 flex-wrap size-full">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="services-card flex flex-col items-center justify-center rounded-xl border-2 border-gray-500 w-1/3 h-fit p-10 relative flex-wrap"
            >
              <p className="text-gray-500 text-lg font-bold absolute top-4 left-4 ">
                {item.price}
              </p>
              <h3 className="text-gray-500 text-3xl font-bold">{item.title}</h3>
              <p className="text-gray-500 text-lg font-semibold">
                {item.description}
              </p>

              {item.tags.map((tag, index) => {
                return (
                  <ul
                    key={index}
                    className="text-gray-500 text-lg font-semibold flex flex-col items-start justify-start w-full"
                  >
                    <li className="w-full border-b-2 border-gray-200 px-2 py-4 before:content-['-'] before:text-gray-500 before:font-bold before:text-lg before:mr-2">
                      {tag}
                    </li>
                  </ul>
                );
              })}
              <div className="w-full h-4 bg-gradient-to-b from-gray-200 to-gray-500"></div>
              <button className="text-gray-500 text-lg font-semibold border-2 border-gray-500 rounded-full hover:bg-gray-500 hover:text-white  transition-all duration-300 px-4 py-2 mt-4">
                Voir plus
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
