<?php

namespace Database\Factories;

use App\Models\VehicleImage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<VehicleImage>
 */
class VehicleImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

        'vehicle_id' => null,
        'image_path' => fake()->imageUrl(),
        'alt_text' => fake()->sentence(),
        'is_featured' => fake()->boolean(),
        'sort_order' => fake()->numberBetween(1, 10),

        'image_source' => fake()->randomElement([
            'AWS S3',
            'CloudFront',
            'Dealer Upload'
        ]),
            //
        ];
    }
}
