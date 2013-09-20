<?php
return array(
    'soflomo_prototype' => array(
        'pages' => array(
            'home' => array(
                'route'    => '/',
                'template' => 'mockup/home',
            ),
        ),
    ),

    'navigation' => array(
        'default' => array(
            array(
                'label' => 'Home',
                'route' => 'home',
            ),
        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            __DIR__ . '/../view',
        ),
    ),

    'service_manager' => array(
        'factories' => array(
            'default' => 'Zend\Navigation\Service\DefaultNavigationFactory',
        ),
    ),
);