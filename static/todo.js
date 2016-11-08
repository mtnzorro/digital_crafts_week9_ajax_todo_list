$(document).ready(function(){
  function updateList(callback){
    $.get('/tasks', callback);
  }

  updateList(function(stuff){
    console.log(stuff);
    stuff.forEach(function(stuffs){
     $('#task-list').append('<li>' + stuffs.description  + '</li>');
   });
  });

  $('#form').submit(function(event){
    event.preventDefault();
    $.post('/add_task', $(this).serialize(), function(data){
      $('#task-list').empty();
    });

  updateList(function(stuff){
    console.log(stuff);
    stuff.forEach(function(stuffs){
     $('#task-list').append('<li + id = "'+ stuffs.id + '">' + stuffs.description  + '</li>');
   });
  });

  });

});
