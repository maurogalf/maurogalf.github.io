import memolitest from "../images/memolitest.jpg";
import moviesapp from "../images/moviesapp.jpg";
import studenta  from "../images/studenta.jpg";
import zimith from "../images/zimith.jpg";
import rickandmorty  from "../images/rickandmorty.jpg";
import ecommerce from "../images/ecommerce.jpg";

export const projects = [
    {
        nombre: "Backend E-commerce",
        descripcion: "Proyecto backend de E-commerce para el curso de Node JS en Coderhuse. En proceso...",
        presentacion: ecommerce,
        tecnologias: "NODE JS EXPRESS MONGODB FIREBASE",
        repositorio: "https://github.com/maurogalf/chatSocket",
        link: "https://e-commerce-maurogalf.herokuapp.com/"
    },
    {
        nombre: "MemOliTest",
        descripcion: "El clásico juego Memotest. Mi sobrina es fanática de los memotest y ya le hemos regalado muchos físicos, así que se me ocurrio regalarle uno digital. Es un componente que contiene el juego y renderiza distinta base de imagenes.",
        presentacion: memolitest,
        tecnologias: "REACT CSS PROPIO",
        repositorio: "https://github.com/maurogalf/memotest-react",
        link: "https://maurogalf.github.io/memotest-react/"
    },
    {
        nombre: "Movies App",
        descripcion: "Consumiendo la API de The Movies Database, esta app lista las 20 películas mas nuevas de la API, también tiene un buscador de películas.",
        presentacion: moviesapp,
        tecnologias: "REACT, BOOTSTRAP, CONSUMO DE API, SWEET-ALERT",
        repositorio: "https://github.com/maurogalf/movies-app-react",
        link: "https://maurogalf.github.io/movies-app-react/"
    },
    {
        nombre: "Libreria Studenta E-commerce",
        descripcion: "Proyecto de E-commerce realizado en el curso de React en Coderhouse. Trabaja con datos almacenados en Firebase para representar los productos y al emitir una orden se graba en la misma base.",
        presentacion: studenta,
        tecnologias: "REACT, CSS PROPIO, FIREBASE, SWEET-ALERT",
        repositorio: "https://github.com/maurogalf/libreria-studenta",
        link: "https://maurogalf.github.io/libreria-studenta/"
    },
    {
        nombre: "Zimith E-commerce",
        descripcion: "Proyecto de E-commerce para el curso de Desarrollo Web y Javascript en  Coderhouse. Se uso SASS como pre-procesador de CSS.",
        presentacion: zimith,
        tecnologias: "JQUERY, BOOTSTRAP, CONSUMO DE API, SWEET-ALERT",
        repositorio: "https://github.com/maurogalf/zimith",
        link: "https://maurogalf.github.io/zimith/"
    },
    {
        nombre: "Rick And Morty Characters",
        descripcion: "Esta aplicación hace un llamado a la API de Rick and Morty y muestra de a 20 personajes por página. Es un ejercicio realizado para aprender a usar Vite con React.",
        presentacion: rickandmorty,
        tecnologias: "REACT, BOOTSTRAP, CONSUMO DE API, SWEET-ALERT",
        repositorio: "https://github.com/maurogalf/react-vite-rickandmorty",
        link: "https://maurogalf.github.io/react-vite-rickandmorty/"
    },
]