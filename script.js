// 💘 Contador de dias juntos (ajustado para evitar contagem a mais)
const dataNamoro = new Date('2024-06-02'); // Data do início do namoro
const hoje = new Date();

// Zera horas para comparação só por dia
dataNamoro.setHours(0, 0, 0, 0);
hoje.setHours(0, 0, 0, 0);

const diffTime = hoje - dataNamoro;
const diffDias = Math.floor(diffTime / (1000 * 60 * 60 * 24));

const contador = document.getElementById('contador');
if (contador) {
  contador.textContent = `Estamos juntos há ${diffDias} dias! 💑`;
}

 // 💌 Mostrar carta com efeito de digitação (corrigido)
function mostrarCarta() {
    const mensagem = document.getElementById('mensagem');
    if (!mensagem) return;
  
    // Coloque o texto da carta aqui:
    const texto = `Meu amor, cada dia ao seu lado é uma nova aventura cheia de carinho, sorrisos e momentos únicos. Obrigado por me fazer tão feliz. Te amo infinitamente! 💖`;
  
    mensagem.style.display = 'block';
    mensagem.textContent = ''; // Limpa o conteúdo antes de escrever
    let i = 0;
  
    const escrever = () => {
      if (i < texto.length) {
        mensagem.textContent += texto.charAt(i);
        i++;
        setTimeout(escrever, 40); // Velocidade da digitação
      }
    };
  
    escrever();
  }
  
  
  // 📅 Modal para linha do tempo
  function mostrarModal(titulo, data, texto) {
    document.getElementById("modalTitulo").textContent = titulo;
    document.getElementById("modalData").textContent = data;
    document.getElementById("modalTexto").textContent = texto;
    document.getElementById("modalEvento").style.display = "flex";
  }
  
  function fecharModal() {
    document.getElementById("modalEvento").style.display = "none";
  }
  
  // Adiciona eventos de clique nas imagens da linha do tempo
  document.querySelectorAll('.linha-do-tempo-container .evento img').forEach(img => {
    img.addEventListener('click', () => {
      const textoDiv = img.nextElementSibling; // a div .texto
      const tituloData = textoDiv.querySelector('h3').textContent;
      const descricao = textoDiv.querySelector('p').textContent;
      mostrarModal(tituloData, '', descricao);
    });
  });
  
  // 💗 Corações flutuantes
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💗';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${Math.random() * 10 + 10}px`;
    document.body.appendChild(heart);
  
    setTimeout(() => heart.remove(), 4000);
  }, 600);
  
  
  
  
  
  
  