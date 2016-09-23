import React from 'react';
import Reflux from 'reflux';
import MotelStore from '../stores/MotelStore.js';

var MoteleGrid = React.createClass({
  mixins: [Reflux.connect(MotelStore, 'motelstore')],

  render: function() {
      if (this.state.motelstore) {        
        return <div> 
          {
            this.state.motelstore.map(function (image) {
              return <div key={image.id} className="image">
                <a href={ image.email }>
                    <img src={ image.logo }></img>
                </a>   
                <p>{image.name}</p>         
              </div>
          })
        }
        </div>
      }
      else {
          return (<p>No hay imágenes</p>);
      }
  }
});

module.exports = MoteleGrid;