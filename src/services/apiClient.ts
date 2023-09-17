import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c0664efff32044669d18c099f950fac8",
  },
});
