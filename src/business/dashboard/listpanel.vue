<template>
  <div>
    <h2>Panel Header</h2>
    <list :data="listData"></list>
  </div>
</template>

<script>
import List from '../../components/common/list'

export default {
  data () {
    return {
      listData: [
        'Two',
        'little',
        'black',
        'birds',
        'sitting',
        'on',
        'the',
        'hill'
      ]
    }
  },
  components: {
    List
  }
}
</script>