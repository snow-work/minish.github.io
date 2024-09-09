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




$(document).ready(function() {
    // 헤더 로드
    $("*[data-include-path]")
    var compChk = $("*[data-include-path]").each(function(){
        console.log($(this).attr("data-include-path"));
        var compFile = $(this).attr("data-include-path")
        $(this).load(compFile)
    })

    // // 

    // 인트로 처리
    $('.main_con').addClass('play')
    setTimeout(() => {
        $('.intro_wrap').addClass('play');
    }, 1000);
    setTimeout(() => {
        $('.intro_wrap').addClass('end');
        $('.main_con').addClass('end');
    }, 2000);
});


// 헤더 퀵
$(".top_tnb").hover(function(){
    $(".top_tnb ul").slideToggle("fast");	
});


// gnb
$(".gnb_open").click(function(){
    $(".gnb_wrap").slideDown()
    $("body").addClass("fixed")
})
$(".gnb_close").click(function(){
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


// 하단 sns 버튼
$(".sns_fixed_con button").click(function(){
    $(".sns_fixed_con").toggleClass("open")
})


// 메인 공지사항
$(".notice_wrap button").click(function(){
    $(".notice_wrap").hide()
})


// 의사 마우스오버 이벤트
// $(".main_dr_con").hover()
$(".dr_wrap").hover(function(){
    if($(document).width()>768){
        $(".dr_wrap").toggleClass('off');
        $(this).removeClass('off');
        $(this).toggleClass('on');
    }
})



// 메인 스크롤 fade
// 스크롤 체크할 객체
const maminScrEl = document.querySelectorAll(".scr_chk")
// 영역설정 
const option = {
    rootMargin: '0px'
}

const mainScrEfect = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        // 영역 벗어남
        // console.log('out', entry.target)
        entry.target.classList.remove('active')
    } else {
        // 영역안으로 들어옴
        // console.log('in',entry.target)
        entry.target.classList.add('active')
    }
  });
}
const observer = new IntersectionObserver(mainScrEfect, option);
maminScrEl.forEach(scr => observer.observe(scr));


document.addEventListener("scroll", (e) => {
    if($(document).width()>768){
        // oao 텍스트 fiexd 범위 
        let startPoint= $('.chk_point01').offset().top;
        let endPoint= $('.chk_point02').offset().top;
        let nowScr = window.scrollY+window.innerHeight/2;
        // 현 스크롤 위치가 범위 안이면 fiexd 처리
        if(startPoint<=nowScr&&endPoint>=nowScr){
            // 범위 내 fiexd
            $(".main_oao_con .txt_wrap").addClass('fixed')
        }else{
            // 범위 밖, fixed 삭제
            $(".main_oao_con .txt_wrap").removeClass('fixed')
            // 타이틀 위치 지정
            if(startPoint>=nowScr){
                // 위로 스크롤 되었을 때
                $(".main_oao_con .txt_wrap").removeClass('bottom')
            }else{
                $(".main_oao_con .txt_wrap").addClass('bottom')
            }
        }
    }else{
        $(".main_oao_con .txt_wrap").removeClass('fixed')
    }

})


$(window).resize(function(){
    // console.log($(window).width(), $(document).width())
    if($(document).width()>768){
        $(".gnb_list ul").attr("style","");
    }
})