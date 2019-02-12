<template>

    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="container-fluid">
            <!-- .row -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="white-box">
                        <h3 class="box-title"><b>Clock Picker</b></h3>
                        <p class="text-muted">Use <code>.clockpicker</code> to create it.</p>
                        <div class="row">
                            <div class="col-lg-6">
                                <label class="m-t-20">Default Clock Picker</label>
                                <div class="input-group clockpicker">
                                    <input type="text" class="form-control" value="09:30"> <span class="input-group-addon"> <span class="glyphicon glyphicon-time"></span> </span>
                                </div>
                                <label class="m-t-40">Auto close Clock Picker</label>
                                <div class="input-group clockpicker " data-placement="bottom" data-align="top" data-autoclose="true">
                                    <input type="text" class="form-control" value="13:14"> <span class="input-group-addon"> <span class="glyphicon glyphicon-time"></span> </span>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <label class="m-t-20">Now time</label>
                                <div class="input-group">
                                    <input class="form-control" id="single-input" value="" placeholder="Now"> <span class="input-group-btn">
                                    <button type="button" id="check-minutes" class="btn waves-effect waves-light btn-success">Check the minutes</button>
                                    </span> 
                                </div>
                                <label class="m-t-40">Left Placement</label>
                                <div class="input-group clockpicker " data-placement="left" data-align="top" data-autoclose="true">
                                    <input type="text" class="form-control" value="13:14"> <span class="input-group-addon"> <span class="glyphicon glyphicon-time"></span> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
            <!-- .row -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="white-box">
                        <h3 class="box-title m-b-0"><b>Color Picker</b></h3>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="example">
                                    <h5 class="box-title m-t-30">Simple mode</h5>
                                    <p class="text-muted m-b-20">just add class <code>.colorpicker</code> to create it.</p>
                                    <input type="text" class="colorpicker form-control" value="#7ab2fa" /> </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="example">
                                    <h5 class="box-title m-t-30">Complex mode</h5>
                                    <p class="text-muted m-b-20">just add class <code>.complex-colorpicker</code> to create it.</p>
                                    <input type="text" class="complex-colorpicker form-control" value="#fa7a7a" /> </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="example">
                                    <h5 class="box-title m-t-30">Gradiant mode</h5>
                                    <p class="text-muted m-b-20">just add class <code>.gradient-colorpicker-colorpicker</code> to create it.</p>
                                    <input type="text" class="gradient-colorpicker form-control" value="#bee0ab" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
            <!-- .row -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="white-box">
                        <h3 class="box-title m-b-0"><b>Date Picker</b></h3>
                        <div class="row">
                            <div class="col-lg-4">
                                <date-picker v-model="time1" :first-day-of-week="1" lang="en"></date-picker>      
                            </div>
                            <div class="col-lg-4">
                                <date-picker
                                v-model="value4"
                                lang="en"
                                type="datetime"
                                format="YYYY-MM-DD hh:mm:ss a"
                                :time-picker-options="{
                                    start: '00:00',
                                    step: '00:30',
                                    end: '23:30'
                                }"></date-picker>
                            </div>
                            <div class="col-lg-4">
                                <date-picker v-model="value2" range lang="en"></date-picker>
                            </div>
                        </div>
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
import DatePicker from 'vue2-datepicker'

export default {
    name: 'Pickers',
    data() {
        return {
            time1: '',
            time2: '',
            time3: '',
            value1: new Date(),
            value2: '',
            value3: new Date(),
            value4: '',
            value5: '',
            value6: '',
            value7: '',
            value8: '',
            value9: '',
            shortcuts: [
                {
                    text: 'Today',
                    onClick: () => {
                        this.time3 = [ new Date(), new Date() ]
                    }
                }
            ],
            timePickerOptions: {
                start: '00:00',
                step: '00:30',
                end: '23:30'
            }
        }
    },
    mounted() {
        // Clock pickers
        $('#single-input').clockpicker({
            placement: 'bottom',
            align: 'left',
            autoclose: true,
            'default': 'now'
        });
        $('.clockpicker').clockpicker({
            donetext: 'Done',
        }).find('input').change(function() {
            console.log(this.value);
        });
        $('#check-minutes').click(function(e) {
            // Have to stop propagation here
            e.stopPropagation();
            input.clockpicker('show').clockpicker('toggleView', 'minutes');
        });
        if (/mobile/i.test(navigator.userAgent)) {
            $('input').prop('readOnly', true);
        }
        // Colorpicker
        $(".colorpicker").asColorPicker();
        $(".complex-colorpicker").asColorPicker({
            mode: 'complex'
        });
        $(".gradient-colorpicker").asColorPicker({
            mode: 'gradient'
        });
    },
    components: { DatePicker }
}
</script>
