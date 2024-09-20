<template>
    <div class="login-container">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-center">Login</h5>
                <form action="/login" method="post">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" name="username" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name="password" required>
                    </div>
                </form>
                <button type="button" @click="login" class="btn btn-primary w-100">Login</button>
            </div>
        </div>
    </div>
</template>
<script>
import { inject } from 'vue';
import { request } from '@/Request'

export default {
    setup() {
        const api = inject('urlApi')
        return { api }
    },
    methods: {
        async login() {
            const username = document.getElementById('username').value
            const password = document.getElementById('password').value
            const body = {
                "nombre": username,
                "contraseña": password
            }
            const response = await request('/login','POST',body)


            if(!response.ok){
                const status = response.status

                if(status == 403){
                    alert('Datos de acceso incorrectos')
                    return
                }
            }

            const token = response.headers.get('Authorization')

            if(!token){
                alert('Ha ocurrido un error al iniciar sesion, intentalo denuevo')
                return
            }

            const access_token = token.replace('Bearer ','')

            localStorage.setItem('access_token',access_token)

            this.$router.push('/')
        }
    }
}

</script>