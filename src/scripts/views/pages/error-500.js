import $ from 'jquery';

const Error500 = {
  async render() {
    $('main').removeAttr('class');
    $('main').addClass('error-500');

    $('header').addClass('cancel-transparent');
    $('a.home').removeClass('menu-active');
    $('a.explore').removeClass('menu-active');

    document.title = 'Kesalahan | JogjaPedia';
    return `
      <section class="hero">
        <img data-src="/assets/img/heroes/500.svg" class="lazyload" alt="Error 500">
        <p>Terjadi kesalahan. Silakan coba lagi.</p>
      </section>`;
  },
};

export default Error500;
