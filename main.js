const movies = [
  { title: "Patton Oswalt: Annihilation", year: 2017, category: "Uncategorized", image: "deadpool.jpg", rating: 7.4, duration: "1 hr 6 min" },
  { title: "New York Doll", year: 2005, category: "Documentary Music", image: "deadpool.jpg", rating: 7.9, duration: "1 hr 15 min" },
  { title: "Mickey’s Magical Christmas", year: 2001, category: "Animation", image: "deadpool.jpg", rating: 6.8, duration: "1 hr 5 min" },
  { title: "And Then I Go", year: 2017, category: "Drama", image: "deadpool.jpg", rating: 7.6, duration: "1 hr 39 min" },
  { title: "An Extremely Goofy Movie", year: 2000, category: "Animation", image: "deadpool.jpg", rating: 6.4, duration: "1 hr 19 min" },
  { title: "Peter Rabbit", year: 2018, category: "Animation", image: "deadpool.jpg", rating: 6.6, duration: "1 hr 35 min" },
];

const movieContainer = document.querySelector(".movie-list");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category");
const sortButton = document.getElementById("sort");
const searchButton = document.getElementById("search-btn");

// Функция рендеринга фильмов
function renderMovies(movieList) {
  movieContainer.innerHTML = ""; // Очистка контейнера

  movieList.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `
      <img src="images/${movie.image}" alt="${movie.title}">
      <h2>${movie.title}</h2>
      <p>${movie.year}</p>
      <p>${movie.category}</p>
      <p>${movie.rating} ⭐ | ${movie.duration}</p>
      <button class="more-info">More info</button>
    `;
    movieContainer.appendChild(movieCard);
  });
}

// Фильтрация по категории
function filterMovies() {
  const selectedCategory = categoryFilter.value;
  let filteredMovies = movies;

  if (selectedCategory !== "All") {
    filteredMovies = movies.filter(movie => movie.category.includes(selectedCategory));
  }

  renderMovies(filteredMovies);
}

// Поиск по названию
function searchMovies() {
  const query = searchInput.value.toLowerCase();
  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));

  renderMovies(filteredMovies);
}

// Сортировка фильмов
let sortOrder = "asc";
function sortMovies() {
  let sortedMovies = [...movies];

  if (sortOrder === "asc") {
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    sortOrder = "desc";
  } else {
    sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
    sortOrder = "asc";
  }

  renderMovies(sortedMovies);
}

// События
searchInput.addEventListener("input", searchMovies);
searchButton.addEventListener("click", searchMovies);
categoryFilter.addEventListener("change", filterMovies);
sortButton.addEventListener("click", sortMovies);

// Первоначальный рендер
renderMovies(movies);
