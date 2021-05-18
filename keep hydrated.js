
function litres(time) {
    let driveTime = '';
    const waterQuantity = 0.5; 
    if (waterQuantity >= 0.5) {
        driveTime = Math.floor(time * waterQuantity);
    }
    return driveTime;
  }

    console.log(litres(2), 1, 'should return 1 litre');
    console.log(litres(1.4), 0, 'should return 0 litres');
    console.log(litres(12.3), 6, 'should return 6 litres');
    console.log(litres(0.82), 0, 'should return 0 litres');
    console.log(litres(11.8), 5, 'should return 5 litres');
    console.log(litres(1787), 893, 'should return 893 litres');
    console.log(litres(0), 0, 'should return 0 litres');

    console.log(++++++++++++++++++++);
    
    function litres(time) {
        return Math.floor(time * 0.5);
      }

      function litres(time) {

        a = 0.5;
        b = time;
        c = Math.floor(a*b);
        //alert(c);
        
        return c;
        }