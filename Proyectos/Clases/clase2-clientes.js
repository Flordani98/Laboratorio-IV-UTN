//con export se pueden exportar variables, funciones, clases, etc. para que puedan ser utilizadas en otros archivos
//indico con export que esta variable se va a exportar
export const clientesArreglo = [
    {
        id: 1,
        nombre: "Juan",
        edad: 20,

        items:[
            { producto: "Teclado", precio: 1000, cantidad: 1,},
            { producto: "Mouse", precio: 500, cantidad: 7,},
            { producto: "Monitor", precio: 100000, cantidad: 2,},
        ]
    },
    {
        id: 2,
        nombre: "Pablo",
        edad: 30,

        items:[
            { producto: "Gabinete", precio: 5000, cantidad: 1,},
            { producto: "Fuente", precio: 500, cantidad: 5,},
            { producto: "Placa de video", precio: 100000, cantidad: 8,},
            { producto: "Mouse", precio: 600, cantidad: 3,},
        ]
    },
    {
        id: 3,
        nombre: "German",
        edad: 40,

        items:[
            { producto: "Procesador", precio: 20000, cantidad: 1,},
            { producto: "Ram x 2", precio: 6000, cantidad: 1,},
            { producto: "Coolers x4", precio: 50000, cantidad: 4,},
        ]
    },

];

///con export default se exporta por defecto la variable, funcion, clase, eetc. que se esta exportando
//se importo en el archivo gui