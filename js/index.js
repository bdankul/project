//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function(){
   
    console.log("js ready");
    
    // HIDE BETA MESSAGE AFTER OK
    $('section#beta div#betaOK').click(
        function(){
            $('section#beta').hide();
            return false;
        });
    
    
    // PUT section#beta into variable to trigger 
    // taskHeader animation
    // CANT GET TO WORK!!!!****
    
    //var betaMessage = document.getElementById("beta")
    
    //if (betaMessage.is(:hidden)) {
    //    $('img#taskHeader').fadeIn();
    //}
    
    
    // Initial SIGN IN HIDE
    // SHOW WHEN CLICK userPic
    $('aside#signInBox').hide();
    
    $('footer div#userPic').click(
        function(){
            $('aside#signInBox').show();
        });
    
    $('aside#signInBox').mouseleave(
        function(){
            $('aside#signInBox').hide('700');
        });

    
    console.log("js 2");
    
}); //end ready