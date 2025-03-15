"use client"

import { useState, useEffect, useCallback } from "react"
import { Maven_Pro } from "next/font/google"
import Image from "next/image"
import { T } from "./T"
import { useLocalization } from "../contexts/LocalizationContext"

const mavenPro = Maven_Pro({ subsets: ["latin"] })

const WORDS = [
  "preset.logoMinimalista",
  "preset.anime90s",
  "preset.pessoasV2",
  "preset.miniIcones",
  "preset.logoEsports",
  "preset.cartoon3D",
  "preset.animeUltra",
  "preset.paisagens",
  "preset.pixelArt",
]

const INITIAL_SELECTED = 1
const WORD_WIDTH = 166
const MOBILE_WORD_WIDTH = Math.floor(WORD_WIDTH * 0.6)

const LOGO_MINIMALISTA_IMAGES = {
  PT: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minimalista-1.jpg-SF6QYu71gOTSHEJGRX0MKkGw1ZoNJA.jpeg",
      alt: "Logo minimalista de coelho",
      descriptionKey: "showcase.logoMinimalista.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20-%20Logo%20Minimalista%202.jpg-zyuZsJBjAy6zjqPiA2UECopDswi3IA.jpeg",
      alt: "Logo minimalista de caminhada",
      descriptionKey: "showcase.logoMinimalista.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20-%20Logo%20Minimalista%204%20%281%29.jpg-xzfOeryB37AKV8aKaz9EFnSeDvy9gZ.jpeg",
      alt: "Logo minimalista de mordomo",
      descriptionKey: "showcase.logoMinimalista.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minimalista-5.jpg-oeC4jILdGYp3dJJwaNPP3YOGT3s18Z.jpeg",
      alt: "Logo minimalista de barbearia",
      descriptionKey: "showcase.logoMinimalista.4",
    },
  ],
  EN: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minimalista-1.jpg-SF6QYu71gOTSHEJGRX0MKkGw1ZoNJA.jpeg",
      alt: "Minimalist rabbit logo",
      descriptionKey: "showcase.logoMinimalista.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20-%20Logo%20Minimalista%202.jpg-zyuZsJBjAy6zjqPiA2UECopDswi3IA.jpeg",
      alt: "Minimalist hiking logo",
      descriptionKey: "showcase.logoMinimalista.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20-%20Logo%20Minimalista%204%20%281%29.jpg-xzfOeryB37AKV8aKaz9EFnSeDvy9gZ.jpeg",
      alt: "Minimalist butler logo",
      descriptionKey: "showcase.logoMinimalista.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minimalista-5.jpg-oeC4jILdGYp3dJJwaNPP3YOGT3s18Z.jpeg",
      alt: "Minimalist barber logo",
      descriptionKey: "showcase.logoMinimalista.4",
    },
  ],
}

const ANIME_90S_IMAGES = {
  PT: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-1.jpg-eDHJAON0O5MJN7VTNgfuxAtUKuSL35.jpeg",
      alt: "Personagem de anime de cabelo branco com arma",
      descriptionKey: "showcase.anime90s.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-5.jpg-ONvY8dCUzTWz8W2k1sK8DJ7im0Pyye.jpeg",
      alt: "Silhueta de lobo místico",
      descriptionKey: "showcase.anime90s.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-4.jpg-c5xk1AO25tNFRAQaqMx0E6wyn6MmTr.jpeg",
      alt: "Personagem misterioso com capa",
      descriptionKey: "showcase.anime90s.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-2.jpg-hHJerjs4iMw677uDrpsy5D5rmmUotY.jpeg",
      alt: "Mecha roxo na cidade",
      descriptionKey: "showcase.anime90s.4",
    },
  ],
  EN: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-1.jpg-eDHJAON0O5MJN7VTNgfuxAtUKuSL35.jpeg",
      alt: "White-haired anime character with gun",
      descriptionKey: "showcase.anime90s.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-5.jpg-ONvY8dCUzTWz8W2k1sK8DJ7im0Pyye.jpeg",
      alt: "Mystical wolf silhouette",
      descriptionKey: "showcase.anime90s.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-4.jpg-c5xk1AO25tNFRAQaqMx0E6wyn6MmTr.jpeg",
      alt: "Mysterious cloaked character",
      descriptionKey: "showcase.anime90s.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90s-2.jpg-hHJerjs4iMw677uDrpsy5D5rmmUotY.jpeg",
      alt: "Purple mecha in city",
      descriptionKey: "showcase.anime90s.4",
    },
  ],
}

const PESSOAS_V2_IMAGES = {
  PT: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Pessoasv2%202.jpg-26smTqpXZ9plEIT8R29wtXPsTpD2mT.jpeg",
      alt: "Selfie de mulher asiática com o Monte Fuji",
      descriptionKey: "showcase.pessoasV2.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pessoasv2-1.jpg-mBa7a1yO0VgeNyq8zM4ZrPAp4Pd8vk.jpeg",
      alt: "Mulher atlética com olhos verdes",
      descriptionKey: "showcase.pessoasV2.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Pessoasv2%203.jpg-x9l5rKyS4Kit168JYW3zzEL9YRNNOx.jpeg",
      alt: "Jovem gamer com headset RGB",
      descriptionKey: "showcase.pessoasV2.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pessoasv2-4.jpg-XThc9eeI1uIkt73G975QZxQ60GgN2j.jpeg",
      alt: "Mulher com olhos azuis na praia",
      descriptionKey: "showcase.pessoasV2.4",
    },
  ],
  EN: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Pessoasv2%202.jpg-26smTqpXZ9plEIT8R29wtXPsTpD2mT.jpeg",
      alt: "Asian woman selfie with Mount Fuji",
      descriptionKey: "showcase.pessoasV2.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pessoasv2-1.jpg-mBa7a1yO0VgeNyq8zM4ZrPAp4Pd8vk.jpeg",
      alt: "Athletic woman with green eyes",
      descriptionKey: "showcase.pessoasV2.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Pessoasv2%203.jpg-x9l5rKyS4Kit168JYW3zzEL9YRNNOx.jpeg",
      alt: "Young gamer with RGB headset",
      descriptionKey: "showcase.pessoasV2.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pessoasv2-4.jpg-XThc9eeI1uIkt73G975QZxQ60GgN2j.jpeg",
      alt: "Woman with blue eyes at beach",
      descriptionKey: "showcase.pessoasV2.4",
    },
  ],
}

const MINI_ICONES_IMAGES = {
  PT: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-3D-4.jpg-2OSVWviOAT3b0KqfoLSQxRSXUbfQ87.jpeg",
      alt: "Casa 3D colorida",
      descriptionKey: "showcase.miniIcones.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20-%20Icones%203D%203-XBwM0wmgqaqL5l63zxyIV5FbpdEFPF.png",
      alt: "Emoji 3D apaixonado",
      descriptionKey: "showcase.miniIcones.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-3D-3.jpg-YqnPXqPyw8UvR3qPomo77H1u1MYiqY.jpeg",
      alt: "Impressora 3D estilizada",
      descriptionKey: "showcase.miniIcones.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons-3D-1.jpg-QC8qnqb11MHXLFkNn9ATYYyY0I29rh.jpeg",
      alt: "Carro elétrico 3D",
      descriptionKey: "showcase.miniIcones.4",
    },
  ],
  EN: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-3D-4.jpg-2OSVWviOAT3b0KqfoLSQxRSXUbfQ87.jpeg",
      alt: "Colorful 3D house",
      descriptionKey: "showcase.miniIcones.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20-%20Icones%203D%203-XBwM0wmgqaqL5l63zxyIV5FbpdEFPF.png",
      alt: "Loving 3D emoji",
      descriptionKey: "showcase.miniIcones.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-3D-3.jpg-YqnPXqPyw8UvR3qPomo77H1u1MYiqY.jpeg",
      alt: "Stylized 3D printer",
      descriptionKey: "showcase.miniIcones.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons-3D-1.jpg-QC8qnqb11MHXLFkNn9ATYYyY0I29rh.jpeg",
      alt: "3D electric car",
      descriptionKey: "showcase.miniIcones.4",
    },
  ],
}

const LOGO_ESPORTS_IMAGES = {
  PT: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Z4kQLv-workflow815v18-2-ZCJ5JIF3T.jpg-2j5mvN10VzswIfJrESEC9M91wHdb0A.jpeg",
      alt: "Logo e-sports de rinoceronte vermelho e cinza",
      descriptionKey: "showcase.logoEsports.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/R6O8yx-workflow815v18-0-ZZDJRSXGB.jpg-aAQVaNEVH5aimOwB2weOAcTG6iXJyt.jpeg",
      alt: "Logo e-sports de lobo azul e branco",
      descriptionKey: "showcase.logoEsports.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o13wAq-workflow815v18-0-Z961TSYO9.jpg-aRywnzun9oOZd4ZKUCli4KTiEmL8ef.jpeg",
      alt: "Logo e-sports de lobo verde e branco",
      descriptionKey: "showcase.logoEsports.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cybernetic_dragon_cyber_white_and_blue_logo_with_a_text_that_says_NEURART_below.jpg-EJN3aPKOmA3YZbCjp5h5C3j88Xqll9.jpeg",
      alt: "Logo e-sports de dragão cibernético azul e branco",
      descriptionKey: "showcase.logoEsports.4",
    },
  ],
  EN: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Z4kQLv-workflow815v18-2-ZCJ5JIF3T.jpg-2j5mvN10VzswIfJrESEC9M91wHdb0A.jpeg",
      alt: "Red and gray rhino e-sports logo",
      descriptionKey: "showcase.logoEsports.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/R6O8yx-workflow815v18-0-ZZDJRSXGB.jpg-aAQVaNEVH5aimOwB2weOAcTG6iXJyt.jpeg",
      alt: "Blue and white wolf e-sports logo",
      descriptionKey: "showcase.logoEsports.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o13wAq-workflow815v18-0-Z961TSYO9.jpg-aRywnzun9oOZd4ZKUCli4KTiEmL8ef.jpeg",
      alt: "Green and white wolf e-sports logo",
      descriptionKey: "showcase.logoEsports.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cybernetic_dragon_cyber_white_and_blue_logo_with_a_text_that_says_NEURART_below.jpg-EJN3aPKOmA3YZbCjp5h5C3j88Xqll9.jpeg",
      alt: "Cybernetic blue and white dragon e-sports logo",
      descriptionKey: "showcase.logoEsports.4",
    },
  ],
}

const CARTOON_3D_IMAGES = {
  PT: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-8.jpg-BRzjyzJLolX9Ew9rgaNXt5rYTqz5MY.jpeg",
      alt: "Mulher elegante em vestido borgonha",
      descriptionKey: "showcase.cartoon3D.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-7.jpg-bKyv4XbA7geUxot3FhRnKdR8l0hA21.jpeg",
      alt: "Mulher com filhote de Rottweiler",
      descriptionKey: "showcase.cartoon3D.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-5.jpg-A3xGz9PY2KSJh9AyqVR0VdxlYbHyXl.jpeg",
      alt: "Casal romântico no jardim",
      descriptionKey: "showcase.cartoon3D.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-1.jpg-8fBHSqgO6ZtwNR6pdsjLnrj4RTw7Z5.jpeg",
      alt: "Raposa branca dormindo",
      descriptionKey: "showcase.cartoon3D.4",
    },
  ],
  EN: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-8.jpg-BRzjyzJLolX9Ew9rgaNXt5rYTqz5MY.jpeg",
      alt: "Elegant woman in burgundy dress",
      descriptionKey: "showcase.cartoon3D.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-7.jpg-bKyv4XbA7geUxot3FhRnKdR8l0hA21.jpeg",
      alt: "Woman with Rottweiler puppy",
      descriptionKey: "showcase.cartoon3D.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-5.jpg-A3xGz9PY2KSJh9AyqVR0VdxlYbHyXl.jpeg",
      alt: "Romantic couple in garden",
      descriptionKey: "showcase.cartoon3D.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-1.jpg-8fBHSqgO6ZtwNR6pdsjLnrj4RTw7Z5.jpeg",
      alt: "Sleeping white fox",
      descriptionKey: "showcase.cartoon3D.4",
    },
  ],
}

const ANIME_ULTRA_IMAGES = {
  PT: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-2.jpg-c6JgUlnqh9VXh83WpTlt7MgGSQYzOi.jpeg",
      alt: "Guerreiro anime com espada",
      descriptionKey: "showcase.animeUltra.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-6.jpg-b7C6X8P0jJjNvYqbjCJFz7HNJlgEdi.jpeg",
      alt: "Ninja com bandana",
      descriptionKey: "showcase.animeUltra.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-1.jpg-zlqPzNiXX55I6zAxsEomWncqI0jI7t.jpeg",
      alt: "Garota anime na floresta",
      descriptionKey: "showcase.animeUltra.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-5.jpg-7UoxG6c8olnYU7XtgjpCLiQHIGw79B.jpeg",
      alt: "Personagem de cabelo branco em ação",
      descriptionKey: "showcase.animeUltra.4",
    },
  ],
  EN: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-2.jpg-c6JgUlnqh9VXh83WpTlt7MgGSQYzOi.jpeg",
      alt: "Anime warrior with sword",
      descriptionKey: "showcase.animeUltra.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-6.jpg-b7C6X8P0jJjNvYqbjCJFz7HNJlgEdi.jpeg",
      alt: "Ninja with bandana",
      descriptionKey: "showcase.animeUltra.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-1.jpg-zlqPzNiXX55I6zAxsEomWncqI0jI7t.jpeg",
      alt: "Anime girl in forest",
      descriptionKey: "showcase.animeUltra.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anime-5.jpg-7UoxG6c8olnYU7XtgjpCLiQHIGw79B.jpeg",
      alt: "White-haired character in action",
      descriptionKey: "showcase.animeUltra.4",
    },
  ],
}

const PAISAGENS_IMAGES = {
  PT: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%201.jpg-esNnGSo4FORd4AkAuibAckBKVsZLaF.jpeg",
      alt: "Montanha nevada",
      descriptionKey: "showcase.paisagens.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%202.jpg-zi6l8ri1kuDoZzkRTjpyUxnV7YG4bp.jpeg",
      alt: "Dunas do deserto",
      descriptionKey: "showcase.paisagens.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%203.jpg-MDA4p4rXerqTlr9NbfgS7jI3T6CIAU.jpeg",
      alt: "Aurora boreal sobre geleira",
      descriptionKey: "showcase.paisagens.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%204.jpg-GWsfqTgYTGGTc9HOXu2UqpusnVnYjI.jpeg",
      alt: "Praia tropical vista aérea",
      descriptionKey: "showcase.paisagens.4",
    },
  ],
  EN: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%201.jpg-esNnGSo4FORd4AkAuibAckBKVsZLaF.jpeg",
      alt: "Snowy mountain",
      descriptionKey: "showcase.paisagens.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%202.jpg-zi6l8ri1kuDoZzkRTjpyUxnV7YG4bp.jpeg",
      alt: "Desert dunes",
      descriptionKey: "showcase.paisagens.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%203.jpg-MDA4p4rXerqTlr9NbfgS7jI3T6CIAU.jpeg",
      alt: "Northern lights over glacier",
      descriptionKey: "showcase.paisagens.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hiperrealismo%20-%20Natureza%204.jpg-GWsfqTgYTGGTc9HOXu2UqpusnVnYjI.jpeg",
      alt: "Tropical beach aerial view",
      descriptionKey: "showcase.paisagens.4",
    },
  ],
}

const PIXEL_ART_IMAGES = {
  PT: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%201.jpg-Tm5VtsSyflxdwe8Q8nR24cPwhydTEu.jpeg",
      alt: "Título do jogo Burrito Quest",
      descriptionKey: "showcase.pixelArt.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%202.jpg-KYPA9ua6pHqBdjWM6NvcxN7UZexBED.jpeg",
      alt: "Garota da fazenda com galinha",
      descriptionKey: "showcase.pixelArt.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%203.jpg-I25kSiLfAoMdVeblvIJZCPcieBYbkx.jpeg",
      alt: "Mulher de quimono",
      descriptionKey: "showcase.pixelArt.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%204.jpg-cmYRuWnS11igUsqdrjNGR5jDfrBzak.jpeg",
      alt: "Guerreiro de cabelo vermelho",
      descriptionKey: "showcase.pixelArt.4",
    },
  ],
  EN: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%201.jpg-Tm5VtsSyflxdwe8Q8nR24cPwhydTEu.jpeg",
      alt: "Burrito Quest game title",
      descriptionKey: "showcase.pixelArt.1",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%202.jpg-KYPA9ua6pHqBdjWM6NvcxN7UZexBED.jpeg",
      alt: "Farm girl with chicken",
      descriptionKey: "showcase.pixelArt.2",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%203.jpg-I25kSiLfAoMdVeblvIJZCPcieBYbkx.jpeg",
      alt: "Woman in kimono",
      descriptionKey: "showcase.pixelArt.3",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pixel%20Art%204.jpg-cmYRuWnS11igUsqdrjNGR5jDfrBzak.jpeg",
      alt: "Red-haired warrior",
      descriptionKey: "showcase.pixelArt.4",
    },
  ],
}

export default function ModelShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(INITIAL_SELECTED)
  const [isMobile, setIsMobile] = useState(false)
  const { language } = useLocalization()
  const [isPaused, setIsPaused] = useState(false)
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const handleTouch = (index: number | null) => {
    if (isMobile) {
      setTouchedIndex(index)
    }
  }

  const getImages = useCallback(() => {
    const lang = language.toUpperCase() as "PT" | "EN"
    switch (selectedIndex) {
      case 0:
        return LOGO_MINIMALISTA_IMAGES[lang]
      case 1:
        return ANIME_90S_IMAGES[lang]
      case 2:
        return PESSOAS_V2_IMAGES[lang]
      case 3:
        return MINI_ICONES_IMAGES[lang]
      case 4:
        return LOGO_ESPORTS_IMAGES[lang]
      case 5:
        return CARTOON_3D_IMAGES[lang]
      case 6:
        return ANIME_ULTRA_IMAGES[lang]
      case 7:
        return PAISAGENS_IMAGES[lang]
      case 8:
        return PIXEL_ART_IMAGES[lang]
      default:
        return []
    }
  }, [selectedIndex, language])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    setTouchedIndex(null)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % WORDS.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused])

  const halfWord = (isMobile ? MOBILE_WORD_WIDTH : WORD_WIDTH) / 2

  const selectedImages = getImages()

  const handleSectionClick = (index: number) => {
    setSelectedIndex(index)
    setIsPaused(true)

    setTimeout(() => {
      setIsPaused(false)
    }, 10000)
  }

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src))
  }

  return (
    <section className="py-8 sm:py-16 relative flex flex-col items-center justify-center text-center">
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="mb-4 sm:mb-6">
          <h2
            className="text-xl sm:text-2xl font-bold leading-tight"
            style={{
              fontFamily: "Kode Mono, monospace",
            }}
          >
            <T id="model.title" />
          </h2>
        </div>

        <div className="relative h-[28px] mb-4 sm:mb-6 w-full flex justify-center overflow-hidden">
          <div
            className="absolute left-0 h-[28px] z-20"
            style={{
              width: isMobile ? "20%" : "calc(32% + 104px)",
              background:
                "linear-gradient(to right, #101010 85%, transparent 100%), linear-gradient(to left, transparent 0%, #101010 5%, #101010 100%)",
              top: "3px",
            }}
          />
          <div
            className="absolute right-0 h-[28px] z-20"
            style={{
              width: isMobile ? "20%" : "calc(32% + 104px)",
              background:
                "linear-gradient(to left, #101010 85%, transparent 100%), linear-gradient(to right, transparent 0%, #101010 5%, #101010 100%)",
              top: "3px",
            }}
          />
          {isPaused && (
            <div className="absolute top-0 right-0 bg-[#181818] text-white text-xs px-2 py-1 rounded-bl-md">
              Pausado
            </div>
          )}
          <div
            className="relative w-full max-w-[240px] sm:max-w-[600px] overflow-hidden mx-auto"
            style={{ height: "28px" }}
          >
            <div
              className="absolute whitespace-nowrap flex transition-transform duration-500"
              style={{
                transform: `translateX(calc(${isMobile ? 120 : 300}px - ${halfWord}px - ${
                  selectedIndex * (isMobile ? MOBILE_WORD_WIDTH : WORD_WIDTH)
                }px))`,
              }}
            >
              {WORDS.map((word, index) => (
                <button
                  key={word}
                  onClick={() => handleSectionClick(index)}
                  className="inline-flex items-center justify-center relative"
                  style={{
                    width: `${isMobile ? MOBILE_WORD_WIDTH : WORD_WIDTH}px`,
                    padding: "0 4px",
                  }}
                >
                  <span
                    className={`${mavenPro.className} text-sm sm:text-[20px] py-1 ${
                      index === selectedIndex ? "text-white" : "text-white/60"
                    }`}
                    style={{
                      padding: "0.125rem 0",
                      transition: "all 0.3s ease-out",
                      transform: index === selectedIndex ? (isMobile ? "scale(1.05)" : "scale(1.1)") : "scale(1)",
                    }}
                  >
                    <T id={word} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 md:gap-8">
            {selectedImages.length > 0
              ? selectedImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg aspect-square w-full flex-shrink-0 group"
                    style={{ paddingBottom: "115%" }}
                    onTouchStart={() => handleTouch(index)}
                    onTouchEnd={() => handleTouch(null)}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      layout="fill"
                      objectFit="cover"
                      className={`rounded-lg transition-opacity duration-300 ${
                        loadedImages.has(img.src) ? "opacity-100" : "opacity-0"
                      }`}
                      loading="lazy"
                      onLoad={() => handleImageLoad(img.src)}
                    />
                    {!loadedImages.has(img.src) && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
                    )}
                    <div
                      className={`absolute inset-0 bg-[#101010] bg-opacity-80 flex items-center justify-center transition-opacity duration-300 ${
                        touchedIndex === index || (!isMobile && "group-hover:opacity-100")
                      } ${touchedIndex === index ? "opacity-100" : "opacity-0"}`}
                    >
                      <p className="text-white text-center px-2 py-1 text-xs sm:text-sm">
                        <T id={img.descriptionKey} />
                      </p>
                    </div>
                  </div>
                ))
              : Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-lg aspect-square w-full flex-shrink-0 group"
                      style={{ paddingBottom: "115%" }}
                    >
                      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
                    </div>
                  ))}
          </div>
        </div>

        <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400 italic max-w-md">
          <T id="model.note" />
        </p>
      </div>
    </section>
  )
}

