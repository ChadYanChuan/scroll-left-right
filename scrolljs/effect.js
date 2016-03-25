/*
 *作者：曹华楠 目前就职于平安科技
 * 加事件 和 实现效果
 */
window.BI = window.BI || {};
(function() {
	var local = {};
//	var scroll1,scroll2,scroll3,scroll4;
	BI.effectfn = {};
	

	BI.detailEffect = function() {
		/**
		 * 这里初始化
		 */
		/*document.querySelector('#go-bck').addEventListener("click", function() {
			console.log(100000);
		})*/
		/*if (!!document.querySelector('#btn-more-after')) {
			document.querySelector('#btn-more-after').addEventListener("click", function() {
				BI.latterBefore('after');
			})
		}
		if (!!document.querySelector('#btn-more-before')) {
			document.querySelector('#btn-more-before').addEventListener("click", function() {
				BI.latterBefore('before');
			})
		}*/

		document.querySelector('#scroll1').style.height = (innerH - document.querySelector('#scroll1').offsetTop) + 'px';
		BI.mark=new Date().getTime();
		BI.scroll1 = new CScroll('#scroll1', {
				scrollX: false,
				scrollY: true,
				transition: true,
				preventDefault: true,
				tap:'click',
//				tile:'这个是刚进来时的#scroll1',
				mark:BI.mark,
				newer:true,
				name:'scroll1',
//				click: true,
				bounce: true
			}),
			BI.scroll2 = new CScroll('#scroll2', {
				scrollX: true,
				scrollY: false,
				transition: true,
				preventDefault: true,
				tap:'click',
//				tile:'这个是刚进来时的#scroll2',
				name:'scroll2',
				mark:BI.mark,
				newer:true,
//				click: true,
				bounce: true,
				hasThScroll: true,
				thScrollId: '#th-scroll-wraper'
			});
			BI.scroll13=new CScroll('#th-scroll-wraper', {
				scrollX: true,
				scrollY: false,
				transition: true,
				preventDefault: true,
				mark:BI.mark,
				newer:true,
				click: true,
				bounce: true,
				hasThScroll: true,
				thScrollId: '#scroll2'
			});
			
		var scr  = new CScroll('#org-scroll-wrapper', {
			scrollX: true,
			scrollY: false,
			bounce: true,
			momentum: false,
			snap: true,
			click:true,
			snapStepX: (window.innerWidth) / 3,
			bounceEasing: "elastic"
				//					startX:-110
		});
		scr.scrollTo(-BI.levelIndex * (window.innerWidth) / 3, 0);
		scr.currentPage.pageX = BI.levelIndex;
		/*
		 * 这里要设置currntPage是0还是1
		 * _currentPage为移动到的当前快
		 */
		var currentX, currntPage = BI.levelIndex,
			_currentPage;
		var boxms = document.querySelectorAll('.boxm');
		for(var i=0;i<boxms.length;i++){
			boxms[i].querySelector('.circle').addEventListener('click',function(){
				var levelIndx=this.getAttribute('levelIndx');
				boxms[currntPage].querySelector('.circle').classList.remove('mild');
				currntPage=_currentPage=levelIndx;
				
				scr.scrollTo(-currntPage* (window.innerWidth) / 3, 0);
				scr.currentPage.pageX = currntPage;
				BI.levelChange(currntPage);
				boxms[currntPage].querySelector('.circle').classList.add('mild');
//				console.log();
			})
		}
		scr.on('scrollEnd', function() {
			var thisX = this.x;
			var oneW = (window.innerWidth) / 3;
			if (-thisX <= 10) {
				_currentPage = 0;
			} else
			if (-thisX <= oneW + 1) {
				_currentPage = 1;
			} else if (-thisX > oneW + 2 && -thisX <= 2 * oneW + 1) {
				_currentPage = 2;
			} else if (-thisX > 2 * oneW + 1 && -thisX <= 3 * oneW + 2) {
				_currentPage = 3;
			} else if (-thisX > 3 * oneW + 1 && -thisX <= 4 * oneW + 2) {
				_currentPage = 4;
			} else if (-thisX > 4 * oneW + 1 && -thisX <= 5 * oneW + 2) {
				_currentPage = 5;
			} else if (-thisX > 5 * oneW + 1 && -thisX <= 6 * oneW + 2) {
				_currentPage = 6;
			}
			//			_currentPage = this.currentPage.pageX;
			
			boxms[currntPage].querySelector('.circle').classList.remove('mild');
			boxms[_currentPage].querySelector('.circle').classList.add('mild');
			currntPage = _currentPage;
			BI.levelChange(currntPage);
		});
	}
		BI.detailConfidence = function() {
		/**
		 * 这里初始化
		 */
		if(!!document.querySelector('#go-bck')){
		document.querySelector('#go-bck').addEventListener("click", function() {
		
		//				history.go(-1);
			location.href = 'index.html?userId=' + BI.USERID+'&deviceType='+BI.deviceType;
		
		})
		}
		/*if (!!document.querySelector('#btn-more-after')) {
			document.querySelector('#btn-more-after').addEventListener("click", function() {
				BI.latterBefore('after');
			})
		}
		if (!!document.querySelector('#btn-more-before')) {
			document.querySelector('#btn-more-before').addEventListener("click", function() {
				BI.latterBefore('before');
			})
		}*/

		document.querySelector('#scroll1').style.height = (innerH - document.querySelector('#scroll1').offsetTop) + 'px';
		BI.mark=new Date().getTime();
		BI.scroll1 = new CScroll('#scroll1', {
				scrollX: false,
				scrollY: true,
				transition: true,
				preventDefault: true,
				tap:'click',
//				tile:'这个是刚进来时的#scroll1',
				mark:BI.mark,
				newer:true,
				name:'scroll1',
//				click: true,
				bounce: true
			}),
			BI.scroll2 = new CScroll('#scroll2', {
				scrollX: true,
				scrollY: false,
				transition: true,
				preventDefault: true,
				tap:'click',
//				tile:'这个是刚进来时的#scroll2',
				name:'scroll2',
				mark:BI.mark,
				newer:true,
//				click: true,
				bounce: true,
				hasThScroll: true,
				thScrollId: '#th-scroll-wraper'
			});
			BI.scroll13=new CScroll('#th-scroll-wraper', {
				scrollX: true,
				scrollY: false,
				transition: true,
				preventDefault: true,
				mark:BI.mark,
				newer:true,
				click: true,
				bounce: true,
				hasThScroll: true,
				thScrollId: '#scroll2'
			});
			
		
	}

	BI.levelEffect = function() {
//		var scroll11,scroll21,scroll31;
//		scroll11&&scroll11.destroy();
//		scroll21&&scroll21.destroy();
//		scroll31&&scroll31.destroy();
		BI.mark=new Date().getTime();
		BI.scroll1 = new CScroll('#scroll1', {
				scrollX: false,
				scrollY: true,
				transition: true,
				bounce: true,
				preventDefault: true,
				momentum:false,
				tile:'这个是改变层级时的#scroll11',
				name:'scroll1',
//				click: true,
				mark:BI.mark,
				newer:true,
				tap:'click',
				bounce: true
			}),
			BI.scroll2 = new CScroll('#scroll2', {
				scrollX: true,
				scrollY: false,
				transition: true,
				preventDefault: true,
				tile:'这个是改变层级时的#scroll21',
				name:'scroll2',
				mark:BI.mark,
				newer:true,
//				click: true,
				tap:'click',
				bounce: true,
				hasThScroll: true,
				thScrollId: '#th-scroll-wraper'
			}),
			BI.scroll3 = new CScroll('#th-scroll-wraper', {
				scrollX: true,
				scrollY: false,
				transition: true,
				preventDefault: true,
				click: true,
				bounce: true,
				hasThScroll: true,
				thScrollId: '#scroll2'
			});
			
		if (!!document.querySelector('#btn-more-after')) {
			document.querySelector('#btn-more-after').addEventListener("click", function() {
				BI.latterBefore('after');
			})
		}
		if (!!document.querySelector('#btn-more-before')) {
			document.querySelector('#btn-more-before').addEventListener("click", function() {
				BI.latterBefore('before');
			})
		}
	}

	BI.effect = function(opt) {
			//给首页的指标添加点击效果
			var scrollpanel = document.querySelector('#scrollpanel');
			var toppanelinfo= document.querySelector('#top-panel-info');
			if (!!scrollpanel) {
				var zbLis = scrollpanel.querySelectorAll('.scr_x');

				for (var i = 0; i < zbLis.length; i++) {
					zbLis[i].addEventListener('click', function() {
						//						this.style.opacity = 0.5;
						//						this.style.background = '#333';
						if(this.getAttribute('zbcode')=='70070'){
							return;
						}
						location.href = 'details.html?d1=' + document.querySelector('#getorgid').getAttribute('orgid') + '&d2=' + BI.USERID + '&d3=' + this.getAttribute('zbcode') +
							'&d4=' + BI.budinessDate+'&deviceType='+BI.deviceType;
					})
				}
			}
			if(!!toppanelinfo){
				toppanelinfo.addEventListener('click',function(){
					location.href = 'details.html?d1=' + document.querySelector('#getorgid').getAttribute('orgid') + '&d2=' + BI.USERID + '&d3=' + this.getAttribute('zbcode') +
							'&d4=' + BI.budinessDate+'&deviceType='+BI.deviceType;
				});
			}
			selfAdaption();
			beginScroll();
			//开始渲染趋势图
			if(opt.doWhat!='typeSearch'){
				h_home_begin(BI.USERID,BI.budinessDate,BI.orgid,opt);
			}
		}
		//	在这里自适应屏幕窗口

	function selfAdaption() {
		var innerH = window.innerHeight,
			innerW = window.innerWidth,
			headerH = document.querySelector('header').offsetHeight,
			footerH = document.querySelector('.footer').offsetHeight;
		document.querySelector('.main').style.width = innerW + 'px';
		BI.SCENEWIDTH = BI.SCENENUM * BI.SCENELIWidth;
		document.querySelector('#panel').style.width = BI.SCENEWIDTH + 32 + 'px';
		if(document.querySelector('#top-panel')){
			document.querySelector('#top-panel').style.width = BI.SCENEWIDTH + 32 + 'px';
		}
	}

	function beginScroll() {
		window.cUtils = window.cUtils || {};

		var scroll1 = new CScroll('#scrollwraper1', {
				scrollX: false,
				scrollY: true,
				transition: true,
				preventDefault: true,
				bounce: true,
				//				deceleration: 0.006,
				click: true
			}),
			scroll2 = new CScroll('#scrollwraper2', {
				scrollX: true,
				//				startX: -BI.SCENEWIDTH,
				scrollY: false,
				//				transition: false,
				preventDefault: true,
				bounce: true,
				hasThScroll: true,
				thScrollId: '#top-scroll'
					//				snap: true,
					//				snapStepX: BI.innerW/5,
					//				momentum: false,
					//				bounceEasing: "elastic",
					//				deceleration: 0.009,
					//				circl: true
			});
		if(document.querySelector('#top-panel')){
			scroll3 = new CScroll('#top-scroll', {
			scrollX: true,
			scrollY: false,
			transition: true,
			preventDefault: true,
			bounce: true,
			hasThScroll: true,
			thScrollId: '#scrollwraper2',
			click: true
		});
		}
		
	}
})();
