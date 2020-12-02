<template>
  <div>
    {{ a }}
    <!-- (@)v-on:{event} (:)v-bind:value="{val}" v-model="{val}" v-if="{boolean}" v-show="{boolean}" v-for="num in arr" -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 10
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  // destroyed() {},
  methods: {
    sum(a, b) {
      return a + b;
    }
  }
};
</script>

<style></style>
