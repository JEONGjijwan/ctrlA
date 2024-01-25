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
    let activeClass=$("#section1_nav nav ul li");

    activeClass.click(function (){
        activeClass.removeClass("active");
        $(this).addClass("active");
    })
    /********************list 별 상자 구분********************/
    let box=$("#section1 .box")
    let allBtn=$("#all")
    let plusBtn=$("#PlusBtn");
    let plusBtn2=$("#PlusBtn2");
    let consulting=$(".Consulting")
    let eCommerce=$(".eCommerce")
    let corporation=$(".Corporation")
    let package=$(".Package")

    consulting.hide();
    eCommerce.hide();
    corporation.hide();
    package.hide();
    plusBtn2.hide()
    allBtn.click(function (){/* All */
        box.show();
        box.parent().addClass("sec1-mb-90");
        consulting.hide();
        eCommerce.hide();
        corporation.hide();
        package.hide();
        plusBtn.show();
        plusBtn2.hide();
    })
    plusBtn.click(function (){
        consulting.show();
        eCommerce.show();
        corporation.show();
        package.show();
        plusBtn.hide();
        plusBtn2.hide();
    })
    let consultingBtn=$("#Consulting")
    consultingBtn.click(function (){ /* consulting */
        box.hide();
        box.parent().removeClass("sec1-mb-90");
        consulting.parent().addClass("sec1-mb-90");
        consulting.show();
        plusBtn.hide()
        plusBtn2.hide();
    })
    let corporationBtn=$("#Corporation")
    corporationBtn.click(function (){ /* consulting */
        box.hide();
        box.parent().removeClass("sec1-mb-90");
        corporation.parent().addClass("sec1-mb-90");
        corporation.show();
        plusBtn.hide()
        plusBtn2.hide();
    })
    let ecommerceBtn=$("#eCommerce")
    ecommerceBtn.click(function (){
        box.hide();
        box.parent().removeClass("sec1-mb-90");
        eCommerce.parent().addClass("sec1-mb-90");
        eCommerce.show();
        plusBtn.hide()
        plusBtn2.hide();
    })
    let eBusiness=$(".eBusiness")
    let eBusinessBtn=$("#eBusiness")
    eBusinessBtn.click(function (){
        box.hide();
        box.parent().removeClass("sec1-mb-90");
        eBusiness.parent().addClass("sec1-mb-90");
        eBusiness.show();
        plusBtn.hide()
        plusBtn2.hide();
    })
    let maintenanceBtn=$("#Maintenance")
    let maintenance=$(".Maintenance")
    maintenanceBtn.click(function (){
        box.hide();
        box.parent().removeClass("sec1-mb-90");
        eBusiness.parent().addClass("sec1-mb-90");
        eBusiness.show()
        maintenance.parent().addClass("sec1-mb-90");
        maintenance.show();
        plusBtn.hide()
        plusBtn2.show()
    })
    plusBtn2.click(function (){
        corporation.parent().addClass("sec1-mb-90");
        corporation.show();
        plusBtn2.hide();
    })
    let packageBtn=$("#Package")
    packageBtn.click(function (){
        box.hide();
        box.parent().removeClass("sec1-mb-90");
        package.parent().addClass("sec1-mb-90");
        package.show();
        plusBtn.hide()
        plusBtn2.hide();
    })
})