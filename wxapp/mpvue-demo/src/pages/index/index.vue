<template>
  <div class="mpvue-demo">
    <p class="title">{{title}}</p>
    <p>{{mytodo}}</p>
    <input type="text" v-model="mytodo"/>
    <button @click="addTodo">加一条</button>
    <button @click="clearTodo">清空</button>
    <ul class="todos">
      <!-- v-for v-key 都是来自vue的循环指令 ，可以在vue里使用in 来指定item+index  :表示动态绑定属性 标签或组件的属性是跟data相关 -->
      <li v-key='i' v-for="(todo,i) in todos" :class="{'done':todo.status}" @click="toggle(i)">{{todo.content}}</li>
      <li>{{todoNum}}/{{todos.length}}</li>
    </ul>
  </div> 
</template>

<script>
export default {
  data () {
    return {
      mytodo: "",
      title: 'Hello Mpvue',
      todos: [
        {
          content: '吃饭',
          status: true
        },
        {
          content: '睡觉',
          status: false
        },
        {
          content: '打豆豆',
          status: false
        },
      ]
    }
  },

  components: {
  },
  computed: {
    todoNum() {
      return this.todos.filter(todo => todo.status).length;
    }
  },

  methods: {
   addTodo(){
     if(!this.mytodo) {
       return
     }
    this.todos.push({content:this.mytodo,status:false});
    this.mytodo="";
   },
   toggle(i){
     this.todos[i].status = !this.todos[i].status;
   },
   clearTodo() {
     this.todos = [];
   },
   
  },
    

  created () {
    
  }
}
</script>

<style scoped>
/* 单页面组件 */
.title {
  color: #ed12a3;
  text-align: center;
}
ul.todos {
  margin: 20px;
}
input {
  border: 2px solid #ed12a3;
}
.done {
  text-decoration: line-through;
}

</style>
