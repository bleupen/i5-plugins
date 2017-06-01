'use strict';

exports.register = function (server, opts, next) {
    server.driver('scriptContext', {
        id: 'foo',
        populate: ctx => ctx.foo = 'bar'
    });
    next();
};

exports.register.attributes = { name: 'i5-plugins' };