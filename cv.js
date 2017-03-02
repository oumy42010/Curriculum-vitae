 

	function afficher(id) {
		$(id).toggle();
	}


	function valider(){
		console.log($("#email").val().includes("@"));
		if(!$("#email").val().includes("@")){
			window.alert("Adresse mail est incorrect, veuillez rettaper!");
		}
		
		console.log($("#phone").val().length);
		if($("#phone").val().length != 10){
			window.alert("Le numéro de téléphone doit avoir 10 chiffres");	
		}
	}
