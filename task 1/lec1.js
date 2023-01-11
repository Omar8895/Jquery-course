$(document).ready(function(){
    
    let textBox = $("input");

    let buttonAdd =$(".add");

    $(".add").mouseover(function(){

        textBox.show(2000);
    })

    $("button").click(function(){

    if(textBox.val()=="")

    {
         alert("Cant be Empty!");
      
         return;
    }

    else
    {
        
        $('<li>'+ textBox.val()+'<button class="done">Done</button>'+'<button class="delete">Delete</button>'+'</li>').appendTo("ul");
        
        $("li").show();

        $(textBox.val(''));

    }  

        });


        $('ul').on('click','.done',function(){

            $(this).parent("li").css("background-color","rgb(179, 176, 176)")

        });

        $('ul').on('click','.delete',function(){

            $(this).parent("li").hide(2000);
           
            
        });

        


  

})