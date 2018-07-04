<?php

namespace Zoomyboy\VuetifyPreset;

use File;
use Illuminate\Foundation\Console\Presets\Preset as BasePreset;

class Preset extends BasePreset {
    public static function install() {
        static::deleteSassDirectory();
    }

    public static function deleteSassDirectory() {
        File::deleteDirectory(resource_path('assets/sass'));
    }
}
