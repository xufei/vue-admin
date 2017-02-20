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
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
