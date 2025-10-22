import type { CategoryOption, Link } from "./definitions.ts";

const endpoint = import.meta.env.WA_API_URL;
const phone = import.meta.env.FP_PHONE;

const carousel: Link[] = [
  {
    icon: "document",
    title: "Documentos",
    url: "/search?v=s&sc=docs",
  },
  {
    icon: "picture",
    title: "Imágenes",
    url: "/search?v=s&sc=pict",
  },
  {
    icon: "lightbulb-on",
    title: "Publicidad",
    url: "/search?v=s&sc=mktg",
  },
  {
    icon: "customize-edit",
    title: "Diseño Gráfico",
    url: "/search?v=s&sc=dsgn",
  },
  {
    icon: "square-plus",
    title: "Otros Servicios",
    url: "/search?v=s&sc=misc",
  },
];

const footer: Link[] = [
  {
    url: "/servicios/documentos",
    title: "Impresión de Documentos",
  },
  {
    url: "/servicios/imagenes",
    title: "Impresión de Imágenes",
  },
  {
    url: "/servicios/publicidad",
    title: "Herramientas de Publicidad",
  },
  {
    url: "/servicios/diseno",
    title: "Diseño Gráfico",
  },
  {
    url: "/servicios/otros",
    title: "Otros Servicios",
  },
];

const support: Link[] = [
  {
    url: "/contact",
    title: "Contáctanos",
  },
];

const contact: Link[] = [
  {
    icon: {
      variant: "br",
      suffix: "phone-call",
    },
    url: "tel:56994069861",
    title: "+56 9 9406 9861",
  },
  {
    icon: {
      variant: "br",
      suffix: "envelope",
    },
    url: "mailto:fullprint.chiloe@gmail.com",
    title: "fullprint.chiloe@gmail.com",
  },
  {
    icon: {
      variant: "br",
      suffix: "marker",
    },
    url: "https://maps.app.goo.gl/E2bgyVkRNTVgx9eK6",
    title: "Chacabuco 797, Ancud",
  },
];

const social: Link[] = [
  {
    icon: {
      variant: "brands",
      suffix: "facebook",
    },
    url: "https://www.facebook.com/fullprint.chiloe/",
  },
  {
    icon: {
      variant: "brands",
      suffix: "instagram",
    },
    url: "https://www.instagram.com/fullprint.chiloe/",
  },
  {
    icon: {
      variant: "brands",
      suffix: "whatsapp",
    },
    url: `${endpoint}/send?phone=${phone}`,
  },
];

const categoryOptions: CategoryOption[] = [
  {
    name: "Todas",
    id: "all",
  },
  {
    name: "Documentos",
    id: "docs",
  },
  {
    name: "Imágenes",
    id: "pict",
  },
  {
    name: "Publicidad",
    id: "mktg",
  },
  {
    name: "Diseño",
    id: "dsgn",
  },
  {
    name: "Otros",
    id: "misc",
  },
];

export { carousel, footer, support, contact, social, categoryOptions };
