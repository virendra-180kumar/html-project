angular
	.module('app')
	.controller('sideNavCtrl',['$scope','$stateParams','$state','LoginService',function($scope,$stateParams,$state,LoginService){
		
		
		$('#side-menu li').click(function(){
			alert("ad")
        event.preventDefault();
        event.stopPropagation();
        if($('#side-menu').hasClass('open')){
            $('.sidebar ul li a> span').fadeOut(function(){
                $('#side-menu').removeClass('open',400,function(){
                    //lineChartDraw();
                    //barChartDraw();
                } );
            });
        }else {
            $('#side-menu').addClass('open',400,function(){
                    //lineChartDraw();
                    //barChartDraw();
                $('.sidebar ul li a> span').fadeIn(function(){
                });
            });
            
        }

    })

	}])