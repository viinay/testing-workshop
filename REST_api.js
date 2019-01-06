var request = require('request')

request.get('http://service.com/endpoint',function(error,results){
    if(error){
        //notify me
    }else{
        //perform action on results
    }
});