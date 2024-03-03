const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const promise1 = new Promise((resolve, reject) => {
    let sum = 0;
    array2D[0].forEach(num => sum += num);
    resolve(sum);
});
const promise2 = new Promise((resolve, reject) => {
    let sum = 0;
    array2D[1].forEach(num => sum += num);
    resolve(sum);
});
const promise3 = new Promise((resolve, reject) => {
    let sum = 0;
    array2D[2].forEach(num => sum += num);
    resolve(sum);
});


Promise.all([promise1, promise2, promise3]).then((responses) => {
    sum = 0;
    responses.forEach(num => sum += num);
    console.log(sum);
}).catch(err => console.log(`Error: ${err}`));