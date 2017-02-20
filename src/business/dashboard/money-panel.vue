<template>
  <div>
    <h2>Make Money</h2>
    <ul>
      <li>工资：{{salary$}}</li>
      <li>房子：{{houseCount$}}</li>
      <li>租金：{{rent$}}</li>
      <li>现金：{{cash$}}</li>
    </ul>
    <button :click="hint()">啊，人生</button>
  </div>
</template>

<script>
import { salary$, houseCount$, rent$, cash$ } from '../../services/money'
// import HintService from '../../services/hint-service'

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
  },
  methods: {
    hint () {
      // setTimeout(() => HintService.hint('开心就好', '人生多么无聊'), 3000)
    }
  }
}
</script>
