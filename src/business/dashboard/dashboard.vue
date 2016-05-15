<template>
  <main>
    <h1>Flexbox Admin Template</h1>

    <div class="flex-grid">
      <calendar></calendar>
      <list-panel></list-panel>
    </div>

    <div class="flex-grid">
      <list-panel></list-panel>
      <list-panel></list-panel>
      <list-panel></list-panel>
    </div>

    <div class="flex-grid">
      <grid-panel></grid-panel>
    </div>

    <div class="flex-grid">
      <grid-panel></grid-panel>
      <list-panel></list-panel>
    </div>
  </main>
</template>

<script>
import ListPanel from './listpanel'
import GridPanel from './gridpanel'
import Calendar from '../../components/common/calendar'

import HintService from '../../services/hint-service'

export default {
  data () {
    return {
    }
  },
  components: {
    ListPanel,
    GridPanel,
    Calendar
  },
  ready () {
    setTimeout(() => HintService.hint('Hello', 'World'), 60000)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
