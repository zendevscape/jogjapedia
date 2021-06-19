const Error500 = {
  async render() {
    const main = document.querySelector('main');
    main.removeAttribute('class');
    main.classList.add('error-500');

    document.querySelector('header').classList.add('semi');
    document.querySelector('a.home').classList.remove('menu-active');
    document.querySelector('a.explore').classList.remove('menu-active');

    document.title = 'Kesalahan | JogjaPedia';
    return `
      <section class="hero">
        <img data-src="/assets/img/heroes/500.svg" class="lazyload" alt="Error 500">
        <p>Terjadi kesalahan. Silakan coba lagi.</p>
      </section>`;
  },
};

export default Error500;
