let server = require("cyclon.p2p-rtc-server/server");
let client = require("cyclon.p2p-rtc-client/lib/index");


let rtc = new client.RTC(createSignallingService(), undefined);
rtc.connect({}, [3]);



function createSignallingService() {
    var storage = Utils.newInMemoryStorage();
    var signallingServerService = new client.StaticSignallingServerService(SIGNALLING_SERVER);
    var signallingServerSelector = new client.SignallingServerSelector(signallingServerService, storage, timingService, 5000);
    var signallingSocket = new client.RedundantSignallingSocket(
        signallingServerService,
        socketFactory,
        logger,
        Utils.asyncExecService(),
        signallingServerSelector);

    return new client.SocketIOSignallingService(
        signallingSocket,
        logger,
        httpRequestService,
        storage);
}

console.log(Object.getOwnPropertyNames(client));
