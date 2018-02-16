// 空のループを回した場合
const emptyLoop = function () {

  const logName = current.name + ':' + current.ret;
  console.time(logName);

  for (let i = 0; i < MAX_COUNT; i++) {
  }

  console.timeEnd(logName);
  current.ret++;
};