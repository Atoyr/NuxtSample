<template>
  <div>
  <p>
  user ID : {{userId}}
  </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.id
    }
  }
}

</script>
