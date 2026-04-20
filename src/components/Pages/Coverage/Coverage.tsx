import type { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

type center = {
  region: string;
  district: string;
  city: string;
  covered_area: string[];
  status: string;
  flowchart: string;
  longitude: number;
  latitude: number;
};

const Coverage = () => {
  const [centers, setCenters] = useState<center[]>([]);
  const mapRef=useRef(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data/warehouses.json");
      const data = await res.json();
      setCenters(data);
    };
    loadData();
  }, []);

  const handleSearch=(e: React.SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData=new FormData(e.currentTarget);
    const location=formData.get("location") as string;
    const district=centers.find(c=>c.district.toLowerCase().includes(location.toLowerCase()));
    if(district){
      const coord=[district.latitude,district.longitude];
      console.log(district, coord);
      mapRef.current.flyTo(coord,14);
    }

  }

  const position: LatLngExpression = [23.685, 90.3563];
  return (
    <div className="bg-white px-8 md:px-20 py-16 rounded-2xl my-8">
      <h1 className="text-[#03373D] text-[20px] md:text-[35px] font-extrabold">
        We are available in 64 districts
      </h1>
      <form onSubmit={handleSearch} className="mt-3">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="bg-background pl-9"
          id="search-input"
          placeholder="Search..."
          type="search"
          name="location"
        />
      </form>
      <h1 className="text-[#03373D] text-[15px] md:text-[20px] font-extrabold mt-10">
        We deliver almost all over Bangladesh
      </h1>
      <div className="w-full h-80 sm:h-100 mt-5">
        <MapContainer
          className="h-80 sm:h-100"
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {centers.map((center, i) => (
            <Marker key={i} position={[center.latitude, center.longitude]}>
              <Popup>{center.district}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
