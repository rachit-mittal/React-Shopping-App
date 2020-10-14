import React from 'react';
import { connect } from 'react-redux';

import Menuitem from '../menu-item/menu-item';


const Directory = ({sections}) =>  {
    return(
        <div className='directory-menu'>
            {
                sections.map(({id, ...otherprops}) => (
                    <Menuitem 
                        key={id} 
                        {...otherprops} 
                    />
                ))
            }
        </div>
    )
}

const mapStateToProps = ({directory: {sections} }) => ({
    sections
});

export default connect(mapStateToProps)(Directory);