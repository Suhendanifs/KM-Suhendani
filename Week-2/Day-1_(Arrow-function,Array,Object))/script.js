// function
const ganjilGenap = (angka) => {
    if (angka % 2 === 0) {
        return 'Genap';
    } else {
        return 'Ganjil';
    }
    

};

console.log(ganjilGenap(12));

const genapGanjil = (angka1) => {
    return angka1 % 2 === 0 ; 'Genap'; 'Ganjil'
};

console.log(genapGanjil(13))

// arrow function

//
const multiple = (step, stop) => {
    let result = [];
   for (let i = step; i <= stop;  i = i + step){
       result.push(i);      
   }
   return result;
}

console.log(multiple(2, 80))