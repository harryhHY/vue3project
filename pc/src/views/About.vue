<template>
  <div class="about">
    <div>我的年龄：{{ age }}</div>
    <div>我的性别 ：{{ sex }}</div>
  </div>
</template>
<script lang="ts">
import { ref, reactive, toRefs } from "vue";
import { LocationQueryValue, useRoute } from "vue-router";
interface userreg {
  age: LocationQueryValue | LocationQueryValue[];
  sex: LocationQueryValue | LocationQueryValue[];
}
export default {
  setup() {
    const route = useRoute();
    let { age, sex } = route.query;
    const useritem: userreg = reactive({
      age: age,
      sex: sex,
    });
    const useritemRef = toRefs(useritem);
    return {
      ...useritemRef,
    };
  },
};
</script>