document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = document.querySelector("#telefone").value;;
  let cliente = document.querySelector("#cliente").value;
  let data = document.querySelector("#data").value;
  let hora = document.querySelector("#hora").value;
  let valor = document.querySelector("#valor").value;
  let descricao = document.querySelector("#descricao").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*Dentis *%0A
		*Nome: *%0A
		${cliente}%0A
		*Data: *%0A
		${data}%0A
		*Hora: *%0A
		${hora}%0A
		*Valor: *%0A
		${valor}%0A
		*Descricao: *%0A
		${descricao}`;

  if (cliente === "" || data === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltam alguns dados...`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Enviado!!`;

  window.open(url);
});
