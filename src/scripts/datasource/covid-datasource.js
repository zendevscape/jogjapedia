import CONFIG from '../global/config';

class CovidDataSource {
  static async getData() {
    const response = await fetch(`${CONFIG.CORS_PROXY_URL+CONFIG.COVID_API_URL}/prov.json`);
    const responseJson = await response.json();
    const province = responseJson.list_data.find((province) => {
      if (province.key == 'DAERAH ISTIMEWA YOGYAKARTA') {
        return province;
      }
    });
    return {
      lastDate: responseJson.last_date,
      confirmed: province.jumlah_kasus,
      recovered: province.jumlah_sembuh,
      deceased: province.jumlah_meninggal,
      active: province.jumlah_dirawat,
    };
  }
}

export default CovidDataSource;
