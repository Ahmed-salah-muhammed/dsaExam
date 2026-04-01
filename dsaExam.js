var sortPeople = function (names, heights) {
  const n = names.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (heights[j] < heights[j + 1]) {
        let tempH = heights[j];
        heights[j] = heights[j + 1];
        heights[j + 1] = tempH;

        let tempN = names[j];
        names[j] = names[j + 1];
        names[j + 1] = tempN;
      }
    }
  }

  return names;
};

const names = ["Ahmed", "Salah", "Muhammed"];
const heights = [155, 185, 150];

const sortedNames = sortPeople(names, heights);

console.log(sortedNames);
