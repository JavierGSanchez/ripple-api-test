var foo;
var options = {trace:true,servers:['wss://54.69.247.107:51235']}
var remote = new ripple.Remote(options);
var request = remote.request('server_info');
var success, error;

function handleResponse(err,res){
    if(!err){
        console.debug("no error");
        console.debug(res);
        foo = res;
    }else{
        console.debug("error: "+err);
    }
}


//request.setServer('wss://s1.ripple.com');
//request.setServer('54.187.199.213');
request.setServer('54.69.247.107');
request.on('success',function onSuccess(res){console.debug("success"); success=res;});
request.on('error',function onError(err){console.debug("error"); error=err;});

//request.request(handleResponse);
//foo = request.request();
console.debug("ready");
