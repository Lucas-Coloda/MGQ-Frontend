<template>
  <v-app>
    <v-app-bar app color='primary' dark></v-app-bar>
    <v-content v-if='!$store.getters.userLogged'>
      <login v-if='state === LOGIN' @register='state = REGISTER' />
      <register v-if='state === REGISTER' @login='state = LOGIN' />
    </v-content>
    <v-content v-else>
      <router-view />
    </v-content>
  </v-app>
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
