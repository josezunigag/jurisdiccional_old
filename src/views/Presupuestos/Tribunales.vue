<template>
    <div class="page-wrapper">
        <div class="container-fluid">
        <!-- ===== Page-Container ===== -->
            <!-- <div class="white-box"> -->
            <div class="row">
                <div class="col-sm-3">
                    <div class="white-box small-box-widget">
                        <ul class="list-inline row">
                            <li class="col-xs-3 p-t-10">
                                <div class="icon-box bg-primary">
                                    <i class="mdi mdi-coin"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="white-box small-box-widget">
                        <ul class="list-inline row">
                            <li class="col-xs-3 p-t-10">
                                <div class="icon-box bg-primary">
                                    <i class="mdi mdi-coin"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>   
                <div class="col-sm-3">
                    <div class="white-box small-box-widget">
                        <ul class="list-inline row">
                            <li class="col-xs-3 p-t-10">
                                <div class="icon-box bg-success">
                                    <i class="icon-graph"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>    
                <div class="col-sm-3">
                    <div class="white-box small-box-widget">
                        <ul class="list-inline row">
                            <li class="col-xs-7 p-t-10">
                                <div class="icon-box bg-success">
                                    <i class="icon-pie-chart"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>  
                <ul class="nav customtab2 nav-tabs" role="tablist" id="myTabs">
                    <li role="presentation" class="active"><a href="#Grafico" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs">Grafico</span></a></li>
                    <li role="presentation" class=""><a href="#Observacion" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Observacion</span></a></li>
                    <li role="presentation" class=""><a href="#Criterio" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Criterios</span></a></li>
                </ul>  
                <div class="tab-content" id="myTabContent">
                    <div aria-labelledby="home-tab" id="Observacion" class="tab-pane fade" role="tabpanel">
                    </div>
                    <div aria-labelledby="home-tab" id="Grafico" class="tab-pane fade" role="tabpanel">
                    </div>     
                    <div aria-labelledby="home-tab" id="Criterio" class="tab-pane fade" role="tabpanel">                              
                    </div>                             
                </div>                                                                 
                 
            </div>
            <!-- </div> -->
        </div>
        <!-- ===== Page-Container-End ===== -->
        <footer class="footer t-a-c">
            Poder Judicial
        </footer>
    </div>    
</template>
<script>
export default {
    name: 'PresupuestosTribunales'
}
</script>
