var Server = IgeClass.extend({
	classId: 'Server',
	Server: true,

	init: function () {
		// Start the network server
		ige.network = new IgeSocketIo();
		ige.network.start();

		// Start the game engine
		ige.start(function (success) {
			// Check if the engine started successfully
			if (success) {
				// Accept incoming connections
				ige.network.acceptConnections(true);
			}
		});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Server; }