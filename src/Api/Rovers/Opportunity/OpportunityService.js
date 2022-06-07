import ConfiguratorProvider from '../ConfiguratorProvider';

class OpportunityInfoService extends ConfiguratorProvider {
  async getRoverInfo() {
    return this.api.get();
  }
}
const opportunityInfoService = new OpportunityInfoService(
  '/opportunity?api_key=' + process.env.REACT_APP_KEY_API
);

export default opportunityInfoService;
