function getArray(input) {
  let arr = input.split(",").map((item) => item.trim());
  return arr;
}

const userInput = prompt("Please enter some flavors separated by commas.");

function updateTable() {
  const froyo = {};
  let flavorArr = getArray(userInput);
  for (let i = 0; i < flavorArr.length; i++) {
    if (flavorArr[i] in froyo) {
      froyo[flavorArr[i]] += 1;
    } else {
      froyo[flavorArr[i]] = 1;
    }
  }
  console.table(froyo);
}

updateTable();
