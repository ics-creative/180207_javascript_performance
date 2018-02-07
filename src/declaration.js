// constで変数を定義する
const constLoop = function () {

  const logName = current.name + ":" + current.ret;
  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    const a = "a";
    const b = "b";
    const c = "c";
    const d = "d";

    `${a}_${b}_${c}_${d}`;
  }

  console.timeEnd(logName);

  current.ret++;
};
// varで変数を定義する
const varLoop = function () {

  const logName = current.name + ":" + current.ret;


  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    var a = "a";
    var b = "b";
    var c = "c";
    var d = "d";
    `${a}_${b}_${c}_${d}`;
  }
  console.timeEnd(current.name + ":" + current.ret);
  current.ret++;
};

// letで変数を定義する
const letLoop = function () {

  const logName = current.name + ":" + current.ret;


  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    let a = "a";
    let b = "b";
    let c = "c";
    let d = "d";
    `${a}_${b}_${c}_${d}`;
  }

  console.timeEnd(logName);
  current.ret++;
};
