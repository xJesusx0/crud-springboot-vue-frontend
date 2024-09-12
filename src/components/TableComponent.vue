<template>

    <div class="container mt-4">
        <h2 class="text-center mb-4">Lista de Productos</h2>
        <div class="text-center mb-4">
            <router-link to="/producto" class="btn btn-primary">
                Agregar Producto
            </router-link>
        </div>
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    <!-- datos -->
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
export default {
    mounted() {
        this.obtenerProductos()
    },
    methods: {
        async obtenerProductos() {
            try {
                const response = await fetch('http://localhost:8080/productos')
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const data = await response.json()

                const tableBody = document.getElementById('table-body')
                tableBody.innerHTML = ''

                data.forEach(producto => {
                    const tr = document.createElement('tr')

                    const id = document.createElement('td')
                    id.innerText = producto.id
                    tr.appendChild(id)

                    const nombre = document.createElement('td')
                    nombre.innerText = producto.nombre
                    tr.appendChild(nombre)

                    const precio = document.createElement('td')
                    precio.innerText = producto.precio
                    tr.appendChild(precio)

                    const cantidad = document.createElement('td')
                    cantidad.innerText = producto.cantidad
                    tr.appendChild(cantidad)

                    const acciones = document.createElement('td')
                    acciones.innerText = 'Acciones'
                    tr.appendChild(acciones)

                    tableBody.appendChild(tr)
                })

            } catch (error) {
                console.error(error)
            }
        }
    }

}

</script>
