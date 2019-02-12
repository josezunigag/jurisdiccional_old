<template>

    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="container-fluid">
            <!-- row -->
            <div class="row">
                <div class="col-lg-3 col-sm-3 col-xs-12">
                    <div class="white-box analytics-info">
                        <h3 class="box-title">Total Visit</h3>
                        <ul class="list-inline two-part">
                            <li>
                                <div id="sparklinedash"></div>
                            </li>
                            <li class="text-right"><i class="ti-arrow-up text-success"></i> <span class="counter text-success">8659</span></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-3 col-xs-12">
                    <div class="white-box analytics-info">
                        <h3 class="box-title">Total Page Views</h3>
                        <ul class="list-inline two-part">
                            <li>
                                <div id="sparklinedash2"></div>
                            </li>
                            <li class="text-right"><i class="ti-arrow-up text-purple"></i> <span class="counter text-purple">7469</span></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-3 col-xs-12">
                    <div class="white-box analytics-info">
                        <h3 class="box-title">Unique Visitor</h3>
                        <ul class="list-inline two-part">
                            <li>
                                <div id="sparklinedash3"></div>
                            </li>
                            <li class="text-right"><i class="ti-arrow-up text-info"></i> <span class="counter text-info">6011</span></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-3 col-xs-12">
                    <div class="white-box analytics-info">
                        <h3 class="box-title">Bounce Rate</h3>
                        <ul class="list-inline two-part">
                            <li>
                                <div id="sparklinedash4"></div>
                            </li>
                            <li class="text-right"><i class="ti-arrow-down text-danger"></i> <span class="text-danger">18%</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /.row -->
            <!-- row -->
            <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title"><small class="pull-right m-t-10 text-success"><i class="fa fa-sort-asc"></i> 18% High then last month</small> Site Traffic</h3>
                        <div class="stats-row">
                            <div class="stat-item">
                                <h6>Overall Growth</h6> <b>80.40%</b></div>
                            <div class="stat-item">
                                <h6>Montly</h6> <b>15.40%</b></div>
                            <div class="stat-item">
                                <h6>Day</h6> <b>5.50%</b></div>
                        </div>
                        <div id="sparkline8"></div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title"><small class="pull-right m-t-10 text-danger"><i class="fa fa-sort-desc"></i> 18% High then last month</small>Site Traffic</h3>
                        <div class="stats-row">
                            <div class="stat-item">
                                <h6>Overall Growth</h6> <b>80.40%</b></div>
                            <div class="stat-item">
                                <h6>Montly</h6> <b>15.40%</b></div>
                            <div class="stat-item">
                                <h6>Day</h6> <b>5.50%</b></div>
                        </div>
                        <div id="sparkline9"></div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title"><small class="pull-right m-t-10 text-success"><i class="fa fa-sort-asc"></i> 18% High then last month</small>Site Traffic</h3>
                        <div class="stats-row">
                            <div class="stat-item">
                                <h6>Overall Growth</h6> <b>80.40%</b></div>
                            <div class="stat-item">
                                <h6>Montly</h6> <b>15.40%</b></div>
                            <div class="stat-item">
                                <h6>Day</h6> <b>5.50%</b></div>
                        </div>
                        <div id="sparkline10"></div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
            <!-- row -->
            <div class="row">
                <div class="col-sm-12 col-xs-12 col-md-12 col-lg-6">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="white-box">
                                <h3 class="box-title">Bar Chart</h3>
                                <div id="sparkline12" class="text-center"></div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="white-box">
                                <h3 class="box-title">Pie Chart</h3>
                                <div id="sparkline11" class="text-center"></div>
                            </div>
                        </div>
                    </div>
                    <!-- /Portlet -->
                </div>
                <div class="col-sm-12 col-xs-12 col-md-12 col-lg-6 ">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="white-box">
                                <h3 class="box-title">Composite Bar Chart</h3>
                                <div id="sparkline13" class="text-center"></div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="white-box bg-primary">
                                <h3 class="text-white box-title">Line Chart</h3>
                                <div id="sparkline14"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
            <!-- row -->
            <div class="row">
                <div class="col-sm-12 col-xs-12 col-md-12 col-lg-6 ">
                    <div class="white-box">
                        <h3 class="box-title">bar with different color Chart</h3>
                        <div id="sparkline15" class="text-center"></div>
                    </div>
                </div>
                <div class="col-sm-12 col-xs-12 col-md-12 col-lg-6">
                    <div class="white-box">
                        <h3 class="box-title">Line Chart</h3>
                        <div id="sparkline16" class="text-center"></div>
                    </div>
                </div>
            </div>
            <!-- /.row -->

        </div>
        <!-- /.container-fluid -->
        <footer class="footer t-a-c">
            © 2017 Cubic Admin
        </footer>
    </div>
    <!-- ===== Page-Content-End ===== -->
    
</template>

<script>
export default {
    name: 'ChartsSparkline',
    mounted() {
        $(document).ready(function () {
            var sparklineLogin = function () {
                $("#sparkline1").sparkline([5, 6, 2, 8, 9, 4, 7, 10, 11, 12, 10], {
                    type: 'bar',
                    height: '45',
                    barWidth: 7,
                    barSpacing: 4,
                    barColor: '#2ecc71'

                });

                $('#sparkline2').sparkline([20, 40, 30], {
                    type: 'pie',
                    width: '50',
                    height: '45',
                    resize: true,
                    sliceColors: ['#00bbd9', '#4a23ad', '#d93c17']
                });


                $('#sparkline3').sparkline([5, 6, 2, 9, 4, 7, 10, 12], {
                    type: 'bar',
                    height: '164',
                    barWidth: '7',
                    resize: true,
                    barSpacing: '5',
                    barColor: '#d93c17'
                });


                $("#sparkline4").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10], {
                    type: 'line',
                    width: '120',
                    height: '45',
                    lineColor: '#2ecc71',
                    fillColor: 'transparent',
                    spotColor: '#2ecc71',
                    minSpotColor: undefined,
                    maxSpotColor: undefined,
                    highlightSpotColor: undefined,
                    highlightLineColor: undefined
                });

                $('#sparkline5').sparkline([15, 23, 55, 35, 54, 45, 66, 47, 30], {
                    type: 'line',
                    width: '100%',
                    height: '160',
                    chartRangeMax: 50,
                    resize: true,
                    lineColor: '#00bbd9',
                    fillColor: 'rgba(19, 218, 254, 0.3)',
                    highlightLineColor: 'rgba(0,0,0,.1)',
                    highlightSpotColor: 'rgba(0,0,0,.2)',
                });

                $('#sparkline5').sparkline([0, 13, 10, 14, 15, 10, 18, 20, 0], {
                    type: 'line',
                    width: '100%',
                    height: '160',
                    chartRangeMax: 40,
                    lineColor: '#4a23ad',
                    fillColor: 'rgba(97, 100, 193, 0.3)',
                    composite: true,
                    resize: true,
                    highlightLineColor: 'rgba(0,0,0,.1)',
                    highlightSpotColor: 'rgba(0,0,0,.2)',
                });
                $('#sparkline6').sparkline([5, 6, 2, 8, 9, 4, 7, 10, 11, 12, 10], {
                    type: 'bar',
                    height: '45',
                    barWidth: '7',
                    barSpacing: '4',
                    barColor: '#00bbd9'
                });
                $("#sparkline7").sparkline([0, 2, 8, 6, 8, 5, 6, 4, 8, 6, 4, 2], {
                    type: 'line',
                    width: '100%',
                    height: '50',
                    lineColor: '#ffb136',
                    fillColor: '#ffb136',
                    highlightLineColor: 'rgba(0, 0, 0, 0.2)',
                    highlightSpotColor: '#4f4f4f'
                });
                $("#sparkline8").sparkline([2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 2], {
                    type: 'line',
                    width: '100%',
                    height: '50',
                    lineColor: '#2ecc71',
                    fillColor: '#2ecc71',
                    maxSpotColor: '#2ecc71',
                    highlightLineColor: 'rgba(0, 0, 0, 0.2)',
                    highlightSpotColor: '#2ecc71'
                });
                $("#sparkline9").sparkline([0, 2, 8, 6, 8, 5, 6, 4, 8, 6, 6, 2], {
                    type: 'line',
                    width: '100%',
                    height: '50',
                    lineColor: '#00bbd9',
                    fillColor: '#00bbd9',
                    minSpotColor: '#00bbd9',
                    maxSpotColor: '#00bbd9',
                    highlightLineColor: 'rgba(0, 0, 0, 0.2)',
                    highlightSpotColor: '#00bbd9'
                });
                $("#sparkline10").sparkline([2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 2], {
                    type: 'line',
                    width: '100%',
                    height: '50',
                    lineColor: '#4a23ad',
                    fillColor: '#4a23ad',
                    maxSpotColor: '#4a23ad',
                    highlightLineColor: 'rgba(0, 0, 0, 0.2)',
                    highlightSpotColor: '#4a23ad'
                });
                $('#sparkline11').sparkline([20, 40, 30], {
                    type: 'pie',
                    height: '200',
                    resize: true,
                    sliceColors: ['#00bbd9', '#e74a25', '#2ecc71']
                });

                $("#sparkline12").sparkline([5, 6, 2, 8, 9, 4, 7, 10, 11, 12, 10, 4, 7, 10], {
                    type: 'bar',
                    height: '200',
                    barWidth: 10,
                    barSpacing: 7,
                    barColor: '#2ecc71'
                });

                $('#sparkline13').sparkline([5, 6, 2, 9, 4, 7, 10, 12, 4, 7, 10], {
                    type: 'bar',
                    height: '200',
                    barWidth: '10',
                    resize: true,
                    barSpacing: '7',
                    barColor: '#e74a25'
                });
                $('#sparkline13').sparkline([5, 6, 2, 9, 4, 7, 10, 12, 4, 7, 10], {
                    type: 'line',
                    height: '200',
                    lineColor: '#e74a25',
                    fillColor: 'transparent',
                    composite: true,
                    highlightLineColor: 'rgba(0,0,0,.1)',
                    highlightSpotColor: 'rgba(0,0,0,.2)'
                });
                $("#sparkline14").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10], {
                    type: 'line',
                    width: '100%',
                    height: '200',
                    lineColor: '#fff',
                    fillColor: 'transparent',
                    spotColor: '#fff',
                    minSpotColor: undefined,
                    maxSpotColor: undefined,
                    highlightSpotColor: undefined,
                    highlightLineColor: undefined
                });
                $('#sparkline15').sparkline([5, 6, 2, 8, 9, 4, 7, 10, 11, 12, 10, 9, 4, 7], {
                    type: 'bar',
                    height: '200',
                    barWidth: '10',
                    barSpacing: '10',
                    barColor: '#00bbd9'
                });
                $('#sparkline16').sparkline([15, 23, 55, 35, 54, 45, 66, 47, 30], {
                    type: 'line',
                    width: '100%',
                    height: '200',
                    chartRangeMax: 50,
                    resize: true,
                    lineColor: '#00bbd9',
                    fillColor: 'rgba(19, 218, 254, 0.3)',
                    highlightLineColor: 'rgba(0,0,0,.1)',
                    highlightSpotColor: 'rgba(0,0,0,.2)',
                });

                $('#sparkline16').sparkline([0, 13, 10, 14, 15, 10, 18, 20, 0], {
                    type: 'line',
                    width: '100%',
                    height: '200',
                    chartRangeMax: 40,
                    lineColor: '#4a23ad',
                    fillColor: 'rgba(97, 100, 193, 0.3)',
                    composite: true,
                    resize: true,
                    highlightLineColor: 'rgba(0,0,0,.1)',
                    highlightSpotColor: 'rgba(0,0,0,.2)',
                });

                $('#sparklinedashdb').sparkline([0, 5, 6, 10, 9, 12, 4, 9, 4, 2, 7, 9, 6, 2], {
                    type: 'bar',
                    height: '50',
                    barWidth: '5',
                    resize: true,
                    barSpacing: '15',
                    barColor: '#00bbd9'
                });

                $('#sparklinedash').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
                    type: 'bar',
                    height: '30',
                    barWidth: '4',
                    resize: true,
                    barSpacing: '5',
                    barColor: '#2ecc71'
                });

                $('#sparklinedash2').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
                    type: 'bar',
                    height: '30',
                    barWidth: '4',
                    resize: true,
                    barSpacing: '5',
                    barColor: '#4a23ad'
                });
                $('#sparklinedash3').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
                    type: 'bar',
                    height: '30',
                    barWidth: '4',
                    resize: true,
                    barSpacing: '5',
                    barColor: '#00bbd9'
                });
                $('#sparklinedash4').sparkline([0, 5, 6, 10, 9, 12, 4, 9], {
                    type: 'bar',
                    height: '30',
                    barWidth: '4',
                    resize: true,
                    barSpacing: '5',
                    barColor: '#e74a25'
                });


            }
            var sparkResize;

            $(window).resize(function (e) {
                clearTimeout(sparkResize);
                sparkResize = setTimeout(sparklineLogin, 500);
            });
            sparklineLogin();

        });

    }
}
</script>
