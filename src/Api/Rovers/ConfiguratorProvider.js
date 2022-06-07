import Api from './Api';
import { roversApiUrl } from '../../Config';

class ConfiguratorProvider extends Api {
  constructor(endpoint) {
    super(roversApiUrl, endpoint);
  }
}

export default ConfiguratorProvider;
