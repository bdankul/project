//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function(){
   
    console.log("js ready");
    
    // PROFILE MENU
    $('menu#profile').hide();
    
    $('footer div#userPic').click(
        function(){
            $('menu#profile').show();
        });
    
    $('menu#profile').mouseleave(
        function(){
            $('menu#profile').hide('700');
        });

    
    // MAIN MENU
    
    $('menu#main, menu#help').hide();
    
    $('footer div.menuIcon:first').click(
        function(){
            $('menu#main').show();
        });
    $('footer div.menuIcon:last').click(
        function(){
            $('menu#help').show();
        });
    
    // .MENUS mouseleave = hide menu
    $('menu.menus').mouseleave(
        function(){
            $(this).hide('700');
        });

    console.log("js 2");
    
    // WIDGETS
    
    $('article#stickyNote menu div.closeButton').click(
        function(){
            $('section#widgets article#stickNote').hide();
        });
    console.log("sticky note read");
}); //end ready