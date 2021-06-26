<template>
  <div style="margin-top: 200px">
  <div v-for="behaviour in todos" :key="behaviour.id">
    {{ behaviour }}
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      url: 'http://localhost:3000/book',
      todos: []
    }
  },
  mounted () {
    axios.get(this.url).then((response) => {
      this.todos = response.data
      console.log(response.data)
    })
  }
}
</script>
