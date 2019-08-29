const http =require("http");
const httpServer=http.createServer((request,responce)=>{

    // responce.write(responce.url);
    // responce.end();

    if(responce.statusCode==200  ){
        if(request.url=="/users"){
            responce.write(JSON.stringify({Id:1001,name:"bhanu Pratap", conatct:"96540773947"}))
            responce.end();
        }
        else if(request.url=="/"){
        responce.write("this is from the node sample");
        responce.end();
        }
    }
    else{
        responce.write("please contact techhnical support person for help, server responce is not correct!!!")
        responce.end();
    }

}).listen(1234)
console.log("listning at port 1234");
