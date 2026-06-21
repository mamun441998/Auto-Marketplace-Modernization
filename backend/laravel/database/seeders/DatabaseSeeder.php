<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Dealer;
use App\Models\InventorySource;
use App\Models\Vehicle;
use App\Models\VehicleImage;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create Dealers
        Dealer::factory(10)->create();

        // Create Inventory Source
        InventorySource::factory(5)->create();

        // Create Vehicles
        Vehicle::factory(100)->create()->each(function ($vehicle) {
            // Assign Random Dealer
            $vehicle->update([
                'dealer_id' =>Dealer::inRandomOrder()->first()->id,
                'inventory_source_id' =>InventorySource::inRandomOrder()->first()->id,
            ]);

            //Create Image for Vehicle
            VehicleImage::factory(rand(2, 5))->create([
                'vehicle_id' => $vehicle->id,
            ]);
        });
    }
}
