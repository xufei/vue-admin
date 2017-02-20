<template>
  <div>
    <h2>{{title}}</h2>
    <p>
      {{content}}
      <span>{{dateFromNow$}}</span>
    </p>
  </div>
</template>

<script>
import { fromNow } from '../../utils/datetime'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'

let that

export default {
  props: {
    title: String,
    content: String,
    createAt: Date
  },
  created () {
    that = this
  },
  subscriptions: {
    dateFromNow$: Observable.interval(1000).map(() => fromNow(that.createAt))
  }
}
</script>
