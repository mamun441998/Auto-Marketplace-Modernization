<?php

namespace Database\Factories;

use App\Models\Dealer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Dealer>
 */
class DealerFactory extends Factory
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
            'email' => fake()->unique() ->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'website' => fake()->url(),
            'address' => fake()->address(),
            'city' => fake()->city(),
            'country' => fake()->country(),
            'logo' => fake()->imageUrl(),
            'is_active' => true,
            //
        ];
    }
}
