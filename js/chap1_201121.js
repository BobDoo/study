// 2020-11-21 자바스크립트 es6 기초

// generator
function* gen() {
  let i = 0;

  while (true) {
    yield i++;
  }
}
const range = gen();

console.log("generator:", range.next());
console.log("generator:", range.next());
console.log("generator:", range.next());
console.log("generator:", range.next());

// promise
const status = 2100;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (status === 200) resolve("success");
    else reject("error");
  }, 0);
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));

// async await
const fnc = async () => {
  try {
    const b = await promise;
    console.log("async:", b);
  } catch (e) {
    console.log("async:", e);
  }
};

fnc();

console.log("asdf");

// template literal
const a = 1;
const b = 2;

console.log(`${a}+${b}=${a + b}`);
