<h1 align="center">Magento 2 FreeShippingBar module</h1>
<div align="center">
    <p>Adds a banner to the top bar with a "Free shipping from X" price notice</p>
    <p>It makes the calculations based on cart items</p>
</div>

## Table of contents

- [Summary](#summary)
- [Why](#why)
- [Installation](#installation)
- [Usage](#usage)

## Summary

This module adds a banner to the top bar block (above all content) with a "Free shipping from X" price notice.

It checks the items added to the cart and makes the calculations to change the message based on those:

- If no cart item added, it shows a generic message "Free shipping if order is above X" (configurable though XML file).
- If items added to the cart but cart price is below a threshold, it shows a "Only XX.XX left to get free shipping" message (configurable though XML file).
- If items added to the cart and price is above or equals the threshold, it shows "Now you have free shipping for this order!" message (configurable though XML file).


## Why

Because it is a simple way to add a very visible promo banner that goes straight to the point.

It does not have complicated options and it is configurated through xml files. 

It does not have any admin options for configurations.

## Installation

```shell
composer require nicolasblancom/magento2-module-freeshippingbar
```

## Usage

Just install it and you will start seeing the banner in the front.

### Change messages

In `view/frontend/layout/default.xml` file, you will see three variables:

- messageDefault: it's the message when no items in cart, shows by default.
- messageLeft: it's the message when there are items in cart, but you have not reached the threshold yet.
- messageFree: it's the message for free shipping, when you already reached the threshold.

If you want to change those messages just extend this xml in your theme by copying it to:
`<your-vendor>/<your-theme>/layout/default.xml`

### Change threshold
