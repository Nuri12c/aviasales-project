import locations from "./stor/locations";
import '../style/style.css'
import './plugins'

locations.init().then(res => {
  console.log(res)
  console.log(locations)
  console.log(locations.getCitiesByCountryCode('PE'))
})
























/* import axios from "axios";
import config from "./config/apiConfig.js";

const accessKey = "Y5gJHHRxihvO_VerinbJBUYWwWMI3pdi3kyEqiPjD34";
const url =
  "https://api.unsplash.com/photos/random?client_id=" +
  accessKey +
  "&query=smile&count=10";
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for (let key in data) {
      const imageUrl = data[key].urls.small; // Получаем значение URL из объекта urls

      const img = document.createElement("img"); // Создаем элемент img
      img.style.width = '200px'
      img.src = imageUrl; // Устанавливаем значение URL в атрибут src элемента img

      document.body.appendChild(img); // Добавляем изображение на страницу
    }
  })
  .catch((error) => {
    console.error("There was a problem with your fetch operation:", error);
  });
 */