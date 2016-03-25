window.BI = window.BI || {};
(function(BI) {
	BI.tempCtr = BI.tempCtr || {}
	/**
	obj为数据 
	**/
	BI.fillTemp = function(data) {
			
		var obj = {};
		//标题部分
		obj.headArr = ["姓名","部门","招聘人数","离职人数","晋升率","晋升B7率"];
		obj.senceL = (obj.headArr.length-1);
		//左边 固定标题部分
		obj.title = ["华北","华东","华西","华南"];
		//右边数据部分
		obj.body = [
			{
				Scene:[100,200,300,400,500]
			},{
				Scene:[100,200,300,400,500]
			},{
				Scene:[100,200,300,400,500]
			},{
				Scene:[100,200,300,400,500]
			},
		];

		var thHtml = template('thTemp', obj);
		var html = template('qinwen', obj);
		
		document.querySelector('#scroll2').innerHTML = html;
		document.querySelector('#th-scroll-wraper').innerHTML = thHtml;
		//效果部分
		BI.detailEffect();
	}
	BI.fillTemp();
})(BI);
