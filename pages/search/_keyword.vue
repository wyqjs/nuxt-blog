<template>
  <div>
    <Article :arts="list.arts" />
  </div>
</template>

<script>
import Article from '~/components/article'

export default {
  components: {
    Article
  },

  fetch({ store, params }) {
    return store.dispatch('article/getList', params)
  },

  computed: {
    list() {
      return this.$store.state.article.list
    }
  }
}
</script>
