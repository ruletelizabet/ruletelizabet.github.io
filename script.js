"use strict";
    var list_gurme_light = ['Мак',
                            'КФС',
                            'Джаганнат',
                            'Китайчи',
                            'Прасад',
                            'Сабвей',
                            'Даниловский рынок',
                            'Коньково'],
        list_gurme_std =       ['На чили', 
                            'Вокер',
                            'Хадсон Дели',
                            'Шейк шак',
                            'ДжонДжоли',
                            'Сабвей по-крупному'],
        list_gurme_krazy = ['Фреш',
                            'Пападжонс',
                            'Доминос Пицца',
                            'Еврокафе на Измайловской',
                            'Кафе Бабетта',
                            'Ферма бургер',
                            'Беляево'],        
        list_drugs =       ['Эйфоретики',
                            'Стимуляторы',
                            'Галлюциногены классика',
                            'Галлюциногены новенькое',
                            'Мыкс',
                            'Каннабиноиды',
                            'Опияты',
                            'Что-то совсем новенькое'],
        list_420_salt =    ['Блины',
                            'Соленые Огурцы',
                            'Галеты',
                            'Пицца',
                            'Лапша',
                            'Случайный рецепт из Смака',
                            'Сухарики три корочки',
                            'Лук',
                            'Макарошка',
                            'Пюрешка',
                            'Суп-пюрешка',
                            'Читос',
                            'Сыр',
                            'Хлеб с маслом'],
        list_420_sugar =   ['Каша Быстроф',
                            'Шокопай',
                            'Вафли яшкино',
                            'Трубочки  Яшкино black edition',
                            'Трубочки  Яшкино white edition',
                            'Сырок',
                            'Оладушки',
                            'Блины',
                            'Шесть бананов',
                            'Желешка',
                            'Рулет',
                            'Кексики',
                            'Пирог',
                            'Манная каша'],
        list_games =       ['Гадалочка',
                            'Телеканалы',
                            'Аниме',
                            'Видосы на че',
                            'Свои же видосы',
                            'Деревня дураков',
                            'Букины и ко',
                            'Молескин',
                            'Ювелирочка' ,
                            'Онлайн игры Спанч Боб',
                            'Проверка блицев',
                            'Суперпродвинутая версия очков',
                            'Игра в Аллу Пугачеву на выживание',
                            'Игра в онлайн тесты ',
                            'Игра в онлайн тесты всратые мегатесты',
                            'Смотреть Адвенчур Тайм',
                            'Смотреть Гриффинов',
                            'Озвучивание Любого сериала с субтитрами по Вио',
                            'Игра в Вио с двойными наушниками'],
        list_binary =      ['ДЫА','НИЕТ'];
            
function randomList(array) {
    return array[Math.floor(Math.random()*array.length)];        
}

function clear () {
    $('.buttons div').each(function(){
        if($(this).attr('data-text') != $(this).text()) {
            $(this).text($(this).attr('data-text'));
            $(this).css('text-align','left');
        }
    });
}


jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    return this;
}

jQuery.fn.getArray = function () {
    var a;
    switch (this.attr('id')) {
        case 'list_gurme_light':
            a = list_gurme_light;
            break;
        case 'list_gurme_std':
            a = list_gurme_std;
            break;
        case 'list_gurme_krazy':
            a = list_gurme_krazy;
            break;
        case 'list_drugs':
            a = list_drugs;
            break;
        case 'list_420_salt':
            a = list_420_salt;
            break;
        case 'list_420_sugar':
            a = list_420_sugar;
            break;
        case 'list_games':
            a = list_games;
            break;
        case 'list_binary':
            a = list_binary;
            break;
    
        default:
            a = [];
            break;
    }
    return a;
}

function showPage(name) {    
    $('.page').hide();
    $('#'+name).show();
}

$(function() {

    showPage('start');

    $('.href').on("vclick",function () {
        showPage($(this).attr('data-page'));
    });

    $('.question:not(#list_420_mix)').on("vclick",function () {
        var text = randomList($(this).getArray());
        $('#answer div').text(text);
    });

    $('#list_420_mix').on("vclick",function () {
        var text = randomList(list_420_salt) + ' + ' + randomList(list_420_sugar);
        $('#answer div').text(text);
    });

/*

    clear();

    $('.buttons div:not(#list_420_mix)').on("tap",function () {
        if($(this).attr('data-text') == $(this).text()) {
            clear();
            $(this).text(randomList($(this).getArray()));
            $(this).css('text-align','center');
        }
        else {
            clear();
            $(this).text($(this).attr('data-text'));
            $(this).css('text-align','left');
        }
    });

    $('#list_420_mix').on("tap",function () {
        if($(this).attr('data-text') != $(this).text()) {
            clear();
            $(this).text($(this).attr('data-text'));
            $(this).css('text-align','left');
        }
        else {
            clear();
            $(this).text(randomList(list_420_salt) + ' + ' + randomList(list_420_sugar));
            $(this).css('text-align','center');
        }
    });
*/
    $('.center').center();
    $(window).resize(function(){
        $('.center').center();
    });

});