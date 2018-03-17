<template>
  <div>
       <nav>
            <li>
                <router-link to="/about">About</router-link>
            </li>         
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
              <li>
                <router-link to="/">Home</router-link>
            </li>
        </nav>
  </div>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>

