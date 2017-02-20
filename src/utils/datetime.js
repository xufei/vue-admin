import moment from 'moment'

const fromNow = date => {
  return moment(date).fromNow()
}

export { fromNow }
