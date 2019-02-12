<template>

    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="container-fluid">
            <!-- .row -->
            <div class="row">
                <div class="col-md-12">
                    <div class="white-box">
                        <h3 class="box-title">Session Timeout Notification Control</h3>
                        <p>After a set amount of time, a dialog is shown to the user with the option to either log out now, or stay connected. If log out now is selected, the page is redirected to a logout URL. If stay connected is selected, a keep-alive URL is requested through AJAX. If no options is selected after another set amount of time, the page is automatically redirected to a timeout URL.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row -->

    </div>
    <!-- ===== Page-Content-End ===== -->
    
</template>

<script>
export default {
    name: 'SessionTimeout',
    mounted() {
        var SessionTimeout=function(){
            var i=function(){
                $.sessionTimeout({
                    title:"Session Timeout Notification",
                    message:"Your session is expiring soon.",
                    redirUrl:"/pages/lock-screen",
                    logoutUrl:"/pages/login",
                    warnAfter:5e3,
                    redirAfter:2e4,
                    ignoreUserActivity:!0,
                    countdownMessage:"Redirecting in {timer} seconds.",
                    countdownBar:!0
                })
            };
            
            return {
                init:function(){
                    i()
                }
            }
        }();
        
        jQuery(document).ready(function(){SessionTimeout.init()});
    }
}
</script>
