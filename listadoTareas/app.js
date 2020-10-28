//const process = require('process');
const fs = require ("fs");
const process = require ("process")
let tareasJSON = fs.readFileSync("./tareas.json","utf8");
let tareasJs = JSON.parse(tareasJSON);
//let laInstruccionQueElUsuarioTipeo = 'listarTareas';



switch(process.argv[2]) {
	case 'listarTareas':
        console.log ("Este es el listado de tareas que existen"+"\n"),
        console.log ("--------------------------------------------")
        for (let i = 0; i <= tareasJs.length; i++) {
            console.log ( (i+1) + ". " + tareasJs[i].titulo);
        }
        break;
    
    case 'crearTareas':
        let nuevaTarea={
            titulo: process.argv[3],
            estado: "pendiente"
        }

        tareasJs.push(nuevaTarea);
        JSON.stringify(tareasJs);
        fs.writeFileSync("./tareas.json", JSON.stringify(tareasJs, null, 2) ) //escribe en un archivo le digo donde y sobreescribe (hay que reescribir con el nuevo array que tomo las ultimas y sumo ...y convierto a json)
        console.log ("Se ha creado una nueva tarea!")
        break;

    case "filtrarTarea":
        //recuperar estado que quiero filtrat
        //generar array con las tareas que cumplan el estado que quiere buscar  array fiter ()

	default:
		console.log("No entiendo cual es la instrucción que querés ejecutar :(")
}

//console.log (nuevaTarea)