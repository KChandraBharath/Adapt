<script type="text/javascript">

   heads = 0;
   tails = 0;
  function flip(num) {
    for (var i = 0; i < num; i++) {

        x = (Math.floor(Math.random() * 2) == 0);
        if(x){
          heads++;
        }else{
          tails++;
        }
    }
    console.log(heads/num);
  }
flip(10);
flip(100);

</script>