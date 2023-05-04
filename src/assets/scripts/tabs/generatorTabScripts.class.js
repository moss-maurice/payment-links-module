class GeneratorTabScripts {
    linkPrefix = '';

    constructor() {
        if (typeof linkPrefix !== 'undefined') {
            this.linkPrefix = linkPrefix;
        }

        this.clearForm();

        this.initControls();
        //this.initButtons();
        /*this.initActionButtons();
        this.initStatusButtons();
        this.initAmountEditButtons();
        this.initPagination();*/
    }

    clearForm() {
        this.messageHide();
        this.inputClear();
        this.hideLink();
        this.hideSend();
        this.hideCopy();
    }

    initControls() {
        var module = this;

        jQuery(document).on('input', '#generator #amount', function(event) {
            var amount = module.getAmount();

            if (amount !== '') {
                var link = module.generateLink(amount);

                module.showLink(link);
                module.showCopy();
            } else {
                module.hideLink();
                module.hideCopy();
            }
        }).on('input', '#generator #email', function(event) {
            var email = module.getEmail();

            if (email !== '') {
                module.modeCheck();
            } else {
                module.modeUncheck();
            }
        }).on('click', '#generator #link #copy, #generator #controls #copy', function(event) {
            var link = jQuery(document).find('#generator #link a').attr('href');

            module.copyToClipboard(link);
            module.messageCopySuccessShow();
        }).on('change', '#generator #sendMode', function(event) {
            if (jQuery(this).is(':checked')) {
                module.showSend();
            } else {
                module.hideSend();
            }
        }).on('click', '#generator #controls #clear', function (event) {
            module.clearForm();
        }).on('click', '#generator #controls #send', function (event) {
            var data = {
                tabName: jQuery(document).find('#generator form').attr('rel-tab'),
                method: 'sendLink',
                link: jQuery(document).find('#generator #link a').attr('href'),
                email: jQuery(document).find('#generator #email').val(),
            }

            jQuery.ajax({
                type: moduleObject.apiMethod,
                url: moduleObject.apiUrl,
                data: data,
                async: false
            }).done(function(response) {
                if (response.status == true) {
                    module.clearForm();
                    module.messageSendSuccessShow();
                } else {
                    module.messageSendFailShow();
                }
            }).success(function(response) {
                module.clearForm();
                module.messageSendSuccessShow();
            }).error(function(response) {
                module.messageSendFailShow();
            });
        });
    }

    inputClear() {
        jQuery(document).find('#generator #amount').val('');
        jQuery(document).find('#generator #email').val('');

        this.modeUncheck();
    }

    copyToClipboard(text) {
        const input = document.createElement('input');

        input.style.position = 'fixed';
        input.style.opacity = 0;
        input.value = text;

        document.body.appendChild(input);

        input.select();

        document.execCommand('Copy');
        document.body.removeChild(input);
    }

    getAmount() {
        var amount = jQuery(document).find('#generator #amount').val();

        return amount;
    }

    getEmail() {
        var email = jQuery(document).find('#generator #email').val();

        return email;
    }

    showLink(link) {
        jQuery(document).find('#generator #link a').attr('href', link);
        jQuery(document).find('#generator #link a').text(link);

        jQuery(document).find('#generator #link').removeClass('d-none');
        jQuery(document).find('#generator #placeholder').addClass('d-none');
    }

    hideLink() {
        jQuery(document).find('#generator #link a').attr('href', '#');
        jQuery(document).find('#generator #link a').text('');

        jQuery(document).find('#generator #placeholder').removeClass('d-none');
        jQuery(document).find('#generator #link').addClass('d-none');
    }

    showSend() {
        jQuery(document).find('#generator #controls #send').removeClass('d-none');
    }

    hideSend() {
        jQuery(document).find('#generator #controls #send').addClass('d-none');
    }

    generateLink(amount) {
        var link = window.origin + this.linkPrefix + '/' + btoa(amount + '|' + md5(amount));

        console.log('generated link: ' + link);

        return link;
    }

    modeCheck()
    {
        jQuery(document).find('#generator #sendMode').prop('checked', true);

        this.showSend();
    }

    modeUncheck() {
        jQuery(document).find('#generator #sendMode').prop('checked', false);

        this.hideSend();
    }

    showCopy()
    {
        jQuery(document).find('#generator #controls #copy').removeClass('d-none');
    }

    hideCopy() {
        jQuery(document).find('#generator #controls #copy').addClass('d-none');
    }

    messageHide() {
        jQuery(document).find('#messages').addClass('d-none');
        jQuery(document).find('#messages #copySuccess').addClass('d-none');
        jQuery(document).find('#messages #sendSuccess').addClass('d-none');
        jQuery(document).find('#messages #senError').addClass('d-none');
    }

    messageCopySuccessShow() {
        jQuery(document).find('#messages').removeClass('d-none');
        jQuery(document).find('#messages #copySuccess').removeClass('d-none');
        jQuery(document).find('#messages #sendSuccess').addClass('d-none');
        jQuery(document).find('#messages #senError').addClass('d-none');
    }

    messageSendSuccessShow() {
        jQuery(document).find('#messages').removeClass('d-none');
        jQuery(document).find('#messages #copySuccess').addClass('d-none');
        jQuery(document).find('#messages #sendSuccess').removeClass('d-none');
        jQuery(document).find('#messages #senError').addClass('d-none');
    }

    messageSendFailShow() {
        jQuery(document).find('#messages').removeClass('d-none');
        jQuery(document).find('#messages #copySuccess').addClass('d-none');
        jQuery(document).find('#messages #sendSuccess').addClass('d-none');
        jQuery(document).find('#messages #senError').removeClass('d-none');
    }
}