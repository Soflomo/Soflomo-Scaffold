<?php

use Zend\Stdlib\ArrayUtils;

$config = array(
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

$local = __DIR__ . '/application.config.local.php';
if (is_readable($local)) {
    $config = ArrayUtils::merge($config, require($local));
}

return $config;

