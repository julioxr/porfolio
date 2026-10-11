export type Service = {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  forWho: string[];
  examples: string[];
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  whatsappMessage: string;
};

export const services: Service[] = [
  {
    slug: "capacitacion",
    name: "Capacitación en IA",
    short:
      "Aprendé a usar ChatGPT, Claude y otras herramientas en tu trabajo diario, con ejemplos de tu rubro.",
    title: "Capacitación en IA para pymes y profesionales",
    description:
      "Workshops y clases prácticas para aprender a usar ChatGPT, Claude y otras herramientas de IA en tu trabajo diario. En español, sin jerga técnica.",
    keywords: [
      "capacitación ChatGPT",
      "curso IA para empresas",
      "workshop inteligencia artificial",
      "aprender a usar IA",
    ],
    intro:
      "Mucha gente ya probó ChatGPT, pero lo usa como un buscador más. En una capacitación practicamos con tus propias tareas (mails, presupuestos, informes, planillas) hasta que la IA te ahorre tiempo de verdad.",
    forWho: [
      "Dueños de pymes que quieren que su equipo trabaje más rápido",
      "Profesionales independientes que quieren dejar de perder tiempo en tareas repetitivas",
      "Equipos chicos que necesitan criterios claros para usar IA sin errores ni riesgos",
    ],
    examples: [
      "Redactar y responder mails y propuestas en minutos",
      "Resumir documentos, reuniones y planillas largas",
      "Armar prompts reutilizables para las tareas de todos los días",
      "Saber cuándo confiar en la IA y cuándo verificar",
    ],
    steps: [
      { title: "Charla inicial", text: "Me contás qué hacés y qué tareas te consumen más tiempo." },
      { title: "Clase práctica", text: "Trabajamos con ejemplos de tu rubro, no con teoría genérica." },
      { title: "Material y seguimiento", text: "Te dejo guías y plantillas para seguir aplicándolo solo." },
    ],
    faqs: [
      {
        q: "¿Necesito saber de tecnología?",
        a: "No. Parto de cero y uso un lenguaje simple. Lo importante es que traigas tus tareas reales.",
      },
      {
        q: "¿Es individual o para equipos?",
        a: "Las dos cosas. Se puede armar una sesión individual o un taller para todo el equipo.",
      },
      {
        q: "¿Es presencial o virtual?",
        a: "Se puede coordinar de forma virtual. Si estás cerca, lo vemos.",
      },
    ],
    whatsappMessage: "Hola Julio, quiero consultar por una capacitación en IA.",
  },
  {
    slug: "automatizacion",
    name: "Automatización de procesos",
    short:
      "Que las tareas repetitivas se hagan solas: planillas, mails, avisos, cargas de datos.",
    title: "Automatización de procesos con IA",
    description:
      "Automatizo tareas repetitivas de tu negocio con IA: planillas, mails, avisos y cargas de datos. Menos trabajo manual, menos errores.",
    keywords: [
      "automatizar procesos con IA",
      "automatización para pymes",
      "automatizar tareas repetitivas",
      "automatización sin código",
    ],
    intro:
      "Si copiás datos de un lugar a otro, mandás los mismos mails todos los días o armás el mismo informe cada semana, eso se puede automatizar. Lo armo, lo pruebo a fondo y te lo dejo funcionando.",
    forWho: [
      "Negocios con tareas administrativas repetitivas",
      "Profesionales que pierden horas en planillas, mails y cargas manuales",
      "Equipos que usan varias herramientas que no se hablan entre sí",
    ],
    examples: [
      "Pasar datos de formularios o mails a una planilla automáticamente",
      "Enviar recordatorios y avisos a clientes sin hacerlo a mano",
      "Clasificar y resumir consultas entrantes con IA",
      "Generar informes periódicos de forma automática",
    ],
    steps: [
      {
        title: "Relevamiento",
        text: "Identificamos qué tarea conviene automatizar primero y cuánto tiempo ahorra.",
      },
      {
        title: "Construcción y pruebas",
        text: "Lo armo y lo pruebo con casos reales y casos raros antes de entregarlo.",
      },
      {
        title: "Entrega y ajustes",
        text: "Te explico cómo funciona, lo dejamos andando y corregimos lo que haga falta.",
      },
    ],
    faqs: [
      {
        q: "¿Qué herramientas usás?",
        a: "Elijo según tu caso: herramientas de automatización sin código o desarrollo a medida, y modelos de IA cuando aportan algo.",
      },
      {
        q: "¿Qué pasa si algo falla?",
        a: "Pruebo cada automatización antes de entregarla y agrego avisos de error. Vengo del mundo del testing (QA).",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Depende del proceso. Contame qué querés automatizar y te paso una propuesta clara.",
      },
    ],
    whatsappMessage: "Hola Julio, quiero consultar por automatizar un proceso de mi negocio.",
  },
  {
    slug: "asistentes-chatbots",
    name: "Asistentes y chatbots a medida",
    short:
      "Un asistente que responde consultas frecuentes o ayuda a tu equipo, con la información de tu negocio.",
    title: "Asistentes y chatbots a medida para tu negocio",
    description:
      "Asistentes de IA y chatbots para WhatsApp, web o uso interno, armados con la información de tu negocio. Atendé consultas frecuentes sin estar pendiente.",
    keywords: [
      "chatbot WhatsApp para pymes",
      "asistente IA a medida",
      "chatbot con IA",
      "bot de atención al cliente",
    ],
    intro:
      "Un asistente bien armado responde las preguntas de siempre (precios, horarios, requisitos, estado de un pedido) y te deja a vos lo que realmente requiere una persona.",
    forWho: [
      "Negocios que reciben las mismas consultas todos los días",
      "Equipos que necesitan encontrar rápido información interna",
      "Profesionales que quieren ofrecer atención fuera de horario",
    ],
    examples: [
      "Chatbot que responde consultas frecuentes con la información de tu negocio",
      "Asistente interno que busca en documentos y procedimientos",
      "Derivación a una persona cuando la consulta lo necesita",
      "Integración con planillas, CRM o agenda",
    ],
    steps: [
      {
        title: "Definir alcance",
        text: "Qué debe responder el asistente y qué no, y dónde va a vivir (web, WhatsApp, interno).",
      },
      {
        title: "Armado y pruebas",
        text: "Lo configuro con tu información y lo pruebo con preguntas reales y preguntas trampa.",
      },
      {
        title: "Puesta en marcha",
        text: "Lo publicamos, lo medimos las primeras semanas y lo afinamos.",
      },
    ],
    faqs: [
      {
        q: "¿Puede equivocarse?",
        a: "Sí, cualquier sistema de IA puede. Por eso se limita a la información que le das, se prueba bastante y deriva a una persona cuando hay dudas.",
      },
      {
        q: "¿Funciona en WhatsApp?",
        a: "Se puede integrar con WhatsApp, según los requisitos de la plataforma. Lo vemos en el relevamiento.",
      },
      {
        q: "¿Qué pasa con los datos de mis clientes?",
        a: "Defino qué información se comparte con el modelo y cuál no. Lo acordamos antes de empezar.",
      },
    ],
    whatsappMessage: "Hola Julio, quiero consultar por un asistente o chatbot para mi negocio.",
  },
  {
    slug: "consultoria",
    name: "Consultoría y diagnóstico",
    short:
      "Revisamos tu forma de trabajar y definimos qué conviene automatizar primero, con un plan concreto.",
    title: "Consultoría y diagnóstico de IA para tu negocio",
    description:
      "Diagnóstico de tus procesos para saber dónde la IA y la automatización te ahorran más tiempo. Plan claro y priorizado.",
    keywords: [
      "consultoría IA pymes",
      "diagnóstico de procesos",
      "cómo aplicar IA en mi negocio",
      "consultor inteligencia artificial",
    ],
    intro:
      "No todo conviene automatizarlo. Antes de gastar tiempo o plata, mapeamos cómo trabajás, medimos qué tareas pesan más y armamos un plan con prioridades, costos y riesgos.",
    forWho: [
      "Quienes saben que la IA puede ayudar pero no saben por dónde empezar",
      "Negocios que ya probaron herramientas sueltas sin resultados claros",
      "Quienes quieren una segunda opinión antes de contratar o comprar algo",
    ],
    examples: [
      "Mapa de tus procesos y de dónde se va el tiempo",
      "Lista priorizada de qué automatizar y qué no",
      "Estimación de esfuerzo y ahorro para cada propuesta",
      "Recomendación honesta, incluso si la respuesta es «esto no lo necesitás»",
    ],
    steps: [
      { title: "Entrevista", text: "Una charla para entender tu negocio y tus tareas." },
      {
        title: "Análisis",
        text: "Reviso procesos y herramientas, y detecto oportunidades y riesgos.",
      },
      {
        title: "Plan",
        text: "Te entrego un plan priorizado que podés ejecutar conmigo o por tu cuenta.",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto dura un diagnóstico?",
        a: "Depende del tamaño del negocio. Se define en la primera charla.",
      },
      {
        q: "¿Tengo que contratar la implementación?",
        a: "No. El plan es tuyo y podés ejecutarlo con quien quieras.",
      },
      {
        q: "¿Cómo arrancamos?",
        a: "Escribime por WhatsApp y vemos si puedo ayudarte antes de avanzar con nada.",
      },
    ],
    whatsappMessage: "Hola Julio, quiero consultar por un diagnóstico de IA para mi negocio.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
