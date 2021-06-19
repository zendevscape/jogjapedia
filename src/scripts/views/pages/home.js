import Typed from 'typed.js';
import CovidDataSource from '../../datasource/covid-datasource';

const Home = {
  async render() {
    const main = document.querySelector('main');
    main.removeAttribute('class');
    main.classList.add('home');

    const header = document.querySelector('header');
    header.classList.add('transparent');
    header.classList.remove('semi');

    document.querySelector('a.explore').classList.remove('menu-active');
    document.querySelector('a.home').classList.add('menu-active');

    document.title = 'Beranda | JogjaPedia';
    return `
      <section class="hero">
        <div class="hero__inner">
          <p class="hero__pretitle"><span class="pretitle__typed"></span> </p>
          <h1 class="hero__title">Daerah Istimewa Yogyakarta</h1>
          <p class="hero__copyright">© CEphoto, Uwe Aranas</p>
        </div>
      </section>
      <div class="content-wrapper">
        <section class="about">
          <p class="notopmargin">Daerah Istimewa Yogyakarta (DIY) merupakan wilayah tertua kedua di Indonesia setelah Jawa Timur. Provinsi ini juga memiliki status istimewa atau otonomi khusus. Status ini adalah sebuah warisan dari zaman sebelum kemerdekaan, yaitu Kasultanan Ngayogyakarta Hadiningrat dan juga Kadipaten Paku Alaman sebagai cikal bakal DIY.</p>
          <p>Wilayah DIY terletak di bagian selatan Pulau Jawa, berbatasan dengan Provinsi Jawa Tengah. DIY memiliki banyak sekali tempat wisata kekinian serta syarat akan budaya. Selain itu, terdapat juga banyak keistimewaan lain seperti kuliner dan kerajinan, hal ini menjadikannya sebagai salah satu destinasi wisata yang wajib dikunjungi. Dengan populasi 3,689 juta orang, DIY selalu ramai dan meriah.</p>
        </section>
        <section id="about-carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img data-src="/assets/img/carousel/keraton-yogyakarta.jpg" class="lazyload d-block w-100" alt="Keraton Yogyakarta">
              <p class="carousel__copyright">© Gunawan Kartapranata / CC BY-SA 3.0</p>
              <div class="carousel-caption d-block">
                <p>Keraton Yogyakarta</p>
              </div>
            </div>
            <div class="carousel-item">
              <img data-src="/assets/img/carousel/gunung-merapi.jpg" class="lazyload d-block w-100" alt="Taman Nasional Gunung Merapi">
              <p class="carousel__copyright">© Vendi Rizki K / CC BY-SA 4.0</p>
              <div class="carousel-caption d-block">
                <p>Taman Nasional Gunung Merapi</p>
              </div>
            </div>
            <div class="carousel-item">
              <img data-src="/assets/img/carousel/pantai-wediombo.jpg" class="lazyload d-block w-100" alt="Pantai Wediombo">
              <p class="carousel__copyright">© Azisrif / CC BY-SA 4.0</p>
              <div class="carousel-caption d-block">
                <p>Pantai Wediombo</p>
              </div>
            </div>
            <div class="carousel-item">
              <img data-src="/assets/img/carousel/candi-prambanan.jpg" class="lazyload d-block w-100" alt="Candi Prambanan">
              <p class="carousel__copyright">© Jimmy McIntyre / CC BY-SA 2.0</p>
              <div class="carousel-caption d-block">
                <p>Candi Prambanan</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#about-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#about-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </section>
        <section class="history">
          <h2>Sejarah</h2>
          <p class="notopmargin">Dalam konteks historis, keberadaan DIY dimulai dari berdirinya Kasultanan Ngayogyakarta Hadiningrat berdasarkan Perjanjian Giyanti tahun 1755. Berawal dari sini, muncul suatu sistem pemerintahan yang teratur dan kemudian berkembang.</p>
          <p>Pemerintah Hindia Belanda mengakui Kasultanan Ngayogyakarta Hadiningrat dan Kadipaten Pakualaman sebagai kerajaan yang berhak mengatur dan mengurus rumah tangga pemerintahannya sendiri yang dikenal dengan istilah <em>zilfbesturende landschappen</em>.</p>
          <p>Pada masa pendudukan Jepang, Yogyakarta diakui sebagai Daerah Istimewa atau <em>Kooti</em> dengan <em>Koo</em> sebagai kepalanya, yakni Sri Sultan Hamengku Buwono IX. Di bawah <em>Kooti</em>, secara struktural ada wilayah-wilayah pemerintahan tertentu dengan para pejabatnya.</p>
          <p>Setelah proklamasi kemerdekaan Republik Indonesia (RI), Sri Sultan Hamengku Buwono IX dan Sri Paku Alam VIII menyatakan kepada Presiden RI bahwa daerah Kasultanan Ngayogyakarta Hadiningrat dan Kadipaten Pakualaman menjadi bagian dari wilayah RI, bergabung menjadi satu kesatuan yang dinyatakan sebagai Daerah Istimewa Yogyakarta (DIY).</p>
        </section>
        <section class="leader">
          <h2>Pemimpin Daerah</h2>
          <div class="leader__list">
            <div class="leader__governor">
              <img data-src="/assets/img/leaders/gubernur.jpg" class="lazyload" alt="Gubernur">
              <h3>Sri Sultan Hamengku Buwono X</h3>
              <p>Gubernur</p>
            </div>
            <div class="leader__vice-governor">
              <img data-src="/assets/img/leaders/wakil-gubernur.jpg" class="lazyload" alt="Wakil Gubernur">
              <h3>Kanjeng Gusti Pangeran Adipati Aryo Paku Alam X</h3>
              <p>Wakil Gubernur</p>
            </div>
          </div>
        </section>
        <section class="statistic">
          <div class="statistic-wrapper">
            <h2>Statistik COVID-19</h2>
            <div class="counter-wrapper">
              <div class="confirmed notopmargin">
                <p class="counter">NaN</p>
                <div>
                  <p class="caption">Terkonfirmasi</p>
                </div>  
              </div>
              <div class="active">
                <p class="counter">NaN</p>
                <div>
                  <p class="caption">Dirawat</p>
                </div>
              </div>
              <div class="recovered">
                <p class="counter">NaN</p>
                <div>
                  <p class="caption">Sembuh</p>
                </div>
              </div>
              <div class="deceased">
                <p class="counter">NaN</p>
                <div>
                  <p class="caption">Meninggal</p>
                </div>
              </div>
            </div>  
            <div class="info">
              <p>Pembaruan terakhir: <b>${new Date(Date.now()).toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}</b></p>
              <p>Sumber: <b><a href="https://kawalcorona.com/" target="_blank" rel="noopener">Kawal Corona</a></b></p>
            </div>
          </div>
        </section>
      </div>
      <section class="campaign">
        <div class="campaign-wrapper">
          <h2>Siap untuk menjelajah?</h2>
          <p>Temukan berbagai hal menarik di Yogyakarta</p>
          <a href="/#/explore">Jelajahi<i class="material-icons">arrow_forward</i></a>
        </div>
      <section>`;
  },

  async afterRender() {
    try {
      new Typed('.pretitle__typed', {
        strings: [
          'Selamat Datang di',
          'Welcome to',
          'Sugeng Rawuh wonten',
        ],
        loop: true,
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2000,
      });

      const covidData = await CovidDataSource.getData();
      const confirmed = covidData.Kasus_Posi;
      const recovered = covidData.Kasus_Semb;
      const deceased = covidData.Kasus_Meni;
      const active = confirmed - recovered - deceased;

      document.querySelector('.confirmed .counter').innerHTML = confirmed.toLocaleString('id-ID');
      document.querySelector('.active .counter').innerHTML = active.toLocaleString('id-ID');
      document.querySelector('.recovered .counter').innerHTML = recovered.toLocaleString('id-ID');
      document.querySelector('.deceased .counter').innerHTML = deceased.toLocaleString('id-ID');
    } catch (error) {
      console.log(error.message);
    };
  },
};

export default Home;
