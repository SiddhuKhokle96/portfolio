<script>
    $(window).scroll(function(){
      if ($(this).scrollTop() > 200) {
          $('#top').addClass('fixed');
      } else {
          $('#top').removeClass('fixed');
      }
  });
</script>