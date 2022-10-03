// function get_1_at_pos(pos){
//     return 2 ** pos;
// }

// function set(num, pos){
//     let mask = get_1_at_pos(pos);
//     mask = ~mask;
//     return num & mask;
// }
// console.log(set(15,2))



// reseta anum, inqy hamapatasxan pos-i 1-i texum dnuma 0

// function set(num, pos){
//     let mask = 1 << pos
//     return num & ~mask;
// }
// console.log(set(15,2));




//es depqum 2 dzevn el ashxatuma ham 1 ham 0 dnelu hamar...
// function set(num, pos, reset = false) {
//     let mask = 1 << pos;
//     if (reset) {
//         return num & ~mask;
//     }

//       return  num |= mask;

// }
// console.log(set(15, 2));



// const a_pos = 97;
// let table = 0;
// for (let i = 0; i<str.lengh; ++i){
//     let pos = str.charCodeAt(i)- a_pos;
//     if(table & (1<<pos)){
//         return false;
//     }
//     table |= (1<<pos)
// }


// return true;