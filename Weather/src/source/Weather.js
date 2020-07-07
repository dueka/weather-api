import { Location } from "../formats/location";
import { Current } from "../formats/current";
import { get } from "https";
import { IncomingMessage } from "http";

const weatherKey = process.env.ACCESS_KEY;
const requestURL = new URL("http://api.weatherstack.com/current");
requestURL.searchParams.append("access_key", weatherKey);

const [, , ...requestArgs] = process.argv;
let args = fp.join(" ")(requestArgs);
args = fp.split(/, ?/)(args);

const responseWeather = (responseObj) => {
  const respLocation = responseObj.location;
  const respCurrent = responseObj.current;
  const zipCode =
    responseObj.request.type == "Zipcode" ? `${responseObj.request.query}` : "";
  const Country = `${respLocation.name}, ${respLocation.country}${zipCode}`;
  const responseTime = `The time in ${Country} is ${respLocation.observation_time}`;
  const weatherString =
    `The Weather as of ${respCurrent.observation_time}:` +
    `${fp.join(", ")(respCurrent.weather_descriptions)}` +
    ` with temperature of ${respCurrent.temperature}c`;
  return `\n${responseTime}\n${weatherString}`;
};

// const params = {
//   access_key: "fc82b2e65b6e76965c53699204031ca4",
//   query: "New York",
// };

// axios
//   .get("https://api.weatherstack.com/current", { params })
//   .then((response) => {
//     const apiResponse = response.data;
//     console.log(
//       `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃ and the time is ${apiResponse.current.observation_time}`
//     );
//   })
//   .catch((error) => {
//     console.log(error);
//   });
