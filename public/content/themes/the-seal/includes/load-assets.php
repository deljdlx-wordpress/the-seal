<?php

// ===========================================================================================
// Chargement des assets
// ===========================================================================================

function theme_load_assets()
{

    $stylesheets = [
        'assets/css/vendor/bootstrap.min.css',
        'assets/css/vendor/fontawesome.min.css',

        'assets/css/the-seal.css',
    ];



    wp_enqueue_style(
        'google-font',
        'https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap'
    );

    foreach($stylesheets as $url) {
        wp_enqueue_style(
            $url,
            get_theme_file_uri($url)
        );
    }

    $javascripts = [
        'assets/js/vendor/jquery-1.11.0.min.js',
        'assets/js/vendor/jquery-migrate-1.2.1.min.js',
        'assets/js/vendor/bootstrap.bundle.min.js',

        'assets/js/TheSeal.js',
        'assets/js/run-the-seal.js',
    ];

    foreach($javascripts as $javascript) {
        wp_enqueue_script(
            $javascript,
            get_theme_file_uri($javascript),
            [],
            null,
            true    // IMPORTANT true pour dire que le javascript sera chargé à la fin de la balise <body>
        );
    }
}


add_action('wp_enqueue_scripts', 'theme_load_assets');