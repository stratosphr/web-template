import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import sample from '~/components/samples/sample'
import index from '~/pages/index'

describe('Sample test suit', () => {
    let vuetify
    beforeEach(() => {
        vuetify = new Vuetify()
    })
    test('Sample test 1', () => {
        mount(sample, { vuetify })
        expect(true).toBeTruthy()
    })
    test('Sample test 2', () => {
        mount(index, { vuetify })
        expect(false).toBeFalsy()
    })
})
