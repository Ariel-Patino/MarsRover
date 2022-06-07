import Api from '../Api';
import { roversApiUrl } from '../../../Config';

class RoversProvider extends Api {
  constructor(endpoint) {
    super(roversApiUrl, endpoint);
  }
}

export default RoversProvider;
