
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
          return
        } else{
          this.tasksList.push({
            text: this.newTodoText.toLowerCase().trim(),
            checked: false,
          });
          this.newTodoText = "";
        }
      },
      onRemoveClick(indexToRemove){
        this.tasksList.splice(indexToRemove, 1);
      },
    }
  });
});