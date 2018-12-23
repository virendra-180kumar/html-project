$(window).load(function(){
	//ploting chart code

	function lineChartDraw(){
		var data1 = [[0, 11],[1, 8],[2, 25],[3, 24]];
		var data2 = [[0, 8],[1, 12],[2, 20],[3, 28]];
        var dataset = [
        	{ data: data1, color: "#52DAB9" },
        	{ data: data2, color: "#FF91A4" }
        	];
        var ticks = [[0, "Jan"], [1, "Feb"], [2, "Mar"], [3, "April"]];
 
        var options = {
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
                ticks: ticks,
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
 
        $.plot($("#placeholder"), dataset, options);
	}
	
	function barChartDraw(){
		var data = [[0, 11],[1, 15],[2, 25],[3, 24]];
        var dataset = [{ label: "2012 Average Temperature", data: data, color: "#52dab9" }];
        var ticks = [[0, "London"], [1, "New York"], [2, "New Delhi"], [3, "Taipei"]];
 
        var options = {
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
                ticks: ticks,
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
        $.plot($("#flot-placeholder"), dataset, options);
	};

	setTimeout(function(){
		lineChartDraw();
		barChartDraw();
	},100)
	//slider js code
	$('.slider-wrapper').slick({
	  dots: false,
	  arrows : true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

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
					lineChartDraw();
					barChartDraw();
				} );
			});
		}else {
			$('#side-menu').addClass('open',400,function(){
					lineChartDraw();
					barChartDraw();
				$('.sidebar ul li a> span').fadeIn(function(){
				});
			});
			
		}

	})
});
	