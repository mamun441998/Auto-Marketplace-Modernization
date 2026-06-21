<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class InventorySource extends Model
{
    use HasFactory, SoftDeletes;
    
    protected $fillable = [
        'uuid',
        'name',
        'slug',
        'type',
        'base_url',
        'api_key',
        'api_secret',
        'last_synced_at',
        'sync_interval',
        'is_active',

    ];
    protected $casts = [
        'is_active' => 'boolean',
        'last_synced_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    // InventorySource has many Vehicles
    public function vehicles()
    {
        return $this->hasMany(Vehicle::class);

    }
}
