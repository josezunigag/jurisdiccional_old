<template>

    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <!-- ===== Page-Container ===== -->
        <div class="container-fluid">
            <div class="row colorbox-group-widget">
                <div class="col-md-3 col-sm-6 info-color-box">
                    <div class="white-box">
                        <div class="media bg-primary">
                            <div class="media-body">
                                <h3 class="info-count">154 <span class="pull-right"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span></h3>
                                <p class="info-text font-12">Bookings</p>
                                <p class="info-ot font-15">Target<span class="label label-rounded">198</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 info-color-box">
                    <div class="white-box">
                        <div class="media bg-success">
                            <div class="media-body">
                                <h3 class="info-count">68 <span class="pull-right"><i class="mdi mdi-comment-text-outline"></i></span></h3>
                                <p class="info-text font-12">Complaints</p>
                                <p class="info-ot font-15">Total Pending<span class="label label-rounded">154</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 info-color-box">
                    <div class="white-box">
                        <div class="media bg-danger">
                            <div class="media-body">
                                <h3 class="info-count">&#36;9475 <span class="pull-right"><i class="mdi mdi-coin"></i></span></h3>
                                <p class="info-text font-12">Profit</p>
                                <p class="info-ot font-15">Pending<span class="label label-rounded">236</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 info-color-box">
                    <div class="white-box">
                        <div class="media bg-warning">
                            <div class="media-body">
                                <h3 class="info-count">&#36;124,356 <span class="pull-right"><i class="mdi mdi-coin"></i></span></h3>
                                <p class="info-text font-12">Total Profit</p>
                                <p class="info-ot font-15">Pending<span class="label label-rounded">782</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div class="white-box sd-widget m-b-0 b-b-0">
                        <a href="javascript:void(0);" class="pull-right"><i class="icon-settings"></i></a>
                        <h4 class="box-title">Sales Difference</h4>
                    </div>
                    <div class="white-box p-0 b-t-0">
                        <div class="ct-sd-chart chart-pos"></div>
                        <ul class="list-inline t-a-c">
                            <li>
                                <h6 class="font-15"><i class="fa fa-circle m-r-5 text-danger"></i>March</h6>
                            </li>
                            <li>
                                <h6 class="font-15"><i class="fa fa-circle m-r-5 text-primary"></i>February</h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="white-box sc-widget">
                        <div class="row">
                            <div class="col-sm-6">
                                <h4 class="box-title">Sales Chart</h4>
                            </div>
                            <div class="col-sm-6">
                                <select class="custom-select">
                                    <option selected>March 2017</option>
                                    <option value="1">April 2017</option>
                                    <option value="2">May 2017</option>
                                    <option value="3">June 2017</option>
                                </select>
                            </div>
                        </div>
                        <div class="chartist-sales-chart chart-pos m-t-40"></div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="white-box ie-widget m-b-0 b-b-0">
                        <h4 class="box-title">Item Earnings</h4>
                    </div>
                    <div class="white-box p-0 b-t-0">
                        <div class="ct-ie-chart chart-pos"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
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
                <div class="col-sm-12">
                    <div class="white-box calendar-widget">
                        <div id='calendar'></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 col-sm-12">
                    <div class="white-box comment-widget">
                        <h4 class="box-title">Recent Comments</h4>
                        <ul class="media-list">
                            <li class="media">
                                <div class="media-left">
                                    <a href="#"> <img alt="user" class="media-object" src="../../plugins/images/users/jeffery.jpg"> </a>
                                </div>
                                <div class="media-body">
                                    <div class="media-heading"><a href="javascript:void(0);" class="text-link"> Daniel Kristeen</a><span class="font-normal com-time">2 min ago</span>
                                        <ul class="list-inline">
                                            <li>
                                                <a href="javascript:void(0);"><span>Reply</span></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);"><i class="fa fa-heart p-r-5"></i>0 Like</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
                                    <div class="media reply">
                                        <div class="media-left">
                                            <a href="#"> <img alt="user" class="media-object" src="../../plugins/images/users/hanna.jpg"> </a>
                                        </div>
                                        <div class="media-body">
                                            <div class="media-heading"><a href="javascript:void(0);" class="text-link">Hanna Gover</a><span class="font-normal com-time">1 min ago</span>
                                                <ul class="list-inline">
                                                    <li>
                                                        <a href="javascript:void(0);"><span>Reply</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);"><i class="fa fa-heart p-r-5"></i>0 Like</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Cras sit amet nibh libero, in gravida nulla.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="media">
                                <div class="media-left">
                                    <a href="#"> <img alt="user" class="media-object" src="../../plugins/images/users/jeffery.jpg"> </a>
                                </div>
                                <div class="media-body">
                                    <div class="media-heading"><a href="javascript:void(0);" class="text-link"> Daniel Kristeen</a><span class="font-normal com-time">2 sec ago</span>
                                        <ul class="list-inline">
                                            <li>
                                                <a href="javascript:void(0);"><span>Reply</span></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);"><i class="fa fa-heart p-r-5 text-danger"></i>2 Like</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
                                </div>
                            </li>
                        </ul>
                        <div class="add-comment">
                            <input type="text" class="form-control" placeholder="Write your comment here">
                            <i class="fa fa-camera"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="white-box">
                        <div class="profile-widget">
                            <div class="profile-img">
                                <img src="../../plugins/images/users/jeffery.jpg" alt="user-img" class="img-circle">
                                <p class="m-t-10 m-b-5"><a href="javascript:void(0);" class="profile-text font-22 font-semibold">Jeffery Brown</a></p>
                                <span class="font-16">Ahmedabad, IN</span>
                            </div>
                            <div class="profile-info">
                                <div class="col-xs-6 col-md-6 b-r">
                                    <h1 class="text-primary">647 </h1>
                                    <span class="font-16">Ranking</span>
                                </div>
                                <div class="col-xs-6 col-md-6">
                                    <h1 class="text-primary">98 </h1>
                                    <span class="font-16">Events</span>
                                </div>
                            </div>
                            <div class="profile-detail font-15">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </div>
                            <div class="profile-btn">
                                <a href="javascript:void(0);" class="btn btn-success">Follow Me</a>
                                <a href="javascript:void(0);" class="btn btn-default btn-outline m-r-0">Detail View</a>
                            </div>
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
    name: 'DashboardClean',
    mounted() {
        var chart1 = new Chartist.Line('.ct-sd-chart', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [5, 6, 7, 8, 5, 3, 5, 4],
                [3, 7, 5, 7, 2, 6, 8, 3]
            ]
        }, {
            high: 10,
            low: 0,
            height: '230px',
            showArea: true,
            fullWidth: true,
            chartPadding: 0,
            axisX: {
                showLabel: false,
                divisor: 2,
                showGrid: false,
                offset: 0
            },
            axisY: {
                showLabel: false,
                showGrid: false,
                offset: 0
            },
            plugins: [
                Chartist.plugins.tooltip()
            ]
        });

        // ============================================================== 
        // Item earning chart
        // ============================================================== 
        var chart2 = new Chartist.Line('.ct-ie-chart', {
            labels: [1, 2, 3, 4, 5],
            series: [
                [8, 15, 9, 18, 10],
                [15, 9, 20, 9, 17]
            ]
        }, {
            high: 25,
            low: 0,
            showArea: true,
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 10
            }),
            height: '273px',
            fullWidth: true,
            chartPadding: 0,
            plugins: [
                Chartist.plugins.tooltip()
            ],
            axisX: {
                showLabel: false,
                divisor: 2,
                showGrid: false,
                offset: 0
            },
            axisY: {
                showLabel: false,
                showGrid: false,
                offset: 0
            }
        });

        // ============================================================== 
        // Sales chart
        // ==============================================================
        var chart3 = new Chartist.Bar('.chartist-sales-chart', {
            labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
            series: [
                [5, 3, 3, 2.5, 4, 3.5, 3],
                [4, 4, 2, 3, 5, 2, 4]
            ]
        }, {
            high: 5,
            low: 0,
            height: '236px',
            fullWidth: true,
            chartPadding: 0,
            axisX: {
                showLabel: true,
                showGrid: false,
            },
            axisY: {
                showLabel: false,
                showGrid: false,
                offset: 0
            },
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

        // ============================================================== 
        // calendar
        // ==============================================================

        /*
            date store today date.
            d store today date.
            m store current month.
            y store current year.
        */
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        /*
            Initialize fullCalendar and store into variable.
            Why in variable?
            Because doing so we can use it inside other function.
            In order to modify its option later.
        */

        var calendar = $('#calendar').fullCalendar({
            /*
                header option will define our calendar header.
                left define what will be at left position in calendar
                center define what will be at center position in calendar
                right define what will be at right position in calendar
            */
            header: {
                left: 'prev',
                center: 'title',
                right: 'next'
            },
            firstDay: 1,
            handleWindowResize: true,
            fixedWeekCount: false,
            /*
                editable: true allow user to edit events.
            */
            editable: true,
            /*
                events is the main option for calendar.
                for demo we have added predefined events in json object.
            */
            events: [{
                title: 'Birthday Party',
                start: new Date(y, m, d + 12, 22, 0),
                textColor: '#00bbd9'
            }, {
                title: 'Lunch',
                start: new Date(y, m, d + 22, 12, 30),
                textColor: '#e74a25'
            }, {
                title: 'Conference',
                start: new Date(y, m, d + 22, 18, 30),
                textColor: '#00bbd9'
            }, {
                title: 'Meeting',
                start: new Date(y, m, d + 27, 15, 30),
                textColor: '#2ecc71'
            }, {
                title: 'Appointment',
                start: new Date(y, m, d + 17, 17, 30),
                allDay: false,
                textColor: '#0283cc'
            }, {
                title: 'Car Loan',
                start: new Date(y, m, d + 17, 10, 0),
                allDay: false,
                textColor: '#e74a25'
            }, {
                title: 'Appointment',
                start: new Date(y, m, d, 10, 0),
                allDay: false,
                textColor: '#fff'
            }, {
                title: 'Car Loan',
                start: new Date(y, m, d, 17, 30),
                allDay: false,
                textColor: '#fff'
            }, {
                title: 'Party Time',
                start: new Date(y, m, d + 9, 17, 30),
                allDay: false,
                textColor: '#2ecc71'
            }],
            eventColor: 'transparent'
        });
        $(".fc-content").prepend('<i class="fa fa-circle m-r-5 font-10"></i>');
    }
}
</script>
