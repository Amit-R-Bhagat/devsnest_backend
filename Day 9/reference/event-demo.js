import EventEmitter from "events";

// Create class
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => {
  console.log("Event fired!");
});

myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
