import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/scan'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/merge'
import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/operator/distinct'
import 'rxjs/add/observable/merge'

// 挣钱是为了买房，买房是为了赚钱
const house$ = new Subject()
const houseCount$ = house$.scan((acc, num) => acc + num, 0)

// 工资始终不涨
const salary$ = Observable.interval(100).mapTo(2)

const rent$ = Observable
  .combineLatest(Observable.interval(3000), houseCount$)
  .distinct(arr => arr[0])
  .map(arr => arr[1] * 5)

// 一买了房，就没现金了……
const cash$ = Observable.merge(salary$, rent$)
  .scan((acc, num) => {
    const newSum = acc + num

    const newHouse = Math.floor(newSum / 100)
    if (newHouse > 0) {
      house$.next(newHouse)
    }

    return newSum % 100
  }, 0)

export { salary$, houseCount$, rent$, cash$ }
