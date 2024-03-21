const usuarioLogin = document.getElementById("usuario-login");
const senhaLogin = document.getElementById("senha-login");
const botaoLogin = document.getElementById("btn-login");
const botaoFecharModal = document.querySelectorAll(".close");
let usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

function realizarLogin(event) {
  event.preventDefault();
  const usuario = usuarioLogin.value;
  const senha = senhaLogin.value;

  if (usuario && senha) {
    const usuarioCadastrado = usuariosCadastrados.find(
      (usuarioCadastrado) =>
        usuarioCadastrado.usuario === usuario &&
        usuarioCadastrado.senha === senha
    );

    if (usuarioCadastrado) {
      abrirModal("Login realizado com sucesso! redirecionando...");
      // esperar um tempo até redirecionar
      setTimeout(() => {
        window.open(
          "https://fmota-dev.github.io/controle-financeiro/",
          "_blank"
        );
        fecharModal();
      }, 2000);
      usuarioLogin.value = "";
      senhaLogin.value = "";
    } else {
      abrirModal("Usuário ou senha incorretos!");
      botaoFecharModal.addEventListener("click", fecharModal);
    }
  } else {
    abrirModal("Preencha todos os campos!");
    botaoFecharModal.addEventListener("click", fecharModal);
  }
}

function recuperarSenha(event) {
  event.preventDefault();
  let usuarioRecuperar = document.getElementById('usuario-recuperar').value
  let palavraChaveRecuperar = document.getElementById('palavra-chave-recuperar').value

  
}

function abrirModal(texto) {
  let modal = document.querySelector(".modal");
  modal.classList.add("ativo");
  let textoModal = document.querySelector("#modal-text");
  textoModal.textContent = texto;
}

function abrirModalRecuperar(event) {
  event.preventDefault();
  let modalRecuperar = document.querySelector(".modal-recuperar");
  modalRecuperar.classList.add("ativo");
}

function fecharModal() {
  let modal = document.querySelector(".modal");
  let modalRecuperar = document.querySelector(".modal-recuperar");
  modal.classList.remove("ativo");
  modalRecuperar.classList.remove("ativo");
}

function desbugar() {
  localStorage.removeItem("usuarios");
  localStorage.clear();
  window.location.reload();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "*") {
    desbugar();
  }
});

botaoLogin.addEventListener("click", realizarLogin);

const btnModalRecuperar = document.getElementById("recuperar-senha");
btnModalRecuperar.addEventListener("click", abrirModalRecuperar);

botaoFecharModal.forEach((botao) => {
  botao.addEventListener("click", fecharModal);
});
