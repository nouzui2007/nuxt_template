import { MockMethods, MockResponse } from 'axios-mock-server'
import { todos, sleep } from '.'

const methods: MockMethods = {
  async get({ values }) {
    await sleep(100)
    return [200, todos.find(todo => todo.id === values.id)] as MockResponse
  },

  async post({ data }) {
    await sleep(100)
    todos.push({
      id: todos.length,
      title: data.title,
      description: data.description,
      done: data.done
    })
    return [201]
  }
}

export default methods