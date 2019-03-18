<template>
    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="row m-0">
            <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">{{cant_registros.toLocaleString()}}</h3>
                        <p class="info-text font-12">Total Ingresos  Materia</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">{{cant_registros_ant}}</h3>
                        <p class="info-text font-12">Comparativo 2017</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="icon-graph"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">{{prom_crecimiento}}%</h3>
                        <p class="info-text font-12">% {{textocrecimiento}}</p>
                     </div>
                </div>
            </div>   
        </div>
        <!-- ===== Page-Container ===== -->
        <div class="container-fluid">    
            <div class="white-box">
                <ul class="nav customtab2 nav-tabs" role="tablist" id="myTabs">
                    <li role="presentation" class="active"><a href="#Grafico" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs">Grafico</span></a></li>
                    <li role="presentation" class=""><a href="#Observacion" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Observacion</span></a></li>
                    <li role="presentation" class=""><a href="#Criterio" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Criterios</span></a></li>
                </ul>  
            </div>
            <div class="tab-content" id="myTabContent">
                <div aria-labelledby="home-tab" id="Observacion" class="tab-pane fade" role="tabpanel">
                    <Observacion/>
                </div>
                <div aria-labelledby="home-tab" id="Grafico" class="tab-pane fade" role="tabpanel">
                </div>  
                    <div aria-labelledby="home-tab" id="Criterio" class="tab-pane fade" role="tabpanel">                       
                           <div class="task-list">
                                <ul class="list-group">
                                    <li class="list-group-item bl-info">
                                        <div>
                                            <i class="fa fa-bank fa-fw"></i>
                                            <label for="c7">
                                                <span class="font-16">Periodo: </span>
                                            </label>
                                            <h6 class="p-l-30 font-bold">2018</h6>
                                        </div>
                                    </li>
                                    <li class="list-group-item bl-info">
                                        <div >
                                            <i class="fa fa-bar-chart-o fa-fw"></i>
                                            <label for="c8">
                                                <span class="font-16">Origen: Sistema de Indicadores Quantum</span>
                                            </label>
                                            <h6 class="p-l-30 font-bold"><a href="http://www.quantum.pjud/">Quantum</a></h6>
                                        </div>
                                    </li>
                                    <li class="list-group-item bl-info">
                                        <div>
                                            <i class="fa fa-filter fa-fw"></i>
                                            <label for="c9">
                                                <span class="font-16">Interpretación de la Información</span>
                                            </label>
                                            <h6 class="p-l-30 font-bold">Cantidad de Ingresos mensuales por materia,Información almacenada en el sistema de gestion respectivo durante el 2018.</h6>
                                        </div>
                                    </li>
                                    <li class="list-group-item bl-info">
                                        <div >
                                            <i class="fa fa-refresh fa-fw"></i>
                                            <label for="c10">
                                                <span class="font-16">Ciclo de Analisis</span>
                                            </label>
                                            <h6 class="p-l-30 font-bold">Se refleja la información extraída del sistema de origen el 01 de cada mes, que es almacenada en el sistema de Estadísticas Tribunales.</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>        
                    </div>                                    
            </div>                             
            <div class="row">
                <div class="col-md-8 col-sm-12">
                    <div class="white-box stat-widget">
                        <div class="stat chart-pos"></div>       
                    </div>
                </div>
                <Visualizacion />    
                 <div class="col-md-12 col-sm-12">          
                    <div class="white-box col-md-12 col-sm-12">
                        <label for="c10">
                            <span class="font-16">Filtro</span>
                        </label>                        
                        <ul class="list-inline">
                            <li v-for="(glosa,index) in glosa_arreglo" :key="glosa"  > 
                                <h6 class="font-12" @click="indicadores(index)" ><i class=" icon-arrow-down text-success btn" ></i>{{glosa}}</h6>
                            </li>
                        </ul>
                    </div>     
                </div>           
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
import {url} from '@/config/api'
import store from 'store'
import Observacion from '@/views/Ingresos/Observacion'
import Visualizacion from '@/components/Visualizacion'


export default {
   name: 'IngresosMateria',
   data() {
        return {
            cant_registros: 0,
            cant_registros_ant: 0,
            prom_crecimiento: 0,
            textocrecimiento: '',            
            glosa_arreglo: [],
            seriesbar:[],
            chart1: '',
            datatable:  '',
            local: store.get('user'),
            competencia_id: 0,
            cod_corte: 0,
            cod_tribunal: 0,                                       
        }
    },  
    components:{
        Observacion,
		Visualizacion
    }, 
    created() {       
        // if (typeof this.$route.params.competencia === 'undefined') {
        //     this.competencia_id = this.local.competencia_id;
        // } else {
        //     this.competencia_id = this.competencias[this.$route.params.competencia]
        // }             
    },        
    mounted() {
        this.change()
        this.chart1 = new Chartist.Line('.stat', {
                            labels: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                            // series: []
                        }, {
                            // high: 600,
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

	
        let   url_mat   = "";
        
        this.cod_corte      = this.local.cod_corte;
        this.cod_tribunal   = this.local.cod_tribunal;


        const axios = require("axios");

        switch(this.competencia_id) {
        case 5:
             url_mat = url+"/materiapenal"
            break;
        default:
             url_mat = url+"/materia"
            break;
        }     

     

		const getData = async url_mat => {
		try {
            const response = await axios.get(url_mat,{
                params: {
                    competencia_id: this.competencia_id,
                    cod_corte: this.cod_corte, 
                    cod_tribunal: this.cod_tribunal,
                }  
            });

			const data = response.data;

            console.log(url_mat,data);

            var glosa = '';
            var arreglo = [0,0,0,0,0,0,0,0,0,0,0,0];

            Object.values(data.data.materia_group).map((type) => {
                this.datatable.row.add([type._id.ano,type._id.gls_tipo_causa,type._id.glosa_materia,type.count.toLocaleString()]);
                this.cant_registros      = this.cant_registros + type.count;
            })

            Object.values(data.data.materia_ant).map((type) => {
                this.cant_registros_ant = this.cant_registros_ant + type.count;
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

            this.calcularCrecimiento();

            this.chart1.update({

                       labels: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                       series: this.seriesbar
            });
    
		} catch (error) {
			console.log(error);
		}
		};

		getData(url_mat);	

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

    },
    methods: {
        indicadores(index){

            const $filter = $('g.ct-series.ct-series-'+String.fromCharCode(97 + index));

            $filter.toggle()

        },
        calcularCrecimiento(){
            this.prom_crecimiento = (((this.cant_registros - this.cant_registros_ant) / this.cant_registros_ant) * 100).toFixed(2); 
            
            if(this.prom_crecimiento >= 0){
                this.textocrecimiento = 'Crecimiento'
            }else{
                this.textocrecimiento = 'Decrecimiento'
            }
            
            return this.prom_crecimiento
        },
        change(){
            if (typeof this.$route.params.competencia === 'undefined') {
                this.competencia_id = this.local.competencia_id[0];
            } else {
                this.competencia_id = this.competencias[this.$route.params.competencia]
            }                     
        }                
    }
}
</script>        