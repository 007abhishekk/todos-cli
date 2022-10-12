import Conf from 'conf';
import chalk from 'chalk';

const PROJECT_NAME = 'todos'

const config = new Conf({
    projectName: PROJECT_NAME
})

function add(TASK) {
    let todoList = config.get('todo-list')
    if(!todoList) {
        todoList = []
    }

    todoList.push({
        text: TASK,
        done: false
    })

    config.set("todo-list", todoList)

    console.log(
        chalk.green.bold("Task added successfully!")
    )
}

export default add