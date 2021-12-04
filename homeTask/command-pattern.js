// command pattern

// позволяет отделить клиента от получателя.
// можно также сказать что он превращает запросы в объекты, что позволяет передавать их как аргументы в методы

class Driver {
    constructor(command) {
        this.command = command;
    }

    execute() {
        this.command.execute();
    }
};

class Engine {
    constructor() {
        this.state = false;
    }

    on() {
        this.state = true;
    }

    off() {
        this.state = false;
    }
}

class OnStartCommand {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.on();
    }
};

class OnSwitchOffCommand {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.off();
    }
};

// Check Engine status
const engine = new Engine();

// console.log(engine);

// Start Engine
const OnStart = new OnStartCommand(engine);
const driver = new Driver(OnStart);
driver.execute();

// console.log(engine);




