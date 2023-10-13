function isEmpty(obj){
    let i = 0;
    for(prop in obj){
        i++;
    }
    return i === 0;
}

window.onload = () => {
    console.log(isEmpty({}));
    console.log(isEmpty({yes:false}))
}

