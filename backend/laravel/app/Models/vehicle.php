<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;


class Vehicle extends Model
{
    use HasFactory, SoftDeletes;
        protected $fillable = [
            'uuid',
            'slug',
            'title',
            'description',
            'vin',
            'make',
            'model',
            'year',
            'price',
            'currency',
            'mileage',
            'fuel_type',
            'transmission',
            'condition',
            'body_type',
            'color',
            'dealer_id',
            'inventory_source_id',
            'status',
            'published_at',
        ];
        protected $casts = [
            'price' => 'decimal:2',
            'published_at' => 'datetime',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
            'deleted_at' => 'datetime',
        ];

    // Vehicle belongs to Dealer 
    public function dealer()
    {
        return $this->belongsTo(Dealer::class);
    }
    // Vehicle belongs to InvontorySource
    public function inventorySource()
    {
        return $this->belongsTo(InventorySource::class);

    }
    // Vehicle has many images
    public function images()
    {
        return $this->hasMany(VehicleImage::class);
    }

  
}
