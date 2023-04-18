export abstract class Bootstrap {
    // design pattern facace
    abstract initialize(): Promise<string | Error>
}

