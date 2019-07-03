<template>
  <section class="container">
    <div>
      <h3>{{tag}} のタグが付けられた投稿の一覧</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h4>
            <span> {{item.title}} </span>
            <small> by {{item.user.id}}</small>
            </h4>
            <div> {{item.body.slice(0,145)}}......</div>
            <p><a :href="item.url">{{item.url}}</a></p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ app ,params}) {
    const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:' + params.tag)
    return {
      items,
      tag : params.tag
    }
  }
}
</script>
