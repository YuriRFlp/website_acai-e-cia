
const numberToCpf = (n) => n.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
const numberToCnpj = (n) => n.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
const cpfToNumber = (n) => n.replace(/[^\w\s]/gi, '');
const toMoney = (n) => parseFloat(n).toLocaleString('pt-BR', {
    style: 'currency', 
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3
})
const toPhone = (n) => n.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
const toCelPhone = (n) => n.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
const toDate = (d) => {
    let firstSplit;
    let day;
    let mounth;
    let year;
    if(d.length > 0){
        if(String(d).split("").includes("T")){
            firstSplit = d.split("T")[0];
            day = firstSplit.split("-")[2];
            mounth = firstSplit.split("-")[1];
            year = firstSplit.split("-")[0];
        }else{
            firstSplit = String(d).split(" ")[0];
            day = firstSplit.split("-")[2];
            mounth = firstSplit.split("-")[1];
            year = firstSplit.split("-")[0];
        }
        return `${day}/${mounth}/${year}`
    }
    return ""
}
const toDateUS = (d) => {
    const firstSplit = d.split(" ")[0];
    const day = firstSplit.split("-")[2];
    const mounth = firstSplit.split("-")[1];
    const year = firstSplit.split("-")[0];
    return `${year}-${mounth}-${day}`
}


export { numberToCpf, numberToCnpj, cpfToNumber, toDate, toDateUS, toMoney, toPhone, toCelPhone}