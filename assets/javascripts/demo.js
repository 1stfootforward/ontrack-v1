
var jobs = [{id:"22-1-1", name:"Job Name", number:"2210"}]

var contractors = [
            {id:"c1", name:"Con One Name",content:"Description of task", start:"02-09-2016", end:"02-11-2016"},
            {id:"c2", name:"Con Two Name",content:"Description of task", start:"02-09-2016", end:"02-11-2016"},
            {id:"c3", name:"Con Three Name",content:"Description of task", start:"02-09-2016", end:"02-11-2016"},
            {id:"c4", name:"Con Four Name",content:"Description of task", start:"02-09-2016", end:"02-11-2016"},
            {id:"c5", name:"Con Five Name",content:"Description of task", start:"02-09-2016", end:"02-11-2016"}];

var tasks = [
            {id:"t1", contractorId:"c1", name:"Task One Name",content:"Description of task", start:"02-09-2016", end:"02-11-2016"},
            {id:"t2", contractorId:"c1", name:"Task Two Name",content:"Description of task", start:"02-09-2016", end:"02-11-2016"},
            {id:"t3", contractorId:"c2", name:"Task Three Name",content:"Description of task", start:"02-09-2016", end:"02-11-2016"},
            {id:"t4", contractorId:"c2", name:"Task Four Name",content:"Description of task", start:"02-09-2016", end:"02-11-2016"},
            {id:"t5", contractorId:"c4", name:"Task Five Name",content:"Description of task", start:"02-09-2016", end:"02-11-2016"}];

var taskDetails = [
            {id:"d1", taskId:"t2", name:"detail 1"},
            {id:"d2", taskId:"t2", name:"detail 2"}];

function jobFill() {
  $(".item-name").html( "" + jobs[0].number + " : <b>" + jobs[0].name + "</b>" );

  for (var i = contractors.length - 1; i >= 0; i--) {
    $( ".contractor-list" ).append( '<div id="'+ contractors[i].id +'" class="level-1 contractor-item grid-100 mobile-grid-100"> <div onclick="expandLevel('+ "'" + contractors[i].id + "'" +',1)" class="task-expand grid-5 mobile-grid-5" >e</div> <div class="task-name grid-80 mobile-grid-65" >'+ contractors[i].name +'</div> <div class="task-check grid-5 mobile-grid-5" >t</div> <div onclick="fireContractor('+ "'" + contractors[i].id + "'" +')" class="task-edit grid-5 mobile-grid-5" >e</div> <div class="task-add grid-5 mobile-grid-5" >+</div> </div>' );
  };
  for (var i = tasks.length - 1; i >= 0; i--) {
    $( "#"+tasks[i].contractorId ).append( '<div id="'+ tasks[i].id +'" class="level-2 task-item grid-100"> <div onclick="expandLevel('+ "'" + tasks[i].id + "'" +',2)" class="task-expand grid-5 mobile-grid-5" >e</div> <div class="task-name grid-85 mobile-grid-75" >'+ tasks[i].name +'</div> <div class="task-check grid-5 mobile-grid-5" >t</div> <div class="task-add grid-5 mobile-grid-5" >+</div> </div>' );
  };
  for (var i = taskDetails.length - 1; i >= 0; i--) {
    $( "#"+taskDetails[i].taskId ).append( '<div class="detail-item grid-100"> <div class="task-expand grid-5 mobile-grid-5" >e</div> <div class="task-name grid-85 mobile-grid-75" >'+ taskDetails[i].name +'</div> <div class="task-check grid-5 mobile-grid-5" >t</div> <div class="task-add grid-5 mobile-grid-5" >+</div> </div>' );
  };

  
}

function expandLevel(id, level) {
    $( "#"+id ).toggleClass("level-" + level);
}

function fireContractor(id) {
    idInt = parseInt(id.substring(1));


    $(".item-name").html( "" + contractors[idInt-1].name );


    $( ".contractor-list" ).html(" ");


    for (var i = tasks.length - 1; i >= 0; i--) {
      if(tasks[i].contractorId == (id) ) {
        $( "#tasks").append( '<div id="'+ tasks[i].id +'" class="level-2 task-item grid-100"> <div onclick="expandLevel('+ "'" + tasks[i].id + "'" +',2)" class="task-expand grid-5 mobile-grid-5" >e</div> <div class="task-name grid-85 mobile-grid-75" >'+ tasks[i].name +'</div> <div class="task-check grid-5 mobile-grid-5" >t</div> <div class="task-add grid-5 mobile-grid-5" >+</div> </div>' );
      }
    };

    for (var i = taskDetails.length - 1; i >= 0; i--) {
      $( "#"+taskDetails[i].taskId ).append( '<div class="detail-item grid-100"> <div class="task-expand grid-5 mobile-grid-5" >e</div> <div class="task-name grid-85 mobile-grid-75" >'+ taskDetails[i].name +'</div> <div class="task-check grid-5 mobile-grid-5" >t</div> <div class="task-add grid-5 mobile-grid-5" >+</div> </div>' );
    };

    screenPicker("contractor");
}

$(document).ready(function() {

    var width = $( document ).width() 
    if( width < 900 ) {
      $("#comp").addClass('hide');
    }
  });


function fireTask(id) {

    idInt = parseInt(id.substring(1));

    $(".item-name").html( "" + tasks[idInt-1].name );



    for (var i = contractors.length - 1; i >= 0; i--) {
      $( ".contractor-list" ).append( '<div id="'+ contractors[i].id +'" class="level-1 contractor-item grid-100 mobile-grid-100"> <div onclick="expandLevel('+ "'" + contractors[i].id + "'" +',1)" class="task-expand grid-5 mobile-grid-5" >e</div> <div class="task-name grid-80 mobile-grid-65" >'+ contractors[i].name +'</div> <div class="task-check grid-5 mobile-grid-5" >t</div> <div onclick="fireContractor('+ "'" + contractors[i].id + "'" +')" class="task-edit grid-5 mobile-grid-5" >e</div> <div class="task-add grid-5 mobile-grid-5" >+</div> </div>' );
    };

    for (var i = tasks.length - 1; i >= 0; i--) {
      
      if(tasks[i].contractorId == (id) ) {
        $( ".task-list").append( '<div id="'+ tasks[i].id +'" class="level-2 task-item grid-100"> <div onclick="expandLevel('+ "'" + tasks[i].id + "'" +',2)" class="task-expand grid-5 mobile-grid-5" >e</div> <div class="task-name grid-85 mobile-grid-75" >'+ tasks[i].name +'</div> <div class="task-check grid-5 mobile-grid-5" >t</div> <div class="task-add grid-5 mobile-grid-5" >+</div> </div>' );
      }
    };

    screenPicker("contractor");
}





function screenPicker(swap) {
    hideAll();
    $( "#"+swap ).removeClass("hide");
}

function hideAll() {
     $( ".screen" ).addClass("hide");
}

function init() {
    jobFill();
    screenPicker("job");
}

init();




function contractorAdder() {

}

function taskAdder(taskId, taskName) {
  $( "#"+taskId ).append( '<div class="detail-item grid-100"> <div class="task-expand grid-5 mobile-grid-5" >e</div> <div class="task-name grid-85 mobile-grid-75" >'+ taskName +'</div> <div class="task-check grid-5 mobile-grid-5" >t</div> <div class="task-add grid-5 mobile-grid-5" >+</div> </div>' );
   
  
}

function detailAdder() {
  
}




taskGetter();

function taskGetter() {

   var uri = 'http://localhost:63323/api/tasks/TaskByJobID/B3AED6C4-212A-4F81-B646-4F2939B965B3';
    $(document)
        .ready(function() {
            //Send an AJAX request
            $.getJSON(uri)
                .done(function(data) {
                    //On success, 'data' contains a list of products.
                    $.each(data,
                        function(key, item) {
                            //Add a list item for the product.
                            $('<li>', { text: formatItem(item) }).appendTo($('body'));
                        });
                });
        });
    function formatItem(item) {
        return item.name;
    }
    

}


function expand(id) {
  $('#'+id ).toggleClass('hide');
}

function pageTurn(active) {
  $('#p1' ).addClass('hide');
  $('#p2' ).addClass('hide');
  $('#p3' ).addClass('hide');

  $('#link1' ).removeClass('hide');
  $('#link2' ).removeClass('hide');
  $('#link3' ).removeClass('hide');

  $('#'+active ).removeClass('hide');
}

function notification() {
  $('#main' ).toggleClass('hide');
  $('#notification' ).toggleClass('hide');
}