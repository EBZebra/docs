
var lookups = {
	engines: {
		cluttered: [],
		unique: []
	},
	os: {
		cluttered: [],
		unique: []
	},
	devices: {
		cluttered: [],
		unique: []
	}
};




function pushArray(obj,ar)
{
	for (var i = 0; i < ar.length; i++) {
		obj.push(ar[i]);
	};
}

function arrayContains(match, search){
	// console.log("checking match")
	// console.log(match);
	// console.log(search);
	var found=false;
	if(match != null)
	{
		for (var i = 0; i < match.length; i++) {
			if($.inArray(match[i],search)>-1){
				found=true;
			}
		};
	}
	// console.log(found)
	return found;
}

function sameArray(arr1,arr2){
	if($(arr1).not(arr2).length == 0 && $(arr2).not(arr1).length == 0)
		return true
	else
		return false
}

function getFilteredMatrix(){
	var newMatrix = [];
	// console.log($('#devices').val())
	if($('#engines').val()==null && $('#os').val()==null)
	{
		newMatrix = matrix;
	}
		else
		{
		for (var i = 0; i < matrix.length; i++) {
			// console.log(matrix[i].api);
			var found = {
				os: false,
				engines: false
			};
			
			if(arrayContains($('#engines').val(),matrix[i].engines.split(','))){
				found.engines=true;
				// console.log('Found Engine');
			}
			if(arrayContains($('#os').val(),matrix[i].os.split(','))){
				found.os=true;
				// console.log('Found OS');
			}
			
			// console.log(found);
			if(($('#condition').html() =='All') && (found.os && found.engines)){
				newMatrix.push(matrix[i]);
			}
			if(($('#condition').html() =='Any') && (found.os || found.engines)){
				newMatrix.push(matrix[i]);
			}
		};

	}
	$('#table').bootstrapTable("load",newMatrix);
	return newMatrix;
}

function displayMatrix() {

        for (var i = 0; i < matrix.length; i++) {
        	pushArray(lookups.engines.cluttered,matrix[i].engines.split(','));
        	pushArray(lookups.os.cluttered,matrix[i].os.split(','));
        };
        lookups.engines.unique = $.unique(lookups.engines.cluttered).sort();
        lookups.os.unique = $.unique(lookups.os.cluttered).sort();
        
		$.each(lookups.os.unique, function(key, value) {   
		     $('#os')
		         .append($("<option selected></option>")
		         .attr("value",value)
		         .text(value)); 
		});
		$.each(lookups.engines.unique, function(key, value) {   
		     $('#engines')
		         .append($("<option selected></option>")
		         .attr("value",value)
		         .text(value)); 
		});

        $('#os').multiselect({
            includeSelectAllOption: true,
            allSelectedText: 'All Operating Systems',
            nonSelectedText: 'Select Operating Systems',
            onChange: function(option, checked, select) {
               getFilteredMatrix();
            }
        });        
        $('#engines').multiselect({
            includeSelectAllOption: true,
            allSelectedText: 'All Engines',
            nonSelectedText: 'Select Engines',
            onChange: function(option, checked, select) {
               getFilteredMatrix();
            }
        });  

      $('#table').bootstrapTable({
        data: matrix
    	});  

    	$('#btnFilter').click(function(){
    		if($('#condition').html() =='All')
    			$('#condition').html('Any');
    		else
    			$('#condition').html('All');
    		getFilteredMatrix();
    	})    
    };
