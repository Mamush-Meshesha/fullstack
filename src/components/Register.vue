<script setup>
import gql from "graphql-tag";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

//reactive variables
const id = ref();
const user_id = ref();
const username = ref("");
const first_name = ref("");
const last_name = ref("");
const email = ref("");
const password = ref("");
//end reactive
//mutation
const MUTATION_REGISTER_USER = gql`
  mutation createUser(
    $id: Int!
    $user_id: Int!
    $username: String!
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String!
  ) {
    insert_users_one(
      object: {
        id: $id
        user_id: $user_id
        username: $username
        first_name: $first_name
        last_name: $last_name
        email: $email
        password: $password
      }
    ) {
      id
      user_id
      username
      first_name
      last_name
      email
      password
    }
  }
`;
const { mutate: createUser } = useMutation(MUTATION_REGISTER_USER, {});

const handleUserRegistration = async () => {
  await createUser({
    id: id.value,
    user_id: user_id.value,
    username: username.value,
    first_name: first_name.value,
    last_name: last_name.value,
    email: email.value,
    password: password.value,
  });
  alert("Registration successful");
};

//end of mutation
</script>
<template>
  <div>
    <div
      class="w-screen flex justify-center items-center h-screen overflow-hidden"
    >
      <div
        class="bg-svg-pattern bg-no-repeat w-[500px] h-[770px] rounded-xl flex justify-center items-center"
      >
        <div class="">
          <div class="flex justify-center pb-10">
            <h1
              class="text-4xl font-bold bg-gradient-to-r from-[#4e1dff] via-[#ff8a1d] to-[#ff1d1d] inline-block bg-clip-text text-transparent"
            >
              Register
            </h1>
          </div>
          <form @submit.prevent="handleUserRegistration">
            <div class="flex flex-col ml-14 gap-4">
              <div class="flex py-3">
                <input
                  v-model="first_name"
                  type="text"
                  name=""
                  placeholder="First name"
                  class="outline-none border h-11 rounded-md px-4"
                />
              </div>
              <div class="flex py-3">
                <input
                  v-model="last_name"
                  type="text"
                  name=""
                  placeholder="Last name"
                  class="outline-none border h-11 rounded-md px-4"
                />
              </div>
            </div>
            <div class="flex py-3">
              <input
                v-model="id"
                type="number"
                name=""
                placeholder="Id"
                class="outline-none border h-11 rounded-md px-4 w-full mx-14"
              />
            </div>
            <div class="flex py-3">
              <input
                v-model="user_id"
                type="number"
                name=""
                placeholder="User Id"
                class="outline-none border h-11 rounded-md px-4 w-full mx-14"
              />
            </div>
            <div class="flex py-3">
              <input
                v-model="username"
                type="text"
                name=""
                placeholder="username"
                class="outline-none border h-11 rounded-md px-4 w-full mx-14"
              />
            </div>
            <div class="flex py-3">
              <input
                v-model="email"
                type="email"
                name=""
                placeholder="email"
                class="outline-none border h-11 rounded-md px-4 w-full mx-14"
              />
            </div>
            <div class="flex py-3">
              <input
                v-model="password"
                type="password"
                name=""
                placeholder="Password"
                class="outline-none border h-11 rounded-md px-4 w-full mx-14"
              />
            </div>
            <div class="ml-[65px] py-4">
              <button
                type="submit"
                class="h-16 border flex justify-between py-3 px-6 bg-white text-2xl rounded-r-full rounded-l-full w-[300px]"
              >
                Register Now
                <Icon
                  icon="ep:arrow-right-bold"
                  class="text-4xl text-[#811c1c]"
                />
              </button>
            </div>
          </form>
          <div class="flex justify-between">
            <div class="pt-6">
              <div>
                <h1 class="text-white text-xl">Already have an account?</h1>
                <router-link
                  :to="{ name: 'login' }"
                  class="text-xl text-green-600"
                  >Login</router-link
                >
              </div>
            </div>
            <div class="float-right text-white py-14">
              <div>
                <h1 class="text-xl pb-2">Log in via</h1>
                <div class="flex gap-4 pt-3">
                  <Icon icon="ri:instagram-fill" />
                  <Icon icon="ic:sharp-facebook" />
                  <Icon icon="bi:twitter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
