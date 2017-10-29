import { Observable } from 'rxjs/Observable'

const timerMap = {}

const getTimer = interval => {
  if (!timerMap[interval]) {
    timerMap[interval] = Observable.interval(interval)
  }
  return timerMap[interval]
}

export default getTimer
