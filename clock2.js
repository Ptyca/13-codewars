
//Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.

    function past(h, m, s){
    let suma = 0;
    const hinS = h*60*60*1000;
    const minS = m*60*1000;
    const sinS = s*1000;
    suma = hinS+minS+sinS;
        return suma;
}

      console.log(past(0,1,1),61000);
      console.log(past(1,1,1),3661000);
      console.log(past(0,0,0),0);
      console.log(past(1,0,1),3601000);
      console.log(past(1,0,0),3600000);