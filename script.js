let errores = 0;

console.log(
  "¿Por qué sigues mirando aquí?"
);

function verificar(){

  let respuesta =
  document.getElementById("respuesta")
  .value
  .toLowerCase();

  if(respuesta == "si"){

    window.location.href =
    "puzzle1.html";

  }

  else if(respuesta == "42"){

    document.getElementById("mensaje")
    .innerText =
    "Creíste que sería una referencia inteligente.";

  }

  else{

    errores++;

    document.getElementById("mensaje")
    .innerText =
    "Respuesta incorrecta.";

  }

  /* APARECE EL BOTON OCULTO */

  if(errores >= 2){

    document.getElementById(
      "fakeButton"
    ).style.display =
    "inline-block";

  }

  /* EFECTO RARO */

  if(errores >= 4){

    document.body.classList.add(
      "glitch"
    );

  }

  /* MENSAJE MAS PERSONAL */

  if(errores >= 6){

    document.getElementById(
      "mensaje"
    ).innerText =
    "Empiezas a decepcionarme.";

  }

}

/* CAMINO FALSO */

function caminoFalso(){

  document.body.innerHTML = `

    <div class="container">

      <h1>
        ¿En serio pensaste que era esto?
      </h1>

      <button onclick="volver()">
        Volver
      </button>

    </div>

  `;

}

/* REGRESAR AL INICIO */

function volver(){

  window.location.href =
  "falso1.html";

}