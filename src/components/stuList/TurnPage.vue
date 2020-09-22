<template>
  <ul id="turn-page">
    <li class="prev-page" @click="turnPage('prev')">上一页</li>
    <template v-if="totalPage <= 8">
      <li
        v-for="i in totalPage"
        :key="i"
        :class="{active: i=== nowPage}"
        @click="turnPage(i)"
      >{{ i }}</li>
    </template>
    <template v-else>
      <template v-if="nowPage <= 4">
        <li v-for="i in 6" :key="i" @click="turnPage(i)" :class="{active: i=== nowPage}">{{ i }}</li>
      </template>

      <template v-if="nowPage > 4">
        <li @click="turnPage(1)">1</li>
        <li @click="turnPage(nowPage - 5)">...</li>
      </template>

      <template v-if="nowPage > 4 && (nowPage <= totalPage - 4)">
        <li
          v-for="i in 5"
          :key="nowPage - 3 + i"
          @click="turnPage(nowPage - 3 + i)"
          :class="{active: i === 3}"
        >{{ nowPage - 3 + i }}</li>
        <!-- <li @click="turnPage(nowPage + 5)">...</li> -->
      </template>

      <template v-if="nowPage <= totalPage - 4">
        <li @click="turnPage(nowPage + 5)">...</li>
        <li @click="turnPage(totalPage)">{{ totalPage }}</li>
      </template>

      <template v-if="nowPage > totalPage - 4">
        <li
          v-for="i in 6"
          :key="totalPage - 6 + i"
          @click="turnPage(totalPage - 6 + i)"
          :class="{active: nowPage === totalPage - 6 + i}"
        >{{ totalPage - 6 + i }}</li>
      </template>
    </template>
    <li class="next-page" @click="turnPage('next')">下一页</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      np: null,
    };
  },
  props: {
    nowPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: 100,
    },
  },
  methods: {
    turnPage(page) {
      if (page === "prev") {
        if (this.nowPage <= 1) {
          return;
        }
        this.np = this.nowPage - 1;
      } else if (page === "next") {
        if (this.nowPage >= this.totalPage) {
          return;
        }
        this.np = this.nowPage + 1;
      } else {
        if (page <= 1) {
          this.np = 1;
        } else if (page >= this.totalPage) {
          this.np = this.totalPage;
        } else {
          this.np = page;
        }
      }
      this.$emit("current-page", this.np);
    },
  },
};
</script>

<style scoped>
.active {
  background-color: rgba(23, 109, 206, 0.596);
  color: #fff;
  font-weight: 600;
}
</style>