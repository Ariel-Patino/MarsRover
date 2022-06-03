import axios from "axios";

const defaultOptions = {};

function axiosProvider(baseUrl, options) {
  console.log(defaultOptions, options, baseUrl);
  return axios.create({
    baseURL: baseUrl,
    ...defaultOptions,
    ...options,
  });
}

export default axiosProvider;
