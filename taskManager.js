const tasks = []

//Q.1
function addTask (taskname){
    tasks.push({nameOfTask:taskname, completed:false})   
}
addTask("swimming")
addTask("cooking")
addTask("coding")
addTask("eat")
addTask("reading")
console.log(tasks)


//Q.2
function removeTask(index){
    return tasks.splice(index, 1)
}
removeTask(2)
console.log(tasks)

//Q.3
function completedTask(index){
    tasks[index].completed = true
}
completedTask(2)
console.log(tasks)

//Q.4
function sortTasks(){
   return tasks.sort((a,b) => a.nameOfTask.localeCompare(b.nameOfTask))
}
console.log(sortTasks())

//Q.5
function incompleteTasks(){
    const result = tasks.filter((item) => item.completed === false)
    return result.length
}

console.log(`The number of incomplete tasks is: ${incompleteTasks()}`)