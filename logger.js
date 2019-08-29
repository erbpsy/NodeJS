const EventManager=require("events");
//var emitter=new EventManager();
var url="http://mymindinfotech.com";

class Logger extends EventManager{
 log(){
    console.log("loggers log function is called");
    this.emit("onclick",{id:1, name:"bhanu pratap"});
    //return true;
}
}
module.exports=Logger;
//module.exports.Emitter=emitter;