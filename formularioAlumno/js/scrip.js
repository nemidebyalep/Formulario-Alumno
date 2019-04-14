
function agregarFila(){
   var nombre = document.getElementById("nombre").value; 
   var  fecha = document.getElementById("fecha").value; 
   var  sexo = prueba();
   var  escuela = document.getElementById("ep").value; 
   var  ciclo = document.getElementById("ciclo").value; 
   document.getElementById("tablita").insertRow(-1).innerHTML=

   "<td>"+nombre+"</td><td>"+fecha+"</td><td>"+sexo+"</td><td>"+escuela+"</td><td>"+ciclo+"</td>";
    
}
function prueba(){
    var s="";
    var  sex1 = document.getElementById("sex1"); 
    var  sex2 = document.getElementById("sex2"); 

    if(sex1.checked == true) {
        return sex1.value;
    }else {
        return sex2.value;
    }
}

