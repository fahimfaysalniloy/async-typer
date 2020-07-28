const wait = async function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
function genRandomNumber(min, max, randomNumber = Math.random()) {
  return randomNumber * (max - min) + min;
}
async function draw(el) {
  const letters = el.textContent;
  let tillNow = '';
  const { typeMax, typeMin } = el.dataset;

  for (const letter of letters) {
    tillNow += letter;

    el.textContent = tillNow;
    await wait(genRandomNumber(typeMin, typeMax));
  }
}
document.querySelectorAll('[data-type]').forEach(draw);
