const hints = []

export default {
  hints,
  hint (title, content) {
    hints.push({
      title,
      content
    })
  }
}
