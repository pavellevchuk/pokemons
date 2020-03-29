export const capitalize = (string) => {
    let newString = string.split('-').join(' ');
    return newString.charAt(0).toUpperCase() + newString.slice(1)
}

export const hashId = (id) => {
    let str = '#';

    if(id < 10){
        str += '00' + id;
    }else if(id >= 10 && id < 100){
        str += '0' + id;
    }else{
        str += id;
    }
    return str;
}