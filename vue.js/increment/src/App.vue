<template>
  <div>
    {{ a }}
    <!-- (@)v-on:{event} (:)v-bind:value="{val}" v-model="{val}" v-if="{boolean}" v-show="{boolean}" v-for="num in arr" -->
    <TestApp :msg="tmpStr" @msg="msg" />
    <Slot>
      <template v-slot:bottom>바닥</template>
      <template v-slot:top>천장</template>
    </Slot>
  </div>
</template>

<script>
import TestApp from "./components/Test";
import Slot from "./components/Slot";

export default {
  components: {
    TestApp,
    Slot
  },
  data() {
    return {
      a: 10,
      tmpStr: "aaa"
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
    },
    msg(msg) {
      console.log(">>>", msg);
    }
  }
};
</script>

<style></style>
