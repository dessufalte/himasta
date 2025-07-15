<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePesertaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('peserta', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('peserta_name')->nullable();
            $table->string('peserta_email')->nullable();
            $table->string('peserta_perguruan_tinggi')->nullable();
            $table->string('peserta_jurusan')->nullable();
            $table->integer('peserta_angkatan')->nullable();
            $table->string('peserta_ktm_filename')->nullable();
            $table->string('peserta_uploaded_ktm_filename')->nullable();
            $table->smallInteger('peserta_index');
            $table->boolean('already_filled')->default(false);

            $table->timestamps();
            $table->dropColumn('created_at');

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('peserta');
    }
}
