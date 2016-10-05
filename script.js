"use strict";
    var list_gurme_light = ['Мак',
                            'КФС',
                            'Джаганнат',
                            'Китайчи',
                            'Прасад',
                            'Сабвей',
                            'Даниловский рынок',
                            'Коньково'],
        list_gurme =       ['На чили', 
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
        list_420_games =   ['Гадалочка',
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
                            'Игра в Вио с двойными наушниками'];
            
function randomList(array) {
    return array[Math.floor(Math.random()*array.length)];        
}

console.log(randomList(list_420_games));
console.log(randomList(list_420_games));
console.log(randomList(list_420_games));
console.log(randomList(list_420_games));
console.log(randomList(list_420_games));

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    return this;
}

$(function() {
    $('#list_gurme_light').on("tap",function () {
        if($(this).attr('data-text') == $(this).text()) {
            $(this).text(randomList(list_gurme_light));
        }
        else {
            $(this).text($(this).attr('data-text'));
        }
    });


    $('.buttons').center();
    $(window).resize(function(){
        $('.buttons').center();
    });

});