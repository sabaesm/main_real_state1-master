<template>
<div>
  <ul class="d-flex pa-0 ma-1 cards_pagination">
    {{
      this.$route.params.page
    }}

    <li>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.68359 14.9401L11.5736 10.0501C12.1511 9.47256 12.1511 8.52756 11.5736 7.95006L6.68359 3.06006"
          stroke="#535353"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </li>
    <li>
      <nuxt-link :to=" {
          name:' blog',
          params:{ page: 1}
      }"> <span class="pagination__number">2</span>  </nuxt-link>
    </li>
    <li>
      <span class="pagination__number">1</span>
    </li>
  </ul>

  <span v-if="currentPage === 1" :class="disabledStyle">
  First
</span>

<nuxt-link
  v-else
  :to="{ name: 'articles-page-page', params: { page: 1 } }"
  :class="buttonStyles"
>
  First
</nuxt-link>

<span v-if="currentPage === 1" :class="disabledStyle">
  Prev
</span>

<nuxt-link
  v-else
  :to="{ name: 'articles-page-page', params: { page: prevPage } }"
  :class="buttonStyles"
>
  Prev
</nuxt-link>

<span v-if="currentPage === totalPages" :class="disabledStyle">
  Next
</span>

<nuxt-link
  v-else
  :to="{ name: 'articles-page-page', params: { page: nextPage } }"
  :class="buttonStyles"
>
  Next
</nuxt-link>
<span v-if="currentPage === totalPages" :class="disabledStyle">
  Last
</span>

<nuxt-link
  v-else
  :to="{ name: 'articles-page-page', params: { page: totalPages } }"
  :class="buttonStyles"
>
  Last
</nuxt-link>
</div>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 6,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.totalPages ? this.currentPage + 1 : this.totalPages;
    },
  },
};
</script>
<style scoped>
.cards_pagination {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}
.cards_pagination li {
  border: 1px solid rgba(0, 0, 0, 0.219);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 40px !important;
  height: 40px;
  margin: 0 5px;
}
.cards_pagination li .pagination__number {
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.53);
}
.cards_pagination li:hover {
  background: rgba(81, 159, 255, 0.12);
  transition: all ease-in-out 0.2s;
}
.cards_pagination li:hover .pagination__number {
  color: rgba(81, 159, 255, 1);
  transition: all ease-in-out 0.2s;
}
.cards_pagination li:hover svg path {
  stroke: rgba(81, 159, 255, 1);
  transition: all ease-in-out 0.2s;
}
</style>
