<template>
  <button>
    <slot />
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
button {
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border: none;
  background: none;
  box-shadow: 2px 3px 10px 4px rgba(34, 60, 80, 0.2);
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 22px;
}
</style>
