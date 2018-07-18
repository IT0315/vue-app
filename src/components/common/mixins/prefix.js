const preName = 'hips'

export default {
  methods: {
    // 生成 css class
    b (className) {
      return className ? `${preName}-${className}` : ''
    },
  },
}
