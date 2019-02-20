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
                        <p class="info-text font-12">Total Ingresos</p>
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
                <Highcharts :options="options" />
        </div>
        <!-- ===== Page-Container-End ===== -->
        <footer class="footer t-a-c">
            Poder Judicial
        </footer>
    </div>
    <!-- ===== Page-Content-End ===== -->
    
</template>
<script>

export default {
   name: 'Resoluciones',  
   data() {
        return {
            cant_registros: 0,
            prom_crecimiento: 0,
            grafinal:[],
            options: {
                        chart: {
                            type: 'spline',
                         },
                        title: {
                            text: 'Resoluciones por Juez',
                            x: -20 //center
                        },
                        subtitle: {
                            // text: 'Source: WorldClimate.com',
                            x: -20
                        },
                        xAxis: {
                            categories: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                        },
                        tooltip: {
                            split: true
                        },                        
                        yAxis: {
                            title: {
                            text: 'Cantidades'
                            },
                            plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                            }]
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle',
                            borderWidth: 0
                        },
                        series: []    
            }    
        }
    },
    mounted() {
        this.fetchData();
    },    
    methods: {
        fetchData() {

                var arreglo  = [0,0,0,0,0,0,0,0,0,0,0,0];  
                var arregloT = [0,0,0,0,0,0,0,0,0,0,0,0]; 
                var juez     = '';

            	const axios = require("axios");
		        const url = "http://localhost:3000/resoluciones";
                const getData = async url => {

                try {
                    const response = await axios.get(url);
                    const data = response.data;

                    Object.values(data.data.resoluciones).map((type) => {

                        if (juez != type._id.juez && juez != ''){
                            this.options.series.push({data: arreglo, name: juez, visible: false});
                            arreglo = [0,0,0,0,0,0,0,0,0,0,0,0];
                        }

                        juez = type._id.juez;
                        arreglo[--type._id.mes]  = type.count;
                        arregloT[type._id.mes]   += type.count;

                    }) 

                    this.options.series.push({data: arregloT, name: 'Total', visible:  true});
                    // this.options.series.push(this.grafinal);


                } catch (error) {
                    console.log(error);
                }
            }
            getData(url);
       }
    }   
}    
</script>        