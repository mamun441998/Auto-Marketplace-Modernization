<?php

namespace Database\Factories;

use App\Models\InventorySource;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<InventorySource>
 */
class InventorySourceFactory extends Factory
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
            'name' => fake()->company(),
            'slug' => fake()->slug(),
            'type' => fake()->randomElement(['API', 'cvs', 'xml',]),

            'base_url' => fake()->url(),
            'api_key' => fake()->sha1(),
            'api_secret' => fake()->sha1(),
            'sync_interval' => 60,
            'is_active' => true,
            
            //
        ];
    }
}
