// navbar functionality 
const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");

  toggle.onclick = function () {
    nav.classList.toggle("active");
  };




  


   const targetDate = new Date('March 19, 2026 00:00:00');
    const targetDateInMilliseconds = targetDate.getTime();
    let show = document.getElementById('heading');
    let d = document.getElementById('d');
  let h = document.getElementById('h');
  let m = document.getElementById('m');
  let s = document.getElementById('s')

    let update;
    // console.log(targetDateInMilliseconds)
    function updateTimer(){
        const now = new Date().getTime();
        // console.log(now)
        const difference = targetDateInMilliseconds - now;
        // console.log(difference)
        if(difference <=0){
            // console.log('time is up')
            d.innerHTML = '00'
            h.innerHTML = '00';
            m.innerHTML = '00';
            s.innerHTML = '00'
            clearInterval(update)
            return
        }
         let seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );
        // console.log('seconds ',seconds);
        let minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
        // console.log('minutes ',minutes);
        let hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
        // console.log('hours ',hours);
         let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        // console.log('days ',days)
        // show.innerHTML = `${days} days : ${hours} hours: ${minutes} minutes: ${seconds} seconds`
        d.innerHTML = `${days}`;
        h.innerHTML = `${hours}`;
        m.innerHTML = `${minutes}`;
        s.innerHTML = `${seconds}`
    }
    updateTimer()
     update = setInterval((updateTimer),1000);
 

