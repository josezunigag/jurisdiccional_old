<template>
    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="row m-0">
            <div class="col-md-3 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">{{cant_registros.toLocaleString()}}</h3>
                        <p class="info-text font-12">Total Ingresos  Materia</p>
                        <!-- <span class="hr-line"></span> -->
                        <!-- <p class="info-ot font-15">Target<span class="label label-rounded label-success">300</span></p> -->
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-comment-text-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">{{prom_crecimiento}}%</h3>
                        <p class="info-text font-12">Comparativo 2017</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-coin"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">&#36;175.195.627</h3>
                        <p class="info-text font-12">PRESUPUESTO ASIGNADO</p>
                        <!-- <span class="hr-line"></span> -->
                        <!-- <p class="info-ot font-15">Total Pending<span class="label label-rounded label-danger">154</span></p> -->
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-coin"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">&#36;175.195.627</h3>
                        <p class="info-text font-12">PRESUPUESTO UTILIZADO</p>
                        <!-- <span class="hr-line"></span> -->
                        <!-- <p class="info-ot font-15">Total Pending<span class="label label-rounded label-danger">154</span></p> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- ===== Page-Container ===== -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 col-sm-12">
                    <div class="white-box stat-widget">
                        <div class="row">
                            <div class="col-md-3 col-sm-3">
                                <h4 class="box-title">Ingresos de Causas</h4>
                            </div>
                            <div class="col-md-9 col-sm-9">
                                <select class="custom-select col-sm-8">
                                    <option class="custom-select col-sm-8" value="" v-for="glosa in glosa_arreglo" :key="glosa">{{glosa}}</option>
                                    <!-- <option selected value="0">Feb 04 - Mar 03</option>
                                    <option value="1">Mar 04 - Apr 03</option>
                                    <option value="2">Apr 04 - May 03</option>
                                    <option value="3">May 04 - Jun 03</option> -->
                                </select>
                                <!-- <ul class="list-inline">
                                    <li>
                                        <h6 class="font-15"><i class="fa fa-circle m-r-5 text-success"></i>2017</h6>
                                    </li>
                                    <li>
                                        <h6 class="font-15"><i class="fa fa-circle m-r-5 text-primary"></i>2018</h6>
                                    </li>
                                </ul> -->
                            </div>
                            <div class="stat chart-pos"></div>
                        </div>
                    </div>
                </div>
                <Visualizacion />
            </div>  
                <div class="table-responsive">
                <table id="myTable"  class="table" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Año</th>
                            <th>Tipo Causa</th>
                            <th>Materia</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Año</th>
                            <th>Tipo Causa</th>
                            <th>Materia</th>
                            <th>Cantidad</th>
                        </tr>
                    </tfoot>
                    <tbody>
                    </tbody>
                </table>
            </div>                   
        </div>
        <!-- ===== Page-Container-End ===== -->
        <footer class="footer t-a-c">
            Poder Judicial
        </footer>
    </div>
    <!-- ===== Page-Content-End ===== -->
    
</template>
<script>
import Visualizacion from '@/components/Visualizacion'
import store from 'store'

export default {
   name: 'IngresosMateria',
   data() {
        return {
            cant_registros: 0,
            prom_crecimiento: 0,
            glosa_arreglo: [],
            seriesbar:[],
            chart1: '',
            datatable:  '',
            local: store.get('user')                           
        }
    },
    components:{
		Visualizacion
    },    
    mounted() {

        this.chart1 = new Chartist.Line('.stat', {
                            labels: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                            // series: []
                        }, {
                            high: 600,
                            low: 0,
                            height: '278px',
                            showArea: false,
                            fullWidth: false,
                            axisY: {
                                onlyInteger: true,
                                showGrid: false,
                            },
                            plugins: [
                                Chartist.plugins.tooltip()
                            ]
                    });  

        this.datatable = $('#myTable').DataTable({                         
                            dom: 'Bfrtip',
                            buttons: [
                                'copy', 'csv', 'excel', 'pdf'
                            ],                
                            "bPaginate": true,    
                            // "lengthMenu": [[10, 100, -1], [10, 100, "Todos"]],                       
                            "bLengthChange": true,
                            // "bFilter": true,
                            "bInfo": true,
                            "bAutoWidth": false, 
                            "pageResize": true,          
                            "oLanguage": {
                                    "sProcessing":     "Procesando...",
                                    "sLengthMenu":     "_MENU_ Mostrar registros",
                                    "sZeroRecords":    "No se encontraron resultados",
                                    "sEmptyTable":     "Ningún dato disponible en esta tabla",
                                    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                                    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                                    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                                    "sInfoPostFix":    "",
                                    "sSearch":         "Buscar: ",
                                    "sUrl":            "",
                                    "sInfoThousands":  ",",
                                    "sLoadingRecords": "Cargando...",
                                    "oPaginate": {
                                            "sFirst":    "Primero",
                                            "sLast":     "Último",
                                            "sNext":     "Siguiente",
                                            "sPrevious": "Anterior"
                                            },
                                    "oAria": {
                                            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                                            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                                    },               
                                    "buttons": {
                                            "copyTitle": 'Copiado en el PortaPapeles',
                                            "copySuccess": {
                                                _: '%d lineas copiadas',
                                                1: '1 lineas copiadas'
                                            }
                                    }                                    
                            }    
                        });                  

        

        // Let's put a sequence number aside so we can use it in the event callbacks
        var seq = 0,
        delays = 5,
        durations = 300;

        // Once the chart is fully created we reset the sequence
        this.chart1.on('created', function() {
            seq = 0;
            });


            // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
            this.chart1.on('draw', function(data) {
            seq++;

            if(data.type === 'line') {
                    // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                    data.element.animate({
                        opacity: {
                            // The delay when we like to start the animation
                            begin: seq * delays + 1000,
                            // Duration of the animation
                            dur: durations,
                            // The value where the animation should start
                            from: 0,
                            // The value where it should end
                            to: 1
                        }                 
                    });
            }
            else if(data.type === 'point') {
                data.element.animate({
                    x1: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: 'easeOutQuart'
                    },
                    x2: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: 'easeOutQuart'
                    },
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'easeOutQuart'
                    }               
                });         
            }
        });             

		const axios = require("axios");
        const url = "http://localhost:3000/materia";
        var cod_tribunal = this.local.cod_tribunal;

		const getData = async url => {
		try {
            const response = await axios.get(url,{
                params: {
                cod_tribunal: cod_tribunal
                }  
            });

			const data = response.data;

            var glosa = '';
            var arreglo = [0,0,0,0,0,0,0,0,0,0,0,0];

            Object.values(data.data.materia_group).map((type) => {
                this.datatable.row.add([type._id.ano,type._id.gls_tipo_causa,type._id.glosa_materia,type.count.toLocaleString()]);
                this.cant_registros      = this.cant_registros + type.count;
            })

            this.datatable.draw();            

            Object.values(data.data.materia).map((type) => {

                if (glosa != type._id.glosa_materia && glosa != ''){
                    this.seriesbar.push(arreglo);
                    arreglo = [0,0,0,0,0,0,0,0,0,0,0,0];
                }

                if (glosa != type._id.glosa_materia){
                    this.glosa_arreglo.push(type._id.glosa_materia);
                }                
              
                glosa = type._id.glosa_materia;

                arreglo[--type._id.mes] = type.count;
            })

            this.chart1.update({

                       labels: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                       series: this.seriesbar
            });
    
		} catch (error) {
			console.log(error);
		}
		};

		getData(url);	

        // var chart1 =    

        $(function() {
            "use strict";       

        /* ===== Knob chart initialization ===== */

        $(function() {

            $('.knob').each(function() {

                var elm = $(this);
                var perc = elm.attr("value");

                elm.knob();

                $({ value: 0 }).animate({ value: perc }, {
                    duration: 1000,
                    easing: 'swing',
                    progress: function() {
                        elm.val(Math.ceil(this.value)).trigger('change')
                    }
                });
            });
        });

            $("#earning").easyPieChart({
                barColor: "#4da8db",
                trackColor: !1,
                scaleColor: !1,
                scaleLength: 0,
                lineCap: "square",
                lineWidth: 12,
                size: 96,
                rotate: 180,
                animate: { duration: 2e3, enabled: !0 }
            });
            $("#pending").easyPieChart({
                barColor: "#4db7df",
                trackColor: !1,
                scaleColor: !1,
                scaleLength: 0,
                lineCap: "square",
                lineWidth: 12,
                size: 74,
                rotate: 180,
                animate: { duration: 2e3, enabled: !0 }
            });
            $("#booking").easyPieChart({
                barColor: "#4ccfe4",
                trackColor: !1,
                scaleColor: !1,
                scaleLength: 0,
                lineCap: "square",
                lineWidth: 12,
                size: 50,
                rotate: 180,
                animate: { duration: 2e3, enabled: !0 }
            });
        });

    } 
}
</script>        