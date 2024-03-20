async function main() {
    const array2D = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    function sumOfRow(row) {
        let sum = 0;
        row.forEach(num => sum += num);
        return new Promise((resolve, reject) => {
            resolve(sum);
        });
    }

    const promiseList = array2D.map((row) => sumOfRow(row));
    const rowSums = await Promise.all(promiseList);

    let finalSum = 0;
    rowSums.forEach(sum => finalSum += sum);
    console.log(finalSum);
}
main();