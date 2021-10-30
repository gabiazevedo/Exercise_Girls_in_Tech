const { products, categories, establishments } = require('./data.json');

const organizeData = () => {
  const result = establishments.map((establishment) => {
    const newObject = {}; 
    newObject[establishment.name] = {};
    
    categories.forEach((categorie) => {
      newObject[establishment.name][categorie.name] = {};
      products.forEach((product) => {
        if (establishment.productsId.includes(product.id)
          && product.categoriesId.includes(categorie.id)) {
          newObject[establishment.name][categorie.name][product.name] = { price: product.price / 100 };
        };
      });

      if (Object.keys(newObject[establishment.name][categorie.name]).length === 0) {
        delete newObject[establishment.name][categorie.name];
      }
    });

    return newObject;
  })
  
  return JSON.stringify(result);
};

console.log(organizeData());
