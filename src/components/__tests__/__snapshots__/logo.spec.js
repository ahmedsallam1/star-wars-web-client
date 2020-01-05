import { mount } from '@vue/test-utils'
import Logo from '../../logo'

describe('Logo', () => {
	test('renders correctly', () => {
		const wrapper = mount(Logo)
	  	expect(wrapper.element).toMatchSnapshot()
	})
})