define([
    'uiComponent'
], function(
    Component
) {
    'use strict';

    return Component.extend({
        defaults: {
            message: "Free shipping for orders above XX.XX!"
        },
        initialize: function () {
            this._super();
            const self = this;
        }
    });
});
