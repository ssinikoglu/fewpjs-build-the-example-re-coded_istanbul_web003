// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// let modal =document.getElementById('modal');
// modal.classList.add("hidden");
let likes = document.querySelectorAll(".like-glyph");
  for (let like in likes){
      like.addEventListener("click", (e)=>{  
      mimicServerCall()
      .then(()=>{
            if(likes.innerHTML===EMPTY_HEART){
                likes.innerHTML=FULL_HEART;
                likes.classList.add("activated-heart");
            } else{
              likes.innerHTML=EMPTY_HEART;
              likes.classList.remove("activated-heart");
            }
})
        .catch(function(error){
          const modal =document.getElementById('modal');
          modal.classList.remove("hidden");
          document.getElementById("modal-message").innerHTML = error;
          setTimeout(function(){modal.classList.add("hidden")},5000)
});
      }
       ) }
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  }
)}