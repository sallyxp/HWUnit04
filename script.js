
var timerEl = document.getElementById("countdown");
var tag = document.createElement("h1");
  tag.textContent = "Coding Quiz Challenge ";
  document.body.appendChild(tag);
  var tag = document.createElement("p");
  var secondTag = document.createElement("p");
  secondTag.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 10 seconds.";
  document.body.appendChild(secondTag);
 // <button type="button" onclick="alert('Hello world!')">Click Me!</button>
  var thirdTag = document.createElement("button");
 
  thirdTag.textContent = "Start Quiz";
  document.body.appendChild(thirdTag)
   thirdTag.addEventListener("click", function() {
    //need to start the quiz from here.
    var timerEl = document.createElement("h2");
    timerEl.textContent = 60;
    document.body.appendChild(timerEl);
   
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
      var timeLeft = 60;
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;


      if (timeLeft = 0) {
        timerEl.textContent = "";
     //   //speedRead();
        clearInterval(timeInterval);
      }
  
    }, 1000);

    timer = setInterval(makeNew, 50);
  });
    
  var timer,
  counter = 0;

function makeNew() {
  document.body.appendChild( document.createElement('div') );
  counter--;
  //document.getElementById("countdown").innerHTML += 'box('+counter+'),';
  document.getElementById("countdown").innerHTML = counter ;
  if (counter = 0) {
    alert("in here");
  }

}

function startInterval() {
  timer = setInterval(makeNew, 50);

}

function stoppInterval() {
  clearInterval(timer);
}    
    
makeNew();
    





  
