class MenuInitiator {
  constructor({
    window,
    header,
    scrollTopMenu,
    floatMenu,
    drawer,
    content,
    footer,
  }) {
    this._window = window;
    this._header = header;
    this._scrollTopMenu = scrollTopMenu;
    this._floatMenu = floatMenu;
    this._drawer = drawer;
    this._content = content;
    this._footer = footer;

    this._init();
  }

  _init() {
    this._window.on('scroll', (event) => {
      if (this._window.scrollTop() >= 50) {
        this._setHeaderColorful(event, this._header);
        this._showScrollTopMenu(event, this._scrollTopMenu);
      } else {
        this._setHeaderTransparent(event, this._header);
        this._hideScrollTopMenu(event, this._scrollTopMenu);
      }
    });

    this._scrollTopMenu.on('click', (event) => {
      this._scrollToTop(event, this._window);
    });

    this._floatMenu.on('click', (event) => {
      this._toggleDrawer(event, this._drawer);
    });

    this._header.on('click', (event) => {
      this._closeDrawer(event, this._drawer);
    });

    this._content.on('click', (event) => {
      this._closeDrawer(event, this._drawer);
    });

    this._footer.on('click', (event) => {
      this._closeDrawer(event, this._drawer);
    });

    this._window.on('resize', (event) => {
      if (this._floatMenu.css('display') === 'none') {
        this._closeDrawer(event, this._drawer);
      }
    });
  }

  _setHeaderTransparent(event, header) {
    event.stopPropagation();
    header.addClass('transparent');
  }

  _setHeaderColorful(event, header) {
    event.stopPropagation();
    header.removeClass('transparent');
  }

  _scrollToTop(event, window) {
    event.stopPropagation();
    window.scrollTop(0);
  }

  _showScrollTopMenu(event, scrollTopMenu) {
    event.stopPropagation();
    scrollTopMenu.addClass('show');
  }

  _hideScrollTopMenu(event, scrollTopMenu) {
    event.stopPropagation();
    scrollTopMenu.removeClass('show');
  }

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.toggleClass('open');
  }

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.removeClass('open');
  }
}

export default MenuInitiator;
