<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="bg-login w-[550px] h-[800px] rounded-xl">
      <form action="" class="">
        <div class="flex flex-col justify-center h-[780px] items-center">
          <div class="flex flex-col gap-4">
            <div
              class="text-center text-4xl font-bold pb-10 bg-gradient-to-r from-[#320ac0] via-[#8d4604] to-[#1dffa1] inline-block bg-clip-text text-transparent"
            >
              <h1>Login</h1>
            </div>
            <div class="flex pb-3">
              <Icon icon="mdi:user" class="text-3xl absolute mt-2" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Username/Email"
                class="h-12 pl-9 outline-none rounded-md border-b-2 border-white w-[300px] bg-[#512E5F] hover:bg-[#ebeaea]"
              />
            </div>
            <div class="flex">
              <Icon icon="mdi:password" class="text-3xl absolute mt-2" />
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                class="h-12 pl-9 outline-none rounded-md border-b-2 border-white w-[300px] bg-[#512E5F] hover:bg-[#ebeaea]"
              />
            </div>
          </div>
          <div class="pt-10">
            <button
              class="w-[300px] h-16 rounded-r-full text-white text-xl rounded-l-full bg-[#615757] hover:bg-[#182f7a] justify-center flex items-center"
            >
              Login Now
            </button>
          </div>
          <div class="ml-[300px] text-white py-14">
            <div>
              <h1 class="pb-2">Log in via</h1>
              <div class="flex gap-4 pt-3">
                <Icon icon="ri:instagram-fill" />
                <Icon icon="ic:sharp-facebook" />
                <Icon icon="bi:twitter" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
