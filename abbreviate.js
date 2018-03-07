function abbrevName(name){
    const space = name.indexOf(' ')
    const second = name.charAt(space+1).toUpperCase();
    return `${name.charAt(0).toUpperCase()}.${second}`;
};

abbrevName("Sam Harris");
