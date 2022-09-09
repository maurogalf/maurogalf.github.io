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
    github: "https://github.com/maurogalf"
}