const campers = [
    {
        imagen : "anita.jpg",
        nombre : "Ana Maria",
        edad : 16,
        promedio : 4.5,
        nivelCampus : "intermedio",
        nivelIngles : "beginner",
        especialidad : "frontEnd",
        expertoTecnologia : "html",
        detalle : "Creadora de contenido",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 1
    },
    {
        imagen : "kevin.jpg",
        nombre : "Kevin Lopez",
        edad : 17,
        promedio : 3.5,
        nivelCampus : "intermedio",
        nivelIngles : "beginner",
        especialidad : "backEnd",
        expertoTecnologia : "css",
        detalle : "Sin miedo al exito",
        celular : "3054869806",
        direccion : "Calle 18 carrera 12",
        id: 2
    },
    {
        imagen : "carlitos.jpg",
        nombre : "Carlos Robles",
        edad : 27,
        promedio : 4.0,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "fullStack",
        expertoTecnologia : "javascript",
        detalle : "Hazlo ahora o nunca",
        celular : "3222433137",
        direccion : "Cr6c #14-43 candelaria",
        id: 3
    },
    {
        imagen : "johan.jpg",
        nombre : "Johan Nuñez",
        edad : 17,
        promedio : 4.0,
        nivelCampus : "intermedio",
        nivelIngles : "beginner",
        especialidad : "fullStack",
        expertoTecnologia : "html",
        detalle : "Ejecutivo del gobierno",
        celular : "3054869806",
        direccion : "Brisas de primavera 1",
        id: 4
    },
    {
        imagen : "sanchez.jpg",
        nombre : "Juan Sanchez",
        edad : 17,
        promedio : 4.3,
        nivelCampus : "intermedio",
        nivelIngles : "beginner",
        especialidad : "backEnd",
        expertoTecnologia : "javascript",
        detalle : "Cualquier cosa sirve",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 5
    },
    {
        imagen : "yisus.jpg",
        nombre : "Jesus Roman",
        edad : 17,
        promedio : 3.8,
        nivelCampus : "intermedio",
        nivelIngles : "beginner",
        especialidad : "backEnd",
        expertoTecnologia : "html",
        detalle : "Sopa de lentejas",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 6
    },
    {
        imagen : "cristian.jpg",
        nombre : "Cristian Luna",
        edad : 20,
        promedio : 4.0,
        nivelCampus : "intermedio",
        nivelIngles : "beginner",
        especialidad : "fullStack",
        expertoTecnologia : "javascript",
        detalle : "Hola mundo",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 7
    },
    {
        imagen : "julian.jpg",
        nombre : "Julian Camacho",
        edad : 17,
        promedio : 5.0,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "fullStack",
        expertoTecnologia : "html",
        detalle : "Cristiano > fútbol",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 8
    },
    {
        imagen : "david.jpg",
        nombre : "David Pineda",
        edad : 17,
        promedio : 4.5,
        nivelCampus : "intermedio",
        nivelIngles : "beginner",
        especialidad : "frontEnd",
        expertoTecnologia : "html",
        detalle : "El dinero no es la clave del éxito",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 9
    },
    {
        imagen : "german.jpg",
        nombre : "German Torres",
        edad : 17,
        promedio : 4.8,
        nivelCampus : "intermedio",
        nivelIngles : "advanced",
        especialidad : "frontend",
        expertoTecnologia : "html",
        detalle : "La vida es solo una",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 10
    },
    {
        imagen : "juan.jpg",
        nombre : "Juan Duran",
        edad : 21,
        promedio : 4.0,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "fullStack",
        expertoTecnologia : "javascript",
        detalle : "Creador de red social mundial instagram",
        celular : "3054869806",
        direccion : "calle 19 casa 34 portal campestre ii",
        id: 11
    },
    {
        imagen : "jose.jpg",
        nombre : "Jose Miguel",
        edad : 18,
        promedio : 3.0,
        nivelCampus : "intermedio",
        nivelIngles : "advanced",
        especialidad : "frontEnd",
        expertoTecnologia : "html",
        detalle : "Ok.",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 12
    },
    {
        imagen : "raul.jpg",
        nombre : "Raul Tarazona",
        edad : 18,
        promedio : 5.0,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "fullStack",
        expertoTecnologia : "html",
        detalle : "No se",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 13
    },
    {
        imagen : "montañez.jpg",
        nombre : "Jose Montañez",
        edad : 17,
        promedio : 3.4,
        nivelCampus : "intermedio",
        nivelIngles : "advanced",
        especialidad : "backEnd",
        expertoTecnologia : "python",
        detalle : "Esclavo de las mujeres",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 14
    },
    {
        imagen : "ronald.jpg",
        nombre : "Ronald Cardenas",
        edad : 25,
        promedio : 5.0,
        nivelCampus : "intermedio",
        nivelIngles : "beginner",
        especialidad : "fullStack",
        expertoTecnologia : "php",
        detalle : "Que ladilla este cuestionario",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 15
    },
    {
        imagen : "josue.jpg",
        nombre : "Josue Giraldo",
        edad : 20,
        promedio : 4.6,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "fullStack",
        expertoTecnologia : "javascript",
        detalle : "Hola mundo",
        celular : "3162552496",
        direccion : "Dirección: Av 52N #21-110.",
        id: 16
    },
    {
        imagen : "haissam.jpg",
        nombre : "Haissam Chacon",
        edad : 23,
        promedio : 4.0,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "backEnd",
        expertoTecnologia : "java",
        detalle : "Hola mundo",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 17
    },
    {
        imagen : "yohan.jpg",
        nombre : "Yohan Pedraza",
        edad : 17,
        promedio : 5.0,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "fullStak",
        expertoTecnologia : "javascript",
        detalle : "Creador de whatsapp",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 18
    },
    {
        imagen : "diego.jpg",
        nombre : "Diego Aceros",
        edad : 20,
        promedio : 5.0,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "fullStack",
        expertoTecnologia : "java",
        detalle : "Buenos dias",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 19
    },
    {
        imagen : "amed.jpg",
        nombre : "Amed Felipe",
        edad : 18,
        promedio : 3.5,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "fullStack",
        expertoTecnologia : "javascript",
        detalle : "No se",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 20
    },
    {
        imagen : "sebastian.jpg",
        nombre : "Sebastian Daniel",
        edad : 19,
        promedio : 4.0,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "backEnd",
        expertoTecnologia : "php",
        detalle : "La vida se trata de metas",
        celular : "3054869806",
        direccion : "Call 109 #15-67",
        id: 21
    },
    {
        imagen : "deiby.jpg",
        nombre : "Deiby Alexander",
        edad : 17,
        promedio : 4.0,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "fullStack",
        expertoTecnologia : "html",
        detalle : "Lorem ipsum",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 22
    },
    {
        imagen : "thomas.jpg",
        nombre : "Thomas Posada",
        edad : 17,
        promedio : 5.0,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "fullStack",
        expertoTecnologia : "css",
        detalle : "Creador de javascript",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 23
    },
    {
        imagen : "miguel.jpg",
        nombre : "Miguel Niño",
        edad : 19,
        promedio : 4.3,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "fullStack",
        expertoTecnologia : "vue",
        detalle : "Si puedes imaginarlo puedes codearlo",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 24
    },
    {
        imagen : "santiago.jpg",
        nombre : "Santiago Lopez",
        edad : 40,
        promedio : 4.4,
        nivelCampus : "intermedio",
        nivelIngles : "middle",
        especialidad : "backEnd",
        expertoTecnologia : "java",
        detalle : "12 + 1",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 25
    },
    {
        imagen : "carlos.jpg",
        nombre : "Carlos Florez",
        edad : 17,
        promedio : 5.0,
        nivelCampus : "intermedio",
        nivelIngles : "advanced",
        especialidad : "backEnd",
        expertoTecnologia : "python",
        detalle : "La moda es moda si te acomoda",
        celular : "3054869806",
        direccion : "carrera 3A #1NB 54 Bosques de Aranjuez",
        id: 26
    },
]
