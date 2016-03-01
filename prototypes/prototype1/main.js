//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function(){
   
    console.log("js ready");
    
    // draggable elements
    $('figure, form').draggable({
        containment: 'window'
    });
    
    // sortable elements
    $('form#todo').sortable({
        containment: 'parent',
        axis: 'y',
        cursor: 'move'
    });
    
    // mouseover shows customIcon
    $('form h2').mouseover(
        function(){
            $('form img').css('visibility','visible');
        });
    
    // show main menu event upon click icon
    $('footer div').click(
        function(){
            $('menu#mainMenu').css('visibility','visible');
        });
    // show widget manager when click mm option
    $('menu#mainMenu li#mmWidget').click(
        function(){
         $('menu#widgetManager').css('visibility','visible');
        });
    // widget menu clock show
    $('menu#widgetManager li#wmClock').click(
        function(){
            $('figure.clock').css('visibility','visible');
        });
    
}) //end ready