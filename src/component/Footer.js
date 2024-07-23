import React from 'react'
import { Button } from 'reactstrap';

export default function Footer(props) {
    const { setFlag } = props;
    return (

        <div>
            <input type='checkbox' onChange={() => setFlag("CHECKALL")} />
            <Button className='btn btn-success mx-1' onClick={() => setFlag("CHECK")}>filter check</Button>
            <Button className='btn btn-success mx-1' onClick={() => setFlag("NOCHECK")}>filter no check</Button>
            <Button className='btn btn-success mx-1' onClick={() => setFlag("")}>clear check</Button>
            <Button className='btn btn-success mx-1' onClick={() => setFlag("DeleteALL")}>Delete all check</Button>
        </div>
    )
}
