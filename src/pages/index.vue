<template>
  <div>
    <input type="text" v-model="text">
    <button @click="hoge()">
      表示
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    hoge () {
      window.alert(this.text)
    }
  }
}
</script>
