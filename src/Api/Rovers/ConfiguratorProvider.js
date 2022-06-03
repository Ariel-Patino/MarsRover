import Api from "./Api";
import config from "../../Config";

class ConfiguratorProvider extends Api {
  constructor(endpoint) {
    super(config.placeholderApiUrl, endpoint);
  }
}

export default ConfiguratorProvider;
