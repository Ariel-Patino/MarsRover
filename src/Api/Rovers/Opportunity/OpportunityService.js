import ConfiguratorProvider from "../ConfiguratorProvider";

class OpportunityInfoService extends ConfiguratorProvider {
  async getRoverInfo() {
    return this.api.get();
  }
}
const opportunityInfoService = new OpportunityInfoService(
  "/opportunity?api_key=hDDrUNIRT1CJ1Osg2AsNf2pLKhytt7XVSFZ1yaDo"
);

export default opportunityInfoService;
