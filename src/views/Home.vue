<template>
  <div class="home">
    <h1 @click="go">{{ msg }}</h1>
  </div>
</template>

<script>
import { fetchData } from '../api/home'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Home'
    }
  },
  methods: {
    ...mapActions(['setName']),

    go () {
      this.$router.push({
        path: './Page1'
      })
    },
    getData () {
      let params = {
        'params': {
          'p_employee_code': '7977',
          'p_role_code': 'EMPLOYEE',
          'p_key_word': '',
          'p_page': 1,
          'p_page_size': 10
        }
      }
      fetchData(params).then(res => {
        console.log('res', res)
      }).catch(err => {
        console.log('err', err)
      })
    }
  },
  mounted () {
    this.getData()
    this.setName('王五')
    // this.$store.dispatch('setName', '张三')
  }
}
</script>

<style type="text/css">

</style>
