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
    $('article.stickyNote').hide();
    $('article.stickyNote').draggable({
        cursor : 'pointer',
        handle : 'menu',
        containment : 'parent'
    }).resizable({
        autoHide : true,
        minWidth : 250
    });
    // close button event
    $('article.stickyNote menu div.closeButton').click(
        function(){
            $('article.stickyNote').hide()
            return false;
        });
    
    console.log("sticky note reading");
    
    // TODO LIST 
    $('article.todo, article.bookmarks').draggable({
        handle : 'menu',
        containment : 'parent'
    });
    $('article.todo ul').sortable({
        axis : 'y',
        containment: 'parent'
    });
    // close button event
    $('article.todo menu div.closeButton').click(
        function(){
            $('article.todo').hide()
            return false;
        });
    // add new task 
    // click plus to show text input
    $('#task, #addButton').css('visibility','hidden');
    $('article.todo ul.addTask i').click(
        function(){
            $('#task, #addButton').css('visibility','visible');
        });
    // add button prepend
    document.taskForm.onsubmit = newTask;
    
    function newTask() {
        var userTask = document.taskForm.task.value;
        
        if(userTask === "") {
            event.preventDefault();
        } else {
            $('article.todo ul#todoList').prepend('<li><i class="fa-li fa fa-square"></i><p contenteditable="true">' + userTask + '<i class="fa fa-trash-o"></i></p></li>').bind();
            
            task.value = "";
        }
        return false;
    }
    
    // click done change li i class
    $('article.todo ul#todoList i.fa-square').click(
        function(){
            // apply css & class changes to next siblings except last
            $(this).removeClass().addClass('fa-li fa fa-check-square-o').next().css('textDecoration','line-through');
            return false;
            
        });
    
    
    // Trash Icon events
    // hover li p shows icon
    $('article.todo p i').css('visibility','hidden');
    $('article.todo p').mouseover(
        function(){
            $(this).find('i').css('visibility','visible');
        });
    $('article.todo p').mouseleave(
        function(){
            $(this).find('i').css('visibility','hidden');
        });
    // initial hide
    // click trash icon delete li
    $('article.todo p i').click(
        function(){
            $(this).parent().parent().remove();
        });
        // ??? above doesnt remove newly added li items
    
    console.log("change icon done");
    
    // WIDGET MENU CLICK SHOWS
    
    $('li#stickyNoteLink').click(
        function(){
            $('article.stickyNote').show()
            return false;
        });
    $('li#todoLink').click(
        function(){
            $('article.todo').show()
            return false;
        });
    $('li#clockLink').click(
        function(){
            $('article.clocks').toggle()
            return false;
        });
    
    // CLOCK
     function updateClock() {
		        var now = moment(),
		            second = now.seconds() * 6,
		            minute = now.minutes() * 6 + second / 60,
		            hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
		        $('#hour').css("transform", "rotate(" + hour + "deg)");
		        $('#minute').css("transform", "rotate(" + minute + "deg)");
		        $('#second').css("transform", "rotate(" + second + "deg)");
		    }
		    function timedUpdate () {
		        updateClock();
		        setTimeout(timedUpdate, 1000);
		    }
		    timedUpdate();
    
    $('article.clocks').hide()
        .draggable({
            containment : 'parent'
    });
    
    // CLNDR.JS
    $('#mini-clndr').draggable({
        handle : 'div.month',
        containment : 'window'
    });
    var currentMonth = moment().format('YYYY-MM');
var nextMonth    = moment().add('month', 1).format('YYYY-MM');
var events = [
  { date: currentMonth + '-' + '10', title: 'Persian Kitten Auction', location: 'Center for Beautiful Cats' },
  { date: currentMonth + '-' + '19', title: 'Cat Frisbee', location: 'Jefferson Park' },
  { date: currentMonth + '-' + '23', title: 'Kitten Demonstration', location: 'Center for Beautiful Cats' },
  { date: nextMonth + '-' + '07',    title: 'Small Cat Photo Session', location: 'Center for Cat Photography' }
];

$('#mini-clndr').clndr({
  template: $('#calendar-template').html(),
  events: events,
  clickEvents: {
    click: function(target) {
      if(target.events.length) {
        var daysContainer = $('#mini-clndr').find('.days-container');
        daysContainer.toggleClass('show-events', true);
        $('#mini-clndr').find('.x-button').click( function() {
          daysContainer.toggleClass('show-events', false);
        });
      }
    }
  },
  adjacentDaysChangeMonth: true
});
    
}); //end ready