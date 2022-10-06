import React , {Component} from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions'
class Payments extends Component{

render()
{
    return (
    <StripeCheckout
       name = 'Emaily'
       description = 'Paying $5 to get 5 credits..'
       amount = {500}
       token  = {token => this.props.handleToken(token)} 
       stripeKey = {process.env.REACT_APP_STRIPE_KEY}
    >
        <button className='btn' style={{color:"#FF5252", backgroundColor:'white'}}>
              <strong>Add Credits</strong>
        </button>
    </StripeCheckout>
    );
}

}
export default connect(null,actions)(Payments);