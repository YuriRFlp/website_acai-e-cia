const isEmpty = (payload)  => {
    const emptyFields = []
    Object.entries(payload).forEach(element => {
        if(element[1] === ""){
            if(element[0] !== "complemento") {
                emptyFields.push(element[0])
            }
        }
    });
    // let returnMessage = ""
    // emptyFields.forEach(el => {
    //     returnMessage += `* O Campo ${el} está vazio`
    // })
    const isEmpty = emptyFields.length === 0 ? true : false;
    return isEmpty;
}

const isEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const test = re.test(String(email).toLowerCase());
    return test;
}





export { isEmpty, isEmail }