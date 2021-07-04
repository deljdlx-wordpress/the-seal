<?php
namespace TheSeal;

use EasyPlugin\Plugin as EasyPluginPlugin;

class Plugin extends EasyPluginPlugin
{

    public function initialize()
    {
        $this->createPostType('seal', "Seal", [
            'title',
            'author',
        ]);
    }

    public function createCustomFields()
    {


        $this->createFieldGroupToType('seal', 'seal-colors', 'Seal colors', [

            'crown-color' => [
                'label' => 'Crown color',
                'type' => 'color_picker',
                'default_value' => '#ff00ff',
            ],

            'border-color' => [
                'label' => 'Border color',
                'type' => 'color_picker',
                'default_value' => '#00ffff',
            ],

            'text-color' => [
                'label' => 'Text color',
                'type' => 'color_picker',
                'default_value' => '#ffffff',
            ],
        ]);



        $this->createFieldGroupToType('seal', 'seal-custom', 'Seal options', [
            'background' => [
                'label' => 'Background',
                'type' => 'image',
            ],
            'size' => [
                'label' => 'Size',
                'type' => 'range',
                'min' => 100,
                'max' => 500,
                'default_value' => 200,
            ],

            'gear-size' => [
                'label' => 'Gear size',
                'type' => 'range',
                'min' => 0,
                'max' => 200,
                'default_value' => 60
            ],

            'gear-border' => [
                'label' => 'Gear borders size',
                'type' => 'range',
                'min' => 0,
                'max' => 20,
                'default_value' => 5
            ],

            'border-size' => [
                'label' => 'Border size',
                'type' => 'range',
                'min' => 0,
                'max' => 50,
                'default_value' => 5
            ],


            'rotation-speed' => [
                'label' => 'Rotation speed',
                'type' => 'range',
                'min' => 0,
                'max' => 30,
                'default_value' => 0
            ],

            'oscillation-speed' => [
                'label' => 'Oscillation speed',
                'type' => 'range',
                'min' => 0,
                'max' => 30,
                'default_value' => 0
            ],

            'sunburn' => [
                'label' => 'Color change',
                'type' => 'true_false',
            ],
        ]);
    }

}

