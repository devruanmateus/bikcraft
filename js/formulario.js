const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  // Função que verifica se a resposta foi enviada
  if (resposta.ok) {
    // Se a promise de resposta tiver ok = true
    formulario.innerHTML =
      "<p class='font-2-1' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";
  } else {
    // Se a promise de resposta tiver ok = false
    formulario.innerHTML =
      "<p class='font-2-1' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.com</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault(); // Previne que os dados sejam enviados ao clicar no botão
  const botao = document.querySelector("form button");
  botao.disabled = true; // Impede que o usuário flood o botão de enviar os dados

  botao.innerText = "Enviando...";

  const data = new FormData(formulario); // Captura os dados do formulário

  fetch("./enviar.php", {
    // Função que recebe o URL ao qual está enviando e puxando dados e depois um objeto com as configurações dessa conexão.
    method: "POST",
    body: data,
  }).then(formularioEnviado); // método usado para verificar o resultado da promise.
}

formulario.addEventListener("submit", enviarFormulario); // Chama uma função quando o botão for clicado
