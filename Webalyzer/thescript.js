function give_result(){
       var saitama = $('#formValueId').val();
        
        var temp = new Array();
        temp = saitama.split(',');
        var scars = new Array();
        
        var min = temp[0];
        var max = temp[0];
        var avg = 0;
        var sum = 0;
    for(var i = 0; i < temp.length; i++)
        {
            if(temp[i] < min){
                min = temp[i];
            }
            if(temp[i] > max){
                max = temp[i];
            }
            sum = sum + parseInt(temp[i]);
        }
    avg = sum/temp.length;
    
    $("#max").html(max);
    $("#min").html(min);
    $("#sum").html(sum);
    $("#avg").html(avg);
    
    var l = temp.length;
    var j = 0;
    for(var i = l;  i>= 0; i--)
        {
            scars[j] = temp[i];
            j++
        }
    $('#reverseFlash').html(scars.join(','));
    
    

        }
