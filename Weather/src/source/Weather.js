import { Location } from "../formats/location";
import { Current } from "../formats/current";
import { get } from "https";
import { IncomingMessage } from "http";

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
