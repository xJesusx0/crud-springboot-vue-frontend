<template>
    <div class="container mt-4 rounded p-4" style="background-color: #f8f9fa; border: 1px solid #dee2e6; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <h2 class="mb-4">Agregar Producto</h2>
        <form @submit.prevent="onSubmit">
            <div class="form-floating mb-3">
                <input type="text" id="nombreProducto" class="form-control" placeholder="Ingresa el nombre del producto" required />
                <label for="nombreProducto">Nombre del Producto</label>
            </div>

            <div class="form-floating mb-3">
                <input type="number" id="cantidadProducto" class="form-control" placeholder="Ingresa la cantidad del producto" required />
                <label for="cantidadProducto">Cantidad</label>
            </div>

            <div class="form-floating mb-3">
                <input type="number" id="precioProducto" class="form-control" placeholder="Ingresa el precio del producto" required />
                <label for="precioProducto">Precio</label>
            </div>

        </form>
        <button type="button" class="btn btn-primary mt-3" @click="agregarProducto">Agregar producto</button>
    </div>
</template>


<script>
export default {
    methods: {
        async agregarProducto() {

            const nombre = document.getElementById('nombreProducto').value
            const cantidad = document.getElementById('cantidadProducto').value
            const precio = document.getElementById('precioProducto').value

            if(!nombre.trim()){
                alert('El nombre no puede estar vacio')
                return
            }

            if(precio < 0 ){
                alert('El precio no puede ser negativo')
                return
            }

            if(cantidad < 0){
                alert('La cantidad no puede ser negativa')
                return
            }

            const producto = {
                nombre:nombre,
                precio:precio,
                cantidad:cantidad
            }

            console.log(producto)

            try{
                const response = await fetch('http://localhost:8080/productos',{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json', 
                    },
                    body:JSON.stringify(producto)
                })

                if(!response.ok){
                    throw new Error(response.statusText)
                }

                const data = await response.json()

                alert(data.message)

                if(data.success){
                   this.$router.push('/') 
                }

            } catch(error){
                console.error(error)
                alert('Ha ocurrido un error durante el proceso')
            }

        }
    }
};
</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>