<template>
  <div>
    <h2>Make Money</h2>
    <ul>
      <li>工资：{{salary$}}</li>
      <li>房子：{{houseCount$}}</li>
      <li>租金：{{rent$}}</li>
      <li>现金：{{cash$}}</li>
    </ul>
  </div>
</template>

<script>
import { salary$, houseCount$, rent$, cash$ } from '../../services/money'

export default {
  data () {
    return {
    }
  },
  subscriptions: {
    salary$,
    houseCount$,
    rent$,
    cash$
  }
}
</script>
