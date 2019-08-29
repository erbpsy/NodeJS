// const http=require("http");
// const server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.write("Hello world this is from node js");
//         res.end();
//     }
//     else if(req.url==="/api/cources"){
//         res.write(JSON.stringify([1,2,3,4,5,6,7,8,9]));
//         res.end();
//     }
// });


// server.on('connection',(socket)=>{
//     console.log("new connection is created");
// })
//server.listen(1234);
//console.log("listning on the port 3000");


// ///event handling from class
// const Logger=require("./logger");
// var logger=new Logger();


// logger.on("onclick", function(args){
//     console.log("onclick on event is called from node js " + args.id + "---" + args.name);
// });

// logger.log("messsagee");

// //end


// //event handling
// const EventManager=require("events");
// var emitter=new EventManager();

// emitter.on("showMessage", function(){
//     console.log("showMessage on event is called");
// });

// emitter.on("onclick", function(args){
//     console.log("onclick on event is called from node js " + args.id + "---" + args.name);
// });

// //rais an event
// emitter.emit("showMessage");
// emitter.emit("onclick",{id:1, name:"bhanu pratap"});

// //end



// // OS module starts
// const os=require("os");
// var totalmemory=os.totalmem();
// var freememory=os.freemem();
// console.log(`total memory is :` + totalmemory +'and  free memory is :'+ freememory);
// // end-------------------------------
// // path module starts--------
// const path=require("path");
// var pathobject=path.parse(__filename);
// console.log(pathobject);
// // end -----------------
// console.log(__filename)
// console.log(__dirname)
// var logger=require("./logger")

// console.log(logger);
// console.log(logger.log());

// function  Printhello(name){
//     console.log("hello " + name);
// }

// Printhello("BHANU PRATAP")

// var message="hello message";
// console.log(global.message);
