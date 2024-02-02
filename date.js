// let date = new Date().getDay()
// const dt = (date) => {
//     return date
// }
// console.log(dt(date))

let date = new Date().getDay()
switch (date) {
    case 0:
        console.log(`Today is: Sunday and the time is: ${new Date().getTime()}`)
        break;
    case 1:
        console.log(`Today is: Monday and the time is: ${new Date().getTime()}`)
        break;
    case 2:
        console.log(`Today is: Tuesday and the time is: ${new Date().getTime()}`)
        break;
    case 3:
        console.log(`Today is: Wednesday and the time is: ${new Date().getTime()}`)
        break;
    case 4:
        console.log(`Today is: Thursday and the time is: ${new Date().getTime()}`)
        break;
    case 5:
        console.log(`Today is: Friday and the time is: ${new Date().getTime()}`)
        break;
    case 6:
        console.log(`Today is: Saturday and the time is: ${new Date().getTime()}`)
        break;
    default:
        console.log('no day')
        break;
}