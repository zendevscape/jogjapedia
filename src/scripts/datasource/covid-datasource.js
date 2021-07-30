import CONFIG from '../global/config';

class CovidDataSource {
  static async getData() {
    const response = await fetch(`${CONFIG.CORS_PROXY_URL + CONFIG.COVID_API_URL}/prov.json`);
    const responseJson = await response.json();
    const provinceData = responseJson.list_data.find((province) => province.key === 'DAERAH ISTIMEWA YOGYAKARTA');
    return {
      lastDate: responseJson.last_date,
      confirmed: provinceData.jumlah_kasus,
      recovered: provinceData.jumlah_sembuh,
      deceased: provinceData.jumlah_meninggal,
      active: provinceData.jumlah_dirawat,
    };
  }
}

export default CovidDataSource;
