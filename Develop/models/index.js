// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {

})
// Categories have many Products
Category.hasMany(Product, {

})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  through: ProductTag
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
