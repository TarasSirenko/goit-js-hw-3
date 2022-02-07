const findBestEmployee = function (employees) {
    const numberTasks = Object.values(employees)
    let bestEmployee = numberTasks[0]
    for (let i = 0; i < numberTasks.length; i += 1) {
        if (bestEmployee < numberTasks[i]) {
            bestEmployee = numberTasks[i]
        }
    }
    const index = numberTasks.indexOf(bestEmployee);
    console.log(Object.keys(employees)[index]);
}


findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
});
findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
})
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })