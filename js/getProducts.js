/* Los datos en vez de usarlos desde un array, los tomamos de 
un JSON por ruta relativa */

fetch("/data/stock.json")
    .then((resp) => resp.json())
    .then(data => {
        pintarProductos(data);
    })