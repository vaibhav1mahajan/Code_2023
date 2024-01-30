/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const a = [];
  transactions.map(transaction =>{
    let state =false;
    let index = 0;
    for(let i =0;i<a.length;i++){
      if(a[i]["category"]==transaction["category"]){
        state=true;
        index=i;
      }
    }
    if(!state){
      a.push({
        category:transaction["category"],
        totalSpent:transaction["price"]
      })
    } else{
      a[index]['totalSpent']+=transaction['price'];
    }
  })
  return a;
}
const a = [];
console.log(a.length);
module.exports = calculateTotalSpentByCategory;
