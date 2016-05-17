const hints = []

export default {
  hints,
  hint (title, content) {
    const hint = { title, content }
    hints.push(hint)
    setTimeout(() => {
      hints.forEach((k, i) => {
        if (k === hint) {
          hints.splice(i, 1)
          return false
        }
      })
    }, 5000)
  }
}
