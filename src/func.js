// 普通の関数呼び出し ----------------------------
const execFunc1 = function () {

  const logName = current.name + ":" + current.ret;
  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    callFunc1(0);
  }

  console.timeEnd(logName);
  current.ret++;
};
// アロー関数呼び出し ----------------------------
const execFunc2 = function () {

  const logName = current.name + ":" + current.ret;
  console.time(logName);
  for (let i = 0; i < MAX_COUNT; i++) {
    callFunc2(0);
  }

  console.timeEnd(logName);
  current.ret++;
};


// アロー関数・カッコを省略呼び出し ----------------------------
const execFunc3 = function () {
  const logName = current.name + ":" + current.ret;
  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    callFunc3(0);;
  }

  console.timeEnd(logName);
  current.ret++;
};


// プロトタイプの関数を呼び出す ---------------------------
const execPrototype = function () {
  const logName = current.name + ":" + current.ret;

  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    prototypeHoge.hoge(0);
  }

  console.timeEnd(logName);
  current.ret++;
};

// クラスの関数を呼び出す ---------------------------
const execClass = function () {
  const logName = current.name + ":" + current.ret;

  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    classHoge.hoge(0);
  }

  console.timeEnd(logName);
  current.ret++;
};

