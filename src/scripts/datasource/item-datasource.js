class ItemDataSource {
  static async getAllItems(catId) {
    const response = await fetch(`/assets/json/${catId}.json`);
    const responseJson = await response.json();
    return responseJson;
  }

  static async getItem(catId, itemId) {
    return (await this.getAllItems(catId)).find((item) => item.id === itemId);
  }

  static async searchItem(catId, query) {
    return (await this.getAllItems(catId)).filter((item) => {
      const loweredCaseItemName = (item.name || '-').toLowerCase();
      const jammedItemTitle = loweredCaseItemName.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedItemTitle.indexOf(jammedQuery) !== -1;
    });
  }
}

export default ItemDataSource;
