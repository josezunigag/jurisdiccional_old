<template>

    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="container-fluid">
            <!-- .row -->
            <div class="row">
                <div class="col-md-12">
                    <div class="white-box">
                        <h3 class="box-title m-b-0">Dropzone </h3>
                        <p class="text-muted m-b-30"> For multiple file upload</p>
                        <form action="#" class="dropzone">
                            <div class="fallback">
                                <input name="file" type="file" multiple /> </div>
                        </form>
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
    name: 'Dropzone',
    mounted() {
        $('.dropzone').dropzone()
    }
}
</script>
