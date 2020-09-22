<template>
  <div class="tab-content-item s-add" id="student-add">
    <form id="add-student-form">
      <div>
        <div class="item">
          <label for="sNo">学号：</label>
          <input id="sNo" name="sNo" type="text" class="text" v-model="user.sNo"/>
        </div>
        <div class="item">
          <label for="name">姓名：</label>
          <input name="name" type="text" class="text" v-model="user.name"/>
        </div>
        <div class="item section">
          <label for="sex">性别：</label>
          <div class="con">
            <input name="sex" type="radio" value="0" checked v-model="user.sex"/>
            <label for="male" class="sex">男</label>
            <input name="sex" type="radio" value="1" v-model="user.sex"/>
            <label for="female" class="sex">女</label>
          </div>
        </div>
        <div class="item">
          <label for="email">邮箱：</label>
          <input name="email" class="text" type="text" v-model="user.email"/>
        </div>
        <div class="item">
          <label for="birth">出生年：</label>
          <input name="birth" class="text" type="text" v-model="user.birth"/>
        </div>
        <div class="item">
          <label for="phone">手机号：</label>
          <input name="phone" class="text" type="text" v-model="user.phone"/>
        </div>
        <div class="item">
          <label for="address">住址：</label>
          <input type="text" class="text" name="address" v-model="user.address"/>
        </div>
        <div class="btn item">
          <input type="button" value="添加" id="add-student-btn" class="add" @click="commit"/>
          <input type="button" value="重置" class="reset" @click="reset"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user:{
        name:'',
        sex: '0',
        email:'',
        phone:'',
        birth:'',
        address:'',
        sNo:''
      }
    }
  },
  methods:{
    async commit(){
    const {msg, status} = await this.$api.addStu(this.user)
    if(status === 'success'){
      this.$toast('suc',msg)
      const flag = window.confirm('是否继续添加')
      if(!flag){
        this.$router.push('/stuList')
      }
    }else{
      this.$toast('fail',msg)
    }
    // console.log(value)
    },  
    reset(){
      this.user = {
        name:'',
        sex: '0',
        email:'',
        phone:'',
        birth:'',
        address:'',
        sNo:''
      }
    },   
  }
};
</script>

<style>
</style>