<template>
  <section class="container">
    <div>
      <h3>タグ一覧</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <Tag :tag_item="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Tag from '~/components/tag.vue';
export default {
  async asyncData({ app ,params}) {
    const items = await app.$axios.$get('https://qiita.com/api/v2/tags?sort=count&pre_page=100')
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
