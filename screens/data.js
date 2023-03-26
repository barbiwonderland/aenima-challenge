/*ver de mover a otra carpeta*/

import {
  cardBlogSm_1,
  cardBlogSm_2,
  cardBlogSm_3,
  cardBlog_big1,
  cardBlog_big2,
  Card_01,
  Card_02,
  Card_03,
} from "../public/Assets/img/index.js"

export const trending = [
  {
    id: 1,
    img: Card_01,
    title: "Montañas y magia",
    description: "Aquí la descripción para Montañas y magia.",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    img: Card_02,
    title: "Playa y Sol",
    description: "La descripción de Playas y sol debe ser esta.",
    date: "01/01/2023",
  },
  {
    id: 3,
    img: Card_03,
    title: "Nieve y aventura",
    description: "Contiene la información de Nieve y aventura.",
    date: "01/01/2023",
  },
]

export const blog = [
  {
    id: 1,
    img: cardBlog_big1,
    title: "Artículo de puente",
    description:
      "Un puente es una construcción que permite salvar un accidente geográfico como un río.",
    badge: "ciudad",
    footer: "Hace 2m",
  },
  {
    id: 2,
    img: cardBlog_big2,
    title: "Artículo de bosque",
    description:
      "Lugar poblado de árboles y arbustos. Área con una importante densidad de árboles.",
    badge: "aventura",
    footer: "Hace 15m",
  },
  {
    id: 3,
    img: cardBlogSm_1,
    title: "Artículo de elefante",
    description: "",
    badge: "",
    footer: "Hace 3h",
  },
  {
    id: 4,
    img: cardBlogSm_2,
    title: "Artículo de loro",
    description: "",
    badge: "",
    footer: "Hace 4h",
  },
  {
    id: 5,
    img: cardBlogSm_3,
    title: "Artículo de camino",
    description: "",
    badge: "",
    footer: "Hace 8h",
  },
]
