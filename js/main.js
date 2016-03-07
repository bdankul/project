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
    
    $('menu#main, menu#widgetManager').hide();
    
    $('footer div.menuIcon:first').click(
        function(){
            $('menu#main').show()
            $('menu#widgetManager').hide();
        });
    $('footer div.menuIcon:last').click(
        function(){
            $('menu#widgetManager').show()
            $('menu#main').hide();
        });
    
    // .MENUS mouseleave = hide menu
    $('menu.menus').mouseleave(
        function(){
            $(this).hide('700');
        });

    console.log("menus reading");
    
    // STICKY NOTE
    $('article.stickyNote').draggable({
        cursor : 'pointer',
        handle : 'menu',
        containment : 'parent'
    }).resizable({
        autoHide : true,
        minWidth : 250
    });
    
    $('article.stickyNote menu div.closeButton').click(
        function(){
            $('article.stickyNote').hide()
            return false;
        });
    
    console.log("sticky note reading");
    
    // TODO LIST
    $('article.todo').draggable({
        handle : 'h4',
        containment : 'parent'
    });
    $('article.todo tr').sortable({
        axis : 'y',
        containment: 'parent'
    });
    
    // WIDGET MENU CLICK SHOWS
    
    $('li#stickyNote').click(
        function(){
            $('article.stickyNote').show()
            return false;
        });
}); //end ready