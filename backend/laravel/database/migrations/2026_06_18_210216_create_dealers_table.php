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
        Schema::create('dealers', function (Blueprint $table) {

        /*
        |-----------------------------------------------------
        | Identity
        |---------------------------------------------------------
        */
        $table->id();
        $table->uuid('uuid')->unique();

        /*
        |-----------------------------------------------------
        | Dealer Information
        |---------------------------------------------------------
        */
        $table->string('name');
        $table->string('slug')->unique();
        $table->string('email')->nullable()->unique();
        $table->string('phone')->nullable();
        $table->string('website')->nullable();
        $table->text('address')->nullable();
        $table->string('city')->nullable();
        $table->string('country')->nullable();
        $table->string('logo')->nullable();


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
        Schema::dropIfExists('dealers');
    }
};
