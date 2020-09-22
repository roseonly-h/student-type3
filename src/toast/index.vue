<template>
  <div class="toast-content" :class="[type,animated]" v-if="flag">
    <div class="toast-msg">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
    //   msg: "修改成功",
      show: true,
    //   type: "suc"
    };
  },
  computed: {
    animated() {
      return this.show ? "fade-in" : "fade-out";
    }
  }
};
</script>

 <style scoped>
.toast-content {
  /* position: relative; */
  position: fixed;
  top: 0;
  left: calc(50% - 100px);
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border-radius: 10px;
  margin-top: 30px;
}
.toast-msg {
  color: #fff;
  font-weight: 600;
}
.suc {
  background-color: rgb(21, 189, 21);
}
.fail {
  background-color: rgb(247, 25, 25);
}
@keyframes fadeIn {
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 0%;
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    top: 0%;
    opacity: 1;
  }
  100% {
    top: -100%;
    opacity: 0;
  }
}
.fade-in {
  animation: fadeIn .5s;
}
.fade-out {
  animation: fadeOut .5s;
}
</style>