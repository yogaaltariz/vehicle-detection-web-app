import * as tf from '@tensorflow/tfjs';
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");

(async () => {
  window.onload = () => (window.modelPromise = cocoSsd.load());

  
})();
