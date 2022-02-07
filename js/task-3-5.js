const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
const getAllPropValues = function (arr, prop) {
    const values = []
    for (let product of arr) {
        if (product[prop]) {
            values.push(product[prop])
        } 
    }
    console.log(values);
}
getAllPropValues(products, 'name')
getAllPropValues(products, 'quantity')
getAllPropValues(products, 'category')