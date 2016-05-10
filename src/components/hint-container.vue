<template>
  <hint v:for="hint in hints" :title="hint.title" :content="hint.content"></hint>
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

<style>
</style>