<template>
  <!-- 编辑弹出框 -->
  <div class="modal" id="modal">
    <div class="mask" @click="setModal(false)"></div>
    <div class="modal-content" id="modal-content">
      <div class="title">
        <h2>编辑信息</h2>
      </div>
      <form id="edit-form">
        <div class="form-con">
          <div class="item">
            <label for="sNo">学号：</label>
            <input id="sNo" name="sNo" type="text" class="text" :value="activeStu.sNo" readonly />
          </div>
          <div class="item">
            <label for="name">姓名：</label>
            <input
              id="name"
              name="name"
              type="text"
              class="text"
              :value="activeStu.name"
              @input="edit('name',$event.target.value)"
              ref="name"
            />
          </div>
          <div class="item section">
            <label for="sex">性别：</label>
            <div class="con">
              <input
                name="sex"
                id="male"
                type="radio"
                value="0"
                :checked="activeStu.sex === 0"
                @change="edit('sex','0')"
                ref="sex"
              />
              <label for="male" class="sex">男</label>
              <input
                name="sex"
                id="female"
                type="radio"
                value="1"
                :checked="activeStu.sex === 1"
                @change="edit('sex','1')"
              />
              <label for="female" class="sex">女</label>
            </div>
          </div>
          <div class="item">
            <label for="email">邮箱：</label>
            <input
              id="email"
              name="email"
              class="text"
              type="text"
              :value="activeStu.email"
              @input="edit('email',$event.target.value)"
              ref="email"
            />
          </div>
          <div class="item">
            <label for="birth">出生年：</label>
            <input
              id="birth"
              name="birth"
              class="text"
              type="text"
              :value="activeStu.birth"
              @input="edit('birth',$event.target.value)"
              ref="birth"
            />
          </div>
          <div class="item">
            <label for="phone">手机号：</label>
            <input
              id="phone"
              name="phone"
              class="text"
              type="text"
              :value="activeStu.phone"
              @input="edit('phone',$event.target.value)"
              ref="phone"
            />
          </div>
          <div class="item">
            <label for="address">住址：</label>
            <input
              type="text"
              class="text"
              name="address"
              id="address"
              :value="activeStu.address"
              @input="edit('address',$event.target.value)"
              ref="address"
            />
          </div>
          <div class="btn item">
            <input type="button" value="提交" class="submit" @click="commit" />
            <input type="button" value="重置" id="reset" class="reset" @click="reset" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      stu: {}
    };
  },
  methods: {
    ...mapMutations(["setModal"]),
    edit(type, value) {
      this.stu[type] = value;
      // console.log(this.stu);
    },
    async commit() {
      const user = Object.assign({}, this.activeStu, this.stu);
      const {msg, status} = await this.$api.updataStu(user)
      if(status === 'success'){
        this.$toast('suc',msg)
        Object.assign(this.activeStu, this.stu)
        this.setModal(false)
        // alert(msg)
      }else{
        // alert(msg)
        this.$toast('fail',msg)
      }
    },
    reset(){
      for (const prop in this.$refs) {
        if(this.$refs[prop] === 'sex'){
          continue
        }
        this.$refs[prop].value = ''
        this.$refs.sex.checked = true
      }
    }
  },
  computed: {
    ...mapState({
      activeStu: state => state.activeStu
    })
  }
};
</script>

<style>
</style>