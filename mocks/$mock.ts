/* eslint-disable */
import { AxiosInstance } from 'axios'
import mockServer from 'axios-mock-server'
import mock0 from './api/todos/index'

export default (client?: AxiosInstance) => mockServer([
  {
    path: '/api/todos',
    methods: mock0
  }
], client, '')
