export  function formatCardNumber(val){
    let num = [...val];
    let gr1 = num.slice(0, 4).join('');
    let gr2 = num.slice(4, 8).join('');
    let gr3 = num.slice(8, 12).join('');
    let gr4 = num.slice(12).join('');
    let formatedString = gr1 +" "+gr2+" "+gr3+" "+gr4;
    return formatedString;
}