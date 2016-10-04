"use strict";

function Pancake () {
    this.finished = 0;
    this.fry = function() {
        this.finished += 0.5;
    }
}

function TwoPans () {
    this.fry = function (p1, p2) {
        p1.fry();
        p2.fry();
    }
}

var p = new TwoPans();
var pancakePile = [];

pancakePile.push(new Pancake());
pancakePile.push(new Pancake());
pancakePile.push(new Pancake());


p.fry(pancakePile[0], pancakePile[1]);
p.fry(pancakePile[0], pancakePile[2]);
p.fry(pancakePile[1], pancakePile[2]);

console.log(pancakePile);