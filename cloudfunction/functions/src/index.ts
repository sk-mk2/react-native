import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const random = functions.https.onRequest((request, response) => {
    console.log(request.query);
    const num:number = request.query.num;
    response.send(`Random Number is ${getRandomInt(num)}`);
});

function getRandomInt(max:number):number {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}