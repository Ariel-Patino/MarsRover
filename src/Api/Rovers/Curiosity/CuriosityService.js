import ConfiguratorProvider from '../ConfiguratorProvider';

class CuriosityInfoService extends ConfiguratorProvider {
  async getRoverInfo() {
    return this.api.get();
  }
}
const curiosityInfoService = new CuriosityInfoService(
  '/curiosity?api_key=' + process.env.REACT_APP_KEY_API
);

export default curiosityInfoService;
