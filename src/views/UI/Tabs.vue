<template>

    <!-- ===== Page-Content ===== -->
    <div class="page-wrapper">
        <div class="container-fluid">
            <!-- .row -->
            <div class="row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title m-b-0">Default Tab</h3>
                        <p class="text-muted m-b-40">Use default tab with class <code>nav-tabs</code></p>
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs"> Home</span></a></li>
                            <li role="presentation" class=""><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Profile</span></a></li>
                            <li role="presentation" class=""><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Messages</span></a></li>
                            <li role="presentation" class=""><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-settings"></i></span> <span class="hidden-xs">Settings</span></a></li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="home">
                                <div class="col-md-6">
                                    <h3>Best Clean Tab ever</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="profile">
                                <div class="col-md-6">
                                    <h3>Lets check profile</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Vulputate eget, arcu, fringilla vel, aliquet nec, daf adfd vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="messages">
                                <div class="col-md-6">
                                    <h3>Come on you have a lot message</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="settings">
                                <div class="col-md-6">
                                    <h3>Just do Settings</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Vulputate eget, fringilla vel, aliquet nec, daf adfd vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title">Custom Design Tab</h3>
                        <p class="text-muted m-b-30">Use default tab with class <code>customtab</code></p>
                        <!-- Nav tabs -->
                        <ul class="nav customtab nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#home1" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs"> Home</span></a></li>
                            <li role="presentation" class=""><a href="#profile1" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Profile</span></a></li>
                            <li role="presentation" class=""><a href="#messages1" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Messages</span></a></li>
                            <li role="presentation" class=""><a href="#settings1" aria-controls="settings" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-settings"></i></span> <span class="hidden-xs">Settings</span></a></li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane fade active in" id="home1">
                                <div class="col-md-6">
                                    <h3>Best Clean Tab ever</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="profile1">
                                <div class="col-md-6">
                                    <h3>Lets check profile</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="messages1">
                                <div class="col-md-6">
                                    <h3>Come on you have a lot message</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="settings1">
                                <div class="col-md-6">
                                    <h3>Just do Settings</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title">Vertical Tabs</h3>
                        <p class="text-muted m-b-30">Use default tab with class <code>vtabs</code></p>
                        <div class="vtabs">
                            <ul class="nav tabs-vertical">
                                <li class="tab active">
                                    <a data-toggle="tab" href="#home3" aria-expanded="true"> <span class="visible-xs"><i class="ti-home"></i></span> <span class="hidden-xs">Home</span> </a>
                                </li>
                                <li class="tab">
                                    <a data-toggle="tab" href="#profile3" aria-expanded="false"> <span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Profile</span> </a>
                                </li>
                                <li class="tab">
                                    <a aria-expanded="false" data-toggle="tab" href="#messages3"> <span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Messages</span> </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="home3" class="tab-pane active">
                                    <div class="col-md-6">
                                        <h3>Best Clean Tab ever</h3>
                                        <h4>you can use it with the small code</h4> </div>
                                    <div class="col-md-5 pull-right">
                                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div id="profile3" class="tab-pane">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                </div>
                                <div id="messages3" class="tab-pane">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title">Vertical Tabs</h3>
                        <p class="text-muted m-b-30">Use default tab with class <code>customvtab</code></p>
                        <div class="vtabs customvtab">
                            <ul class="nav tabs-vertical">
                                <li class="tab active">
                                    <a data-toggle="tab" href="#vhome3" aria-expanded="true"> <span class="visible-xs"><i class="ti-home"></i></span> <span class="hidden-xs">Home</span> </a>
                                </li>
                                <li class="tab">
                                    <a data-toggle="tab" href="#vprofile3" aria-expanded="false"> <span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Profile</span> </a>
                                </li>
                                <li class="tab">
                                    <a aria-expanded="false" data-toggle="tab" href="#vmessages3"> <span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Messages</span> </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="vhome3" class="tab-pane active">
                                    <div class="col-md-6">
                                        <h3>Best Clean Tab ever</h3>
                                        <h4>you can use it with the small code</h4> </div>
                                    <div class="col-md-5 pull-right">
                                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div id="vprofile3" class="tab-pane">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                </div>
                                <div id="vmessages3" class="tab-pane">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title m-b-30">Tab with dropdown</h3>
                        <div data-example-id="togglable-tabs" class="bs-example bs-example-tabs">
                            <ul role="tablist" class="nav nav-tabs" id="myTabs">
                                <li class="active" role="presentation"><a aria-expanded="true" aria-controls="home" data-toggle="tab" role="tab" id="home-tab" href="#home5">Home</a></li>
                                <li role="presentation" class=""><a aria-controls="profile" data-toggle="tab" id="profile-tab" role="tab" href="#profile5" aria-expanded="false">Profile</a></li>
                                <li class="dropdown" role="presentation"> <a aria-controls="myTabDrop1-contents" data-toggle="dropdown" class="dropdown-toggle" id="myTabDrop1" href="#" aria-expanded="false">Dropdown <span class="caret"></span></a>
                                    <ul id="myTabDrop1-contents" aria-labelledby="myTabDrop1" class="dropdown-menu">
                                        <li class=""><a aria-controls="dropdown1" data-toggle="tab" id="dropdown1-tab" role="tab" href="#dropdown1" aria-expanded="true">@fat</a></li>
                                        <li class=""><a aria-controls="dropdown2" data-toggle="tab" id="dropdown2-tab" role="tab" href="#dropdown2" aria-expanded="false">@mdo</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div aria-labelledby="home-tab" id="home5" class="tab-pane fade active in" role="tabpanel">
                                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                                </div>
                                <div aria-labelledby="profile-tab" id="profile5" class="tab-pane fade" role="tabpanel">
                                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                                </div>
                                <div aria-labelledby="dropdown1-tab" id="dropdown1" class="tab-pane fade " role="tabpanel">
                                    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                                </div>
                                <div aria-labelledby="dropdown2-tab" id="dropdown2" class="tab-pane fade" role="tabpanel">
                                    <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title m-b-20">Custom Design Tab2 <code class="font-12">customtab2</code></h3>
                        <!-- Nav tabs -->
                        <ul class="nav customtab2 nav-tabs" role="tablist">
                            <li role="presentation" class=""><a href="#home6" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-home"></i></span><span class="hidden-xs"> Home</span></a></li>
                            <li role="presentation" class=""><a href="#profile6" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Profile</span></a></li>
                            <li role="presentation" class="active"><a href="#messages6" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="true"><span class="visible-xs"><i class="ti-email"></i></span> <span class="hidden-xs">Messages</span></a></li>
                            <li role="presentation" class=""><a href="#settings6" aria-controls="settings" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-settings"></i></span> <span class="hidden-xs">Settings</span></a></li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane fade" id="home6">
                                <div class="col-md-6">
                                    <h3>Best Clean Tab ever</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="profile6">
                                <div class="col-md-6">
                                    <h3>Lets check profile</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade active in" id="messages6">
                                <div class="col-md-6">
                                    <h3>Come on you have a lot message</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="settings6">
                                <div class="col-md-6">
                                    <h3>Just do Settings</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="panel panel-default">
                        <div class="panel-heading"> Nav Pills Tabs </div>
                        <div class="panel-body">
                            <ul class="nav nav-pills m-b-30 ">
                                <li class="active"> <a href="#navpills-1" data-toggle="tab" aria-expanded="false">Tab One</a> </li>
                                <li class=""> <a href="#navpills-2" data-toggle="tab" aria-expanded="false">Tab Two</a> </li>
                                <li> <a href="#navpills-3" data-toggle="tab" aria-expanded="true">Tab Three</a> </li>
                            </ul>
                            <div class="tab-content br-n pn">
                                <div id="navpills-1" class="tab-pane active">
                                    <div class="row">
                                        <div class="col-md-4"> <img src="../../plugins/images/large/img1.jpg" class="img-responsive thumbnail m-r-15"> </div>
                                        <div class="col-md-8"> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.
                                            <p>
                                                <br/> Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="navpills-2" class="tab-pane">
                                    <div class="row">
                                        <div class="col-md-8"> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.
                                            <p>
                                                <br/> Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                                        </div>
                                        <div class="col-md-4"> <img src="../../plugins/images/large/img2.jpg" class="img-responsive thumbnail mr25"> </div>
                                    </div>
                                </div>
                                <div id="navpills-3" class="tab-pane">
                                    <div class="row">
                                        <div class="col-md-4"> <img src="../../plugins/images/large/img3.jpg" class="img-responsive thumbnail mr25"> </div>
                                        <div class="col-md-8"> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.
                                            <p>
                                                <br/> Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">Nav Pills Tabs with right align</div>
                        <div class="panel-body">
                            <ul class="nav nav-pills m-b-30 pull-right">
                                <li class="active"> <a href="#navpills-11" data-toggle="tab" aria-expanded="true">Tab One</a> </li>
                                <li class=""> <a href="#navpills-21" data-toggle="tab" aria-expanded="false">Tab Two</a> </li>
                                <li class=""> <a href="#navpills-31" data-toggle="tab" aria-expanded="false">Tab Three</a> </li>
                            </ul>
                            <div class="tab-content br-n pn">
                                <div id="navpills-11" class="tab-pane active">
                                    <div class="row">
                                        <div class="col-md-8"> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.
                                            <p>
                                                <br/> Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                                        </div>
                                        <div class="col-md-4"> <img src="../../plugins/images/large/img4.jpg" class="img-responsive thumbnail m-r-15"> </div>
                                    </div>
                                </div>
                                <div id="navpills-21" class="tab-pane">
                                    <div class="row">
                                        <div class="col-md-8"> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.
                                            <p>
                                                <br/> Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                                        </div>
                                        <div class="col-md-4"> <img src="../../plugins/images/large/img5.jpg" class="img-responsive thumbnail mr25"> </div>
                                    </div>
                                </div>
                                <div id="navpills-31" class="tab-pane">
                                    <div class="row">
                                        <div class="col-md-8"> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.
                                            <p>
                                                <br/> Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                                        </div>
                                        <div class="col-md-4"> <img src="../../plugins/images/large/img6.jpg" class="img-responsive thumbnail mr25"> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title m-b-0">Default Tab with icon</h3>
                        <p class="text-muted m-b-40">Use default tab with class <code>nav-tabs</code></p>
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#ihome" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true"><span><i class="ti-home"></i></span></a></li>
                            <li role="presentation" class=""><a href="#iprofile" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span><i class="ti-user"></i></span> </a></li>
                            <li role="presentation" class=""><a href="#imessages" aria-controls="messages" role="tab" data-toggle="tab" aria-expanded="false"><span><i class="ti-email"></i></span></a></li>
                            <li role="presentation" class=""><a href="#isettings" aria-controls="settings" role="tab" data-toggle="tab" aria-expanded="false"><span><i class="ti-settings"></i></span></a></li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="ihome">
                                <div class="col-md-6">
                                    <h3>Best Clean Tab ever</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="iprofile">
                                <div class="col-md-6">
                                    <h3>Lets check profile</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Vulputate eget, arcu, fringilla vel, aliquet nec, daf adfd vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="imessages">
                                <div class="col-md-6">
                                    <h3>Come on you have a lot message</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="isettings">
                                <div class="col-md-6">
                                    <h3>Just do Settings</h3>
                                    <h4>you can use it with the small code</h4> </div>
                                <div class="col-md-5 pull-right">
                                    <p>Vulputate eget, fringilla vel, aliquet nec, daf adfd vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="white-box">
                        <h3 class="box-title">Vertical Tabs with icon</h3>
                        <p class="text-muted m-b-30">Use default tab with class <code>vtabs</code></p>
                        <div class="vtabs">
                            <ul class="nav tabs-vertical">
                                <li class="tab active">
                                    <a data-toggle="tab" href="#vihome3" aria-expanded="true"> <span><i class="ti-home"></i></span></a>
                                </li>
                                <li class="tab">
                                    <a data-toggle="tab" href="#viprofile3" aria-expanded="false"> <span><i class="ti-user"></i></span></a>
                                </li>
                                <li class="tab">
                                    <a aria-expanded="false" data-toggle="tab" href="#vimessages3"> <span><i class="ti-email"></i></span></a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="vihome3" class="tab-pane active">
                                    <div class="col-md-6">
                                        <h3>Best Clean Tab ever</h3>
                                        <h4>you can use it with the small code</h4> </div>
                                    <div class="col-md-5 pull-right">
                                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div id="viprofile3" class="tab-pane">
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                                </div>
                                <div id="vimessages3" class="tab-pane">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ===== Right-Sidebar ===== -->
            <div class="right-sidebar">
                <div class="slimscrollright">
                    <div class="rpanel-title"> Service Panel <span><i class="icon-close right-side-toggler"></i></span> </div>
                    <div class="r-panel-body">
                        <ul class="hidden-xs">
                            <li><b>Layout Options</b></li>
                            <li>
                                <div class="checkbox checkbox-danger">
                                    <input id="headcheck" type="checkbox" class="fxhdr">
                                    <label for="headcheck"> Fix Header </label>
                                </div>
                            </li>
                            <li>
                                <div class="checkbox checkbox-warning">
                                    <input id="sidecheck" type="checkbox" class="fxsdr">
                                    <label for="sidecheck"> Fix Sidebar </label>
                                </div>
                            </li>
                        </ul>
                        <ul id="themecolors" class="m-t-20">
                            <li><b>With Light sidebar</b></li>
                            <li><a href="javascript:void(0)" data-theme="default" class="default-theme working">1</a></li>
                            <li><a href="javascript:void(0)" data-theme="green" class="green-theme">2</a></li>
                            <li><a href="javascript:void(0)" data-theme="yellow" class="yellow-theme">3</a></li>
                            <li><a href="javascript:void(0)" data-theme="red" class="red-theme">4</a></li>
                            <li><a href="javascript:void(0)" data-theme="purple" class="purple-theme">5</a></li>
                            <li><a href="javascript:void(0)" data-theme="black" class="black-theme">6</a></li>
                            <li class="db"><b>With Dark sidebar</b></li>
                            <li><a href="javascript:void(0)" data-theme="default-dark" class="default-dark-theme">7</a></li>
                            <li><a href="javascript:void(0)" data-theme="green-dark" class="green-dark-theme">8</a></li>
                            <li><a href="javascript:void(0)" data-theme="yellow-dark" class="yellow-dark-theme">9</a></li>
                            <li><a href="javascript:void(0)" data-theme="red-dark" class="red-dark-theme">10</a></li>
                            <li><a href="javascript:void(0)" data-theme="purple-dark" class="purple-dark-theme">11</a></li>
                            <li><a href="javascript:void(0)" data-theme="black-dark" class="black-dark-theme">12</a></li>
                        </ul>
                        <ul class="m-t-20 chatonline">
                            <li><b>Chat option</b></li>
                            <li>
                                <a href="javascript:void(0)"><img src="../../plugins/images/users/1.jpg" alt="user-img" class="img-circle"> <span>Varun Dhavan <small class="text-success">online</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../../plugins/images/users/2.jpg" alt="user-img" class="img-circle"> <span>Genelia Deshmukh <small class="text-warning">Away</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../../plugins/images/users/3.jpg" alt="user-img" class="img-circle"> <span>Ritesh Deshmukh <small class="text-danger">Busy</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../../plugins/images/users/4.jpg" alt="user-img" class="img-circle"> <span>Arijit Sinh <small class="text-muted">Offline</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../../plugins/images/users/5.jpg" alt="user-img" class="img-circle"> <span>Govinda Star <small class="text-success">online</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../../plugins/images/users/6.jpg" alt="user-img" class="img-circle"> <span>John Abraham<small class="text-success">online</small></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- ===== Right-Sidebar-End ===== -->
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
    name: 'Tabs',
    mounted() {
    }
}
</script>
