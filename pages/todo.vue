<template>
  <div>
    <h1>TODOリスト</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>TITLE</th>
        <th>DONE</th>
      </tr>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.title }}</td>
        <td v-if="todo.done">✔</td>
        <td v-else></td>
      </tr>
    </table>
    <v-btn @click="addTodo">TODO追加</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TodoStore } from "~/store";
import { Todo } from "~/store/todo";

export default Vue.extend({
  async asyncData({ error }) {
    try {
      await TodoStore.fetchTodos();
    } catch (e) {
      console.log(e);
      error({
        statusCode: e.response.status,
        message: e.response.message,
      });
    }
  },
  computed: {
    todos() {
      return TodoStore.getTodos;
    },
  },
  methods: {
    addTodo(): void {
      let todo: Todo = {
        title: "hoge",
        description: "hoge description",
        done: true,
      };
      console.log("addTodo");
      TodoStore.createTodo(todo);
    },
  },
});
</script>