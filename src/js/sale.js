// 商品图点击切换
let $o_small = $('.main-smallimg');

$o_small.click(function () {
    let thisSrc = $(this).children('img').attr('src');
    $(this).parent().prev().children().children('img').attr('src', thisSrc);
    $(this).parent().prev().children().children('div').children('img').attr('src', thisSrc);
    $(this).css('border', '1px solid #ff9900')
    $(this).siblings('.main-smallimg').css('border', '1px solid #dddddd');
})

$('.main-tag').children('a:first-child').css('border', '1px solid #ff9900');


// 筛选
// 初始化
function init() {
    $('.nav-select-a div').css({
        border: '1px solid #cccccc',
    });
    $('.nav-select-a div').text('');
    $('.main-good-tag-inner').parent().parent().parent().parent().css("display", "none");
}
// 轻微破包
$('.nav-select-a').click(() => {
    init();
    $('.select-bad div').css({
        border: '1px solid #46ab50',
        color: '#46ab50',
        textalign: 'center'
    });
    $('.select-bad div').text('✔');
    $(".main-good-tag-inner:contains('我有瑕疵')").parent().parent().parent().parent().css("display", "block");
})
// 严重破包
$('.select-worst').click(() => {
    init();
    $('.select-worst div').css({
        border: '1px solid #46ab50',
        color: '#46ab50',
        textalign: 'center'
    });
    $('.select-worst div').text('✔');
    $(".main-good-tag-inner:contains('我不完美')").parent().parent().parent().parent().css("display", "block");
})
// 临期
$('.select-due').click(() => {
    init();
    $('.select-due div').css({
        border: '1px solid #46ab50',
        color: '#46ab50',
        textalign: 'center'
    });
    $('.select-due div').text('✔');
    $(".main-good-tag-inner:contains('我不新鲜')").parent().parent().parent().parent().css("display", "block");
})
// 瑕疵
$('.select-flaw').click(() => {
    init();
    $('.select-flaw div').css({
        border: '1px solid #46ab50',
        color: '#46ab50',
        textalign: 'center'
    });
    $('.select-flaw div').text('✔');
    $(".main-good-tag-inner:contains('我有瑕疵')").parent().parent().parent().parent().css("display", "block");
})





