import React, { Component } from 'react';
import { connect } from 'react-redux'

class MyCart extends Component {
    formatDate (timestamp) {
        const d = new Date(timestamp)
        const time = d.toLocaleTimeString('en-US')
        return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
    }
    render(){
        const { inCart_phones, phones } = this.props;
            return(
            <div>
                {inCart_phones.length
                    ? inCart_phones.map(phone =>(
                        <div key={phone} class="ui cards">
                            <div class="ui card centered">
                                <div class="content">
                                <img
                                    src={`/images/${phones[phone].brand}.jpg`}
                                    class="ui mini right floated image" alt="phone"
                                />
                                <div class="header">{phones[phone].brand}</div>
                                <div class="meta">$ {phones[phone].price}</div>
                                <div class="meta price">{this.formatDate(phones[phone].timestamp)}</div>
                                <div class="description">
                                {phones[phone].capacity}
                                </div>
                                </div>
                                <div class="extra content">
                                <div class="ui two buttons">
                                    <button class="ui green basic button">Buy</button>
                                    <button class="ui red basic button">Decline</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        ))
                    : (
                        <div class="ui placeholder">No Phone in your cart...</div>
                    )}
            </div>
        )
    }
}
function mapStateToProps({phones}){
    return{
        phones,
    }
}

export default connect(mapStateToProps)(MyCart);