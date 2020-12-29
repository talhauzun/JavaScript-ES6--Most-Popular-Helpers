const initValue=10;

const numberFunc=(...numbers)=>{
    /*  console.log(numbers);
    !  numbers gelen datalarımızı alıyoruz.
    !  gelen datalarımızı reduce ile toplayoruz ve bir başlangıç değeri koyduk bunun üstüne topluyor.
    */  
    const sumNumbers=  numbers.reduce((sumNumbers,number)=>sumNumbers+number,initValue);
    return sumNumbers;
}
console.log(numberFunc(1,5,9))