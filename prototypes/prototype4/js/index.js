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

    console.log("sign in");
    
    // SIGN UP
    $('div#signUp').click(
        function(){
            $('section#welcomeInfo').slideUp();
            $(this).animate({
                marginTop: 30,
                width: 400,
                height: 200,
                borderRadius: 0,
                paddingTop: 45,
                fontSize: 25
            })
            .append('<form action="home.html">User Name<input type="text"><br>Password<input type="password"><br><input type="submit" value="Get Started" name="start"></form>')
            .addClass('signUpBox').unbind('click');
        });
    
}); //end ready