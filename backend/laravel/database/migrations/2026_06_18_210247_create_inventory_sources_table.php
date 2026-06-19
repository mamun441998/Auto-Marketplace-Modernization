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
        Schema::create('inventory_sources', function (Blueprint $table) {

        /*
        |-----------------------------------------------------
        | Identity
        |---------------------------------------------------------
        */

        $table->id();
        $table->uuid('uuid')->unique();


        /*
        |-----------------------------------------------------
        | Inventory Source Information
        |---------------------------------------------------------
        */
        $table->string('name');
        $table->string('slug')->unique();
        $table->string('type');

        /*
        |-----------------------------------------------------
        | API Configuration
        |---------------------------------------------------------
        */
        $table->string('base_url')->nullable();
        $table->string('api_key')->nullable();
        $table->string('api_secret')->nullable();

        /*
        |-----------------------------------------------------
        | Sync Information
        |---------------------------------------------------------  
        */
        $table->timestamp('last_synced_at')->nullable();
        $table->integer('sync_interval')->default(60);

        /*
        |-----------------------------------------------------
        | Status
        |---------------------------------------------------------
        */
        $table->boolean('is_active')->default(true);



        /*
        |-----------------------------------------------------  
        |Status and Metadata
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
        Schema::dropIfExists('inventory_sources');
    }
};
