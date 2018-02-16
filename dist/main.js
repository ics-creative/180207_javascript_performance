'use strict';
// main.jsはsrcフォルダーのjsファイルを結合しています。

const MAX_COUNT = 1000000;
const CHECK_COUNT = 10;
const checkList = [];

let index = 0;
let current = null;

// Classの生成と関数呼び出しに関する呼び出しコストを調べるための定義
class ClassHoge {
  constructor() {
    this.a = 0;
  }

  hoge(val) {
    return val + val;
  }
}
const classHoge = new ClassHoge();

// Prototype生成と関数呼び出しに関する呼び出しコストを調べるための定義
function PrototypeHoge() {
  this.a = 0;
}

PrototypeHoge.prototype.hoge = function (val) {
  return val + val;
};
const prototypeHoge = new PrototypeHoge();


const callFunc1 = function (x) {
  return x + x;
};
const callFunc2 = (x) => {
  return x + x;
};
const callFunc3 = x => {
  return x + x;
};
// 空のループを回した場合
const emptyLoop = function () {

  const logName = current.name + ':' + current.ret;
  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
  }

  console.timeEnd(logName);
  current.ret++;
};
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
// constで変数を定義する
const constLoop = function () {

  const logName = current.name + ':' + current.ret;

  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    const a = 'a';
    const b = 'b';
    const c = 'c';
    const d = 'd';

    `${a}_${b}_${c}_${d}`;
  }

  console.timeEnd(logName);

  current.ret++;
};
// varで変数を定義する
const varLoop = function () {

  const logName = current.name + ':' + current.ret;

  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    var a = 'a';
    var b = 'b';
    var c = 'c';
    var d = 'd';
    `${a}_${b}_${c}_${d}`;
  }
  console.timeEnd(current.name + ':' + current.ret);
  current.ret++;
};

// letで変数を定義する
const letLoop = function () {

  const logName = current.name + ':' + current.ret;

  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    let a = 'a';
    let b = 'b';
    let c = 'c';
    let d = 'd';
    `${a}_${b}_${c}_${d}`;
  }

  console.timeEnd(logName);
  current.ret++;
};

// 普通の関数呼び出し ----------------------------
const execFunc1 = function () {

  const logName = current.name + ':' + current.ret;
  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    callFunc1(0);
  }

  console.timeEnd(logName);
  current.ret++;
};
// アロー関数呼び出し ----------------------------
const execFunc2 = function () {

  const logName = current.name + ':' + current.ret;
  console.time(logName);
  for (let i = 0; i < MAX_COUNT; i++) {
    callFunc2(0);
  }

  console.timeEnd(logName);
  current.ret++;
};


// アロー関数・カッコを省略呼び出し ----------------------------
const execFunc3 = function () {
  const logName = current.name + ':' + current.ret;
  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    callFunc3(0);
  }

  console.timeEnd(logName);
  current.ret++;
};


// プロトタイプの関数を呼び出す ---------------------------
const execPrototype = function () {
  const logName = current.name + ':' + current.ret;

  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    prototypeHoge.hoge(0);
  }

  console.timeEnd(logName);
  current.ret++;
};

// クラスの関数を呼び出す ---------------------------
const execClass = function () {
  const logName = current.name + ':' + current.ret;

  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    classHoge.hoge(0);
  }

  console.timeEnd(logName);
  current.ret++;
};


const pow1 = function () {

  const logName = current.name + ':' + current.ret;
  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    2 * 2 * 2 * 2 * 2;
  }

  console.timeEnd(logName);
  current.ret++;
};

const pow2 = function () {

  const logName = current.name + ':' + current.ret;
  console.time(logName);
  for (let i = 0; i < MAX_COUNT; i++) {
    Math.pow(2, 5);
  }
  console.timeEnd(logName);
  current.ret++;
};

const pow3 = function () {

  const logName = current.name + ':' + current.ret;
  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    2 ** 5;
  }

  console.timeEnd(logName);
  current.ret++;
};

// テンプレートリテラルを使って文字列を結合する ----------------------------
const templateLiteral = function () {

  const logName = current.name + ':' + current.ret;
  console.time(logName);
  for (let i = 0; i < MAX_COUNT; i++) {
    const a = 'a';
    const b = 'b';
    const c = 'c';
    const d = 'd';
    const e = 'e';
    const f = 'f';

    `${a}_${b}_${c}_${d}_${e}_${f}`;
  }

  console.timeEnd(logName);
  current.ret++;
};

// 普通に文字列を結合する ----------------------------
const normalJoin = function () {
  const logName = current.name + ':' + current.ret;
  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    const a = 'a';
    const b = 'b';
    const c = 'c';
    const d = 'd';
    const e = 'e';
    const f = 'f';

    a + '_' + b + '_' + c + '_' + d + '_' + e + '_' + f;
  }

  console.timeEnd(logName);
  current.ret++;
};

window.onload = function () {
  const showResult = function () {
    console.log('finish!');
  };

  // emptyLoop.js
  checkList.push({func: emptyLoop, name: 'empty', ret: 0});

  // declaration.js
  checkList.push({func: varLoop, name: 'var', ret: 0});
  checkList.push({func: letLoop, name: 'let', ret: 0});
  checkList.push({func: constLoop, name: 'const', ret: 0});

  // pow.js
  checkList.push({func: pow1, name: 'pow1', ret: 0});
  checkList.push({func: pow2, name: 'pow2', ret: 0});
  checkList.push({func: pow3, name: 'pow3', ret: 0});

  // func.js
  checkList.push({func: execFunc1, name: 'exec-fun1', ret: 0});
  checkList.push({func: execFunc2, name: 'exec-fun2', ret: 0});
  checkList.push({func: execFunc3, name: 'exec-fun3', ret: 0});
  checkList.push({func: execClass, name: 'exec-class', ret: 0});
  checkList.push({func: execPrototype, name: 'exec-prototype', ret: 0});

  // joinString.js
  checkList.push({func: normalJoin, name: 'joinString', ret: 0});
  checkList.push({func: templateLiteral, name: 'templateLiteral', ret: 0});

  // generateClass.js
  checkList.push({func: generateClass, name: 'generate-class', ret: 0});
  checkList.push({func: generatePrototype, name: 'generate-prototype', ret: 0});

  // 開始クラスを設定する
  current = checkList[0];

  const loop = function () {

    current.func();

    if (current.ret < CHECK_COUNT) {
      setTimeout(loop, 500);
    } else {
      index++;
      current = checkList[index];
      if (index < checkList.length) {
        console.log('');
        setTimeout(loop, 500);
      } else {
        showResult();
      }
    }
  };

  setTimeout(loop, 1000);
};
