<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use illuminate\Database\Eloquent\Factories\HasFactory;
use illuminate\Database\Eloquent\softDeletes;


class vehicle extends Model
{
    use HasFactory, softDeletes;
        protected $fillable = [];
        protected $casts = [];

    // Relationships 
    public function dealer()
    {
        return $this->belongs to (dealer::class);
    }
    // Vehicle belongs to InvontorySource
    public function inventorySource()
    {
        return $this->belongsTo(InvenntorySource::class);

    }
    // Vehicle has many images
    public function images()
    {
        return $this->hasMany(VehicleImage::class);
    }

    public function vehicle()
    {
        return $this->hasMany(Vehicle::class);
    }
}
