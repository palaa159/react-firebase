import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import withScriptjs from 'react-google-maps/lib/async/withScriptjs'
import _ from 'lodash'

const googleMapURL='https://maps.googleapis.com/maps/api/js?v=3&libraries=places,geometry&key=AIzaSyCc2rAmUWIrZKHQXl8FB7JEGDqH3T9rLnc'

const GettingStartedGoogleMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={14}
    defaultCenter={{ lat: 13.727286, lng: 100.568995 }}
    onClick={props.onMapClick}
  >
  </GoogleMap>
)))

class Map extends React.Component {

  render () {
    return (
      <div className="section">
        <div className="container is-fluid">
          <div className="content">
            <GettingStartedGoogleMap
            googleMapURL={googleMapURL}
            loadingElement={
              <div style={{ height: `100%` }}>
                Loading
              </div>
            }
              containerElement={
                <div style={{ height: 400 }} />
              }
              mapElement={
                <div style={{ height: 400 }} />
              }
              onMapLoad={_.noop}
              onMapClick={_.noop}
              onMarkerRightClick={_.noop}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Map