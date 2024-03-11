<script setup>
import gql from "graphql-tag";
import { ref } from "vue";
import { RouterView } from "vue-router";
import { useQuery, useMutation } from "@vue/apollo-composable";

//component importing
import Register from "./components/Register.vue";
</script>
<template>
  <div class="bg-[#f1f1f0] rounded-xl shadow-2xl">
    <RouterView />
  </div>
</template>
