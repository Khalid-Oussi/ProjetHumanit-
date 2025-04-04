import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Carte() {
    return (
        <div style={{ height: '550px', width: '900px' }}>
            <MapContainer
                center={[46.603354, 1.888334]} 
                zoom={6} 
                style={{ height: '100%', width: '100%' }} 
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[48.8566, 2.3522]}>
                    <Popup>Paris, France</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}