<template>
  <div>
    <div v-if='error'>{{error}}</div>
    <input v-model='form.email' type='email' />
    <input v-model='form.password' type='password' />
    <button @click.prevent='submit'>{{$t('LOGIN')}}</button>
    <button @click.prevent='register'>{{$t('SIGNIN')}}</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import RouteNames from '@/router/RouteNames';

export default {
  name: 'login',
  data: () => ({
    RouteNames: RouteNames,
    form: {
      email: '',
      password: '',
    },
    error: null,
  }),
  methods: {
    submit: async function () {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.password);

        if (this.$route.name !== RouteNames.HOME) {
          this.$router.push('/');
        }
      } catch (e) {
        this.error = e.message;
      }
    },
    register: function () {
      this.$emit('register');
    },
  },
};
</script>
