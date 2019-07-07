<template>
  <section class="container">
    <div>
      <h3>タグ一覧</h3>
      <ul>
        <li v-for="item in tags" :key="item.id">
          <Tag :tag_item="item" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Tag from '~/components/tag.vue';
import {mapGetters} from 'vuex'

export default {
  async asyncData({ store}){
  await store.dispatch('fetchTags')
  },
  computed: {
    ...mapGetters(['tags'])
  },
  components: {
    Tag
  }
}
</script>
