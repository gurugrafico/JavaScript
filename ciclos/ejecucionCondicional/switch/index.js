let expr = "Plátanos"

switch(expr) {
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $43 el kilo")
        break;
    case "Plátanos":
        console.log("El plátano cuesta $30 pesos el kilo")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $25 el kilo")
        break;
    default:
        console.log(`Lo siento, no contamos con ${expr}`);
}

console.log("¿Hay algo más que desees?");