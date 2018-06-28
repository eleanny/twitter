$(document).ready(function(){
     $("#uploadedfile").change(function(e){
     	        console.log('hola');
     	         var reader = new FileReader();
                 var file = $(e.target).get(0).files[0];
                 reader.readAsDataURL(file);
                 reader.onload = function(event){
                     $('#imagen__form').attr('src',event.target.result); 
                 	 };
               

             });

	$(".twitter__formulario--inner").submit(function(e){
	        e.preventDefault();
            	
        	var imagen =  $('#imagen__form').attr('src');
	    	var texto = $('.texto').val();
			var card = `<div class="tweet__new card w-85 mb-2">
	                    <div class="card-body">
	                      <img src="${imagen}" class="twitter__profile--imagen">
	                      <p class="tweet__text card-text pl-5 pt-3 pb-2">${texto}</p>
	                      <div class="likes">
	                	    <i class="likes__icono fas fa-heart fa-2x pr-2 pt-1"></i>
	                        <p class="tweet__contador">0</p>
	                      </div>
	                      <button type="button" class="tweet__remover btn btn-primary">Eliminar</button>
	                   </div>
	                 </div>`;


	    	$('.tweet').prepend(card);
	    	$(this).get(0).reset();
            $("#imagen__form").attr('src','assets/images/Image-default.png');
       
	    
	});
	$(".tweet").on('click','.likes__icono', function(event){
	    event.preventDefault();
	    console.log('Like!!');
	    if(Number($(event.currentTarget).siblings("p").html()==0)){
	       $(event.currentTarget).toggleClass("like__icono--click");
	    }
	         
	    $(event.currentTarget).siblings("p").html(Number($(event.currentTarget).siblings("p").html())+1);
	        
	});
	$(".tweet").on('click','.tweet__remover',function(event){
       $(event.target).parents(".card").remove();
	});
});
///C:/Users/Lenovo/Desktop/Twitter/assets/images/C:/fakepath/she.jpg