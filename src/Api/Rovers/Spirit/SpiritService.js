import ConfiguratorProvider from "../ConfiguratorProvider";

class SpiritInfoService extends ConfiguratorProvider {
  async getRoverInfo() {
    return this.api.get();
  }
}
const spiritInfoService = new SpiritInfoService(
  "/spirit?api_key=" + process.env.REACT_APP_KEY_API
);

export default spiritInfoService;
