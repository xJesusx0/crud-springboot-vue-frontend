<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div class="container">
            <router-link class="navbar-brand fw-bold" to="/">CRUD SpringBoot y Vue</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul  class="navbar-nav ms-auto">
                    <li class="nav-item" v-for="link in links" :key="link.path">
                        <router-link class="nav-link" :to="link.path">{{ link.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: 'Inicio', path: '/' },
                { name: 'Agregar Producto', path: '/agregar-producto' },
                { name: 'Contacto', path: '/contacto' },
                { name: 'Acerca de', path: '/acerca' }
            ]
        }
    }
}
</script>

<style scoped>
.navbar {
    background-color: #e3f2fd;
    border-radius: 0.4em;
}

.navbar-brand {
    font-size: 1.5rem;
}

.nav-link {
    font-size: 1rem;
    transition: color 0.3s, background-color 0.3s;
    padding: 2%;
    border-radius: 0.4em;
}

.nav-link:hover {
    color: #000000;
    background-color: #7eb9f8;
}

@media (min-width: 992px) {
    .navbar-nav {
        display: flex;
        align-items: center;
    }
}
</style>