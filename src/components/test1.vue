<template>
  <div>
    <p>你好世界</p>
    <p>{{b}}</p>
    <p>{{play}}</p>

  </div>
</template>

<script>
import {eventBus} from '@/js/bus'
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      b: '段雅洁'
    }
  },
  created() {
    setTimeout(() => {
      eventBus.$on('id-selected', function(id) {
        console.log(id);
      });
    }, 10);
  },
  methods: {
    selectItem(id) {
        this.selectPlay({
          id
        })
      },
    // ...mapActions([
    //     'selectPlay'
    //   ])
  },
  computed: {
    // ...mapGetters([
    //   'play'
    // ])
  }
}
</script>

<style scoped>
  p{
    color: red;
    font-size: 20pt;
  }
</style>
