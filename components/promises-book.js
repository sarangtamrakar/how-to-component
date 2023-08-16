
// 1. check training container
// 2. create new experiment
// 3. prepare training data
// 4. prepare training env
// 5. start training


const checkTrainingContainer = () => {

    const fakeApi = () => {
        return 10;
    }

    return new Promise((resolve, reject) => {
        try {

            let res = fakeApi();
            if (res) {
                console.log("check training container");
                resolve({ res });
            } else {
                reject(new Error("Error occured in check training container"));
            }
        } catch (error) {
            reject(new Error(error?.message));
        }
    })
}

const createNewExperiment = () => {

    const fakeApi = () => {
        return 10;
    }

    return new Promise((resolve, reject) => {
        try {

            let res = fakeApi();
            if (res) {
                console.log("check createNewExperiment successfully!!!");
                resolve({ res });
            } else {
                reject(new Error("Error occured in create new experiment"));
            }
        } catch (error) {
            reject(new Error(error?.message));
        }
    })
}

const prepareTrainingData = () => {

    const fakeApi = () => {
        return 10;
    }

    return new Promise((resolve, reject) => {
        try {

            let res = fakeApi();
            if (res) {
                console.log("check prepareTrainingData successfully!!!");

                resolve({ res });
            } else {
                reject(new Error("Error occured in prepare training data"));
            }
        } catch (error) {
            reject(new Error(error?.message));
        }
    })
}

const prepareTrainingEnv = () => {

    const fakeApi = () => {
        return null;
    }

    return new Promise((resolve, reject) => {
        try {

            let res = fakeApi();
            if (res) {
                console.log("check prepareTrainingEnv successfully!!!");
                resolve({ res });
            } else {
                reject(new Error("Error occured in prepare training env"));
            }
        } catch (error) {
            reject(new Error(error?.message));
        }
    })
}

const startTraining = () => {

    const fakeApi = () => {
        return 10;
    }

    return new Promise((resolve, reject) => {
        try {

            let res = fakeApi();
            if (res) {
                console.log("startTraining successfully!!!");
                resolve({ res });
            } else {
                reject(new Error("Error occured in start training"));
            }
        } catch (error) {
            reject(new Error(error?.message));
        }
    })
}



// checkTrainingContainer()
//     .then(({ res }) => createNewExperiment({ res }))
//     .then(({ res }) => prepareTrainingData({ res }))
//     .then(({ res }) => prepareTrainingEnv({ res }))
//     .catch ((error) => { 
//         console.log(error.message)
//     })
//     .then((res ) => startTraining({ res }))
//     .catch ((error) => { 
//         console.log(error.message)
//     })




Promise.Sarangall = function (values) {
    const promise = new Promise(function (resolve, reject) {
        let result = [];
        let totalResolved = 0;
        values.map((item, index) => {
            Promise.resolve(item).then((res) => {
                result[index] = res;
                totalResolved++;
                // if totalResolved = all promise resolve then only it will resolve
                if (totalResolved === values.length)
                    resolve(result);
            }).
                catch((err) => {
                    reject(err);
                })
        })
    })
    return promise
}


// Promise.Sarangall([checkTrainingContainer(), prepareTrainingEnv(), prepareTrainingData()])
//     .then((messages) => {
//         console.log("messages", messages);
//     })
//     .catch((err) => console.log("error", err.message));



Promise.SarangRace = function (array) {
    return new Promise((resolve, reject) => {
        array.forEach((el) => {
            el.then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            })
        })
    })
}


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1");
    }, 500);
})


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p2");
    }, 100);
})


const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3");
    }, 300);
})




// Promise.SarangRace([p1,p2,p3])
//     .then((data) => {
//         console.log("data",data);
//     }).catch((err) => {
//         console.log("err",err);
//     })




Promise.Sarangany = function (array) {
    // if all promise rejected then only reject else resolve who first resolved;
    let RejectCounter = 0;
    return new Promise((resolve, reject) => {
        array.forEach((prom, idx) => {
            prom.then((data) => {
                resolve(data);
            }).catch((err) => {
                RejectCounter++;
                // if all rejected then only reject 
                if (RejectCounter === array.length) {
                    reject(err);
                }
            })
        })
    })
}


Promise.Sarangany([p1, p2, p3])
    .then((data) => {
        console.log("data", data);
    }).catch((err) => {
        console.log("err", err);
    })

