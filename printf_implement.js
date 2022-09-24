
const checkType = {
    1: 'number',
    2: 'string'
}

function f(string, ...arg) {
    let i = 0;
    for (let str of string) {
        // console.log(string)
        if (str === "%") {
            let index = string.indexOf(str);
            // console.log(index);
           // for(let i =0; i<arg.length; ++i){
           //     if(typeof arg[i] === checkType["1"]){
           //
           //     }
           // }
            if (string[index + 1] === "d") {
                if(typeof arg[i] === checkType["1"]){
                    string = string.replace(string[index + 1], arg[0]);
                    string = string.replace(string[index], "");
                }

            }
            if (string[index + 1] === "s") {

                string = string.replace(string[index + 1], arg[1]);
                string = string.replace(string[index], "");
            }

        }

    }
    console.log(string);


}
f("aaa%d bbb%s ccc%d yyy%s", 777, 888);
