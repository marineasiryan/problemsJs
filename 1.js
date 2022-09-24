const checkType = {
    1: 'number',
    2: 'string'
}
function f(string, ...arg) {
    for(let i =0; i<arg.length; ++i){
        if(typeof arg[i] === checkType["1"]){
            for (let str of string) {
                if (str === "%") {
                    let index = string.indexOf(str);

                    if (string[index + 1] === "d") {

                        string = string.replace(string[index + 1], arg[0]);
                        string = string.replace(string[index], "");


                    }

            }
    }


}

f("aaa%d bbb%s ccc%d yyy%s", 777, 888);