let isError = false;

const getNews = async function () {
  const API_KEY = "cd8a8d77a8b24209927ac807383adf61";
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      isError = true;
      // throw new Error(`Something went wrong: ${res.status} `);
    }
    const data = await res.json();

    renderNews(data.articles);
  } catch (error) {
    console.log(error);
  }
};

const renderNews = (news) => {
  const newsList = document.getElementById("news-list");
  if (isError) {
    newsList.innerHTML += `
      <h2>News Can not be fetched</h2>
      <img src="404.png" alt="" />
    `;
    return;
  }
  news.forEach((item) => {
    const { title, description, urlToImage, url } = item;
    newsList.innerHTML += `
    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="card">
        <img src="${urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a href="${url}" target="_blank" class="btn btn-danger">Details</a>
        </div>
      </div>
    </div>
    `;
  });
};

window.addEventListener("load", getNews);
