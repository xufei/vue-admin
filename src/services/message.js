const list = [
  { id: '001', title: '画', content: '远看山有色，静听水无声。春去花还在，人来鸟不惊。', createAt: new Date() },
  { id: '002', title: '静夜思', content: '远看山有色，静听水无声。春去花还在，人来鸟不惊。', createAt: new Date() },
  { id: '003', title: '登鹳雀楼', content: '远看山有色，静听水无声。春去花还在，人来鸟不惊。', createAt: new Date() }
]

class MessageService {
  getMessageList () {
    return Promise.resolve(list)
  }
  getMessage (id) {
    return Promise.resolve(list.find(item => item.id === id))
  }
}

export default new MessageService()
