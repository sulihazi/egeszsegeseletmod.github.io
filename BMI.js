function BMIszamlalas(){
    var kg = document.getElementById("KG").value;
    var cm = document.getElementById("CM").value;
    var m = cm / 100; //centiméter -> méter
    //Dániel backend isten!
    var bmi =  kg / (m * m); //képlettel való kiszámolás
    if (bmi <= 16){
        return document.getElementById("ki").innerHTML = ["Sűlyos soványság!<br> Az ön BMI értéke: ", bmi.fontcolor("red").toFixed(2)];
    }
    else if (bmi > 16 && bmi < 16.99){
        return document.getElementById("ki").innerHTML = ["Mérsékelt soványság!<br> Az ön BMI értéke: ", bmi.toFixed(2)];
    }
    else if (bmi < 18.49 && bmi >= 17){
        return document.getElementById("ki").innerHTML = ["Enyhe soványság!<br> Az ön BMI értéke: ", bmi.toFixed(2)];
    }
    else if (bmi < 24.99 && bmi >= 18.50){
        return document.getElementById("ki").innerHTML = ["Normális testsúly!<br> Az ön BMI értéke: ", bmi.toFixed(2)];
    }
    else if (bmi < 29.99 && bmi >= 25){
        return document.getElementById("ki").innerHTML = ["Túlsűlyos!<br> Az ön BMI értéke: ", bmi.toFixed(2)];
    }
    else if (bmi < 34.99 && bmi >= 30){
        return document.getElementById("ki").innerHTML = ["I. Fokú elhízás!<br> Az ön BMI értéke: ", bmi.toFixed(2)];
    }
    else if (bmi < 39.99 && bmi >= 35){
        return document.getElementById("ki").innerHTML = ["II. Fokú elhízás!<br> Az ön BMI értéke: ", bmi.toFixed(2)];
    }
    else if (bmi >= 40){
        return document.getElementById("ki").innerHTML = ["III. Fokú (súlyos) elhízás!<br> Az ön BMI értéke: ", bmi.toFixed(2)];
    }
}