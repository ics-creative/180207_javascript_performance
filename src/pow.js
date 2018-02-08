const pow1 = function () {

  const logName = current.name + ":" + current.ret;
  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    2 * 2 * 2 * 2 * 2;
  }

  console.timeEnd(logName);
  current.ret++;
};

const pow2 = function () {

  const logName = current.name + ":" + current.ret;
  console.time(logName);
  for (let i = 0; i < MAX_COUNT; i++) {
    Math.pow(2, 5);
  }
  console.timeEnd(logName);
  current.ret++;
};

const pow3 = function () {

  const logName = current.name + ":" + current.ret;
  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    2 ** 5;
  }

  console.timeEnd(logName);
  current.ret++;
};
