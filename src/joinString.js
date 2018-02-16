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
