<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
    Schema::create('vehicle_images', function (Blueprint $table) {

    /*
    |--------------------------------------------------------------------------
    | Identity
    |--------------------------------------------------------------------------
    */
    $table->id();
    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    */
    $table->foreignId('vehicle_id')
        ->constrained()
        ->cascadeOnDelete();

    /*
    |--------------------------------------------------------------------------
    | Image Information
    |--------------------------------------------------------------------------
    */
    $table->string('image_path');
    $table->string('alt_text')->nullable();
    $table->string('image_source')->nullable();
    $table->boolean('is_featured')->default(false);
    $table->unsignedInteger('sort_order')->default(0);

    /*
    |-----------------------------------------------------------------------------
    | Status and Metadata
    |-----------------------------------------------------------------------------
    */
    $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicle_images');
    }
};

