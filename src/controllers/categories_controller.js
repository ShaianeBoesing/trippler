const [Category, CategoryDependencyError] = require('../models/category');

exports.index = async function(req, res) {
  try {
    const categories = await Category.listCategories();
    res.status(200).json({ data: categories });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error ao buscar categories' });
  }
};

exports.show = async function(req, res) {
  try {
    const categoryId = req.params.id;
    const categories = await Category.getCategoryById(categoryId);
    res.status(200).json({ data: categories });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error ao buscar categories' });
  }
};

exports.create = async function(req, res) {
  try {
    const newCategory = req.body;
    const review = await Category.createCategory(newCategory);
    res.status(201).json({ data: review });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao criar categoria' });
  }
};

exports.delete = async function(req, res) {
  try {
    const categoryId = req.params.id;
    await Category.deleteCategory(categoryId);
    res.status(204).json();
  } catch (error) {
    console.log(error);
    if (error instanceof CategoryDependencyError) {
      res.status(error.errorCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro ao apagar categoria' });
    }
  }
};

