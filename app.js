//Simulador venta de pastas

function inicio (){
    alert(`Bienvenido ${nombre} a nuestra tienda.`);
}
function comprarProducto(){
   producto = prompt ("Ingrese una Opcion : \n 1: Sorrentinos de Jamon y Queso \n 2: Sorrentinos de Ternera y Queso \n 3: Sorrentinos de Calabaza y Queso")
      switch(producto){
        case "1":
            alert("Elegiste Sorrentinos de Jamon y Queso ");
            break;
        case "2":
            alert("Elegiste Sorrentinos de Ternera y Queso ");
            break;
        case "3":
            alert("Elegiste Sorrentinos de Calabaza y Queso ");
            break;
        default:
            alert("La opcion elegida es INCORRECTA ");
            break;           
    }

    opcion = prompt("Que desea realizar  \n 2 : Pagar Compra \n 3 : Salir ");
    

}

function finalizarCompra(){
    if(producto==="1"){
        alert(`Sorrentinos de Jamon y Queso , $ ${sorrentinojyq + 100} , incluye gastos de envio.`);
    }
    else if ( producto==="2"){
        alert(`Sorrentinos de Ternera y Queso , $ ${sorrentinotyq + 100} , incluye gastos de envio. `);
    }
    else if (producto==="3"){
        alert(`Sorrentinos de Calabaza y Queso , $ ${sorrentinocyq + 100} , incluye gastos de envio.`);
    }
}

//variables

 let producto;
 let sorrentinojyq = 500;
 let sorrentinotyq = 550;
 let sorrentinocyq = 450;

 let nombre = prompt("Ingrese su nombre");
 inicio();
 let opcion = prompt("Que desea realizar \n 1 : Comprar Sorrentinos \n 2 : Pagar Comprar \n 3 : Salir ");

 while (opcion !=="3") {
    if (opcion === "1"){
        comprarProducto();
    }
    if (opcion === "2"){
        finalizarCompra();
        opcion = "3"
    }
    
 }

 alert("Gracias por su compra");
 