/* ====== EDITA AQUÍ ====== */
const CONFIG = {
  // Número en formato internacional, sin + ni espacios. Colombia = 57 + tu número.
  whatsapp: "573013809211",
  mensaje: "Hola, quiero reservar un turno en Navaja Roja Barbería."
};

// Precios en pesos colombianos (son de ejemplo, cámbialos por los tuyos).
const SERVICIOS = [
  { categoria: "Cortes", items: [
    { nombre: "Corte clásico", precio: 25000, desc: "Tijera y máquina, con acabado a navaja en la nuca y los contornos." },
    { nombre: "Degradado (fade)", precio: 30000, desc: "Degradado bajo, medio o alto, difuminado a mano y peinado final." },
    { nombre: "Corte para niños", precio: 20000, desc: "Para menores de 12 años. Paciencia incluida." }
  ]},
  { categoria: "Barba", items: [
    { nombre: "Perfilado de barba", precio: 15000, desc: "Definimos líneas y contornos y rebajamos el largo." },
    { nombre: "Afeitado clásico", precio: 25000, desc: "Toalla caliente, espuma, navaja y bálsamo para después." },
    { nombre: "Tinte de barba", precio: 30000, desc: "Cubre las canas con un acabado natural. Dura de 3 a 4 semanas." }
  ]},
  { categoria: "Combos", items: [
    { nombre: "Corte + barba", precio: 38000, desc: "Tu corte favorito con perfilado de barba. Ahorras $2.000." },
    { nombre: "Degradado + afeitado clásico", precio: 50000, desc: "El servicio completo de la casa. Ahorras $5.000." }
  ]},
  { categoria: "Cuidado", items: [
    { nombre: "Limpieza facial", precio: 35000, desc: "Exfoliación, vapor y mascarilla para una piel limpia y fresca." },
    { nombre: "Cejas", precio: 8000, desc: "Perfilado con navaja o pinza, como prefieras." }
  ]}
];
/* ========================= */

const wa = (texto) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
const cop = (n) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = wa(CONFIG.mensaje);
  a.target = "_blank";
  a.rel = "noopener";
});

document.getElementById("menu").innerHTML = SERVICIOS.map((cat) => `
  <div class="cat">
    <h3>${cat.categoria}</h3>
    ${cat.items.map((s) => `
      <div class="svc">
        <h4>${s.nombre}</h4>
        <span class="price">${cop(s.precio)}</span>
        <p>${s.desc}</p>
        <a href="${wa(`Hola, quiero reservar: ${s.nombre} (${cop(s.precio)}). ¿Qué horarios tienen disponibles?`)}" target="_blank" rel="noopener">Reservar</a>
      </div>`).join("")}
  </div>`).join("");

document.getElementById("anio").textContent = new Date().getFullYear();
