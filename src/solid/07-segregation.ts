interface bird{    
    eat(): void;    
}

interface flyingBird{
    fly(): void;
}

interface runningBird {        
    run(): void;    
}

interface swimmingBird {        
    swim(): void;    
}

class Tucan implements bird, flyingBird, runningBird{
    public fly(){};
    public eat(){};
    public run(){};
}

class Humminbird implements bird, runningBird{    
    public eat(){};
    public run(){};
}

class Penguin implements bird, swimmingBird{    
    public eat(){};
    public swim(){};
}