import MenuInitiator from '../utils/menu-initiator';
import UrlParser from '../router/url-parser';
import LoadingSplash from './elements/loading-splash';
import routes from '../router/routes';
import Error500 from './pages/error-500';

class App {
  constructor({
    window,
    header,
    floatMenu,
    scrollTopMenu,
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

    this._initialAppShell();
  }

  _initialAppShell() {
    customElements.define('loading-splash', LoadingSplash);

    new MenuInitiator({
      window: this._window,
      header: this._header,
      scrollTopMenu: this._scrollTopMenu,
      floatMenu: this._floatMenu,
      drawer: this._drawer,
      content: this._content,
      footer: this._footer,
    });
  }

  async renderPage() {
    this._window.scrollTop(0);
    this._content.empty().append('<loading-splash></loading-splash>');

    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes(url);
      const html = await page.render();
      this._content.empty().append(html);

      await page.afterRender();
    } catch (error) {
      console.log(error.message);
      this._content.empty().append(await Error500.render());
    }
  }
}

export default App;
