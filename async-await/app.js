const getNews = async function () {
  const API_KEY = "cd8a8d77a8b24209927ac807383adf61";
  const url =
    "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + API_KEY;

  try {
    const res = await fetch(url);
    if(!res.ok){
        throw new Error(`Something went wrong: ${res.status}`);
    }
    const data = await res.json();
    console.log(data.articles);
  } catch (error) {
    console.log(error);
  }
};
getNews();

