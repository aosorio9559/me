const pathPrefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const projects = [
  {
    title: "Bidirectional communication management system",
    description:
      "Platform consisting of two modules: Mass sending of personalized text messages and SMS broadcasting for scheduled interruptions in public services. These modules allow receiving responses from customers which can be stored in other information systems for company's decision making.",
    image: `${pathPrefix}/images/bidirectional-communication-management-system.png`,
    tags: ["Angular", "Bootstrap", "PHP", "MongoDB"],
    source: "https://google.com",
    visit: "https://google.com",
  },
  {
    title: "Monitoring platform",
    description:
      "It allows users to see detailed graphs about the behavior of different applications such as chatbot, text message broadcast, Contact Center reports, conversations, among others.",
    image: `${pathPrefix}/images/monitoring-platform.png`,
    tags: ["Angular", "D3.js", "Chart.js", "PHP", "MongoDB"],
    source: "https://google.com",
    visit: "https://google.com",
  },
  {
    title: "Bill interpreter",
    description:
      "Solution that aims to explain to the customer the details of the electricity service consumption in their home or business. In addition, it shows statistics about consumption habits with respect to previous billing cycles.",
    image: `${pathPrefix}/images/bill-interpreter.png`,
    tags: ["Angular", "Bootstrap"],
    source: "https://google.com",
    visit: "https://google.com",
  },
  {
    title: "Customer petitions, complaints and claims platform",
    description:
      "Provides answers to inquiries filed by clients in order to provide them with the immediate resolution of their petitions, complaints or claims",
    image: `${pathPrefix}/images/customer-petitions-complaints-and-claims-platform.PNG`,
    tags: ["Angular", "Angular Material", "CKEditor", "D3.js"],
    source: "https://google.com",
    visit: "https://google.com",
  },
  {
    title: "Voice of the Customer platform",
    description:
      "Collaborated in the development of a web application which presents customer feedback about their experiences and expectations of an electricity service company. Shows information on customer needs, conceptions and opportunities of improvement for the organization.",
    image: `${pathPrefix}/images/voice-of-the-customer-platform.PNG`,
    tags: ["Angular", "Bootstrap"],
    source: "https://google.com",
    visit: "https://google.com",
  },
  /* {
    title: "Service culture",
    description:
      "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: `${pathPrefix}/images/4.jpg`,
    tags: ["Angular", "Bootstrap Material Design"],
    source: "https://google.com",
    visit: "https://google.com",
  }, */
  {
    title: "University of Manizales Quality management system",
    description:
      "Application that provides the community of the University of Manizales with a platform for viewing the undergraduate and postgraduate higher education services offered by the institution.",
    image: `${pathPrefix}/images/university-of-manizales-quality-management-system.PNG`,
    tags: ["Angular", "Bootstrap", "Heroku"],
    source: "https://google.com",
    visit: "https://google.com",
  },
  {
    title: "Gestión Educativa platform",
    description:
      "This platform allows registering information on the implementation of different educational strategies, which mobilize the strengthening of citizen competencies and desirable behaviors with different segments and population groups in a hydropower company's area of influence.",
    image: `${pathPrefix}/images/gestion-educativa-platform.PNG`,
    tags: ["JavaScript", "Bootstrap", "PHP", "PostgreSQL"],
    source: "https://google.com",
    visit: "https://google.com",
  },
];
