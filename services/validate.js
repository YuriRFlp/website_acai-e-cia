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

const isBirthday = (date) => {
    const year = new Date().getFullYear();
    let yearValidate = false;
    if(date.split('/')[2] && date.split('/')[2].length === 4) {
        if (Number(date.split('/')[2]) > (year - 110) && Number(date.split('/')[2]) <= year) {
            yearValidate = true;
        }
    }
    const monthValidate = Number(date.split('/')[1]) <= 12;
    const dayValidate = Number(date.split('/')[0]) <= 31;
    const fullDateValidate = date.length === 10 ? true : false;
    const birthdayValidate = (yearValidate && monthValidate && dayValidate && fullDateValidate) ? true : false;
    return birthdayValidate;
}



export { isEmpty, isEmail, isBirthday }