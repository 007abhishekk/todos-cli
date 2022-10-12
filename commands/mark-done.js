import Conf from 'conf';
import chalk from 'chalk';

const PROJECT_NAME = 'todos'

const config = new Conf({
    projectName: PROJECT_NAME
})

function markDone({tasks}) {
    let todoList = config.get('todo-list')
    
    if (todoList) {
        todoList = todoList.map((task, index) => {
            if(tasks) {
                if(tasks.indexOf(index.toString()) != -1) {
                    task.done = true
                }
            } else {
                task.done = true
            }
            return task
        })
    }

    config.set('todo-list', todoList)

    console.log(
        chalk.green.bold("Tasks have been marked successfully.")
    )
}

export default markDone