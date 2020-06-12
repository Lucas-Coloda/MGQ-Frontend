<template>
  <div>
    <h1>
      Home
    </h1>
    <button @click.prevent="signOut">Sign out</button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Home',
  methods: {
    signOut: async function () {
      await firebase.auth().signOut();
    },
  },
};
</script>
