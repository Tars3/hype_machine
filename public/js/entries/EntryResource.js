(function() {
  angular.module('hype_machineApp')
    .factory("EntryResource", EntryResource);

  EntryResource.$inject = ['$resource'];

  function EntryResource($resource) {

    return $resource(
      "/api/entries/:id",
      {id: '@id'}, {
        'update': { method: 'PUT'}
      }
    );
  }
})();
