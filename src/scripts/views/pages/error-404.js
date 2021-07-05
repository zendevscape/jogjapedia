import $ from 'jquery';

const Error404 = {
  async render() {
    $('main').removeAttr('class');
    $('main').addClass('error-404');

    $('header').addClass('semi');
    $('a.home').removeClass('menu-active');
    $('a.explore').removeClass('menu-active');

    document.title = 'Halaman Tidak Ditemukan | JogjaPedia';
    return `
      <section class="hero">
        <img data-src="/assets/img/heroes/404.svg" class="lazyload" alt="Error 404">
        <p>Ups, halaman yang Anda cari tidak ditemukan.</p>
        <a href="/#/">Beranda<i class="material-icons">arrow_forward</i></a>
      </section>`;
  },

  async afterRender() {},
};

export default Error404;
