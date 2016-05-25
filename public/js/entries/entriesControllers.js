(function() {
  angular.module('hype_machineApp')
    .controller("EntryListController", EntryListController)
    .controller("EntryViewController", EntryViewController)
    .controller("EntryNewController", EntryNewController)
    // .controller("EntryEditController", EntryEditController);

    EntryListController.$inject = ['EntryResource'];
    EntryViewController.$inject = ['EntryResource', '$stateParams'];
    EntryNewController.$inject = ['EntryResource', '$state'];
    // ShowEditController.$inject = ['ShowResource', '$stateParams', '$state'];

    function EntryListController(EntryResource) {
      var vm = this;
      vm.entries = [];
      vm.destroy = destroy;

      EntryResource.query().$promise.then(function(entries) {
        vm.entries = entries;
      });

      function destroy(entryToDelete) {
        EntryResource.delete({id: entryToDelete._id}).$promise.then(function (response) {
          console.log(response.message);
          vm.entries = vm.entries.filter(function(entry) {
            return entry != entryToDelete;
          });
        });
      }
    }

    function EntryViewController(EntryResource, $stateParams) {
      var vm = this;
      vm.entry = {};

      EntryResource.get({id: $stateParams.id}).$promise.then(function(jsonEntry) {
          vm.entry = jsonEntry;
      });
    }

    function EntryNewController(EntryResource, $state) {
      var vm = this;
      vm.newEntry = {};
      vm.addEntry = addEntry;

      function addEntry() {
        EntryResource.save(vm.newEntry).$promise.then(function(jsonEntry) {
          vm.newEntry = {};
          $state.go('home.viewEntry', {id: jsonEntry._id});
        });
      }
    }

    // function ShowEditController(ShowResource, $stateParams, $state) {
    //   var vm = this;
    //   vm.show = {};
    //   vm.editShow = editShow;

    //   ShowResource.get({id: $stateParams.id}).$promise.then(function(jsonShow) {
    //       vm.show = jsonShow;
    //   });

    //   function editShow() {
    //     ShowResource.update({id: vm.show._id}, vm.show).$promise.then(function(updatedShow) {
    //       vm.show = updatedShow;
    //       $state.go('showShow', {id: updatedShow._id});
    //     });
    //   }
    // }

})();
