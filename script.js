const interruptor = document.querySelector(".interruptor-container"),
      desconectarCable = document.querySelector(".conexion-dos");
      

interruptor.addEventListener("click", funcionalidadInterruptor);

function funcionalidadInterruptor() {
  interruptor.classList.toggle("encender");
  document.body.classList.toggle("encendido");
                                             
}