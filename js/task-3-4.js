const countTotalSalary = function (emploees) {
    const salaries = Object.values(emploees) 
    let total = 0
    for (let salary of salaries) {
        total += salary   
    }
    console.log(total);
}

 countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
 })
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })