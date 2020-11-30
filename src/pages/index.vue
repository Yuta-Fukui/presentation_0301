<template>
  <div>
    <div>
      <input type="text" v-model="text">
      <button class="btn1" @click="view()">
        表示
      </button>
    </div>
    <div>
      <button class="btn2" @click="viewIf()">
        IF切り替え
      </button>
    </div>
    <div>
      <template v-for="(number,i) in numbers">
        <button class="btn3" :key="i" @click="selectNumber(number)">
          {{ number }}
        </button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      isActive: false,
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    view () {
      window.alert(this.text)
    },
    viewIf () {
      this.isActive = !this.isActive
      if (this.isActive) {
        window.alert('今はtrue')
      } else {
        window.alert('今はfalse')
      }
    },
    selectNumber (num) {
      const number = num % 2
      if (number === 0) {
        window.alert('選んだ数字は偶数です')
      } else {
        window.alert('選んだ数字は奇数です')
      }
    }
  }
}
</script>

<style>
.btn1 {
  display: inline-block;
  border-radius: 25px;
  text-decoration: none;
  color: #FFF;
  background-color: red;
  transition: .4s;
  margin: 0 0.5vw;
}

.btn2 {
  display: inline-block;
  border-radius: 25px;
  text-decoration: none;
  color: #FFF;
  background-color: black;
  transition: .4s;
  margin: 0 0.5vw;
}

.btn3 {
  display: inline-block;
  border-radius: 25px;
  text-decoration: none;
  color: #FFF;
  background-color: blue;
  transition: .4s;
  margin: 0 0.5vw;
}
</style>
