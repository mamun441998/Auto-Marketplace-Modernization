<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\VehicleResource;
use App\Models\Vehicle;

class VehicleController extends Controller
{
    public function index()
    {
        $vehicles = Vehicle::with([
            'dealer',
            'inventorySource',
            'images'
        ])->latest()->paginate(20);

        return VehicleResource::collection($vehicles);
    }

    public function show(Vehicle $vehicle)
    {
        $vehicle->load([
            'dealer',
            'inventorySource',
            'images'
        ]);
        
        return new VehicleResource($vehicle);
    }
    
}
