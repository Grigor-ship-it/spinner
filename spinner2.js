process.stdout.write('hello from spinner1.js... \rheyyy\n');
let array = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ']

for (let x = 0; x < array.length; x++) {
  setTimeout(() => {
    process.stdout.write(array[x])
}, (x+1)*200)
}


/*array.forEach((value, index) => {
  setTimeout(() => {
    process.stdout.write(value)
}, (index+1)*200)
})*/

