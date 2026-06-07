'use client'
import { useState } from 'react'

// ─── CONTENT ──────────────────────────────────────────────────────────────────

const content = {
  es: {
    nav: {
      links: ['Resumen', 'Producto', 'Mercado', 'Modelo', 'Finanzas', 'Competencia', 'Equipo', 'Roadmap'],
      langLabel: 'EN',
    },
    cover: {
      label: 'Business Plan · Junio 2026',
      title: 'El agente de IA\npara tu negocio.',
      sub: 'Pepino AI conecta inteligencia artificial a tu WhatsApp en minutos.\nSin código. Sin fricciones. En verde.',
      pill1: 'SaaS · IA · WhatsApp',
      pill2: 'LATAM + España',
      pill3: 'B2B',
      scrollHint: 'Scroll para explorar',
    },
    exec: {
      label: '01',
      section: 'Resumen Ejecutivo',
      title: 'La oportunidad.',
      body: [
        'WhatsApp es el canal de negocio número uno en América Latina y España. Más del 90% de los consumidores en la región lo usan a diario, y las PyMEs responden —cuando responden— con horas de retraso o directamente no responden. Eso tiene un costo: clientes perdidos, turnos vacíos, pedidos sin cerrar.',
        'Pepino AI resuelve eso. Creamos agentes de inteligencia artificial con nombre propio que atienden a tus clientes por WhatsApp, 24/7, desde el primer día. Sin configuración técnica, sin servidores que gestionar, sin aprender a programar. Contratás un agente como contrataría un empleado — y empieza a trabajar hoy.',
      ],
      stats: [
        { value: '2 B+', label: 'usuarios activos de WhatsApp' },
        { value: '30 M+', label: 'PyMEs en LATAM + España' },
        { value: '€85', label: 'precio medio mensual por agente' },
        { value: '<10 min', label: 'tiempo de activación' },
      ],
    },
    product: {
      label: '02',
      section: 'Producto',
      title: 'Los agentes.',
      intro: 'Cada agente de Pepino AI tiene un nombre, una especialidad y una personalidad. No son bots genéricos — son empleados digitales con un rol concreto. El cliente los contrata individualmente y los gestiona desde un panel unificado.',
      agents: [
        {
          name: 'Paco',
          role: 'Gestor de Turnos',
          color: '#A0FF79',
          price: '€95 / mes',
          desc: 'Atiende mensajes, consulta tu agenda en tiempo real y reserva el primer hueco disponible. Manda recordatorios automáticos antes de cada turno para que nadie falte.',
          features: ['Reserva turnos en segundos', 'Consulta disponibilidad en tiempo real', 'Recordatorios automáticos', 'Gestiona cambios y cancelaciones'],
        },
        {
          name: 'Mateo',
          role: 'Especialista en Ocupación',
          color: '#64a0ff',
          price: '€79 / mes',
          desc: 'Detecta huecos libres antes de que se pierdan, reactiva clientes que llevan tiempo sin venir y les manda una oferta personalizada en el momento justo.',
          features: ['Detecta huecos libres automáticamente', 'Reactiva clientes dormidos', 'Promociones personalizadas por WhatsApp', 'Aumenta facturación sin esfuerzo'],
        },
        {
          name: 'Lucciano',
          role: 'Especialista en Reputación',
          color: '#ffb432',
          price: '€69 / mes',
          desc: 'Después de cada visita, pide feedback al cliente y lo guía a dejar una reseña en Google. Construye tu reputación online en piloto automático.',
          features: ['Seguimiento automático post-turno', 'Pide reseñas en Google de forma natural', 'Gestiona el feedback de cada cliente', 'Mejora tu puntuación online mes a mes'],
        },
        {
          name: 'Erica',
          role: 'Agente de Delivery',
          color: '#ff7eb3',
          price: '€89 / mes',
          desc: 'Atiende pedidos por WhatsApp, presenta el menú, informa precios y genera la comanda automáticamente. Sin llamadas, sin errores.',
          features: ['Toma pedidos 24 horas', 'Informa precios y opciones al instante', 'Comparte links de pago', 'Genera comanda lista para cocina'],
        },
        {
          name: 'Elton',
          role: 'Creador de Sitios Web',
          color: '#c084fc',
          price: 'Desde €75 · único',
          desc: 'Habla con el cliente por WhatsApp, le hace las preguntas clave y construye su sitio web desde cero. Entrega garantizada en menos de 24 horas.',
          features: ['Chat directo para entender el negocio', 'Diseño personalizado', 'Entrega en menos de 24 horas', 'Lista para publicar con dominio propio'],
        },
      ],
      techTitle: 'Stack técnico',
      techItems: [
        { name: 'Evolution API', desc: 'Conecta WhatsApp. Recibe y envía mensajes.' },
        { name: 'n8n', desc: 'Motor de los agentes. Lógica y flujos.' },
        { name: 'Supabase', desc: 'Base de datos y autenticación.' },
        { name: 'Next.js', desc: 'Dashboard del cliente. Web app.' },
        { name: 'LLM Engine', desc: 'Modelos de lenguaje que dan inteligencia a los agentes.' },
      ],
    },
    market: {
      label: '03',
      section: 'Mercado',
      title: 'La oportunidad de mercado.',
      intro: 'WhatsApp no es una opción — es infraestructura de comunicación. En LATAM y España la penetración supera el 90%. En Europa, más de 2.000 millones de personas lo usan a diario. Para las PyMEs en todo el mundo, es el canal donde llegan los clientes, se confirman reservas y se cierran ventas. Hoy ese canal está sin automatizar.',
      tam: {
        label: 'TAM',
        title: 'Total Addressable Market',
        value: '$47 B',
        desc: 'Mercado global de chatbots e IA conversacional para empresas (2026). CAGR del 23% anual.',
      },
      sam: {
        label: 'SAM',
        title: 'Serviceable Addressable Market',
        value: '$4.2 B',
        desc: '30M+ PyMEs en LATAM + España con presencia en WhatsApp. Solo el segmento de gestión de turnos y atención al cliente.',
      },
      som: {
        label: 'SOM',
        title: 'Serviceable Obtainable Market',
        value: '$84 M',
        desc: '100K negocios en LATAM y España en los primeros 24 meses, con apertura hacia Europa. €70/mes promedio.',
      },
      verticals: {
        title: 'Verticales prioritarias',
        items: [
          { icon: '💈', name: 'Peluquerías y estética', size: '1.2M negocios', pain: 'Turnos gestionados a mano por WhatsApp' },
          { icon: '🍕', name: 'Delivery y gastronomía', size: '800K negocios', pain: 'Pedidos por chat sin sistema' },
          { icon: '🏥', name: 'Salud y bienestar', size: '600K negocios', pain: 'Agenda saturada de mensajes' },
          { icon: '🏋️', name: 'Deporte y fitness', size: '400K negocios', pain: 'Clases sin confirmar = huecos vacíos' },
          { icon: '🏠', name: 'Inmobiliarias', size: '300K negocios', pain: 'Leads sin respuesta a tiempo' },
          { icon: '🎓', name: 'Educación y academias', size: '500K negocios', pain: 'Matrículas y consultas sin atender' },
        ],
      },
      whatsapp: {
        title: 'Por qué WhatsApp',
        stats: [
          { value: '93%', label: 'de argentinos usan WhatsApp a diario' },
          { value: '2B+', label: 'usuarios globales activos' },
          { value: '98%', label: 'tasa de apertura de mensajes' },
          { value: '60%', label: 'de PyMEs LATAM ya usan WhatsApp para ventas' },
        ],
      },
    },
    model: {
      label: '04',
      section: 'Modelo de Negocio',
      title: 'Cómo ganamos dinero.',
      intro: 'Modelo SaaS con suscripción mensual por agente. Simple, predecible, escalable. El cliente elige qué agentes necesita y los puede activar o desactivar en cualquier momento.',
      plans: [
        {
          name: 'Individual',
          price: '€69–95',
          period: '/agente/mes',
          color: '#A0FF79',
          features: [
            '1 agente activo',
            'WhatsApp conectado',
            'Dashboard de métricas',
            'Soporte por email',
          ],
          highlight: false,
        },
        {
          name: 'Pack 2 agentes',
          price: '€130',
          period: '/mes',
          color: '#A0FF79',
          features: [
            '2 agentes simultáneos',
            '15% descuento sobre precio individual',
            'Dashboard unificado',
            'Soporte prioritario',
          ],
          highlight: true,
          badge: 'Más popular',
        },
        {
          name: 'Enterprise',
          price: 'Personalizado',
          period: '',
          color: '#c084fc',
          features: [
            'Agentes ilimitados',
            'Integraciones a medida',
            'SLA garantizado',
            'Account manager dedicado',
          ],
          highlight: false,
        },
      ],
      upsells: {
        title: 'Ingresos adicionales',
        items: [
          { name: 'Creación de sitio web (Elton)', value: '€75–250', type: 'Pago único' },
          { name: 'Setup & onboarding premium', value: '€99', type: 'Pago único' },
          { name: 'Plan anual', value: '2 meses gratis', type: 'Incentivo retención' },
          { name: 'Pepino Enterprise bundle', value: '€500+/mes', type: 'Suite completa' },
        ],
      },
      unit: {
        title: 'Unit Economics',
        items: [
          { metric: 'ARPU (promedio mensual)', value: '€85' },
          { metric: 'CAC estimado', value: '€120' },
          { metric: 'LTV (24 meses @ 5% churn)', value: '€850' },
          { metric: 'LTV / CAC', value: '7.1x' },
          { metric: 'Payback period', value: '1.4 meses' },
          { metric: 'Margen bruto estimado', value: '78%' },
        ],
      },
    },
    finances: {
      label: '05',
      section: 'Proyecciones Financieras',
      title: 'Los números.',
      intro: 'Modelo conservador basado en crecimiento orgánico a través de la base existente de usuarios y referidos. Sin gasto en paid ads en los primeros 12 meses.',
      projections: [
        {
          year: 'Año 1',
          arr: '€250K',
          agents: '500',
          customers: '280',
          mrr: '€21K',
          milestone: 'Product-market fit demostrado. Primeros 100 clientes pagos. Equipo de ventas operativo.',
        },
        {
          year: 'Año 2',
          arr: '€1.2M',
          agents: '2.000',
          customers: '1.100',
          mrr: '€100K',
          milestone: 'Expansión México y España. Canal de partners. Primer equipo de ventas.',
        },
        {
          year: 'Año 3',
          arr: '€4M',
          agents: '5.500',
          customers: '3.000',
          mrr: '€333K',
          milestone: '3 países, 5 verticales. Producto enterprise. Break-even operativo.',
        },
      ],
      costs: {
        title: 'Estructura de costos (Año 1)',
        items: [
          { name: 'Infraestructura (VPS, API, LLM)', pct: 12 },
          { name: 'Producto y desarrollo', pct: 35 },
          { name: 'Ventas y marketing', pct: 28 },
          { name: 'Operaciones y soporte', pct: 15 },
          { name: 'Legal y admin', pct: 10 },
        ],
      },
      ask: {
        title: 'Capital requerido',
        amount: '€200K',
        subtitle: 'Pre-seed · Ronda SAFe',
        desc: 'Para alcanzar 500 agentes activos, product-market fit demostrado y €21K MRR antes de levantar Serie A.',
        use: [
          { name: 'Producto (6 meses de dev full-time)', value: '€80K', pct: 40 },
          { name: 'Marketing y adquisición', value: '€60K', pct: 30 },
          { name: 'Infraestructura y operaciones', value: '€40K', pct: 20 },
          { name: 'Legal, admin y reserva', value: '€20K', pct: 10 },
        ],
      },
    },
    competition: {
      label: '06',
      section: 'Competencia',
      title: 'El ecosistema.',
      intro: 'El mercado de automatización de WhatsApp está fragmentado entre soluciones genéricas, plataformas complejas y freelancers sin escalabilidad. Pepino AI ocupa el espacio que nadie ha llenado: agentes especializados con personalidad, para PyMEs de cualquier mercado, listos en minutos.',
      matrix: {
        headers: ['', 'Pepino AI', 'ManyChat', 'Chatbase', 'Tidio', 'Freelancer'],
        rows: [
          { feature: 'WhatsApp nativo', pepino: true, manychat: '⚠️', chatbase: false, tidio: false, freelancer: '⚠️' },
          { feature: 'Agentes con personalidad', pepino: true, manychat: false, chatbase: false, tidio: false, freelancer: '⚠️' },
          { feature: 'Verticales especializadas', pepino: true, manychat: false, chatbase: false, tidio: false, freelancer: true },
          { feature: 'Listo en < 10 min', pepino: true, manychat: false, chatbase: true, tidio: true, freelancer: false },
          { feature: 'Español / LATAM first', pepino: true, manychat: false, chatbase: false, tidio: false, freelancer: '⚠️' },
          { feature: 'Sin código', pepino: true, manychat: '⚠️', chatbase: true, tidio: true, freelancer: false },
          { feature: 'Precio < €100/mes', pepino: true, manychat: true, chatbase: true, tidio: true, freelancer: false },
          { feature: 'Escalable', pepino: true, manychat: true, chatbase: true, tidio: true, freelancer: false },
        ],
      },
      moat: {
        title: 'Ventaja competitiva',
        items: [
          { title: 'Base propia de usuarios', desc: '20K+ usuarios en LATAM ya expuestos a la marca. Canal de adquisición orgánico y de alta confianza.' },
          { title: 'Agentes con identidad', desc: 'Paco, Mateo, Lucciano — no son bots. Son personajes. El cliente los recuerda, los recomienda y los presenta a otros negocios.' },
          { title: 'WhatsApp como moat', desc: 'Una vez que el número del cliente está conectado y sus clientes conocen al agente, el switching cost es altísimo. Cada contacto en la agenda del cliente es un lock-in.' },
          { title: 'Velocidad de activación', desc: 'Competidores tardan días en implementar. Nosotros, minutos. Esa diferencia es el primer "wow" que genera boca a boca.' },
        ],
      },
    },
    team: {
      label: '07',
      section: 'Equipo',
      title: 'Quiénes somos.',
      intro: 'Equipo fundador con más de 15 años en SaaS y experiencia directa en el ecosistema de mensajería empresarial en LATAM.',
      members: [
        {
          name: 'Manuel Achinelli',
          role: 'Fundador & CEO',
          bio: 'Más de 15 años construyendo y escalando empresas de Software as a Service en LATAM. Formó parte del equipo de Sirena —plataforma de WhatsApp Business para empresas— desde sus primeras etapas hasta su adquisición por Zenvia y el posterior proceso de IPO en Nasdaq. Participó activamente en los tres hitos: crecimiento, M&A y salida a bolsa. Trayectoria en producto, go-to-market y crecimiento en compañías cuyo canal principal es WhatsApp. Conoce el dolor del cliente desde adentro: lleva años viendo cómo las PyMEs pierden ventas porque no pueden responder a tiempo.',
          email: 'manu@pepino.ai',
          color: '#A0FF79',
        },
      ],
      hiring: {
        title: 'Próximas incorporaciones',
        roles: [
          { role: 'Sales Rep #1 (outbound)', priority: 'Q3 2026' },
          { role: 'Sales Rep #2 (demos / cierre)', priority: 'Q3 2026' },
          { role: 'Customer Success Manager', priority: 'Q4 2026' },
          { role: 'Full-Stack Developer (Next.js / n8n)', priority: 'Q1 2027' },
        ],
      },
      advisors: {
        title: 'Red de apoyo',
        items: [
          'Comunidad propia de Pepino AI (20K+ profesionales en LATAM + España)',
          'Red de agencias digitales aliadas para canal de distribución',
          'Comunidades de emprendedores en LATAM y Europa',
        ],
      },
    },
    gtm: {
      label: '08',
      section: 'Go-to-Market',
      title: 'Cómo llegamos al mercado.',
      phases: [
        {
          phase: 'Fase 1',
          period: 'Q3 2026',
          color: '#A0FF79',
          title: 'Armar el equipo de ventas',
          actions: [
            'El producto ya funciona — el foco es salir a vender',
            'Contratar los primeros sales reps (outbound + demos)',
            'Definir el pitch y los verticales prioritarios',
            'Primeros 50 clientes pagos con venta directa founder-led',
          ],
          target: '50 clientes pagos',
        },
        {
          phase: 'Fase 2',
          period: 'Q4 2026',
          color: '#64a0ff',
          title: 'Equipo de Customer Success',
          actions: [
            'Sales team a plena operación: pipeline, demos, cierre',
            'Contratar primer Customer Success Manager',
            'Onboarding estructurado y métricas de retención',
            'Programa de referidos activo (€30 por cliente referido)',
          ],
          target: '200 clientes pagos',
        },
        {
          phase: 'Fase 3',
          period: 'Q1–Q2 2027',
          color: '#ffb432',
          title: 'Robustizar producto + expansión',
          actions: [
            'Con ingresos estables, contratar developers para fortalecer el producto',
            'Expansión a nuevos mercados: México, España y Europa',
            'Canal de partners: agencias digitales que revenden Pepino',
            'Integraciones con sistemas de reservas (Fresha, Mindbody)',
          ],
          target: '500 clientes pagos',
        },
      ],
      acquisition: {
        title: 'Canales de adquisición',
        items: [
          { channel: 'Comunidad Pepino AI', cost: 'Orgánico', conversion: 'Alta (confianza previa)' },
          { channel: 'Referidos de clientes', cost: '€30 comisión', conversion: 'Muy alta' },
          { channel: 'Contenido (YT, TikTok)', cost: 'Tiempo', conversion: 'Media' },
          { channel: 'Agencias partners', cost: '20–30% revenue share', conversion: 'Alta' },
          { channel: 'Meta Ads (Fase 3)', cost: '€40–60 CPL', conversion: 'Media-baja' },
        ],
      },
    },
    roadmap: {
      label: '09',
      section: 'Roadmap',
      title: 'Qué viene.',
      quarters: [
        {
          q: 'Q3 2026',
          color: '#A0FF79',
          items: [
            'Producto en producción y funcionando',
            'Contratar primeros sales reps',
            'Primeras 50 cuentas pagando (venta directa)',
            'Pipeline de ventas estructurado',
          ],
          status: 'En curso',
        },
        {
          q: 'Q4 2026',
          color: '#64a0ff',
          items: [
            'Equipo de ventas a plena operación',
            'Contratar Customer Success Manager',
            'Onboarding y retención estructurados',
            'Primeras 200 cuentas pagando',
          ],
          status: 'Próximo',
        },
        {
          q: 'Q1 2027',
          color: '#ffb432',
          items: [
            'Con flujo de caja positivo: contratar developers',
            'Expansión a México y España',
            'Canal de partners con agencias',
            'Integraciones con sistemas de reservas',
          ],
          status: 'Planificado',
        },
        {
          q: 'Q2 2027',
          color: '#c084fc',
          items: [
            'Expansión a Europa (foco España + Portugal)',
            'Plan Enterprise con SLA',
            'API pública para desarrolladores',
            'Bundle Pepino Enterprise',
          ],
          status: 'Planificado',
        },
      ],
      vision: {
        title: 'Visión 2028',
        body: 'Pepino AI es el estándar de facto para agentes de IA en PyMEs de todo el mundo. Cada negocio que quiera automatizar WhatsApp piensa en Pepino primero. 50.000 agentes activos, presencia en 3 continentes, plataforma abierta para que terceros construyan sus propios agentes sobre nuestra infraestructura.',
      },
    },
    closing: {
      title: 'Fresco, rápido, sin fricción.',
      sub: 'Pepino AI.',
      contact: 'Contacto para inversores',
      email: 'manu@pepino.ai',
      version: 'v1.0 · Junio 2026 · Confidencial',
    },
  },

  en: {
    nav: {
      links: ['Summary', 'Product', 'Market', 'Model', 'Finances', 'Competition', 'Team', 'Roadmap'],
      langLabel: 'ES',
    },
    cover: {
      label: 'Business Plan · June 2026',
      title: 'The AI agent\nfor your business.',
      sub: 'Pepino AI plugs artificial intelligence into your WhatsApp in minutes.\nNo code. No friction. In the green.',
      pill1: 'SaaS · AI · WhatsApp',
      pill2: 'LATAM + Spain',
      pill3: 'B2B',
      scrollHint: 'Scroll to explore',
    },
    exec: {
      label: '01',
      section: 'Executive Summary',
      title: 'The opportunity.',
      body: [
        "WhatsApp is the number-one business channel in Latin America and Spain. More than 90% of consumers in the region use it daily, and SMBs respond — when they respond at all — hours late or not at all. That comes with a cost: lost customers, empty appointment slots, and unclosed sales.",
        "Pepino AI fixes that. We build AI agents with real names that serve your customers on WhatsApp, 24/7, from day one. No technical setup, no servers to manage, no need to learn to code. You hire an agent the way you'd hire a person — and they start working today.",
      ],
      stats: [
        { value: '2 B+', label: 'active WhatsApp users' },
        { value: '30 M+', label: 'SMBs in LATAM + Spain' },
        { value: '€85', label: 'average monthly price per agent' },
        { value: '<10 min', label: 'time to activate' },
      ],
    },
    product: {
      label: '02',
      section: 'Product',
      title: 'The agents.',
      intro: 'Every Pepino AI agent has a name, a specialty, and a personality. They are not generic bots — they are digital employees with a concrete role. Customers hire them individually and manage them through a unified dashboard.',
      agents: [
        {
          name: 'Paco',
          role: 'Appointment Manager',
          color: '#A0FF79',
          price: '€95 / month',
          desc: 'Handles messages, checks your calendar in real time, and books the first available slot. Sends automatic reminders before each appointment so no one misses it.',
          features: ['Books appointments in seconds', 'Checks availability in real time', 'Automatic reminders', 'Manages changes and cancellations'],
        },
        {
          name: 'Mateo',
          role: 'Occupancy Specialist',
          color: '#64a0ff',
          price: '€79 / month',
          desc: 'Spots empty slots before they go to waste, reactivates dormant customers, and sends them a personalized offer at exactly the right moment.',
          features: ['Automatically detects empty slots', 'Reactivates dormant customers', 'Personalized WhatsApp promotions', 'Grows revenue effortlessly'],
        },
        {
          name: 'Lucciano',
          role: 'Reputation Specialist',
          color: '#ffb432',
          price: '€69 / month',
          desc: 'After each visit, collects customer feedback and guides them to leave a Google review. Builds your online reputation on autopilot.',
          features: ['Automatic post-visit follow-up', 'Requests Google reviews naturally', 'Manages per-customer feedback', 'Improves your online score month by month'],
        },
        {
          name: 'Erica',
          role: 'Delivery Agent',
          color: '#ff7eb3',
          price: '€89 / month',
          desc: 'Takes orders via WhatsApp, presents the menu, provides pricing, and automatically generates the order ticket. No phone calls, no errors.',
          features: ['Takes orders around the clock', 'Provides pricing and options instantly', 'Shares payment links', 'Generates kitchen-ready tickets'],
        },
        {
          name: 'Elton',
          role: 'Website Creator',
          color: '#c084fc',
          price: 'From €75 · one-time',
          desc: "Chats with the customer on WhatsApp, asks the key questions, and builds their website from scratch. Delivery guaranteed in under 24 hours.",
          features: ['Direct chat to understand the business', 'Custom design', 'Delivery in under 24 hours', 'Ready to publish with custom domain'],
        },
      ],
      techTitle: 'Tech stack',
      techItems: [
        { name: 'Evolution API', desc: 'Connects WhatsApp. Receives and sends messages.' },
        { name: 'n8n', desc: "Agent engine. Logic and workflows." },
        { name: 'Supabase', desc: 'Database and authentication.' },
        { name: 'Next.js', desc: 'Customer dashboard. Web app.' },
        { name: 'LLM Engine', desc: 'Language models that power agent intelligence.' },
      ],
    },
    market: {
      label: '03',
      section: 'Market',
      title: 'The market opportunity.',
      intro: "WhatsApp is not optional — it is communication infrastructure. In LATAM and Spain penetration exceeds 90%. In Europe, over 2 billion people use it daily. For SMBs everywhere, it is the channel where customers arrive, appointments get confirmed, and sales close. Today that channel is completely unautomated.",
      tam: {
        label: 'TAM',
        title: 'Total Addressable Market',
        value: '$47 B',
        desc: 'Global market for chatbots and conversational AI for businesses (2026). 23% annual CAGR.',
      },
      sam: {
        label: 'SAM',
        title: 'Serviceable Addressable Market',
        value: '$4.2 B',
        desc: '30M+ SMBs in LATAM + Spain with a WhatsApp presence. Appointment management and customer service segment alone.',
      },
      som: {
        label: 'SOM',
        title: 'Serviceable Obtainable Market',
        value: '$84 M',
        desc: '100K businesses across LATAM and Spain within the first 24 months, with expansion into Europe. €70/month average.',
      },
      verticals: {
        title: 'Priority verticals',
        items: [
          { icon: '💈', name: 'Hair salons & beauty', size: '1.2M businesses', pain: 'Appointments managed by hand on WhatsApp' },
          { icon: '🍕', name: 'Delivery & food', size: '800K businesses', pain: 'Orders via chat with no system' },
          { icon: '🏥', name: 'Health & wellness', size: '600K businesses', pain: 'Calendar flooded with messages' },
          { icon: '🏋️', name: 'Sport & fitness', size: '400K businesses', pain: 'Unconfirmed classes = empty slots' },
          { icon: '🏠', name: 'Real estate', size: '300K businesses', pain: 'Leads not answered in time' },
          { icon: '🎓', name: 'Education & academies', size: '500K businesses', pain: 'Enrollment queries unanswered' },
        ],
      },
      whatsapp: {
        title: 'Why WhatsApp',
        stats: [
          { value: '93%', label: 'of Argentinians use WhatsApp daily' },
          { value: '2B+', label: 'global active users' },
          { value: '98%', label: 'message open rate' },
          { value: '60%', label: 'of LATAM SMBs already use WhatsApp for sales' },
        ],
      },
    },
    model: {
      label: '04',
      section: 'Business Model',
      title: 'How we make money.',
      intro: 'SaaS model with monthly per-agent subscriptions. Simple, predictable, scalable. Customers choose which agents they need and can activate or deactivate any time.',
      plans: [
        {
          name: 'Individual',
          price: '€69–95',
          period: '/agent/month',
          color: '#A0FF79',
          features: [
            '1 active agent',
            'WhatsApp connected',
            'Metrics dashboard',
            'Email support',
          ],
          highlight: false,
        },
        {
          name: '2-Agent Pack',
          price: '€130',
          period: '/month',
          color: '#A0FF79',
          features: [
            '2 simultaneous agents',
            '15% discount vs individual price',
            'Unified dashboard',
            'Priority support',
          ],
          highlight: true,
          badge: 'Most popular',
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: '',
          color: '#c084fc',
          features: [
            'Unlimited agents',
            'Custom integrations',
            'Guaranteed SLA',
            'Dedicated account manager',
          ],
          highlight: false,
        },
      ],
      upsells: {
        title: 'Additional revenue streams',
        items: [
          { name: 'Website creation (Elton)', value: '€75–250', type: 'One-time' },
          { name: 'Premium setup & onboarding', value: '€99', type: 'One-time' },
          { name: 'Annual plan', value: '2 months free', type: 'Retention incentive' },
          { name: 'Pepino Enterprise bundle', value: '€500+/month', type: 'Full suite' },
        ],
      },
      unit: {
        title: 'Unit Economics',
        items: [
          { metric: 'ARPU (monthly average)', value: '€85' },
          { metric: 'Estimated CAC', value: '€120' },
          { metric: 'LTV (24 months @ 5% churn)', value: '€850' },
          { metric: 'LTV / CAC', value: '7.1x' },
          { metric: 'Payback period', value: '1.4 months' },
          { metric: 'Estimated gross margin', value: '78%' },
        ],
      },
    },
    finances: {
      label: '05',
      section: 'Financial Projections',
      title: 'The numbers.',
      intro: 'Conservative model based on organic growth through our existing user base and referrals. No paid advertising spend in the first 12 months.',
      projections: [
        {
          year: 'Year 1',
          arr: '€250K',
          agents: '500',
          customers: '280',
          mrr: '€21K',
          milestone: 'Product-market fit demonstrated. First 100 paying customers. Sales team operational.',
        },
        {
          year: 'Year 2',
          arr: '€1.2M',
          agents: '2,000',
          customers: '1,100',
          mrr: '€100K',
          milestone: 'Expand to Mexico and Spain. Partner channel. First sales team.',
        },
        {
          year: 'Year 3',
          arr: '€4M',
          agents: '5,500',
          customers: '3,000',
          mrr: '€333K',
          milestone: '3 countries, 5 verticals. Enterprise product. Operational break-even.',
        },
      ],
      costs: {
        title: 'Cost structure (Year 1)',
        items: [
          { name: 'Infrastructure (VPS, API, LLM)', pct: 12 },
          { name: 'Product & development', pct: 35 },
          { name: 'Sales & marketing', pct: 28 },
          { name: 'Operations & support', pct: 15 },
          { name: 'Legal & admin', pct: 10 },
        ],
      },
      ask: {
        title: 'Capital requirements',
        amount: '€200K',
        subtitle: 'Pre-seed · SAFE round',
        desc: 'To reach 500 active agents, demonstrated product-market fit, and €21K MRR before raising a Series A.',
        use: [
          { name: 'Product (6 months full-time dev)', value: '€80K', pct: 40 },
          { name: 'Marketing & acquisition', value: '€60K', pct: 30 },
          { name: 'Infrastructure & operations', value: '€40K', pct: 20 },
          { name: 'Legal, admin & reserve', value: '€20K', pct: 10 },
        ],
      },
    },
    competition: {
      label: '06',
      section: 'Competition',
      title: 'The ecosystem.',
      intro: 'The WhatsApp automation market is fragmented between generic solutions, complex platforms, and non-scalable freelancers. Pepino AI occupies the space no one has filled: specialized agents with personality, for SMBs anywhere in the world, ready in minutes.',
      matrix: {
        headers: ['', 'Pepino AI', 'ManyChat', 'Chatbase', 'Tidio', 'Freelancer'],
        rows: [
          { feature: 'Native WhatsApp', pepino: true, manychat: '⚠️', chatbase: false, tidio: false, freelancer: '⚠️' },
          { feature: 'Agents with personality', pepino: true, manychat: false, chatbase: false, tidio: false, freelancer: '⚠️' },
          { feature: 'Specialized verticals', pepino: true, manychat: false, chatbase: false, tidio: false, freelancer: true },
          { feature: 'Ready in < 10 min', pepino: true, manychat: false, chatbase: true, tidio: true, freelancer: false },
          { feature: 'Spanish / LATAM first', pepino: true, manychat: false, chatbase: false, tidio: false, freelancer: '⚠️' },
          { feature: 'No-code', pepino: true, manychat: '⚠️', chatbase: true, tidio: true, freelancer: false },
          { feature: 'Price < €100/month', pepino: true, manychat: true, chatbase: true, tidio: true, freelancer: false },
          { feature: 'Scalable', pepino: true, manychat: true, chatbase: true, tidio: true, freelancer: false },
        ],
      },
      moat: {
        title: 'Competitive advantages',
        items: [
          { title: 'Owned user base', desc: '20K+ users in LATAM already exposed to the brand. An organic, high-trust acquisition channel.' },
          { title: 'Agents with identity', desc: "Paco, Mateo, Lucciano — they're not bots. They're characters. Customers remember them, recommend them, and introduce them to other businesses." },
          { title: 'WhatsApp as a moat', desc: "Once the customer's number is connected and their clients know the agent, switching costs are enormous. Every contact in the customer's address book is a lock-in." },
          { title: 'Activation speed', desc: 'Competitors take days to implement. We take minutes. That difference is the first "wow" that generates word of mouth.' },
        ],
      },
    },
    team: {
      label: '07',
      section: 'Team',
      title: 'Who we are.',
      intro: 'Founding team with 15+ years in SaaS and hands-on experience in the WhatsApp business messaging ecosystem across LATAM.',
      members: [
        {
          name: 'Manuel Achinelli',
          role: 'Founder & CEO',
          bio: 'Over 15 years building and scaling Software as a Service companies in LATAM. Was part of the Sirena team —a WhatsApp Business platform for enterprises— from its early stages through its acquisition by Zenvia and the subsequent Nasdaq IPO. Actively involved across all three milestones: growth, M&A, and public listing. Track record in product, go-to-market, and growth at companies where WhatsApp is the core channel. He knows the customer pain from the inside: years of watching SMBs lose sales because they can\'t respond fast enough.',
          email: 'manu@pepino.ai',
          color: '#A0FF79',
        },
      ],
      hiring: {
        title: 'Next hires',
        roles: [
          { role: 'Sales Rep #1 (outbound)', priority: 'Q3 2026' },
          { role: 'Sales Rep #2 (demos / close)', priority: 'Q3 2026' },
          { role: 'Customer Success Manager', priority: 'Q4 2026' },
          { role: 'Full-Stack Developer (Next.js / n8n)', priority: 'Q1 2027' },
        ],
      },
      advisors: {
        title: 'Support network',
        items: [
          'Pepino AI community (20K+ professionals in LATAM + Spain)',
          'Network of digital agency partners for distribution',
          'Entrepreneur communities across LATAM and Europe',
        ],
      },
    },
    gtm: {
      label: '08',
      section: 'Go-to-Market',
      title: 'How we reach the market.',
      phases: [
        {
          phase: 'Phase 1',
          period: 'Q3 2026',
          color: '#A0FF79',
          title: 'Build the sales team',
          actions: [
            'Product is running — now the focus is selling',
            'Hire first sales reps (outbound + demos)',
            'Define pitch and priority verticals',
            'First 50 paying customers via founder-led sales',
          ],
          target: '50 paying customers',
        },
        {
          phase: 'Phase 2',
          period: 'Q4 2026',
          color: '#64a0ff',
          title: 'Customer Success team',
          actions: [
            'Sales team at full capacity: pipeline, demos, close',
            'Hire first Customer Success Manager',
            'Structured onboarding and retention metrics',
            'Referral program active (€30 per referred customer)',
          ],
          target: '200 paying customers',
        },
        {
          phase: 'Phase 3',
          period: 'Q1–Q2 2027',
          color: '#ffb432',
          title: 'Strengthen product + expand',
          actions: [
            'With stable revenue: hire developers to strengthen the product',
            'Expand to new markets: Mexico, Spain, and Europe',
            'Partner channel: digital agencies reselling Pepino',
            'Integrations with booking systems (Fresha, Mindbody)',
          ],
          target: '500 paying customers',
        },
      ],
      acquisition: {
        title: 'Acquisition channels',
        items: [
          { channel: 'Pepino AI community', cost: 'Organic', conversion: 'High (pre-existing trust)' },
          { channel: 'Customer referrals', cost: '€30 commission', conversion: 'Very high' },
          { channel: 'Content (YT, TikTok)', cost: 'Time', conversion: 'Medium' },
          { channel: 'Agency partners', cost: '20–30% revenue share', conversion: 'High' },
          { channel: 'Meta Ads (Phase 3)', cost: '€40–60 CPL', conversion: 'Medium-low' },
        ],
      },
    },
    roadmap: {
      label: '09',
      section: 'Roadmap',
      title: "What's next.",
      quarters: [
        {
          q: 'Q3 2026',
          color: '#A0FF79',
          items: [
            'Product in production and running',
            'Hire first sales reps',
            'First 50 paying accounts (direct sales)',
            'Structured sales pipeline',
          ],
          status: 'In progress',
        },
        {
          q: 'Q4 2026',
          color: '#64a0ff',
          items: [
            'Sales team at full capacity',
            'Hire Customer Success Manager',
            'Structured onboarding & retention',
            'First 200 paying accounts',
          ],
          status: 'Upcoming',
        },
        {
          q: 'Q1 2027',
          color: '#ffb432',
          items: [
            'With positive cash flow: hire developers',
            'Expansion to Mexico and Spain',
            'Partner channel with agencies',
            'Integrations with booking systems',
          ],
          status: 'Planned',
        },
        {
          q: 'Q2 2027',
          color: '#c084fc',
          items: [
            'Europe expansion (Spain + Portugal focus)',
            'Enterprise plan with SLA',
            'Public API for developers',
            'Pepino Enterprise bundle',
          ],
          status: 'Planned',
        },
      ],
      vision: {
        title: '2028 Vision',
        body: 'Pepino AI is the de-facto standard for AI agents for SMBs worldwide. Every business that wants to automate their WhatsApp thinks of Pepino first. 50,000 active agents, presence across 3 continents, and an open platform for third parties to build their own agents on our infrastructure.',
      },
    },
    closing: {
      title: 'Fresh, fast, frictionless.',
      sub: 'Pepino AI.',
      contact: 'Investor contact',
      email: 'manu@pepino.ai',
      version: 'v1.0 · June 2026 · Confidential',
    },
  },
}


// ─── AGENT DATA (photos + WhatsApp conversations) ─────────────────────────────

const DISP = "'Funnel Sans', sans-serif"
const MONO = "'JetBrains Mono', monospace"

const AGENT_META = {
  paco:     { photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
  mateo:    { photo: 'https://randomuser.me/api/portraits/men/57.jpg' },
  lucciano: { photo: 'https://randomuser.me/api/portraits/men/22.jpg' },
  erica:    { photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
  elton:    { photo: 'https://randomuser.me/api/portraits/men/10.jpg' },
}

const WA_CONVOS = {
  paco: {
    name: 'Paco',
    online: 'En línea',
    msgs: [
      { from: 'client', text: 'Hola! Quiero sacar turno para esta semana 🙏', time: '14:22' },
      { from: 'agent',  text: '¡Hola! 👋 Claro que sí. Tengo disponibilidad el miércoles a las 10:00, 14:30 y 17:00. ¿Cuál te queda mejor?', time: '14:22' },
      { from: 'client', text: '14:30 perfecto', time: '14:23' },
      { from: 'agent',  text: '✅ Turno confirmado para el miércoles 11/06 a las 14:30. ¿Me decís tu nombre para agendarlo?', time: '14:23' },
      { from: 'client', text: 'Laura García', time: '14:24' },
      { from: 'agent',  text: 'Perfecto Laura 😊 Te mando un recordatorio el martes. ¡Hasta el miércoles! 🥒', time: '14:24' },
    ],
  },
  mateo: {
    name: 'Mateo',
    online: 'En línea',
    msgs: [
      { from: 'agent',  text: 'Hola Carlos 👋 Hace 45 días que no te vemos. Esta semana tenemos un hueco especial para vos: 20% off en tu próxima visita. ¿Lo aprovechamos?', time: '10:01' },
      { from: 'client', text: 'Qué buena onda! Cuándo tienen lugar?', time: '10:15' },
      { from: 'agent',  text: 'Tenés el jueves a las 11:00 o el viernes a las 16:30. ¿Cuál preferís?', time: '10:15' },
      { from: 'client', text: 'El viernes me viene perfecto', time: '10:16' },
      { from: 'agent',  text: '✅ Agendado para el viernes 13/06 a las 16:30, con el 20% aplicado. ¡Te esperamos Carlos! 🥒', time: '10:16' },
    ],
  },
  lucciano: {
    name: 'Lucciano',
    online: 'En línea',
    msgs: [
      { from: 'agent',  text: '¡Hola Ana! ☀️ ¿Cómo te fue hoy en tu visita?', time: '18:30' },
      { from: 'client', text: 'Muy bien! Todo prolijo y puntual como siempre 😊', time: '18:42' },
      { from: 'agent',  text: 'Qué bueno escuchar eso 🙌 ¿Te molestaría dejarlo en Google? Solo 2 minutos y nos ayuda un montón.', time: '18:42' },
      { from: 'client', text: 'Dale claro, cómo lo hago?', time: '18:43' },
      { from: 'agent',  text: 'Acá el link directo 👇 Solo tocás las estrellitas y escribís lo que sentiste. ¡Gracias de corazón! 🥒\n⭐ Ver en Google Maps →', time: '18:43' },
    ],
  },
  erica: {
    name: 'Erica',
    online: 'En línea',
    msgs: [
      { from: 'client', text: 'Buenas! Una napolitana y una Coca por fav', time: '20:11' },
      { from: 'agent',  text: '¡Hola! 🍕 Pizza napolitana: grande (€12.90) o mediana (€9.90). ¿Cuál preferís?', time: '20:11' },
      { from: 'client', text: 'Grande', time: '20:12' },
      { from: 'agent',  text: '🛒 Resumen: napolitana grande €12.90 + Coca-Cola €2.50 = Total €15.40\n\n¿Pagás con efectivo, tarjeta o Bizum?', time: '20:12' },
      { from: 'client', text: 'Bizum', time: '20:13' },
      { from: 'agent',  text: 'Perfecto ⬇️ Link de pago enviado. El pedido sale en ~30 min. ¡Gracias! 🥒', time: '20:13' },
    ],
  },
  elton: {
    name: 'Elton',
    online: 'En línea',
    msgs: [
      { from: 'client', text: 'Hola, necesito una web para mi peluquería', time: '09:05' },
      { from: 'agent',  text: '¡Hola! Perfecto, yo me encargo 💻 ¿Cómo se llama tu negocio?', time: '09:05' },
      { from: 'client', text: 'Corte & Estilo', time: '09:06' },
      { from: 'agent',  text: 'Genial 💇 ¿Tenés logo o usamos el nombre solo?', time: '09:06' },
      { from: 'client', text: 'Tengo logo, te lo mando ahora 📎', time: '09:07' },
      { from: 'agent',  text: '✅ Recibido. Tu web estará lista en menos de 24hs. Te aviso cuando esté publicada. ¡A trabajar! 🥒', time: '09:07' },
    ],
  },
}

const AGENT_IDS = ['paco', 'mateo', 'lucciano', 'erica', 'elton']

// ─── STYLES ───────────────────────────────────────────────────────────────────

const s = {
  mono: { fontFamily: MONO },
  lbl: { fontFamily: MONO, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0B0E0C', background: '#A0FF79', fontWeight: 700, borderRadius: 20, padding: '5px 14px', display: 'inline-block' },
  secHead: { marginBottom: 28 },
  h2: { fontFamily: DISP, fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 24, color: '#F4F7F2' },
  lede: { fontFamily: DISP, fontSize: 18, lineHeight: 1.65, color: '#B6C4B2', maxWidth: 680, fontWeight: 300, marginBottom: 40 },
  body: { fontFamily: DISP, fontSize: 15, lineHeight: 1.7, color: '#B6C4B2', maxWidth: 680, fontWeight: 300 },
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function Tag({ children, color = '#A0FF79' }) {
  const r = parseInt(color.slice(1,3),16), g = parseInt(color.slice(3,5),16), b = parseInt(color.slice(5,7),16)
  return (
    <span style={{
      fontFamily: DISP, fontSize: 12, fontWeight: 700, letterSpacing: '0.03em',
      textTransform: 'uppercase', color,
      background: `rgba(${r},${g},${b},0.1)`,
      border: `1px solid rgba(${r},${g},${b},0.25)`,
      borderRadius: 6, padding: '4px 11px',
    }}>{children}</span>
  )
}

function Stat({ value, label }) {
  return (
    <div style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 16, padding: '28px 24px' }}>
      <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 36, letterSpacing: '-0.03em', color: '#A0FF79', lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: DISP, fontSize: 13, fontWeight: 500, letterSpacing: '0.02em', color: '#7E8C7C', marginTop: 10, textTransform: 'uppercase' }}>{label}</div>
    </div>
  )
}

function ProgressBar({ pct, color = '#A0FF79' }) {
  return (
    <div style={{ background: '#161B12', borderRadius: 6, height: 8, overflow: 'hidden', marginTop: 6 }}>
      <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 6 }} />
    </div>
  )
}

function PricingCard({ plan }) {
  return (
    <div style={{
      background: plan.highlight ? 'rgba(160,255,121,0.04)' : '#11150F',
      border: plan.highlight ? '1.5px solid rgba(160,255,121,0.35)' : '1px solid #243026',
      borderRadius: 20, padding: '32px 28px', position: 'relative',
      display: 'flex', flexDirection: 'column', gap: 24,
    }}>
      {plan.badge && (
        <div style={{
          position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
          background: '#A0FF79', color: '#0B0E0C',
          fontFamily: DISP, fontSize: 11, fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase',
          padding: '4px 12px', borderRadius: 20, whiteSpace: 'nowrap',
        }}>{plan.badge}</div>
      )}
      <div>
        <div style={{ fontFamily: DISP, fontSize: 13, fontWeight: 600, color: '#7E8C7C', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>{plan.name}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontFamily: DISP, fontWeight: 800, fontSize: 38, letterSpacing: '-0.03em', color: '#F4F7F2' }}>{plan.price}</span>
          {plan.period && <span style={{ fontFamily: DISP, fontSize: 13, color: '#7E8C7C' }}>{plan.period}</span>}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {plan.features.map((f, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#B6C4B2', alignItems: 'center' }}>
            <span style={{ color: plan.color, flexShrink: 0 }}>✓</span>{f}
          </div>
        ))}
      </div>
    </div>
  )
}

// WhatsApp chat mockup
function WAChat({ agentId, agentColor }) {
  const meta = AGENT_META[agentId]
  const convo = WA_CONVOS[agentId]
  const alpha = (hex, a) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16)
    return `rgba(${r},${g},${b},${a})`
  }
  return (
    <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #243026', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
      {/* Header */}
      <div style={{ background: '#075E54', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={meta.photo} alt={convo.name} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }} />
        <div>
          <div style={{ color: '#fff', fontFamily: DISP, fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>{convo.name}</div>
          <div style={{ color: 'rgba(255,255,255,0.65)', fontFamily: DISP, fontSize: 11 }}>{convo.online}</div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 14 }}>
          <svg width="18" height="18" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="7.5"/><path d="M9 6v3.5l2 1.5"/></svg>
          <svg width="18" height="18" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="9" r="1.2" fill="rgba(255,255,255,0.7)"/><circle cx="9" cy="9" r="1.2" fill="rgba(255,255,255,0.7)"/><circle cx="13" cy="9" r="1.2" fill="rgba(255,255,255,0.7)"/></svg>
        </div>
      </div>
      {/* Chat area */}
      <div style={{ background: '#ECE5DD', padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 5, minHeight: 220 }}>
        {convo.msgs.map((msg, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'client' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              background: msg.from === 'client' ? '#DCF8C6' : '#fff',
              borderRadius: msg.from === 'client' ? '10px 2px 10px 10px' : '2px 10px 10px 10px',
              padding: '6px 10px 4px',
              maxWidth: '82%',
              boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
            }}>
              <div style={{ fontFamily: DISP, fontSize: 12.5, color: '#111', lineHeight: 1.45, whiteSpace: 'pre-line' }}>{msg.text}</div>
              <div style={{ fontFamily: DISP, fontSize: 10, color: '#9e9e9e', textAlign: 'right', marginTop: 2 }}>{msg.time} {msg.from === 'agent' && '✓✓'}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Input bar */}
      <div style={{ background: '#F0F0F0', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '7px 14px', fontFamily: DISP, fontSize: 13, color: '#aaa' }}>Mensaje</div>
        <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#075E54', display: 'grid', placeItems: 'center' }}>
          <svg width="14" height="14" fill="#fff" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
        </div>
      </div>
    </div>
  )
}

// Agent card — always expanded, 2-col layout
function AgentCard({ agent, agentId }) {
  const alpha = (hex, a) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16)
    return `rgba(${r},${g},${b},${a})`
  }
  const meta = AGENT_META[agentId]
  return (
    <div style={{
      background: '#11150F',
      border: `1px solid ${alpha(agent.color, 0.25)}`,
      borderRadius: 24,
      overflow: 'hidden',
      boxShadow: `0 4px 24px ${alpha(agent.color, 0.06)}`,
    }}>
      <div className="r-agent" style={{ padding: '32px 32px' }}>
        {/* Left: info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <img
              src={meta.photo}
              alt={agent.name}
              style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: `2.5px solid ${alpha(agent.color, 0.5)}`, flexShrink: 0 }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                <span style={{ fontFamily: DISP, fontWeight: 800, fontSize: 20, color: '#F4F7F2', letterSpacing: '-0.01em' }}>{agent.name}</span>
                <Tag color={agent.color}>{agent.role}</Tag>
              </div>
              <div style={{ fontFamily: MONO, fontSize: 12, color: agent.color, fontWeight: 700 }}>{agent.price}</div>
            </div>
          </div>
          <p style={{ fontFamily: DISP, fontSize: 14.5, color: '#B6C4B2', lineHeight: 1.65, marginBottom: 20 }}>{agent.desc}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {agent.features.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5, color: '#B6C4B2', fontFamily: DISP }}>
                <span style={{ color: agent.color, flexShrink: 0, marginTop: 1, fontWeight: 700 }}>✓</span>{f}
              </div>
            ))}
          </div>
        </div>
        {/* Right: WhatsApp mockup */}
        <WAChat agentId={agentId} agentColor={agent.color} />
      </div>
    </div>
  )
}

// Dashboard preview mockup
function DashboardPreview({ lang }) {
  const isEs = lang === 'es'
  const metrics = [
    { value: '42', label: isEs ? 'Conversaciones' : 'Conversations', color: '#A0FF79', icon: '💬' },
    { value: '18', label: isEs ? 'Reservas' : 'Reservations', color: '#A78BFA', icon: '📅' },
    { value: '8', label: isEs ? 'Clientes nuevos' : 'New clients', color: '#60A5FA', icon: '👤' },
    { value: '42%', label: isEs ? 'Conversión' : 'Conversion', color: '#FB923C', icon: '📈' },
  ]
  const appointments = [
    { time: '10:00', name: 'Laura García', service: isEs ? 'Corte y color' : 'Cut & colour', color: '#A0FF79' },
    { time: '11:30', name: 'Sofía Romero', service: isEs ? 'Manicura' : 'Manicure', color: '#A78BFA' },
    { time: '14:30', name: 'Carlos Ruiz', service: isEs ? 'Barba y corte' : 'Beard & cut', color: '#60A5FA' },
    { time: '16:00', name: 'Ana López', service: isEs ? 'Tinte completo' : 'Full colour', color: '#FB923C' },
    { time: '17:30', name: 'Marta Díaz', service: isEs ? 'Peinado' : 'Styling', color: '#A0FF79' },
  ]
  const alpha = (hex, a) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16)
    return `rgba(${r},${g},${b},${a})`
  }
  return (
    <div style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 20, overflow: 'hidden' }}>
      {/* Browser bar */}
      <div style={{ background: '#161B12', borderBottom: '1px solid #243026', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#FF5F57','#FEBC2E','#28C840'].map((c,i) => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ flex: 1, background: '#0B0E0C', borderRadius: 6, padding: '4px 12px', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="10" height="10" fill="none" stroke="#5FA855" strokeWidth="1.5" strokeLinecap="round"><path d="M2 5a3 3 0 016 0v1.5H2V5z"/><rect x="1" y="6" width="8" height="4" rx="1" fill="#5FA855" stroke="none"/></svg>
          <span style={{ fontFamily: MONO, fontSize: 10, color: '#5FA855' }}>app.pepino.ai</span>
        </div>
      </div>
      {/* Dashboard content */}
      <div style={{ padding: '20px 20px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <CucumberLogo size={22} />
            <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: 14, color: '#F4F7F2' }}>
              {isEs ? 'Mi panel' : 'My dashboard'}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#A0FF79', boxShadow: '0 0 6px #A0FF79' }} />
            <span style={{ fontFamily: MONO, fontSize: 10, color: '#A0FF79' }}>
              Paco — {isEs ? 'Activo' : 'Active'}
            </span>
          </div>
        </div>
        {/* Metrics */}
        <div className="r-grid-4" style={{ marginBottom: 16 }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ background: '#0B0E0C', border: `1px solid ${alpha(m.color, 0.2)}`, borderRadius: 12, padding: '12px 14px' }}>
              <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 24, color: m.color, lineHeight: 1 }}>{m.value}</div>
              <div style={{ fontFamily: DISP, fontSize: 11, color: '#7E8C7C', marginTop: 4 }}>{m.label}</div>
            </div>
          ))}
        </div>
        {/* Calendar + Conversations */}
        <div className="r-dash-grid">
          {/* Agenda */}
          <div style={{ background: '#0B0E0C', border: '1px solid #243026', borderRadius: 14, padding: '14px 14px' }}>
            <div style={{ fontFamily: MONO, fontSize: 10, color: '#A0FF79', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
              📅 {isEs ? 'Hoy · miércoles 11 jun' : 'Today · Wed Jun 11'}
            </div>
            {appointments.map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: i < appointments.length - 1 ? '1px solid #1c231d' : 'none' }}>
                <div style={{ fontFamily: MONO, fontSize: 10, color: '#7E8C7C', width: 34, flexShrink: 0 }}>{a.time}</div>
                <div style={{ width: 3, height: 28, borderRadius: 2, background: a.color, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: DISP, fontSize: 12, fontWeight: 600, color: '#F4F7F2', lineHeight: 1.2 }}>{a.name}</div>
                  <div style={{ fontFamily: DISP, fontSize: 11, color: '#7E8C7C' }}>{a.service}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Sync callout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ background: '#0B0E0C', border: '1px solid #243026', borderRadius: 14, padding: '14px 14px', flex: 1 }}>
              <div style={{ fontFamily: MONO, fontSize: 10, color: '#A0FF79', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
                {isEs ? 'Conversaciones recientes' : 'Recent conversations'}
              </div>
              {[
                { name: 'Laura García', msg: isEs ? 'Turno confirmado ✅' : 'Appointment confirmed ✅', time: '14:24' },
                { name: 'Carlos Ruiz', msg: isEs ? 'Reactivado — 20% off 🎯' : 'Reactivated — 20% off 🎯', time: '10:16' },
                { name: 'Marta Díaz', msg: isEs ? 'Reseña Google enviada ⭐' : 'Google review sent ⭐', time: '18:43' },
              ].map((conv, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: i < 2 ? '1px solid #1c231d' : 'none' }}>
                  <div>
                    <div style={{ fontFamily: DISP, fontSize: 12, fontWeight: 600, color: '#F4F7F2' }}>{conv.name}</div>
                    <div style={{ fontFamily: DISP, fontSize: 11, color: '#7E8C7C' }}>{conv.msg}</div>
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: 10, color: '#4a5a48' }}>{conv.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Calendar integrations bar */}
      <div style={{ borderTop: '1px solid #243026', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: MONO, fontSize: 10, color: '#7E8C7C', letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>
          {isEs ? 'Sincroniza con:' : 'Syncs with:'}
        </span>
        {['Google Calendar', 'Apple Calendar', 'Outlook'].map((cal, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#161B12', border: '1px solid #243026', borderRadius: 8, padding: '4px 10px' }}>
            <span style={{ fontSize: 11 }}>📆</span>
            <span style={{ fontFamily: DISP, fontSize: 11, color: '#B6C4B2', fontWeight: 500 }}>{cal}</span>
          </div>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#A0FF79', boxShadow: '0 0 4px #A0FF79' }} />
          <span style={{ fontFamily: MONO, fontSize: 10, color: '#5FA855' }}>
            {isEs ? 'Sincronización en tiempo real' : 'Real-time sync'}
          </span>
        </div>
      </div>
    </div>
  )
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function BusinessPlan() {
  const [lang, setLang] = useState('es')
  const c = content[lang]

  const navIds = ['exec', 'product', 'market', 'model', 'finances', 'competition', 'team', 'roadmap']

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', gap: 12, padding: '14px 28px',
        background: 'rgba(11,14,12,0.88)', backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #243026',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginRight: 8, flexShrink: 0 }}>
          <CucumberLogo size={26} />
          <span style={{ fontFamily: DISP, fontWeight: 800, fontSize: 16, letterSpacing: '-0.02em' }}>
            Pepino<span style={{ fontFamily: MONO, fontSize: '0.62em', color: '#A0FF79', verticalAlign: 'super', marginLeft: 2 }}>AI</span>
          </span>
        </div>
        <div className="nav-links" style={{ flex: 1 }}>
          {c.nav.links.map((link, i) => (
            <a key={i} href={`#${navIds[i]}`} style={{
              fontFamily: DISP, fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase',
              color: '#7E8C7C', textDecoration: 'none', padding: '5px 10px', borderRadius: 8, whiteSpace: 'nowrap',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#A0FF79'}
            onMouseLeave={e => e.currentTarget.style.color = '#7E8C7C'}
            >{link}</a>
          ))}
        </div>
        <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} style={{
          fontFamily: DISP, fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
          color: '#A0FF79', background: 'rgba(160,255,121,0.08)', border: '1px solid rgba(160,255,121,0.25)',
          borderRadius: 8, padding: '6px 14px', cursor: 'pointer', textTransform: 'uppercase', flexShrink: 0,
        }}>{c.nav.langLabel}</button>
      </nav>

      {/* ── COVER ── */}
      <div className="r-cover" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
        <div style={{
          position: 'absolute', right: -150, top: '50%', transform: 'translateY(-50%)',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(160,255,121,0.12), transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ marginBottom: 32 }}><CucumberLogo size={80} /></div>
        <div style={{ fontFamily: DISP, fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7E8C7C', marginBottom: 20 }}>
          {c.cover.label}
        </div>
        <h1 style={{
          fontFamily: DISP, fontWeight: 900, fontSize: 'clamp(52px, 9vw, 108px)', letterSpacing: '-0.045em',
          lineHeight: 0.92, color: '#F4F7F2', marginBottom: 32, whiteSpace: 'pre-line',
        }}>{c.cover.title}</h1>
        <p style={{ fontFamily: DISP, fontSize: 19, color: '#B6C4B2', fontWeight: 300, lineHeight: 1.6, maxWidth: 560, marginBottom: 40, whiteSpace: 'pre-line' }}>
          {c.cover.sub}
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {[c.cover.pill1, c.cover.pill2, c.cover.pill3].map((p, i) => <Tag key={i}>{p}</Tag>)}
        </div>
        <div style={{ position: 'absolute', bottom: 40, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: DISP, fontSize: 13, fontWeight: 500, color: '#4a5a48', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{c.cover.scrollHint}</span>
          <span style={{ color: '#4a5a48', fontSize: 16 }}>↓</span>
        </div>
      </div>

      {/* ── 01 EXECUTIVE SUMMARY ── */}
      <section id="exec" className="r-page" style={{ borderBottom: '1px solid #243026' }}>
        <div style={s.secHead}><span style={s.lbl}>{c.exec.section}</span></div>
        <h2 style={s.h2}>{c.exec.title}</h2>
        {c.exec.body.map((p, i) => <p key={i} style={{ ...s.body, marginBottom: 20 }}>{p}</p>)}
        <div className="r-grid-4" style={{ marginTop: 48 }}>
          {c.exec.stats.map((st, i) => <Stat key={i} {...st} />)}
        </div>
      </section>

      {/* ── 02 PRODUCT ── */}
      <section id="product" className="r-page" style={{ borderBottom: '1px solid #243026' }}>
        <div style={s.secHead}><span style={s.lbl}>{c.product.section}</span></div>
        <h2 style={s.h2}>{c.product.title}</h2>
        <p style={s.lede}>{c.product.intro}</p>

        {/* Agent cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 64 }}>
          {c.product.agents.map((agent, i) => (
            <AgentCard key={i} agent={agent} agentId={AGENT_IDS[i]} />
          ))}
        </div>

        {/* Dashboard section */}
        <div style={{ borderTop: '1px solid #243026', paddingTop: 64 }}>
          <div style={s.secHead}>
            <span style={s.lbl}>{lang === 'es' ? 'Tu panel' : 'Your dashboard'}</span>
          </div>
          <h2 style={s.h2}>{lang === 'es' ? 'Lo que ves en tu panel.' : 'What you see in your dashboard.'}</h2>
          <p style={s.lede}>
            {lang === 'es'
              ? 'No solo automatizás la atención — también la monitoreás. Tu panel muestra en tiempo real cuántas conversaciones manejó el agente, los turnos del día, los clientes nuevos y todo lo que pasó mientras vos trabajabas. La agenda se sincroniza automáticamente con Google Calendar, Apple Calendar y Outlook — lo que reserva el agente aparece directamente en tu celular.'
              : "You don't just automate attention — you monitor it. Your dashboard shows in real time how many conversations your agent handled, the day's appointments, new clients, and everything that happened while you were working. The calendar syncs automatically with Google Calendar, Apple Calendar, and Outlook — what the agent books appears directly on your phone."}
          </p>
          <DashboardPreview lang={lang} />
          <div className="r-grid-3" style={{ marginTop: 24 }}>
            {[
              {
                icon: '📅',
                title: lang === 'es' ? 'Agenda integrada' : 'Integrated calendar',
                body: lang === 'es'
                  ? 'Cada turno que reserva el agente aparece en tu Google Calendar o Apple Calendar en segundos. Sin copiar y pegar, sin dobles agendas.'
                  : 'Every appointment the agent books appears in your Google or Apple Calendar in seconds. No copy-pasting, no double calendars.',
              },
              {
                icon: '🔔',
                title: lang === 'es' ? 'Recordatorios automáticos' : 'Automatic reminders',
                body: lang === 'es'
                  ? 'El agente manda recordatorios al cliente 24hs antes de cada turno. Menos no-shows, más puntualidad, sin que tengas que hacer nada.'
                  : 'The agent sends reminders to clients 24h before each appointment. Fewer no-shows, more punctuality, with zero effort from you.',
              },
              {
                icon: '📊',
                title: lang === 'es' ? 'Métricas en tiempo real' : 'Real-time metrics',
                body: lang === 'es'
                  ? 'Conversaciones, reservas, clientes nuevos, tasa de conversión. Todo en pantalla, actualizado al minuto. Sabés exactamente qué está haciendo tu agente.'
                  : 'Conversations, bookings, new clients, conversion rate. All on screen, updated by the minute. You know exactly what your agent is doing.',
              },
            ].map((item, i) => (
              <div key={i} style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 16, padding: '24px 22px' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 16, color: '#F4F7F2', marginBottom: 8 }}>{item.title}</div>
                <p style={{ fontFamily: DISP, fontSize: 13.5, color: '#7E8C7C', lineHeight: 1.6, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 20, padding: '32px 32px', marginTop: 48 }}>
          <div style={{ ...s.lbl, marginBottom: 24 }}>{c.product.techTitle}</div>
          <div className="r-grid-3" style={{ gap: 20 }}>
            {c.product.techItems.map((t, i) => (
              <div key={i}>
                <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 13, color: '#A0FF79', marginBottom: 4 }}>{t.name}</div>
                <div style={{ fontFamily: DISP, fontSize: 13, color: '#7E8C7C', lineHeight: 1.5 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 MARKET ── */}
      <section id="market" className="r-page" style={{ borderBottom: '1px solid #243026' }}>
        <div style={s.secHead}><span style={s.lbl}>{c.market.section}</span></div>
        <h2 style={s.h2}>{c.market.title}</h2>
        <p style={s.lede}>{c.market.intro}</p>
        <div className="r-grid-3" style={{ marginBottom: 56 }}>
          {[c.market.tam, c.market.sam, c.market.som].map((m, i) => (
            <div key={i} style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 20, padding: '28px 24px' }}>
              <Tag>{m.label}</Tag>
              <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 42, letterSpacing: '-0.04em', color: '#F4F7F2', margin: '12px 0 4px' }}>{m.value}</div>
              <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 14, color: '#B6C4B2', marginBottom: 10 }}>{m.title}</div>
              <p style={{ fontFamily: DISP, fontSize: 13.5, color: '#7E8C7C', lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
            </div>
          ))}
        </div>
        <h3 style={{ fontFamily: DISP, fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', marginBottom: 24, color: '#F4F7F2' }}>{c.market.verticals.title}</h3>
        <div className="r-grid-2" style={{ marginBottom: 56 }}>
          {c.market.verticals.items.map((v, i) => (
            <div key={i} style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 16, padding: '20px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 28 }}>{v.icon}</span>
              <div>
                <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 15, color: '#F4F7F2', marginBottom: 3 }}>{v.name}</div>
                <div style={{ fontFamily: MONO, fontSize: 10, color: '#A0FF79', marginBottom: 6 }}>{v.size}</div>
                <div style={{ fontFamily: DISP, fontSize: 13, color: '#7E8C7C' }}>{v.pain}</div>
              </div>
            </div>
          ))}
        </div>
        <h3 style={{ fontFamily: DISP, fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', marginBottom: 24, color: '#F4F7F2' }}>{c.market.whatsapp.title}</h3>
        <div className="r-grid-4">
          {c.market.whatsapp.stats.map((st, i) => <Stat key={i} {...st} />)}
        </div>
      </section>

      {/* ── 04 MODEL ── */}
      <section id="model" className="r-page" style={{ borderBottom: '1px solid #243026' }}>
        <div style={s.secHead}><span style={s.lbl}>{c.model.section}</span></div>
        <h2 style={s.h2}>{c.model.title}</h2>
        <p style={s.lede}>{c.model.intro}</p>
        <div className="r-grid-3" style={{ marginBottom: 48 }}>
          {c.model.plans.map((plan, i) => <PricingCard key={i} plan={plan} />)}
        </div>
        <div className="r-grid-2">
          <div style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 20, padding: '28px 24px' }}>
            <div style={{ ...s.lbl, marginBottom: 20 }}>{c.model.upsells.title}</div>
            {c.model.upsells.items.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < c.model.upsells.items.length - 1 ? '1px solid #1c231d' : 'none' }}>
                <div>
                  <div style={{ fontFamily: DISP, fontSize: 14, fontWeight: 500, color: '#F4F7F2', marginBottom: 2 }}>{item.name}</div>
                  <div style={{ fontFamily: DISP, fontSize: 11, color: '#7E8C7C' }}>{item.type}</div>
                </div>
                <div style={{ fontFamily: MONO, fontSize: 13, fontWeight: 700, color: '#A0FF79' }}>{item.value}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 20, padding: '28px 24px' }}>
            <div style={{ ...s.lbl, marginBottom: 20 }}>{c.model.unit.title}</div>
            {c.model.unit.items.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < c.model.unit.items.length - 1 ? '1px solid #1c231d' : 'none' }}>
                <span style={{ fontFamily: DISP, fontSize: 13.5, color: '#B6C4B2' }}>{item.metric}</span>
                <span style={{ fontFamily: MONO, fontSize: 14, fontWeight: 700, color: '#A0FF79' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 FINANCES ── */}
      <section id="finances" className="r-page" style={{ borderBottom: '1px solid #243026' }}>
        <div style={s.secHead}><span style={s.lbl}>{c.finances.section}</span></div>
        <h2 style={s.h2}>{c.finances.title}</h2>
        <p style={s.lede}>{c.finances.intro}</p>
        <div className="r-proj" style={{ marginBottom: 48 }}>
          {c.finances.projections.map((p, i) => (
            <div key={i} style={{
              background: '#11150F', border: '1px solid #243026', borderRadius: 20, padding: '28px 24px',
              borderTop: `3px solid ${['#A0FF79','#64a0ff','#ffb432'][i]}`,
            }}>
              <div style={{ fontFamily: MONO, fontSize: 11, color: '#7E8C7C', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{p.year}</div>
              <div style={{ fontFamily: DISP, fontWeight: 900, fontSize: 40, letterSpacing: '-0.04em', color: '#F4F7F2', lineHeight: 1, marginBottom: 4 }}>{p.arr}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 20 }}>
                <div style={{ fontFamily: MONO, fontSize: 10, color: '#7E8C7C', textTransform: 'uppercase', letterSpacing: '0.1em' }}>ARR</div>
                <div style={{ fontFamily: DISP, fontSize: 10, color: '#4a5a48' }}>— {lang === 'es' ? 'Ingresos anuales recurrentes' : 'Annual Recurring Revenue'}</div>
              </div>
              <div className="r-grid-2" style={{ marginBottom: 20, gap: 10 }}>
                {[{ l: lang === 'es' ? 'Agentes' : 'Agents', v: p.agents }, { l: lang === 'es' ? 'Clientes' : 'Customers', v: p.customers }, { l: 'MRR', v: p.mrr, sub: lang === 'es' ? 'Ingresos mensuales recurrentes' : 'Monthly Recurring Revenue' }].map((m, j) => (
                  <div key={j} style={{ background: '#161B12', border: '1px solid #243026', borderRadius: 10, padding: '10px 12px' }}>
                    <div style={{ fontFamily: MONO, fontSize: 9, color: '#7E8C7C', marginBottom: 3, textTransform: 'uppercase' }}>{m.l}</div>
                    <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 16, color: '#F4F7F2' }}>{m.v}</div>
                    {m.sub && <div style={{ fontFamily: DISP, fontSize: 9, color: '#4a5a48', marginTop: 2 }}>{m.sub}</div>}
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: DISP, fontSize: 12.5, color: '#7E8C7C', lineHeight: 1.55, margin: 0 }}>{p.milestone}</p>
            </div>
          ))}
        </div>
        <div className="r-grid-2">
          <div style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 20, padding: '28px 24px' }}>
            <div style={{ ...s.lbl, marginBottom: 24 }}>{c.finances.costs.title}</div>
            {c.finances.costs.items.map((item, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontFamily: DISP, fontSize: 13.5, color: '#B6C4B2' }}>{item.name}</span>
                  <span style={{ fontFamily: MONO, fontSize: 12, fontWeight: 700, color: '#A0FF79' }}>{item.pct}%</span>
                </div>
                <ProgressBar pct={item.pct} />
              </div>
            ))}
          </div>
          <div style={{
            background: 'rgba(160,255,121,0.03)', border: '1.5px solid rgba(160,255,121,0.2)',
            borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            <div style={{ ...s.lbl, marginBottom: 16 }}>{c.finances.ask.title}</div>
            <div style={{ fontFamily: DISP, fontWeight: 900, fontSize: 56, letterSpacing: '-0.05em', color: '#A0FF79', lineHeight: 1, marginBottom: 4 }}>{c.finances.ask.amount}</div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: '#5FA855', marginBottom: 20, letterSpacing: '0.1em' }}>{c.finances.ask.subtitle}</div>
            <p style={{ fontFamily: DISP, fontSize: 14, color: '#B6C4B2', lineHeight: 1.6, marginBottom: 24 }}>{c.finances.ask.desc}</p>
            {c.finances.ask.use.map((u, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontFamily: DISP, fontSize: 13, color: '#B6C4B2' }}>{u.name}</span>
                  <span style={{ fontFamily: MONO, fontSize: 12, fontWeight: 700, color: '#A0FF79' }}>{u.value}</span>
                </div>
                <ProgressBar pct={u.pct} color={`rgba(160,255,121,${0.4 + i * 0.15})`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 COMPETITION ── */}
      <section id="competition" className="r-page" style={{ borderBottom: '1px solid #243026' }}>
        <div style={s.secHead}><span style={s.lbl}>{c.competition.section}</span></div>
        <h2 style={s.h2}>{c.competition.title}</h2>
        <p style={s.lede}>{c.competition.intro}</p>
        <div style={{ overflowX: 'auto', marginBottom: 56 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
            <thead>
              <tr>
                {c.competition.matrix.headers.map((h, i) => (
                  <th key={i} style={{
                    fontFamily: MONO, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: i === 1 ? '#A0FF79' : '#7E8C7C',
                    padding: '12px 16px', textAlign: i === 0 ? 'left' : 'center',
                    borderBottom: '1px solid #243026',
                    background: i === 1 ? 'rgba(160,255,121,0.04)' : 'transparent',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.competition.matrix.rows.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #1c231d' }}>
                  <td style={{ padding: '13px 16px', fontFamily: DISP, fontSize: 13.5, color: '#B6C4B2' }}>{row.feature}</td>
                  {[row.pepino, row.manychat, row.chatbase, row.tidio, row.freelancer].map((val, j) => (
                    <td key={j} style={{ padding: '13px 16px', textAlign: 'center', background: j === 0 ? 'rgba(160,255,121,0.04)' : 'transparent' }}>
                      {val === true ? <span style={{ color: '#A0FF79', fontSize: 16 }}>✓</span>
                        : val === false ? <span style={{ color: '#3d4a3e', fontSize: 16 }}>—</span>
                        : <span style={{ fontSize: 14 }}>{val}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={{ fontFamily: DISP, fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', marginBottom: 24, color: '#F4F7F2' }}>{c.competition.moat.title}</h3>
        <div className="r-grid-2">
          {c.competition.moat.items.map((item, i) => (
            <div key={i} style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 16, padding: '22px 22px' }}>
              <div style={{ fontFamily: MONO, fontSize: 10, color: '#A0FF79', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 10 }}>0{i+1}</div>
              <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 16, color: '#F4F7F2', marginBottom: 8 }}>{item.title}</div>
              <p style={{ fontFamily: DISP, fontSize: 13.5, color: '#7E8C7C', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 07 TEAM ── */}
      <section id="team" className="r-page" style={{ borderBottom: '1px solid #243026' }}>
        <div style={s.secHead}><span style={s.lbl}>{c.team.section}</span></div>
        <h2 style={s.h2}>{c.team.title}</h2>
        <p style={s.lede}>{c.team.intro}</p>
        <div style={{ marginBottom: 48 }}>
          {c.team.members.map((m, i) => (
            <div key={i} style={{
              background: 'rgba(160,255,121,0.03)', border: '1.5px solid rgba(160,255,121,0.2)',
              borderRadius: 20, padding: '32px 32px', display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'flex-start',
            }}>
              <img
                src="/manu.jpeg"
                alt="Manuel Achinelli"
                style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '2.5px solid rgba(160,255,121,0.4)' }}
              />
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 22, color: '#F4F7F2', letterSpacing: '-0.02em', marginBottom: 6 }}>{m.name}</div>
                <div style={{ marginBottom: 16 }}><Tag color={m.color}>{m.role}</Tag></div>
                <p style={{ fontFamily: DISP, fontSize: 15, color: '#B6C4B2', lineHeight: 1.65, margin: '0 0 12px' }}>{m.bio}</p>
                <a href={`mailto:${m.email}`} style={{ fontFamily: MONO, fontSize: 12, color: '#A0FF79' }}>{m.email}</a>
              </div>
            </div>
          ))}
        </div>
        <div className="r-grid-2">
          <div style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 20, padding: '28px 24px' }}>
            <div style={{ ...s.lbl, marginBottom: 20 }}>{c.team.hiring.title}</div>
            {c.team.hiring.roles.map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < c.team.hiring.roles.length - 1 ? '1px solid #1c231d' : 'none' }}>
                <span style={{ fontFamily: DISP, fontSize: 14, color: '#B6C4B2' }}>{r.role}</span>
                <Tag>{r.priority}</Tag>
              </div>
            ))}
          </div>
          <div style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 20, padding: '28px 24px' }}>
            <div style={{ ...s.lbl, marginBottom: 20 }}>{c.team.advisors.title}</div>
            {c.team.advisors.items.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 0', borderBottom: i < c.team.advisors.items.length - 1 ? '1px solid #1c231d' : 'none' }}>
                <span style={{ color: '#A0FF79', flexShrink: 0 }}>›</span>
                <span style={{ fontFamily: DISP, fontSize: 13.5, color: '#B6C4B2', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 GTM ── */}
      <section id="gtm" className="r-page" style={{ borderBottom: '1px solid #243026' }}>
        <div style={s.secHead}><span style={s.lbl}>{c.gtm.section}</span></div>
        <h2 style={s.h2}>{c.gtm.title}</h2>
        <div className="r-grid-3" style={{ marginBottom: 56 }}>
          {c.gtm.phases.map((phase, i) => (
            <div key={i} style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 20, padding: '28px 24px', borderTop: `3px solid ${phase.color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <Tag color={phase.color}>{phase.phase}</Tag>
                <span style={{ fontFamily: MONO, fontSize: 10, color: '#7E8C7C' }}>{phase.period}</span>
              </div>
              <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 18, color: '#F4F7F2', marginBottom: 16 }}>{phase.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                {phase.actions.map((a, j) => (
                  <div key={j} style={{ display: 'flex', gap: 8, fontFamily: DISP, fontSize: 13, color: '#B6C4B2', alignItems: 'flex-start' }}>
                    <span style={{ color: phase.color, flexShrink: 0, marginTop: 1 }}>›</span>{a}
                  </div>
                ))}
              </div>
              <div style={{ borderTop: `1px solid ${phase.color}25`, paddingTop: 16 }}>
                <span style={{ fontFamily: DISP, fontSize: 12, fontWeight: 600, color: '#7E8C7C', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Target: </span>
                <span style={{ fontFamily: DISP, fontSize: 13, fontWeight: 700, color: phase.color }}>{phase.target}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 20, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #243026' }}><span style={s.lbl}>{c.gtm.acquisition.title}</span></div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 400 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #243026' }}>
                  {[lang === 'es' ? 'Canal' : 'Channel', lang === 'es' ? 'Costo' : 'Cost', lang === 'es' ? 'Conversión' : 'Conversion'].map((h, i) => (
                    <th key={i} style={{ fontFamily: DISP, fontSize: 12, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#7E8C7C', padding: '12px 20px', textAlign: 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.gtm.acquisition.items.map((item, i) => (
                  <tr key={i} style={{ borderBottom: i < c.gtm.acquisition.items.length - 1 ? '1px solid #1c231d' : 'none' }}>
                    <td style={{ padding: '13px 20px', fontFamily: DISP, fontWeight: 500, fontSize: 14, color: '#F4F7F2' }}>{item.channel}</td>
                    <td style={{ padding: '13px 20px', fontFamily: MONO, fontSize: 12, color: '#A0FF79' }}>{item.cost}</td>
                    <td style={{ padding: '13px 20px', fontFamily: DISP, fontSize: 13, color: '#B6C4B2' }}>{item.conversion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 09 ROADMAP ── */}
      <section id="roadmap" className="r-page" style={{ borderBottom: 'none' }}>
        <div style={s.secHead}><span style={s.lbl}>{c.roadmap.section}</span></div>
        <h2 style={s.h2}>{c.roadmap.title}</h2>
        <div className="r-grid-4" style={{ marginBottom: 48 }}>
          {c.roadmap.quarters.map((q, i) => (
            <div key={i} style={{ background: '#11150F', border: '1px solid #243026', borderRadius: 20, padding: '24px 22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontFamily: DISP, fontWeight: 800, fontSize: 17, color: q.color, letterSpacing: '-0.01em' }}>{q.q}</span>
                <Tag color={q.color}>{q.status}</Tag>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {q.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', gap: 8, fontFamily: DISP, fontSize: 13, color: '#B6C4B2', alignItems: 'flex-start' }}>
                    <span style={{ color: q.color, flexShrink: 0, marginTop: 1, fontSize: 10 }}>◆</span>{item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          background: 'rgba(160,255,121,0.03)', border: '1.5px solid rgba(160,255,121,0.18)',
          borderRadius: 20, padding: '40px 40px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', right: -80, top: '50%', transform: 'translateY(-50%)',
            width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(160,255,121,0.08), transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div style={{ ...s.lbl, marginBottom: 16 }}>{c.roadmap.vision.title}</div>
          <p style={{ fontFamily: DISP, fontSize: 18, color: '#B6C4B2', lineHeight: 1.7, maxWidth: 680, fontWeight: 300, margin: 0 }}>
            {c.roadmap.vision.body}
          </p>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <footer style={{
        background: '#0B0E0C', borderTop: '1px solid #243026',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '80px 48px', gap: 16, textAlign: 'center',
      }}>
        <CucumberLogo size={56} />
        <div style={{ fontFamily: DISP, fontWeight: 900, fontSize: 'clamp(24px, 5vw, 52px)', letterSpacing: '-0.04em', color: '#F4F7F2', marginTop: 8 }}>
          {c.closing.title}
        </div>
        <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 'clamp(20px, 4vw, 38px)', letterSpacing: '-0.03em' }}>
          <span style={{ color: '#A0FF79' }}>Pepino</span>
          <span style={{ fontFamily: MONO, fontSize: '0.55em', verticalAlign: 'super', marginLeft: 4 }}>AI</span>
        </div>
        <div style={{ height: 24 }} />
        <div style={{ fontFamily: DISP, fontSize: 13, fontWeight: 500, color: '#7E8C7C', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
          {c.closing.contact}
        </div>
        <a href={`mailto:${c.closing.email}`} style={{ fontFamily: DISP, fontSize: 18, fontWeight: 700, color: '#A0FF79', textDecoration: 'none' }}>
          {c.closing.email}
        </a>
        <div style={{ marginTop: 32, fontFamily: DISP, fontSize: 12, fontWeight: 500, color: '#4a5a48', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {c.closing.version}
        </div>
      </footer>

    </div>
  )
}

// ─── CUCUMBER LOGO SVG ────────────────────────────────────────────────────────

function CucumberLogo({ size = 32 }) {
  const r = size / 2
  const outerR = r * 0.92
  const innerR = r * 0.72
  const skinW = r * 0.12
  const seeds = 11
  const seedR = r * 0.065
  const seedOrbit = r * 0.46
  const coreR = r * 0.13
  const seedPoints = Array.from({ length: seeds }, (_, i) => {
    const angle = (i / seeds) * 2 * Math.PI - Math.PI / 2
    return { x: r + Math.cos(angle) * seedOrbit, y: r + Math.sin(angle) * seedOrbit }
  })
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <circle cx={r} cy={r} r={outerR} fill="#A0FF79" />
      <circle cx={r} cy={r} r={outerR - skinW} fill="#0B0E0C" />
      <circle cx={r} cy={r} r={innerR} fill="#A0FF79" />
      {seedPoints.map((pt, i) => <circle key={i} cx={pt.x} cy={pt.y} r={seedR} fill="#0B0E0C" />)}
      <circle cx={r} cy={r} r={coreR} fill="#0B0E0C" />
    </svg>
  )
}
