import type { Link } from "./definitions.ts";

const carousel: Link[] = [
  {
    icon: "document",
    title: "Impresión de Documentos",
    url: "/servicios/documentos",
  },
  {
    icon: "picture",
    title: "Impresión de Imágenes",
    url: "/servicios/imagenes",
  },
  {
    icon: "lightbulb-on",
    title: "Herramientas de Publicidad",
    url: "/servicios/publicidad",
  },
  {
    icon: "customize-edit",
    title: "Diseño Gráfico",
    url: "/servicios/diseno",
  },
  {
    icon: "square-plus",
    title: "Otros Servicios",
    url: "/servicios/otros",
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
    url: "https://wa.me/56994069861",
  },
];

export { carousel, footer, support, contact, social };
