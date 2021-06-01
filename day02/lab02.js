//rest operator
function add(... numbers) {
    let sum = 0
    for(let i=0; i < numbers.length; i++) {
        if(typeof(numbers[i]) === "number")
            sum += numbers[i];
    }
    //console.log("Sum: " + sum);
    console.log(`Sum:  ${sum}`); //String interpolation or template strings
}

function addOldStyle() {
    let sum = 0
    for(let i=0; i < arguments.length; i++) {
        if(typeof(arguments[i]) === "number")
            sum += arguments[i];
    }
    //console.log("Sum: " + sum);
    console.log(`Sum:  ${sum}`);

}
function greatest(... numbers) {
    let max = numbers.length > 0 ? numbers[0] : -1;
    for(let i=1; i < numbers.length; i++) {
        if(typeof(numbers[i]) === "number") {
            if(max < numbers[i]) {
                max = numbers[i];
            }
        }
    }
    console.log(`Max: ${max}`);
}


add(1,5,34,324,324,235,2353);
add(21,65);
add(1,55,83);

greatest(1,5,34,324,324,235,2353);
greatest(21,65);
greatest(1,55,83,9,667);