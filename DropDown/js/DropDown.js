let optionsBlockHeight = 400;

var $ = jQuery;
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        $('.options').each(function () {
            if (+$(this).css('height').substr(0, $(this).css('height').indexOf('px')) > optionsBlockHeight) {
                $(this).css({
                    'height': optionsBlockHeight + 'px',
                    'overflow-y': 'scroll'
                });
            } else {
                $(this).css({
                    'height': 'auto',
                    'overflow-y': 'hidden'
                });
            }
        });
        CloseAllDropDown();
    }
}

document.addEventListener('click', function (e) {
    var isClickMenu = false;
    $(e.path).each(function (index) {
        if ($(this).attr('id') == 'defaultArea') {
            isClickMenu = true;
        }
    });
    if (!isClickMenu) {
        CloseAllDropDown();
    }
});

document.addEventListener('mouseover', function (e) {
    $(e.path).each(function (index) {
        if ($(this).attr('id') == 'defaultArea') {
            if ($(this).next().is(':hidden')) {
                $(this).css({
                    'border': '1px #7f7f7f solid'
                })
            }
        }
    });
})

document.addEventListener('mouseout', function (e) {
    $(e.path).each(function (index) {
        if ($(this).attr('id') == 'defaultArea') {
            if ($(this).next().is(':hidden')) {
                $(this).css({
                    'border': '1px #aaaaaa solid'
                })
            }
        }
    });
})

$(window).resize(function () {
    CloseAllDropDown();
});

function DropDown(defaultArea) {

    $('.defaultArea').each(function () {
        if ($(this) != $(defaultArea)) {
            $(this).css({
                'background': 'linear-gradient(#f7f7f7, #dddddd)',
                'border': '1px #aaaaaa solid'
            })
        }
    });

    $('.options').each(function (index) {
        if (!($(this).prev().position().left == $(defaultArea).position().left && $(this).prev()
                .position().top == $(defaultArea).position().top)) {
            $(this).css({
                'display': 'none'
            });
        }
    });
    options = $(defaultArea).next();

    $(options).css({
        'width': +$(options).parent().css('width').substr(0, $(options).parent().css('width').indexOf('px')) - 3 + 'px'
    })
    if ($(defaultArea).position().top - $(window).scrollTop() > $(window).innerHeight() / 2) {
        optionsHeight = +$(options).css('height').substr(0, $(options).css('height').indexOf('px'));
        $(options).css({
            'top': $(defaultArea).position().top - optionsHeight - 1 + 'px'
        });
    } else {
        $(options).css({
            'top': $(defaultArea).position().top + +$(defaultArea).css('height').substr(0, $(
                defaultArea).css('height').indexOf('px')) + 2 + 'px'
        });
    }
    if ($(options).css('display') == 'block') {
        $(options).css({
            'display': 'none'
        });
        $(defaultArea).css({
            'background': 'linear-gradient(#f7f7f7, #dddddd)',
            'border': '1px #aaaaaa solid'
        })
    } else {
        $(options).css({
            'display': 'block'
        });
        $(defaultArea).css({
            'background': '#edf5ff',
            'border': '1.5px #4d90fe solid'
        })
    }
}

function SelectItem(item) {
    defaultArea = $(item).parent().parent().prev();
    fullElement = $(item).clone().removeAttr('onclick');
    DropDown($(defaultArea));
    default_ul = $(defaultArea).children()[0];
    $(default_ul).empty();
    $(default_ul).append('<li id="default" class="option" value="' + $(item).attr('value') + '">' + $(fullElement).get(0).innerHTML + '</li>');
}

function CloseAllDropDown() {
    $('.options').css({
        'display': 'none'
    });
    $('.defaultArea').css({
        'background': 'linear-gradient(#f7f7f7, #dddddd)',
        'border': '1px #aaaaaa solid'
    })
}