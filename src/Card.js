import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div style={{minWidth:"250px"}}className="navy bg-moon-gray br4 dib pa2 tc grow shadow-3 ma4 w-20 ba bw1">
                <img alt="" src={`https://robohash.org/${this.props.id}?200x200`} />
                <div className="">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;