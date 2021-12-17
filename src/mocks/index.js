const { worker } = require("./browser");
console.log("starting mock worker...");
worker.start();

console.log(worker);

// if (typeof window !== "undefined") {
//   const { worker } = require("./browser");
//   worker.start();
// } else {
//   const { server } = require("./server");
//   server.listen();
// }
