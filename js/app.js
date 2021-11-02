
Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", () =>{
  new Vue({
    el: "#root",
    data: {
      newTodoText: "",
      tasksList: [
        {
          text: "Aggiungere un Todo",
          checked: false,
        }
      ]
    },
    methods: {
      onAddClick(){
        if(this.newTodoText === ""){
          return;
        }

        const existingTask = this.tasksList.some((el) => {
          return el.text.toLowerCase() === this.newTodoText.trim().toLowerCase();
        });

        if(existingTask){
          return;
        }

        this.tasksList.push({
          text: this.newTodoText.trim(),
          checked: false,
        });
        this.newTodoText = "";
      },

      onRemoveClick(indexToRemove){
        this.tasksList.splice(indexToRemove, 1);
      },
    }
  });
});