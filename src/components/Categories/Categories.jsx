import React from './node_modules/react';

import './_categories.scss';
import CategoriesBox from './Categories-box';

class Categories extends React.Component {

render() {
    
    return(

        <div>
            <section className="category-window">
                <Link to="/category1" />

                <Link to="/category1" />
            </section>
        </div>
    )
}


}

export default Categories;