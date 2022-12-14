import React from 'react';
import Card from './Card';
const Carddisplay = ({ robots }) => {
    return (
        <div>
            {robots.map((user, i) => {
                return <Card key={i} name={robots[i].name} id={robots[i].id} email={robots[i].email} />
            })
            }
        </div>

    );

}
export default Carddisplay;