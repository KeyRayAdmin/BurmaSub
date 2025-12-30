const data = {
  movies: [
    { title: "Avatar", year: 2009, poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", type: "Movie", link: "#" },
    { title: "Inception", year: 2010, poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", type: "Movie", link: "#" }
  ],
  series: [
    { title: "Breaking Bad", year: 2008, poster: "https://via.placeholder.com/150", type: "Series", link: "#" },
    { title: "The Witcher", year: 2019, poster: "https://via.placeholder.com/150", type: "Series", link: "#" }
  ]
};

function showCategory(type) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  data[type].forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<img src="${item.poster}"><p>${item.title}</p>`;
    div.onclick = () => {
      localStorage.setItem("currentItem", JSON.stringify(item));
      window.location = "detail.html";
    };
    content.appendChild(div);
  });
}

showCategory("movies");
