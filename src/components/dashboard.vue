<template>
  <main>
    <h1>Flexbox Admin Template</h1>

    <div class="flex-grid">
      <list-panel></list-panel>
      <list-panel></list-panel>
      <list-panel></list-panel>
    </div>

    <div class="flex-grid">
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

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  components: {
    ListPanel,
    GridPanel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
