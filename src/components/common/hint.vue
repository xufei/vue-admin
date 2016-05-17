<template>
  <div transition="fade">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String
  }
}
</script>

<style scoped>
div {
  position: initial;
  display: block;
  margin: 0 0 5px 0;
  padding: 15px;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
}

div.fade-transition {
    opacity: 1;
    transition: opacity 0.5s linear;
}

div.fade-enter, div.fade-leave {
    opacity: 0;
}

h2 {
  margin: -15px -15px 15px -15px;
  padding: 12px 15px;
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  border-bottom: 1px solid #ddd;
  background: #fafafa;
}
</style>