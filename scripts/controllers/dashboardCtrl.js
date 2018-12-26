angular
	.module('app')
	.controller('dashboardController',['$scope',function($scope){
        $scope.number =[1,2,3,4,5,6];
        var lineData1 = [[0, 11],[1, 8],[2, 25],[3, 24]]
           ,lineData2 = [[0, 8],[1, 12],[2, 20],[3, 28]]
           ,lineticks = [[0, "Jan"], [1, "Feb"], [2, "Mar"], [3, "April"]]
           ,barData = [[0, 11],[1, 15],[2, 25],[3, 24]]
           ,dataset = [{ label: "2012 Average Temperature", data: barData, color: "#52dab9" }]
           ,barTicks = [[0, "London"], [1, "NY"], [2, "New Delhi"], [3, "Taipei"]];


//Line chart data and options
        $scope.lineChartData = [
            { data: lineData1, color: "#52DAB9" },
            { data: lineData2, color: "#FF91A4" }
            ];
        $scope.lineChartOptions = {
            series: {
                lines: {
                    show: true
                }
            },
            xaxis: {
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 10,
                ticks: barTicks,
                tickLength : 0
            },
            yaxis: {
                axisLabelUseCanvas: false,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 3
            },
            legend: {
                show: false
            },
            grid: {
                borderWidth : 0
            }
        }; 
//Bar chart data and options
        $scope.barChartData = [{ data: barData, color: "#52dab9" }];

        $scope.barChartOptions = {
            series: {
                bars: {
                    show: true
                }
            },
            bars: {
                align: "center",
                barWidth: 0.5
            },
            xaxis: {
                axisLabel: "World Cities",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 10,
                ticks: barTicks,
                tickLength : 0
            },
            yaxis: {
                axisLabel: "Average Temperature",
                axisLabelUseCanvas: false,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 3,
                tickFormatter: function (v, axis) {
                    return v + "k";
                }
            },
            legend: {
                show: false
            },
            grid: {
                borderWidth : 0
            }
        };
    
    //notification box animation
    $('.notification-toggle').click(function(){
        event.preventDefault();
        event.stopPropagation();
        $('.notification-desc').fadeToggle( "slow", "linear" );
    });
    $('body').click(function(){
        $('.notification-desc').fadeOut( "slow", "linear" );
        $('.dropdown-menu').fadeOut( "slow", "linear" );
    })
    
    //menu box animation
    $('.dropdown').click(function(){
        event.preventDefault();
        event.stopPropagation();
        $('.dropdown-menu').fadeToggle( "slow", "linear" );
    });
    
    //side menu animation effect
    $('#side-menu li').click(function(){
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