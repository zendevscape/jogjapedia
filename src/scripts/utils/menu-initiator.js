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
    this._menu.on('click', (event) => {
      this._toggleDrawer(event, this._drawer);
    });

    this._content.on('click', (event) => {
      this._closeDrawer(event, this._drawer);
    });

    this._window.on('resize', (event) => {
      if (this._menu.css('display') === 'none') {
        this._closeDrawer(event, this._drawer);
      }
    });

    this._window.on('scroll', (event) => {
      if (this._window.scrollTop() >= 50) {
        this._setHeaderColorful(event, this._header);
      } else {
        this._setHeaderTransparent(event, this._header);
      }
    });
  }

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.toggleClass('open');
  }

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.removeClass('open');
  }

  _setHeaderTransparent(event, header) {
    event.stopPropagation();
    header.addClass('transparent');
  }

  _setHeaderColorful(event, header) {
    event.stopPropagation();
    header.removeClass('transparent');
  }
};

export default MenuInitiator;
