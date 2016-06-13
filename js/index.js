$(function(){
	// 头部选项卡
	var head1_bj=$(".head1_bj")[0];
	var head1_sf=$(".head1_sf")[0];
	var head1_wdjd=$(".head1_wdjd")[0];
	var head1_wd=$(".head1_wd")[0];
	var head1_sjdd=$(".head1_sjdd")[0];
	var head1_sjjd=$(".head1_sjjd")[0];
	var head1_gzdd=$(".head1_gzdd")[0];
	var head1_gzjd=$(".head1_gzjd")[0];
	var head1_khfw=$(".head1_khfw")[0];
	var head1_khff=$(".head1_khff")[0];
	var head1_wzdh=$(".head1_wzdh")[0];
	var head1_wzdd=$(".head1_wzdd")[0];

	head1_sf.style.display="none";
	head1_bj.onmouseover=function(){
		head1_sf.style.display="block";
	}
	head1_bj.onmouseout=function(){
		head1_sf.style.display="none";
	}

	head1_wd.style.display="none";
	head1_wdjd.onmouseover=function(){
		head1_wd.style.display="block";
	}
	head1_wdjd.onmouseout=function(){
		head1_wd.style.display="none";
	}

	head1_sjjd.style.display="none";
	head1_sjdd.onmouseover=function(){
		head1_sjjd.style.display="block";
	}
	head1_sjdd.onmouseout=function(){
		head1_sjjd.style.display="none";
	}

	head1_gzjd.style.display="none";
	head1_gzdd.onmouseover=function(){
		head1_gzjd.style.display="block";
	}
	head1_gzdd.onmouseout=function(){
		head1_gzjd.style.display="none";
	}

	head1_khff.style.display="none";
	head1_khfw.onmouseover=function(){
		head1_khff.style.display="block";
	}
	head1_khfw.onmouseout=function(){
		head1_khff.style.display="none";
	}

	head1_wzdd.style.display="none";
	head1_wzdh.onmouseover=function(){
		head1_wzdd.style.display="block";
	}
	head1_wzdh.onmouseout=function(){
		head1_wzdd.style.display="none";
	}

	// banner轮播图
	var banner_M=$(".banner_M")[0];
	var banner_Mbox=$(".banner_Mbox")[0];
	var bimgs=$("img",banner_Mbox);
	var bannerM_btn=$(".bannerM_btn")[0];
	var bannerM_btnl=$(".bannerM_btnl")[0];
	var bannerM_btnr=$(".bannerM_btnr")[0];
	var blis=$("li",banner_M);
	var flag=true;
	var num=0;
	bannerM_btn.style.display="none";
	for(var i=0;i<bimgs.length;i++){
		bimgs[i].style.opacity=0;
	}
	bimgs[0].style.opacity=1;
	blis[0].style.background="#B61B1F";
	var t=setInterval(moveR,2000);
	function moveR(){
	
		 num++;
	
		 if(num==bimgs.length){
		 	num=0;
		 }
	
		for(var i=0;i<bimgs.length;i++){
			animate(bimgs[i],{opacity:0},function(){
				flag=true;
			})
			blis[i].style.background="#3e3e3e";
		}
		animate(bimgs[num],{opacity:1})
		blis[num].style.background="#B61B1F";
	}
	function moveL(){
		 num--;
		 if(num<0){
		 num=bimgs.length-1;
		 }
		for(var i=0;i<bimgs.length;i++){
			animate(bimgs[i],{opacity:0},function(){
				flag=true;
			})
			blis[i].style.background="#3e3e3e";
			}
		animate(bimgs[num],{opacity:1});
		blis[num].style.background="#B61B1F";
	}
	
	banner_M.onmouseover=function(){
		bannerM_btn.style.display="block";
		clearInterval(t);
	}
	banner_M.onmouseout=function(){
		bannerM_btn.style.display="none";
		t=setInterval(moveR,2000);
	}

	bannerM_btnl.onclick=function(){
		if(flag){
     		flag=false;
     		moveL();
     	}
	}
	bannerM_btnr.onclick=function(){
		if(flag){
     		flag=false;
     		moveR();
     	}
	}

	for(var i=0;i<blis.length;i++){
		blis[i].index=i;
		blis[i].onclick=function(){			
			for(var j=0;j<blis.length;j++){
				blis[j].style.background="#3e3e3e";
				animate(bimgs[j],{opacity:0})
			}
			blis[this.index].style.background="#B61B1F";
			animate(bimgs[this.index],{opacity:1});
			num=this.index;
		}
	}

	// 一楼轮播图
	a1();
	function a1(){
		var fzxb_botrL2=$(".fzxb_botrL2")[0];
		var fzxb_b2box=$(".fzxb_b2box")[0];
		var fzxb_imgs=$("img",fzxb_b2box);
		var fzxb_lis=$("li",fzxb_botrL2);
		var fzxb_btn=$(".fzxb_btn")[0];
		var fzxb_btnL=$(".fzxb_btnL")[0];
		var fzxb_btnR=$(".fzxb_btnR")[0];
		var flag=true;
		var num=0;
		fzxb_btn.style.display="none";
		for(var i=0;i<fzxb_imgs.length;i++){
			fzxb_imgs[i].style.opacity=0;
		}
		fzxb_imgs[0].style.opacity=1;
		fzxb_lis[0].style.background="#B61B1F";
		var t1=setInterval(moveR1,2000);
		function moveR1(){
		
			 num++;
		
			 if(num==fzxb_imgs.length){
			 	num=0;
			 }
		
			for(var i=0;i<fzxb_imgs.length;i++){
				animate(fzxb_imgs[i],{opacity:0},function(){
					flag=true;
				})
				fzxb_lis[i].style.background="#3e3e3e";
			}
			animate(fzxb_imgs[num],{opacity:1})
			fzxb_lis[num].style.background="#B61B1F";
		}
		function moveL1(){
			 num--;
			 if(num<0){
			 num=fzxb_imgs.length-1;
			 }
			for(var i=0;i<fzxb_imgs.length;i++){
				animate(fzxb_imgs[i],{opacity:0},function(){
					flag=true;
				})
				fzxb_lis[i].style.background="#3e3e3e";
				}
			animate(fzxb_imgs[num],{opacity:1});
			fzxb_lis[num].style.background="#B61B1F";
		}
		
		fzxb_botrL2.onmouseover=function(){
			fzxb_btn.style.display="block";
			clearInterval(t1);
		}
		fzxb_botrL2.onmouseout=function(){
			fzxb_btn.style.display="none";
			t1=setInterval(moveR1,2000);
		}
	
		fzxb_btnL.onclick=function(){
			if(flag){
    	 		flag=false;
    	 		moveL1();
    	 	}
		}
		fzxb_btnR.onclick=function(){
			if(flag){
    	 		flag=false;
    	 		moveR1();
    	 	}
		}
	
		for(var i=0;i<fzxb_lis.length;i++){
			fzxb_lis[i].index=i;
			fzxb_lis[i].onclick=function(){			
				for(var j=0;j<fzxb_lis.length;j++){
					fzxb_lis[j].style.background="#3e3e3e";
					animate(fzxb_imgs[j],{opacity:0})
				}
				fzxb_lis[this.index].style.background="#B61B1F";
				animate(fzxb_imgs[this.index],{opacity:1});
				num=this.index;
			}
		}
	}

	// 二楼轮播图
	a2();
	function a2(){
		var grmz_bot2=$(".grmz_bot2")[0];
		var grmz_b2box=$(".grmz_b2box")[0];
		var grmz_b2lis=$("li",grmz_b2box);
		var grmz_b2ul=$(".grmz_b2ul")[0];
		var grmz_b2liss=$("li",grmz_b2ul);
		var grmz_b2btn=$(".grmz_b2btn")[0];
		var grmz_btnL=$(".grmz_btnL")[0];
		var grmz_btnR=$(".grmz_btnR")[0];
		var widths=parseInt(getStyle(grmz_b2lis[0],"width"));
		var flag=true;
		grmz_b2btn.style.display="none";
		grmz_b2liss[0].style.background="#B61B1F"
		for(var i=0;i<grmz_b2lis.length;i++){
			if(i==0){
				continue;
			}
			grmz_b2lis[i].style.left=widths+"px";
		}
		var index=0;
		var next=0;
		var t=setInterval(moveR,2000);
		function moveR(){	
    	// 更新next
    	   	next++;
		// 判读边界
		   	if(next==grmz_b2lis.length){
			next=0;}
			// 就位
			grmz_b2liss[index].style.background="#3e3e3e";
			grmz_b2liss[next].style.background="#B61B1F";
			grmz_b2lis[next].style.left=widths+"px";
			// 动画
			animate(grmz_b2lis[index],{left:-widths});
			animate(grmz_b2lis[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
		function moveL(){
			next--;
			if(next<0){
				next=grmz_b2lis.length-1;
			}
			grmz_b2liss[index].style.background="#3e3e3e";
			grmz_b2liss[next].style.background="#B61B1F";
			grmz_b2lis[next].style.left=-widths+"px";
			animate(grmz_b2lis[index],{left:widths});
			animate(grmz_b2lis[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}

		grmz_bot2.onmouseover=function(){
			grmz_b2btn.style.display="block";
			clearInterval(t);
		}
		grmz_bot2.onmouseout=function(){
			grmz_b2btn.style.display="none";
			t=setInterval(moveR,2000);
		}

		grmz_btnR.onclick=function(){
			if(flag){
				flag=false;
				moveR();
			}
		}
		grmz_btnL.onclick=function(){
			if(flag){	
				flag=false;
				moveL();
			}
		}

		for(var i=0;i<grmz_b2liss.length;i++){
		grmz_b2liss[i].index=i;
		grmz_b2liss[i].onclick=function(){	
			// 判断下一张是否是当前
			if(this.index==index){
			return;}
			// 就位
			// 如果点右边的 从右往左滑
			if(this.index>index){
				grmz_b2lis[this.index].style.left=widths+"px";
				grmz_b2liss[index].style.background="#3e3e3e";
				grmz_b2liss[this.index].style.background="#B61B1F";
				// 动画
				animate(grmz_b2lis[index],{left:-widths});
				animate(grmz_b2lis[this.index],{left:0});	
				// 更新下标
				next=this.index;
				index=this.index;
			}else if(this.index<index){
				// 如果点左边的 从左往右滑
				grmz_b2lis[this.index].style.left=-widths+"px";
				grmz_b2liss[index].style.background="#3e3e3e";
				grmz_b2liss[this.index].style.background="#B61B1F";
				// 动画
				animate(grmz_b2lis[index],{left:widths});
				animate(grmz_b2lis[this.index],{left:0});	
				// 更新下标
				next=this.index;
				index=this.index;
				}
			}			
		}
	}

	// 三楼轮播图
	a3();
	function a3(){
		var sjtx_b2banner=$(".sjtx_b2banner")[0];
		var sjtx_b2box=$(".sjtx_b2box")[0];
		var imgs=$("img",sjtx_b2box);
		var lis=$("li",sjtx_b2banner);
		var sjtx_btn=$(".sjtx_btn")[0];
		var btnL=$(".sjtx_btnL")[0]
		var btnR=$(".sjtx_btnR")[0]
		var flag=true;
		var widths=parseInt(getStyle(imgs[0],"width"));
		// 初始化
		sjtx_btn.style.display="none";
		lis[0].style.background="#B61B1F";
		for(var i=0;i<imgs.length;i++){
			if(i==0){
				continue;
			}
			imgs[i].style.left=widths+"px";
		}
		// 下标
		var index=0;
		var next=0;
		// 时间函数
		var t=setInterval(moveR,2000);
		function moveR(){	
    	// 更新next
    	   	next++;
		// 判读边界
		   	if(next==imgs.length){
			next=0;}
			// 就位
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=widths+"px";
			// 动画
			animate(imgs[index],{left:-widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
		function moveL(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=-widths+"px";
			animate(imgs[index],{left:widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
	
		
		// 底部选项卡
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){	
				// 判断下一张是否是当前
				if(this.index==index){
				return;}
				// 就位
				// 如果点右边的 从右往左滑
				if(this.index>index){
					imgs[this.index].style.left=widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:-widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
				}else if(this.index<index){
					// 如果点左边的 从左往右滑
					imgs[this.index].style.left=-widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
					}
				}			
		}
		
		
		// 鼠标移入移出
		sjtx_b2banner.onmouseover=function(){
			sjtx_btn.style.display="block";
			clearInterval(t);
		}
		sjtx_b2banner.onmouseout=function(){
			sjtx_btn.style.display="none";
			t=setInterval(moveR,2000);
		}
			
		// 左右箭头
		btnR.onclick=function(){
			if(flag){
				flag=false;
				moveR();}
		}
		btnL.onclick=function(){
			if(flag){	
				flag=false;
				moveL();}
		}
	}

	// 四楼 轮播图
	a4();
	function a4(){
		var jydq_b2banner=$(".jydq_b2banner")[0];
		var jydq_b2box=$(".jydq_b2box")[0];
		var imgs=$("img",jydq_b2box);
		var lis=$("li",jydq_b2banner);
		var sjtx_btn=$(".jydq_btn")[0];
		var btnL=$(".jydq_btnL")[0]
		var btnR=$(".jydq_btnR")[0]
		var flag=true;
		var widths=parseInt(getStyle(imgs[0],"width"));
		// 初始化
		sjtx_btn.style.display="none";
		lis[0].style.background="#B61B1F";
		for(var i=0;i<imgs.length;i++){
			if(i==0){
				continue;
			}
			imgs[i].style.left=widths+"px";
		}
		// 下标
		var index=0;
		var next=0;
		// 时间函数
		var t=setInterval(moveR,2000);
		function moveR(){	
    	// 更新next
    	   	next++;
		// 判读边界
		   	if(next==imgs.length){
			next=0;}
			// 就位
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=widths+"px";
			// 动画
			animate(imgs[index],{left:-widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
		function moveL(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=-widths+"px";
			animate(imgs[index],{left:widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
	
		
		// 底部选项卡
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){	
				// 判断下一张是否是当前
				if(this.index==index){
				return;}
				// 就位
				// 如果点右边的 从右往左滑
				if(this.index>index){
					imgs[this.index].style.left=widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:-widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
				}else if(this.index<index){
					// 如果点左边的 从左往右滑
					imgs[this.index].style.left=-widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
					}
				}			
		}
		
		
		// 鼠标移入移出
		jydq_b2banner.onmouseover=function(){
			sjtx_btn.style.display="block";
			clearInterval(t);
		}
		jydq_b2banner.onmouseout=function(){
			sjtx_btn.style.display="none";
			t=setInterval(moveR,2000);
		}
			
		// 左右箭头
		btnR.onclick=function(){
			if(flag){
				flag=false;
				moveR();}
		}
		btnL.onclick=function(){
			if(flag){	
				flag=false;
				moveL();}
		}
	}

	// 五楼轮播图
	a5();
	function a5(){
		var dnsm_b2banner=$(".dnsm_b2banner")[0];
		var dnsm_b2box=$(".dnsm_b2box")[0];
		var imgs=$("img",dnsm_b2box);
		var lis=$("li",dnsm_b2banner);
		var dnsm_btn=$(".dnsm_btn")[0];
		var btnL=$(".dnsm_btnL")[0]
		var btnR=$(".dnsm_btnR")[0]
		var flag=true;
		var widths=parseInt(getStyle(imgs[0],"width"));
		// 初始化
		dnsm_btn.style.display="none";
		lis[0].style.background="#B61B1F";
		for(var i=0;i<imgs.length;i++){
			if(i==0){
				continue;
			}
			imgs[i].style.left=widths+"px";
		}
		console.log(btnL);
		// 下标
		var index=0;
		var next=0;
		// 时间函数
		var t=setInterval(moveR,2000);
		function moveR(){	
    	// 更新next
    	   	next++;
		// 判读边界
		   	if(next==imgs.length){
			next=0;}
			// 就位
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=widths+"px";
			// 动画
			animate(imgs[index],{left:-widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
		function moveL(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=-widths+"px";
			animate(imgs[index],{left:widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
	
		
		// 底部选项卡
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){	
				// 判断下一张是否是当前
				if(this.index==index){
				return;}
				// 就位
				// 如果点右边的 从右往左滑
				if(this.index>index){
					imgs[this.index].style.left=widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:-widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
				}else if(this.index<index){
					// 如果点左边的 从左往右滑
					imgs[this.index].style.left=-widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
					}
				}			
		}
		
		
		// 鼠标移入移出
		dnsm_b2banner.onmouseover=function(){
			dnsm_btn.style.display="block";
			clearInterval(t);
		}
		dnsm_b2banner.onmouseout=function(){
			dnsm_btn.style.display="none";
			t=setInterval(moveR,2000);
		}
			
		// 左右箭头
		btnR.onclick=function(){
			if(flag){
				flag=false;
				moveR();}
		}
		btnL.onclick=function(){
			if(flag){	
				flag=false;
				moveL();}
		}
	}

	// 六楼轮播图
	a6();
	function a6(){
		var ydjs_b3=$(".ydjs_b3")[0];
		var ydjs_b3ul1=$(".ydjs_b3ul1")[0];
		var imgs=$("li",ydjs_b3ul1);
		var ydjs_b3ul2=$(".ydjs_b3ul2")[0];
		var lis=$("li",ydjs_b3ul2);
		var ydjs_btn=$(".ydjs_btn")[0];
		var btnL=$(".ydjs_btnL")[0];
		var btnR=$(".ydjs_btnR")[0];
		var flag=true;
		var widths=parseInt(getStyle(imgs[0],"width"));
		// 初始化
		ydjs_btn.style.display="none";
		lis[0].style.background="#B61B1F";
		for(var i=0;i<imgs.length;i++){
			if(i==0){
				continue;
			}
			imgs[i].style.left=widths+"px";
		}
		// 下标
		var index=0;
		var next=0;
		// 时间函数
		var t=setInterval(moveR,2000);
		function moveR(){	
    	// 更新next
    	   	next++;
		// 判读边界
		   	if(next==imgs.length){
			next=0;}
			// 就位
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=widths+"px";
			// 动画
			animate(imgs[index],{left:-widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
		function moveL(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=-widths+"px";
			animate(imgs[index],{left:widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
	
		
		// 底部选项卡
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){	
				// 判断下一张是否是当前
				if(this.index==index){
				return;}
				// 就位
				// 如果点右边的 从右往左滑
				if(this.index>index){
					imgs[this.index].style.left=widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:-widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
				}else if(this.index<index){
					// 如果点左边的 从左往右滑
					imgs[this.index].style.left=-widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
					}
				}			
		}
		
		
		// 鼠标移入移出
		ydjs_b3.onmouseover=function(){
			ydjs_btn.style.display="block";
			clearInterval(t);
		}
		ydjs_b3.onmouseout=function(){
			ydjs_btn.style.display="none";
			t=setInterval(moveR,2000);
		}
			
		// 左右箭头
		btnR.onclick=function(){
			if(flag){
				flag=false;
				moveR();}
		}
		btnL.onclick=function(){
			if(flag){	
				flag=false;
				moveL();}
		}
	}
	// 七楼轮播图
	a7();
	function a7(){
		var jjsh_b3=$(".jjsh_b3")[0];
		var jjsh_b3ul1=$(".jjsh_b3ul1")[0];
		var imgs=$("li",jjsh_b3ul1);
		var jjsh_b3ul2=$(".jjsh_b3ul2")[0];
		var lis=$("li",jjsh_b3ul2);
		var jjsh_btn=$(".jjsh_btn")[0];
		var btnL=$(".jjsh_btnL")[0];
		var btnR=$(".jjsh_btnR")[0];
		var flag=true;
		var widths=parseInt(getStyle(imgs[0],"width"));
		// 初始化
		jjsh_btn.style.display="none";
		lis[0].style.background="#B61B1F";
		for(var i=0;i<imgs.length;i++){
			if(i==0){
				continue;
			}
			imgs[i].style.left=widths+"px";
		}
		// 下标
		var index=0;
		var next=0;
		// 时间函数
		var t=setInterval(moveR,2000);
		function moveR(){	
    	// 更新next
    	   	next++;
		// 判读边界
		   	if(next==imgs.length){
			next=0;}
			// 就位
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=widths+"px";
			// 动画
			animate(imgs[index],{left:-widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
		function moveL(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=-widths+"px";
			animate(imgs[index],{left:widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
	
		
		// 底部选项卡
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){	
				// 判断下一张是否是当前
				if(this.index==index){
				return;}
				// 就位
				// 如果点右边的 从右往左滑
				if(this.index>index){
					imgs[this.index].style.left=widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:-widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
				}else if(this.index<index){
					// 如果点左边的 从左往右滑
					imgs[this.index].style.left=-widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
					}
				}			
		}
		
		
		// 鼠标移入移出
		jjsh_b3.onmouseover=function(){
			jjsh_btn.style.display="block";
			clearInterval(t);
		}
		jjsh_b3.onmouseout=function(){
			jjsh_btn.style.display="none";
			t=setInterval(moveR,2000);
		}
			
		// 左右箭头
		btnR.onclick=function(){
			if(flag){
				flag=false;
				moveR();}
		}
		btnL.onclick=function(){
			if(flag){	
				flag=false;
				moveL();}
		}
	}
	// 八楼轮播图
	a8();
	function a8(){
		var mywj_b3=$(".mywj_b3")[0];
		var mywj_b3ul1=$(".mywj_b3ul1")[0];
		var imgs=$("li",mywj_b3ul1);
		var mywj_b3ul2=$(".mywj_b3ul2")[0];
		var lis=$("li",mywj_b3ul2);
		var mywj_btn=$(".mywj_btn")[0];
		var btnL=$(".mywj_btnL")[0];
		var btnR=$(".mywj_btnR")[0];
		var flag=true;
		var widths=parseInt(getStyle(imgs[0],"width"));
		// 初始化
		mywj_btn.style.display="none";
		lis[0].style.background="#B61B1F";
		for(var i=0;i<imgs.length;i++){
			if(i==0){
				continue;
			}
			imgs[i].style.left=widths+"px";
		}
		// 下标
		var index=0;
		var next=0;
		// 时间函数
		var t=setInterval(moveR,2000);
		function moveR(){	
    	// 更新next
    	   	next++;
		// 判读边界
		   	if(next==imgs.length){
			next=0;}
			// 就位
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=widths+"px";
			// 动画
			animate(imgs[index],{left:-widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
		function moveL(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=-widths+"px";
			animate(imgs[index],{left:widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
	
		
		// 底部选项卡
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){	
				// 判断下一张是否是当前
				if(this.index==index){
				return;}
				// 就位
				// 如果点右边的 从右往左滑
				if(this.index>index){
					imgs[this.index].style.left=widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:-widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
				}else if(this.index<index){
					// 如果点左边的 从左往右滑
					imgs[this.index].style.left=-widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
					}
				}			
		}
		
		
		// 鼠标移入移出
		mywj_b3.onmouseover=function(){
			mywj_btn.style.display="block";
			clearInterval(t);
		}
		mywj_b3.onmouseout=function(){
			mywj_btn.style.display="none";
			t=setInterval(moveR,2000);
		}
			
		// 左右箭头
		btnR.onclick=function(){
			if(flag){
				flag=false;
				moveR();}
		}
		btnL.onclick=function(){
			if(flag){	
				flag=false;
				moveL();}
		}
	}
	// 九楼轮播图
	a9();
	function a9(){
		var spbj_b3=$(".spbj_b3")[0];
		var spbj_b3ul1=$(".spbj_b3ul1")[0];
		var imgs=$("li",spbj_b3ul1);
		var spbj_b3ul2=$(".spbj_b3ul2")[0];
		var lis=$("li",spbj_b3ul2);
		var spbj_btn=$(".spbj_btn")[0];
		var btnL=$(".spbj_btnL")[0];
		var btnR=$(".spbj_btnR")[0];
		var flag=true;
		var widths=parseInt(getStyle(imgs[0],"width"));
		// 初始化
		spbj_btn.style.display="none";
		lis[0].style.background="#B61B1F";
		for(var i=0;i<imgs.length;i++){
			if(i==0){
				continue;
			}
			imgs[i].style.left=widths+"px";
		}
		// 下标
		var index=0;
		var next=0;
		// 时间函数
		var t=setInterval(moveR,2000);
		function moveR(){	
    	// 更新next
    	   	next++;
		// 判读边界
		   	if(next==imgs.length){
			next=0;}
			// 就位
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=widths+"px";
			// 动画
			animate(imgs[index],{left:-widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
		function moveL(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=-widths+"px";
			animate(imgs[index],{left:widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
	
		
		// 底部选项卡
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){	
				// 判断下一张是否是当前
				if(this.index==index){
				return;}
				// 就位
				// 如果点右边的 从右往左滑
				if(this.index>index){
					imgs[this.index].style.left=widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:-widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
				}else if(this.index<index){
					// 如果点左边的 从左往右滑
					imgs[this.index].style.left=-widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
					}
				}			
		}
		
		
		// 鼠标移入移出
		spbj_b3.onmouseover=function(){
			spbj_btn.style.display="block";
			clearInterval(t);
		}
		spbj_b3.onmouseout=function(){
			spbj_btn.style.display="none";
			t=setInterval(moveR,2000);
		}
			
		// 左右箭头
		btnR.onclick=function(){
			if(flag){
				flag=false;
				moveR();}
		}
		btnL.onclick=function(){
			if(flag){	
				flag=false;
				moveL();}
		}
	}

	// 十楼轮播图
	a10();
	function a10(){
		var tsyx_b3top=$(".tsyx_b3top")[0];
		var tsyx_b3box=$(".tsyx_b3box")[0];
		var imgs=$("img",tsyx_b3box);
		var lis=$("li",tsyx_b3top);
		var btn=$(".tsyx_btn")[0];
		var btnL=$(".tsyx_btnL")[0];
		var btnR=$(".tsyx_btnR")[0];
		var flag=true;
		var widths=parseInt(getStyle(imgs[0],"width"));
		// 初始化
		btn.style.display="none";
		lis[0].style.background="#B61B1F";
		for(var i=0;i<imgs.length;i++){
			if(i==0){
				continue;
			}
			imgs[i].style.left=widths+"px";
		}
		// 下标
		var index=0;
		var next=0;
		// 时间函数
		var t=setInterval(moveR,2000);
		function moveR(){	
    	// 更新next
    	   	next++;
		// 判读边界
		   	if(next==imgs.length){
			next=0;}
			// 就位
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=widths+"px";
			// 动画
			animate(imgs[index],{left:-widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
		function moveL(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=-widths+"px";
			animate(imgs[index],{left:widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
	
		
		// 底部选项卡
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){	
				// 判断下一张是否是当前
				if(this.index==index){
				return;}
				// 就位
				// 如果点右边的 从右往左滑
				if(this.index>index){
					imgs[this.index].style.left=widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:-widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
				}else if(this.index<index){
					// 如果点左边的 从左往右滑
					imgs[this.index].style.left=-widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
					}
				}			
		}
		
		
		// 鼠标移入移出
		tsyx_b3top.onmouseover=function(){
			btn.style.display="block";
			clearInterval(t);
		}
		tsyx_b3top.onmouseout=function(){
			btn.style.display="none";
			t=setInterval(moveR,2000);
		}
			
		// 左右箭头
		btnR.onclick=function(){
			if(flag){
				flag=false;
				moveR();}
		}
		btnL.onclick=function(){
			if(flag){	
				flag=false;
				moveL();}
		}
	}
	// 十一楼轮播图
	a11();
	function a11(){
		var zcyp_b2banner=$(".zcyp_b2banner")[0];
		var zcyp_b2box=$(".zcyp_b2box")[0];
		var imgs=$("img",zcyp_b2box);
		var lis=$("li",zcyp_b2banner);
		var btn=$(".zcyp_btn")[0];
		var btnL=$(".zcyp_btnL")[0];
		var btnR=$(".zcyp_btnR")[0];
		var flag=true;
		var widths=parseInt(getStyle(imgs[0],"width"));
		// 初始化
		btn.style.display="none";
		lis[0].style.background="#B61B1F";
		for(var i=0;i<imgs.length;i++){
			if(i==0){
				continue;
			}
			imgs[i].style.left=widths+"px";
		}
		// 下标
		var index=0;
		var next=0;
		// 时间函数
		var t=setInterval(moveR,2000);
		function moveR(){	
    	// 更新next
    	   	next++;
		// 判读边界
		   	if(next==imgs.length){
			next=0;}
			// 就位
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=widths+"px";
			// 动画
			animate(imgs[index],{left:-widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
		function moveL(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=-widths+"px";
			animate(imgs[index],{left:widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
	
		
		// 底部选项卡
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){	
				// 判断下一张是否是当前
				if(this.index==index){
				return;}
				// 就位
				// 如果点右边的 从右往左滑
				if(this.index>index){
					imgs[this.index].style.left=widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:-widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
				}else if(this.index<index){
					// 如果点左边的 从左往右滑
					imgs[this.index].style.left=-widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
					}
				}			
		}
		
		
		// 鼠标移入移出
		zcyp_b2banner.onmouseover=function(){
			btn.style.display="block";
			clearInterval(t);
		}
		zcyp_b2banner.onmouseout=function(){
			btn.style.display="none";
			t=setInterval(moveR,2000);
		}
			
		// 左右箭头
		btnR.onclick=function(){
			if(flag){
				flag=false;
				moveR();}
		}
		btnL.onclick=function(){
			if(flag){	
				flag=false;
				moveL();}
		}
	}

	// 十二楼轮播图
	a12();
	function a12(){
		var shfw_banner=$(".shfw_banner")[0];
		var shfw_b2box=$(".shfw_b2box")[0];
		var imgs=$("img",shfw_b2box);
		var lis=$("li",shfw_banner);
		var btn=$(".shfw_btn")[0];
		var btnL=$(".shfw_btnL")[0];
		var btnR=$(".shfw_btnR")[0];
		var flag=true;
		var widths=parseInt(getStyle(imgs[0],"width"));
		// 初始化
		btn.style.display="none";
		lis[0].style.background="#B61B1F";
		for(var i=0;i<imgs.length;i++){
			if(i==0){
				continue;
			}
			imgs[i].style.left=widths+"px";
		}
		// 下标
		var index=0;
		var next=0;
		// 时间函数
		var t=setInterval(moveR,2000);
		function moveR(){	
    	// 更新next
    	   	next++;
		// 判读边界
		   	if(next==imgs.length){
			next=0;}
			// 就位
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=widths+"px";
			// 动画
			animate(imgs[index],{left:-widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
		function moveL(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=-widths+"px";
			animate(imgs[index],{left:widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
	
		
		// 底部选项卡
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){	
				// 判断下一张是否是当前
				if(this.index==index){
				return;}
				// 就位
				// 如果点右边的 从右往左滑
				if(this.index>index){
					imgs[this.index].style.left=widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:-widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
				}else if(this.index<index){
					// 如果点左边的 从左往右滑
					imgs[this.index].style.left=-widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
					}
				}			
		}
		
		
		// 鼠标移入移出
		shfw_banner.onmouseover=function(){
			btn.style.display="block";
			clearInterval(t);
		}
		shfw_banner.onmouseout=function(){
			btn.style.display="none";
			t=setInterval(moveR,2000);
		}
			
		// 左右箭头
		btnR.onclick=function(){
			if(flag){
				flag=false;
				moveR();}
		}
		btnL.onclick=function(){
			if(flag){	
				flag=false;
				moveL();}
		}
	}
	a12a();
	function a12a(){
		var shfw_banner=$(".shfw_banner1")[0];
		var shfw_b2box=$(".shfw_b2box1")[0];
		var imgs=$("img",shfw_b2box);
		var lis=$("li",shfw_banner);
		var btn=$(".shfw_btn1")[0];
		var btnL=$(".shfw_btnL1")[0];
		var btnR=$(".shfw_btnR1")[0];
		var flag=true;
		var widths=parseInt(getStyle(imgs[0],"width"));
		// 初始化
		btn.style.display="none";
		lis[0].style.background="#B61B1F";
		for(var i=0;i<imgs.length;i++){
			if(i==0){
				continue;
			}
			imgs[i].style.left=widths+"px";
		}
		// 下标
		var index=0;
		var next=0;
		// 时间函数
		var t=setInterval(moveR,2000);
		function moveR(){	
    	// 更新next
    	   	next++;
		// 判读边界
		   	if(next==imgs.length){
			next=0;}
			// 就位
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=widths+"px";
			// 动画
			animate(imgs[index],{left:-widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
		function moveL(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			lis[index].style.background="#3e3e3e";
			lis[next].style.background="#B61B1F";
			imgs[next].style.left=-widths+"px";
			animate(imgs[index],{left:widths});
			animate(imgs[next],{left:0},function(){
				flag=true;
			});
			index=next;
		}
	
	
		
		// 底部选项卡
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){	
				// 判断下一张是否是当前
				if(this.index==index){
				return;}
				// 就位
				// 如果点右边的 从右往左滑
				if(this.index>index){
					imgs[this.index].style.left=widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:-widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
				}else if(this.index<index){
					// 如果点左边的 从左往右滑
					imgs[this.index].style.left=-widths+"px";
					lis[index].style.background="#3e3e3e";
					lis[this.index].style.background="#B61B1F";
					// 动画
					animate(imgs[index],{left:widths});
					animate(imgs[this.index],{left:0});	
					// 更新下标
					next=this.index;
					index=this.index;
					}
				}			
		}
		
		
		// 鼠标移入移出
		shfw_banner.onmouseover=function(){
			btn.style.display="block";
			clearInterval(t);
		}
		shfw_banner.onmouseout=function(){
			btn.style.display="none";
			t=setInterval(moveR,2000);
		}
			
		// 左右箭头
		btnR.onclick=function(){
			if(flag){
				flag=false;
				moveR();}
		}
		btnL.onclick=function(){
			if(flag){	
				flag=false;
				moveL();}
		}
	}

	// 楼层跳转
	b1();
	function b1(){
		var floor0=$(".floor");
		var flag=true;
		var floor0Arr=[];
		for(var i=0;i<floor0.length;i++){
			floor0Arr.push(floor0[i].offsetTop);
		}
		var louceng=$(".zcdh")[0];
		var lclis=$("li",louceng);
		louceng.style.left="-50"+"px";
		for(var i=0;i<lclis.length;i++){
			//console.log(lclis.length);
			lclis[i].index=i;
			lclis[i].onclick=function(){
				flag=false;
				for(var j=0;j<lclis.length;j++){
					lclis[j].style.background="white";
				}
				
				lclis[this.index].style.background="#C81623";
				animate(document.body,{scrollTop:floor0Arr[this.index]},function(){
					flag=true;
				})
				animate(document.documentElement,{scrollTop:floor0Arr[this.index]},function(){
					flag=true;
				});
			}
		}
		
		var sflag=true;
		var ch=document.documentElement.clientHeight;
		window.onscroll=function(){
			var louceng=$(".zcdh")[0];
			

			var obj=document.body.scrollTop?document.body:document.documentElement;
			var scrolltop=obj.scrollTop;
			
			if(ch+scrolltop>=floor0Arr[0]){
				if(sflag){
					sflag=false;				
					animate(louceng,{left:20});
				}
	
			}else{
				if(!sflag){
				sflag=true;
				animate(louceng,{left:-50});
				}
			}
		
		// 左边滑块变色
		  var louceng=$(".zcdh")[0];
		
		   var lclis=$("li",louceng);
		   if(!flag){
		   	return;
		   }
		   for(var i=0;i<lclis.length;i++){
			  if(ch+scrolltop>floor0Arr[i]+200){
					for(var j=0;j<lclis.length;j++){
						lclis[j].style.background="white";
					}
					lclis[i].style.background="#C81623";
				}
		    }
		}

	}

	// banner左侧选项卡
	b2();
	function b2(){
		var banner01=$(".banner01");
		var banner_yb=$(".banner_yb");
		for(var i=0;i<banner01.length;i++){
				banner01[i].index=i;
			banner01[i].onmouseover=function(){
				for(var j=0;j<banner_yb.length;j++){
					banner_yb[j].style.display="none";
				}
				banner_yb[this.index].style.display="block";
			}
			banner01[i].onmouseout=function(){
				for(var j=0;j<banner_yb.length;j++){
					banner_yb[j].style.display="none";
					
				}
			}
		}
	}
})