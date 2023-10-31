<template>
  <form class="form">
    <slot />
  </form>
</template>

<script setup></script>

<style lang="scss" scoped>
.form {
  margin: 0 auto;
  width: 500px;
  display: flex;
  flex-direction: column;
}
</style>
