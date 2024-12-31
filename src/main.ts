// Importando o Leaflet
import L from 'leaflet';

// Inicializa o mapa
document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([-12.9714, -38.5014], 13); // Coordenadas de Salvador, você pode ajustar para a localização da sua operação.

  // Adiciona o tile layer do OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Definindo a interface para os bairros atendidos
  interface Bairro {
    name: string;
    lat: number;
    lng: number;
  }

  // Lista de bairros atendidos pela Tia Zélia
  const bairros: Bairro[] = [
    { name: 'Brotas', lat: -12.9833, lng: -38.4894 },
    { name: 'Matatu de Brotas', lat: -12.9734, lng: -38.4951 },
    { name: 'Vila Laura', lat: -12.9722, lng: -38.4811 },
    { name: 'Acupe de Brotas', lat: -12.9878, lng: -38.4855 },
    { name: 'Pituba', lat: -12.99926, lng: -38.4555 }
  ];

  // Adiciona marcadores no mapa para cada bairro
  bairros.forEach((bairro: Bairro) => {
    L.marker([bairro.lat, bairro.lng])
      .addTo(map)
      .bindPopup(`<b>${bairro.name}</b>`)
      .openPopup(); // Abre o popup com o nome do bairro
  });

  // Adiciona o botão do WhatsApp
  const whatsappButton = document.getElementById('whatsappButton') as HTMLButtonElement | null;
  if (whatsappButton) {
    whatsappButton.addEventListener('click', () => {
      window.open('https://wa.me/5571991415183', '_blank'); // Substitua pelo número de WhatsApp real
    });
  }

  // Outros ajustes no mapa ou interatividade podem ser adicionados aqui
});

// main.ts

// Função para gerar o código HTML do menu
function createMenu(): string {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="#">Tia Zélia</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#sobre">Sobre</a></li>
          <li class="nav-item"><a class="nav-link" href="#transporte-escolar">Transporte Escolar</a></li>
          <li class="nav-item"><a class="nav-link" href="#transporte-executivo">Transporte Executivo</a></li>
          <li class="nav-item"><a class="nav-link" href="#transporte-para-idosas">Transporte para Idosas</a></li>
        </ul>
        <a href="https://wa.me/5571991415183" class="whatsapp-btn" target="_blank">WhatsApp</a>
      </div>
    </nav>
  `;
}

// Função para inserir o menu no Header e no Footer
function insertMenu() {
  const header = document.getElementById('header');
  const footer = document.getElementById('menu-footer');

  // Verifique se os elementos existem e insira o menu
  if (header && footer) {
    header.innerHTML = createMenu();  // Insere o menu no header
    footer.innerHTML = createMenu();  // Insere o menu no footer
  } else {
    console.error("Não foi possível encontrar os elementos 'header' ou 'footer'.");
  }
}

// Aguardar o carregamento completo do DOM
window.addEventListener('DOMContentLoaded', insertMenu);
