<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\VehicleResource;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    public function index(Request $request)
    {
        $query = Vehicle::with(['dealer', 'images']);

        if ($request->make) {
            $query->where('make', $request->make);
        }

        if ($request->model) {
            $query->where('model', $request->model);
        }

        if ($request->year) {
            $query->where('year', $request->year);
        }

        return VehicleResource::collection(
            $query->paginate(12)
        );
    }

    public function show(Vehicle $vehicle)

    {
        return new VehicleResource(
            $vehicle->load(['dealer', 'images'])
        );
    }
}
