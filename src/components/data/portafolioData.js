/**
 * @TemcDesign Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
  {
    imgSrc: "/portafolio/img/ThreeInLine.jpg",
    title: "Juego",
    skills: ["NextJS", "React", "JavaScript", "Tailwind", "CSS"],
    descripcion:
      "Juego tres en linea, conocido pasatiempo para dos personas en que gana el primero en poner tres marcas en línea, usualmente círculos y cruces, dentro de una cuadrícula de tres casillas de ancho por tres de alto.",
    demoURL: "https://three-in-line-lovat.vercel.app/",
    repoURL: "https://github.com/TemcDesign/three-in-line.git",
    anim: "fade-right",
  },
  {
    imgSrc: "/portafolio/img/DashboardTemc.png",
    title: "Dashboard",
    skills: ["NextJS", "React", "JavaScript", "Tailwind", "CSS"],
    descripcion:
      "Temc Dashboard proyecto creado gracias a la ayuda de NextJs y Vercel. Posee Inicio de sesion, creacion de facturas y muchas cosas mas.",
    demoURL: "https://temc-dashboard.vercel.app/",
    repoURL: "https://github.com/temc2412/temc-dashboard",
    anim: "fade-up",
    averageBrightness: 0.1,
  },
  {
    imgSrc: "/portafolio/img/havenStudio2.jpg",
    title: "Diseño Marca",
    skills: ["Photoshop", "Illustrator"],
    descripcion:
      "Creacion de identidad de la empresa Haven Studio dedicada al rubro de la belleza, aqui podras visualizar el trabajo realizado y las directrices entregadas al cliente para el debido uso de su marca",
    demoURL: "/portafolio/docs/DirectricesHavenStudio.pdf",
    repoURL: "https://github.com/TemcDesign/MarcaHaven",
    anim: "fade-left",
  },
  {
    imgSrc: "/portafolio/img/haven.jpg",
    title: "Prototipo - Diseño UI",
    skills: ["Photoshop", "Illustrator", "Figma"],
    descripcion:
      "Creacion de prototipo en la herramienta Figma para el cliente Haven Studio, manejando los mismos colores que se recomendaron en las directrices de la marca",
    demoURL:
      "https://www.figma.com/design/vu2bOZVAZvVklHnR0pufr6/Web-Site?node-id=0-1&node-type=canvas&t=qKYSWKhkg0d762TR-0",
    repoURL: "https://github.com/TemcDesign/prototipoMarcaHaven",
    anim: "fade-left",
  },
  {
    imgSrc: "/portafolio/img/morada.jpg",
    title: "Morada - Diseño UI-UX",
    skills: ["Photoshop", "Illustrator", "Figma"],
    descripcion:
      "Proyecto utilizado como practica en Next University para la obtencion del certificado de diseñador UI-UX",
    demoURL: "/portafolio/docs/morada.pdf",
    repoURL: "https://github.com/TemcDesign/proyectoMorada",
    anim: "fade-left",
  },
  {
    imgSrc: "/portafolio/img/animaciones.jpg",
    title: "Animaciones Js",
    skills: ["JavaScript", "CSS"],
    descripcion:
      "Animacion en JavaScript de un cubo diseñado con las letras de mi nombre y apellido.",
    demoURL: "https://temcdesign.github.io/cubeDisplay/",
    repoURL: "https://github.com/TemcDesign/cubeDisplay",
    anim: "fade-right",
  },
];

const skillIcons = {
  JavaScript: "skill-icons:javascript",
  React: "skill-icons:react-dark",
  Astro: "skill-icons:astro",
  CSS: "skill-icons:css",
  Tailwind: "skill-icons:tailwindcss-dark",
  Photoshop: "skill-icons:photoshop",
  Figma: "skill-icons:figma-light",
  Illustrator: "skill-icons:illustrator",
  NextJS: "skill-icons:nextjs-light",
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
  return {
    // Se coloca todo el contenido previo del item
    ...item,
    // Se cambian las skills por los iconos correspondientes
    skills: item.skills.map((skill) => skillIcons[skill]),
  };
});
