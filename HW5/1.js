//get Arrays for each of key items from array goods (using method Map)
//method 1
let newGoods = goods.map(obj => {return [obj.customerName, obj.item, obj.price]});
console.log(newGoods);
//method 2
let goodies1 = goods.map(names => {return names.customerName});
let goodies2 = goods.map(items => {return items.item});
let goodies3 = goods.map(prices => {return prices.price});
console.log(goodies1);
console.log(goodies2);
console.log(goodies3);


//filter prices that are lower then 1000 using method filter
let filteredGoods = goods.filter(prices => {
  if (prices.price < 1000){
    return prices;
  }
})
console.log(filteredGoods);