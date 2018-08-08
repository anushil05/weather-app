// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Bangalore', (err, temp) => {
//     if (err) {
//         console.log('Error:', err);
//     } else {
//         console.log('Success:', temp);
//     }
// });

// function getTempPromise (location) {
//     return new Promise ((resolve, reject) => {
//         setTimeout (() => {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }

// getTempPromise('Bangalore').then( (temp) => {
//     console.log('Promise Success', temp);
// }, (err) => {
//     console.log('Promise error', err);
// })


//Challenge Area

function addPromise (a, b) {
    return new Promise ((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        } else {
            reject('a and b need to be number');
        }
    });
}

addPromise(2, 3).then((sum)=> {
    console.log('Success', sum);
}, (err) => {
    console.log('Error:', err);
})

addPromise('Anushil', 5).then((sum) => {
    console.log('This should not show up');
}, (err) => {
    console.log('This should show up');
})