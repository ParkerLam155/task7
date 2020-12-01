function reverseThisString(string){
    let stringArray = [];
    let length = string.length - 1;
    for(let i = length; i>=0; i-- )
        stringArray.push(string[i]);
    return stringArray.join("");
}

console.log(reverseThisString("hello"));

function swapCase(string){
    total="";
    for (let i=0;i<string.length; i++){
        a=string[i];
        if(a == a.toUpperCase()){
            total = total + a.toLowerCase();
        }
        else if (a == a.toLowerCase()){
            total = total+a.toUpperCase();
        }
        
    }
    return total;
}

console.log(swapCase("Hello World"));

function toCelcius(array){
    return array.map(function(cel){
        return (cel-32)* 5/9
    });

}

var array = [23,32,41,50,59];
var result = toCelcius(array);

console.log(result);

function passOrFail(array){
    return array.map(function(grade){
        if (grade >= 75)
            return true;
        else
         return false;
    })
}

var array2 = [20,30,50,80,90,100];
var result2 = passOrFail(array2);

console.log(result2);

function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier','funf', 'sechs'];

   /* cardinalNumbers.forEach(function(item){
        console.log(item);
    });
    console.log(" is ");

    germanNumbers.forEach(function(item){
        console.log(item);
    });*/

    for(let i=0;i<5;i++){
        end = cardinalNumbers[i] + " is " + germanNumbers[i];
        console.log(end);
    }
   
}
console.log(germanNumbers());

function returnPrimeNumbers(){
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    numbers = numbers.filter((prime)=>{
        for(let i = 2; i <15; i++){
            if (prime == 1)
                return false;
            else if (prime == 2)
                return true;
            else if (prime% i == 0)
                return false;
            else
                return true;
        }
    });
   return console.log(numbers);
}

console.log(returnPrimeNumbers());

function loopNum(){
    for(let i=1;i<=100;i++){
        if ((i%3==0) && (i%5==0))
            console.log("CSC255 RULES I LOVE JAVASCRIPT");
        else if(i % 3 == 0)
            console.log("CSC225 RULES");
        else if(i%5 ==0)
            console.log("I LOVE JAVASCRIPT");
        else
       console.log(i);
    }
}

console.log(loopNum());