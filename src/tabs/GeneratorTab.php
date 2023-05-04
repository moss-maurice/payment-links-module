<?php

namespace mmaurice\PaymentLinksModule\tabs;

use mmaurice\PaymentLinksModule\classes\Tab;
use mmaurice\PaymentLinksModule\helpers\MailerHelper;

class GeneratorTab extends Tab
{
    const ROW_LIMIT = 20;

    public $title = 'Генератор';
    public $description = 'Генерация ссылок на оплату';
    public $orderPosition = 1;

    public function __construct()
    {
        $server = $this->serverName() . '/';

        if (!defined('MODX_BASE_URL')) {
            define('MODX_BASE_URL', $server);
        }

        if (!defined('MODX_SITE_URL')) {
            define('MODX_SITE_URL', $server);
        }
    }

    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionSendLink()
    {
        $body = MailerHelper::renderTemplate('sendLink', [
            'link' => trim($_POST['link']),
        ]);

        $result = MailerHelper::send($_POST['email'], 'Вам доступна ссылка на оплату', $body);

        return [
            'status' => MailerHelper::send($_POST['email'], 'Вам доступна ссылка на оплату', $body),
        ];
    }

    protected function serverName()
    {
        return (!isset($_SERVER["HTTPS"]) ? (strtolower(substr($_SERVER["SERVER_PROTOCOL"], 0, 5)) !== 'https' ? 'http' : 'https') : 'https') . '://' . $_SERVER['HTTP_HOST'];
    }
}