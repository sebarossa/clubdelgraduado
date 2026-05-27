// ============================================================
// Datos de campaña — Club del Graduado / Integración Graduados
// UTN FRBA · Elecciones 2026 · 2-jun-2026
// ============================================================

export const ELECTION_DATE = "2026-06-02T08:00:00-03:00";

// ----- Propuestas (5 ejes, idénticos para todos los consejos) -----
export const propuestas = [
  {
    n: "01",
    color: "violet",
    title: "Formación continua",
    short:
      "Acompañar a graduados y graduadas durante toda su vida profesional con capacitaciones, posgrados y beneficios.",
    details: [
      "Programas en IA, Industria 4.0, transformación digital, BIM y gestión de proyectos.",
      "Capacitaciones específicas por especialidad de ingeniería y carreras tecnológicas.",
      "Convenios y beneficios en posgrados, especializaciones, certificaciones, idiomas y software técnico.",
      "Bolsa de trabajo federal UTN para fortalecer la inserción laboral.",
      "Mentorías, networking y encuentros técnico-profesionales.",
    ],
  },
  {
    n: "02",
    color: "orange",
    title: "Comunidad y red federal",
    short:
      "Construir una verdadera comunidad de graduados/as UTN con sentido de pertenencia y vínculo federal.",
    details: [
      "Vinculación entre graduados/as de todas las Facultades Regionales.",
      "Espacios de participación y escucha activa del claustro.",
      "Actividades académicas, profesionales y sociales con la Universidad.",
      "Red federal de intercambio de experiencias y oportunidades.",
      "Mentorías entre graduados/as con experiencia y jóvenes profesionales.",
    ],
  },
  {
    n: "03",
    color: "default",
    title: "Ciencia, tecnología e innovación",
    short:
      "Una UTN protagonista del desarrollo tecnológico, productivo y de la soberanía tecnológica del país.",
    details: [
      "Participación de graduados/as en proyectos de desarrollo tecnológico y social (PDTS).",
      "Vinculación Universidad — sector productivo — organismos científico-técnicos.",
      "Defensa del sistema científico-tecnológico nacional.",
      "Innovación, investigación y transferencia tecnológica con graduados/as.",
      "Difusión y debate sobre el impacto territorial de la ingeniería.",
    ],
  },
  {
    n: "04",
    color: "magenta",
    title: "Universidad pública y transparente",
    short:
      "Gobierno universitario participativo, federal, plural y con renovación democrática.",
    details: [
      "Defensa de la educación pública, gratuita y de excelencia.",
      "Gestión transparente y participativa en todos los ámbitos.",
      "Participación directa de graduados y graduadas.",
      "Modernización institucional y transparencia en el uso de recursos.",
      "Reforma integral del Estatuto Universitario.",
      "Límites a las reelecciones indefinidas.",
    ],
  },
  {
    n: "05",
    color: "default",
    title: "Inclusión y accesibilidad",
    short:
      "Una Universidad más inclusiva, accesible y comprometida con los derechos humanos.",
    details: [
      "Políticas institucionales de inclusión y accesibilidad.",
      "Igualdad de oportunidades para graduados y graduadas.",
      "Ambientes académicos y laborales libres de violencia y discriminación.",
      "Cumplimiento de normativas de accesibilidad y discapacidad.",
      "Perspectiva de género y accesibilidad en las políticas universitarias.",
    ],
  },
];

// ----- Consejo Directivo FRBA -----
export const consejoDirectivo = [
  { n: 1,  name: "Débora García Cuniglio",            spec: "Sistemas",   foto: "/assets/fotos/directivo-02.jpg" },
  { n: 2,  name: "Marcos Della Pittima",              spec: "Sistemas",   foto: "/assets/fotos/directivo-03.jpg" },
  { n: 3,  name: "Marcela Adriana Saldivia",          spec: "Textil",     foto: "/assets/fotos/directivo-04.jpg" },
  { n: 4,  name: "Mónica Scardigli",                  spec: "Posgrado",   foto: "/assets/fotos/directivo-05.jpg" },
  { n: 5,  name: "Tomás Uriel De Bella Abreu Gozzi",  spec: "Industrial", foto: "/assets/fotos/directivo-06.jpg" },
  { n: 6,  name: "Silvio Bressan",                    spec: "Civil",      foto: "/assets/fotos/directivo-07.jpg" },
  { n: 7,  name: "Valeria Espíndola",                 spec: "Sistemas",   foto: "/assets/fotos/directivo-08.jpg" },
  { n: 8,  name: "José Luis Rodríguez Lamas",         spec: "Eléctrica",  foto: "/assets/fotos/directivo-09.jpg" },
  { n: 9,  name: "María del Carmen Gutiérrez",        spec: "Química",    foto: "/assets/fotos/directivo-10.jpg" },
  { n: 10, name: "Christian Barindelli",              spec: "Industrial",  foto: "/assets/fotos/directivo-11.jpg" },
];

// ----- Consejos Departamentales (2 titulares + 2 suplentes) -----
const dept = (id, nombre, corto, titulares, suplentes, fotos = []) => ({
  id, nombre, corto,
  titulares: titulares.map((name, i) => ({ n: i + 1, name, note: "Titular", foto: fotos[i] || null })),
  suplentes: suplentes.map((name, i) => ({ n: i + 1, name, note: "Suplente", foto: fotos[i + 2] || null })),
});

export const departamentos = [
  dept("civil", "Ingeniería Civil", "Civil",
    ["Ángel Gabriel Cano", "María Delfina Lopez Azcurra"],
    ["Axel Ignacio Colantuono", "Juan José Burza"],
    ["/assets/fotos/civil-01.jpg", "/assets/fotos/civil-02.jpg", "/assets/fotos/civil-03.jpg", "/assets/fotos/civil-04.jpg"]),

  dept("electrica", "Ingeniería en Energía Eléctrica", "Eléctrica",
    ["Luciano Ariel Herrera", "Joaquín Quispe"],
    ["Damián Alberto Daneri", "Ricardo Alejandro Pauro"],
    ["/assets/fotos/electrica-01.jpg", "/assets/fotos/electrica-02.jpg", "/assets/fotos/electrica-03.jpg", "/assets/fotos/electrica-04.jpg"]),

  dept("electronica", "Ingeniería Electrónica", "Electrónica",
    ["María Fernanda Locarnini", "Horacio Espino"],
    ["Nicolás Pablo Campitelli", "Daniel Pedro Pulera"],
    ["/assets/fotos/electronica-01.jpg", "/assets/fotos/electronica-02.jpg", "/assets/fotos/electronica-03.jpg", "/assets/fotos/electronica-04.jpg"]),

  dept("industrial", "Ingeniería Industrial", "Industrial",
    ["Agustina Calderón", "Mariano Sebastián Giusto"],
    ["Julieta Ursino", "Walter Hugo Posse"],
    ["/assets/fotos/industrial-01.jpg", "/assets/fotos/industrial-02.jpg", "/assets/fotos/industrial-03.jpg", "/assets/fotos/industrial-04.jpg"]),

  dept("mecanica", "Ingeniería Mecánica", "Mecánica",
    ["Fernando Ariel Vidal", "Ayelén Daiana Merodo"],
    ["Ioannis Manuel Rubio", "Sergio Daniel Salomone"],
    ["/assets/fotos/mecanica-01.jpg", "/assets/fotos/mecanica-02.jpg", "/assets/fotos/mecanica-03.jpg", "/assets/fotos/mecanica-04.jpg"]),

  dept("naval", "Ingeniería Naval", "Naval",
    ["Juan Pablo Governatori", "Raúl Mario Ramis"],
    ["Lucas Nahuel Garcia", "Fernando Raúl Ladino"],
    ["/assets/fotos/naval-01.jpg", "/assets/fotos/naval-02.jpg", "/assets/fotos/naval-03.jpg", "/assets/fotos/naval-04.jpg"]),

  dept("quimica", "Ingeniería Química", "Química",
    ["Rosa María Sánchez", "María Eugenia Valenzuela"],
    ["Gabriela Fabiana Miguelez", "Marcela Sandra De Luca"],
    ["/assets/fotos/quimica-01.jpg", "/assets/fotos/quimica-02.jpg", "/assets/fotos/quimica-03.jpg", "/assets/fotos/quimica-04.jpg"]),

  dept("sistemas", "Ingeniería en Sistemas de Información", "Sistemas",
    ["Paula Romina Franzo", "Juan José D'Alessandro"],
    ["Silvina Laura Gonzalez Lucas", "Marcos Alberto Della Pittima"],
    ["/assets/fotos/sistemas-01.jpg", "/assets/fotos/sistemas-02.jpg", "/assets/fotos/sistemas-03.jpg", "/assets/fotos/sistemas-04.jpg"]),

  dept("textil", "Ingeniería Textil", "Textil",
    ["Gonzalo Tomás Pulka", "Soledad Elena Conde Chuquimia"],
    ["Esteban Emmanuel Agostinelli", "Valentina Celeste Dieleke"],
    ["/assets/fotos/textil-01.jpg", "/assets/fotos/textil-02.jpg", "/assets/fotos/textil-03.jpg", "/assets/fotos/textil-04.jpg"]),

  dept("basicas", "Ciencias Básicas", "C. Básicas",
    ["Andrea Carina Mangone", "Jorge Eduardo Podesta"],
    ["Alejandro Gabriel Scomparin", "María Laura Orfano"],
    ["/assets/fotos/basicas-01.jpg", "/assets/fotos/basicas-02.jpg", "/assets/fotos/basicas-03.jpg", "/assets/fotos/basicas-04.jpg"]),
];

// ----- Consejo Superior — Integración Graduados (lista nacional) -----
export const consejoSuperior = [
  { n: 1,  name: "Ladino",         spec: "Ing. Naval",                                            city: "Buenos Aires",  foto: "/assets/fotos/superior-01.png" },
  { n: 2,  name: "Sartor",         spec: "Ing. en Construcciones · Magíster en Gestión Ambiental", city: "Bahía Blanca", foto: "/assets/fotos/superior-02.png" },
  { n: 3,  name: "Molina",         spec: "Ing. Eléctrica",                                        city: "Tucumán",       foto: "/assets/fotos/superior-03.png" },
  { n: 4,  name: "Zamboni",        spec: "Ing. Civil",                                            city: "Paraná",        foto: "/assets/fotos/superior-04.png" },
  { n: 5,  name: "Liberal",        spec: "Sistemas de Información",                               city: "Mendoza",       foto: "/assets/fotos/superior-05.png" },
  { n: 6,  name: "Gogniat",        spec: "Ing. Naval",                                            city: "Mar del Plata", foto: "/assets/fotos/superior-06.png" },
  { n: 7,  name: "Vallejos",       spec: "Ing. Industrial",                                       city: "Pacheco",       foto: "/assets/fotos/superior-07.png" },
  { n: 8,  name: "Patricia López", spec: "Ing. en Construcciones",                                city: "Paraná",        foto: "/assets/fotos/superior-08.png" },
  { n: 9,  name: "Iznardo",        spec: "Ing. en Sistemas",                                      city: "Resistencia",   foto: "/assets/fotos/superior-09.png" },
  { n: 10, name: "Martínez",       spec: "Ing. Industrial",                                       city: "San Rafael",    foto: "/assets/fotos/superior-10.png" },
];
