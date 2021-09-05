import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from './utils/api'

type Todo = {
    id?: Number
    title: String
    description: String
    done: Boolean
}

@Module({
    name: 'todo',
    stateFactory: true,
    namespaced: true
})
export default class Todos extends VuexModule {
    private todos: Todo[] = []

    public get getTodos() {
        return this.todos
    }

    public get getTodo() {
        return (id: Number) => this.todos.find((todo) => todo.id === id)
    }

    public get getTodoCount() {
        return this.todos.length
    }

    @Mutation
    private add(todo: Todo) {
        this.todos.push(todo)
    }

    @Mutation
    private remove(id: Number) {
        this.todos = this.todos.filter((todo) => todo.id !== id)
    }

    @Mutation set(todos: Todo[]) {
        this.todos = todos
    }

    @Action({ rawError: true })
    public async fetchTodos() {
        const { data } = await $axios.get<Todo[]>('/api/todos')
        this.set(data)
    }

    @Action({ rawError: true })
    public async createTodo(payload: Todo) {
        const { data } = await $axios.post<Todo>('/api/todo', payload)
        this.add(data)
    }

    @Action({ rawError: true })
    async deleteTodo(id: Number) {
        await $axios.delete(`/api/todo/${id}`)
        this.remove(id)
    }
}