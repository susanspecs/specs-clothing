import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_0zddkVQZiExdyQ18PtfsKvxU00aOFtZ4FD\n';
    const onToken = token => {
      console.log(token);
      alert('Payment Successful');
    };

    return(
        <StripeCheckout
            label="Pay Now"
            name= "Specs Clothing"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description = {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel = "Pay Now"
            token = {onToken}
            stripe={publishableKey}
        />
    )
};

export default StripeCheckoutButton;

