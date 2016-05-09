<template>
<main>

    <h1>Flexbox Admin Template</h1>

    <div class="flex-grid">
        <panel></panel>
        <panel></panel>
        <panel></panel>
    </div>

    <div class="flex-grid">
        <panel></panel>
        <panel></panel>
    </div>

    <div class="flex-grid">
      <datagrid></datagrid>
    </div>
</main>
</template>

<script>
import Panel from './panel'
import Datagrid from './datagrid'

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
    Panel,
    Datagrid
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
