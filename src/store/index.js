import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api/index"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showModal: false,
    activeStu: {},
    nowPage: 1,
    totalPage: 1,
    list: [],
    count: 1,
    size: 2,
    searchValue:''
  },
  mutations: {
    setSearchValue(state,val){
      this.searchValue = val
    },
    setNowPage(state, p) {
      state.nowPage = p
    },
    setTotalPage(state, count) {
      state.totalPage = Math.ceil(count / state.size)
      state.count = count
    },
    setList(state, list) {
      state.list = list
    },
    setModal(state, flag) {
      state.showModal = flag
    },
    setActiveStu(state, stu) {
      state.activeStu = stu
    }
  },
  actions: {
    async findByPage({commit, state},page) {
      const {
        cont,
        findByPage
      } = await api.findByPage(page,state.size)
      // console.log(await api.findByPage(page,state.size))
      commit("setTotalPage",cont)
      commit('setNowPage',page)
      commit('setList',findByPage)
    },
    async searchStu({commit,state},page){
      const {cont, searchList} = await api.searchStu({
        search:state.searchValue,
        page,
        size:state.size
      })
      commit("setTotalPage",cont)
      commit('setNowPage',page)
      commit('setList',searchList)
    },
    async delStu({dispatch,state},sNo){
      await api.delStu(sNo)
      let page = Math.ceil((state.count - 1)/state.size)
      if(state.nowPage > page){
        page = state.nowPage - 1
      }else{
        page = state.nowPage
      }
      if(state.searchValue){
        dispatch('searchStu',page)
      }else{
        dispatch('findByPage',page)
      }
    }
  },
  modules: {}
})