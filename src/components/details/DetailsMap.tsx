'use client'
import React from 'react'
import { MdHome } from 'react-icons/md'
import { Stay } from '@/models/stay';
import GoogleMapReact from 'google-map-react';




const AnyReactComponent = ({ text }: any) => (
    <div className='map-marker'>
        <div className='circle'>
            <MdHome width={16} height={16} />
        </div>
    </div>
)

type props = {
    stay: Stay
}


function DetailsMap({ stay }: props) {

    const center = {
        lat: stay.loc.lan,
        lng: stay.loc.lat
    }

    return (
        <div style={{ height: '480px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB5mXoA76shI6CK3DmGjZi3M4PMn7YX4WA' }}
                defaultCenter={center}
                defaultZoom={13}
            >
                <AnyReactComponent
                    lat={stay.loc.lat.toFixed()}
                    lng={stay.loc.lan.toFixed()}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default DetailsMap