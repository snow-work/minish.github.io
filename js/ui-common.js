// var device = {
//     agent: navigator.userAgent.toLocaleLowerCase(),
//     os: null,
//     ver: null,
//     isApp: null,
//     appHgt: 0,
//     val: "",
//     isGnb: false,
//     init: function() {
//         var str;
//         var ver;
//         if (device.agent !== undefined) {
//             if (device.agent.indexOf("iphone") > -1 || device.agent.indexOf("ipad") > -1) {
//                 str = device.agent.substring(device.agent.indexOf("os") + 3);
//                 ver = str.substring(0, str.indexOf(" like"));
//                 device.os = "ios";
//                 device.ver = device.os + ver
//             }
//             if (device.agent.indexOf("android") > -1) {
//                 str = device.agent.substring(device.agent.indexOf("android") + 8);
//                 var strSub = str.substring(0, str.indexOf(";"));
//                 ver = strSub.replace(/[.]/gi, "_");
//                 device.os = "android";
//                 device.ver = device.os + ver
//             }
//         }
//         device.set()
//     },
//     set: function() {
//         var html = document.querySelector("html");
//         var htmlClass = html.getAttribute("class");
//         var etc = "";
//         if (device.agent.indexOf("samsung") > -1)
//             etc += " samsung";
//         if (device.agent.indexOf("naver") > -1)
//             etc += " naver";
//         if (device.agent.indexOf("secapp") > -1 || device.agent.indexOf("sectest") > -1) {
//             device.ver += " secapp";
//             device.isApp = true
//         }
//         if (device.os !== null)
//             htmlClass ? html.setAttribute("class", htmlClass + " " + device.ver + etc) : html.setAttribute("class", device.ver + etc);
//         device.resp();
//         window.addEventListener("resize", device.resp)
//     },
//     resp: function() {
//         if (window.innerWidth > 1100)
//             device.val = "p";
//         if (window.innerWidth <= 1100 && window.innerWidth >= 801)
//             device.val = "t";
//         if (window.innerWidth < 801)
//             device.val = "m";
//         if (window.innerWidth > 1281)
//             device.isGnb = true;
//         setTimeout(function() {
//             if (window.innerWidth > 1100)
//                 device.val = "p";
//             if (window.innerWidth <= 1100 && window.innerWidth >= 801)
//                 device.val = "t";
//             if (window.innerWidth < 801)
//                 device.val = "m";
//             if (window.innerWidth > 1281)
//                 device.isGnb = true
//         }, 100)
//     }
// };
// device.init();

// var viewportChange = function() {
//     var pcView = "width=802,maximum-scale=1.0";
//     var normalView = "width=device-width,initial-scale=1.0";
//     var viewPort = document.querySelector('[name="viewport"]');
//     function widthChk() {
//         var winW = window.outerWidth;
//         if (device.agent !== undefined)
//             if (device.agent.indexOf("iphone") > -1 || device.agent.indexOf("ipad") > -1 || device.agent.indexOf("android") > -1)
//                 if (540 < winW && winW < 1100)
//                     viewPort.setAttribute("content", pcView);
//                 else
//                     viewPort.setAttribute("content", normalView)
//     }
//     widthChk();
//     window.addEventListener("resize", function() {
//         if (viewPort.getAttribute("content") == pcView || viewPort.getAttribute("content") == normalView)
//             widthChk();
//         else
//             return false
//     })
// };
// !function() {
//     viewportChange()
// }();



// window.addEventListener('load', function() {
//     var allElements = document.getElementsByTagName('*');
//     Array.prototype.forEach.call(allElements, function(el) {
//         var includePath = el.dataset.includePath;
//         if (includePath) {
//             var xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             el.outerHTML = this.responseText;
//         }
//             };
//             xhttp.open('GET', includePath, true);
//             xhttp.send();
//         }
//     });
// });


// $(document).ready(function() {});

window.onload=function(){
	// 인트로 처리
	$('.main_page').addClass('play')
	setTimeout(() => {
		$('.intro_wrap').addClass('play');
	}, 1000);
	setTimeout(() => {
		$('.intro_wrap').addClass('end');
		$('.main_page').addClass('end');
	}, 2000);



	// 로그인, 회원가입, 인재채용 검은헤더
	if($(".page_wrap").hasClass("join")||$(".page_wrap").hasClass("login")){
		$('.header_con .top_wrap').addClass("black")
	}



	// TwentyTwenty 플러그인 (미니쉬 - 케이스 전후비교)
	if($(".twentytwenty-container").length>0){
		$(".twentytwenty-container").twentytwenty();
	}


	// fullpage 플러그인 (B&A, 진료과목 전체)
	if($('.bna_page').length>0){
		$('.bna_page').fullpage({
			//options here
			scrollHorizontally: true,
			responsiveWidth: 768,
			onLeave: function(origin, destination, direction, trigger) {
				if(destination.index==0){
					$("#header .top_wrap").removeClass("fixed down")
				}else{
					$("#header .top_wrap").addClass("fixed")
					if(direction == "up"){
						$("#header .top_wrap").addClass("down")
					}else{
						$("#header .top_wrap").removeClass("down")
					}
				}
				origin.item.querySelector(".scr_chk").classList.remove('active')
			},
			onScrollOverflow: function( section, slide, position, direction){
				if(direction == "up"){
					$("#header .top_wrap").addClass("down")
				}else{
					$("#header .top_wrap").removeClass("down")
				}
			},
		});
	}
	// if($('.clinic_page').length>0){
	// 	$('.clinic_page').fullpage({
	// 		//options here
	// 		// scrollHorizontally: true,
	// 		responsiveWidth: 768,
	// 		// normalScrollElements:'.sec_last',
	// 		onLeave: function(origin, destination, direction, trigger) {
	// 			if(destination.index==0){
	// 				$("#header .top_wrap").removeClass("fixed down")
	// 			}else{
	// 				$("#header .top_wrap").addClass("fixed")
	// 				if(direction == "up"){
	// 					$("#header .top_wrap").addClass("down")
	// 				}else{
	// 					$("#header .top_wrap").removeClass("down")
	// 				}
	// 			}
	// 			// origin.item.querySelector(".scr_chk").classList.remove('active')
	// 			// console.log(origin.item.classList)
	// 		},
	// 		onScrollOverflow: function( section, slide, position, direction){
	// 			if(direction == "up"){
	// 				$("#header .top_wrap").addClass("down")
	// 			}else{
	// 				$("#header .top_wrap").removeClass("down")
	// 			}
	// 		},
	// 	});
	// }
}


// 헤더 퀵
$(".top_tnb").hover(function(){
	$(".top_tnb ul").slideToggle("fast");	
});


// gnb
$(".btn_gnb_open").click(function(){
	$(".gnb_wrap").slideDown()
	$("body").addClass("fixed")
})
$(".btn_gnb_close").click(function(){
	$(".gnb_wrap").slideUp()
	$("body").removeClass("fixed")
})
//  gnb 모바일에서 하단메뉴 아코디언처리
$(".gnb_list strong").click(function(){
	console.log( $(this))
	if($(document).width()<=768){
		$(".gnb_list ul").slideUp();
		$(this).next().slideDown();
	}
})
$(window).resize(function(){
	// 모바일에서 태블릿으로 넘어갈때 아코디언 처리 해제
	if($(document).width()>768){
		$(".gnb_list ul").attr("style","");
	}
})




// 하단 sns 버튼
$(".sns_fixed_con button").click(function(){
	$(".sns_fixed_con").toggleClass("open")
})



// 레이어팝업
// 팝업오픈
function layer_popup_open(popname){
	$(popname).addClass("active");
	// 3초뒤 팝업닫기, 닫기 텍스트 있을때만 
	if($(popname).find(".close_txt").length>0){  
		setTimeout(function(){
			$(popname).removeClass("active");
			if($(popname).hasClass("popup_guest_login")){
				// 로그인연결 팝업 - 종료시 페이지이동
				window.location.href='https://meplz.co.kr/mtech/html/login/login.html'
			}
		}, 3000);
	}
}
// 닫기버튼으로 팝업 닫기
$(".btn_pop_close").click(function(){
	$(this).parents(".layer_popup").removeClass("active");
	if($(this).parents(".layer_popup").hasClass("popup_guest_login")){
		// 로그인연결 팝업 - 종료시 페이지이동
		window.location.href='https://meplz.co.kr/mtech/html/login/login.html'
	}
})
// 개인정보 취급방침 확인버튼
function policy_check(radioName){
	$("input[name='"+radioName+"']").prop('checked',true)
	$(".layer_popup").removeClass("active");
}




// textarea 포커스
$(".ui_textarea textarea").focus(function(){
	$(this).parent().addClass("active")
})
$(".ui_textarea textarea").focusout(function(){
	if($(this).prop("value").length==0){
		$(this).parent().removeClass("active")
	}
})




// 셀렉트박스 열림/닫힘
$(".ui_select button").click(function(){
	if($(this).parents(".ui_select").hasClass("active")) {
		$(this).parents(".ui_select").removeClass("active");
	} else {
		$(".ui_select").removeClass("active");
		$(this).parents(".ui_select").addClass("active");
	}
});

// 셀렉트박스 옵션 처리
$(".ui_select .option label").click(function(){
	let optionValue = $(this).children("span").text();
	let el =  $(this).parents(".ui_select");
	el.find("button").html(optionValue);
	el.removeClass("active")
})




// 탭 동작
$(".ui_tab ul li button").click(function(){
	let elTab = $(this).parents(".tab_wrap");
	let elContants = elTab.next(".tab_box_wrap");
	let elIndex = $(this).parent().index();
	let eltxt = $(this).text();
	if($(this).hasClass("on")==0){
		// console.log(elContants.find(".tab_box").eq(elIndex))
		elTab.find("button").removeClass("on");
		elContants.find(".tab_box").removeClass("on");
		$(this).addClass("on")
		elContants.find(".tab_box").eq(elIndex).addClass("on")
		elTab.find(".btn_tab_open").html(eltxt);
		elTab.find(".ui_tab").removeClass("active")
	}else{
		elTab.find(".ui_tab").removeClass("active")
	}
})
// 모바일 탭 열림/닫힘
$(".ui_tab .btn_tab_open").click(function(){
	if($(this).parents(".ui_tab").hasClass("active")) {
		$(this).parents(".ui_tab").removeClass("active");
	} else {
		$(".ui_tab").removeClass("active");
		$(this).parents(".ui_tab").addClass("active");
	}
});
// 특정탭으로 이동
function moveTab(tgTab, tgIndex){
	// tgTab 이동할 탭 클래스
	// tgIndex 이동할 탭 인덱스
	tgTabBox = $(tgTab).next(".tab_box_wrap");
	tgTxt = $(tgTab).find("ul li").eq(tgIndex).find("button").text();
	$(tgTab).find(".btn_tab_open").html(tgTxt);
	$(tgTab).find("ul li").find("button").removeClass("on")
	$(tgTab).find("ul li").eq(tgIndex).find("button").addClass("on")
	tgTabBox.find(".tab_box").removeClass("on");
	tgTabBox.find(".tab_box").eq(tgIndex).addClass("on");
}

// 서브비주얼 변경 함수
function chage_subvisaul(svClass){
	$(".sub_visual_con").attr('class', 'sub_visual_con');
	$(".sub_visual_con").addClass(svClass)
}

// 페이지 스위칭 - ex 공지사항 새소식
function page_swiching(tpage){
	$(".swich_page").removeClass("on");
	$("." + tpage).addClass("on");
	if(tpage=='bbs_view_wrap'){
		// 글보기 페이지로 갔을 때
		// 제목 안보이는 상태면 스크롤 올림
		nowScr = window.scrollY;
		let vmPoint = $(".notice_page_con").offset().top;
		if (vmPoint < nowScr){
			window.scrollTo(0, vmPoint)
		}
	}
}




// 스크롤 fade  
// 스크롤 체크할 객체
const scrEl = document.querySelectorAll(".scr_chk")
// 영역설정 
const optionIn = {
	rootMargin: '-100px 0px 0px 0px'
}
const optionOut = {
	rootMargin: '0px'
}

// 영역안으로 들어옴
const scrEfectIn = (entries, observerIn) => {
  entries.forEach(entry => {
	if (entry.isIntersecting) {
		entry.target.classList.add("active")
		// 영상 자동재생
		if(entry.target.querySelector(".video_box")) {
			new Vimeo.Player(entry.target.querySelector("iframe")).play()
		}
		// 메인 비디오영역 영상재생
		if(entry.target.classList.contains("main_video_con")) {
			if(window.visualViewport.width>768){
				// PC 재생
				new Vimeo.Player(entry.target.querySelector(".ver_pc iframe")).play()
			}else{
				// MO 재생
				new Vimeo.Player(entry.target.querySelector(".ver_mo iframe")).play()
			}
		}
		// 
	}
  });
}
// 영역 벗어남
const scrEfectOut = (entries, observerOut) => {
  entries.forEach(entry => {
	if (!entry.isIntersecting) {
		entry.target.classList.remove("active")
	}
  });
}
const observerIn = new IntersectionObserver(scrEfectIn, optionIn);
scrEl.forEach(scr => observerIn.observe(scr));
const observerOut = new IntersectionObserver(scrEfectOut, optionOut);
scrEl.forEach(scr => observerOut.observe(scr));





//----------메인페이지 start------------- //
// 메인 공지사항
$(".notice_wrap button").click(function(){
	$(".notice_wrap").hide()
})


// 의사 마우스오버 이벤트
$(".dr_wrap").hover(function(){
	if($(document).width()>768){
		$(".dr_wrap").toggleClass('off');
		$(this).removeClass('off');
		$(this).toggleClass('on');
	}
})


// oao 영역, 헤더 스크롤 이벤트
let lastScr = 0;
document.addEventListener("scroll", (e) => {
	// oao 텍스트, 이미지 fixed
	if($(".main_oao_con").length>0){
		// PC에서만
		if($(document).width()>768){
			// oao fiexd 범위 
			let titStartPoint= $('.scr_chk_point.point01').offset().top;
			let titEndPoint= $('.scr_chk_point.point02').offset().top;
			let imgStartPoint= $('.scr_chk_point.point03').offset().top;
			let imgEndPoint= $('.scr_chk_point.point04').offset().top;
			let nowScr = window.scrollY+window.innerHeight/2;
			// 타이틀 고정 처리
			if(titStartPoint<=nowScr&&titEndPoint>=nowScr){
				// 범위 내 fiexd  
				$(".main_oao_con .txt_wrap").addClass('fixed')
			}else{
				// 범위 밖, fixed 삭제
				$(".main_oao_con .txt_wrap").removeClass('fixed')
				// 타이틀 위치 지정
				if(imgStartPoint>=nowScr){
					// 위로 스크롤 되었을 때
					$(".main_oao_con .txt_wrap").removeClass('bottom')
				}else{
					$(".main_oao_con .txt_wrap").addClass('bottom')
				}
			}
			// 이미지 고정 처리
			if(imgStartPoint<=nowScr&&imgEndPoint>=nowScr){
				// 범위 내 fiexd// 범위 내 fiexd
				$(".main_oao_con .img_04").addClass('fixed')
				$(".main_oao_con .img_04").removeClass('bottom')
			}else{
				// 범위 밖, fixed 삭제
				$(".main_oao_con .img_04").removeClass('fixed')
				// 타이틀 위치 지정
				if(imgStartPoint>=nowScr){
					// 위로 스크롤 되었을 때
					$(".main_oao_con .img_04").removeClass('bottom')
				}else{
					$(".main_oao_con .img_04").addClass('bottom')
				}
			}
		}else{
			$(".main_oao_con .txt_wrap").removeClass('fixed')
			$(".main_oao_con .img_04").removeClass('fixed')
			$(".main_oao_con .img_04").removeClass('bottom')
		}
	}
	
	let currScr = window.scrollY;
	// 스크롤시 헤더 픽스
	if(window.scrollY>0){
		$("#header .top_wrap").addClass("fixed");
		// 스크롤 올리면 나타남
		if (lastScr > currScr){
			$("#header .top_wrap").addClass("down");
		}else{
			$("#header .top_wrap").removeClass("down");
		}
		// 스크롤 내리면 사라짐
	}else{
		// 스크롤 0일때 픽스 풂}
		$("#header .top_wrap").removeClass("fixed");
	}
	lastScr = currScr;
})
//----------메인페이지 end------------- //




// 아이디 찾기 탭
// 탭 동작
$(".find_tab button").click(function(){
	let elTab = $(".find_tab");
	let elIndex = $(this).parent().index();

	elTab.find("button").removeClass("on");
	$(".tab_box").removeClass("on");
	$(this).addClass("on")
	
	if(elIndex==0){
		$(".tab_box.find_id").addClass("on")
	}else{
		$(".tab_box.find_pw").addClass("on")
	}
})


// 회원가입 전체동의
$(".btn_chk_all input").change(function(){
	if($(this).is(':checked')){
		$(".join_step01 .join_input_wrap input[value='agree']").prop('checked',true)
	}else{
		$(".join_step01 .join_input_wrap input[value='agree']").prop('checked',false)
	}
})




// 상담예약 캘린더
// calMonth => 현재 달 설정, 오늘 기준 이전 달 버튼 비활성화
// calTomorrow => 내일, 초기 날짜 선택
const sToday = new Date();
const nowYear = sToday.getFullYear();
const nowMonth = sToday.getMonth() + 1;
const nowDate = sToday.getDate() + 1;
let calMonth = nowYear + "-"; 
let calTomorrow = nowYear + "-"; 
if (nowMonth < 10) {
	calMonth += "0";
	calTomorrow += "0";
}
calMonth += nowMonth + "-" + "01";
calTomorrow += nowMonth + "-";
if (nowDate < 10) {
	calTomorrow += "0";
}
calTomorrow += nowDate;
// FullCalendar 플러그인
document.addEventListener('DOMContentLoaded', function() {
	if(document.getElementById('calendar')){
		var calendarEl = document.getElementById('calendar');
		var calendar = new FullCalendar.Calendar(calendarEl, {
			initialView: 'dayGridMonth',
			headerToolbar: {
				left: 'prev,next title',
				center: '',
				right: ''
				// left: 'prev,next today',
				// center: 'title',
				// right: 'dayGridMonth,timeGridWeek,timeGridDay'
			},
			locale: "ko",
			fixedWeekCount:false,
			showNonCurrentDates: false,
			validRange: {
				start: calMonth
			},
			dateClick: function(info) {
				if(info.dayEl.classList.contains("fc-day-future")){
					if(document.querySelector(".fc-daygrid-day.on")){
						document.querySelector(".fc-daygrid-day.on").classList.remove("on")
					}
					info.dayEl.classList.add("on")
				}
			}
		});
		calendar.render();
		document.querySelector(".fc-day-future[data-date='" +calTomorrow+ "']").classList.add("on")
		calSet()

		$(".fc-button-group button").click(function(){
			calSet()
		});
	}
});
function calSet(){
	// 날짜 "일"삭제
	$(".fc-daygrid-day-top a").each(function(index, item){
		var chageD = $(item).text().replace("일","");
		$(item).text(chageD);
	})
}



// 예약정보 슬라이드
var reserveSwiper = new Swiper(".current_reserve_box", {
	navigation: {
	  nextEl: ".space_swiper02 .swiper-button-next",
	  prevEl: ".space_swiper02 .swiper-button-prev",
	},
});



// 병원소개 - 비전 슬라이드
var reserveSwiper = new Swiper(".vis_slogan_swiper", {
	slidesPerView: 1,
	autoplay:true,
	loop: true,
	breakpoints: {
		768: {
		  slidesPerView: "auto",
		},
	}
});



// 병원소개 - 공간안내 슬라이드
var spaceSwiper01 = new Swiper(".space_swiper01", {
	autoplay:true,
	loop: true,
	pagination: {
	  el: ".swiper-pagination",
	},
});
var spaceSwiper02 = new Swiper(".space_swiper02", {
	slidesPerView: "auto",
	// slidesPerView: 4,
	// slidesPerGroup: 4,
	loop: true,
	navigation: {
	  nextEl: ".space_swiper02_wrap .swiper-button-next",
	  prevEl: ".space_swiper02_wrap .swiper-button-prev",
	},
});



// 미니쉬 타입 - 탭 모바일 슬라이드 처리
var minishTabSwiper = new Swiper(".mt_tab_wrap", {
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
	  el: ".mt_tab_wrap .swiper-pagination",
	},
	breakpoints: {
		768: {
		  slidesPerView: "auto",
		  spaceBetween:0
		},
	},
});




// 미니쉬 타입 - 탭 동작
// 타 페이지에서 링크이동 -> 탭 랜딩 해 올 수 있으므로  hash 처리
// ex) 충치클리닉 페이지 -> 어금니 미니쉬탭으로 랜딩
$(window).on('hashchange', function(){
	// alert( location.hash)
	switch(location.hash) {
		// case '':
		// case '#':
		// alert('nothing');
		// break;
		case '#dual':
		moveTab('.mt_tab_wrap','0')
		mtTabSetting()
		break;
		case '#pink':
		moveTab('.mt_tab_wrap','1')
		mtTabSetting()
		break;
		case '#bridge':
		moveTab('.mt_tab_wrap','2')
		mtTabSetting()
		break;
		case '#molar':
		moveTab('.mt_tab_wrap','3')
		mtTabSetting()
		break;
	};
}).trigger('hashchange');

function mtTabSetting(){
	$(".twentytwenty-container").twentytwenty();
	$(".mt_tab_wrap .swiper-pagination").hide();
	$(".mt_tab_wrap .btn_return").show()
}

$(".mt_tab_wrap .btn_return").click(function(){
	$(".mt_tab_wrap .swiper-pagination").show();
	$(".mt_tab_wrap .btn_return").hide();
	$(".mt_tab_wrap  li button").removeClass("on");
	$(".tab_box_wrap  .tab_box").removeClass("on");
	minishTabSwiper.slideTo(0, 0);
})



// 클리닉 전체보기
if($(".clinic_page").length>0){
var swiper = new Swiper(".clinic_page", {
	slidesPerView: 1,
	mousewheel: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	on: {
		slideChangeTransitionEnd:function(){
			if(swiper.activeIndex>2){
				$(".swipe_info .left").css("display","block")
				$(".swipe_info .right").hide()
			}else{
				$(".swipe_info .left").hide()
				$(".swipe_info .right").css("display","block")
			}
		}
	}
});
}


//  단계별 증상 슬라이드
var sympSwiper = new Swiper(".symp_slide_wrap .img_slider", {
	// loop: true,
	navigation: {
	  nextEl: ".symp_slide_wrap .swiper-button-next",
	  prevEl: ".symp_slide_wrap .swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	on: {
		slideChangeTransitionEnd:function(){
			// if(swiper.activeIndex>2){
			let targetLi = $(".symp_slide_wrap .detail_wrap ul li").eq(sympSwiper.activeIndex);
			let targetDH = targetLi.find((".detail_hidden"));
			console.log(sympSwiper.activeIndex ,targetLi)
			if(targetLi.hasClass("on")==0){
				$(".symp_slide_wrap .detail_wrap ul li").removeClass("on")
				$(".detail_hidden").slideUp();
				targetLi.addClass("on")	
				targetDH.slideDown()
			};
		}
	}
});

// 단계별 상세보기 버튼
$(".btn_detail_open").click(function(){
	let rtEl = $(this).parents(".symp_slide_wrap");
	let thisEl = $(this).parents("li");
	if(thisEl.hasClass("on")){
		thisEl.find(".detail_hidden").slideUp()
		thisEl.removeClass("on")
	}else{
		rtEl.find(".detail_hidden").slideUp()
		thisEl.find(".detail_hidden").slideDown();
		rtEl.find("li").removeClass("on")
		thisEl.addClass("on")
	}
})



//  잇몸치료 슬라이드
var gumBnaSwiper = new Swiper(".gum_bna_slider", {
	// loop: true,
	navigation: {
	  nextEl: ".gum_bna_slider .swiper-button-next",
	  prevEl: ".gum_bna_slider .swiper-button-prev",
	},
});




