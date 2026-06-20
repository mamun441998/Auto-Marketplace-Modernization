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
        Schema::create('vehicles', function (Blueprint $table) {
            /*
            |-----------------------------------------------------
            | Identity
            |---------------------------------------------------------
           */            
            $table->id();
            $table->uuid('uuid')->unique();
            $table->string('slug')->unique(); 

            /*
            |-----------------------------------------------------  
            | Vehicle Information
            |---------------------------------------------------------
            */
            $table->string('title');
            $table->longText('description')->nullable();
            $table->string('vin')->nullable()->unique();
            $table->string('make');
            $table->string('model');
            $table->smallInteger('year');


            /*
            |-----------------------------------------------------  
            | Pricing and Availability
            |---------------------------------------------------------
            */
            $table->decimal('price',12,2)->nullable();
            $table->char('currency',3)->default('USD');

                
            /*
            |-----------------------------------------------------
            |Vehicle Specifications
            |---------------------------------------------------------
            */
            $table->unsignedInteger('mileage')->nullable();
            $table->string('fuel_type')->nullable();
            $table->string('transmission')->nullable();
            $table->string('condition')->nullable();
            $table->string('body_type')->nullable();
            $table->string('color')->nullable();

            /*
            |-----------------------------------------------------
            |Relationships
            |---------------------------------------------------------
            */
            $table->foreignId('dealer_id')
                ->nullable()
                ->constrained('dealers')
                ->nullOnDelete();

            $table->foreignId('inventory_source_id')
                ->nullable()
                ->constrained('inventory_sources')
                ->nullOnDelete();
                
            /*
            |-----------------------------------------------------  
            | Vehicle Status
            |---------------------------------------------------------
            */
            $table->enum('status', ['draft', 'active', 'pending', 'sold', 'archived'])->default('draft');
            $table->timestamp('published_at')->nullable();
            
            /*
            |-----------------------------------------------------  
            | Status and Metadata
            |---------------------------------------------------------
            */
             $table->timestamps();
             $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
