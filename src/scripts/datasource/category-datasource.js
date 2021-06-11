class CategoryDataSource {
  static async getAllCategories() {
    const response = await fetch('/assets/json/category.json');
    const responseJson = await response.json();
    return responseJson;
  }

  static async getCategory(id) {
    return (await this.getAllCategories()).find((category) => {
      return category.id == id;
    });
  }
}

export default CategoryDataSource;
