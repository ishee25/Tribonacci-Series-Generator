var number;
n1 = 0;
n2 = 0;
n3 = 0;
n4 = 0;

function tell(){  
    var answer = [];
    number = Number(document.getElementById("number_input").value); 

    n1 = 1;
    n2 = 1;
    n3 = 1;
    n4 = 0;

    for (var i = 0; i < number; i++){
        answer += n4 + " | | ";
    
        n1 = n2;
        n2 = n3;
        n3 = n4
        n4 = n1 + n2 + n3;

        document.getElementById("Fibonacci").innerHTML = answer;
    }
}