<template>
    <div class="page-wrapper">
        <div class="container-fluid">
        <!-- ===== Page-Container ===== -->
            <!-- <div class="white-box"> -->
            <div class="row">
                <div class="row m-0">
                    <div class="col-md-3 col-sm-6 info-box">
                        <div class="media">
                            <div class="media-left">
                                <span class="icoleaf bg-primary text-white"><i class="mdi mdi-coin"></i></span>
                            </div>
                            <div class="media-body">
                                <h3 class="info-count text-blue">{{monto_asignado}}</h3>
                                <p class="info-text font-12">Presupuesto Asignado</p>
                                <!-- <span class="hr-line"></span> -->
                                <!-- <p class="info-ot font-15">Target<span class="label label-rounded label-success">300</span></p> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 info-box">
                        <div class="media">
                            <div class="media-left">
                                <span class="icoleaf bg-primary text-white"><i class="mdi mdi-coin"></i></span>
                            </div>
                            <div class="media-body">
                                <h3 class="info-count text-blue">{{monto_utilizado}}</h3>
                                <p class="info-text font-12">Presupuesto Utilizado</p>
                                <!-- <span class="hr-line"></span> -->
                                <!-- <p class="info-ot font-15">Total Pending<span class="label label-rounded label-danger">154</span></p> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 info-box">
                        <div class="media">
                            <div class="media-left">
                                <span class="icoleaf bg-primary text-white"><i class="icon-graph"></i></span>
                            </div>
                            <div class="media-body">
                                <h3 class="info-count text-blue">{{utilizado}}%</h3>
                                <p class="info-text font-12">% Utilizado</p>
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
                                <h3 class="info-count text-blue">3.15%</h3>
                                <p class="info-text font-12">% Creciemiento 2018</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="container-fluid">                 
                <ul class="nav customtab2 nav-tabs" role="tablist" id="myTabs">
                    <li role="presentation" class="active"><a href="#Grafico" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs">Grafico</span></a></li>
                    <li role="presentation" class=""><a href="#Observacion" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Observacion</span></a></li>
                    <li role="presentation" class=""><a href="#Criterio" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Criterios</span></a></li>
                </ul>  
                <div class="tab-content" id="myTabContent">
                    <div aria-labelledby="home-tab" id="Observacion" class="tab-pane fade" role="tabpanel">
                    </div>
                    <div aria-labelledby="home-tab" id="Grafico" class="tab-pane fade" role="tabpanel">
                    </div>     
                    <div aria-labelledby="home-tab" id="Criterio" class="tab-pane fade" role="tabpanel">                              
                    </div>                             
                </div>                                                                   
            </div> 
            </div>
            <!-- </div> -->
            <Highcharts :options="options" />  
        </div>

        <!-- ===== Page-Container-End ===== -->
        <footer class="footer t-a-c">
            Poder Judicial
        </footer>
    </div>    
</template>
<script>
import store from 'store'   
export default {
    name: 'PresupuestosTribunales',
   data() {
        return {
            local: store.get('user'),
            competencia_id: 0,
            cod_corte: 0,
            cod_tribunal: 0,
            monto_asignado: 0,            
            monto_utilizado: 0,
            utilizado: 0,
            options: {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Presupuesto Asignado Ultimos 4 años'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Millones'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                    }
                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> del total<br/>'
            },
            series: []
            
            },                                                
        }
    },
    components:{
        // Observacion,
    }, 
    mounted() {
        this.competencia_id = this.local.competencia_id;
        this.cod_corte      = this.local.cod_corte;
        this.cod_tribunal   = this.local.cod_tribunal;

        const axios = require("axios");   
        const url = "http://localhost:3000/presupuestos";

        const getData = async url => {
            
            try {

            const response = await axios.get(url,{
                    params: {
                        competencia_id: this.competencia_id,
                        cod_corte: this.cod_corte, 
                        cod_tribunal: this.cod_tribunal,
                        ano: 2015,
                    }  
                });
                
                const arreglo = []
                const point   = -0.2

                Object.values(response.data.data.presupuestos).map((type) => {

                        this.monto_asignado   = type.monto_asignado.toLocaleString()
                        this.monto_utilizado  = type.monto_utilizado.toLocaleString()
                        this.utilizado      = ((type.monto_utilizado * 100 ) / type.monto_asignado).toFixed(2); 
                        this.options.series.push({name: 'Monto Asignado '+type.ano,
                                                  data: [type.monto_asignado],
                                                  visible: true});
                })  
                console.log(arreglo);
                // this.options.series.push(arreglo);
                
              
            } catch (error) {
                console.log(error);
            }            
        } 
        getData(url);        
    }     
}
</script>
