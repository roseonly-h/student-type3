<template>
  <table id="students-table" border="0" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>邮箱</th>
          <th>年龄</th>
          <th>手机号</th>
          <th>住址</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody id="tBody">
					<tr v-for="stu in stuList" :key="stu.sNo">
						<td>{{ stu.sNo }}</td>
						<td>{{ stu.name }}</td>
						<td>{{ stu.sex === 0 ? '男':'女' }}</td>
						<td>{{ stu.email }}</td>
						<td>{{ new Date().getFullYear() - stu.birth }}</td>
						<td>{{ stu.phone }}</td>
						<td>{{ stu.address }}</td>
						<td>
							<button class="edit btn" @click="edit(stu)">编辑</button>
							<button class="del btn" @click="del(stu.sNo)">删除</button>
						</td>
					</tr>
				</tbody>
      <tbody id="table-body"></tbody>
    </table>
</template>

<script>
import {mapMutations, mapActions,mapState} from "vuex"
export default {
  // data(){
  //   return {
  //     stuList:[]
  //   }
  // },
  created(){
    this.findByPage(1)
    // const result = await this.$api.findByPage(1,5)
    // this.stuList = result.findByPage
    // console.log(result)
    // console.log(this.stuList)
  },
  methods: {
    edit(stu){
      this.setModal(true),
      this.setActiveStu(stu)
    },
    del(sNo){
      const flag = window.confirm('是否删除学生')
      if(flag){
        this.delStu(sNo)
      }
    },
    ...mapMutations(['setModal','setActiveStu']),
    ...mapActions(['findByPage','delStu'])
  },
  computed:{
    ...mapState({
      stuList: state => state.list
    })
  }
}
</script>

<style>

</style>