<template>

    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="container-fluid">
            <!-- .row -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="white-box">
                        <!-- .row -->
                        <div class="row">
                            <!-- .col-lg-12 -->
                            <div class="col-md-12">
                                <h3 class="box-title">Start without params</h3>
                                <div id="range_01"></div>
                            </div>
                            <!-- /.col-lg-12 -->
                            <div class="col-md-12 m-t-40 m-b-40">
                                <hr> </div>
                            <!-- .col-lg-12 -->
                            <div class="col-md-12">
                                <h3 class="box-title">Set min value, max value and start point</h3>
                                <div id="range_02"></div>
                            </div>
                            <!-- /.col-lg-12 -->
                            <div class="col-md-12 m-t-40 m-b-40">
                                <hr> </div>
                            <!-- .col-lg-12 -->
                            <div class="col-md-12">
                                <h3 class="box-title">Set type to double and specify range, also showing grid and adding prefix "$"</h3>
                                <div id="range_03"></div>
                            </div>
                            <!-- /.col-lg-12 -->
                            <div class="col-md-12 m-t-40 m-b-40">
                                <hr> </div>
                            <!-- .col-lg-12 -->
                            <div class="col-md-12">
                                <h3 class="box-title">Set up range with negative values</h3>
                                <div id="range_04"></div>
                            </div>
                            <!-- /.col-lg-12 -->
                            <div class="col-md-12 m-t-40 m-b-40">
                                <hr> </div>
                            <!-- .col-lg-12 -->
                            <div class="col-md-12">
                                <h3 class="box-title">Whant to show that max number is not the biggest one?</h3>
                                <div id="range_16"></div>
                            </div>
                            <!-- /.col-lg-12 -->
                            <div class="col-md-12 m-t-40 m-b-40">
                                <hr> </div>
                            <!-- .col-lg-12 -->
                            <div class="col-md-12">
                                <h3 class="box-title">Remove double decoration</h3>
                                <div id="range_18"></div>
                            </div>
                            <!-- /.col-lg-12 -->
                            <div class="col-md-12 m-t-40 m-b-40">
                                <hr> </div>
                            <!-- .col-lg-12 -->
                            <div class="col-md-12">
                                <h3 class="box-title">Visual details</h3>
                                <div id="range_22"></div>
                            </div>
                            <!-- /.col-lg-12 -->
                        </div>
                        <!-- .row -->
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
    name: 'RangeSlider',
    mounted() {
        $("#range_01").ionRangeSlider();

        $("#range_02").ionRangeSlider({
            min: 100,
            max: 1000,
            from: 550
        });
        $("#range_03").ionRangeSlider({
            type: "double",
            grid: true,
            min: 0,
            max: 1000,
            from: 200,
            to: 800,
            prefix: "$"
        });
        $("#range_04").ionRangeSlider({
            type: "double",
            grid: true,
            min: -1000,
            max: 1000,
            from: -500,
            to: 500
        });
        $("#range_16").ionRangeSlider({
            grid: true,
            min: 18,
            max: 70,
            from: 30,
            prefix: "Age ",
            max_postfix: "+"
        });
        $("#range_18").ionRangeSlider({
            type: "double",
            min: 100,
            max: 200,
            from: 145,
            to: 155,
            prefix: "Weight: ",
            postfix: " million pounds",
            decorate_both: false
        });
        $("#range_22").ionRangeSlider({
            type: "double",
            min: 1000,
            max: 2000,
            from: 1200,
            to: 1800,
            hide_min_max: true,
            hide_from_to: true,
            grid: true
        });


    }
}
</script>
