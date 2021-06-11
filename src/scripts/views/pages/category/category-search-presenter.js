class CategorySearchPresenter {
  constructor({
    catId,
    view,
    itemDataSource,
  }) {
    this._catId = catId;
    this._view = view;
    this._itemDataSource = itemDataSource;

    this._listenToSearchRequestByUser();
  }

  get latestQuery() {
    return this._latestQuery;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchItem(latestQuery);
    });
  }

  async _searchItem(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundItems;
    if (this.latestQuery.length > 0) {
      foundItems = await this._itemDataSource.searchItem(this._catId, this.latestQuery);
    } else {
      foundItems = await this._itemDataSource.getAllItems(this._catId);
    }

    this._showFoundItems(foundItems);
  }

  _showFoundItems(items) {
    this._view.showItems(this._catId, items);
  }
}

export default CategorySearchPresenter;
