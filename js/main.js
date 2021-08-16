import { progressBarData } from "./data/progressBarData.js";
import { ProgressBars } from "./components/ProgressBars.js";

// console.log('LABA');
// console.log(progressBarData);
new ProgressBars('left-column', progressBarData);
new ProgressBars('right-column', progressBarData);