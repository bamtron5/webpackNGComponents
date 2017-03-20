export default (function(){
  function generateNumber(i) {
    return new Promise((resolve, reject) => {
      let x = 0;
      let mem = [];
      while (x <= i) {
        x++;
        mem.push({rating: Math.floor(Math.random() * (11 - 0) + 0)});
      }
      resolve(mem);
    });
  }

  return Promise.all([generateNumber(100)]);
});
