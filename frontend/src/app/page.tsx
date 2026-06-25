"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/services/api";

export default function Home() {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");

  const fetchVehicles = async () => {
    try {
      const response = await api.get("/vehicles", {
        params: {
          make,
          year,
        },
      });

      setVehicles(response.data.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, [make, year]);

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Auto Marketplace 🚗
      </h1>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      {vehicles.map((vehicle: any) => (
        <Link
          key={vehicle.id}
          href={`/vehicles/${vehicle.id}`}
        >
          <div className="border p-4 rounded mb-4 cursor-pointer hover:bg-gray-50">

            {vehicle.images?.[0] && (
              <img 
              src={vehicle.images[0].image_path}
              alt={vehicle.title}
              className="w-full h-48 object-cover rounded mb-3"
              />
            )}

            <h2 className="font-bold text-lg">
              {vehicle.title}
            </h2>



            <p>
              {vehicle.year} {vehicle.make} {vehicle.model}
            </p>

            <p>${vehicle.price}</p>

            <p>{vehicle.mileage} miles</p>

            <p>{vehicle.dealer}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}