let arr = ["hello", "java", "hello", "react"];

function CountFrequency(arr) {
  const map = new Map();

  arr.forEach((e) => {
    if (map.has(e)) {
      map.set(e, map.get(e) + 1);
    } else {
      map.set(e, 1);
    }
  });
  return map;
}

console.log(CountFrequency(arr));
