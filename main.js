//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function(){
   
    console.log("js ready");
    
    // Hide main menu at start
    $('menu#main').hide();
     
    // Aside/Main Menu relationship
    $('aside#mainMenuShow').mouseover(
        function(){
            $('menu#main').show();
        });
    $('menu#main').mouseout(
        function(){
            $('menu#main').hide();
        });

    console.log("mouseover working");
    
}); //end ready