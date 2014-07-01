define(['/bower_components/dropzone/downloads/dropzone-amd-module.min.js'], function (Dropzone) {
    var
    removeErrors = function() {
        $(this.element).find('ul.errors').remove();
    },

    hideImage = function() {
        $('.image-container', $(this.element)).hide();
    },

    success = function(file, response) {
        var element      = $(this.element),
            imageIdField = $('#' + element.data('image-field')),
            image        = $('.image-element', element.get(0))
            imageKey     = element.data('image-key');

        if(imageKey !== undefined) {
            imageKey = '.' + imageKey;
        } else {
            imageKey = '';
        }

        image.attr('src', response.image.source + imageKey);
        image.data('image-id', response.image.id);

        imageIdField.val(response.image.id);

        $('.image-element', $(element)).show();
        $('.image-container', $(this.element)).show();
        $('.dz-message', $(this.element)).hide();
        $('.image-upload-link', $(this.element)).show();
    },

    error = function(file, response, request) {
        var contents = response,
            element  = $(this.element);

        $.map(contents.error, function(message, title) {
            var list = $('<ul/>', {class: 'errors alert alert-error'});
            $.map(message, function(text) {
                list.append($('<li/>', {text: text}));
            });

            $('.image-container', $(element)).show();
            $('.image-element', $(element)).hide();
            $('.dz-message', $(element)).show();
            $('.image-upload-link', $(element)).hide();
            $('.image-container', $(element).get(0)).append(list);
        });
    },

    complete = function(file, response) {
        this.removeFile(file);
    },

    create = function(element, url) {
        new Dropzone(element, {
            url: url,
            paramName: 'image',
            params: {form: $(element).data('image-variant')},
            thumbnailWidth: '200',
            thumbnailHeight: '200',
            clickable: '.clickable',
            init: function() {
                this.on('selectedfiles', removeErrors)
                    .on('selectedfiles', hideImage)
                    .on('success', success)
                    .on('error', error)
                    .on('complete', complete)
                    .on('processingfile', processing);
            }
        });
    },

    processing = function(event, element) {
        var url =  $(this.element).data('url');
        this.options.url       = url;
        this.options.paramName = 'image';
    },

    removeImage = function(event) {

        event.preventDefault();

        var link           = $(this),
            confirmMessage = link.data('confirm-message'),
            parent         = link.closest('.image-uploader');
            imageIdField   = $('#' + parent.data('image-field')),
            image          = $('.image-element', parent.get(0));

        if (confirmMessage) {
            if (confirm(confirmMessage)) {
                removeRequest();
            }
        } else {
            $.post(link.attr('href'), function() {
                removeRequest();
            });
        }

        function removeRequest(image) {

            link.hide();

            $('.image-element', $(parent)).hide();
            imageIdField.val("");

            $('.dz-message', $(parent)).show();

            // var removePost = $.post(link.attr('href'), function() {
            //     //Success
            // });

            //     removePost.complete(function(data) {
            //     });

            //     removePost.fail(function(data) {
            //         alert('Er ging iets mis bij het verwijderen van de afbeelding');
            //     });
        }
    };

    return {
        init: function(selector) {
            Dropzone.autoDiscover = false;

            $.each( $(selector), function(i, element) {
                var url          = $(element).data('url'),
                    deleteButton = $('.delete-image', $(element).get(0));

                create(element, url);

                deleteButton.on('click', removeImage);

            });
        }
    };

});