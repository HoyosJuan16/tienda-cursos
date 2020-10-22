const carrito = document.querySelector('#carrito')//carrito de la barra
const cuerpoCarrito = document.querySelector('#content-carrito')//tabla del carrito donde se ven los productos del carrito
const comprarCarrito = document.querySelector('#comprar-carrito')
const listaCursos = document.querySelector('#lista-cursos') //Los cursos del main
//productos dentro del carrito
let productosCarrito = []

const cargarEventos = () =>{
  //Cuando agregar un curso presionando Agregar al carrito
  listaCursos.addEventListener('click', agregarCurso)
}
const agregarCurso = (e) => {
  if(e.target.classList.contains('btn-agregar-carrito')){
    const cursoSeleccionado = e.target.parentElement.parentElement
    leerDatosCurso(cursoSeleccionado)
  }
}
//Obtiene datos del curso al que le hicimos click
const leerDatosCurso = (curso) => {
  const infoCurso = {
    imagen: curso.querySelector('.portada-curso img').src,
    titulo: curso.querySelector('.info-curso .nombre-curso').textContent.trim(),
    precio: curso.querySelector('.precios .precio-actual').textContent.trim(),
    id: curso.querySelector('.btn-agregar-carrito').getAttribute('data-id'),
    cantidad: 1
  }
  productosCarrito = [...productosCarrito, infoCurso]
  mostrarCarrito()
}
//Mostrar los productos en el carrito
const mostrarCarrito = () => {
  if(productosCarrito.length>1){
    productosCarrito.forEach( (producto, index) => {
      if(productosCarrito.length-1 != index){
        cuerpoCarrito.removeChild(document.querySelector(`#productCarrito${index}`))
      }
    })
  }
  productosCarrito.forEach( (producto, index) => {
    const row = document.createElement('div')
    row.className = 'producto-carrito'
    row.id = `productCarrito${index}`
    row.innerHTML =`<div class='portada-producto-carrito'>
                      <img src='${producto.imagen}' />
                    </div>
                    <h3 class='nombre-producto-carrito'>${producto.titulo}</h3>
                    <span class='precio-producto-carrito'>${producto.precio}</span>`
    cuerpoCarrito.insertBefore(row,document.querySelector('.buttons'))
    
  })
}
//Mostrar carrito
carrito.addEventListener('click',()=>{
  if(cuerpoCarrito.style.display==='' || cuerpoCarrito.style.display==='none'){
    cuerpoCarrito.style.display = 'flex'
  }else{
    cuerpoCarrito.style.display = 'none'
  }
})
cargarEventos()


/*
table id='lista-carrito'
thead
  tr
    th imagen
    th nombre
    th precio
    th cantidad
    th 
tbody

*/