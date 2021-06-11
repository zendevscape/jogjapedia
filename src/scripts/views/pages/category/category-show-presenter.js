class CategoryShowPresenter {
  constructor({
    catId,
    view,
    itemDataSource,
  }) {
    this._catId = catId;
    this._view = view;
    this._itemDataSource = itemDataSource;

    this._showCategory();
  }

  async _showCategory() {
    const items = await this._itemDataSource.getAllItems(this._catId);
    this._displayItems(items);
  }

  _displayItems(items) {
    this._view.showItems(this._catId, items);
  }
}

export default CategoryShowPresenter;
