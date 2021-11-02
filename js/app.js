
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
        this.tasksList.push({
          text: this.newTodoText.trim(),
          checked: false,
        });
      },
      onRemoveClick(indexToRemove){
        this.tasksList.splice(indexToRemove, 1);
      },
    }
  });
});