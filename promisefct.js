export function fetchPromise (isComplete) {
    return new Promise((resolve, rejects) =>{
        if(isComplete){
            setTimeout(() =>{ resolve('well done')}, 1000);
        }else{
            setTimeout(() =>{ rejects(new Error('error'))}, 1000);
        }
        
    })
}