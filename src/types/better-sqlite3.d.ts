declare module 'better-sqlite3' {
  import { EventEmitter } from 'events';

  interface RunResult {
    changes: number;
    lastInsertRowid: number;
  }

  interface PrepareOptions {
    readonly?: boolean;
  }

  class Statement {
    run(...params: any[]): RunResult;
    get(...params: any[]): any;
    all(...params: any[]): any[];
    iterate(...params: any[]): IterableIterator<any>;
    bind(...params: any[]): this;
    readonly source: string;
    readonly reader: boolean;
    readonly returnsData: boolean;
  }

  type Transaction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => ReturnType<T>;

  class Database extends EventEmitter {
    constructor(filename: string, options?: any);
    prepare(source: string, options?: PrepareOptions): Statement;
    exec(source: string): this;
    pragma(source: string, options?: { simple?: boolean }): any;
    transaction<T extends (...args: any[]) => any>(fn: T): Transaction<T>;
    close(): this;
    readonly open: boolean;
    readonly inTransaction: boolean;
    readonly name: string;
    readonly memory: boolean;
    readonly readonly: boolean;
  }

  export = Database;
}

