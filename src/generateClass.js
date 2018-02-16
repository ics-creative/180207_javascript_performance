// プロトタイプの生成 ---------------------------
const generatePrototype = function () {
  const logName = current.name + ':' + current.ret;

  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    new PrototypeHoge();
  }

  console.timeEnd(logName);
  current.ret++;
};

// クラスの生成 ---------------------------
const generateClass = function () {
  const logName = current.name + ':' + current.ret;

  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    new ClassHoge();
  }

  console.timeEnd(logName);
  current.ret++;
};