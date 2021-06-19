const Error404 = {
  async render() {
    const main = document.querySelector('main');
    main.removeAttribute('class');
    main.classList.add('error-404');

    document.querySelector('header').classList.add('semi');
    document.querySelector('a.home').classList.remove('menu-active');
    document.querySelector('a.explore').classList.remove('menu-active');

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
