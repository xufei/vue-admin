<template>
  <div>
    <hint v-for="(hint, i) in hints" :key="i" :title="hint.title" :content="hint.content"></hint>
  </div>
</template>

<script>
import Hint from './common/hint'
import HintService from '../services/hint-service'

export default {
  data () {
    return {
      hints: HintService.hints
    }
  },
  components: {
    Hint
  }
}
</script>

<style scoped>
div {
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  display: block;
}
</style>
