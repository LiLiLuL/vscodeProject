this.$body.on('input propertychange','[maxLength]',function(){
    if(!$(this).attr('rich')){
        var val = $(this).val();
        var max = $(this).attr('maxLength');
        if(!_.isEmpty(val) && max){
            if(val.length > max){
                $(this).val(val.substr(0, max));
            }
        }
    }
});