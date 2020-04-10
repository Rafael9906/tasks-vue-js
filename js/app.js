const app = new Vue({
    el: '#app',
    data:{
        title:'Tareas',
        add: 'Agregar',
        alert: '',
        tasks:[],
        newTask: ''
    },
    methods:{
        addTask() {
            this.tasks.push({
               name: this.newTask,
               status: false
            });
            localStorage.setItem('task-local',JSON.stringify(this.tasks));
            this.newTask='';
        },
        editTask(index){
            this.tasks[index].status=!this.tasks[index].status;
            localStorage.setItem('task-local',JSON.stringify(this.tasks));
        },
        deleteTask(index){
            this.tasks.splice(index,1);
            localStorage.setItem('task-local',JSON.stringify(this.tasks));
        }
    },
    created(){
        let tasksData = JSON.parse(localStorage.getItem('task-local'));

        if(tasksData!=null){
            this.tasks = tasksData;
        }
        else{
            this.tasks = [];
        }
    }
});