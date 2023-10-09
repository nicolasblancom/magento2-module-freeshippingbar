define([
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function(
    Component,
    customerData
) {
    'use strict';

    return Component.extend({
        defaults: {
            message: "Free shipping for orders above XX.XX!",
            cartAmount: 0.00,
            formattedCartAmount: '<span class="price">0.00</span>'
        },
        initialize: function () {
            this._super();
            const self = this;

            // Get cart amount
            const cart = customerData.get('cart');
            customerData.getInitCustomerData().done(() => {
                self.cartAmount = parseFloat(cart().subtotalAmount);
                self.formattedCartAmount = cart().subtotal_excl_tax;
            });


        }
    });
});
