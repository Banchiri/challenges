function netSalaryCalculator() {
    const basicSalary = parseInt(prompt("enter your basic salary"));
    const benefits = parseInt(prompt("enter your benefits"));
    let grossSalary = basicSalary + benefits;
  
    let payee = 0;
    if (grossSalary <= 24000) {
      payee = grossSalary * 0.1;
      return payee;
    } else if (grossSalary <= 32333) {
      payee = grossSalary * 0.25;
      return payee;
    } else if(grossSalary <= 500000) {
      payee = grossSalary * 0.3;
      return payee;
    }else if(grossSalary <= 800000) {
        payee = grossSalary * 0.325;
        return payee;
    }else {
        payee = grossSalary * 0.35;
        console.log(`payee:${payee}`)
    }
    console.log(`payee:${payee}`)

    // NHIF dedections
    if (grossSalary <= 5999){
        nhif = 150;
    }
    else if (grossSalary <= 7999){
         nhif = 300;
    }
    else if (grossSalary <= 11999){
         nhif = 400;
    }
    else if (grossSalary <= 14999){
         nhif = 500;
    }
    else if (grossSalary <= 19999){
         nhif = 600;
    }
    else if (grossSalary <= 24999){
         nhif = 750;
    }
    else if (grossSalary <= 29999){
         nhif = 850;
    }
    else if (grossSalary <= 34999){
         nhif = 900;
    }
    else if (grossSalary <= 39999){
         nhif = 950;
    }
    else if (grossSalary <= 44999){
         nhif = 1000;
    }
    else if (grossSalary <= 49999){
        nhif = 1100;
    }
    else if (grossSalary <= 59999){
        nhif = 1200;
    }
    else if (grossSalary <= 69999){
        nhif = 1300;
    }
    else if (grossSalary <= 79999){
        nhif = 1400;
    }
    else if (grossSalary <= 89999){
        nhif = 1500;
    }
    else if (grossSalary <= 99999){
        nhif = 1600;
    }
    else{
        nhif = 1700;
    }
    console.log(`nhif:${nhif}`)
    // Calculate NSSF deductions
    let nssf = 0;
    if (grossSalary <= 7000){
        nssf = grossSalary * 0.06;
    }
    else if(grossSalary <= 36000){
        nssf = (7000 * 0.06) + ((grossSalary - 7000) * 0.06);
    }
    else {
        nssf = (7000 * 0.06) + (12000 * 0.06);

    }
    console.log(`nssf:${nssf}`)

    }
    
    // Calculate Net Salary
    //let netSalary = grossSalary - (payee + nhif + nssf);
    // return {
    //   grossSalary,
    //   payee,
    //   nhif,
    //   nssf,
    //   netSalary
    // };
  
  
  