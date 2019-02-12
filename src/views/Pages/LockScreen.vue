<template>

    <!-- ===== Page-Content ===== -->
    <section id="wrapper" class="login-register">
        <div class="login-box">
            <div class="white-box">
                <form class="form-horizontal form-material" id="loginform" action="index.html">
                    <div class="form-group">
                        <div class="col-xs-12 text-center">
                            <div class="user-thumb text-center"> <img alt="thumbnail" class="img-circle" width="100" src="../../plugins/images/users/hanna.jpg">
                                <h3>Hanna</h3>
                            </div>
                        </div>
                    </div>
                    <div class="form-group ">
                        <div class="col-xs-12">
                            <input class="form-control" type="password" required placeholder="password">
                        </div>
                    </div>
                    <div class="form-group text-center">
                        <div class="col-xs-12">
                            <button class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <!-- ===== Page-Content-End ===== -->
    
</template>

<script>
export default {
    name: 'LockScreen',
    mounted() {
    }
}
</script>
