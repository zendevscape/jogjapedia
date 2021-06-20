import CONFIG from '../global/config';

class CovidDataSource {
  static async getData() {
    const response = await fetch(`${CONFIG.COVID_API_URL}/country/indonesia/provinsi/34`);
    const responseJson = await response.json();
    return responseJson.jsindo.data[0].case;
  }
}

export default CovidDataSource;
