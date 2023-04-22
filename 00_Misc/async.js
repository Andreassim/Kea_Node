function celebrate(yay){
    return new Promise((resolve, reject) => {
        try{
            if(yay == "yay"){
                resolve("banzai")
            }
            throw Error("Celebration error")
        }
        catch (e){
            reject(e.message)
        }        
    })
}

celebrate("yay").then(message => console.log(message)).catch(message => console.log(message));
celebrate("nay").then(message => console.log(message)).catch(message => console.log(message));


function somethingGoodSomethingBad(timeout){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                resolve("GOOD")
            }
            catch{
                reject("BAD")
            }
        },2000)
    })
}

somethingGoodSomethingBad(5000)
    .then(message => console.log(message))
    .catch(message => console.log(message));


(async function getGoodOrBad(){
    const goodOrBadMessage = await somethingGoodSomethingBad(20);
    console.log(goodOrBadMessage);
})()
