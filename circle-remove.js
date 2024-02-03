function reMove() {
    const shows1 = document.getElementById('shows1');
    const shows2 = document.getElementById('shows2');
    const shows3 = document.getElementById('shows3');
    const shows4 = document.getElementById('shows4');
    const shows5 = document.getElementById('shows5');
    const shows6 = document.getElementById('shows6');
    const change =  document.body;
    const changes =  document.body;
    
 changes.style.backgroundColor = "rgb(228, 131, 151)";
    
    setTimeout(function() {
        shows1.style.display = 'block';
      }, 15000);
    setTimeout(function() {
        shows1.style.display = 'none';
      }, 16000);


      setTimeout(function() {
        shows2.style.display = 'block';
      }, 16000);
    setTimeout(function() {
        shows2.style.display = 'none';
      }, 17000);

      setTimeout(function() {
        shows3.style.display = 'block';
      }, 17000);
    setTimeout(function() {
        shows3.style.display = 'none';
      }, 18000);


      setTimeout(function() {
        shows4.style.display = 'block';
      }, 18000);
    setTimeout(function() {
        shows4.style.display = 'none';
      }, 19000);


      setTimeout(function() {
        shows5.style.display = 'block';
      }, 19000);
    setTimeout(function() {
        shows5.style.display = 'none';
      }, 20000);


      setTimeout(function() {
        shows6.style.display = 'block';
      }, 20000);
      
      setTimeout(function() {
        shows6.style.display = 'none';
      }, 21000);

      
      setTimeout(function(){
        change.style.backgroundColor = "black";
        }, 21000);

        
     setTimeout(function() {
            window.location.href = "main-msg.html";
        }, 22000); 



   


      const hearts = document.getElementById('heart');
      const shows = document.getElementById('show');
      const gone = document.getElementById('see');
      const msgs = document.getElementById('msg');
      const wrts = document.getElementById('wrt');
      const wrt2 = document.getElementById('wrt2');
      const wrt3 = document.getElementById('wrt3');
      
  
  
      gone.style.display = 'none';
      hearts.style.display = 'none';
      shows.style.display = 'none';
      msgs.style.display = 'none';
      wrts.style.display = 'block';
  
      setTimeout(function(){
         wrts.style.display = 'none';
      },5000);
  
      setTimeout(function(){
         wrt2.style.display = 'block';
           },5000);
  
      setTimeout(function(){
          wrt2.style.display = 'none';
           },10000);
  
           setTimeout(function(){
              wrt3.style.display = 'block';
               },10000);
               setTimeout(function(){
                wrt3.style.display = 'none';
                 },15000);

}
