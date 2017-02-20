<template>
  <main>
    <h1>Vue Admin Portal</h1>

    <div class="flex-grid">
      <message-list></message-list>
      <money-panel></money-panel>
    </div>

    <div class="flex-grid">
      <list-panel></list-panel>
      <list-panel></list-panel>
      <calendar></calendar>
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
import MessageList from '../../components/message/message-list'
import MoneyPanel from './money-panel'

import HintService from '../../services/hint-service'

export default {
  data () {
    return {
    }
  },
  components: {
    ListPanel,
    GridPanel,
    Calendar,
    MessageList,
    MoneyPanel
  },
  created () {
    /*
    setTimeout(() => HintService.hint('Hello', 'World'), 6000)
    setTimeout(() => HintService.hint('Hello', 'World2'), 6500)
    setTimeout(() => HintService.hint('Hello', 'World3'), 7000)
    setTimeout(() => HintService.hint('Hello', 'World4'), 7500)
    setTimeout(() => HintService.hint('Hello', 'World5'), 8000)
    */
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
