

$(function () {
    spanHeight();
    $(window).on('resize',spanHeight);
    setTimeout(spanHeight, 100);
    setTimeout(spanHeight, 1000);
});

function spanHeight(){
    $('.photo__caption').each(function() {
        var $this = $(this);
        var sectionInnerHeight = $this.find('span').innerHeight()+5;
        // console.log('sectionInnerHeight',sectionInnerHeight)
        $this.css({
            'padding-bottom': sectionInnerHeight
        });
    });
}

