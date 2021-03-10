EmployeeManager.Views.EmployeeForm = Backbone.View.extend({
    template: _.template($('#tpl-new-contact').html()),

    events: {
        'submit .employee-form': 'onFormSubmit'
    },

    render: function () {
        var html = this.template(_.extend(this.model.toJSON(), {
            isNew: this.model.isNew()
        }));
        this.$el.append(html);
        return this;
    },

    getRandom: function () {
        return Math.floor((Math.random() * 500) + 1);
    },

    onFormSubmit: function (e) {
        e.preventDefault();

        this.trigger('form:submitted', {
            name: this.$('.employee-name-input').val(),
            tel: this.$('.employee-tel-input').val(),
            email: this.$('.employee-email-input').val(),
            avatar: this.model.get('avatar') || `${this.getRandom()}`
        });
    }
});