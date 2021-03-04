<template>
    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <!-- ===== Page-Container ===== -->
        <div class="container-fluid">
            <div class="white-box">
                <div class="table-responsive">
                    <table id="report"  class="table" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>CD</th>
                                <th>Corte</th>
                                <th>CT</th>
                                <th>Tribunal</th>
                                <th>Completados</th>
                                <th>Detalles</th>
                                <th>Estado</th>                 
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>CD</th>
                                <th>Corte</th>                              
                                <th>CT</th>
                                <th>Tribunal</th>
                                <th>Completados</th>  
                                <th>Detalles</th>
                                <th>Estado</th>   
                            </tr>
                        </tfoot>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>        
        <!-- ===== Page-Container-End ===== -->
        <footer class="footer t-a-c">
            Poder Judicial
        </footer>
    </div>    
</template>
<script>
import { url } from '@/config/api'
import store from 'store'
import { mapState } from 'vuex'

export default {
  name: 'Inicio',
  data () {
      return {
          value: 0,
          datatable: '',
          formulario: {
            1: 'Ingresos',
            3: 'Resoluciones',
            5: 'Terminos',
            6: 'Presupuestos',
            7: 'Presentaciones',
            8: 'Dotaciones',
            9: 'Administrativa',
            10: 'Academia',
            14: 'Concursos',
            20: 'Audiencias'
        }           
      }
  },
  created(){
  },
  mounted () {
   this.datatable = $('#report').DataTable({
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'excel'
        ],
        'bPaginate': true,
        // "lengthMenu": [[10, 100, -1], [10, 100, "Todos"]],
        'bLengthChange': true,
        // "bFilter": true,
        'bInfo': true,
        'bAutoWidth': false,
        'pageResize': true,
        'oLanguage': {
          'sProcessing': 'Procesando...',
          'sLengthMenu': '_MENU_ Mostrar registros',
          'sZeroRecords': 'No se encontraron resultados',
          'sEmptyTable': 'Ningún dato disponible en esta tabla',
          'sInfo': 'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
          'sInfoEmpty': 'Mostrando registros del 0 al 0 de un total de 0 registros',
          'sInfoFiltered': '(filtrado de un total de _MAX_ registros)',
          'sInfoPostFix': '',
          'sSearch': 'Buscar: ',
          'sUrl': '',
          'sInfoThousands': ',',
          'sLoadingRecords': 'Cargando...',
          'oPaginate': {
            'sFirst': 'Primero',
            'sLast': 'Último',
            'sNext': 'Siguiente',
            'sPrevious': 'Anterior'
          },
          'oAria': {
            'sSortAscending': ': Activar para ordenar la columna de manera ascendente',
            'sSortDescending': ': Activar para ordenar la columna de manera descendente'
          },
          'buttons': {
            'copyTitle': 'Copiado en el PortaPapeles',
            'copySuccess': {
              _: '%d lineas copiadas',
              1: '1 lineas copiadas'
            }
          }
        }
    })      

    let urlRep = url + '/reportes'
    let ano = 2020

    const axios = require('axios')

      const getData = async urlRep => {
        try {
          const response = await axios.get(urlRep, {
            params: {
              ano: ano
            }
          })

          const data = response.data

          Object.values(data.data.reportes).map((type) => {
            
            let cod_corte    = type.Cortes[0].cod_corte
            let gls_corte    = type.Cortes[0].gls_corte
            let gls_tribunal = type.gls_tribunal
            let cod_tribunal = type.cod_tribunal      
            let cantidad = String(type.Observacion.length)
            let estado = 'No Enviado'
            let gls = []
            
            if(type.Observacion.length >= 1){
              estado = (type.Observacion[0].observacion[0].estado_obervacion_id == 2 || type.Observacion[0].observacion[0].estado_observacion_id == 2) ? 'Enviado':'No Enviado'
            }
            

            Object.values(type.Observacion).map((obs) => {
                gls.push(' '+this.formulario[obs.formulario_id])
            });

            this.datatable.row.add([cod_corte,gls_corte,cod_tribunal,gls_tribunal,cantidad,gls,estado])
            
          })

          this.datatable.draw()

        } catch (error) {
          console.log(error)
        }
      }

      getData(urlRep)

    // this.datatable.row.add(['Dato', 'Dato 2', 'Dato 3', 'Dato 3'])  
         
  }  
}
</script>
