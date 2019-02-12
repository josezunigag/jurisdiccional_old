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
                        <h3 class="info-count text-blue">154</h3>
                        <p class="info-text font-12">Bookings</p>
                        <span class="hr-line"></span>
                        <p class="info-ot font-15">Target<span class="label label-rounded label-success">300</span></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-comment-text-outline"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">68</h3>
                        <p class="info-text font-12">Complaints</p>
                        <span class="hr-line"></span>
                        <p class="info-ot font-15">Total Pending<span class="label label-rounded label-danger">154</span></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 info-box">
                <div class="media">
                    <div class="media-left">
                        <span class="icoleaf bg-primary text-white"><i class="mdi mdi-coin"></i></span>
                    </div>
                    <div class="media-body">
                        <h3 class="info-count text-blue">&#36;9475</h3>
                        <p class="info-text font-12">Earning</p>
                        <span class="hr-line"></span>
                        <p class="info-ot font-15">March : <span class="text-blue font-semibold">&#36;514578</span></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 info-box b-r-0">
                <div class="media">
                    <div class="media-left p-r-5">
                        <div id="earning" class="e" data-percent="60">
                            <div id="pending" class="p" data-percent="55"></div>
                            <div id="booking" class="b" data-percent="50"></div>
                        </div>
                    </div>
                    <div class="media-body">
                        <h2 class="text-blue font-22 m-t-0">Report</h2>
                        <ul class="p-0 m-b-20">
                            <li><i class="fa fa-circle m-r-5 text-primary"></i>60% Earnings</li>
                            <li><i class="fa fa-circle m-r-5 text-primary"></i>55% Pending</li>
                            <li><i class="fa fa-circle m-r-5 text-info"></i>50% Bookings</li>
                        </ul>
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
                                <h4 class="box-title">Statistics</h4>
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
                                        <h6 class="font-15"><i class="fa fa-circle m-r-5 text-success"></i>New Sales</h6>
                                    </li>
                                    <li>
                                        <h6 class="font-15"><i class="fa fa-circle m-r-5 text-primary"></i>Existing Sales</h6>
                                    </li>
                                </ul>
                            </div>
                            <div class="stat chart-pos"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="white-box">
                        <h4 class="box-title">Task Progress</h4>
                        <div class="task-widget t-a-c">
                            <div class="task-chart" id="sparklinedashdb"></div>
                            <div class="task-content font-16 t-a-c">
                                <div class="col-sm-6 b-r">
                                    Urgent Tasks
                                    <h1 class="text-primary">05 <span class="font-16 text-muted">Tasks</span></h1>
                                </div>
                                <div class="col-sm-6">
                                    Normal Tasks
                                    <h1 class="text-primary">03 <span class="font-16 text-muted">Tasks</span></h1>
                                </div>
                            </div>
                            <div class="task-assign font-16">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div class="white-box bg-primary color-box">
                        <h1 class="text-white font-light">&#36;6547 <span class="font-14">Revenue</span></h1>
                        <div class="ct-revenue chart-pos"></div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="white-box bg-success color-box">
                        <h1 class="text-white font-light m-b-0">5247</h1>
                        <span class="hr-line"></span>
                        <p class="cb-text">current visits</p>
                        <h6 class="text-white font-semibold">+25% <span class="font-light">Last Week</span></h6>
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
            <div class="row">
                <div class="col-md-12">
                    <div class="white-box user-table">
                        <div class="row">
                            <div class="col-sm-6">
                                <h4 class="box-title">Table Format/User Data</h4>
                            </div>
                            <div class="col-sm-6">
                                <ul class="list-inline">
                                    <li>
                                        <a href="javascript:void(0);" class="btn btn-default btn-outline font-16"><i class="fa fa-trash" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="btn btn-default btn-outline font-16"><i class="fa fa-commenting" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                                <select class="custom-select">
                                    <option selected>Sort by</option>
                                    <option value="1">Name</option>
                                    <option value="2">Location</option>
                                    <option value="3">Type</option>
                                    <option value="4">Role</option>
                                    <option value="5">Action</option>
                                </select>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>
                                            <div class="checkbox checkbox-info">
                                                <input id="c1" type="checkbox">
                                                <label for="c1"></label>
                                            </div>
                                        </th>
                                        <th>Name</th>
                                        <th>Location</th>
                                        <th>Type</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="checkbox checkbox-info">
                                                <input id="c2" type="checkbox">
                                                <label for="c2"></label>
                                            </div>
                                        </td>
                                        <td><a href="javascript:void(0);" class="text-link">Daniel Kristeen</a></td>
                                        <td>Texas, US</td>
                                        <td>Posts 564</td>
                                        <td><span class="label label-success">Admin</span></td>
                                        <td>
                                            <select class="custom-select">
                                                <option value="1">Modulator</option>
                                                <option value="2">Admin</option>
                                                <option value="3">Staff</option>
                                                <option value="4">User</option>
                                                <option value="5">General</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="checkbox checkbox-info">
                                                <input id="c3" type="checkbox">
                                                <label for="c3"></label>
                                            </div>
                                        </td>
                                        <td><a href="javascript:void(0);" class="text-link">Hanna Gover</a></td>
                                        <td>Los Angeles, US</td>
                                        <td>Posts 451</td>
                                        <td><span class="label label-info">Staff</span> </td>
                                        <td>
                                            <select class="custom-select">
                                                <option value="1">Modulator</option>
                                                <option value="2">Admin</option>
                                                <option value="3">Staff</option>
                                                <option value="4">User</option>
                                                <option value="5">General</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="checkbox checkbox-info">
                                                <input id="c4" type="checkbox">
                                                <label for="c4"></label>
                                            </div>
                                        </td>
                                        <td><a href="javascript:void(0);" class="text-link">Jeffery Brown</a></td>
                                        <td>Houston, US</td>
                                        <td>Posts 978</td>
                                        <td><span class="label label-danger">User</span> </td>
                                        <td>
                                            <select class="custom-select">
                                                <option value="1">Modulator</option>
                                                <option value="2">Admin</option>
                                                <option value="3">Staff</option>
                                                <option value="4">User</option>
                                                <option value="5">General</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="checkbox checkbox-info">
                                                <input id="c5" type="checkbox">
                                                <label for="c5"></label>
                                            </div>
                                        </td>
                                        <td><a href="javascript:void(0);" class="text-link">Elliot Dugteren</a></td>
                                        <td>San Antonio, US</td>
                                        <td>Posts 34</td>
                                        <td><span class="label label-warning">General</span> </td>
                                        <td>
                                            <select class="custom-select">
                                                <option value="1">Modulator</option>
                                                <option value="2">Admin</option>
                                                <option value="3">Staff</option>
                                                <option value="4">User</option>
                                                <option value="5">General</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="checkbox checkbox-info">
                                                <input id="c6" type="checkbox">
                                                <label for="c6"></label>
                                            </div>
                                        </td>
                                        <td><a href="javascript:void(0);" class="text-link">Sergio Milardovich</a></td>
                                        <td>Jacksonville, US</td>
                                        <td>Posts 31</td>
                                        <td><span class="label label-primary">Partial</span> </td>
                                        <td>
                                            <select class="custom-select">
                                                <option value="1">Modulator</option>
                                                <option value="2">Admin</option>
                                                <option value="3">Staff</option>
                                                <option value="4">User</option>
                                                <option value="5">General</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <ul class="pagination">
                            <li class="disabled"> <a href="#">1</a> </li>
                            <li class="active"> <a href="#">2</a> </li>
                            <li> <a href="#">3</a> </li>
                            <li> <a href="#">4</a> </li>
                            <li> <a href="#">5</a> </li>
                        </ul>
                        <a href="javascript:void(0);" class="btn btn-success pull-right m-t-10 font-20">+</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <div class="white-box">
                        <div class="task-widget2">
                            <div class="task-image">
                                <img src="../../plugins/images/task.jpg" alt="task" class="img-responsive">
                                <div class="task-image-overlay"></div>
                                <div class="task-detail">
                                    <h2 class="font-light text-white m-b-0">07 April</h2>
                                    <h4 class="font-normal text-white m-t-5">Your tasks for today</h4>
                                </div>
                                <div class="task-add-btn">
                                    <a href="javascript:void(0);" class="btn btn-success">+</a>
                                </div>
                            </div>
                            <div class="task-total">
                                <p class="font-16 m-b-0"><strong>5</strong> Tasks for <a href="javascript:void(0);" class="text-link">Jon Doe</a></p>
                            </div>
                            <div class="task-list">
                                <ul class="list-group">
                                    <li class="list-group-item bl-info">
                                        <div class="checkbox checkbox-success">
                                            <input id="c7" type="checkbox">
                                            <label for="c7">
                                                <span class="font-16">Create invoice for customers and email each customers.</span>
                                            </label>
                                            <h6 class="p-l-30 font-bold">05:00 PM</h6>
                                        </div>
                                    </li>
                                    <li class="list-group-item bl-warning">
                                        <div class="checkbox checkbox-success">
                                            <input id="c8" type="checkbox" checked>
                                            <label for="c8">
                                                <span class="font-16">Send payment of <strong>&#36;500 invoised</strong> on 23 May to <a href="javascript:void(0);" class="text-link">Daniel Kristeen</a> via paypal.</span>
                                            </label>
                                            <h6 class="p-l-30 font-bold">03:00 PM</h6>
                                        </div>
                                    </li>
                                    <li class="list-group-item bl-danger">
                                        <div class="checkbox checkbox-success">
                                            <input id="c9" type="checkbox">
                                            <label for="c9">
                                                <span class="font-16">It is a long established fact that a reader will be distracted by the readable.</span>
                                            </label>
                                            <h6 class="p-l-30 font-bold">04:45 PM</h6>
                                        </div>
                                    </li>
                                    <li class="list-group-item bl-success">
                                        <div class="checkbox checkbox-success">
                                            <input id="c10" type="checkbox">
                                            <label for="c10">
                                                <span class="font-16">It is a long established fact that a reader will be distracted by the readable.</span>
                                            </label>
                                            <h6 class="p-l-30 font-bold">05:30 PM</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="task-loadmore">
                                <a href="javascript:void(0);" class="btn btn-default btn-outline btn-rounded">Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="white-box chat-widget">
                        <a href="javascript:void(0);" class="pull-right"><i class="icon-settings"></i></a>
                        <h4 class="box-title">Chat</h4>
                        <ul class="chat-list slimscroll" style="overflow: hidden;" tabindex="5005">
                            <li>
                                <div class="chat-image"> <img alt="male" src="../../plugins/images/users/hanna.jpg"> </div>
                                <div class="chat-body">
                                    <div class="chat-text">
                                        <p><span class="font-semibold">Hanna Gover</span> Hey Daniel, This is just a sample chat. </p>
                                    </div>
                                    <span>2 Min ago</span>
                                </div>
                            </li>
                            <li class="odd">
                                <div class="chat-body">
                                    <div class="chat-text">
                                        <p> buddy </p>
                                    </div>
                                    <span>2 Min ago</span>
                                </div>
                            </li>
                            <li>
                                <div class="chat-image"> <img alt="male" src="../../plugins/images/users/hanna.jpg"> </div>
                                <div class="chat-body">
                                    <div class="chat-text">
                                        <p><span class="font-semibold">Hanna Gover</span> Bye now. </p>
                                    </div>
                                    <span>1 Min ago</span>
                                </div>
                            </li>
                            <li class="odd">
                                <div class="chat-body">
                                    <div class="chat-text">
                                        <p> We have been busy all the day to make your website proposal and finally came with the super excited offer. </p>
                                    </div>
                                    <span>5 Sec ago</span>
                                </div>
                            </li>
                        </ul>
                        <div class="chat-send">
                            <input type="text" class="form-control" placeholder="Write your message">
                            <i class="fa fa-camera"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- ===== Page-Container-End ===== -->
        <footer class="footer t-a-c">
            © 2017 Cubic Admin
        </footer>
    </div>
    <!-- ===== Page-Content-End ===== -->
    
</template>

<script>
export default {
    name: 'DashboardModern',
    mounted() {
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

            /* ===== Statistics chart ===== */

            var chart1 = new Chartist.Line('.stat', {
                labels: [0, 5, 10, 15, 20, 25],
                series: [
                    [40, 10, 33, 18, 27, 45],
                    [10, 24, 37, 11, 30, 25]
                ]
            }, {
                high: 50,
                low: 0,
                height: '278px',
                showArea: false,
                fullWidth: true,
                axisY: {
                    onlyInteger: true,
                    showGrid: false,
                    offset: 20,
                },
                plugins: [
                    Chartist.plugins.tooltip()
                ]
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

            var chart = [chart1, chart2, chart3];

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
