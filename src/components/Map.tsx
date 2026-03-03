"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [49.6018, 17.2371];

const customIcon = L.divIcon({
  className: "custom-marker",
  html: `
    <div style="
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #FF6B35 0%, #e55a2b 100%);
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid white;
      box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="
        transform: rotate(45deg);
        color: white;
        font-weight: bold;
        font-size: 16px;
      ">S</div>
    </div>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export default function Map() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full bg-stowlt-light-gray flex items-center justify-center">
        <div className="text-stowlt-gray">Načítání mapy...</div>
      </div>
    );
  }

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      className="w-full h-full z-0"
      style={{ background: "#f8f9fa" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <div style={{ textAlign: "center", padding: "8px 4px" }}>
            <div style={{ fontWeight: 700, fontSize: "15px", color: "#1a1a2e", marginBottom: "6px" }}>
              Stowlt Olomouc
            </div>
            <div style={{ color: "#666", fontSize: "13px", lineHeight: 1.5 }}>
              Tomkova 45/314<br />
              779 00 Olomouc
            </div>
            <a 
              href="https://maps.google.com/?q=49.6018,17.2371"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: "inline-block",
                marginTop: "10px",
                padding: "6px 14px",
                background: "#FF6B35",
                color: "white",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 600,
                textDecoration: "none"
              }}
            >
              Navigovat →
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
