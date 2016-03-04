angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.lists', {
    url: '/lists',
    views: {
      'tab5': {
        templateUrl: 'templates/lists.html',
        controller: 'listsCtrl'
      }
    }
  })

  .state('tabsController.video1', {
    url: '/video1',
    views: {
      'tab3': {
        templateUrl: 'templates/video1.html',
        controller: 'video1Ctrl'
      }
    }
  })

  .state('tabsController.video2', {
    url: '/video2',
    views: {
      'tab3': {
        templateUrl: 'templates/video2.html',
        controller: 'video2Ctrl'
      }
    }
  })

  .state('tabsController.video3', {
    url: '/video3',
    views: {
      'tab3': {
        templateUrl: 'templates/video3.html',
        controller: 'video3Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.intro', {
    url: '/intro',
    views: {
      'tab1': {
        templateUrl: 'templates/intro.html',
        controller: 'introCtrl'
      }
    }
  })

  .state('tabsController.videos', {
    url: '/videos',
    views: {
      'tab3': {
        templateUrl: 'templates/videos.html',
        controller: 'videosCtrl'
      }
    }
  })

  .state('tabsController.list1', {
    url: '/list1',
    views: {
      'tab5': {
        templateUrl: 'templates/list1.html',
        controller: 'list1Ctrl'
      }
    }
  })

  .state('tabsController.list2', {
    url: '/list2',
    views: {
      'tab5': {
        templateUrl: 'templates/list2.html',
        controller: 'list2Ctrl'
      }
    }
  })

  .state('list3', {
    url: '/list3',
    templateUrl: 'templates/list3.html',
    controller: 'list3Ctrl'
  })

$urlRouterProvider.otherwise('/tabs/intro')

  

});