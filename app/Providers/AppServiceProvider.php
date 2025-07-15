<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // View::composer('*',function($view){
        //     if(Auth::check()){
        //         $user = Auth::user();
        //         $kategori_lomba = DB::table('kategori_lomba')
        //         ->where('user_id', $user->id)
        //         ->first();

        //         $view->with('kategori_lomba', $kategori_lomba);
        //     }
        // });
        
    }
}
