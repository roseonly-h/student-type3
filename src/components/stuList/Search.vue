<template>
   <div class="search-wrap">
      <label for="search-inp">搜索：</label>
      <input type="text" placeholder="请输入学号" class="inp" id="search-inp" v-model="inp"/>
      <button class="search-btn" id="search-btn" @click="search">搜索</button>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
   data(){
      return {
         inp:''
      }
   },
   methods:{
      ...mapMutations(['setSearchValue']),
      ...mapActions(['findByPage','searchStu']),
      search(){
         if(this.inp){
            this.setSearchValue(this.inp)
            this.searchStu(1)
         }else{
            this.findByPage(1)
         }
      }
   }
}
</script>

<style>

</style>