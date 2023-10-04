define([
    'uiComponent'
], function(
    Component
) {
    'use strict';

    return Component.extend({
        defaults: {
            test: "this is a test"
        },
        initialize: function () {
            this._super();
            const self = this;

            console.log(self.test);
        }
    });
});
