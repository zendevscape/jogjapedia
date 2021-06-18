import CONFIG from '../global/config';

class CovidDataSource {
  static async getData() {
    const response = await fetch(`https://cors.bridged.cc/${CONFIG.COVID_API_URL}`);
    const responseJson = await response.json();
    let data = {};
    responseJson.forEach((element) => {
      if (element.attributes.Kode_Provi == 34) {
        data = element.attributes;
      }
    });
    return data;
  }
}

export default CovidDataSource;
