import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import MagicButton from '../magicButton'

Vue.config.ignoredElements = [
    'font-awesome-icon'
];

describe('MagicButton', () => {
  const wrapper = shallowMount(MagicButton,{
    data () {
      return {
        isActive: false
      }
    },
    computed: {
      fetch () {
        return false;
      }
    }
  })
  it("should display fetch data message", () => {
    expect(wrapper.find("span").text()).toBe("Do. Or do not. There is no try.")
  })
})