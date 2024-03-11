<script setup>
import gql from "graphql-tag";
import { RouterLink} from "vue-router"
import { useQuery } from "@vue/apollo-composable";
import { ref } from "vue";
const profileImage = ref(null);
const fileInput = ref(null);
const emit = defineEmits(["update:image"]);
//graphQl
const QUERY = gql`
  query users($limit: Int!) {
    users(limit: $limit) {
      id
      first_name
      last_name
      username
      email
    }
  }
`;
const { result, error, loading } = useQuery(QUERY, { limit: 1 });
//graphql end

const selectImage = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};
const pickFile = (event) => {
  const files = event.target.files;
  if (files && files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImage.value = e.target.result;
      emit("update:image", files[0]);
    };
    reader.onerror = (e) => {
      console.error("FileReader error: ", e);
    };
    reader.readAsDataURL(files[0]);
  }
};
</script>
<template>
  <div class="w-screen flex justify-center gap-[100px] h-screen items-center">
    <div class="w-[550px] h-[750px] bg-login bg-no-repeat rounded-lg">
      <form class="w-[550px]">
        <div>
          <h1 class="text-3xl p-6 capitalize pb-7 border-b-2">
            fillout your personal information
          </h1>
        </div>
        <div class="pt-4">
          <div class="flex flex-col px-10 gap-4">
            <label for="usersname" class="text-xl font-serif text-white"
              >Usersname:
            </label>
            <input
              type="text"
              name=""
              id="usersname"
              placeholder="Usersname"
              class="h-11 outline-none rounded-md px-2"
            />
            <label for="email" class="text-xl font-serif text-white"
              >Email:
            </label>
            <input
              type="text"
              name=""
              id="email"
              placeholder="Email"
              class="h-11 outline-none rounded-md px-2"
            />
            <label for="first name" class="text-xl font-serif text-white"
              >First Name:</label
            >
            <input
              type="text"
              name=""
              id="first name"
              placeholder="First Name"
              class="h-11 outline-none rounded-md px-2"
            />
            <label for="last name" class="text-xl font-serif text-white"
              >Last Name:</label
            >
            <input
              type="text"
              name=""
              id="last name"
              placeholder="Last Name"
              class="h-11 outline-none rounded-md px-2"
            />
            <label for="password" class="text-xl font-serif text-white"
              >Password:
            </label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
              class="h-11 outline-none rounded-md px-2"
            />
            <div class="flex justify-center">
             <RouterLink to="/login">
               <button
                class="text-xl w-[200px] h-12 rounded-l-full rounded-r-full border text-white"
              >
                Submit
              </button>
             </RouterLink>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="pt-10 w-[600px] h-[750px] flex justify-center border">
      <div>
        <div
          v-if="profileImage"
          class="w-[150px] h-[150px] rounded-full bg-[#dbbbbb] bg-cover"
          :style="{ 'background-image': `url(${profileImage})` }"
          @click="selectImage"
        ></div>
        <div
          v-else
          class="w-[150px] h-[150px] rounded-full bg-[#dbbbbb]"
          @click="selectImage"
        >
          Change profile
        </div>
        <input
          type="file"
          @change="pickFile"
          style="display: none"
          ref="fileInput"
        />
        <div v-if="error">Error</div>
        <div v-if="loading">Loading</div>
        <div v-if="result && result.users">
          <div
            v-for="users in result.users"
            :key="users.id"
            class="flex flex-col"
          >
            <label> {{ users.first_name }} {{ users.last_name }} </label>

            <label>
              {{ users.email }}
            </label>
            <label> {{ users.username }}</label>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
