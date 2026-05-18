function resolver(){

  let r =
  document.getElementById(
    "respuesta"
  ).value;

  if(r > 0){

    /* FALSA ESPERANZA */

    document.body.innerHTML = `

      <div class="container">

        <h1 id="cargando">
          Verificando inteligencia...
        </h1>

      </div>

    `;

    /* PAUSA DRAMATICA */

    setTimeout(() => {

      document.body.innerHTML = `

        <div class="container">

          <div id="dedo">
            🖕
          </div>

          <h1 id="idiota">
           JAJJAJAJAJAJAJAJAJJAJAJAJAJAJAJAJAJJAJAJAJAJJAJAJAJAJJAJAJAJAJJAJAJAJAJJAJAJAJAAJAJAJAJAJJAJAJAJAJJAJAJAJAJJAJAJAJAJJAJAJAJAA
          </h1>



        </div>

      `;

      document.body.style.background =
      "darkred";

    }, 2500);

  }

}