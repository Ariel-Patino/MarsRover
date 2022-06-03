import ConfiguratorProvider from "./ConfiguratorProvider";

class RoversService extends ConfiguratorProvider {
  async getAll() {
    return this.api.get();
  }

  async getById(id) {
    return this.api.get(`/${id}`);
  }
}

const roverService = new RoversService("/rovers");

export default roverService;
