import UrbanMonkey from "../assets/images/UrbanMonkey.png";

const myProjects = [
  {
    image: UrbanMonkey,
    title: "Urban Monkey",
    heading: "E-commerce Website",
    content: "A mock clothing store front built with React and Tailwind CSS.",
    languages: ["React", "Tailwind", "MongoDB", "Node", "Framer-Motion"],
  },
  {
    image: UrbanMonkey,
    title: "Urban Monkey",
    heading: "E-commerce Website",
    content: "A mock clothing store front built with React and Tailwind CSS.",
    languages: ["React", "Tailwind", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <div className="py-10 md:py-15" id="Projects">
      <h2 className="text-2xl md:text-3xl text-green-400 text-center">
        Things I have worked on!
      </h2>
      <div className="py-5 md:py-10 px-4 sm:px-6 md:px-8 lg:px-20">
        {myProjects.map(({ image, title, heading, content, languages }, index) => (
          <div
            key={`${title}-${index}`}
            className="flex flex-col md:flex-row justify-between my-5 md:my-10"
          >
            <div className="w-full md:w-1/2 lg:w-1/3">
              <img
                src={image}
                alt={title}
                className="rounded-md shadow-md object-cover w-full h-48 sm:h-56 md:h-94 opacity-50 hover:opacity-100 duration-200 ease-in hover:scale-105 transition-all cursor-pointer"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 mt-5 md:mt-0 md:pl-6">
              <h2 className="text-green-400 text-xl md:text-2xl">{title}</h2>
              <h3 className="text-gray-300 text-lg md:text-xl">{heading}</h3>
              <p className="text-gray-400 text-sm md:text-base">{content}</p>
              <div className="flex flex-wrap gap-2 mt-4 w-full h-auto">
                {languages.map((lang, i) => (
                  <span
                    key={lang}
                    className="text-xs sm:text-sm text-white bg-gray-800 px-2 py-1 rounded-full"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;