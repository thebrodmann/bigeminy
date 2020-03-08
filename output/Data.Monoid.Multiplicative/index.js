// Generated by purs version 0.13.6
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Multiplicative = function (x) {
    return x;
};
var showMultiplicative = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Multiplicative " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semigroupMultiplicative = function (dictSemiring) {
    return new Data_Semigroup.Semigroup(function (v) {
        return function (v1) {
            return Data_Semiring.mul(dictSemiring)(v)(v1);
        };
    });
};
var ordMultiplicative = function (dictOrd) {
    return dictOrd;
};
var monoidMultiplicative = function (dictSemiring) {
    return new Data_Monoid.Monoid(function () {
        return semigroupMultiplicative(dictSemiring);
    }, Data_Semiring.one(dictSemiring));
};
var functorMultiplicative = new Data_Functor.Functor(function (f) {
    return function (m) {
        return f(m);
    };
});
var eqMultiplicative = function (dictEq) {
    return dictEq;
};
var eq1Multiplicative = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqMultiplicative(dictEq));
});
var ord1Multiplicative = new Data_Ord.Ord1(function () {
    return eq1Multiplicative;
}, function (dictOrd) {
    return Data_Ord.compare(ordMultiplicative(dictOrd));
});
var boundedMultiplicative = function (dictBounded) {
    return dictBounded;
};
var applyMultiplicative = new Control_Apply.Apply(function () {
    return functorMultiplicative;
}, function (v) {
    return function (v1) {
        return v(v1);
    };
});
var bindMultiplicative = new Control_Bind.Bind(function () {
    return applyMultiplicative;
}, function (v) {
    return function (f) {
        return f(v);
    };
});
var applicativeMultiplicative = new Control_Applicative.Applicative(function () {
    return applyMultiplicative;
}, Multiplicative);
var monadMultiplicative = new Control_Monad.Monad(function () {
    return applicativeMultiplicative;
}, function () {
    return bindMultiplicative;
});
module.exports = {
    Multiplicative: Multiplicative,
    eqMultiplicative: eqMultiplicative,
    eq1Multiplicative: eq1Multiplicative,
    ordMultiplicative: ordMultiplicative,
    ord1Multiplicative: ord1Multiplicative,
    boundedMultiplicative: boundedMultiplicative,
    showMultiplicative: showMultiplicative,
    functorMultiplicative: functorMultiplicative,
    applyMultiplicative: applyMultiplicative,
    applicativeMultiplicative: applicativeMultiplicative,
    bindMultiplicative: bindMultiplicative,
    monadMultiplicative: monadMultiplicative,
    semigroupMultiplicative: semigroupMultiplicative,
    monoidMultiplicative: monoidMultiplicative
};
