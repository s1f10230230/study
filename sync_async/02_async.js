// function resolveAfter2Seconds() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('resolved');
//             reject('rejected');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

const resolveAfter2Seconds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved');
            reject('rejected');
        }, 2000);
});
}

const asyncCall = async () => {
    
    console.log('calling');
    result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

