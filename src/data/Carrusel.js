import vidrio from "../assets/images/vidrio.jpg"
import c1 from "../assets/images/c1.jpg"
import depa from "../assets/images/depa.jpg"
import random from "../assets/images/random.jpg"

export const departamentos = [
  {
    id: 1,
    nombre: "Departamento 1",
    descripcionCorta: "Departamento céntrico con excelente vista.",
    descripcionLarga:
      "Este departamento cuenta con 3 habitaciones, 2 baños, cocina integral, sala amplia y balcón con vista panorámica.",
    ubicacion: "Calle 123, Ciudad",
    imagen: vidrio,
    fotos: [c1, depa, random],
  },
  {
    id: 2,
    nombre: "Departamento 2",
    descripcionCorta: "Moderno departamento amueblado.",
    descripcionLarga:
      "Cuenta con 2 habitaciones, 1 baño, cocina moderna y terraza.",
    ubicacion: "Avenida Principal, Ciudad",
    imagen: depa,
    fotos: [c1, depa, random],
  },
]
