const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

(async function runAnimation() {
  alice1Status = await alice1.animate(aliceTumbling, aliceTiming).finished;
  console.log("alice 1 status: ", alice1Status);
  alice2Status = await alice2.animate(aliceTumbling, aliceTiming).finished;
  console.log("alice 2 status: ", alice2Status);
  alice3Status = await alice3.animate(aliceTumbling, aliceTiming).finished;
  console.log("alice 3 status: ", alice3Status);
  console.log("All animations are done!");
})();

// Promise chain  
// alice1.animate(aliceTumbling, aliceTiming).finished
//   .then(() => {
//       return alice2
//               .animate(aliceTumbling, aliceTiming)
//               .finished;
//   })
//   .then(() => {
//     return alice3
//             .animate(aliceTumbling, aliceTiming)
//             .finished;
//   })
//   .catch((err) => alert(`Error when promising ... ${err.message}`));