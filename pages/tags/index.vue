<template>
  <section class="container">
    <div>
      <h3>タグ一覧</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <Tag item=item />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Tag from '~/components/tag.vue';
export default {
  async asyncData({ app ,params}) {
    const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:' + params.tag)
    return {
      items,
      tag : params.tag
    }
  },
  components: {
    Tag
  }
}
</script>
