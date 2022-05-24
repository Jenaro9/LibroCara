


function login()
{
	let usuario = document.getElementById("user").value;
	let Contraseña = document.getElementById("password").value;	


	if(usuario = "infotec" && Contraseña == "2022")
	{
		const userName = document.querySelector(".userName");
		userName.innerHTML = "Juan Perez";

	}
	else
	{
alert("Verifique sus credenciales");
	}
}
