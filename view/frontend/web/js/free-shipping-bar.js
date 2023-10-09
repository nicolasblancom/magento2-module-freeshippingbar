define([
    'uiComponent',
    'knockout',
    'Magento_Customer/js/customer-data'
], function (
    Component,
    ko,
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

            // Define message
            self.message = ko.computed(() => {
                const pricePlaceholder = 'XX.XX';

                if (self.cartAmount === 0.00) {
                    console.log(self.threshold)
                    return self.messageDefault.replace(pricePlaceholder, self.formatCurrency(self.threshold));
                }

                if (self.cartAmount > 0.00 && self.cartAmount < self.threshold) {
                    let amountLeft = self.threshold - self.cartAmount;

                    return self.messageLeft.replace(pricePlaceholder, self.formatCurrency(amountLeft));
                }

                if (self.cartAmount >= self.threshold) {
                    return self.messageFree;
                }
            });
        },
        formatCurrency: function (amount) {
            // TODO: get currency symbol and position
            const _amount = parseFloat(amount);
            return '$' + _amount.toFixed(2);
        }
    });
});
