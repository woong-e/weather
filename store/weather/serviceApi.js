import axios from "axios";

const API_KEY = 'e0cced59be3a7f8c74c897fc8114ed13';

const fetch = (latitude, longitude) => {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
}

export {
  fetch,
}

