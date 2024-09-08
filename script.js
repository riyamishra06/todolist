// 
let todo = [];
let req = prompt("Enter your choice");
while(true) {
    if(req === "quit"){
        console.log("You are quitting the app");
        break;
    }
    //add
    if(req === "List"){
        console.log("-----------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------");
    } else if(req === "add"){
        let task = prompt("please enter the task you want to do");
        todo.push(task);
        console.log(" task was added");
     } else if(req === "delete"){
        let idx= prompt("please enter the task index");
        todo.splice(idx,1);
        console.log("Task delelted");
     }
     req = prompt("Enter your choice");
}