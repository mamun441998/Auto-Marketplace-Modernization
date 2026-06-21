<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class VehicleImage extends Model
{
    use HasFactory;
    protected $fillable = [
        'vehicle_id',
        'image_path',
        'alt_text',
        'is_featured',
        'sort_order',
        'image_source',
    ];
    protected $casts =[
        'is_featured' => 'boolean',
        'sort_order' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        
    ];

    // VehicleImage belongs to Vehicle
    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }
}
