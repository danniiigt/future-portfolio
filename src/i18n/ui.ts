import enTranslations from "./lang/en.json";
import esTranslations from "./lang/es.json";

export const languages = {
  es: "Español",
  en: "English",
};

export const ui = {
  es: {
    Intro: "Hola, soy",
    Role: "Desarrollador Fullstack",
    Location: "Murcia, España.",
    WorkStatus: "Abierto a Ofertas",
    About: "Un poco acerca de mi",
    AboutSubtitle:
      "Como me adentré al mundo del desarrollo y mis planes de futuro. 👇",
    AboutParagraph1:
      "A los 16 años, mientras cursaba el instituto, una chispa de aburrimiento encendió mi curiosidad y me impulsó a aventurarme en el fascinante mundo del desarrollo web. En busca de algo nuevo, decidí sumergirme en el aprendizaje y desarrollo, marcando así el inicio de mi viaje en este apasionante sector. Lo que comenzó como una manera de romper la monotonía se convirtió rápidamente en una pasión por crear, aprender y crecer en el universo del desarrollo web.",
    AboutParagraph2:
      "Mi ambición y curiosidad me han llevado a poder aprender las tecnologías con las que hoy en dia desarrollo, en paralelo con cursar un grado superior de desarrollo de aplicaciones web donde también he cultivado habilidades colaborativas entre otras. Siempre he sido una persona inquieta que disfruta creando, aprendiendo y mejorando de manera autodidacta.",
    AboutParagraph3:
      "Mi visión va más allá de mi propia carrera; estoy comprometido con contribuir al futuro del desarrollo, donde la colaboración, la sostenibilidad y la accesibilidad son pilares fundamentales. Veo la colaboración como la fuerza impulsora detrás de la innovación, la capacidad de trabajar codo a codo con colegas y comunidades para crear soluciones más impactantes y sólidas.",
    AboutParagraph4:
      "Estoy emocionado por las oportunidades que el futuro del desarrollo nos presenta y estoy ansioso por ser parte de él.",
    Experience: "Mi experienca en el mundo tech",
    ExperienceSubtitle:
      "El paso por los diferentes proyectos y mi papel en cada uno 💻",
    ExperienceDate1: "JUN 2023 - ACTUALIDAD",
    ExperienceTitle1:
      "Desarrollador Fullstack (React.js & Node.js) @ Papel A Web",
    ExperienceBody1:
      "En este puesto, nuevamente desarrollo aplicaciones web de manera autónoma. Mi día a día consiste en analizar las necesidades del cliente/empresa y desarrollar una solución técnica adaptada, abarcando todo el proceso: diseño de la base de datos, desarrollo del backend y desarrollo del frontend. Esta experiencia me ha brindado la oportunidad de enfrentar desafíos constantes y aprender de manera continua.",
    ExperienceDate2: "MAR 2023 - JUN 2023",
    ExperienceTitle2: "Desarrollador Fullstack (VUE & .NET) @ Comanet",
    ExperienceBody2:
      "En Comanet, desempeñé el rol de desarrollador fullstack. Fue un nuevo desafío, ya que me enfrenté a un stack tecnológico que desconocía, con tecnologías como Vue y .NET. Después de apenas unas semanas, logré dominar ambas tecnologías y comencé a trabajar de manera autónoma en el desarrollo de una webapp destinada a eventos de carreras. Esta aplicación abarcaba diversas funcionalidades, como la gestión de inscripciones, pagos y participantes, entre otras. Mi experiencia en Comanet no solo me permitió adquirir nuevas habilidades, sino también desarrollar la capacidad de adaptarme rápidamente a entornos tecnológicos cambiantes.",
    ExperienceDate3: "DIC 2022 - MAR 2023",
    ExperienceTitle3: "Desarrollador Fullstack Freelance",
    ExperienceBody3:
      "Mi primera experiencia tanto laboral como freelance. Estuve desarrollando soluciónes tecnicas para distintos clientes, desde una web para el seguimiento de pedidos, hasta una REST API para una aplicación de inversiónes con integración de distintos métodos de pago. Durante esta etapa pude poner en práctica mis conocimientos de desarrollo web, y aprender a trabajar con clientes, analizando sus necesidades y ofreciendo soluciones adaptadas.",
    Stack: "Stack tecnológico",
    StackSubtitle: "Las tecnologías que uso en mi día a día 🧩",
    Languages: "Lenguajes de programación",
    Frameworks: "Frameworks y Librerías",
    Software: "Software y Aplicaciones",
    Cloud: "Servicios en la nube",
    Projects: "Mis proyectos personales",
    ProjectsSubtitle: "Algunos de los que he podido acabar... 🙄",
    ProjectTitle1: "Tech Blog",
    ProjectBody1:
      "Mi blog de tecnología, donde escribo sobre temas como desarrollo web, programación, tecnología, etc. Está construido con Next.js, TailwindCSS y Shadcn/ui. Para la gestión de contenidos uso la API de Sanity.io, que me permite crear un CMS headless y escribir mis artículos desde cualquier lugar sin tener que tocar nada de código.",
    ProjectTitle2: "Clon Airbnb",
    ProjectBody2:
      "Un clon detallado de la web Airbnb. Construido con Next.js sobre la versión 13 (App dir) con páginas dinámicas y otras estáticas. La autenticación se realiza a través de NextAuth.js conectada a una base de datos MongoDB.",
    ProjectTitle3: "Clon Spotify",
    ProjectBody3:
      "Un clon del famoso Spotify. Construido sobre Next.js 12 (Pages dir) y TailwindCSS. La autenticación, la base de datos y el almacenamiento de imágenes/canciones se realizan a través de Supabase.",
    ProjectTitle4: "Rentacar",
    ProjectBody4:
      "Web de alquiler de coches. Una web estática, sin mucha funcionalidad, pero con un diseño muy cuidado. Construida con Next.js y TailwindCSS.",
    WebBuild: "Web construida con",
    And: "y",
    Deployed: "Desplegada en",
    DownloadCV: "Descargar CV",
    Contact: "Contactar",
    MeDescription:
      "Apasionado de la teconología y el mundo del desarrollo. Me encanta aprender y transformar ideas en realidades.",
  },
  en: {
    Intro: "Hi, I'm",
    Role: "Fullstack Developer",
    Location: "Murcia, Spain.",
    WorkStatus: "Open To Work",
    About: "A bit about me",
    AboutSubtitle:
      "How I got into the world of development and my plans for the future. 👇",
  },
} as const;

export const defaultLang = "es";
