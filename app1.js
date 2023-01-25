const fun = (arr, sum) => {
  let map = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let left = sum - arr[i];
    if (map[left] !== undefined) {
      res.push(map[left]);
      res.push(i);
      return res;
    } else {
      map[arr[i]] = i;
    }
  }
};

let arr = [1, 3, 10, 11, 14];
let sum = 13;
let res = fun(arr, sum);

console.log(res);
