import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'

const Map = (props) => {
    const HandleMapClick = () => {
        const map = useMapEvents({
            click(e) {
                props.setLatlon(e.latlng)
                map.flyTo(e.latlng)
            }
        })
        return props.latlon == null
            ? null
            : <Marker position={props.latlon} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} >
            </Marker>
    }

    return (
        <div style={{ width: '100%', background: 'red', margin: '2rem 0' }}>
            <MapContainer style={{ height: '80vh' }} center={props.latlon ? props.latlon : [13.749086815015033, 100.50860400655236]} zoom={8} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <HandleMapClick />
            </MapContainer>
        </div>
    )
}

export default Map