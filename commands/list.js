import Conf from 'conf';
import chalk from 'chalk';

const { greenBright, yellowBright, red } = chalk;

const PROJECT_NAME = 'todos'

const config = new Conf({
    projectName: PROJECT_NAME
})


function list() {
    const todoList = config.get('todo-list')
    
    if (todoList && todoList.length > 0) {
        console.log('Displaying todos...');
        todoList.forEach((task, index) => {
            if (task.done) {
                console.log(greenBright(`${index}: ${task.text}`))
            } else {
                console.log(yellowBright(`${index}: ${task.text}`))
            }
        });
    } else {
        console.log(red.bold('You dont\'t have any tasks yet.'))
    }
}

export default list