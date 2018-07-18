<template>
  <div class="page">
    <h1 @click="go">{{ msg }}</h1>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Page1',
  data () {
    return {
      msg: 'Welcome to Page1'
    }
  },
  methods: {
    ...mapMutations(['SET_NAME']),
    go () {
      this.$router.push({
        path: '/'
      })
    }
  },
  mounted () {
    this.SET_NAME('李四')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
