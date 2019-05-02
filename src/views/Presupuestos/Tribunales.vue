<template>
    <div class="page-wrapper">
        <div class="container-fluid">
        <!-- ===== Page-Container ===== -->
            <div class="row">
                <div class="row m-0">
                    <div class="col-md-3 col-sm-6 info-box">
                        <div class="media">
                            <div class="media-left">
                                <span class="icoleaf bg-primary text-white"><i class="mdi mdi-coin"></i></span>
                            </div>
                            <div class="media-body">
                                <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='monto_asignado' :duration='1000'  separator="."></countTo></h3>
                                <p class="info-text font-12">Presupuesto Asignado</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 info-box">
                        <div class="media">
                            <div class="media-left">
                                <span class="icoleaf bg-primary text-white"><i class="mdi mdi-coin"></i></span>
                            </div>
                            <div class="media-body">
                                <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='monto_utilizado' :duration='1000'  separator="."></countTo></h3>
                                <p class="info-text font-12">Presupuesto Utilizado</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 info-box">
                        <div class="media">
                            <div class="media-left">
                                <span class="icoleaf bg-primary text-white"><i class="icon-graph"></i></span>
                            </div>
                            <div class="media-body">
                                <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='utilizado' :duration='1000'  separator="." :decimals="2"></countTo>%</h3>
                                <p class="info-text font-12">% Utilizado</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 info-box">
                        <div class="media">
                            <div class="media-left">
                                <span class="icoleaf bg-primary text-white"><i class="mdi mdi-coin"></i></span>
                            </div>
                            <div class="media-body">
                                <h3 class="info-count text-blue"><countTo :startVal='0' :endVal='crecimiento' :duration='1000'  separator="." :decimals="2"></countTo>%</h3>
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
                    <li class="pull-right"><button class="btn btn-info" @click="crear()" >Generar PDF</button></li>
                </ul>  
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
                                                <span class="font-16">Origen: Información registrada en el sistema CGU durante el periodo 2018</span>
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
                                            <h6 class="p-l-30 font-bold">El crecimiento es comparado entre los periodo 2017 y 2018</h6>
                                        </div>
                                    </li>
                                    <li class="list-group-item bl-info">
                                        <div >
                                            <i class="fa fa-refresh fa-fw"></i>
                                            <label for="c10">
                                                <span class="font-16">Ciclo de Analisis</span>
                                            </label>
                                            <h6 class="p-l-30 font-bold">Información extraída a 27 Febrero 2019</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>                                                       
                    </div>                             
                </div>                                                                   
            </div> 
            </div>
            <div class="PresupuestosAdd"> 
                <Highcharts :options="options" style="margin: 0 auto"/>  
            </div>
        </div>
        <!-- ===== Page-Container-End ===== -->
        <footer class="footer t-a-c">
            Poder Judicial
        </footer>
    </div>    
</template>
<script>
import countTo from 'vue-count-to';
import {url} from '@/config/api'
import store from 'store'   
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Observacion from '@/views/Presupuestos/Observacion'
export default {
   name: 'PresupuestosTribunales',
   data() {
        return {
            local: store.get('user'),
            competencia_id: 0,
            cod_corte: 0,
            cod_tribunal: 0,
            monto_asignado: 0, 
            monto_asignado_ant: 0,           
            monto_utilizado: 0,
            crecimiento: 0,
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
                enabled: true
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            return '$'+this.y.toLocaleString()
                        }
                    }
                }
            },
            credits: {
                enabled: false
            },       
            tooltip: {
                formatter: function () {
                    return 'El Valor <b>' + this.series.name +
                        '</b> es <b>' + this.y.toLocaleString() + '</b>';
                }                
            },
            series: []
            
            },                                                
        }
    },    
    components:{
        countTo,
        Observacion,
    },    
    mounted() {

        var url_pre = url+"/presupuestos"; 
        this.competencia_id = this.setCompetencia()
        this.cod_corte      = this.local.cod_corte;
        this.cod_tribunal   = this.local.cod_tribunal;

        const axios = require("axios");   

        const getData = async url_pre => {
            
            try {

            const response = await axios.get(url_pre,{
                    params: {
                        competencia_id: this.competencia_id,
                        cod_corte: this.cod_corte, 
                        cod_tribunal: this.cod_tribunal,
                        ano: 2015,
                    }  
                });
                
                const arreglo = []
                Object.values(response.data.data.presupuestos).map((type) => {

                        this.calcularPromedio(type.monto_utilizado,type.monto_asignado) 

                        if(type.ano == 2017){
                            this.monto_asignado_ant = type.monto_asignado;                        
                        }

                        this.monto_asignado   = type.monto_asignado
                        this.monto_utilizado  = type.monto_utilizado
                        this.options.series.push({name: 'Monto Asignado '+type.ano,
                                                  data: [{name:type.ano, 
                                                          y:type.monto_asignado}]})
                })  

                 this.calcularCrecimiento(this.monto_asignado,this.monto_asignado_ant)
               
                
            } catch (error) {
                console.log(error);
            }            
        } 
        getData(url_pre);        
    },
    methods:{
        crear(){
   
                html2canvas(document.querySelector(".PresupuestosAdd")).then(canvas => {
                    var imgWidth   = 450;
                    var pageHeight = 200;
                    var position   = 0;                  
                    var image = canvas.toDataURL('image/png');
                    // var imgHeight  = canvas.height * imgWidth / canvas.width;     

                    var doc = new jsPDF('l', 'mm', [1375, 800]);

                    doc.addImage(image, 'PNG', 0, position,  imgWidth, pageHeight);

                    doc.save('download.pdf');

                });
        },             
        calcularCrecimiento(monto_asignado,monto_asignado_ant){
           this.crecimiento = (((monto_asignado - this.monto_asignado_ant) / monto_asignado) * 100)
           return this.crecimiento
        },
        calcularPromedio(monto_utilizado,monto_asignado){
            this.utilizado   = ((monto_utilizado * 100 ) / monto_asignado)
            
            return this.utilizado
        },
        setCompetencia(){
            const obj     = [];

            if (!this.local.competencia_id[0].competencia_id) {                   
                obj.push(this.local.competencia_id[0]);      
            } else {

                this.competencia_id = this.local.competencia_id;                  
                this.competencia_id.forEach(element => {
                    obj.push(element.competencia_id);
                });
            }

            return obj

        }         
    }     
}
</script>
