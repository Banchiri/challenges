function speedDetector(){
    const speed = prompt("enter the speed of the car");
    if(speed <= 70){
        console.log("OK");
    }
      else {
    const demeritPoints = Math.floor((speed - 70) / 5);
      if(demeritPoints > 12){
        console.log("License suspended");
      }
      else{
        console.log(`points: ${demeritPoints}`)
      }
    }
}
speedDetector();