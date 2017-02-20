<template>
  <div>
    <message v-for="message in messages"
      :title="message.title"
      :content="message.content"
      :createAt="message.createAt">
    </message>
  </div>
</template>

<script>
import Message from './message'

import MessageService from '../../services/message'

export default {
  data () {
    return {
      messages: []
    }
  },
  created () {
    MessageService.getMessageList()
      .then(messages => (this.messages = messages))
  },
  components: {
    Message
  }
}
</script>
