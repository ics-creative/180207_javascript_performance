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