$(function (){
    let moreBtn1=$(".moreBtn1");
    let lessBtn1=$(".lessBtn1");
    let moreBtn2=$(".moreBtn2");
    let lessBtn2=$(".lessBtn2");
    let subM1=$("#subM1");
    let subM2=$("#subM2");
    let header=$("header");
    let subMenu=$("#subMenu");
    let subMenu2=$("#subMenu2");
    let navLi=$("#topGnb li a");
    /********************topGnb 활성화 및 비활성화********************/

    subMenu.hide();
    subMenu2.hide();
    navLi.eq(0).hover(function (){
        // subList1.show();
        subMenu.show();
        subMenu2.hide();
    });subMenu.mouseleave(function (){
        subMenu.hide();
    });
    navLi.eq(1).hover(function (){
        subMenu2.show();
        subMenu.hide();
    });subMenu2.mouseleave(function (){
        subMenu2.hide();
    });

    navLi.eq(2).hover(function (){
        subMenu2.hide();
        subMenu.hide();
    })
    navLi.eq(3).hover(function (){
        subMenu2.hide();
        subMenu.hide();
    })
    navLi.eq(4).hover(function (){
        subMenu2.hide();
        subMenu.hide();
    })
    navLi.eq(5).hover(function (){
        subMenu2.hide();
        subMenu.hide();
    })
    /********************모바일 메뉴 활성화 및 비활성화********************/
    /********************모바일 메뉴 활성화 및 비활성화********************/
    let mbMenu=$(".mobileGnb")
    let closeBtn=$(".close")
    let hamburgerBtn=$("#hamburger");
    let login=$("#loginFormBox");

    mbMenu.hide();
    closeBtn.hide();

    hamburgerBtn.click(function (){
        $("body").addClass("hidden");
        login.hide();
        hamburgerBtn.hide();
        header.hide();
        mbMenu.show();
        closeBtn.show();
    })
    closeBtn.click(function (){
        $("body").removeClass("hidden");
        mbMenu.hide();
        closeBtn.hide();
        login.show();
        hamburgerBtn.show();
        header.show();
    })
    /********************모바일 서브 메뉴1********************/
    lessBtn1.hide();
    subM1.hide();
    moreBtn1.on("click",function (){
        subM1.show();
        moreBtn1.hide();
        lessBtn1.show();
    })
    lessBtn1.click(function (){
        subM1.hide();
        moreBtn1.show();
        lessBtn1.hide();
    })

    /********************모바일 서브 메뉴2********************/
    lessBtn2.hide();
    subM2.hide();

    moreBtn2.click(function (){
        subM2.show()
        moreBtn2.hide();
        lessBtn2.show();
    })
    lessBtn2.click(function (){
        subM2.hide();
        moreBtn2.show();
        lessBtn2.hide();
    })
    /********************active 활성화 및 비활성화********************/
    let activeClass=$("#section2_greyBox span");

    activeClass.on("click",function (){
        $(this).toggleClass("active");
    })
    let hidePill=$("#section2_hidePillBox .box span")
    hidePill.on("click",function (){
        $(this).toggleClass("active");
    })
})