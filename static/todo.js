$('#form').submit(function(event){
  event.preventDefault();
  function add_a_task(callback){
  $.post('/add_task', $('#form').serialize(), callback);
}
});
