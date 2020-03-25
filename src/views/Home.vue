<template>
  <div class="home">

  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {

  },
  computed: {
    ...mapGetters(['getUser'])
  }
}
</script>
