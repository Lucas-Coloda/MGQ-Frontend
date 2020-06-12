<template>
  <div id="app">
    <div v-if="!$store.getters.userLogged">
      <login v-if="state === LOGIN" @register="state = REGISTER" />
      <register v-if="state === REGISTER" @login="state = LOGIN" />
    </div>
    <router-view v-else />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Login: () => import('@/components/auth/Login'),
    Register: () => import('@/components/auth/Register'),
  },
  data: () => ({
    state: 0,
    LOGIN: 0,
    REGISTER: 1,
  }),
};
</script>
