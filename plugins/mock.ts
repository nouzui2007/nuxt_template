import { Plugin } from '@nuxt/types'
import mock from '~/mocks/$mock'

const accessor: Plugin = ({ $axios }) => {
    mock($axios)
}

export default accessor