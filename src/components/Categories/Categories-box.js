
import React from 'react';

import './Categories/categories-box.scss';

class CategoriesBox extends React.Component {

render() {
return (

   // TODO: fix the divs
   // TODO: make this work and demo before Tuesday

    <div className="platform-ad-row">
        <div className="col">
            <div className="tabs">
                <div className="tab">
                    <input type="checkbox" id="platform-1" className="platform-ad-input" />
                    <label className="platform-label label-1" for="platform-1">Platform 1</label>
                    <div className="platform-content">
                    <h1 className="platform-content-h1">Platform</h1>
                    <p className="platform-content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!</p>
                    </div>
                </div>
            <div className="tab">
                <input type="checkbox" id="platform-2" className="platform-ad-input" />
                <label className="platform-label label-2" for="platform-2">Platform 2</label>
                <div className="platform-content">
                <h1 className="platform-content-h1">Platform</h1>
                <p className="platform-content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!</p>
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="platform-3" className="platform-ad-input" />
                <label className="platform-label label-3" for="platform-3">Platform 3</label>
                <div className="platform-content">
                <h1 className="platform-content-h1">Platform</h1>
                <p className="platform-content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!</p>
                </div>
            </div>
            <div className="tab">
                <input type="checkbox" id="platform-4" className="platform-ad-input" />
                <label className="platform-label label-4" for="platform-4">Platform 4</label>
                <div className="platform-content">
                <h1 className="platform-content-h1">Platform</h1>
                <p className="platform-content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!</p>
                </div>
            </div>
                <div className="tab">
                    <input type="checkbox" id="platform-5" className="platform-ad-input" />
                    <label className="platform-label label-5" for="platform-5">Platform 5</label>
                    <div className="platform-content">
                    <h1 className="platform-content-h1">Platform</h1>
                    <p className="platform-content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!</p>
                    </div>    
                </div>
            </div>
        </div>
    </div>
    )
    }
}

export default CategoriesBox;