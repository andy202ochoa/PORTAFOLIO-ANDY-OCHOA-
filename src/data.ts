// ============================================================
//  TODO LO QUE APARECE EN EL PORTAFOLIO SE EDITA AQUÍ
// ============================================================

export const perfil = {
  nombre: 'Andy Ochoa',
  rol: 'Desarrollador Full Stack Junior',
  ubicacion: 'Quito, Ecuador',
  frase:
    'Construyo aplicaciones web completas: desde la API y la base de datos hasta la interfaz, con pruebas automatizadas y despliegue en la nube.',
  sobreMi: [
    'Me formé como Full Stack Developer en Henry (800 horas), donde desarrollé proyectos con React, TypeScript, Node.js, Express, PostgreSQL y Firebase, trabajando con metodologías ágiles y en equipo.',
    'Me interesa especialmente el backend y la integración de IA: construí un servidor MCP que conecta un agente de IA con la API de GitHub y un agente que consulta datos de una billetera digital.',
    'Busco mi primera oportunidad como desarrollador para seguir aprendiendo y aportar en un equipo real.',
  ],
  email: 'andy202ochoa@gmail.com',
  github: 'https://github.com/andy202ochoa',
  linkedin: 'https://www.linkedin.com/in/andy-ochoa-7661a6445/',
  // Si subes un PDF de tu CV SIN número de teléfono a public/cv.pdf, pon aquí 'cv.pdf'
  cv: '',
}

export type Proyecto = {
  titulo: string
  etiqueta: string
  descripcion: string
  puntos: string[]
  tecnologias: string[]
  imagen: string // captura en public/proyectos/
  demo?: string
  codigo?: string
  codigoTexto?: string // texto del botón de código (por defecto 'Código')
  codigoExtra?: { texto: string; url: string }
}

export const proyectos: Proyecto[] = [
  {
    titulo: 'TaskFlow',
    etiqueta: 'Full Stack · React',
    descripcion:
      'App de tareas y notas con autenticación y datos aislados por usuario en la nube.',
    puntos: [
      'Login con correo (con verificación) y con Google mediante Firebase Auth.',
      'Firestore con reglas de seguridad: cada usuario solo ve sus datos.',
      'Correo de confirmación con AWS SES a través de una Cloud Function.',
      'Pruebas de hooks y componentes con Vitest y React Testing Library.',
    ],
    tecnologias: ['React', 'TypeScript', 'Vite', 'Firebase', 'AWS SES', 'Vitest', 'Vercel'],
    imagen: 'proyectos/taskflow.png',
    demo: 'https://proyecto-m4-andy-ochoa.vercel.app/',
    codigo: 'https://github.com/andy202ochoa/ProyectoM4-AndyOchoa',
  },
  {
    titulo: 'NexaPay',
    etiqueta: 'Backend · Equipo de 4',
    descripcion:
      'Billetera digital para ingresar dinero, transferirlo a otros usuarios y convertirlo entre monedas (USD, COP, ARS, EUR).',
    puntos: [
      'Desarrollé la API de saldos, monedas, conversiones, transferencias y comisiones.',
      'Integré un asistente de IA con Google Gemini que responde sobre la cuenta.',
      'Pruebas de lógica y rutas con Vitest; documentación con Swagger.',
      'Desplegué mi copia en Vercel con base de datos PostgreSQL en Neon.',
    ],
    tecnologias: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Gemini', 'Vitest', 'Swagger', 'Vercel'],
    imagen: 'proyectos/nexapay.png',
    demo: 'https://nexapay-frontend-ten.vercel.app/',
    codigo: 'https://github.com/andy202ochoa/nexapay-backend',
    codigoTexto: 'Backend',
    codigoExtra: { texto: 'Frontend', url: 'https://github.com/andy202ochoa/nexapay-frontend' },
  },
  {
    titulo: 'GitHub AI Agent (MCP)',
    etiqueta: 'IA · Backend',
    descripcion:
      'Servidor MCP que permite a un agente de IA crear repositorios, issues y commits en GitHub, y listar repositorios e issues.',
    puntos: [
      '5 tools con formato y descripción para que la IA las ejecute.',
      'Validación de entradas con Zod; manejo de errores, reintentos y logging.',
      'Integración con la API de GitHub usando Octokit.',
      '58 pruebas automatizadas con Vitest.',
    ],
    tecnologias: ['TypeScript', 'Node.js', 'MCP', 'Zod', 'Octokit', 'Vitest'],
    imagen: 'proyectos/mcp.png',
    codigo: 'https://github.com/andy202ochoa/ProyectoM5-AndyOchoa',
  },
  {
    titulo: 'MiniBlog API',
    etiqueta: 'API REST',
    descripcion: 'API REST para un blog con gestión de autores y publicaciones.',
    puntos: [
      'CRUD completo de autores y posts, incluida la consulta de posts por autor.',
      'Arquitectura por capas: rutas → controladores → servicios.',
      'Consultas SQL parametrizadas y manejo de códigos HTTP.',
      'Pruebas con Jest y Supertest; documentación con Swagger UI.',
    ],
    tecnologias: ['Node.js', 'Express', 'PostgreSQL', 'Jest', 'Supertest', 'Swagger'],
    imagen: 'proyectos/miniblog.png',
    codigo: 'https://github.com/andy202ochoa/ProyectoM2-AndyOchoa',
  },
  {
    titulo: 'Chat con IA',
    etiqueta: 'SPA · IA',
    descripcion: 'SPA para conversar con tu personaje favorito usando Google Gemini.',
    puntos: [
      'Navegación por rutas internas sin recargar la página, en JavaScript puro.',
      'Backend serverless en Vercel que protege la API key.',
      'Pruebas del backend y del enrutador.',
    ],
    tecnologias: ['JavaScript', 'HTML', 'CSS', 'Gemini', 'Serverless', 'Vercel'],
    imagen: 'proyectos/chat-ia.png',
    // Pega aquí el enlace de tu demo en Vercel, por ejemplo: 'https://proyecto-m3-....vercel.app/'
    demo: 'https://proyecto-m3-andy-ochoa-gntu.vercel.app/chat',
    codigo: 'https://github.com/andy202ochoa/ProyectoM3-AndyOchoa',
  },
  {
    titulo: 'Generador de Paletas',
    etiqueta: 'Frontend',
    descripcion:
      'Genera paletas de 6 a 9 colores en formato HSL o HEX y copia los códigos con un clic.',
    puntos: [
      'Manipulación del DOM y eventos en JavaScript puro.',
      'Diseño responsive con Flexbox, Grid y media queries.',
    ],
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    imagen: 'proyectos/paleta.png',
    demo: 'https://andy202ochoa.github.io/ProyectoM1-AndyOchoa/',
    codigo: 'https://github.com/andy202ochoa/ProyectoM1-AndyOchoa',
  },
]

export const habilidades: { grupo: string; items: string[] }[] = [
  { grupo: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'] },
  { grupo: 'Backend', items: ['Node.js', 'Express', 'API REST', 'Zod', 'Octokit', 'MCP'] },
  { grupo: 'Bases de datos', items: ['PostgreSQL', 'Firestore'] },
  { grupo: 'Testing', items: ['Vitest', 'Jest', 'Supertest', 'React Testing Library'] },
  {
    grupo: 'Cloud y herramientas',
    items: ['Firebase', 'AWS', 'Vercel', 'Railway', 'Git / GitHub', 'Postman', 'Swagger'],
  },
  { grupo: 'Metodologías', items: ['Scrum', 'Kanban'] },
]

export const experiencias = [
  {
    titulo: 'Global Game Jam',
    fecha: 'feb. 2023',
    texto: 'Creé un videojuego en equipo en 48 horas con Godot y GDScript.',
  },
  {
    titulo: 'Chaski Bots 9',
    fecha: 'nov. 2025',
    texto: 'Construí en equipo un robot de fútbol desde cero, programado con Arduino Nano (C/C++).',
  },
]

export const formacion = [
  { titulo: 'Full Stack Web Developer', lugar: 'Henry · 800 horas', fecha: '2026' },
  { titulo: 'Operador de Computadoras y Multimedia', lugar: 'DCA & Sistemas · 60 horas', fecha: '2025' },
]
