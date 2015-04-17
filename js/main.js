
// create variable
var l3ds = {
  init: function(){
    $(document).on('submit', '#signin', function(e){
      e.preventDefault();
      var $form = $(this),
        account = $form.find('input[name="account"]').val(),
        pass = $form.find('input[name="password"]').val();
        console.log(account, pass);

        //return false;
        l3ds.login(account, pass);


    });

  if($('#ip').length) {
    l3ds.loadIp();
  }

  },

  login: function(account, pass){

    $.post('https://life3dstudios.com/connect/ajax.php', {'action':'signin', 'account':account, 'password':pass}, function(r){

      console.log(r);
      if(r.content){
        window.location.href = 'find_user_ip.html';
      }
      return false;

    });
  },

  loadIp:   function(){
    $.post('https://life3dstudios.com/connect/ip.php',{}, function(r){
     $('#ip').text(r);
    });
  }
};

$(function(){
  l3ds.init();
});
/**
 * Created by sam.stanton on 4/17/2015.
 */

