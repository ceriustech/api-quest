import React from 'react';

import './Sub-Category-List-Header.Styles.css'; 


const SubCategoryListHeader = (props) => {
    return (
        <section className="sub-category-list-header">
            <div className="sub-category-list-header-info">
                <p className="sub-category-list-header-text">API</p>
                <p className="sub-category-list-header-text">Description</p>
                <p className="sub-category-list-header-text">Auth</p>
                <p className="sub-category-list-header-text">HTTPS</p>
                <p className="sub-category-list-header-text">Cors</p>
                <p className="sub-category-list-header-text">URL</p>
            </div>
        </section>
    )
}

export default SubCategoryListHeader; 