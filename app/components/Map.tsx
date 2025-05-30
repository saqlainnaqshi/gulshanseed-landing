'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const customIcon = new L.Icon({
    iconUrl: '/images/marker-icon.png',
    iconRetinaUrl: '/images/marker-icon-2x.png',
    shadowUrl: '/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

export default function Map({ center }: { center: L.LatLngTuple }) {
    return (
        <MapContainer
            center={center}
            zoom={15}
            style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
            className="z-0"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center} icon={customIcon}>
                <Popup className="text-center">
                    <h3 className="font-bold text-primary">GulshanSeed</h3>
                    <p className="text-secondary">Ganderpora, Sakidaffar, Srinagar, J&K, India</p>
                </Popup>
            </Marker>
        </MapContainer>
    )
}