// プロトタイプの生成 ---------------------------
const generatePrototype = function () {
  const logName = current.name + ":" + current.ret;

  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    new PrototypeHoge();
  }

  console.timeEnd(logName);
  current.ret++;
};

// クラスの生成 ---------------------------
const generateClass = function () {
  const logName = current.name + ":" + current.ret;

  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
    new ClassHoge();
  }

  console.timeEnd(logName);
  current.ret++;
};


// プロトタイプの定義 ---------------------------
const definitionPrototype = function () {
  const logName = current.name + ":" + current.ret;

  console.time(logName);

  for (let i = 0; i < DEFINITION_MAX_COUNT; i++) {

    // Prototype式
    function PrototypePiyo() {
      this.piyo = 0;
    }

    PrototypePiyo.prototype.piyo = function () {
      this.piyo;
    };
  }

  console.timeEnd(logName);
  current.ret++;
};

// クラスの定義 ---------------------------
const definitionClass = function () {
  const logName = current.name + ":" + current.ret;

  console.time(logName);

  for (let i = 0; i < DEFINITION_MAX_COUNT; i++) {
    // Class式
    class ClassPiyo {
      constructor() {
        this.a = 0;
      }

      piyo() {
        this.piyo;
      }
    }
  }

  console.timeEnd(logName);
  current.ret++;
};


