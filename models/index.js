// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //doesn't directly conect so goes through junction table
  //refer to table-structure in images folder to understand
  through: ProductTag
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  //doesn't directly conect so goes through junction table
  through: ProductTag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
