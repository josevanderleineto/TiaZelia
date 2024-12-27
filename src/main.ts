import L from 'leaflet';
import './style.css'
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o mapa
  const map = L.map('map').setView([-12.9714, -38.5014], 13);

  // Adiciona o tile layer do OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Define o tipo para bairros
  interface Bairro {
    name: string;
    lat: number;
    lng: number;
  }

  // Adiciona marcadores para os bairros atendidos
  const bairros: Bairro[] = [
    { name: 'Brotas', lat: -12.9833, lng: -38.4894 },
    { name: 'Matatu de Brotas', lat: -12.9734, lng: -38.4951 },
    { name: 'Vila Laura', lat: -12.9722, lng: -38.4811 },
    { name: 'Acupe de Brotas', lat: -12.9878, lng: -38.4855 },
    { name: 'Pituba', lat: -12.99926, lng: -38.4555 }
  ];

  bairros.forEach((bairro: Bairro) => {
    L.marker([bairro.lat, bairro.lng])
      .addTo(map)
      .bindPopup(`<b>${bairro.name}</b>`);
  });

  // Configura o botão do WhatsApp
  const whatsappButton = document.getElementById('whatsappButton') as HTMLButtonElement | null;
  if (whatsappButton) {
    whatsappButton.addEventListener('click', () => {
      window.open('https://wa.me/5571991415183', '_blank');
    });
  }
});
