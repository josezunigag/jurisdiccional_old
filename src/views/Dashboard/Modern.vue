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
                                <select class="custom-select">
                                    <option selected value="0">Feb 04 - Mar 03</option>
                                    <option value="1">Mar 04 - Apr 03</option>
                                    <option value="2">Apr 04 - May 03</option>
                                    <option value="3">May 04 - Jun 03</option>
                                </select>
                                <ul class="list-inline">
                                    <li>
                                        <h6 class="font-15"><i class="fa fa-circle m-r-5 text-success"></i>2017</h6>
                                    </li>
                                    <li>
                                        <h6 class="font-15"><i class="fa fa-circle m-r-5 text-primary"></i>2018</h6>
                                    </li>
                                </ul>
                            </div>
                            <div class="stat chart-pos"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-12">
                    <div class="white-box">
                        <h3 class="box-title t-a-c">Nivel de Visualización</h3>
                        <div class="task-widget t-a-c">
                            <!-- <div class="task-chart" id="sparklinedashdb"></div> -->
                            <div class="task-content font-16 t-a-c">
                            	<div class="col-sm-12">
                                    <ul class="nav tabs-vertical">
                                        <li class="tab active">
                                            <router-link to="/dashboard/modern">
                                                <a data-toggle="tab" href="#home3" aria-expanded="true"> <span class="visible-xs"></span> <span class="hidden-xs">Ingresos</span> </a>
                                            </router-link>
                                        </li>
                                        <li class="tab">
                                            <router-link to="/ingresos/materia">
                                            <a data-toggle="tab" href="#profile3" aria-expanded="false"> <span class="visible-xs"></span> <span class="hidden-xs">Ingresos Materia</span></a>
                                            </router-link>
                                        </li>
                                        <li class="tab">
                                            <a aria-expanded="false" data-toggle="tab" href="#messages3"> <span class="visible-xs"></span> <span class="hidden-xs">Ingresos ROL</span> </a>
                                        </li>
                                   </ul>
                            	</div>                        
                                <!--<div class="col-sm-6 b-r">
                                    Urgent Tasks
                                    <h1 class="text-primary">05 <span class="font-16 text-muted">Tasks</span></h1>
                                </div>
                                <div class="col-sm-6">
                                    Normal Tasks
                                    <h1 class="text-primary">03 <span class="font-16 text-muted">Tasks</span></h1>
                                </div> -->
                            </div>
                            <!-- <div class="task-assign font-16">
                                Assigned To
                                <ul class="list-inline">
                                    <li class="p-l-0">
                                        <img src="../../plugins/images/users/1.png" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Steave">
                                    </li>
                                    <li>
                                        <img src="../../plugins/images/users/2.png" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Steave">
                                    </li>
                                    <li>
                                        <img src="../../plugins/images/users/3.png" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Steave">
                                    </li>
                                    <li class="p-r-0">
                                        <a href="javascript:void(0);" class="btn btn-success font-16">3+</a>
                                    </li>
                                </ul>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div class="white-box bg-primary color-box">
                        <h1 class="text-white font-light">{{(cant_registros.toLocaleString() / 12).toFixed(3)}} <span class="font-14">Promedio de Ingreso</span></h1>
                        <div class="ct-revenue chart-pos"></div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="white-box bg-success color-box">
                        <h1 class="text-white font-light m-b-0">1.850</h1>
                        <span class="hr-line"></span>
                        <p class="cb-text">Mayor Cantidad de Ingresos</p>
                        <h6 class="text-white font-semibold">+25% <span class="font-light"></span></h6>
                        <div class="chart">
                            <div class="ct-visit chart-pos"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="white-box bg-danger color-box">
                        <h1 class="text-white font-light m-b-0">25%</h1>
                        <span class="hr-line"></span>
                        <p class="cb-text">Finished Tasks</p>
                        <h6 class="text-white font-semibold">+15% <span class="font-light">Last Week</span></h6>
                        <div class="chart">
                            <input class="knob" data-min="0" data-max="100" data-bgColor="#f86b4a" data-fgColor="#ffffff" data-displayInput=false data-width="96" data-height="96" data-thickness=".1" value="25" readonly>
                        </div>
                    </div>
                </div>
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
export default {
    name: 'DashboardModern',
    data() {
        return {
            cant_registros: 0,
            prom_crecimiento: 0,
            seriesbar:[],
            chart1: ''
        }
	},
    mounted() {

        this.chart1 = new Chartist.Line('.stat', {
                            labels: ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                            series: []
                        }, {
                            high: 5000,
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
        // Let's put a sequence number aside so we can use it in the event callbacks
        var seq = 0,
        delays = 25,
        durations = 500;

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
		const url = "http://localhost:3000/";
		const getData = async url => {
		try {
			const response = await axios.get(url);
			const data = response.data;

			this.cant_registros   = data.data.ingreso;
            this.prom_crecimiento = (((data.data.ingreso - data.data.ingresoAnterior) / data.data.ingresoAnterior) * 100).toFixed(2); 

            var  valor = [];

            Object.values(data.data.ingresoMes).map((type) => {

                valor.push(type.count); 

            })

            this.seriesbar.push(valor);

            valor = [];

            Object.values(data.data.ingresoMesAnterior).map((type) => {

                valor.push(type.count);      

            })            

            this.seriesbar.push(valor);

            console.log(this.seriesbar);

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



        /* ===== Visits chart ===== */

        var chart2 = new Chartist.Bar('.ct-visit', {
            labels: [1, 2, 3],
            series: [50, 70, 60]
        }, {
            distributeSeries: true,
            chartPadding: {
                left: -20,
                right: -10
            },
            axisX: {
                showLabel: true,
                showGrid: false
            },
            axisY: {
                showLabel: false,
                showGrid: false
            },
            plugins: [
                Chartist.plugins.tooltip()
            ]
        });

        /* ===== Revenue chart ===== */

        var chart3 = new Chartist.Line('.ct-revenue', {
            labels: [0, 1, 2, 3, 4, 5, 6, 7],
            series: [
                [0, 3, 5, 3, 2, 4, 7, 6]
            ]
        }, {
            chartPadding: {
                left: -20,
                top: 10,
            },
            low: 1,
            showPoint: true,
            height: '100px',
            fullWidth: true,
            axisX: {
                showLabel: true,
                showGrid: true
            },
            axisY: {
                showLabel: false,
                showGrid: false
            },
            showArea: true,
            plugins: [
                Chartist.plugins.tooltip()
            ]
        });

            var chart = [chart2, chart3];

            for (var i = 0; i < chart.length; i++) {
                chart[i].on('draw', function(data) {
                    if (data.type === 'line' || data.type === 'area') {
                        data.element.animate({
                            d: {
                                begin: 500 * data.index,
                                dur: 500,
                                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                                to: data.path.clone().stringify(),
                                easing: Chartist.Svg.Easing.easeInOutElastic
                            }
                        });
                    }
                    if (data.type === 'bar') {
                        data.element.animate({
                            y2: {
                                dur: 500,
                                from: data.y1,
                                to: data.y2,
                                easing: Chartist.Svg.Easing.easeInOutElastic
                            },
                            opacity: {
                                dur: 500,
                                from: 0,
                                to: 1,
                                easing: Chartist.Svg.Easing.easeInOutElastic
                            }
                        });
                    }
                });
            }

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
