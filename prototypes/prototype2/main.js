//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function(){
   
    console.log("js ready");
    
    // MENU HOVER DIV COLOR CHANGE
    $('footer div.menuIcon, footer div#userPic').hover(
        function(){
            $(this).css('borderColor','#ff530d');
        },
        function(){
            $(this).css('borderColor','#3f5765');
        });
    
    // MAIN MENU
    
    $('menu#main').hide();
    
    $('footer div.menuIcon:first').click(
        function(){
            $('menu#main').show();
        });
    
    // HELP mouse out = hide menu

    
    console.log("js 2");
    
}); //end ready