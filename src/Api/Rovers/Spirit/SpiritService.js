import ConfiguratorProvider from "../ConfiguratorProvider";

class SpiritInfoService extends ConfiguratorProvider {
  async getRoverInfo() {
    return this.api.get();
  }
}
const spiritInfoService = new SpiritInfoService(
  "/spirit?api_key=hDDrUNIRT1CJ1Osg2AsNf2pLKhytt7XVSFZ1yaDo"
);

export default spiritInfoService;
