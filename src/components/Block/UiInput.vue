<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    :value="props.value"
    :name="props.name"
    @focus="handleFocusInput"
    @input="handleInputValue"
    @blur="handleBlurInput"
  />
</template>

<script setup>
const emit = defineEmits("focus", "input", "blur");
const props = defineProps({
  type: {
    type: String,
    requred: true,
  },
  name: {
    type: String,
    requred: true,
  },
  placeholder: {
    type: String,
    requred: true,
  },
  value: {
    type: String,
    requred: true,
  },
});
</script>

<style lang="scss" scoped>
input {
  padding: 5px;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border: none;
  box-shadow: 2px 3px 10px 4px rgba(34, 60, 80, 0.2);
}
</style>
