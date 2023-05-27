

$(function () {
    spanHeight();
    $(window).on('resize',spanHeight);
    setTimeout(spanHeight, 100);
});

function spanHeight(){
    $('.photo__caption').each(function() {
        var $this = $(this);
        var sectionInnerHeight = $this.find('span').innerHeight()+5;
        $this.css({
            'padding-bottom': sectionInnerHeight
        });
    });
}

