
$(document).ready(function(){
	$(".submit-btn").click(function(){
		
		if(!(/^([a-z]{1,13})+$/.test($("#name").val()))) {
			$("#name").parent().append("<span>Ingrese nombre correcto</span>");
		}
		$("#name").val("");
		
		if(!(/^([a-z]{1,13})+$/.test($("#lastname").val()))) {
			$("#lastname").parent().append("<span>Ingrese apellido correcto</span>");
		}
		$("#lastname").val("");
		
		if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#input-email").val()))) {
			$("#input-email").parent().append("<span>Ingrese un correo valido</span>");
		}
		$("#input-email").val("");
		
		if(($("#input-password").val() == "password") || ($("#input-password").val() == 123456) || ($("#input-password").val() == 098765) || (($("#input-password").val()).length < 5)){
			$("#input-password").parent().append("<span>Ingrese una contraseña valida</span>");
		}
		$("#input-password").val("");
		
		if($("select").val() === "0") {
   			$("select").parent().append("<span>Elija una las opciones</span>");
  		}	
		$("select").val("0"); 
	});
});


