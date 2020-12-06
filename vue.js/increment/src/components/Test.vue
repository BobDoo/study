<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  props: {
    msg: { type: String, required: false, default: "sleep" }
  },
  created() {
    this.$emit("msg", this.msg);
  }
};
</script>

<style></style>
