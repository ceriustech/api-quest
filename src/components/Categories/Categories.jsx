import React from './node_modules/react';

import './_categories.scss';
import CategoriesBox from './Categories-box';

class Categories extends React.Component {

    state = {
        isActive:false
     }

    showCategoryWindow = e => {
        this.setState({isActive: true});
    }

    hideCategoryWindow = e => {
        this.setState({isActive: false});
    }

render() {
    
    return(

        <div>
            {this.state.isActive ? <CategoriesBox/> : null}
            <button onClick={this.showCategoryWindow}>Show</button>
            <button onClick={this.hideCategoryWindow}>Hide</button>
        </div>
    )
    }

}

export default Categories;