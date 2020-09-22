<template>
  <div class="left-menu">
    <div class="list">
      <h5 class="title">学生管理</h5>
      <ul class="list-group">
        <router-link to="/stuList" class="list-item student-list" tag="li">学生列表</router-link>
        <router-link to="/stuAdd" class="list-item student-add" tag="li">新增学生</router-link>
        <!-- <li class="list-item student-list active" data-id="student-list">学生列表</li>
        <li class="list-item student-add" data-id="student-add">新增学生</li> -->
        <!-- <li class="list-item student-echarts" data-id="student-echarts">统计图表</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>