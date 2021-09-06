import { MockMethods, MockResponse } from 'axios-mock-server'
import { Todo } from '~/store/todo'

export const todos: Todo[] = [
    {
        id: 1,
        title: 'リスト1',
        description: 'lorem ipsum',
        done: true
    },
    {
        id: 2,
        title: 'リスト2',
        description: 'lorem ipsum',
        done: false
    },
    {
        id: 3,
        title: 'リスト3',
        description: 'lorem ipsum',
        done: true
    }
]

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const methods: MockMethods = {
    async get({ values }) {
        await sleep(100)
        return [200, todos] as MockResponse
    }
}

export default methods