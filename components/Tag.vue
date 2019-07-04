<template>
    <div>
      <p><img :src='tag_item.icon_url' />
      <nuxt-link :to=tag_item.id append> {{tag_item.id}} </nuxt-link></p>
    </div>
</template>

<script>
export default {
  props: ["tag_item"]
}
</script>
