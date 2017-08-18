var stompClient = null;
var user = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#charla").show();
    }
    else {
        $("#charla").hide();
    }
    $("#left").html("");
    $("#right").html("");
}

function connect() {
    var socket = new SockJS('/chativo/ivan-broker');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/message', function (message) {
        	refresh(JSON.parse(message.body));
        });
        
        $.ajax({
            url: "/chativo/currentuser",  
            success: function(data) {
            	stompClient.subscribe('/topic/'+data, function (message) {
	            	refresh(JSON.parse(message.body));
	            });
            }
         });
        
        $.ajax({
            url: "/chativo/users",  
            success: function(data) {
               $.each(data , function(index,item) {
            	   $("#users").append("<tr><td><span id=" + item.username + " class='rounded active' onclick='selectUser(this);'>" + item.username + "</span></td></tr>");  	
               });
            }
         });
        
        $("#conversations").append("<tr><td><span id='conversations-principal' class='rounded noactive animated flash' onclick='selectConversation(this);'>Principal</span></td></tr>");
    });
}

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendMessage() {
    stompClient.send("/app/sendMessage", {}, JSON.stringify({'message': $("#message").val()}));    
}

function sendUser(event) {
    stompClient.send("/app/sendMessage/"+event.id, {}, JSON.stringify({'message': $("#message").val()}));    
}

function selectUser(event){
	$("#"+event.id).removeAttr("onclick");
	$("#"+event.id).removeClass('active').addClass('noactive'); 
	$("#conversations").find('span.rounded').removeClass('noactive').addClass('active'); 
	$("#conversations").append("<tr><td><span id='conversations-"+ event.id + "' class='conversation rounded noactive' onclick='selectConversation(this)'>" + event.id + "</span><button type='button' class='btn btn-default close cerrar' onclick='closeConversation(this);'>X</button></td></tr>");
	$("#charla table tbody:visible").css("display","none");
	$("#charla table").append("<tbody id='text-conversations-"+ event.id+"'><tr><td id='left'></td><td id='right'></td></tr></tbody>")
}

function selectConversation(event){
	var id = $(event).attr("id");
	$("#charla table tbody:visible").css("display","none");
	$("#conversations").find('span.rounded').removeClass('noactive').addClass('active'); 
	$("#"+id).addClass('noactive');
	if($("#charla table #text-" + id).length > 0){
		$("#charla table #text-" + id).css("display","");
	} else {
		$("#charla table").append("<tbody id='text-"+ id+"'><tr><td id='left'></td><td id='right'></td></tr></tbody>")
	}
}

function closeConversation(event){
	var id = $(event).prev().attr("id").split("-")[1];
	$("#conversations").find("#conversations-ivan").closest('tr').remove();
	$('#'+id).attr('onClick', 'selectUser(this)');
	$("#"+id).removeClass('noactive').addClass('active'); ; 
}

function refresh(message) {
	console.dir(message);
    $("#left").append("<tr><td><span style='font-weight:bolder;font-size:11px;'>" + message.user + ": </span>" + message.content + "</td></tr>");
    $("#charla").scrollTop($("#conversation").height());
}

$(function () {
	//Suscribimos el usuario a la cola principal
	connect();
	
	//Enviamos el formulario
    $("#formEnvio").on('submit', function (e) {
        e.preventDefault();
    });
    
    $("#formLogout").on('submit', function (e) {
    	disconnect();
    	$("formLogout").submit();
    });
    
    //Escuchamos la acción de envio del usuario
    $( "#send" ).click(function() { sendMessage(); $("#message").val(''); });
    
    //Si pulsa enter  el foco está en 
    $(document).keypress(function(e) {
    	if ($("#message").is(":focus")) {
            if(e.which == 13 && $("#message").val() != '') {
            	sendMessage(); 
            	$("#message").val('');
            }
    	}
    });
    
    $('.noactive').hover(function() {
    	$(this).css('cursor','pointer');
    	$(this).css('background-color','#fdf9f9');
	});
    
    $('.conversation').hover(function() {
    	$('.cerrar').css("display","inline-block");
	  }, function() {
		$('.cerrar').css("display","none");
	  }
	);
});