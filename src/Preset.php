<?php

namespace Zoomyboy\VuetifyPreset;

use File;
use Artisan;
use Illuminate\Foundation\Console\Presets\Preset as BasePreset;

class Preset extends BasePreset {
    public static function install() {
        if (!File::exists(resource_path('views/auth'))) {
            Artisan::call('make:auth', ['--force' => true]);
        }
        static::deleteSassDirectory();
        static::copyJsStub();
        static::updatePackages();
        static::updateRoutes();
    }

    public static function deleteSassDirectory() {
        File::deleteDirectory(resource_path('assets/sass'));
    }

    public static function copyJsStub() {
        File::cleanDirectory(resource_path('assets/js'));
        File::copyDirectory(__DIR__.'/stubs/js', resource_path('assets/js'));
    }

    public static function updatePackageArray() {
        return [
            'vuetify' => "latest",
            "axios" => "latest",
            "jquery" => "^3.2",
            "laravel-mix" => "^2.0",
            "lodash" => "^4.17",
            "stylus" => "^0.54.5",
            "vue" => "^2.5.7",
            "font-awesome" => "^4.7.0",
            "font-awesome-webpack" => "0.0.5-beta.2",
            "laravel-echo" => "^1.3.5",
            "merge" => "^1.2.0",
            "socket.io-client" => "^2.1.0",
            "stylus-loader" => "^3.0.2",
            "vue-router" => "^3.0.1",
            "vuetify" => "^1.0",
            "vuex" => "^3.0.1"
        ];
    }

    public static function updateRoutes() {
        File::copy(__DIR__.'/stubs/routes/web.php', base_path('routes/web.php'));
    }
}
