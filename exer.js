﻿function run() {

    //get the inputed base and exponent
    let inputBase = document.getElementById("input_base").value;
    let inputExponent = document.getElementById("input_exponent").value;
  

    //solution
    let result = inputBase ** inputExponent;
    
    // for (i = 1; i<=inputExponent; i++)
    // {
    //     //shorten for result = inputBase * result
    //     result *= inputBase;
    // }
    document.getElementById("output").innerHTML = result;

}