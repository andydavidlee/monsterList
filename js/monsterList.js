var listDataObject = { 
    reminderListArray : [
        {title : "Laser Moon Canon 23232", star : true, checkbox : true}, 
        {title : "Tax Fruad", star : false, checkbox : false} 
     
]
};

$(document).ready(function() {
    $('.warning').hide();
	$("#addItemForm").removeClass("has-warning");
	populateList();
});

function populateList() {
    var output = "";
	for (var i =0; i < listDataObject.reminderListArray.length; i ++){
		output +='<li class="list-group-item" id="'+ i + '">';
        if(listDataObject.reminderListArray[i].checkbox == false){
			output +='<input type="checkbox" id="checkbox">';
		}else{
			output +='<input type="checkbox" id="checkbox" checked>';
		}
		if(listDataObject.reminderListArray[i].star == false){
			output +='<i class="fa fa-star-o mx-1" aria-hidden="true"></i>';
		}else{
			output +='<i class="fa fa-star mx-1" aria-hidden="true"></i>';
		}
		output +='<button type="button" class="deleteBtn btn btn-secondary btn-sm float-xs-right">X</button>';
		output +=listDataObject.reminderListArray[i].title;
		output +='</li>';
	}
	$("#mainList").append(output);
}

function deleteFromList(itemindex) {
	listDataObject.reminderListArray.splice(itemindex,1);
	$( "#mainList" ).empty();
	populateList();
}

$(document).on( "click",'.deleteBtn', function() {
	deleteFromList($(this).parent().attr("id"));
});

$('.add').click(function() {
	var titleVal = $('#addItem').val();
    if(titleVal == ""){
	    $('.warning').show();
	    $("#addItemForm").addClass( "has-warning" );
    }else{
	    $('.warning').hide();
	    $("#addItemForm").removeClass( "has-warning" );
	    $('#addItem').val("");
	    listDataObject.reminderListArray.push({title:titleVal, star:false, checkbox:false});
		$("#mainList").empty();
		populateList();
    }
});

$(document).on( "click",'.fa-star-o', function() {
    $(this).removeClass( "fa-star-o" );
    $(this).addClass( "fa-star" );
    listDataObject.reminderListArray[$(this).parent().attr("id")].star = true;
});

$(document).on( "click",'.fa-star', function() {
    $(this).removeClass( "fa-star" );
    $(this).addClass( "fa-star-o" );
    listDataObject.reminderListArray[$(this).parent().attr("id")].star = false;
});

$(document).on( "click",'#checkbox', function() {
  if ($(this).is(':checked')) {
	listDataObject.reminderListArray[$(this).parent().attr("id")].checkbox = true;
  } else {
	listDataObject.reminderListArray[$(this).parent().attr("id")].checkbox = false;
  }
var string = JSON.stringify(listDataObject);
    console.log(string);
});	