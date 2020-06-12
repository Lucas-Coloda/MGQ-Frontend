<template>
  <div class='container'>
    <input v-model='form.name' type='name' />
    <input v-model='form.email' type='email' />
    <input v-model='form.password' type='password' />
    <!-- <button @click.prevent='submit'>{{$t('SIGNIN')}}</button>
    <button @click.prevent='login'>{{$t('LOGIN')}}</button> -->
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data: () => ({
    form: {
      name: '',
      email: '',
      password: '',
    },
    error: null,
  }),
  methods: {
    submit: async function () {
      try {
        const data = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password);

        data.user.updateProfile({ displayName: this.form.name });
      } catch (e) {
        this.error = e.message;
      }
    },
    login: function () {
      this.$emit('login');
    },
  },
};
</script>
