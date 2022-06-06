import ConfiguratorProvider from "../ConfiguratorProvider";

class CuriosityInfoService extends ConfiguratorProvider {
  async getRoverInfo() {
    return this.api.get();
  }
}
const curiosityInfoService = new CuriosityInfoService(
  "/curiosity?api_key=hDDrUNIRT1CJ1Osg2AsNf2pLKhytt7XVSFZ1yaDo"
);

export default curiosityInfoService;
