// Pattern Adapter

// оборачивает несовместимый с чем-то объект и делает его совместимым, не изменяя исходный код объекта


class Engine2 {
    simpleInterface() {
        console.log('Engine 2.0 - tr-tr-tr');
    }
};

class EngineV8 {
    complecatedInterface() {
        console.log('Engine V8! - wroom-wroom!');
    }
};

class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }

    simpleInterface() {
        this.engine.complecatedInterface();
    }    

};

class Auto {
    startEngine(engine) {
        engine.simpleInterface();
    }
};

// engine 2.0
const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine);

// engine V8 with adapter
const myCar1 = new Auto();
const engineAdapter1 = new EngineV8Adapter(new EngineV8());

myCar1.startEngine(engineAdapter1);

// engine V8 without adapter - ERROR
const myCar2 = new Auto();
const engineAdapter2 = new EngineV8();

myCar2.startEngine(engineAdapter2);


