import React from 'react';
import {Gmaps, Marker} from 'react-gmaps';

class Card extends React.Component {

  onMapCreated(map) {
  map.setOptions({
    disableDefaultUI: true
  });
  };

  onDragEnd(e) {
  console.log('onDragEnd', e);
  };

  onCloseClick() {
  console.log('onCloseClick');
  };

  onClick(e) {
  console.log('onClick', e);
  };



  render() {
    const { name, bikes ,parking , adresse} = this.props;
    return (
      <div className="card text-muted mb-4">
        <Gmaps

         width={'100%'}
         height={'20vh'}
         lat={this.props.lat}
         lng={this.props.lng}
         zoom={16}
         loadingMessage={'ça charge'}
         params={{v: '3.exp', key: 'AIzaSyC2rn_89iMt9qn840EW-KQrXV3e0WDSnAE'}}
         onMapCreated={this.onMapCreated}>
         <Marker
           lat={this.props.lat}
           lng={this.props.lng}
           draggable={true}
           onDragEnd={this.onDragEnd} />

       </Gmaps>
      <div className="card-block">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">Adresse : {adresse}</p>
        <p className="card-text">Vélo(s) disponible(s): <strong className='text-success'>{bikes}</strong></p>
        <p className="card-text">Place(s) de parking disponible(s) : <strong className='text-success'>{parking}</strong> </p>
      </div>
    </div>
    );
  }

}

export default Card;
