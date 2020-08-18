const { Struct } = require('../redistructures')
const q = Struct.queue();
q.add('x');
q.add('y');
q.add('z');
const queueHandler = (res) => {
  if (res) {
    console.log(res);
    getQueue(queueHandler);
  } else {
    console.log('finished');
    process.exit(0);
  }
}
const getQueue = (success, error) => {
  return q.get(1).then(success, error);
}
getQueue(queueHandler);

