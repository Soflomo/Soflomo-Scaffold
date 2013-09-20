<?php
return array(
    'modules' => array(
        'Application',
        'Soflomo\Common',
        'Soflomo\Prototype',
        'Template',
    ),
    'module_listener_options' => array(
        'config_glob_paths'    => array(
            'config/autoload/{,*.}{global,local}.php',
        ),
        'module_paths' => array(
            './module',
            './vendor',
        ),
    ),
);
