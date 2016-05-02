$(function(){

    //鼠标点击菜单栏
    $(".mobile-nav-toggle-label").click(function(){
    	$("body").toggleClass("dialog-show");
    });

    //点击我们，弹出弹框
    $(".site-contact-us").click(function(){
    	var $modal = $(".sqs-modal-lightbox-content");
    	$modal.addClass("show");
    });

    $(".lightbox-close").click(function(){
        var $modal = $(".sqs-modal-lightbox-content");
        $modal.removeClass("show");
    });
});

jQuery(document).ready(function($) {
    //点击显示大图
    $(".shows-detail .ul-shows-bottom li img").click(function(){
        var $that = $(this);
        var dataSrc = $that.attr("src");
        var dataTitle = $that.attr("title");
        $(".modal-show-pic .modal-img").attr("src",dataSrc);
        $(".modal-show-pic .modal-text").html(dataTitle);
        $(".modal-show-pic").addClass("show");
        return false;
    });
    //点击空白区域关闭大图展示
    $(".modal-show-pic").click(function(){
        $(".modal-show-pic").removeClass("show");
        return false;
    });
});