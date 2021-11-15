<template>
  <div class="empty-state" align="center">
    <img src="@/assets/images/Home/empty-tickets.png" class="mb-5" alt="" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: ['image', 'text']
}
</script>

<style lang="scss" scoped></style>
