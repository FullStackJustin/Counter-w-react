import React from "react";
// import { useState, useEffect } from "react";
function Timer(){
  var sec = 0;

  function pad(val) {
      return val > 9 ? val : "0" + val;
  }
  var timer = setInterval(function () {
      document.getElementById("spot1Seconds").innerHTML = pad(++sec % 60);
      document.getElementById("spot1Minutes").innerHTML = pad(parseInt(sec / 60, 10));
  }, 1000);
  
  setTimeout(function () {
      clearInterval(timer);
  }, 11000);
    return(
      <div className="bigCounter" style={{alignItems:'center',borderRadius:'15px', marginRight:'40rem',marginLeft:'30rem',backgroundColor:'black', color:'white', display:'flex', flexDirection:'row', height:'5rem'}}>
        <span id="clockIcon" style={{display:'flex',marginRight:'5px', marginLeft:'5px',justifyContent:'center', alignItems:'center',width:'4em',border:'.5px solid lightgrey', borderRadius:'5px'}}><i class="fa-solid fa-clock"></i></span>
        <span id="spot1Hours" style={{display:'flex',marginRight:'5px', marginLeft:'5px',justifyContent:'center', alignItems:'center',width:'4em',border:'.5px solid lightgrey', borderRadius:'5px'}}>00</span>:
        <span id="spot1Minutes" style={{display:'flex',marginRight:'5px', marginLeft:'5px',justifyContent:'center', alignItems:'center',width:'4em',border:'.5px solid lightgrey', borderRadius:'5px'}}>00</span>:
        <span id="spot1Seconds" style={{display:'flex',marginRight:'5px', marginLeft:'5px',justifyContent:'center', alignItems:'center',width:'4em',border:'.5px solid lightgrey', borderRadius:'5px'}}>00</span>
      </div>
    )
  }

export default Timer;