let grid;

$(function () {
    $('.lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        afterLoad: function (element) {
            grid = $('.grid').isotope({
                layoutMode: 'packery',
                itemSelector: '.grid-item',
                percentPosition: true,
                packery: {
                    gutter: '.gutter-sizer'
                }
            });
        }
    })

})



