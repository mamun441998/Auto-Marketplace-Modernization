<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VehicleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'title' => $this->title,
            'slug' => $this->slug,

            'make' => $this->make,
            'model' => $this->model,
            'year' => $this->year,

            'price' => $this->price,
            'currency' => $this->currency,

            'mileage' => $this->mileage,
            'fuel_type' => $this->fuel_type,
            'transmission' => $this->transmission,

            'status' => $this->status,
            'dealer' => $this->dealer?->name,
            'created_at' => $this->created_at,

            'images' => $this->images->map(function ($image) {
                return [
                    'id' => $image->id,
                    'image_path' => $image->image_path,
                    'is_featured' => $image->featured,
                ];
            }),
        ];
       
    }
}
