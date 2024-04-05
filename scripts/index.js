//console.log("JavaScript cargado");
function seleccionar(link) {
  var opciones = document.querySelectorAll("#links  a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  link.className = "seleccionado";

  var x = document.getElementById("nav");
  x.className = "";
}

function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

// homework 02

class Activity {
  constructor(title, description, imgUrl) {
    this.id = Math.random();
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repositoyy {
  constructor() {
    this.activities = [];
    this.id = 0;
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity(title, description, imgUrl) {
    this.id++;
    const activity = new Activity(this.id, title, description, imgUrl);
    //console.log(activity);
    this.activities.push(activity);
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

const prueba = new Repositoyy();

console.log(prueba.getAllActivities("yoga", "es bueno para la salud", "img"));

// console.log(
//   prueba.createActivity(
//     "Fútbol",
//     "Deporte rey del mundo",
//     "https://steemitimages.com/1280x0/http://www.barbabbels.com/wp-content/uploads/2015/04/Koning-Voetbal.jpg"
//   )
// );

prueba.deleteActivity(2);

console.log(prueba.getAllActivities());

// Clase Repository
class Repository {
  constructor() {
    this.activities = [];
  }

  addActivity(activity) {
    this.activities.push(activity);
  }

  getAllActivities() {
    return this.activities;
  }

  deleteAllActivitis() {
    this.activities = [];
  }
}

// Función para convertir una instancia de Activity en un elemento HTML
function activityToHTML(activity) {
  const { title, description, imgUrl } = activity;

  const card = document.createElement("div");
  card.classList.add("activity-card");

  const titleElement = document.createElement("h3");
  titleElement.innerHTML = title;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = description;

  const imageElement = document.createElement("img");
  imageElement.src = imgUrl;

  card.appendChild(titleElement);
  card.appendChild(descriptionElement);
  card.appendChild(imageElement);

  return card;
}

// Función para agregar todas las actividades al contenedor
function renderActivities(container, repository) {
  container.innerHTML = ""; // Vaciar el contenedor

  const activities = repository.getAllActivities();
  console.log(activities);

  activities.map((activity) => {
    const activityCard = activityToHTML(activity);
    container.appendChild(activityCard);
  });
}

// Función para manejar el evento del botón de agregar actividad
function handleAddActivity(event) {
  event.preventDefault();
  console.log("Información incompleta");
  const titleInput = document.getElementById("title").value;
  const descriptionInput = document.getElementById("description").value;
  const imgUrlInput = document.getElementById("imgUrl").value;

  // Validar datos completos
  if (!titleInput || !descriptionInput || !imgUrlInput) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const newActivity = new Activity(titleInput, descriptionInput, imgUrlInput);
  console.log("ACTIVIDAD ", newActivity);
  repository.addActivity(newActivity);

  renderActivities(activityContainer, repository);
  return false;
}

// Seleccionar elementos del DOM
const activityContainer = document.getElementById("activity-container");
const addActivityBtn = document.getElementById("add-activity-btn");

// Crear instancia de Repository
const repository = new Repository();

// Event listener para el botón de agregar actividad
addActivityBtn.addEventListener("click", handleAddActivity);

// EXTRA CREDIT: Función para eliminar actividad
function deleteActivity(event) {
  const card = event.target.closest(".activity-card");
  if (card) {
    card.remove();
    repository.deleteAllActivitis();
    // También puedes eliminar la actividad del repositorio si lo deseas
  }
}

// Event listener para eliminar actividad al hacer clic en la tarjeta
activityContainer.addEventListener("click", deleteActivity);
// console.log(deleteActivity);
