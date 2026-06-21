<?php

namespace Database\Factories;

use App\Models\Vehicle;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'uuid' => fake()->uuid(),
            'slug' => fake()->unique()->slug(),

            'title' => fake()->randomElement([
                'Toyota Corolla',
                'Honda Civic',
                'BMW X5',
                'Mercedes C300',
                'Ford F150',
            ]),
            
             'description' => fake()->paragraph(5),

             'vin' => strtoupper(fake()->bothify('??###########')),
             'make' => fake()->randomElement([
                'Toyota',
                'Honda',
                'BMW',
                'Mercedes',
                'Ford',

             ]),

             'model' => fake()->randomElement([
                'Corolla',
                'Civic',
                'X5',
                'A4',
                'C300',
                'F150',
             ]),

             'year' => fake()->numberBetween(2014, 2025),
             'price' => fake()->numberBetween(5000, 50000),
             'currency' =>  'USD',

             'mileage' => fake()->numberBetween(1000, 200000),
             'fuel_type' => fake()->randomElement([
                'Gasoline',
                'Diesel',
                'Hybrid',
                'Electric',
             ]),

             'transmission' =>fake()->randomElement([
                'automatic',
                'manual',
             ]),

             'condition' => fake()->randomElement([
                'New',
                'Used',

             ]),
                
            'body_type' =>fake()->randomElement([
                'Sedan',
                'SUV',
                'Truck',
                'Coupe',
            ]),

            'color' => fake()->safeColorName(),

            'dealer_id' => null,
            'inventory_source_id' => null,

            'status' =>  fake()->randomElement([
                'draft',
                'active',
                'pending',
                'sold',

            ]),

            

            'published_at' => now(),
        ];
    }
}
