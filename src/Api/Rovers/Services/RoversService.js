import RoversProvider from '../Providers/RoversProvider';

class RoversService extends RoversProvider {
  async getRoverInfo(roverName) {
    return this.api.get(
      `/${roverName}?api_key=${process.env.REACT_APP_KEY_API}`
    );
  }

  async getRoverPicturesByEarthDate(roverName, cameraCode, earthDate) {
    return this.api.get(
      `/${roverName}/photos/?api_key=${process.env.REACT_APP_KEY_API}${
        cameraCode && cameraCode !== 'any' ? '&camera=' + cameraCode.trim() : ''
      }${earthDate ? '&earth_date=' + earthDate.trim() : ''}`
    );
  }

  async getRoverPicturesBySolDate(roverName, cameraCode, solDate) {
    return this.api.get(
      `/${roverName}/photos/?api_key=${process.env.REACT_APP_KEY_API}${
        cameraCode && cameraCode !== 'any' ? '&camera=' + cameraCode.trim() : ''
      }${solDate ? '&sol=' + solDate : ''}`
    );
  }

  async getRoverPicturesByEarthDateByPage(
    roverName,
    cameraCode,
    earthDate,
    page
  ) {
    return this.api.get(
      `/${roverName}/photos/?api_key=${process.env.REACT_APP_KEY_API}${
        cameraCode && cameraCode !== 'any' ? '&camera=' + cameraCode.trim() : ''
      }${earthDate ? '&earth_date=' + earthDate.trim() : ''}${
        page ? '&page=' + page : ''
      }`
    );
  }

  async getRoverPicturesBySolDateByPage(roverName, cameraCode, solDate, page) {
    return this.api.get(
      `/${roverName}/photos/?api_key=${process.env.REACT_APP_KEY_API}${
        cameraCode && cameraCode !== 'any' ? '&camera=' + cameraCode.trim() : ''
      }${solDate ? '&sol=' + solDate : ''}${page ? '&page=' + page : ''}`
    );
  }
}
const roverService = new RoversService();

export default roverService;
