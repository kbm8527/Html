$(document).ready(function(){
            
    var gnb = $('#gnb > li > a');
    
    gnb.click(function(e){
        e.preventDefault();

       var isOpen = $(this).next().is(':visible');
        //현재 서브메뉴가 열려있으면
        if(isOpen){
            // 현재 서브메뉴를 닫음
            $(this).next().slideUp(200);
        }else{
            // 현재 서브메뉴를 펼침
            $(this).next().slideDown(200);
        }
    });
    
});
