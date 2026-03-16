const lists = []


function addlist(id,text) {
    lists.push({ id, text })
}

function taskdone(id) {
    const index = lists.findIndex(l => l.id === id);
    if (index != -1) {
        lists.splice(index,1)
    }

    console.log("Task is Done")
}

function tasks() {
    lists.forEach(l=>console.log(l.id,l.text))
}

addlist(1,"Hi, How are you?")

addlist(2, "why are you doing this?")
addlist(3, "I am just learning JS")

tasks()