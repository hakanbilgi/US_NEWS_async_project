const getNews = async function () {
  const API_KEY = "cd8a8d77a8b24209927ac807383adf61";
  const url =
    "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + API_KEY;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data.articles);
};
getNews();
