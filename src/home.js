import bg from "./assets/bg.jpg";
import xkcdErrorImage from "./assets/xkcd-error.png";

function home() {
  const appBody = document.createElement("div");
  const weatherBodyContainer = document.createElement("div");
  const searchBodyContainer = document.createElement("div");
  const navBodyContainer = document.createElement("div");

  //const bgImage = new Image();
  //bgImage.src = bg;
  //bgImage.className = 'backgroung-image';

  appBody.classList.add("app-body");
  weatherBodyContainer.classList.add("weather-body-container");
  searchBodyContainer.classList.add("search-body-container");
  navBodyContainer.classList.add("nav-body-container");

  // document.body.appendChild(bgImage);
  appBody.appendChild(weatherBodyContainer);
  appBody.appendChild(searchBodyContainer);
  appBody.appendChild(navBodyContainer);

  document.body.appendChild(appBody);

  //////////////// SEARCH
  const searchContainer = document.createElement("div");
  const searchForm = document.createElement("form");
  const searchLabel = document.createElement("label");
  const searchHint = document.createElement("p");
  const searchInput = document.createElement("input");
  const searchError = document.createElement("p");
  const searchBtn = document.createElement("button");

  searchContainer.classList.add("search-container");
  searchForm.classList.add("search-form");
  searchLabel.setAttribute("for", "search");
  searchHint.className = "search-hint";
  searchInput.setAttribute("id", "search");
  searchInput.type = "text";
  searchInput.name = "search";
  searchError.className = "search-error";
  searchBtn.className = "search-btn";

  searchHint.innerText = "Search a place name;";
  searchBtn.innerText = "Search";

  searchContainer.appendChild(searchForm);
  searchForm.appendChild(searchLabel);
  searchLabel.appendChild(searchHint);
  searchLabel.appendChild(searchInput);
  searchForm.appendChild(searchError);
  searchForm.appendChild(searchBtn);
  searchBodyContainer.appendChild(searchContainer);

  const changeUnitContainer = document.createElement("div");
  const toggleLabel = document.createElement("label");
  const changeQuote = document.createElement("input");
  const span = document.createElement("span");

  changeQuote.type = "checkbox";

  changeUnitContainer.className = "change-unit-container";

  toggleLabel.className = "switch";
  changeQuote.className = "toggle-unit";
  span.className = "slider";
  searchContainer.appendChild(changeUnitContainer);
  changeUnitContainer.appendChild(toggleLabel);
  toggleLabel.appendChild(changeQuote);
  toggleLabel.appendChild(span);

  //////////////

  ///////////// NAVIGATION

  const navBtn = document.createElement("button");
  navBtn.className = "nav-btn";
  navBtn.innerHTML = "Ξ";
  searchBodyContainer.appendChild(navBtn);

  const navContainer = document.createElement("nav");
  const divider = document.createElement("hr");
  const weatherSourceLink = document.createElement("a");
  const quoteSourceLink = document.createElement("a");
  const jokeSourceLink = document.createElement("a");
  const repoLink = document.createElement("a");

  navContainer.className = "nav-container";
  weatherSourceLink.className = "weather-source-link";
  repoLink.className = "repo-link";
  quoteSourceLink.className = "quote-source-link";
  jokeSourceLink.className = "joke-source-link";

  weatherSourceLink.href = "https://www.visualcrossing.com/";
  repoLink.href = "https://github.com/anujbalak/";
  quoteSourceLink.href = "https://dummyjson.com";
  jokeSourceLink.href = "https://github.com/15Dkatz/official_joke_api";

  weatherSourceLink.target = "_blank";
  repoLink.target = "_blank";
  jokeSourceLink.target = "_blank";
  quoteSourceLink.target = "_blank";
  weatherSourceLink.rel = "noopener norefferer";
  repoLink.rel = "noopener norefferer";
  quoteSourceLink.rel = "noopener norefferer";
  jokeSourceLink.rel = "noopener norefferer";
  weatherSourceLink.innerText = "Source link";
  quoteSourceLink.innerText = "Quotes Source";
  jokeSourceLink.innerText = "Jokes Source";
  repoLink.innerText = "Made by Anuj";

  navContainer.appendChild(divider);
  navContainer.appendChild(weatherSourceLink);
  navContainer.appendChild(quoteSourceLink);
  navContainer.appendChild(jokeSourceLink);
  navContainer.appendChild(repoLink);

  navBodyContainer.appendChild(navContainer);

  let isClicked = false;

  navBtn.addEventListener("click", () => {
    handleNav();
  });

  function handleNav() {
    if (isClicked === false) {
      navBodyContainer.style.display = "block";
      isClicked = true;
    } else if (isClicked === true) {
      navBodyContainer.style.display = "none";
      isClicked = false;
    }
  }

  /////////////////////

  ////////////////////////// weather

  const weatherContainer = document.createElement("div");
  const cityNameContainer = document.createElement("div");
  const cityName = document.createElement("p");
  const tempratureContainer = document.createElement("div");
  const temprature = document.createElement("p");
  const humidityContainer = document.createElement("div");
  const humidityLabel = document.createElement("p");
  const humidity = document.createElement("p");
  const windSpeedContainer = document.createElement("div");
  const windSpeedLabel = document.createElement("p");
  const windSpeed = document.createElement("p");
  const pressureContainer = document.createElement("div");
  const pressureLabel = document.createElement("div");
  const pressure = document.createElement("p");
  const visibilityContainer = document.createElement("div");
  const visibilityLabel = document.createElement("p");
  const visibility = document.createElement("p");
  const conditionsContainer = document.createElement("div");
  const conditionsLabel = document.createElement("p");
  const conditions = document.createElement("p");

  const firstContainer = document.createElement("div");
  const secondContainer = document.createElement("div");

  secondContainer.className = "second-container";
  weatherContainer.className = "weather-container";
  cityNameContainer.className = "city-name-container";
  tempratureContainer.className = "temprature-container";
  humidityContainer.className = "humidity-container";
  windSpeedContainer.className = "wind-speed-container";
  pressureContainer.className = "pressure-container";
  visibilityContainer.className = "visibility-container";
  conditionsContainer.className = "condition-container";

  cityName.className = "city-name";
  temprature.className = "temprature";
  humidity.className = "humidity";
  windSpeed.className = "wind-speed";
  pressure.className = "pressure";
  visibility.className = "visibility";
  conditions.className = "conditions";

  humidityLabel.innerText = "Humidity";
  windSpeedLabel.innerText = "Wind Speed";
  pressureLabel.innerText = "Pressure";
  visibilityLabel.innerText = "Visibility";
  conditionsLabel.innerText = "Condition";

  weatherContainer.appendChild(firstContainer);
  weatherContainer.appendChild(secondContainer);
  firstContainer.appendChild(cityNameContainer);
  firstContainer.appendChild(tempratureContainer);
  secondContainer.appendChild(humidityContainer);
  secondContainer.appendChild(windSpeedContainer);
  secondContainer.appendChild(pressureContainer);
  secondContainer.appendChild(visibilityContainer);
  secondContainer.appendChild(conditionsContainer);

  cityNameContainer.appendChild(cityName);
  tempratureContainer.appendChild(temprature);
  humidityContainer.appendChild(humidityLabel);
  humidityContainer.appendChild(humidity);
  windSpeedContainer.appendChild(windSpeedLabel);
  windSpeedContainer.appendChild(windSpeed);
  pressureContainer.appendChild(pressureLabel);
  pressureContainer.appendChild(pressure);
  visibilityContainer.appendChild(visibilityLabel);
  visibilityContainer.appendChild(visibility);
  conditionsContainer.appendChild(conditionsLabel);
  conditionsContainer.appendChild(conditions);

  weatherBodyContainer.appendChild(weatherContainer);

  let currentCity = "New Delhi";
  // let currentUnit = 'cel';
  let apiKey = "8CWT5QJZ6MAY8KTCXMU3P4UQ7";

  async function getWeatherData(url) {
    try {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      // const newCall = createSearch(currentCity, apiKey)
      // getWeatherData(newCall);
      setErrorWeatherData();
    }
  }

  function setWeatherData(data) {
    cityName.innerText = data.resolvedAddress;
    temprature.innerText = `${data.currentConditions.temp}˚C`;
    humidity.innerText = `${data.currentConditions.humidity}%`;
    windSpeed.innerText = `${data.currentConditions.windspeed}Km/H`;
    pressure.innerText = `${data.currentConditions.pressure}mb`;
    visibility.innerText = `${data.currentConditions.visibility}Km`;
    conditions.innerText = `${data.currentConditions.conditions}`;
  }

  function setErrorWeatherData() {
    const newLocal = "अ";
    cityName.innerText = newLocal;
    temprature.innerText = "रे,";
    humidity.innerText = "क्ष";
    windSpeed.innerText = "मा";
    pressure.innerText = "की";
    visibility.innerText = "जि";
    conditions.innerText = "ए!";
  }

  function createSearch(city, key) {
    let unit = "metric";
    const link = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=${key}&contentType=json`;
    return link;
  }

  function saveData(city) {
    localStorage.setItem("last searched city", city);
  }

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let currentSearch = searchInput.value;
    if (currentSearch == "" || currentSearch == null) {
      searchError.innerHTML = "Enter a place name";
    } else {
      searchError.innerText = "";
      let city = currentSearch;
      const value = createSearch(city, apiKey);
      getWeatherData(value);
      saveData(city);
      clearInput();
    }
  });

  function clearInput() {
    searchInput.value = "";
  }

  window.onload = loadWeather();

  function loadWeather() {
    let city = localStorage.getItem("last searched city");
    if (city == null) {
      let value = createSearch(currentCity, apiKey);
      getWeatherData(value);
    } else {
      let value = createSearch(city, apiKey);
      getWeatherData(value);
    }
  }

  ///////////////////////////

  /////////////////////////quotes

  const dummyContainer = document.createElement("div");
  const quoteContainer = document.createElement("div");
  const quoteOutput = document.createElement("p");
  const quoteAuthor = document.createElement("p");

  dummyContainer.className = "dummy-container";
  quoteContainer.className = "quote-container";
  quoteOutput.className = "quote-output";
  quoteAuthor.className = "quote-author";

  weatherBodyContainer.appendChild(dummyContainer);
  dummyContainer.appendChild(quoteContainer);
  quoteContainer.appendChild(quoteOutput);
  quoteContainer.appendChild(quoteAuthor);

  let isToggle = false;
  changeQuote.addEventListener("click", () => {
    if (isToggle === false) {
      isToggle = true;
      jokeContainer.style.display = "flex";
      quoteContainer.style.display = "none";
      callJoke();
    } else if (isToggle === true) {
      isToggle = false;
      jokeContainer.style.display = "none";
      quoteContainer.style.display = "grid";
      callQuote();
    } else {
      isToggle = false;
      jokeContainer.style.display = "none";
      quoteContainer.style.display = "grid";
      callQuote();
    }
  });

  window.onload = callQuote();

  function callQuote() {
    let url = "https://dummyjson.com/quotes/random";
    getDummyData(url);
  }

  async function getDummyData(url) {
    try {
      const response = await fetch(url, { mode: "cors" });
      const dummyData = await response.json();
      setDummyData(dummyData);
    } catch (error) {
      setFakeQuote();
    }
  }

  function setFakeQuote() {
    quoteOutput.innerText =
      "Once upon a time there was an error, which one you are looking at";
    quoteAuthor.innerText = "-Author";
  }

  function setDummyData(data) {
    quoteOutput.innerText = data.quote;
    quoteAuthor.innerText = `-${data.author}`;
  }

  /////////////////////////// jokes //////////////////
  const jokeContainer = document.createElement("div");
  const jokeSetup = document.createElement("p");
  const jokePunchline = document.createElement("span");
  jokeContainer.className = "joke-container";
  jokeSetup.className = "joke-setup";
  jokePunchline.className = "joke-punchline";
  dummyContainer.appendChild(jokeContainer);
  jokeContainer.appendChild(jokeSetup);
  jokeContainer.appendChild(jokePunchline);

  function callJoke() {
    let randomNum = Math.floor(Math.random() * 3000 + 1);
    // let url = `https://xkcd.noobot.workers.dev/${randomNum}/info.0.json`
    let url = "https://official-joke-api.appspot.com/random_joke";
    getjoke(url);
  }

  async function getjoke(url) {
    try {
      const response = await fetch(url, { mode: "cors" });
      const dummyData = await response.json();
      setJoke(dummyData);
    } catch (error) {
      setFakeJoke();
    }
  }

  function setJoke(data) {
    jokeSetup.innerText = data.setup;
    jokePunchline.innerText = data.punchline;
    jokePunchline.style.color = "black";
  }

  function setFakeJoke() {
    jokeSetup.innerText = "What a joke!";
    jokePunchline.innerText = "";
  }

  let isHide = true
  jokePunchline.addEventListener("click", () => {
    jokePunchline.style.color = "#eee";
  });
}

export { home };
