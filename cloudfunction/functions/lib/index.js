"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.random = functions.https.onRequest((request, response) => {
    console.log(request.query);
    const num = request.query.num;
    response.send(`Random Number is ${getRandomInt(num)}`);
});
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}
//# sourceMappingURL=index.js.map