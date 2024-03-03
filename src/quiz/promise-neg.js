const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];
const promise1 = new Promise((resolve, reject) => {
    array2D[0].forEach((val) => {
        if (val < 0) {
            resolve(array2D[0]);
        }
    })
    reject(false);
});

const promise2 = new Promise((resolve, reject) => {
    array2D[1].forEach((val) => {
        if (val < 0) {
            resolve(array2D[1]);
        }
    })
    reject(false);
});

const promise3 = new Promise((resolve, reject) => {
    array2D[2].forEach((val) => {
        if (val < 0) {
            resolve(array2D[2]);
        }
    })
    reject(false);
});


Promise.any([promise1, promise2, promise3]).then((res) => {
    console.log(res);
}).catch(err => console.log(`Error: ${err}`));