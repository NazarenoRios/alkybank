import hernan from "../assets/hernan cosin.jpg";
import gabrielPamich from "../assets/profile-1.png"
export default function Contact() {
  let developers = [
    {
      name: "Gabriel Caramés",
      image: "https://avatars.githubusercontent.com/u/49535753?v=4",
      linkedin: "https://www.linkedin.com/in/gabrielcarames/",
      github: "https://github.com/GabrielCarames",
    },
    {
      name: "Gabriel Pamich",
      image: gabrielPamich,
      linkedin: "https://www.linkedin.com/in/gpamic/",
      github: "https://github.com/thadek",
    },
    {
      name: "Jander Gomez",
      image: "https://avatars.githubusercontent.com/u/58518358?v=4",
      linkedin: "https://www.linkedin.com/in/jandergomezbarrueta/",
      github: "https://github.com/Jander1016",
    },
    {
      name: "Hernan Cosin",
      image: hernan,
      linkedin: "https://www.linkedin.com/in/hernan-cosin/",
      github: "https://github.com/hernan-cosin",
    },
    {
      name: "Nazareno Rios",
      image: "https://avatars.githubusercontent.com/u/101956603?v=4",
      linkedin: "https://www.linkedin.com/in/nazareno-rios/",
      github: "https://github.com/NazarenoRios",
    },
    {
      name: "Ricardo Yegros",
      image: "https://avatars.githubusercontent.com/u/104315947?v=4",
      linkedin: "https://www.linkedin.com/in/ricardo-yegros-43623a188/",
      github: "https://github.com/ricardoyegros",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-5 ml-12 mt-12">
      {developers.map((developer) => (
        <div
          class="w-full max-w-sm bg-white border border-gray-200 rounded-lg  shadow-md dark:bg-gray-800 dark:border-gray-700 "
          key={developer}
        >
          <div class="flex flex-col items-center pb-10 pt-7 w-[15rem]">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={developer.image}
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white pt-3">
              {developer.name}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Front-end Developer
            </span>
            <div class="flex mt-4 space-x-3 md:mt-6">
              <a
                href={developer.linkedin}
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-dark1 rounded-lg hover:bg-dark2 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-dark2 dark:text-primary dark:hover:bg-gray-700 dark:focus:ring-blue-800"
              >
                Linkedin
              </a>
              <a
                href={developer.github}
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-dark1 rounded-lg hover:bg-dark2 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-dark2 dark:text-primary dark:hover:bg-gray-700 dark:focus:ring-blue-800"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
