const Database = require('../../database');

class CategoryNotFoundError extends Error {
  constructor(message = 'Categoria não encontrada.', errorCode = 404) {
    super(message);
    this.name = 'CategoryNotFoundError';
    this.errorCode = errorCode;
  }
}

class CategoryDependencyError extends Error {
  constructor(message = 'A exclusão da categoria não é possível pois existem pontos turísticos vinculados à ela.', errorCode = 409) {
    super(message);
    this.name = 'CategoryDependencyError';
    this.errorCode = errorCode;
  }
}

class Category {
  constructor(category) {
    this.id_categoria = category.id_categoria;
    this.nome = category.nome;
    this.descricao = category.descricao;
  }

  static async createCategory(newCategory) {
    const db = new Database();
    const categoryId = await db.insert('Categoria', newCategory);

    newCategory.id_categoria = categoryId;
    return new Category(newCategory);
  }

  static async getCategoryById(categoryId) {
    const query = 'SELECT * FROM Categoria WHERE id_categoria = ?';

    const db = new Database();
    const categoryRows = await db.raw(query, [categoryId]);

    if (categoryRows.length === 0) {
      return null;
    }
    const categoryData = categoryRows[0];
    return new Category(categoryData);
  }

  static async deleteCategory(categoryId) {
    const query = `SELECT id_ponto FROM Ponto_Turistico WHERE id_categoria=? LIMIT 1`;

    const db = new Database();
    const categoryUsed = await db.raw(query, [categoryId]);

    if (categoryUsed.length > 0) {
      throw new CategoryDependencyError();
    }

    const id = {'id_categoria': categoryId} 
    await db.delete('Categoria', id);
  }

  static async listCategories() {
    const query = 'SELECT * FROM Categoria';

    const db = new Database();
    const categoryRows = await db.raw(query);
    
    const categorys = categoryRows.map(categoryData => new Category(categoryData));
    return categorys;
  }
}

module.exports = { Category, CategoryDependencyError, CategoryNotFoundError };
