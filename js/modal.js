const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click();
});

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('boton-eliminar')) {
        Swal.fire({
            title: '¿Estás seguro de eliminar el producto?',
            text: 'Vas a eliminar un producto con sus cantidades!',
            icon: 'warnig',
            showCancelButton: true,
            confirmButtonColor: '#2c88d9',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if(result.isConfirmed) {
                eliminarProductosCarrito(e.target.value);

                Swal.fire(
                    'Eliminado!',
                    'El producto ha sido eliminado!',
                    'success',
                )
            }
        })
    }
})

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('boton-vaciar-carrito')) {
        if(carrito.length != 0) // El carrito está vacio?
        {
            Swal.fire({
                title: '¿Estás seguro que desea vaciar el carrito?',
                text: 'Va a eliminar todos sus productos!',
                icon: 'warnig',
                showCancelButton: true,
                confirmButtonColor: '#2c88d9',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if(result.isConfirmed) {
                        vaciarCarrito();
                        Swal.fire(
                            'Eliminados!',
                            'Los productos han sido eliminados con éxito!',
                            'success',
                        )
                }
            })
        } else { // El carrito se encuentra vacio
            Swal.fire(
                'Oops...',
                'El carrito ya se encuentra vacio!',
                'error',
            )
        }
        
    }
})