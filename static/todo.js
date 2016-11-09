$(document).ready(function(){

  function updateList(){
    $.get('/tasks', function(stuff){
      stuff.forEach(function(stuffs){
        if (stuffs.done === true){
          $('#task-list').append('<li + id = "'+ stuffs.id + '"+ class = "done" >' + stuffs.description  +'<input type="checkbox" class="check_box">' + '</li>');
        }
        else{
       $('#task-list').append('<li + id = "'+ stuffs.id + '">' + stuffs.description  +'<input type="checkbox" class="check_box">' + '</li>');
     }
     });
    });
  }
  updateList();

  $('#form').submit(function(event){
    event.preventDefault();
    $.post('/add_task', $(this).serialize(), function(data){
      $('#task-list').empty();
      updateList();
    });

  });

  $('#task-list').on('click', 'input', function(){
    if($(this).prop('checked')){
      var li_id = $(this).closest('li').attr('id');
      console.log(li_id);
      $.post('/mark_task', {"id" : li_id, "done": "True"}, function(){
        console.log("Checked that thing off");
      });
    }
    $('#task-list').empty();
    updateList();
  });

  // $('#remove-completed').click(function(){
  //   $.get('/tasks', function(stuff){
  //     stuff.forEach(function(stuffs){
  //       if (stuffs.done === true){
  //         console.log("Check for removal: " + stuffs.id);
  //         $.post('/remove_completed', {"id" : stuffs.id}, function(){
  //           console.log("Let's give the server their ID: " + stuffs.id);
  //           $('#task-list').empty();
  //           updateList();
  //         });
  //
  //     }
  //
  //    });
  //   });
  //
  // });
  $('#remove-completed').click(function(){
    $.post('/difficult_remove', function(){
      $('#task-list').empty();
      updateList();
      console.log("she's dead jim");
    });

  });

});
