let theadActiva = ''
let tBodyActiva = ''

function ActivarDescativarMenu(idS, idtheadtabla, idtbodytabla){
    $('#windowOrdenes').removeClass('active')
    $('#windowProductos').removeClass('active')
    $('#windowClientes').removeClass('active')
    $('#windowEmpleados').removeClass('active')
    $('#windowReportes').removeClass('active')


    if (document.getElementById(theadActiva) === null){

    }else{
        document.getElementById(theadActiva).style.display="none"
        document.getElementById(tBodyActiva).style.display="none" 
        
    }

    if (document.getElementById(idtheadtabla) === null){

    }else{
        document.getElementById(idtheadtabla).style.display=""
        document.getElementById(idtbodytabla).style.display=""
    }
    

    $(idS).addClass('active')
    theadActiva = idtheadtabla
    tBodyActiva = idtbodytabla

}

//Control del side bar
$(document).ready(function(){
    $('#windowOrdenes').click(()=>{
        $('#title-Seccion-tabla').text('Ordenes Registradas')
        $('#btnAgregarDinamico').text('Agregar Ordenes')
        
        document.getElementById('windowTitulo').innerHTML = `<i class="bi bi-egg-fried"> Ordenes</i> `
        document.getElementById("btnAgregarDinamico").setAttribute("data-bs-target", "#ModalOrdenForm"); 
        ActivarDescativarMenu('#windowOrdenes','idOrdenesThead','idOrdenesBody')
        
    })

    $('#windowProductos').click(()=>{
        $('#title-Seccion-tabla').text('Productos Registrados')
        $('#btnAgregarDinamico').text('Agregar Productos')
        
        document.getElementById('windowTitulo').innerHTML = `<i class="bi bi-box"> Productos</i> `
        document.getElementById("btnAgregarDinamico").setAttribute("data-bs-target", "#ModalProductoForm");
        ActivarDescativarMenu('#windowProductos','ProductosThead','idProductosBody')
        showProductosTablaEncabezado()
        
    })

    $('#windowEmpleados').click(()=>{
        $('#title-Seccion-tabla').text('Empleados Registrados')
        $('#btnAgregarDinamico').text('Agregar Empleados')

        document.getElementById('windowTitulo').innerHTML = `<i class="bi bi-person-rolodex"> Empleados</i> `
        document.getElementById("btnAgregarDinamico").setAttribute("data-bs-target", "#ModalEmpleadoForm");
        ActivarDescativarMenu('#windowEmpleados','empleadosThead','idEmpleadosBody')
        showEmpleadosTablaEncabezado()
        
    })

    $('#windowClientes').click(()=>{
        $('#title-Seccion-tabla').text('Clientes Registrados')
        $('#btnAgregarDinamico').text('Agregar Clientes')

        document.getElementById('windowTitulo').innerHTML = `<i class="bi bi-person-heart"> Clientes</i> `
        document.getElementById("btnAgregarDinamico").setAttribute("data-bs-target", "#ModalClienteForm");
        ActivarDescativarMenu('#windowClientes','clientesThead','idClientesBody')
        showClientesTablaEncabezado()
        
    })

    $('#windowReportes').click(()=>{
        $('#title-Seccion-tabla').text('Reportes Registrados')
        $('#btnAgregarDinamico').text('Agregar Reportes')

        document.getElementById('windowTitulo').innerHTML = `<i class="bi bi-files"> Reportes</i> `

        ActivarDescativarMenu('#windowReportes')
        
    })
})

//Registrar formulario Modal

//#################******************* ORDEN *******************##########################/

let Ordenes=[]
let nO

$(document).ready(function(){
    $('#btnRegistrarOrden').click(()=>{
        nO++
        let orden = {}
        orden.id = 'Orden'+nP
        orden.empleado =  $('#empleadosDataList').val()
        orden.cliente = $('#clienteDataList').val()
        orden.producto = $('#productoDataList').val()

        Ordenes.push(orden)
        showOrdenCards(orden)
    })
})

function showOrdenCards(orden){
    
    let divPrincipal = document.getElementById('divOrdenesCards')


    let divCol = document.createElement('div')
    divCol.setAttribute("class","col-sm-3")
    let divCardBorder = document.createElement('div')
    divCardBorder.setAttribute("class","card border-primary mb-3")
    let divCardHeader = document.createElement('div')
    divCardHeader.setAttribute("class","card-header")
    let divCardBody = document.createElement('div')
    divCardBody.setAttribute("class","card-body text-primary")

    
    divCardBorder.appendChild(divCardHeader)
    divCardBorder.appendChild(divCardBody)
    divCol.appendChild(divCardBorder)
 
    divCardHeader.innerHTML = orden.cliente
    divCardBody.innerHTML = ` <h5 class="card-title">${orden.producto}</h5><p class="card-text">${Productos.find(Element=>Element.nombre===orden.producto).descripcion}</p>`

    divPrincipal.appendChild(divCol)


}

//#################******************* PRODUCTOS *******************##########################/

let Productos=[]
let nP = 0

$(document).ready(function(){
    $('#btnRegistrarProducto').click(()=>{
        nP++
        let producto = {}
        producto.id = 'Alumno'+nP
        producto.nombre =  $('#nombreProducto').val()
        producto.precio = $('#precioProducto').val()
        producto.descripcion = $('#descripcionProducto').val()

        Productos.push(producto)
        showProductosTabla(producto)
    })
})

function showProductosTabla(producto){
    
    let tbodyP = document.getElementById('idProductosBody')

    let trInfProducto = document.createElement('tr')
    trInfProducto.setAttribute('id','producto'+nP)

    let thInfProducto1 = document.createElement('th')
    let thInfProducto2 = document.createElement('th')
    let thInfProducto3 = document.createElement('th')
    let thInfProducto4 = document.createElement('th')
    let thInfProducto5 = document.createElement('th')
    
    trInfProducto.appendChild(thInfProducto1)
    trInfProducto.appendChild(thInfProducto2)
    trInfProducto.appendChild(thInfProducto3)
    trInfProducto.appendChild(thInfProducto4)
    trInfProducto.appendChild(thInfProducto5)

    thInfProducto1.innerHTML = nP
    thInfProducto2.innerHTML = producto.nombre
    thInfProducto3.innerHTML = producto.precio
    thInfProducto4.innerHTML = producto.descripcion
    thInfProducto5.innerHTML = `<i class="bi bi-trash text-danger btn btn-light " aria-hidden="true" id="P${nP}"></i> `

    tbodyP.appendChild(trInfProducto)


}

function showProductosTablaEncabezado(){
    
    //Encabezado de la tabla
    
    if(document.getElementById('ProductosThead') === null) {
        // element is not part of the DOM
        
        let theadP = document.createElement('thead')
        let trP1 = document.createElement('tr')
        trP1.setAttribute('id','ProductosThead')

        let thP1 = document.createElement('th')
        let thP2 = document.createElement('th')
        let thP3 = document.createElement('th')
        let thP4 = document.createElement('th')
        let thP5 = document.createElement('th')

        let tbodyP =  document.createElement('tbody')
        tbodyP.setAttribute('id','idProductosBody')

        theadP.appendChild(trP1)
        trP1.appendChild(thP1)
        trP1.appendChild(thP2)
        trP1.appendChild(thP3)
        trP1.appendChild(thP4)
        trP1.appendChild(thP5)

        thP1.innerHTML='#'
        thP2.innerHTML='Producto'
        thP3.innerHTML='Precio'
        thP4.innerHTML='Descripciòn'
        thP5.innerHTML='Borrar'

        document.getElementById('showInformacionTabla').appendChild(theadP)
        document.getElementById('showInformacionTabla').appendChild(tbodyP)


    }

    

}



//Funcion para cargar el documento de cliente a traves de promesas
$(document).ready(function(){
    let element = document.getElementById('cargarProductosFromFileAwait')
    element.addEventListener('click',async ()=>{
        
            const response = await fetch('http://localhost/PollosHermanos/productos.json', {
                method: 'POST', // or 'PUT'
                headers: {"Content-Type": "application/json"}
            })

            if (!response.ok) {
                alert('Oops! La carga no esta disponible')
            }
            else {
                const datosProducto = await response.json();
                    datosProducto.forEach((producto)=>{
                        nP++
                        Productos.push(producto)
                        showProductosTabla(producto)
                    })
            }  
        
    })
})

//#################******************* EMPLEADOS *******************##########################/
let Empleados=[]
let nE = 0

$(document).ready(function(){
    $('#btnRegistrarEmpleado').click(()=>{
        nE++
        let empleado = {}
        empleado.id = 'Empleado'+nE
        empleado.nombre =  $('#nombreEmpleado').val()
        empleado.edad = $('#edadempleado').val()
        empleado.fechaNacimiento = $('#fechaNacimientoEmpleado').val()
        empleado.email = $('#emailEmpleado').val()
        if ($('#sexoMasculino:checked').val()=='on')
            empleado.sexo='Masculino'
        else
            empleado.sexo='Femenino'
        empleado.actividad = $('#actividadEmpleado').val()

        Empleados.push(empleado)
        showEmpleadosTabla(empleado)
    })
})

function showEmpleadosTabla(empleado){
  
    let tbodyE = document.getElementById('idEmpleadosBody')

    let trInfEmpleado = document.createElement('tr')
    trInfEmpleado.setAttribute('id','empleado'+nE)

    let thInfEmpleado1 = document.createElement('th')
    let thInfEmpleado2 = document.createElement('th')
    let thInfEmpleado3 = document.createElement('th')
    let thInfEmpleado4 = document.createElement('th')
    let thInfEmpleado5 = document.createElement('th')
    let thInfEmpleado6 = document.createElement('th')

    
    trInfEmpleado.appendChild(thInfEmpleado1)
    trInfEmpleado.appendChild(thInfEmpleado2)
    trInfEmpleado.appendChild(thInfEmpleado3)
    trInfEmpleado.appendChild(thInfEmpleado4)
    trInfEmpleado.appendChild(thInfEmpleado5)
    trInfEmpleado.appendChild(thInfEmpleado6)

    thInfEmpleado1.innerHTML = nE
    thInfEmpleado2.innerHTML = empleado.nombre
    thInfEmpleado3.innerHTML = empleado.fechaNacimiento
    thInfEmpleado4.innerHTML = empleado.email
    thInfEmpleado5.innerHTML = empleado.sexo
    thInfEmpleado6.innerHTML = empleado.actividad

    tbodyE.appendChild(trInfEmpleado)


}


function showEmpleadosTablaEncabezado(){
    
    //Encabezado de la tabla
    
    if(document.getElementById('empleadosThead') === null) {
        // element is not part of the DOM
        
        let theadE = document.createElement('thead')
        let trE1 = document.createElement('tr')
        trE1.setAttribute('id','empleadosThead')

        let thE1 = document.createElement('th')
        let thE2 = document.createElement('th')
        let thE3 = document.createElement('th')
        let thE4 = document.createElement('th')
        let thE5 = document.createElement('th')
        let thE6 = document.createElement('th')

        let tbodyE =  document.createElement('tbody')
        tbodyE.setAttribute('id','idEmpleadosBody')

        theadE.appendChild(trE1)
        trE1.appendChild(thE1)
        trE1.appendChild(thE2)
        trE1.appendChild(thE3)
        trE1.appendChild(thE4)
        trE1.appendChild(thE5)
        trE1.appendChild(thE6)

        thE1.innerHTML='#'
        thE2.innerHTML='Nombre Empleado'
        thE3.innerHTML='Fecha de nacimiento'
        thE4.innerHTML='Email'
        thE5.innerHTML='Sexo'
        thE6.innerHTML='Actividad'

        document.getElementById('showInformacionTabla').appendChild(theadE)
        document.getElementById('showInformacionTabla').appendChild(tbodyE)
    }
}

$(document).ready(function(){
    let element = document.getElementById('cargarEmpleadosFromFileAwait')
    element.addEventListener('click',async ()=>{
        
            const response = await fetch('http://localhost/PollosHermanos/empleados.json', {
                method: 'POST', // or 'PUT'
                headers: {"Content-Type": "application/json"}
            })

            if (!response.ok) {
                alert('Oops! La carga no esta disponible')
            }
            else {
                const datosEmpleado = await response.json();
                    datosEmpleado.forEach((empleado)=>{
                        nE++
                        Empleados.push(empleado)
                        showEmpleadosTabla(empleado)
                    })
            }  
        
    })
})



//#################******************* CLIENTES *******************##########################/
let Clientes=[]
let nC = 0


$(document).ready(function(){
    $('#btnRegistrarCliente').click(()=>{
        nC++
        let cliente = {}
        cliente.id = 'Cliente'+nP
        cliente.nombre =  $('#nombreCliente').val()
        cliente.fechaNacimiento = $('#fechaNacimientoCliente').val()
        cliente.email = $('#emailCliente').val()

        Clientes.push(cliente)
        showClientesTabla(cliente)
    })
})

function showClientesTabla(cliente){

    let tbodyC = document.getElementById('idClientesBody')

    let trInfCliente = document.createElement('tr')
    trInfCliente.setAttribute('id','cliente'+nP)

    let thInfCliente1 = document.createElement('th')
    let thInfCliente2 = document.createElement('th')
    let thInfCliente3 = document.createElement('th')
    let thInfCliente4 = document.createElement('th')

    
    trInfCliente.appendChild(thInfCliente1)
    trInfCliente.appendChild(thInfCliente2)
    trInfCliente.appendChild(thInfCliente3)
    trInfCliente.appendChild(thInfCliente4)

    thInfCliente1.innerHTML = nC
    thInfCliente2.innerHTML = cliente.nombre
    thInfCliente3.innerHTML = cliente.fechaNacimiento
    thInfCliente4.innerHTML = cliente.email

    tbodyC.appendChild(trInfCliente)


}

function showClientesTablaEncabezado(){
    
    //Encabezado de la tabla
    
    if(document.getElementById('clientesThead') === null) {
        // element is not part of the DOM
        
        let theadC = document.createElement('thead')
        let trC1 = document.createElement('tr')
        trC1.setAttribute('id','clientesThead')

        let thC1 = document.createElement('th')
        let thC2 = document.createElement('th')
        let thC3 = document.createElement('th')
        let thC4 = document.createElement('th')

        let tbodyC =  document.createElement('tbody')
        tbodyC.setAttribute('id','idClientesBody')

        theadC.appendChild(trC1)
        trC1.appendChild(thC1)
        trC1.appendChild(thC2)
        trC1.appendChild(thC3)
        trC1.appendChild(thC4)

        thC1.innerHTML='#'
        thC2.innerHTML='Nombre'
        thC3.innerHTML='Fecha de nacimiento'
        thC4.innerHTML='Email'

        document.getElementById('showInformacionTabla').appendChild(theadC)
        document.getElementById('showInformacionTabla').appendChild(tbodyC)


    }
}

//Funcion para cargar el documento de cliente a traves de promesas
$(document).ready(function(){
    let element = document.getElementById('cargarClientesFromFilePromesa')
    element.addEventListener('click',()=>{
        window.fetch('http://localhost/PollosHermanos/clientes.json',{method: 'GET',headers:{"Accept": "application/json"}})
        .then((respuesta)=>respuesta.json())
        .then((data)=>{
            data.forEach((cliente)=>{
                nC++
                Clientes.push(cliente)
                showClientesTabla(cliente)
            })
        })
    })
})



//DataList
$(document).ready(function(){
    $('#btnAgregarDinamico').click(()=>{
        var x = document.getElementById("empleadoDatalistOptions");
        var clientel = document.getElementById("clienteDatalistOptions");
        var productol = document.getElementById("productoDatalistOptions");
        let countn =0

        //Eliminasmos el datalist 
        let nodesE =  x.childNodes
        countn = x.childNodes.length
        for (let i = 0; i < countn; i++) { 
                    x.removeChild(nodesE[i])  
        }  
        //agregamos el nuevo datalist
        Empleados.forEach((empleado)=>{
            var option = new Option("", empleado.nombre);
            x.appendChild(option);
        })


        //Clientes
         countn =0

        let nodesC =  clientel.childNodes
        countn = nodesC.length
        for (let i = 0; i < countn; i++) { 
            clientel.removeChild(nodesC[i])  
        }  
        //agregamos el nuevo datalist
        Clientes.forEach((cliente)=>{
            var option = new Option("", cliente.nombre);
            clientel.appendChild(option);
        })


        //Productos
         countn =0

        let nodesP =  productol.childNodes
        countn = nodesP.length
        for (let i = 0; i < countn; i++) { 
            productol.removeChild(nodesP[i])  
        }  
        //agregamos el nuevo datalist
        Productos.forEach((producto)=>{
            var option = new Option("", producto.nombre);
            productol.appendChild(option);
        })

    })
})