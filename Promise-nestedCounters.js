let counter = 0;

const count = () => {
  counter++;
  console.log(counter);
};

const delay = (callback, seconds) => {
  const promise = new Promise((ok, no) => {
    setTimeout(() => {
      ok(callback());
    }, seconds * 1000);
  });
  return promise;
};

delay(count, 1)
.then(() => {
  return delay(count, 2);
})
.then(() => {
  delay(count, 3);
});
