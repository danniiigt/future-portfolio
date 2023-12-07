/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot, s as spreadAttributes } from '../astro_eaa3e320.mjs';

const $$Astro$f = createAstro();
const $$NavigationMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$NavigationMenu;
  return renderTemplate`${maybeRenderHead()}<nav class="z-40 border border-border bg-background-light/40 sticky top-0 sm:h-[100dvh] border-x-0 border-t-0 sm:border-b-0 sm:border-r backdrop-blur-lg flex flex-col sm:items-center p-4 justify-between"> <div class="w-full flex items-center justify-between sm:justify-center text-primary"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path> </svg> </div> <div class="flex-auto"></div> <nav class="hidden sm:flex flex-col sm:items-center gap-5 sm:gap-3"> <a href="#about" aria-label="About" class="sm:w-9 sm:h-9 rounded sm:hover:bg-background-opposite/10 flex items-center sm:justify-center gap-3 sm:text-dimmed sm:hover:text-text-light transition-colors sm:aria-[current=page]:bg-background-opposite sm:aria-[current=page]:text-text-opposite"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-user"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg><span class="sm:hidden">About</span></a><a href="#experience" aria-label="Experience" class="sm:w-9 sm:h-9 rounded sm:hover:bg-background-opposite/10 flex items-center sm:justify-center gap-3 sm:text-dimmed sm:hover:text-text-light transition-colors sm:aria-[current=page]:bg-background-opposite sm:aria-[current=page]:text-text-opposite"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-briefcase"> <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path> <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path> <path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path> </svg> <span class="sm:hidden">Experience</span></a><a href="#stack" aria-label="Stack" class="sm:w-9 sm:h-9 rounded sm:hover:bg-background-opposite/10 flex items-center sm:justify-center gap-3 sm:text-dimmed sm:hover:text-text-light transition-colors sm:aria-[current=page]:bg-background-opposite sm:aria-[current=page]:text-text-opposite"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-stack-2"><path d="M12 4l-8 4l8 4l8 -4l-8 -4"></path><path d="M4 12l8 4l8 -4"></path><path d="M4 16l8 4l8 -4"></path></svg><span class="sm:hidden">Stack</span></a><a href="#projects" aria-label="Projects" class="sm:w-9 sm:h-9 rounded sm:hover:bg-background-opposite/10 flex items-center sm:justify-center gap-3 sm:text-dimmed sm:hover:text-text-light transition-colors sm:aria-[current=page]:bg-background-opposite sm:aria-[current=page]:text-text-opposite"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg> </a> </nav> <div class="flex-auto"></div> </nav> `;
}, "/home/danniiigt/programacion/my-portfolio/src/components/NavigationMenu.astro", void 0);

const $$Astro$e = createAstro();
const $$Presentation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Presentation;
  return renderTemplate`${maybeRenderHead()}<aside class="relative z-40 border border-border bg-background-light/40 lg:sticky lg:top-0 lg:w-[320px] lg:h-[100dvh] lg:flex-shrink-0 border-x-0 border-b-0 lg:border-t-0 lg:border-r flex flex-col items-center gap-9 px-5 py-9 text-center"> <img src="./yo.jpg" alt="Mi foto de perfil" class="rounded-full h-40 aspect-square object-cover object-center brightness-90"> <div> <h1 class="font-bold text-text-light">Daniel González Tormo</h1> <p>Desarrollador Fullstack</p> </div> <div class="flex items-center gap-6"> <a href="https://github.com/danniiigt" target="_blank" class="hover:text-text-light transition-all duration-150"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg> </a> <a href="https://www.linkedin.com/in/danielgonzaleztormo/" target="_blank" class="hover:text-text-light transition-all duration-150"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path> <rect width="4" height="12" x="2" y="9"></rect> <circle cx="4" cy="4" r="2"></circle> </svg> </a> </div> <p class="typography-2 text-dimmed mt-4">
Apasionado de la teconología y el mundo del desarrollo. Me encanta aprender
    y transformar ideas en realidades.
</p> <div class="flex-auto"></div> <div class="w-full flex flex-col gap-3"> <a class="w-full border border-border-light hover:border-border-extra-light bg-background-opposite/5 hover:bg-background-opposite/10 rounded py-2 cursor-pointer transition-all duration-150 flex items-center justify-center" href="/daniel-gonzalez-cv.pdf" download="Daniel Gonzalez Tormo CV"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 inline-block mr-2"> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path> <polyline points="7 10 12 15 17 10"></polyline> <line x1="12" x2="12" y1="15" y2="3"></line> </svg>
Descargar CV
</a> <a class="w-full border border-border-light hover:border-border-extra-light bg-background-opposite text-text-opposite hover:bg-background-opposite/75 rounded py-2 cursor-pointer transition-all duration-150 flex items-center justify-center" href="mailto:danielgonzalezt13@gmail.com"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 inline-block mr-2"> <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> <path d="M19 16v6"></path> <path d="M16 19h6"></path> </svg>
Contactar
</a> </div> </aside>`;
}, "/home/danniiigt/programacion/my-portfolio/src/components/Presentation.astro", void 0);

const $$Astro$d = createAstro();
const $$WhiteBalls = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$WhiteBalls;
  return renderTemplate` ${maybeRenderHead()}<div class="fixed inset-0 z-10 flex pointer-events-none"> <div class="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full w-[250px] sm:w-[500px] aspect-square bg-gray-500/10"></div> <div class="absolute bottom-0 translate-y-1/2 left-0 -translate-x-1/2 rounded-full w-[250px] sm:w-[500px] aspect-square bg-gray-500/10"></div> <div class="absolute bottom-0 translate-y-1/2 right-0 translate-x-1/2 rounded-full w-[250px] sm:w-[500px] aspect-square bg-gray-500/10"></div> <div class="hidden lg:block absolute rounded-full w-[100px] aspect-square bg-base-8" style="top: -48px; left: 672px;"></div> <div class="absolute rounded-full w-[45px] sm:w-[40px] aspect-square bg-gray-400 top-[var(--mouse-y)] left-[var(--mouse-x)] -translate-y-1/2 -translate-x-1/2"></div> <div class="absolute inset-0 backdrop-blur-[100px] backdrop-saturate-200"></div> </div>`;
}, "/home/danniiigt/programacion/my-portfolio/src/components/WhiteBalls.astro", void 0);

const $$Astro$c = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate` <html id="html-tag"> <head><meta charset="UTF-8"><meta name="description" content="Apasionado de la teconología y el mundo del desarrollo. Me encanta aprender y transformar ideas en realidades."><meta name="title" content="Daniel González Tormo - Desarrollador Fullstack."><meta name="image" content="/captura-web.png"><meta name="og:description" content="Apasionado de la teconología y el mundo del desarrollo. Me encanta aprender y transformar ideas en realidades."><meta name="og:title" content="Daniel González Tormo - Desarrollador Fullstack"><meta name="og:url" content="https://www.danielgonzaleztormo.com/"><meta name="og:image:width" content="1030"><meta name="og:image:height" content="432"><meta name="og:image" content="/captura-web.png"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="min-h-[100dvh] bg-background flex flex-col sm:flex-row antialiased text-text"> ${renderComponent($$result, "WhiteBalls", $$WhiteBalls, {})} ${renderComponent($$result, "NavigationMenu", $$NavigationMenu, {})} <div class="relative z-20 flex-auto flex flex-col lg:flex-row-reverse"> <div class="w-full max-w-[800px] relative z-20 px-7 py-9 top-0 mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Presentation", $$Presentation, {})} </div> </body></html>`;
}, "/home/danniiigt/programacion/my-portfolio/src/layouts/Layout.astro", void 0);

const ui = {
  es: {
    Role: "Desarrollador Fullstack"
  },
  en: {
    Role: "Fullstack Developer"
  }
};
const defaultLang = "es";

function useTranslations(Astro) {
  const language = Astro?.params?.language || "es";
  return function t(key) {
    if (language in ui)
      return ui[language][key] || ui[defaultLang][key];
    return ui[defaultLang][key];
  };
}

const $$Astro$b = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Header;
  const t = useTranslations(Astro2);
  return renderTemplate`${maybeRenderHead()}<header class="flex flex-col md:flex-row-reverse items-center gap-5 md:mt-12"> <img alt="A wolf coding on a computer" src="https://kevinwolf.cr/_next/image?url=%2Fimages%2Fabout%2Fhero.png&w=384&q=75" height="300" width="300"> <div class="flex-auto flex flex-col gap-3"> <h1 class="text-6xl font-extrabold text-text-light text-center md:text-left">
¡Hola! Soy <span class="text-primary">Daniel Tormo</span> </h1> <div class="space-y-1"> <div class="flex justify-center md:justify-start items-center gap-x-2.5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block"> <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"></path> </svg> <p>${t("Role")}</p> </div> <div class="flex justify-center md:justify-start items-center gap-x-2.5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path> </svg> <p>Murcia, España.</p> </div> <div class="flex justify-center md:justify-start items-center gap-x-2.5"> <div class="w-5 h-5 flex items-center justify-center"> <span class="relative flex h-3.5 w-3.5"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span> <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary"></span> </span> </div> <p>Abierto a proyectos</p> </div> </div> </div> </header>`;
}, "/home/danniiigt/programacion/my-portfolio/src/components/LandingPage/Header.astro", void 0);

const $$Astro$a = createAstro();
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$AboutMe;
  return renderTemplate`${maybeRenderHead()}<section class="md:scroll-mt-16 flex flex-col gap-9 -mt-4" id="about"> <div> <h1 class="text-text-light text-3xl font-bold underline decoration-primary">
Acerca de mi
</h1> <p class="text-lg">
Como me adentré al mundo del desarrollo y mis planes de futuro. 👇
</p> </div> <div class="space-y-6"> <p>
A los 16 años, mientras cursaba el instituto, una chispa de aburrimiento encendió mi curiosidad y me impulsó a aventurarme en el fascinante mundo del desarrollo web. En busca de algo nuevo, decidí sumergirme en el aprendizaje y desarrollo, marcando así el inicio de mi viaje en este apasionante sector. Lo que comenzó como una manera de romper la monotonía se convirtió rápidamente en una pasión por crear, aprender y crecer en el universo del desarrollo web.
</p> <p>
Mi ambición y curiosidad me han llevado a poder aprender las tecnologías con las que hoy en dia desarrollo, en paralelo con cursar un grado superior de desarrollo de aplicaciones web donde también he cultivado habilidades colaborativas entre otras. Siempre he sido una persona inquieta que disfruta creando, aprendiendo y mejorando de manera autodidacta.
</p> <p>
Mi visión va más allá de mi propia carrera; estoy comprometido con contribuir al futuro del desarrollo, donde la colaboración, la sostenibilidad y la accesibilidad son pilares fundamentales. Veo la colaboración como la fuerza impulsora detrás de la innovación, la capacidad de trabajar codo a codo con colegas y comunidades para crear soluciones más impactantes y sólidas.
</p> <p>
Estoy emocionado por las oportunidades que el futuro del desarrollo nos presenta y estoy ansioso por ser parte de él.
</p> </div> </section>`;
}, "/home/danniiigt/programacion/my-portfolio/src/components/LandingPage/AboutMe.astro", void 0);

const $$Astro$9 = createAstro();
const $$ExperienceCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ExperienceCard;
  const { body, date, title, isLast, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(href ? "_blank" : "", "target")} rel="noopener noreferrer" class="group flex gap-5 lg:group-hover/list:opacity-50 lg:hover:!opacity-100 lg:transition-opacity"><div class="relative"> <div class="w-4 h-4 rounded-full bg-primary/50 group-hover:bg-primary lg:transition-colors"></div> ${!isLast && renderTemplate`<div class="absolute top-4 bottom-0 left-1/2 w-[1px] bg-border"></div>`} </div><div class="flex flex-col gap-4 pb-8"> <div class="flex flex-col gap-1"> <span class="h-4 flex items-center uppercase text-2 leading-[1] tracking-2 font-medium text-dimmed">${date}</span><h1 class="typography-3 font-medium text-text-light/90 group-hover:text-primary transition-colors"> ${title} </h1> </div><div class="text-dimmed [&>:first-child]:mt-0 typography-2"> <p class="mt-5"> ${body} </p> </div> </div></a>`;
}, "/home/danniiigt/programacion/my-portfolio/src/components/LandingPage/ExperienceCard.astro", void 0);

const $$Astro$8 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${maybeRenderHead()}<section class="md:scroll-mt-16 flex flex-col gap-9" id="experience"> <div> <h1 class="text-text-light text-3xl font-bold underline decoration-primary">
Mi experienca en el mundo tech
</h1> <p class="text-lg">
El paso por los diferentes proyectos y mi papel en cada uno 💻
</p> </div> <div class="flex flex-col group/list"> ${renderComponent($$result, "ExperienceCard", $$ExperienceCard, { "href": "https://www.papelaweb.com/", "date": "JUN 2023 - ACTUALIDAD", "title": "Desarrollador Fullstack (React.js & Node.js) @ Papel A Web", "body": "En este puesto, nuevamente desarrollo aplicaciones web de manera aut\xF3noma. Mi d\xEDa a d\xEDa consiste en analizar las necesidades del cliente/empresa y desarrollar una soluci\xF3n t\xE9cnica adaptada, abarcando todo el proceso: dise\xF1o de la base de datos, desarrollo del backend y desarrollo del frontend. Esta experiencia me ha brindado la oportunidad de enfrentar desaf\xEDos constantes y aprender de manera continua." })} ${renderComponent($$result, "ExperienceCard", $$ExperienceCard, { "href": "https://comanet.es/", "date": "MAR 2023 - JUN 2023", "title": "Desarrollador Fullstack (VUE & .NET) @ Comanet", "body": "En Comanet, desempe\xF1\xE9 el rol de desarrollador fullstack. Fue un nuevo desaf\xEDo, ya que me enfrent\xE9 a un stack tecnol\xF3gico que desconoc\xEDa, con tecnolog\xEDas como Vue y .NET. Despu\xE9s de apenas unas semanas, logr\xE9 dominar ambas tecnolog\xEDas y comenc\xE9 a trabajar de manera aut\xF3noma en el desarrollo de una webapp destinada a eventos de carreras. Esta aplicaci\xF3n abarcaba diversas funcionalidades, como la gesti\xF3n de inscripciones, pagos y participantes, entre otras. Mi experiencia en Comanet no solo me permiti\xF3 adquirir nuevas habilidades, sino tambi\xE9n desarrollar la capacidad de adaptarme r\xE1pidamente a entornos tecnol\xF3gicos cambiantes." })} ${renderComponent($$result, "ExperienceCard", $$ExperienceCard, { "date": "DIC 2022 - MAR 2023", "title": "Desarrollador Fullstack Freelance", "body": "Mi primera experiencia tanto laboral como freelance. Estuve desarrollando soluci\xF3nes tecnicas para distintos clientes, desde una web para el seguimiento de pedidos, hasta una REST API para una aplicaci\xF3n de inversi\xF3nes con integraci\xF3n de distintos m\xE9todos de pago. Durante esta etapa pude poner en pr\xE1ctica mis conocimientos de desarrollo web, y aprender a trabajar con clientes, analizando sus necesidades y ofreciendo soluciones adaptadas.", "isLast": true })} </div> </section>`;
}, "/home/danniiigt/programacion/my-portfolio/src/components/LandingPage/Experience.astro", void 0);

const $$Astro$7 = createAstro();
const $$Check = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Check;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"${spreadAttributes(props)}> <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path> </svg>`;
}, "/home/danniiigt/programacion/my-portfolio/src/icons/Check.astro", void 0);

const $$Astro$6 = createAstro();
const $$TechItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TechItem;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute("_blank", "target")} class="flex items-center gap-2 text-sm"> ${renderComponent($$result, "Check", $$Check, { "class": "w-4 h-4 text-primary" })} ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/danniiigt/programacion/my-portfolio/src/components/LandingPage/TechItem.astro", void 0);

const $$Astro$5 = createAstro();
const $$TechStack = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TechStack;
  return renderTemplate`${maybeRenderHead()}<section id="stack" class="md:scroll-mt-16 flex flex-col gap-9"> <div> <h1 class="text-text-light text-3xl font-bold underline decoration-primary">
Stack tecnológico
</h1> <p class="text-lg">Las tecnologías que uso en mi día a día 🧩</p> </div> <div class="flex flex-col gap-16"> <div> <h1 class="text-text-light text-xl mb-4">Lenguajes de programación</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"> ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://www.javascript.com/" }, { "default": ($$result2) => renderTemplate`JavaScript` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://www.typescriptlang.org/" }, { "default": ($$result2) => renderTemplate`Typescript` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://nodejs.org/" }, { "default": ($$result2) => renderTemplate`Node` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://developer.mozilla.org/en-US/docs/Web/HTML" }, { "default": ($$result2) => renderTemplate`
HTML5
` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://developer.mozilla.org/en-US/docs/Web/CSS" }, { "default": ($$result2) => renderTemplate`
CSS
` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://sass-lang.com/" }, { "default": ($$result2) => renderTemplate`SCSS` })} </div> </div> <div> <h1 class="text-text-light text-xl mb-4">Frameworks y Librerías</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"> ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://reactjs.org/" }, { "default": ($$result2) => renderTemplate`React.js` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://nextjs.org/" }, { "default": ($$result2) => renderTemplate`Next.js` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://astro.build/" }, { "default": ($$result2) => renderTemplate`Astro` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://tailwindcss.com/" }, { "default": ($$result2) => renderTemplate`Tailwind CSS` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://material-ui.com/" }, { "default": ($$result2) => renderTemplate`Material UI` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://ui.shadcn.com/" }, { "default": ($$result2) => renderTemplate`Shadcn/UI` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://www.prisma.io/" }, { "default": ($$result2) => renderTemplate`Prisma` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://prettier.io/" }, { "default": ($$result2) => renderTemplate`Prettier` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://eslint.org/" }, { "default": ($$result2) => renderTemplate`ESlint` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://vitejs.dev/" }, { "default": ($$result2) => renderTemplate`Vite` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://styled-components.com/" }, { "default": ($$result2) => renderTemplate`
styled-components
` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://expressjs.com/" }, { "default": ($$result2) => renderTemplate`Express.js` })} </div> </div> <div> <h1 class="text-text-light text-xl mb-4">Software y Aplicaciones</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"> ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://git-scm.com/" }, { "default": ($$result2) => renderTemplate`Git` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://www.docker.com/" }, { "default": ($$result2) => renderTemplate`Docker` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://www.postgresql.org/" }, { "default": ($$result2) => renderTemplate`Postgres` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://www.mysql.com/" }, { "default": ($$result2) => renderTemplate`MySQL` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://www.mongodb.com/" }, { "default": ($$result2) => renderTemplate`MongoDB` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://redis.io/" }, { "default": ($$result2) => renderTemplate`Redis` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://code.visualstudio.com/" }, { "default": ($$result2) => renderTemplate`VS Code` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://slack.com/" }, { "default": ($$result2) => renderTemplate`Slack` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://zoom.us/" }, { "default": ($$result2) => renderTemplate`Zoom` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://www.postman.com/" }, { "default": ($$result2) => renderTemplate`Postman` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://brave.com/" }, { "default": ($$result2) => renderTemplate`Brave` })} </div> </div> <div> <h1 class="text-text-light text-xl mb-4">Servicios en la nube</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"> ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://github.com/" }, { "default": ($$result2) => renderTemplate`Github` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://github.com/features/actions" }, { "default": ($$result2) => renderTemplate`
GH Actions
` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://vercel.com/" }, { "default": ($$result2) => renderTemplate`Vercel` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://render.com/" }, { "default": ($$result2) => renderTemplate`Render` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://supabase.com/" }, { "default": ($$result2) => renderTemplate`Supabase` })} ${renderComponent($$result, "TechItem", $$TechItem, { "href": "https://www.digitalocean.com/" }, { "default": ($$result2) => renderTemplate`Digital Ocean` })} </div> </div> </div> </section>`;
}, "/home/danniiigt/programacion/my-portfolio/src/components/LandingPage/TechStack.astro", void 0);

const $$Astro$4 = createAstro();
const $$ProjectItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProjectItem;
  const { title, description, image, imageAlt, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="my-4 relative flex flex-col sm:flex-row items-start gap-3 md:gap-5 lg:group-hover/list:opacity-50 lg:hover:!opacity-100 lg:transition-opacity group"> <div class="border border-border bg-background-opposite/5 rounded absolute -z-10 -inset-5 opacity-0 lg:group-hover:opacity-100 lg:transition-opacity"></div> <div class="relative flex-shrink-0 rounded border-2 border-border group-hover:border-border-extra-light transition-colors overflow-hidden"> <img${addAttribute(imageAlt, "alt")}${addAttribute(image, "src")} loading="lazy" decoding="async" data-nimg="1" class="group-hover:scale-110 transition-transform will-change-transform aspect-video object-cover object-top w-full sm:w-[175px]" style="color:transparent"> </div> <div> <a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="typography-3 font-medium text-text-light hover:text-primary transition-colors"> <div class="absolute -inset-5"></div> <h4> ${title} </h4> </a> <p class="typography-2 text-dimmed"> ${description} </p> </div> </div>`;
}, "/home/danniiigt/programacion/my-portfolio/src/components/LandingPage/ProjectItem.astro", void 0);

const $$Astro$3 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="md:scroll-mt-16 flex flex-col gap-9"> <div> <h1 class="text-text-light text-3xl font-bold underline decoration-primary">
Mis proyectos personales
</h1> <p class="text-lg">Algunos de los que he podido acabar... 🙄</p> </div> <div class="space-y-12 group/list"> ${renderComponent($$result, "ProjectItem", $$ProjectItem, { "title": "Tech Blog", "description": "Mi blog de tecnolog\xEDa, donde escribo sobre temas como desarrollo web, programaci\xF3n, tecnolog\xEDa, etc. Est\xE1 construido con Next.js, TailwindCSS y Shadcn/ui. Para la gesti\xF3n de contenidos uso la API de Sanity.io, que me permite crear un CMS headless y escribir mis art\xEDculos desde cualquier lugar sin tener que tocar nada de c\xF3digo.", "image": "/projects/tech-blog.jpg", "imageAlt": "Tech Blog", "href": "https://tech-blog-five-umber.vercel.app/" })} ${renderComponent($$result, "ProjectItem", $$ProjectItem, { "title": "Clon Airbnb", "description": "Un clon detallado de la web Airbnb. Construido con Next.js sobre la versi\xF3n 13 (App dir) con p\xE1ginas din\xE1micas y otras est\xE1ticas. La autenticaci\xF3n se realiza a trav\xE9s de NextAuth.js conectada a una base de datos MongoDB.", "image": "/projects/clon-airbnb.jpg", "imageAlt": "Clon Airbnb", "href": "https://airbnb-clone-five-lilac.vercel.app/" })} ${renderComponent($$result, "ProjectItem", $$ProjectItem, { "title": "Clon Spotify", "description": "Un clon del famoso Spotify. Construido sobre Next.js 12 (Pages dir) y TailwindCSS. La autenticaci\xF3n, la base de datos y el almacenamiento de im\xE1genes/canciones se realizan a trav\xE9s de Supabase.", "image": "/projects/clon-spotify.jpg", "imageAlt": "Clon Spotify", "href": "https://spotifree-iota.vercel.app/" })} ${renderComponent($$result, "ProjectItem", $$ProjectItem, { "title": "Rentacar", "description": "Web de alquiler de coches. Una web est\xE1tica, sin mucha funcionalidad, pero con un dise\xF1o muy cuidado. Construida con Next.js y TailwindCSS.", "image": "/projects/rentacar.jpg", "imageAlt": "Rentacar", "href": "https://rentacar-nu.vercel.app/" })} </div> </section>`;
}, "/home/danniiigt/programacion/my-portfolio/src/components/LandingPage/Projects.astro", void 0);

const $$Astro$2 = createAstro();
const $$LinkItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LinkItem;
  const { href, text, target = "_blank" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(target, "target")} class="flex items-center gap-x-1 text-text-light hover:text-primary"> ${text} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path> </svg> </a>`;
}, "/home/danniiigt/programacion/my-portfolio/src/components/LandingPage/LinkItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="-mt-14"> <hr class="border-border-light"> <div class="mt-8"> <p class="flex flex-wrap gap-x-1.5">
Web construida con ${renderComponent($$result, "LinkItem", $$LinkItem, { "href": "https://astro.build/", "text": "Astro" })} y
${renderComponent($$result, "LinkItem", $$LinkItem, { "href": "https://tailwindcss.com/", "text": "TailwindCSS." })}
Desplegada en ${renderComponent($$result, "LinkItem", $$LinkItem, { "text": "Vercel", "href": "https://vercel.com" })} </p> </div> </footer>`;
}, "/home/danniiigt/programacion/my-portfolio/src/components/LandingPage/Footer.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
function getStaticPaths() {
  return [
    { params: { language: "es" } },
    { params: { language: "en" } },
    { params: { language: void 0 } }
  ];
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Daniel Gonz\xE1lez Tormo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-24 sm:gap-36 selection:bg-primary/75 selection:text-white"> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "TechStack", $$TechStack, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "/home/danniiigt/programacion/my-portfolio/src/pages/[...language]/index.astro", void 0);

const $$file = "/home/danniiigt/programacion/my-portfolio/src/pages/[...language]/index.astro";
const $$url = "/[...language]";

export { $$Index as default, $$file as file, getStaticPaths, prerender, $$url as url };
