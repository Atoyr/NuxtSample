<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <h4>
          {{item.title}}
        </h4>
        <div>{{item.body.slice(0,130)}}......</div>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  async asyncData({app}) {
    const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js')
    return {
      items
    }
  }
}
</script>
