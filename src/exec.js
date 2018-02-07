window.onload = function () {
  const showResult = function () {
    console.log("finish!");
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
