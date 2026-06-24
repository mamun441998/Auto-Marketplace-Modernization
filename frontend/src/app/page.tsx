"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/services/api";

export default function Home() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await api.get("/vehicles");
        setVehicles(response.data.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Auto Marketplace 🚗
      </h1>

      {vehicles.map((vehicle:any) => (
        <Link key={vehicle.id}
        href={`/vehicles/${vehicle.id}`}

        > 
        <div className="border p-4 rounded mb-4 cursor-pointer">
          <h2>{vehicle.title}</h2>

          <p>
            {vehicle.year} {vehicle.make} {vehicle.model}
          </p>
          <p>
            ${vehicle.price}
          </p>

          <p>
            {vehicle.mileage} miles
          </p>
          <p>
            {vehicle.dealer}
          
          </p>
          </div>
          </Link>
      ))}
    </main>
  );
}