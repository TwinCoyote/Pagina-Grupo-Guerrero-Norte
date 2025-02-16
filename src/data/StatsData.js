import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

export const StatsData = [
  {
    icon: <GiEarthAmerica style={{ color: "#f3a82e" }} />,
    tittle: "Variedad de Propiedades",
    desc: "Encuentra departamentos, casas y locales comerciales que se adaptan a tus necesidades.",
  },
  {
    icon: <MdAirplanemodeActive style={{ color: "#047bf1" }} />,
    tittle: "Materiales de Calidad",
    desc: "Ofrecemos cristales y vidrios de alta resistencia, además de otros insumos para la construcción.",
  },
  {
    icon: <MdTimer style={{ color: "#f34f2e" }} />,
    tittle: "Rapidez y Eficiencia",
    desc: "Atención ágil y entrega puntual en todos nuestros servicios y productos.",
  },
  {
    icon: <FaMoneyCheck style={{ color: "#3af576" }} />,
    tittle: "Planes de Pago Flexibles",
    desc: "Facilidades de pago y opciones personalizadas para que concretes tus proyectos.",
  },
]
