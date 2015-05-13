(function() {
    'use strict';

    angular
        .module('components.atomviewer', [
            'components.atomviewer.appstate',
            'components.atomviewer.leftsidebar',
            'components.atomviewer.importexport',
            'components.atomviewer.help',
            'components.atomviewer.terminal'
        ])
        .constant('atomviewerConstants', {
            'name': 'Atomspace Viewer',
            'id': 'atomviewer',
            'faIcon': 'fa-plus-circle'            
        });

})();
