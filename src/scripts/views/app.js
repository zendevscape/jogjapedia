import MenuInitiator from '../utils/menu-initiator';
import UrlParser from '../router/url-parser';
import LoadingSplash from './elements/loading-splash';
import routes from '../router/routes';
import Error500 from './pages/error-500';

class App {
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

    this._initialAppShell();
  }

  _initialAppShell() {
    customElements.define('loading-splash', LoadingSplash);

    new MenuInitiator({
      window: this._window,
      header: this._header,
      menu: this._menu,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    this._window.scrollTo(0, 0);
    this._content.innerHTML = `
      <loading-splash>
      </loading-splash>`;

    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes(url);
      const html = await page.render();
      this._content.innerHTML = html;

      await page.afterRender();
    } catch (error) {
      console.log(error.message);
      this._content.innerHTML = await Error500.render();
    }
  }
}

export default App;
