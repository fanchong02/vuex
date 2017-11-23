<template>
  <div>
    <p>hello world</p>
    <p @click="_alert">{{a}}</p>
  </div>
</template>

<script>
import {eventBus} from '@/js/bus'
export default {
  data() {
    return {
      a: '樊冲',
      c: ['a', 'b', 'c', 'd' , 'e', 'f', 'g', 'h', 'i' , 'k']
    }
  },
  methods: {
    _alert() {
      eventBus.$emit('id-selected', this.c);
    }
  }
}
</script>

<style scoped>
  p{
    color: blue;
    font-size: 10pt;
  }
</style>
