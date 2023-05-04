<div id="generator" class="row justify-content-center">
    <div class="col-8">
        <form rel-tab="<?= $tabName; ?>">
            <div class="form-group pt-3">
                <label for="amount" class="h3">Сумма для оплаты</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text px-4 font-weight-bold text-center">₽</span>
                    </div>
                    <input type="number" id="amount" class="form-control form-control-lg text-center"
                        placeholder="Введите сумму для оплаты" />
                    <div class="input-group-append">
                        <span class="input-group-text font-weight-bold">.00</span>
                    </div>
                </div>
            </div>
            <div class="form-group py-3">
                <label for="amount" class="h3">Отправить ссылку на почту?</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text px-3 text-center">
                            <input type="checkbox" class="form-control form-control-lg mx-1" id="sendMode" />
                        </div>
                    </div>
                    <input type="text" class="form-control form-control-lg text-center pr-5" id="email"
                        placeholder="Введите адрес электронной почты" />
                </div>
            </div>
            <div class="jumbotron jumbotron-fluid text-center rounded">
                <div class="container">
                    <div id="placeholder" class="h1">Введите сумму ...</div>
                    <div id="link" class="d-none mx-3 h3 text-truncate">
                        <i id="copy" class="fa fa-clone fa-fw mr-3 font-weight-bold"></i>
                        <a class="font-weight-light" href="#" target="_blank"></a>
                    </div>
                </div>
            </div>
            <div id="messages" class="p-3 h3 text-center d-none">
                <div id="copySuccess" class="text-success d-none">Ссылка скопирована в буфер обмена</div>
                <div id="sendSuccess" class="text-success d-none">Ссылка отправлена по почте</div>
                <div id="senError" class="text-danger d-none">Не удалось отправить ссылку</div>
            </div>
            <div id="controls" class="form-group pt-3 text-center">
                <button type="button" id="send" class="btn btn-success btn-lg d-none">Отправить</button>
                <button type="button" id="copy" class="btn btn-primary btn-lg d-none">Копировать</button>
                <button type="button" id="clear" class="btn btn-link btn-lg">Очистить</button>
            </div>
        </form>
    </div>
</div>