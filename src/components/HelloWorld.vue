<template>
  <div class="hello">
    <testa></testa>
    <testb></testb>
  </div>
</template>

<script>
import Testa from './test1';
import Testb from './test2';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {

  },
  components: {
    Testa,
    Testb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
