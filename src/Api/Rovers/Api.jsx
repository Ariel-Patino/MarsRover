import axiosProvider from '../AxiosProvider.js';

class Api {
  constructor(baseUrl, slug = '') {
    this.baseUrl = baseUrl;
    this.slug = slug;

    this.api = axiosProvider(`${this.baseUrl}${this.slug}`, {});

    this.setInterceptors({
      beforeRequest: this.beforeRequest,
      requestError: this.requestError,
      afterResponse: this.afterResponse,
      responseError: this.responseError
    });
  }
  setInterceptors = ({
    beforeRequest,
    requestError,
    afterResponse,
    responseError
  }) => {
    this.api.interceptors.request.use(beforeRequest, requestError);
    this.api.interceptors.response.use(afterResponse, responseError);
  };

  beforeRequest(config) {
    return config;
  }

  requestError(error) {
    throw error;
  }

  afterResponse(resp) {
    return resp.data || resp;
  }

  responseError(error) {
    throw error;
  }
}

export default Api;
