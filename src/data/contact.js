const getEdad = () => {
    const hoy = new Date(); 
    const nacimiento = new Date("1988/09/18 00:00:00")
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();
    if (diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
        edad--
    }
    return edad
}


export const contact = {
    domicilio : "Av. Colón 6200, Córdoba, Argentina",
    telefono: "+54 9 3512066071",
    email: "maurogalfonso@gmail.com",
    edad: getEdad(),
    linkedin: "https://www.linkedin.com/in/mauro-alfonso",
    github: "https://github.com/maurogalf",
    about: `Me considero una persona activa y curiosa, me motiva mucho entender cómo funcionan las cosas y luego buscar la forma de optimizarlo. Autodidacta y siempre con ganas de aprender nuevas habilidades. Me animan los retos y pienso que no los hay imposibles si le dedicas el tiempo apropiado. Trabaje durante 13 años en la misma empresa, pero no tuve siempre el mismo trabajo ya que pasé por casi todas las áreas. Con una fuerte base en la información y el manejo de datos me desempeñé como comprador los últimos años, también fui responsable de automatizar procesos de distintas áreas, en especial con macros de Excel. Con una educación técnica siempre me apasionó la tecnología y la programación, por esta razón es que me estoy capacitando como desarrollador, ya habiendo finalizado cursos de Desarrollo Web, JavaScript y React JS. Actualmente estoy aprendiendo Node JS.`
}