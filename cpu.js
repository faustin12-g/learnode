import { worker } from "node:cluster";
import { parentPort } from "node:worker_threads";

parentPort.on('message', n=>{
    let sum = 0;
    for(let i = 0; i< n; i++)
    {
        sum+=1
    }
    parentPort.postMessage(sum)
})