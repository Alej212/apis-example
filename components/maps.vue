<template>
    <h1>Map 1</h1>
    <div>
        <iframe class="div" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15694.582077396391!2d-66.8909829854965!3d10.449678019750301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2af7986c74cf3f%3A0x35c3de38e2550b20!2sCentro%20Comercial%20Galer%C3%ADas%20Prados%20del%20Este!5e0!3m2!1sen!2sve!4v1706991390939!5m2!1sen!2sve" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <h2>Map 2</h2>
    <div class="div2">
        <div style="height:100%; width:100%">
        <!-- Mapa de Tokio -->
        <LMap ref="map" :zoom="10" :center="[35.6895, 139.69171]">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href='^5^'>OpenStreetMap</a> contributors" layer-type="base" name="OpenStreetMap" />
        </LMap>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const zoom = ref(6)
</script>

<style scoped>
.div {
    border-radius: 20px;
}

.div2 {
    height: 500px;
    width: 800px;
    border-radius: 20px;
}

body {
  margin: 0;
}
</style>
