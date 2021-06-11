class MenuInitiator {
  constructor({
    window,
    header,
    menu,
    drawer,
    content,
  }) {
    this._window = window;
    this._header = header;
    this._menu = menu;
    this._drawer = drawer;
    this._content = content;

    this._init();
  }

  _init() {
    this._menu.addEventListener('click', (event) => {
      this._toggleDrawer(event, this._drawer);
    });

    this._content.addEventListener('click', (event) => {
      this._closeDrawer(event, this._drawer);
    });

    this._window.addEventListener('resize', (event) => {
      if (this._window.getComputedStyle(this._menu).display === 'none') {
        this._closeDrawer(event, this._drawer);
      }
    });

    this._window.addEventListener('scroll', (event) => {
      if (this._window.scrollY >= 50) {
        this._setHeaderColorful(event, this._header);
      } else {
        this._setHeaderTransparent(event, this._header);
      }
    });
  }

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  }

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  }

  _setHeaderTransparent(event, header) {
    event.stopPropagation();
    header.classList.add('transparent');
  }

  _setHeaderColorful(event, header) {
    event.stopPropagation();
    header.classList.remove('transparent');
  }
};

export default MenuInitiator;
