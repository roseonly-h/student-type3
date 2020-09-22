<template>
  <div class="tab-content-item s-list show-list" id="student-list">
    <search></search>
    <stu-tab></stu-tab>
    <turn-page 
      :totalPage="totalPage"
      :nowPage="nowPage"
      @current-page="currentPage"
    ></turn-page>
    <transition>
      <edit-modal v-if="show"></edit-modal>
    </transition>
  </div>
</template>

<script>
import Search from "../components/stuList/Search";
import StuTab from "../components/stuList/StuTab";
import TurnPage from "../components/stuList/TurnPage";
import EditModal from "../components/stuList/EditModal";
import {  mapState, mapActions } from "vuex";
export default {
  components: {
    Search,
    StuTab,
    TurnPage,
    EditModal,
  },
  computed: {
    ...mapState({
      show: state => state.showModal,
      totalPage:state => state.totalPage,
      nowPage: state => state.nowPage,
      searchValue:state=>state.searchValue
    })
  },
  methods:{
    currentPage(i){
      if(this.searchValue){
        this.searchStu(i)
      }else{
        this.findByPage(i)
      }
    },
    ...mapActions(['findByPage','searchStu'])
  },

};
</script>

<style scoped>
.v-enter,
.v-leave-to {
  top: -100%;
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all .3s;
}
.v-enter-to,
.v-leave {
  top: 0;
  opacity: 1;
}
</style>