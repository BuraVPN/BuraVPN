
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Peer
 * 
 */
export type Peer = $Result.DefaultSelection<Prisma.$PeerPayload>
/**
 * Model GroupPeer
 * 
 */
export type GroupPeer = $Result.DefaultSelection<Prisma.$GroupPeerPayload>
/**
 * Model Tunnel
 * 
 */
export type Tunnel = $Result.DefaultSelection<Prisma.$TunnelPayload>
/**
 * Model TunnelTravelRouter
 * 
 */
export type TunnelTravelRouter = $Result.DefaultSelection<Prisma.$TunnelTravelRouterPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peer`: Exposes CRUD operations for the **Peer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peers
    * const peers = await prisma.peer.findMany()
    * ```
    */
  get peer(): Prisma.PeerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupPeer`: Exposes CRUD operations for the **GroupPeer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupPeers
    * const groupPeers = await prisma.groupPeer.findMany()
    * ```
    */
  get groupPeer(): Prisma.GroupPeerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tunnel`: Exposes CRUD operations for the **Tunnel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tunnels
    * const tunnels = await prisma.tunnel.findMany()
    * ```
    */
  get tunnel(): Prisma.TunnelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tunnelTravelRouter`: Exposes CRUD operations for the **TunnelTravelRouter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TunnelTravelRouters
    * const tunnelTravelRouters = await prisma.tunnelTravelRouter.findMany()
    * ```
    */
  get tunnelTravelRouter(): Prisma.TunnelTravelRouterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Group: 'Group',
    Peer: 'Peer',
    GroupPeer: 'GroupPeer',
    Tunnel: 'Tunnel',
    TunnelTravelRouter: 'TunnelTravelRouter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "group" | "peer" | "groupPeer" | "tunnel" | "tunnelTravelRouter"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Peer: {
        payload: Prisma.$PeerPayload<ExtArgs>
        fields: Prisma.PeerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerPayload>
          }
          findFirst: {
            args: Prisma.PeerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerPayload>
          }
          findMany: {
            args: Prisma.PeerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerPayload>[]
          }
          create: {
            args: Prisma.PeerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerPayload>
          }
          createMany: {
            args: Prisma.PeerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerPayload>[]
          }
          delete: {
            args: Prisma.PeerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerPayload>
          }
          update: {
            args: Prisma.PeerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerPayload>
          }
          deleteMany: {
            args: Prisma.PeerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerPayload>[]
          }
          upsert: {
            args: Prisma.PeerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeerPayload>
          }
          aggregate: {
            args: Prisma.PeerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeer>
          }
          groupBy: {
            args: Prisma.PeerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeerCountArgs<ExtArgs>
            result: $Utils.Optional<PeerCountAggregateOutputType> | number
          }
        }
      }
      GroupPeer: {
        payload: Prisma.$GroupPeerPayload<ExtArgs>
        fields: Prisma.GroupPeerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupPeerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPeerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupPeerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPeerPayload>
          }
          findFirst: {
            args: Prisma.GroupPeerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPeerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupPeerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPeerPayload>
          }
          findMany: {
            args: Prisma.GroupPeerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPeerPayload>[]
          }
          create: {
            args: Prisma.GroupPeerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPeerPayload>
          }
          createMany: {
            args: Prisma.GroupPeerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupPeerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPeerPayload>[]
          }
          delete: {
            args: Prisma.GroupPeerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPeerPayload>
          }
          update: {
            args: Prisma.GroupPeerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPeerPayload>
          }
          deleteMany: {
            args: Prisma.GroupPeerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupPeerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupPeerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPeerPayload>[]
          }
          upsert: {
            args: Prisma.GroupPeerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPeerPayload>
          }
          aggregate: {
            args: Prisma.GroupPeerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupPeer>
          }
          groupBy: {
            args: Prisma.GroupPeerGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupPeerGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupPeerCountArgs<ExtArgs>
            result: $Utils.Optional<GroupPeerCountAggregateOutputType> | number
          }
        }
      }
      Tunnel: {
        payload: Prisma.$TunnelPayload<ExtArgs>
        fields: Prisma.TunnelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TunnelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TunnelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelPayload>
          }
          findFirst: {
            args: Prisma.TunnelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TunnelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelPayload>
          }
          findMany: {
            args: Prisma.TunnelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelPayload>[]
          }
          create: {
            args: Prisma.TunnelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelPayload>
          }
          createMany: {
            args: Prisma.TunnelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TunnelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelPayload>[]
          }
          delete: {
            args: Prisma.TunnelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelPayload>
          }
          update: {
            args: Prisma.TunnelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelPayload>
          }
          deleteMany: {
            args: Prisma.TunnelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TunnelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TunnelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelPayload>[]
          }
          upsert: {
            args: Prisma.TunnelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelPayload>
          }
          aggregate: {
            args: Prisma.TunnelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTunnel>
          }
          groupBy: {
            args: Prisma.TunnelGroupByArgs<ExtArgs>
            result: $Utils.Optional<TunnelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TunnelCountArgs<ExtArgs>
            result: $Utils.Optional<TunnelCountAggregateOutputType> | number
          }
        }
      }
      TunnelTravelRouter: {
        payload: Prisma.$TunnelTravelRouterPayload<ExtArgs>
        fields: Prisma.TunnelTravelRouterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TunnelTravelRouterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelTravelRouterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TunnelTravelRouterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelTravelRouterPayload>
          }
          findFirst: {
            args: Prisma.TunnelTravelRouterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelTravelRouterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TunnelTravelRouterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelTravelRouterPayload>
          }
          findMany: {
            args: Prisma.TunnelTravelRouterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelTravelRouterPayload>[]
          }
          create: {
            args: Prisma.TunnelTravelRouterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelTravelRouterPayload>
          }
          createMany: {
            args: Prisma.TunnelTravelRouterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TunnelTravelRouterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelTravelRouterPayload>[]
          }
          delete: {
            args: Prisma.TunnelTravelRouterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelTravelRouterPayload>
          }
          update: {
            args: Prisma.TunnelTravelRouterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelTravelRouterPayload>
          }
          deleteMany: {
            args: Prisma.TunnelTravelRouterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TunnelTravelRouterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TunnelTravelRouterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelTravelRouterPayload>[]
          }
          upsert: {
            args: Prisma.TunnelTravelRouterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TunnelTravelRouterPayload>
          }
          aggregate: {
            args: Prisma.TunnelTravelRouterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTunnelTravelRouter>
          }
          groupBy: {
            args: Prisma.TunnelTravelRouterGroupByArgs<ExtArgs>
            result: $Utils.Optional<TunnelTravelRouterGroupByOutputType>[]
          }
          count: {
            args: Prisma.TunnelTravelRouterCountArgs<ExtArgs>
            result: $Utils.Optional<TunnelTravelRouterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    group?: GroupOmit
    peer?: PeerOmit
    groupPeer?: GroupPeerOmit
    tunnel?: TunnelOmit
    tunnelTravelRouter?: TunnelTravelRouterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    groups: number
    tunnels: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | UserCountOutputTypeCountGroupsArgs
    tunnels?: boolean | UserCountOutputTypeCountTunnelsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTunnelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TunnelWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    groupPeers: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupPeers?: boolean | GroupCountOutputTypeCountGroupPeersArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountGroupPeersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupPeerWhereInput
  }


  /**
   * Count Type PeerCountOutputType
   */

  export type PeerCountOutputType = {
    groupPeers: number
    tunnelsAsExitNode: number
    tunnelsAsTravelRouter: number
  }

  export type PeerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupPeers?: boolean | PeerCountOutputTypeCountGroupPeersArgs
    tunnelsAsExitNode?: boolean | PeerCountOutputTypeCountTunnelsAsExitNodeArgs
    tunnelsAsTravelRouter?: boolean | PeerCountOutputTypeCountTunnelsAsTravelRouterArgs
  }

  // Custom InputTypes
  /**
   * PeerCountOutputType without action
   */
  export type PeerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeerCountOutputType
     */
    select?: PeerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeerCountOutputType without action
   */
  export type PeerCountOutputTypeCountGroupPeersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupPeerWhereInput
  }

  /**
   * PeerCountOutputType without action
   */
  export type PeerCountOutputTypeCountTunnelsAsExitNodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TunnelWhereInput
  }

  /**
   * PeerCountOutputType without action
   */
  export type PeerCountOutputTypeCountTunnelsAsTravelRouterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TunnelTravelRouterWhereInput
  }


  /**
   * Count Type TunnelCountOutputType
   */

  export type TunnelCountOutputType = {
    travelRouters: number
  }

  export type TunnelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travelRouters?: boolean | TunnelCountOutputTypeCountTravelRoutersArgs
  }

  // Custom InputTypes
  /**
   * TunnelCountOutputType without action
   */
  export type TunnelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelCountOutputType
     */
    select?: TunnelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TunnelCountOutputType without action
   */
  export type TunnelCountOutputTypeCountTravelRoutersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TunnelTravelRouterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groups?: boolean | User$groupsArgs<ExtArgs>
    tunnels?: boolean | User$tunnelsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | User$groupsArgs<ExtArgs>
    tunnels?: boolean | User$tunnelsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      groups: Prisma.$GroupPayload<ExtArgs>[]
      tunnels: Prisma.$TunnelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends User$groupsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tunnels<T extends User$tunnelsArgs<ExtArgs> = {}>(args?: Subset<T, User$tunnelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.groups
   */
  export type User$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User.tunnels
   */
  export type User$tunnelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelInclude<ExtArgs> | null
    where?: TunnelWhereInput
    orderBy?: TunnelOrderByWithRelationInput | TunnelOrderByWithRelationInput[]
    cursor?: TunnelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TunnelScalarFieldEnum | TunnelScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    peersCount: number | null
    resourcesCount: number | null
  }

  export type GroupSumAggregateOutputType = {
    peersCount: number | null
    resourcesCount: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    netbirdGroupId: string | null
    name: string | null
    userId: string | null
    peersCount: number | null
    resourcesCount: number | null
    issued: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    netbirdGroupId: string | null
    name: string | null
    userId: string | null
    peersCount: number | null
    resourcesCount: number | null
    issued: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    netbirdGroupId: number
    name: number
    userId: number
    peersCount: number
    resourcesCount: number
    issued: number
    resources: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    peersCount?: true
    resourcesCount?: true
  }

  export type GroupSumAggregateInputType = {
    peersCount?: true
    resourcesCount?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    netbirdGroupId?: true
    name?: true
    userId?: true
    peersCount?: true
    resourcesCount?: true
    issued?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    netbirdGroupId?: true
    name?: true
    userId?: true
    peersCount?: true
    resourcesCount?: true
    issued?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    netbirdGroupId?: true
    name?: true
    userId?: true
    peersCount?: true
    resourcesCount?: true
    issued?: true
    resources?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    netbirdGroupId: string
    name: string
    userId: string
    peersCount: number
    resourcesCount: number
    issued: string | null
    resources: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    netbirdGroupId?: boolean
    name?: boolean
    userId?: boolean
    peersCount?: boolean
    resourcesCount?: boolean
    issued?: boolean
    resources?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    groupPeers?: boolean | Group$groupPeersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    netbirdGroupId?: boolean
    name?: boolean
    userId?: boolean
    peersCount?: boolean
    resourcesCount?: boolean
    issued?: boolean
    resources?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    netbirdGroupId?: boolean
    name?: boolean
    userId?: boolean
    peersCount?: boolean
    resourcesCount?: boolean
    issued?: boolean
    resources?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    netbirdGroupId?: boolean
    name?: boolean
    userId?: boolean
    peersCount?: boolean
    resourcesCount?: boolean
    issued?: boolean
    resources?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "netbirdGroupId" | "name" | "userId" | "peersCount" | "resourcesCount" | "issued" | "resources" | "createdAt" | "updatedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    groupPeers?: boolean | Group$groupPeersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      groupPeers: Prisma.$GroupPeerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      netbirdGroupId: string
      name: string
      userId: string
      peersCount: number
      resourcesCount: number
      issued: string | null
      resources: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groupPeers<T extends Group$groupPeersArgs<ExtArgs> = {}>(args?: Subset<T, Group$groupPeersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPeerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly netbirdGroupId: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly userId: FieldRef<"Group", 'String'>
    readonly peersCount: FieldRef<"Group", 'Int'>
    readonly resourcesCount: FieldRef<"Group", 'Int'>
    readonly issued: FieldRef<"Group", 'String'>
    readonly resources: FieldRef<"Group", 'Json'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.groupPeers
   */
  export type Group$groupPeersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerInclude<ExtArgs> | null
    where?: GroupPeerWhereInput
    orderBy?: GroupPeerOrderByWithRelationInput | GroupPeerOrderByWithRelationInput[]
    cursor?: GroupPeerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupPeerScalarFieldEnum | GroupPeerScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Peer
   */

  export type AggregatePeer = {
    _count: PeerCountAggregateOutputType | null
    _avg: PeerAvgAggregateOutputType | null
    _sum: PeerSumAggregateOutputType | null
    _min: PeerMinAggregateOutputType | null
    _max: PeerMaxAggregateOutputType | null
  }

  export type PeerAvgAggregateOutputType = {
    geonameId: number | null
  }

  export type PeerSumAggregateOutputType = {
    geonameId: number | null
  }

  export type PeerMinAggregateOutputType = {
    id: string | null
    netbirdPeerId: string | null
    name: string | null
    ip: string | null
    connectionIp: string | null
    dnsLabel: string | null
    connected: boolean | null
    lastSeen: Date | null
    lastLogin: Date | null
    os: string | null
    kernelVersion: string | null
    version: string | null
    uiVersion: string | null
    hostname: string | null
    serialNumber: string | null
    geonameId: number | null
    countryCode: string | null
    cityName: string | null
    userId: string | null
    sshEnabled: boolean | null
    approvalRequired: boolean | null
    ephemeral: boolean | null
    loginExpirationEnabled: boolean | null
    loginExpired: boolean | null
    inactivityExpirationEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeerMaxAggregateOutputType = {
    id: string | null
    netbirdPeerId: string | null
    name: string | null
    ip: string | null
    connectionIp: string | null
    dnsLabel: string | null
    connected: boolean | null
    lastSeen: Date | null
    lastLogin: Date | null
    os: string | null
    kernelVersion: string | null
    version: string | null
    uiVersion: string | null
    hostname: string | null
    serialNumber: string | null
    geonameId: number | null
    countryCode: string | null
    cityName: string | null
    userId: string | null
    sshEnabled: boolean | null
    approvalRequired: boolean | null
    ephemeral: boolean | null
    loginExpirationEnabled: boolean | null
    loginExpired: boolean | null
    inactivityExpirationEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeerCountAggregateOutputType = {
    id: number
    netbirdPeerId: number
    name: number
    ip: number
    connectionIp: number
    dnsLabel: number
    extraDnsLabels: number
    connected: number
    lastSeen: number
    lastLogin: number
    os: number
    kernelVersion: number
    version: number
    uiVersion: number
    hostname: number
    serialNumber: number
    geonameId: number
    countryCode: number
    cityName: number
    userId: number
    sshEnabled: number
    approvalRequired: number
    ephemeral: number
    loginExpirationEnabled: number
    loginExpired: number
    inactivityExpirationEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PeerAvgAggregateInputType = {
    geonameId?: true
  }

  export type PeerSumAggregateInputType = {
    geonameId?: true
  }

  export type PeerMinAggregateInputType = {
    id?: true
    netbirdPeerId?: true
    name?: true
    ip?: true
    connectionIp?: true
    dnsLabel?: true
    connected?: true
    lastSeen?: true
    lastLogin?: true
    os?: true
    kernelVersion?: true
    version?: true
    uiVersion?: true
    hostname?: true
    serialNumber?: true
    geonameId?: true
    countryCode?: true
    cityName?: true
    userId?: true
    sshEnabled?: true
    approvalRequired?: true
    ephemeral?: true
    loginExpirationEnabled?: true
    loginExpired?: true
    inactivityExpirationEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeerMaxAggregateInputType = {
    id?: true
    netbirdPeerId?: true
    name?: true
    ip?: true
    connectionIp?: true
    dnsLabel?: true
    connected?: true
    lastSeen?: true
    lastLogin?: true
    os?: true
    kernelVersion?: true
    version?: true
    uiVersion?: true
    hostname?: true
    serialNumber?: true
    geonameId?: true
    countryCode?: true
    cityName?: true
    userId?: true
    sshEnabled?: true
    approvalRequired?: true
    ephemeral?: true
    loginExpirationEnabled?: true
    loginExpired?: true
    inactivityExpirationEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeerCountAggregateInputType = {
    id?: true
    netbirdPeerId?: true
    name?: true
    ip?: true
    connectionIp?: true
    dnsLabel?: true
    extraDnsLabels?: true
    connected?: true
    lastSeen?: true
    lastLogin?: true
    os?: true
    kernelVersion?: true
    version?: true
    uiVersion?: true
    hostname?: true
    serialNumber?: true
    geonameId?: true
    countryCode?: true
    cityName?: true
    userId?: true
    sshEnabled?: true
    approvalRequired?: true
    ephemeral?: true
    loginExpirationEnabled?: true
    loginExpired?: true
    inactivityExpirationEnabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PeerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peer to aggregate.
     */
    where?: PeerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peers to fetch.
     */
    orderBy?: PeerOrderByWithRelationInput | PeerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peers
    **/
    _count?: true | PeerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeerMaxAggregateInputType
  }

  export type GetPeerAggregateType<T extends PeerAggregateArgs> = {
        [P in keyof T & keyof AggregatePeer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeer[P]>
      : GetScalarType<T[P], AggregatePeer[P]>
  }




  export type PeerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeerWhereInput
    orderBy?: PeerOrderByWithAggregationInput | PeerOrderByWithAggregationInput[]
    by: PeerScalarFieldEnum[] | PeerScalarFieldEnum
    having?: PeerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeerCountAggregateInputType | true
    _avg?: PeerAvgAggregateInputType
    _sum?: PeerSumAggregateInputType
    _min?: PeerMinAggregateInputType
    _max?: PeerMaxAggregateInputType
  }

  export type PeerGroupByOutputType = {
    id: string
    netbirdPeerId: string
    name: string
    ip: string | null
    connectionIp: string | null
    dnsLabel: string | null
    extraDnsLabels: string[]
    connected: boolean
    lastSeen: Date | null
    lastLogin: Date | null
    os: string | null
    kernelVersion: string | null
    version: string | null
    uiVersion: string | null
    hostname: string | null
    serialNumber: string | null
    geonameId: number | null
    countryCode: string | null
    cityName: string | null
    userId: string | null
    sshEnabled: boolean
    approvalRequired: boolean
    ephemeral: boolean
    loginExpirationEnabled: boolean
    loginExpired: boolean
    inactivityExpirationEnabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: PeerCountAggregateOutputType | null
    _avg: PeerAvgAggregateOutputType | null
    _sum: PeerSumAggregateOutputType | null
    _min: PeerMinAggregateOutputType | null
    _max: PeerMaxAggregateOutputType | null
  }

  type GetPeerGroupByPayload<T extends PeerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeerGroupByOutputType[P]>
            : GetScalarType<T[P], PeerGroupByOutputType[P]>
        }
      >
    >


  export type PeerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    netbirdPeerId?: boolean
    name?: boolean
    ip?: boolean
    connectionIp?: boolean
    dnsLabel?: boolean
    extraDnsLabels?: boolean
    connected?: boolean
    lastSeen?: boolean
    lastLogin?: boolean
    os?: boolean
    kernelVersion?: boolean
    version?: boolean
    uiVersion?: boolean
    hostname?: boolean
    serialNumber?: boolean
    geonameId?: boolean
    countryCode?: boolean
    cityName?: boolean
    userId?: boolean
    sshEnabled?: boolean
    approvalRequired?: boolean
    ephemeral?: boolean
    loginExpirationEnabled?: boolean
    loginExpired?: boolean
    inactivityExpirationEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupPeers?: boolean | Peer$groupPeersArgs<ExtArgs>
    tunnelsAsExitNode?: boolean | Peer$tunnelsAsExitNodeArgs<ExtArgs>
    tunnelsAsTravelRouter?: boolean | Peer$tunnelsAsTravelRouterArgs<ExtArgs>
    _count?: boolean | PeerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peer"]>

  export type PeerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    netbirdPeerId?: boolean
    name?: boolean
    ip?: boolean
    connectionIp?: boolean
    dnsLabel?: boolean
    extraDnsLabels?: boolean
    connected?: boolean
    lastSeen?: boolean
    lastLogin?: boolean
    os?: boolean
    kernelVersion?: boolean
    version?: boolean
    uiVersion?: boolean
    hostname?: boolean
    serialNumber?: boolean
    geonameId?: boolean
    countryCode?: boolean
    cityName?: boolean
    userId?: boolean
    sshEnabled?: boolean
    approvalRequired?: boolean
    ephemeral?: boolean
    loginExpirationEnabled?: boolean
    loginExpired?: boolean
    inactivityExpirationEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["peer"]>

  export type PeerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    netbirdPeerId?: boolean
    name?: boolean
    ip?: boolean
    connectionIp?: boolean
    dnsLabel?: boolean
    extraDnsLabels?: boolean
    connected?: boolean
    lastSeen?: boolean
    lastLogin?: boolean
    os?: boolean
    kernelVersion?: boolean
    version?: boolean
    uiVersion?: boolean
    hostname?: boolean
    serialNumber?: boolean
    geonameId?: boolean
    countryCode?: boolean
    cityName?: boolean
    userId?: boolean
    sshEnabled?: boolean
    approvalRequired?: boolean
    ephemeral?: boolean
    loginExpirationEnabled?: boolean
    loginExpired?: boolean
    inactivityExpirationEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["peer"]>

  export type PeerSelectScalar = {
    id?: boolean
    netbirdPeerId?: boolean
    name?: boolean
    ip?: boolean
    connectionIp?: boolean
    dnsLabel?: boolean
    extraDnsLabels?: boolean
    connected?: boolean
    lastSeen?: boolean
    lastLogin?: boolean
    os?: boolean
    kernelVersion?: boolean
    version?: boolean
    uiVersion?: boolean
    hostname?: boolean
    serialNumber?: boolean
    geonameId?: boolean
    countryCode?: boolean
    cityName?: boolean
    userId?: boolean
    sshEnabled?: boolean
    approvalRequired?: boolean
    ephemeral?: boolean
    loginExpirationEnabled?: boolean
    loginExpired?: boolean
    inactivityExpirationEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PeerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "netbirdPeerId" | "name" | "ip" | "connectionIp" | "dnsLabel" | "extraDnsLabels" | "connected" | "lastSeen" | "lastLogin" | "os" | "kernelVersion" | "version" | "uiVersion" | "hostname" | "serialNumber" | "geonameId" | "countryCode" | "cityName" | "userId" | "sshEnabled" | "approvalRequired" | "ephemeral" | "loginExpirationEnabled" | "loginExpired" | "inactivityExpirationEnabled" | "createdAt" | "updatedAt", ExtArgs["result"]["peer"]>
  export type PeerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupPeers?: boolean | Peer$groupPeersArgs<ExtArgs>
    tunnelsAsExitNode?: boolean | Peer$tunnelsAsExitNodeArgs<ExtArgs>
    tunnelsAsTravelRouter?: boolean | Peer$tunnelsAsTravelRouterArgs<ExtArgs>
    _count?: boolean | PeerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PeerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PeerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Peer"
    objects: {
      groupPeers: Prisma.$GroupPeerPayload<ExtArgs>[]
      tunnelsAsExitNode: Prisma.$TunnelPayload<ExtArgs>[]
      tunnelsAsTravelRouter: Prisma.$TunnelTravelRouterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      netbirdPeerId: string
      name: string
      ip: string | null
      connectionIp: string | null
      dnsLabel: string | null
      extraDnsLabels: string[]
      connected: boolean
      lastSeen: Date | null
      lastLogin: Date | null
      os: string | null
      kernelVersion: string | null
      version: string | null
      uiVersion: string | null
      hostname: string | null
      serialNumber: string | null
      geonameId: number | null
      countryCode: string | null
      cityName: string | null
      userId: string | null
      sshEnabled: boolean
      approvalRequired: boolean
      ephemeral: boolean
      loginExpirationEnabled: boolean
      loginExpired: boolean
      inactivityExpirationEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["peer"]>
    composites: {}
  }

  type PeerGetPayload<S extends boolean | null | undefined | PeerDefaultArgs> = $Result.GetResult<Prisma.$PeerPayload, S>

  type PeerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeerCountAggregateInputType | true
    }

  export interface PeerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peer'], meta: { name: 'Peer' } }
    /**
     * Find zero or one Peer that matches the filter.
     * @param {PeerFindUniqueArgs} args - Arguments to find a Peer
     * @example
     * // Get one Peer
     * const peer = await prisma.peer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeerFindUniqueArgs>(args: SelectSubset<T, PeerFindUniqueArgs<ExtArgs>>): Prisma__PeerClient<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeerFindUniqueOrThrowArgs} args - Arguments to find a Peer
     * @example
     * // Get one Peer
     * const peer = await prisma.peer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeerFindUniqueOrThrowArgs>(args: SelectSubset<T, PeerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeerClient<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerFindFirstArgs} args - Arguments to find a Peer
     * @example
     * // Get one Peer
     * const peer = await prisma.peer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeerFindFirstArgs>(args?: SelectSubset<T, PeerFindFirstArgs<ExtArgs>>): Prisma__PeerClient<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerFindFirstOrThrowArgs} args - Arguments to find a Peer
     * @example
     * // Get one Peer
     * const peer = await prisma.peer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeerFindFirstOrThrowArgs>(args?: SelectSubset<T, PeerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeerClient<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Peers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peers
     * const peers = await prisma.peer.findMany()
     * 
     * // Get first 10 Peers
     * const peers = await prisma.peer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peerWithIdOnly = await prisma.peer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeerFindManyArgs>(args?: SelectSubset<T, PeerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peer.
     * @param {PeerCreateArgs} args - Arguments to create a Peer.
     * @example
     * // Create one Peer
     * const Peer = await prisma.peer.create({
     *   data: {
     *     // ... data to create a Peer
     *   }
     * })
     * 
     */
    create<T extends PeerCreateArgs>(args: SelectSubset<T, PeerCreateArgs<ExtArgs>>): Prisma__PeerClient<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Peers.
     * @param {PeerCreateManyArgs} args - Arguments to create many Peers.
     * @example
     * // Create many Peers
     * const peer = await prisma.peer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeerCreateManyArgs>(args?: SelectSubset<T, PeerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Peers and returns the data saved in the database.
     * @param {PeerCreateManyAndReturnArgs} args - Arguments to create many Peers.
     * @example
     * // Create many Peers
     * const peer = await prisma.peer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Peers and only return the `id`
     * const peerWithIdOnly = await prisma.peer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeerCreateManyAndReturnArgs>(args?: SelectSubset<T, PeerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Peer.
     * @param {PeerDeleteArgs} args - Arguments to delete one Peer.
     * @example
     * // Delete one Peer
     * const Peer = await prisma.peer.delete({
     *   where: {
     *     // ... filter to delete one Peer
     *   }
     * })
     * 
     */
    delete<T extends PeerDeleteArgs>(args: SelectSubset<T, PeerDeleteArgs<ExtArgs>>): Prisma__PeerClient<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peer.
     * @param {PeerUpdateArgs} args - Arguments to update one Peer.
     * @example
     * // Update one Peer
     * const peer = await prisma.peer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeerUpdateArgs>(args: SelectSubset<T, PeerUpdateArgs<ExtArgs>>): Prisma__PeerClient<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Peers.
     * @param {PeerDeleteManyArgs} args - Arguments to filter Peers to delete.
     * @example
     * // Delete a few Peers
     * const { count } = await prisma.peer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeerDeleteManyArgs>(args?: SelectSubset<T, PeerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peers
     * const peer = await prisma.peer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeerUpdateManyArgs>(args: SelectSubset<T, PeerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peers and returns the data updated in the database.
     * @param {PeerUpdateManyAndReturnArgs} args - Arguments to update many Peers.
     * @example
     * // Update many Peers
     * const peer = await prisma.peer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Peers and only return the `id`
     * const peerWithIdOnly = await prisma.peer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PeerUpdateManyAndReturnArgs>(args: SelectSubset<T, PeerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Peer.
     * @param {PeerUpsertArgs} args - Arguments to update or create a Peer.
     * @example
     * // Update or create a Peer
     * const peer = await prisma.peer.upsert({
     *   create: {
     *     // ... data to create a Peer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peer we want to update
     *   }
     * })
     */
    upsert<T extends PeerUpsertArgs>(args: SelectSubset<T, PeerUpsertArgs<ExtArgs>>): Prisma__PeerClient<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Peers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerCountArgs} args - Arguments to filter Peers to count.
     * @example
     * // Count the number of Peers
     * const count = await prisma.peer.count({
     *   where: {
     *     // ... the filter for the Peers we want to count
     *   }
     * })
    **/
    count<T extends PeerCountArgs>(
      args?: Subset<T, PeerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeerAggregateArgs>(args: Subset<T, PeerAggregateArgs>): Prisma.PrismaPromise<GetPeerAggregateType<T>>

    /**
     * Group by Peer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeerGroupByArgs['orderBy'] }
        : { orderBy?: PeerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peer model
   */
  readonly fields: PeerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groupPeers<T extends Peer$groupPeersArgs<ExtArgs> = {}>(args?: Subset<T, Peer$groupPeersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPeerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tunnelsAsExitNode<T extends Peer$tunnelsAsExitNodeArgs<ExtArgs> = {}>(args?: Subset<T, Peer$tunnelsAsExitNodeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tunnelsAsTravelRouter<T extends Peer$tunnelsAsTravelRouterArgs<ExtArgs> = {}>(args?: Subset<T, Peer$tunnelsAsTravelRouterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TunnelTravelRouterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Peer model
   */
  interface PeerFieldRefs {
    readonly id: FieldRef<"Peer", 'String'>
    readonly netbirdPeerId: FieldRef<"Peer", 'String'>
    readonly name: FieldRef<"Peer", 'String'>
    readonly ip: FieldRef<"Peer", 'String'>
    readonly connectionIp: FieldRef<"Peer", 'String'>
    readonly dnsLabel: FieldRef<"Peer", 'String'>
    readonly extraDnsLabels: FieldRef<"Peer", 'String[]'>
    readonly connected: FieldRef<"Peer", 'Boolean'>
    readonly lastSeen: FieldRef<"Peer", 'DateTime'>
    readonly lastLogin: FieldRef<"Peer", 'DateTime'>
    readonly os: FieldRef<"Peer", 'String'>
    readonly kernelVersion: FieldRef<"Peer", 'String'>
    readonly version: FieldRef<"Peer", 'String'>
    readonly uiVersion: FieldRef<"Peer", 'String'>
    readonly hostname: FieldRef<"Peer", 'String'>
    readonly serialNumber: FieldRef<"Peer", 'String'>
    readonly geonameId: FieldRef<"Peer", 'Int'>
    readonly countryCode: FieldRef<"Peer", 'String'>
    readonly cityName: FieldRef<"Peer", 'String'>
    readonly userId: FieldRef<"Peer", 'String'>
    readonly sshEnabled: FieldRef<"Peer", 'Boolean'>
    readonly approvalRequired: FieldRef<"Peer", 'Boolean'>
    readonly ephemeral: FieldRef<"Peer", 'Boolean'>
    readonly loginExpirationEnabled: FieldRef<"Peer", 'Boolean'>
    readonly loginExpired: FieldRef<"Peer", 'Boolean'>
    readonly inactivityExpirationEnabled: FieldRef<"Peer", 'Boolean'>
    readonly createdAt: FieldRef<"Peer", 'DateTime'>
    readonly updatedAt: FieldRef<"Peer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Peer findUnique
   */
  export type PeerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peer
     */
    select?: PeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peer
     */
    omit?: PeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerInclude<ExtArgs> | null
    /**
     * Filter, which Peer to fetch.
     */
    where: PeerWhereUniqueInput
  }

  /**
   * Peer findUniqueOrThrow
   */
  export type PeerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peer
     */
    select?: PeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peer
     */
    omit?: PeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerInclude<ExtArgs> | null
    /**
     * Filter, which Peer to fetch.
     */
    where: PeerWhereUniqueInput
  }

  /**
   * Peer findFirst
   */
  export type PeerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peer
     */
    select?: PeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peer
     */
    omit?: PeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerInclude<ExtArgs> | null
    /**
     * Filter, which Peer to fetch.
     */
    where?: PeerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peers to fetch.
     */
    orderBy?: PeerOrderByWithRelationInput | PeerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peers.
     */
    cursor?: PeerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peers.
     */
    distinct?: PeerScalarFieldEnum | PeerScalarFieldEnum[]
  }

  /**
   * Peer findFirstOrThrow
   */
  export type PeerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peer
     */
    select?: PeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peer
     */
    omit?: PeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerInclude<ExtArgs> | null
    /**
     * Filter, which Peer to fetch.
     */
    where?: PeerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peers to fetch.
     */
    orderBy?: PeerOrderByWithRelationInput | PeerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peers.
     */
    cursor?: PeerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peers.
     */
    distinct?: PeerScalarFieldEnum | PeerScalarFieldEnum[]
  }

  /**
   * Peer findMany
   */
  export type PeerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peer
     */
    select?: PeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peer
     */
    omit?: PeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerInclude<ExtArgs> | null
    /**
     * Filter, which Peers to fetch.
     */
    where?: PeerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peers to fetch.
     */
    orderBy?: PeerOrderByWithRelationInput | PeerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peers.
     */
    cursor?: PeerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peers.
     */
    skip?: number
    distinct?: PeerScalarFieldEnum | PeerScalarFieldEnum[]
  }

  /**
   * Peer create
   */
  export type PeerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peer
     */
    select?: PeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peer
     */
    omit?: PeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerInclude<ExtArgs> | null
    /**
     * The data needed to create a Peer.
     */
    data: XOR<PeerCreateInput, PeerUncheckedCreateInput>
  }

  /**
   * Peer createMany
   */
  export type PeerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Peers.
     */
    data: PeerCreateManyInput | PeerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Peer createManyAndReturn
   */
  export type PeerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peer
     */
    select?: PeerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Peer
     */
    omit?: PeerOmit<ExtArgs> | null
    /**
     * The data used to create many Peers.
     */
    data: PeerCreateManyInput | PeerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Peer update
   */
  export type PeerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peer
     */
    select?: PeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peer
     */
    omit?: PeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerInclude<ExtArgs> | null
    /**
     * The data needed to update a Peer.
     */
    data: XOR<PeerUpdateInput, PeerUncheckedUpdateInput>
    /**
     * Choose, which Peer to update.
     */
    where: PeerWhereUniqueInput
  }

  /**
   * Peer updateMany
   */
  export type PeerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Peers.
     */
    data: XOR<PeerUpdateManyMutationInput, PeerUncheckedUpdateManyInput>
    /**
     * Filter which Peers to update
     */
    where?: PeerWhereInput
    /**
     * Limit how many Peers to update.
     */
    limit?: number
  }

  /**
   * Peer updateManyAndReturn
   */
  export type PeerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peer
     */
    select?: PeerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Peer
     */
    omit?: PeerOmit<ExtArgs> | null
    /**
     * The data used to update Peers.
     */
    data: XOR<PeerUpdateManyMutationInput, PeerUncheckedUpdateManyInput>
    /**
     * Filter which Peers to update
     */
    where?: PeerWhereInput
    /**
     * Limit how many Peers to update.
     */
    limit?: number
  }

  /**
   * Peer upsert
   */
  export type PeerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peer
     */
    select?: PeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peer
     */
    omit?: PeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerInclude<ExtArgs> | null
    /**
     * The filter to search for the Peer to update in case it exists.
     */
    where: PeerWhereUniqueInput
    /**
     * In case the Peer found by the `where` argument doesn't exist, create a new Peer with this data.
     */
    create: XOR<PeerCreateInput, PeerUncheckedCreateInput>
    /**
     * In case the Peer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeerUpdateInput, PeerUncheckedUpdateInput>
  }

  /**
   * Peer delete
   */
  export type PeerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peer
     */
    select?: PeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peer
     */
    omit?: PeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerInclude<ExtArgs> | null
    /**
     * Filter which Peer to delete.
     */
    where: PeerWhereUniqueInput
  }

  /**
   * Peer deleteMany
   */
  export type PeerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peers to delete
     */
    where?: PeerWhereInput
    /**
     * Limit how many Peers to delete.
     */
    limit?: number
  }

  /**
   * Peer.groupPeers
   */
  export type Peer$groupPeersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerInclude<ExtArgs> | null
    where?: GroupPeerWhereInput
    orderBy?: GroupPeerOrderByWithRelationInput | GroupPeerOrderByWithRelationInput[]
    cursor?: GroupPeerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupPeerScalarFieldEnum | GroupPeerScalarFieldEnum[]
  }

  /**
   * Peer.tunnelsAsExitNode
   */
  export type Peer$tunnelsAsExitNodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelInclude<ExtArgs> | null
    where?: TunnelWhereInput
    orderBy?: TunnelOrderByWithRelationInput | TunnelOrderByWithRelationInput[]
    cursor?: TunnelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TunnelScalarFieldEnum | TunnelScalarFieldEnum[]
  }

  /**
   * Peer.tunnelsAsTravelRouter
   */
  export type Peer$tunnelsAsTravelRouterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterInclude<ExtArgs> | null
    where?: TunnelTravelRouterWhereInput
    orderBy?: TunnelTravelRouterOrderByWithRelationInput | TunnelTravelRouterOrderByWithRelationInput[]
    cursor?: TunnelTravelRouterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TunnelTravelRouterScalarFieldEnum | TunnelTravelRouterScalarFieldEnum[]
  }

  /**
   * Peer without action
   */
  export type PeerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peer
     */
    select?: PeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peer
     */
    omit?: PeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeerInclude<ExtArgs> | null
  }


  /**
   * Model GroupPeer
   */

  export type AggregateGroupPeer = {
    _count: GroupPeerCountAggregateOutputType | null
    _min: GroupPeerMinAggregateOutputType | null
    _max: GroupPeerMaxAggregateOutputType | null
  }

  export type GroupPeerMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    peerId: string | null
    addedAt: Date | null
  }

  export type GroupPeerMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    peerId: string | null
    addedAt: Date | null
  }

  export type GroupPeerCountAggregateOutputType = {
    id: number
    groupId: number
    peerId: number
    addedAt: number
    _all: number
  }


  export type GroupPeerMinAggregateInputType = {
    id?: true
    groupId?: true
    peerId?: true
    addedAt?: true
  }

  export type GroupPeerMaxAggregateInputType = {
    id?: true
    groupId?: true
    peerId?: true
    addedAt?: true
  }

  export type GroupPeerCountAggregateInputType = {
    id?: true
    groupId?: true
    peerId?: true
    addedAt?: true
    _all?: true
  }

  export type GroupPeerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupPeer to aggregate.
     */
    where?: GroupPeerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupPeers to fetch.
     */
    orderBy?: GroupPeerOrderByWithRelationInput | GroupPeerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupPeerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupPeers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupPeers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupPeers
    **/
    _count?: true | GroupPeerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupPeerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupPeerMaxAggregateInputType
  }

  export type GetGroupPeerAggregateType<T extends GroupPeerAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupPeer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupPeer[P]>
      : GetScalarType<T[P], AggregateGroupPeer[P]>
  }




  export type GroupPeerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupPeerWhereInput
    orderBy?: GroupPeerOrderByWithAggregationInput | GroupPeerOrderByWithAggregationInput[]
    by: GroupPeerScalarFieldEnum[] | GroupPeerScalarFieldEnum
    having?: GroupPeerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupPeerCountAggregateInputType | true
    _min?: GroupPeerMinAggregateInputType
    _max?: GroupPeerMaxAggregateInputType
  }

  export type GroupPeerGroupByOutputType = {
    id: string
    groupId: string
    peerId: string
    addedAt: Date
    _count: GroupPeerCountAggregateOutputType | null
    _min: GroupPeerMinAggregateOutputType | null
    _max: GroupPeerMaxAggregateOutputType | null
  }

  type GetGroupPeerGroupByPayload<T extends GroupPeerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupPeerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupPeerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupPeerGroupByOutputType[P]>
            : GetScalarType<T[P], GroupPeerGroupByOutputType[P]>
        }
      >
    >


  export type GroupPeerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    peerId?: boolean
    addedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    peer?: boolean | PeerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupPeer"]>

  export type GroupPeerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    peerId?: boolean
    addedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    peer?: boolean | PeerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupPeer"]>

  export type GroupPeerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    peerId?: boolean
    addedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    peer?: boolean | PeerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupPeer"]>

  export type GroupPeerSelectScalar = {
    id?: boolean
    groupId?: boolean
    peerId?: boolean
    addedAt?: boolean
  }

  export type GroupPeerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "peerId" | "addedAt", ExtArgs["result"]["groupPeer"]>
  export type GroupPeerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    peer?: boolean | PeerDefaultArgs<ExtArgs>
  }
  export type GroupPeerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    peer?: boolean | PeerDefaultArgs<ExtArgs>
  }
  export type GroupPeerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    peer?: boolean | PeerDefaultArgs<ExtArgs>
  }

  export type $GroupPeerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupPeer"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      peer: Prisma.$PeerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      peerId: string
      addedAt: Date
    }, ExtArgs["result"]["groupPeer"]>
    composites: {}
  }

  type GroupPeerGetPayload<S extends boolean | null | undefined | GroupPeerDefaultArgs> = $Result.GetResult<Prisma.$GroupPeerPayload, S>

  type GroupPeerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupPeerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupPeerCountAggregateInputType | true
    }

  export interface GroupPeerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupPeer'], meta: { name: 'GroupPeer' } }
    /**
     * Find zero or one GroupPeer that matches the filter.
     * @param {GroupPeerFindUniqueArgs} args - Arguments to find a GroupPeer
     * @example
     * // Get one GroupPeer
     * const groupPeer = await prisma.groupPeer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupPeerFindUniqueArgs>(args: SelectSubset<T, GroupPeerFindUniqueArgs<ExtArgs>>): Prisma__GroupPeerClient<$Result.GetResult<Prisma.$GroupPeerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupPeer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupPeerFindUniqueOrThrowArgs} args - Arguments to find a GroupPeer
     * @example
     * // Get one GroupPeer
     * const groupPeer = await prisma.groupPeer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupPeerFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupPeerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupPeerClient<$Result.GetResult<Prisma.$GroupPeerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupPeer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPeerFindFirstArgs} args - Arguments to find a GroupPeer
     * @example
     * // Get one GroupPeer
     * const groupPeer = await prisma.groupPeer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupPeerFindFirstArgs>(args?: SelectSubset<T, GroupPeerFindFirstArgs<ExtArgs>>): Prisma__GroupPeerClient<$Result.GetResult<Prisma.$GroupPeerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupPeer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPeerFindFirstOrThrowArgs} args - Arguments to find a GroupPeer
     * @example
     * // Get one GroupPeer
     * const groupPeer = await prisma.groupPeer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupPeerFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupPeerFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupPeerClient<$Result.GetResult<Prisma.$GroupPeerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupPeers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPeerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupPeers
     * const groupPeers = await prisma.groupPeer.findMany()
     * 
     * // Get first 10 GroupPeers
     * const groupPeers = await prisma.groupPeer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupPeerWithIdOnly = await prisma.groupPeer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupPeerFindManyArgs>(args?: SelectSubset<T, GroupPeerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPeerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupPeer.
     * @param {GroupPeerCreateArgs} args - Arguments to create a GroupPeer.
     * @example
     * // Create one GroupPeer
     * const GroupPeer = await prisma.groupPeer.create({
     *   data: {
     *     // ... data to create a GroupPeer
     *   }
     * })
     * 
     */
    create<T extends GroupPeerCreateArgs>(args: SelectSubset<T, GroupPeerCreateArgs<ExtArgs>>): Prisma__GroupPeerClient<$Result.GetResult<Prisma.$GroupPeerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupPeers.
     * @param {GroupPeerCreateManyArgs} args - Arguments to create many GroupPeers.
     * @example
     * // Create many GroupPeers
     * const groupPeer = await prisma.groupPeer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupPeerCreateManyArgs>(args?: SelectSubset<T, GroupPeerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupPeers and returns the data saved in the database.
     * @param {GroupPeerCreateManyAndReturnArgs} args - Arguments to create many GroupPeers.
     * @example
     * // Create many GroupPeers
     * const groupPeer = await prisma.groupPeer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupPeers and only return the `id`
     * const groupPeerWithIdOnly = await prisma.groupPeer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupPeerCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupPeerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPeerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupPeer.
     * @param {GroupPeerDeleteArgs} args - Arguments to delete one GroupPeer.
     * @example
     * // Delete one GroupPeer
     * const GroupPeer = await prisma.groupPeer.delete({
     *   where: {
     *     // ... filter to delete one GroupPeer
     *   }
     * })
     * 
     */
    delete<T extends GroupPeerDeleteArgs>(args: SelectSubset<T, GroupPeerDeleteArgs<ExtArgs>>): Prisma__GroupPeerClient<$Result.GetResult<Prisma.$GroupPeerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupPeer.
     * @param {GroupPeerUpdateArgs} args - Arguments to update one GroupPeer.
     * @example
     * // Update one GroupPeer
     * const groupPeer = await prisma.groupPeer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupPeerUpdateArgs>(args: SelectSubset<T, GroupPeerUpdateArgs<ExtArgs>>): Prisma__GroupPeerClient<$Result.GetResult<Prisma.$GroupPeerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupPeers.
     * @param {GroupPeerDeleteManyArgs} args - Arguments to filter GroupPeers to delete.
     * @example
     * // Delete a few GroupPeers
     * const { count } = await prisma.groupPeer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupPeerDeleteManyArgs>(args?: SelectSubset<T, GroupPeerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupPeers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPeerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupPeers
     * const groupPeer = await prisma.groupPeer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupPeerUpdateManyArgs>(args: SelectSubset<T, GroupPeerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupPeers and returns the data updated in the database.
     * @param {GroupPeerUpdateManyAndReturnArgs} args - Arguments to update many GroupPeers.
     * @example
     * // Update many GroupPeers
     * const groupPeer = await prisma.groupPeer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupPeers and only return the `id`
     * const groupPeerWithIdOnly = await prisma.groupPeer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupPeerUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupPeerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPeerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupPeer.
     * @param {GroupPeerUpsertArgs} args - Arguments to update or create a GroupPeer.
     * @example
     * // Update or create a GroupPeer
     * const groupPeer = await prisma.groupPeer.upsert({
     *   create: {
     *     // ... data to create a GroupPeer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupPeer we want to update
     *   }
     * })
     */
    upsert<T extends GroupPeerUpsertArgs>(args: SelectSubset<T, GroupPeerUpsertArgs<ExtArgs>>): Prisma__GroupPeerClient<$Result.GetResult<Prisma.$GroupPeerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupPeers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPeerCountArgs} args - Arguments to filter GroupPeers to count.
     * @example
     * // Count the number of GroupPeers
     * const count = await prisma.groupPeer.count({
     *   where: {
     *     // ... the filter for the GroupPeers we want to count
     *   }
     * })
    **/
    count<T extends GroupPeerCountArgs>(
      args?: Subset<T, GroupPeerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupPeerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupPeer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPeerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupPeerAggregateArgs>(args: Subset<T, GroupPeerAggregateArgs>): Prisma.PrismaPromise<GetGroupPeerAggregateType<T>>

    /**
     * Group by GroupPeer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPeerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupPeerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupPeerGroupByArgs['orderBy'] }
        : { orderBy?: GroupPeerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupPeerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupPeerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupPeer model
   */
  readonly fields: GroupPeerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupPeer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupPeerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    peer<T extends PeerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeerDefaultArgs<ExtArgs>>): Prisma__PeerClient<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupPeer model
   */
  interface GroupPeerFieldRefs {
    readonly id: FieldRef<"GroupPeer", 'String'>
    readonly groupId: FieldRef<"GroupPeer", 'String'>
    readonly peerId: FieldRef<"GroupPeer", 'String'>
    readonly addedAt: FieldRef<"GroupPeer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupPeer findUnique
   */
  export type GroupPeerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerInclude<ExtArgs> | null
    /**
     * Filter, which GroupPeer to fetch.
     */
    where: GroupPeerWhereUniqueInput
  }

  /**
   * GroupPeer findUniqueOrThrow
   */
  export type GroupPeerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerInclude<ExtArgs> | null
    /**
     * Filter, which GroupPeer to fetch.
     */
    where: GroupPeerWhereUniqueInput
  }

  /**
   * GroupPeer findFirst
   */
  export type GroupPeerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerInclude<ExtArgs> | null
    /**
     * Filter, which GroupPeer to fetch.
     */
    where?: GroupPeerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupPeers to fetch.
     */
    orderBy?: GroupPeerOrderByWithRelationInput | GroupPeerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupPeers.
     */
    cursor?: GroupPeerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupPeers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupPeers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupPeers.
     */
    distinct?: GroupPeerScalarFieldEnum | GroupPeerScalarFieldEnum[]
  }

  /**
   * GroupPeer findFirstOrThrow
   */
  export type GroupPeerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerInclude<ExtArgs> | null
    /**
     * Filter, which GroupPeer to fetch.
     */
    where?: GroupPeerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupPeers to fetch.
     */
    orderBy?: GroupPeerOrderByWithRelationInput | GroupPeerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupPeers.
     */
    cursor?: GroupPeerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupPeers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupPeers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupPeers.
     */
    distinct?: GroupPeerScalarFieldEnum | GroupPeerScalarFieldEnum[]
  }

  /**
   * GroupPeer findMany
   */
  export type GroupPeerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerInclude<ExtArgs> | null
    /**
     * Filter, which GroupPeers to fetch.
     */
    where?: GroupPeerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupPeers to fetch.
     */
    orderBy?: GroupPeerOrderByWithRelationInput | GroupPeerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupPeers.
     */
    cursor?: GroupPeerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupPeers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupPeers.
     */
    skip?: number
    distinct?: GroupPeerScalarFieldEnum | GroupPeerScalarFieldEnum[]
  }

  /**
   * GroupPeer create
   */
  export type GroupPeerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupPeer.
     */
    data: XOR<GroupPeerCreateInput, GroupPeerUncheckedCreateInput>
  }

  /**
   * GroupPeer createMany
   */
  export type GroupPeerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupPeers.
     */
    data: GroupPeerCreateManyInput | GroupPeerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupPeer createManyAndReturn
   */
  export type GroupPeerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * The data used to create many GroupPeers.
     */
    data: GroupPeerCreateManyInput | GroupPeerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupPeer update
   */
  export type GroupPeerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupPeer.
     */
    data: XOR<GroupPeerUpdateInput, GroupPeerUncheckedUpdateInput>
    /**
     * Choose, which GroupPeer to update.
     */
    where: GroupPeerWhereUniqueInput
  }

  /**
   * GroupPeer updateMany
   */
  export type GroupPeerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupPeers.
     */
    data: XOR<GroupPeerUpdateManyMutationInput, GroupPeerUncheckedUpdateManyInput>
    /**
     * Filter which GroupPeers to update
     */
    where?: GroupPeerWhereInput
    /**
     * Limit how many GroupPeers to update.
     */
    limit?: number
  }

  /**
   * GroupPeer updateManyAndReturn
   */
  export type GroupPeerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * The data used to update GroupPeers.
     */
    data: XOR<GroupPeerUpdateManyMutationInput, GroupPeerUncheckedUpdateManyInput>
    /**
     * Filter which GroupPeers to update
     */
    where?: GroupPeerWhereInput
    /**
     * Limit how many GroupPeers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupPeer upsert
   */
  export type GroupPeerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupPeer to update in case it exists.
     */
    where: GroupPeerWhereUniqueInput
    /**
     * In case the GroupPeer found by the `where` argument doesn't exist, create a new GroupPeer with this data.
     */
    create: XOR<GroupPeerCreateInput, GroupPeerUncheckedCreateInput>
    /**
     * In case the GroupPeer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupPeerUpdateInput, GroupPeerUncheckedUpdateInput>
  }

  /**
   * GroupPeer delete
   */
  export type GroupPeerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerInclude<ExtArgs> | null
    /**
     * Filter which GroupPeer to delete.
     */
    where: GroupPeerWhereUniqueInput
  }

  /**
   * GroupPeer deleteMany
   */
  export type GroupPeerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupPeers to delete
     */
    where?: GroupPeerWhereInput
    /**
     * Limit how many GroupPeers to delete.
     */
    limit?: number
  }

  /**
   * GroupPeer without action
   */
  export type GroupPeerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPeer
     */
    select?: GroupPeerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPeer
     */
    omit?: GroupPeerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPeerInclude<ExtArgs> | null
  }


  /**
   * Model Tunnel
   */

  export type AggregateTunnel = {
    _count: TunnelCountAggregateOutputType | null
    _min: TunnelMinAggregateOutputType | null
    _max: TunnelMaxAggregateOutputType | null
  }

  export type TunnelMinAggregateOutputType = {
    id: string | null
    userId: string | null
    exitNodeId: string | null
    name: string | null
    enabled: boolean | null
    netbirdGroupId: string | null
    netbirdRouteId: string | null
    netbirdPolicyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TunnelMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    exitNodeId: string | null
    name: string | null
    enabled: boolean | null
    netbirdGroupId: string | null
    netbirdRouteId: string | null
    netbirdPolicyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TunnelCountAggregateOutputType = {
    id: number
    userId: number
    exitNodeId: number
    name: number
    enabled: number
    netbirdGroupId: number
    netbirdRouteId: number
    netbirdPolicyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TunnelMinAggregateInputType = {
    id?: true
    userId?: true
    exitNodeId?: true
    name?: true
    enabled?: true
    netbirdGroupId?: true
    netbirdRouteId?: true
    netbirdPolicyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TunnelMaxAggregateInputType = {
    id?: true
    userId?: true
    exitNodeId?: true
    name?: true
    enabled?: true
    netbirdGroupId?: true
    netbirdRouteId?: true
    netbirdPolicyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TunnelCountAggregateInputType = {
    id?: true
    userId?: true
    exitNodeId?: true
    name?: true
    enabled?: true
    netbirdGroupId?: true
    netbirdRouteId?: true
    netbirdPolicyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TunnelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tunnel to aggregate.
     */
    where?: TunnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tunnels to fetch.
     */
    orderBy?: TunnelOrderByWithRelationInput | TunnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TunnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tunnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tunnels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tunnels
    **/
    _count?: true | TunnelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TunnelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TunnelMaxAggregateInputType
  }

  export type GetTunnelAggregateType<T extends TunnelAggregateArgs> = {
        [P in keyof T & keyof AggregateTunnel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTunnel[P]>
      : GetScalarType<T[P], AggregateTunnel[P]>
  }




  export type TunnelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TunnelWhereInput
    orderBy?: TunnelOrderByWithAggregationInput | TunnelOrderByWithAggregationInput[]
    by: TunnelScalarFieldEnum[] | TunnelScalarFieldEnum
    having?: TunnelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TunnelCountAggregateInputType | true
    _min?: TunnelMinAggregateInputType
    _max?: TunnelMaxAggregateInputType
  }

  export type TunnelGroupByOutputType = {
    id: string
    userId: string
    exitNodeId: string
    name: string | null
    enabled: boolean
    netbirdGroupId: string | null
    netbirdRouteId: string | null
    netbirdPolicyId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TunnelCountAggregateOutputType | null
    _min: TunnelMinAggregateOutputType | null
    _max: TunnelMaxAggregateOutputType | null
  }

  type GetTunnelGroupByPayload<T extends TunnelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TunnelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TunnelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TunnelGroupByOutputType[P]>
            : GetScalarType<T[P], TunnelGroupByOutputType[P]>
        }
      >
    >


  export type TunnelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exitNodeId?: boolean
    name?: boolean
    enabled?: boolean
    netbirdGroupId?: boolean
    netbirdRouteId?: boolean
    netbirdPolicyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exitNode?: boolean | PeerDefaultArgs<ExtArgs>
    travelRouters?: boolean | Tunnel$travelRoutersArgs<ExtArgs>
    _count?: boolean | TunnelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tunnel"]>

  export type TunnelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exitNodeId?: boolean
    name?: boolean
    enabled?: boolean
    netbirdGroupId?: boolean
    netbirdRouteId?: boolean
    netbirdPolicyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exitNode?: boolean | PeerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tunnel"]>

  export type TunnelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exitNodeId?: boolean
    name?: boolean
    enabled?: boolean
    netbirdGroupId?: boolean
    netbirdRouteId?: boolean
    netbirdPolicyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exitNode?: boolean | PeerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tunnel"]>

  export type TunnelSelectScalar = {
    id?: boolean
    userId?: boolean
    exitNodeId?: boolean
    name?: boolean
    enabled?: boolean
    netbirdGroupId?: boolean
    netbirdRouteId?: boolean
    netbirdPolicyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TunnelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "exitNodeId" | "name" | "enabled" | "netbirdGroupId" | "netbirdRouteId" | "netbirdPolicyId" | "createdAt" | "updatedAt", ExtArgs["result"]["tunnel"]>
  export type TunnelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exitNode?: boolean | PeerDefaultArgs<ExtArgs>
    travelRouters?: boolean | Tunnel$travelRoutersArgs<ExtArgs>
    _count?: boolean | TunnelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TunnelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exitNode?: boolean | PeerDefaultArgs<ExtArgs>
  }
  export type TunnelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exitNode?: boolean | PeerDefaultArgs<ExtArgs>
  }

  export type $TunnelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tunnel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      exitNode: Prisma.$PeerPayload<ExtArgs>
      travelRouters: Prisma.$TunnelTravelRouterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      exitNodeId: string
      name: string | null
      enabled: boolean
      netbirdGroupId: string | null
      netbirdRouteId: string | null
      netbirdPolicyId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tunnel"]>
    composites: {}
  }

  type TunnelGetPayload<S extends boolean | null | undefined | TunnelDefaultArgs> = $Result.GetResult<Prisma.$TunnelPayload, S>

  type TunnelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TunnelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TunnelCountAggregateInputType | true
    }

  export interface TunnelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tunnel'], meta: { name: 'Tunnel' } }
    /**
     * Find zero or one Tunnel that matches the filter.
     * @param {TunnelFindUniqueArgs} args - Arguments to find a Tunnel
     * @example
     * // Get one Tunnel
     * const tunnel = await prisma.tunnel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TunnelFindUniqueArgs>(args: SelectSubset<T, TunnelFindUniqueArgs<ExtArgs>>): Prisma__TunnelClient<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tunnel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TunnelFindUniqueOrThrowArgs} args - Arguments to find a Tunnel
     * @example
     * // Get one Tunnel
     * const tunnel = await prisma.tunnel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TunnelFindUniqueOrThrowArgs>(args: SelectSubset<T, TunnelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TunnelClient<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tunnel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelFindFirstArgs} args - Arguments to find a Tunnel
     * @example
     * // Get one Tunnel
     * const tunnel = await prisma.tunnel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TunnelFindFirstArgs>(args?: SelectSubset<T, TunnelFindFirstArgs<ExtArgs>>): Prisma__TunnelClient<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tunnel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelFindFirstOrThrowArgs} args - Arguments to find a Tunnel
     * @example
     * // Get one Tunnel
     * const tunnel = await prisma.tunnel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TunnelFindFirstOrThrowArgs>(args?: SelectSubset<T, TunnelFindFirstOrThrowArgs<ExtArgs>>): Prisma__TunnelClient<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tunnels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tunnels
     * const tunnels = await prisma.tunnel.findMany()
     * 
     * // Get first 10 Tunnels
     * const tunnels = await prisma.tunnel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tunnelWithIdOnly = await prisma.tunnel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TunnelFindManyArgs>(args?: SelectSubset<T, TunnelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tunnel.
     * @param {TunnelCreateArgs} args - Arguments to create a Tunnel.
     * @example
     * // Create one Tunnel
     * const Tunnel = await prisma.tunnel.create({
     *   data: {
     *     // ... data to create a Tunnel
     *   }
     * })
     * 
     */
    create<T extends TunnelCreateArgs>(args: SelectSubset<T, TunnelCreateArgs<ExtArgs>>): Prisma__TunnelClient<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tunnels.
     * @param {TunnelCreateManyArgs} args - Arguments to create many Tunnels.
     * @example
     * // Create many Tunnels
     * const tunnel = await prisma.tunnel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TunnelCreateManyArgs>(args?: SelectSubset<T, TunnelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tunnels and returns the data saved in the database.
     * @param {TunnelCreateManyAndReturnArgs} args - Arguments to create many Tunnels.
     * @example
     * // Create many Tunnels
     * const tunnel = await prisma.tunnel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tunnels and only return the `id`
     * const tunnelWithIdOnly = await prisma.tunnel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TunnelCreateManyAndReturnArgs>(args?: SelectSubset<T, TunnelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tunnel.
     * @param {TunnelDeleteArgs} args - Arguments to delete one Tunnel.
     * @example
     * // Delete one Tunnel
     * const Tunnel = await prisma.tunnel.delete({
     *   where: {
     *     // ... filter to delete one Tunnel
     *   }
     * })
     * 
     */
    delete<T extends TunnelDeleteArgs>(args: SelectSubset<T, TunnelDeleteArgs<ExtArgs>>): Prisma__TunnelClient<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tunnel.
     * @param {TunnelUpdateArgs} args - Arguments to update one Tunnel.
     * @example
     * // Update one Tunnel
     * const tunnel = await prisma.tunnel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TunnelUpdateArgs>(args: SelectSubset<T, TunnelUpdateArgs<ExtArgs>>): Prisma__TunnelClient<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tunnels.
     * @param {TunnelDeleteManyArgs} args - Arguments to filter Tunnels to delete.
     * @example
     * // Delete a few Tunnels
     * const { count } = await prisma.tunnel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TunnelDeleteManyArgs>(args?: SelectSubset<T, TunnelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tunnels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tunnels
     * const tunnel = await prisma.tunnel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TunnelUpdateManyArgs>(args: SelectSubset<T, TunnelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tunnels and returns the data updated in the database.
     * @param {TunnelUpdateManyAndReturnArgs} args - Arguments to update many Tunnels.
     * @example
     * // Update many Tunnels
     * const tunnel = await prisma.tunnel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tunnels and only return the `id`
     * const tunnelWithIdOnly = await prisma.tunnel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TunnelUpdateManyAndReturnArgs>(args: SelectSubset<T, TunnelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tunnel.
     * @param {TunnelUpsertArgs} args - Arguments to update or create a Tunnel.
     * @example
     * // Update or create a Tunnel
     * const tunnel = await prisma.tunnel.upsert({
     *   create: {
     *     // ... data to create a Tunnel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tunnel we want to update
     *   }
     * })
     */
    upsert<T extends TunnelUpsertArgs>(args: SelectSubset<T, TunnelUpsertArgs<ExtArgs>>): Prisma__TunnelClient<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tunnels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelCountArgs} args - Arguments to filter Tunnels to count.
     * @example
     * // Count the number of Tunnels
     * const count = await prisma.tunnel.count({
     *   where: {
     *     // ... the filter for the Tunnels we want to count
     *   }
     * })
    **/
    count<T extends TunnelCountArgs>(
      args?: Subset<T, TunnelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TunnelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tunnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TunnelAggregateArgs>(args: Subset<T, TunnelAggregateArgs>): Prisma.PrismaPromise<GetTunnelAggregateType<T>>

    /**
     * Group by Tunnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TunnelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TunnelGroupByArgs['orderBy'] }
        : { orderBy?: TunnelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TunnelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTunnelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tunnel model
   */
  readonly fields: TunnelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tunnel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TunnelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exitNode<T extends PeerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeerDefaultArgs<ExtArgs>>): Prisma__PeerClient<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    travelRouters<T extends Tunnel$travelRoutersArgs<ExtArgs> = {}>(args?: Subset<T, Tunnel$travelRoutersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TunnelTravelRouterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tunnel model
   */
  interface TunnelFieldRefs {
    readonly id: FieldRef<"Tunnel", 'String'>
    readonly userId: FieldRef<"Tunnel", 'String'>
    readonly exitNodeId: FieldRef<"Tunnel", 'String'>
    readonly name: FieldRef<"Tunnel", 'String'>
    readonly enabled: FieldRef<"Tunnel", 'Boolean'>
    readonly netbirdGroupId: FieldRef<"Tunnel", 'String'>
    readonly netbirdRouteId: FieldRef<"Tunnel", 'String'>
    readonly netbirdPolicyId: FieldRef<"Tunnel", 'String'>
    readonly createdAt: FieldRef<"Tunnel", 'DateTime'>
    readonly updatedAt: FieldRef<"Tunnel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tunnel findUnique
   */
  export type TunnelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelInclude<ExtArgs> | null
    /**
     * Filter, which Tunnel to fetch.
     */
    where: TunnelWhereUniqueInput
  }

  /**
   * Tunnel findUniqueOrThrow
   */
  export type TunnelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelInclude<ExtArgs> | null
    /**
     * Filter, which Tunnel to fetch.
     */
    where: TunnelWhereUniqueInput
  }

  /**
   * Tunnel findFirst
   */
  export type TunnelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelInclude<ExtArgs> | null
    /**
     * Filter, which Tunnel to fetch.
     */
    where?: TunnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tunnels to fetch.
     */
    orderBy?: TunnelOrderByWithRelationInput | TunnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tunnels.
     */
    cursor?: TunnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tunnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tunnels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tunnels.
     */
    distinct?: TunnelScalarFieldEnum | TunnelScalarFieldEnum[]
  }

  /**
   * Tunnel findFirstOrThrow
   */
  export type TunnelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelInclude<ExtArgs> | null
    /**
     * Filter, which Tunnel to fetch.
     */
    where?: TunnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tunnels to fetch.
     */
    orderBy?: TunnelOrderByWithRelationInput | TunnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tunnels.
     */
    cursor?: TunnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tunnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tunnels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tunnels.
     */
    distinct?: TunnelScalarFieldEnum | TunnelScalarFieldEnum[]
  }

  /**
   * Tunnel findMany
   */
  export type TunnelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelInclude<ExtArgs> | null
    /**
     * Filter, which Tunnels to fetch.
     */
    where?: TunnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tunnels to fetch.
     */
    orderBy?: TunnelOrderByWithRelationInput | TunnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tunnels.
     */
    cursor?: TunnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tunnels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tunnels.
     */
    skip?: number
    distinct?: TunnelScalarFieldEnum | TunnelScalarFieldEnum[]
  }

  /**
   * Tunnel create
   */
  export type TunnelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelInclude<ExtArgs> | null
    /**
     * The data needed to create a Tunnel.
     */
    data: XOR<TunnelCreateInput, TunnelUncheckedCreateInput>
  }

  /**
   * Tunnel createMany
   */
  export type TunnelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tunnels.
     */
    data: TunnelCreateManyInput | TunnelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tunnel createManyAndReturn
   */
  export type TunnelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * The data used to create many Tunnels.
     */
    data: TunnelCreateManyInput | TunnelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tunnel update
   */
  export type TunnelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelInclude<ExtArgs> | null
    /**
     * The data needed to update a Tunnel.
     */
    data: XOR<TunnelUpdateInput, TunnelUncheckedUpdateInput>
    /**
     * Choose, which Tunnel to update.
     */
    where: TunnelWhereUniqueInput
  }

  /**
   * Tunnel updateMany
   */
  export type TunnelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tunnels.
     */
    data: XOR<TunnelUpdateManyMutationInput, TunnelUncheckedUpdateManyInput>
    /**
     * Filter which Tunnels to update
     */
    where?: TunnelWhereInput
    /**
     * Limit how many Tunnels to update.
     */
    limit?: number
  }

  /**
   * Tunnel updateManyAndReturn
   */
  export type TunnelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * The data used to update Tunnels.
     */
    data: XOR<TunnelUpdateManyMutationInput, TunnelUncheckedUpdateManyInput>
    /**
     * Filter which Tunnels to update
     */
    where?: TunnelWhereInput
    /**
     * Limit how many Tunnels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tunnel upsert
   */
  export type TunnelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelInclude<ExtArgs> | null
    /**
     * The filter to search for the Tunnel to update in case it exists.
     */
    where: TunnelWhereUniqueInput
    /**
     * In case the Tunnel found by the `where` argument doesn't exist, create a new Tunnel with this data.
     */
    create: XOR<TunnelCreateInput, TunnelUncheckedCreateInput>
    /**
     * In case the Tunnel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TunnelUpdateInput, TunnelUncheckedUpdateInput>
  }

  /**
   * Tunnel delete
   */
  export type TunnelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelInclude<ExtArgs> | null
    /**
     * Filter which Tunnel to delete.
     */
    where: TunnelWhereUniqueInput
  }

  /**
   * Tunnel deleteMany
   */
  export type TunnelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tunnels to delete
     */
    where?: TunnelWhereInput
    /**
     * Limit how many Tunnels to delete.
     */
    limit?: number
  }

  /**
   * Tunnel.travelRouters
   */
  export type Tunnel$travelRoutersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterInclude<ExtArgs> | null
    where?: TunnelTravelRouterWhereInput
    orderBy?: TunnelTravelRouterOrderByWithRelationInput | TunnelTravelRouterOrderByWithRelationInput[]
    cursor?: TunnelTravelRouterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TunnelTravelRouterScalarFieldEnum | TunnelTravelRouterScalarFieldEnum[]
  }

  /**
   * Tunnel without action
   */
  export type TunnelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tunnel
     */
    select?: TunnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tunnel
     */
    omit?: TunnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelInclude<ExtArgs> | null
  }


  /**
   * Model TunnelTravelRouter
   */

  export type AggregateTunnelTravelRouter = {
    _count: TunnelTravelRouterCountAggregateOutputType | null
    _min: TunnelTravelRouterMinAggregateOutputType | null
    _max: TunnelTravelRouterMaxAggregateOutputType | null
  }

  export type TunnelTravelRouterMinAggregateOutputType = {
    id: string | null
    tunnelId: string | null
    peerId: string | null
    addedAt: Date | null
  }

  export type TunnelTravelRouterMaxAggregateOutputType = {
    id: string | null
    tunnelId: string | null
    peerId: string | null
    addedAt: Date | null
  }

  export type TunnelTravelRouterCountAggregateOutputType = {
    id: number
    tunnelId: number
    peerId: number
    addedAt: number
    _all: number
  }


  export type TunnelTravelRouterMinAggregateInputType = {
    id?: true
    tunnelId?: true
    peerId?: true
    addedAt?: true
  }

  export type TunnelTravelRouterMaxAggregateInputType = {
    id?: true
    tunnelId?: true
    peerId?: true
    addedAt?: true
  }

  export type TunnelTravelRouterCountAggregateInputType = {
    id?: true
    tunnelId?: true
    peerId?: true
    addedAt?: true
    _all?: true
  }

  export type TunnelTravelRouterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TunnelTravelRouter to aggregate.
     */
    where?: TunnelTravelRouterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TunnelTravelRouters to fetch.
     */
    orderBy?: TunnelTravelRouterOrderByWithRelationInput | TunnelTravelRouterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TunnelTravelRouterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TunnelTravelRouters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TunnelTravelRouters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TunnelTravelRouters
    **/
    _count?: true | TunnelTravelRouterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TunnelTravelRouterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TunnelTravelRouterMaxAggregateInputType
  }

  export type GetTunnelTravelRouterAggregateType<T extends TunnelTravelRouterAggregateArgs> = {
        [P in keyof T & keyof AggregateTunnelTravelRouter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTunnelTravelRouter[P]>
      : GetScalarType<T[P], AggregateTunnelTravelRouter[P]>
  }




  export type TunnelTravelRouterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TunnelTravelRouterWhereInput
    orderBy?: TunnelTravelRouterOrderByWithAggregationInput | TunnelTravelRouterOrderByWithAggregationInput[]
    by: TunnelTravelRouterScalarFieldEnum[] | TunnelTravelRouterScalarFieldEnum
    having?: TunnelTravelRouterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TunnelTravelRouterCountAggregateInputType | true
    _min?: TunnelTravelRouterMinAggregateInputType
    _max?: TunnelTravelRouterMaxAggregateInputType
  }

  export type TunnelTravelRouterGroupByOutputType = {
    id: string
    tunnelId: string
    peerId: string
    addedAt: Date
    _count: TunnelTravelRouterCountAggregateOutputType | null
    _min: TunnelTravelRouterMinAggregateOutputType | null
    _max: TunnelTravelRouterMaxAggregateOutputType | null
  }

  type GetTunnelTravelRouterGroupByPayload<T extends TunnelTravelRouterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TunnelTravelRouterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TunnelTravelRouterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TunnelTravelRouterGroupByOutputType[P]>
            : GetScalarType<T[P], TunnelTravelRouterGroupByOutputType[P]>
        }
      >
    >


  export type TunnelTravelRouterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tunnelId?: boolean
    peerId?: boolean
    addedAt?: boolean
    tunnel?: boolean | TunnelDefaultArgs<ExtArgs>
    peer?: boolean | PeerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tunnelTravelRouter"]>

  export type TunnelTravelRouterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tunnelId?: boolean
    peerId?: boolean
    addedAt?: boolean
    tunnel?: boolean | TunnelDefaultArgs<ExtArgs>
    peer?: boolean | PeerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tunnelTravelRouter"]>

  export type TunnelTravelRouterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tunnelId?: boolean
    peerId?: boolean
    addedAt?: boolean
    tunnel?: boolean | TunnelDefaultArgs<ExtArgs>
    peer?: boolean | PeerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tunnelTravelRouter"]>

  export type TunnelTravelRouterSelectScalar = {
    id?: boolean
    tunnelId?: boolean
    peerId?: boolean
    addedAt?: boolean
  }

  export type TunnelTravelRouterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tunnelId" | "peerId" | "addedAt", ExtArgs["result"]["tunnelTravelRouter"]>
  export type TunnelTravelRouterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tunnel?: boolean | TunnelDefaultArgs<ExtArgs>
    peer?: boolean | PeerDefaultArgs<ExtArgs>
  }
  export type TunnelTravelRouterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tunnel?: boolean | TunnelDefaultArgs<ExtArgs>
    peer?: boolean | PeerDefaultArgs<ExtArgs>
  }
  export type TunnelTravelRouterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tunnel?: boolean | TunnelDefaultArgs<ExtArgs>
    peer?: boolean | PeerDefaultArgs<ExtArgs>
  }

  export type $TunnelTravelRouterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TunnelTravelRouter"
    objects: {
      tunnel: Prisma.$TunnelPayload<ExtArgs>
      peer: Prisma.$PeerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tunnelId: string
      peerId: string
      addedAt: Date
    }, ExtArgs["result"]["tunnelTravelRouter"]>
    composites: {}
  }

  type TunnelTravelRouterGetPayload<S extends boolean | null | undefined | TunnelTravelRouterDefaultArgs> = $Result.GetResult<Prisma.$TunnelTravelRouterPayload, S>

  type TunnelTravelRouterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TunnelTravelRouterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TunnelTravelRouterCountAggregateInputType | true
    }

  export interface TunnelTravelRouterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TunnelTravelRouter'], meta: { name: 'TunnelTravelRouter' } }
    /**
     * Find zero or one TunnelTravelRouter that matches the filter.
     * @param {TunnelTravelRouterFindUniqueArgs} args - Arguments to find a TunnelTravelRouter
     * @example
     * // Get one TunnelTravelRouter
     * const tunnelTravelRouter = await prisma.tunnelTravelRouter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TunnelTravelRouterFindUniqueArgs>(args: SelectSubset<T, TunnelTravelRouterFindUniqueArgs<ExtArgs>>): Prisma__TunnelTravelRouterClient<$Result.GetResult<Prisma.$TunnelTravelRouterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TunnelTravelRouter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TunnelTravelRouterFindUniqueOrThrowArgs} args - Arguments to find a TunnelTravelRouter
     * @example
     * // Get one TunnelTravelRouter
     * const tunnelTravelRouter = await prisma.tunnelTravelRouter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TunnelTravelRouterFindUniqueOrThrowArgs>(args: SelectSubset<T, TunnelTravelRouterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TunnelTravelRouterClient<$Result.GetResult<Prisma.$TunnelTravelRouterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TunnelTravelRouter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelTravelRouterFindFirstArgs} args - Arguments to find a TunnelTravelRouter
     * @example
     * // Get one TunnelTravelRouter
     * const tunnelTravelRouter = await prisma.tunnelTravelRouter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TunnelTravelRouterFindFirstArgs>(args?: SelectSubset<T, TunnelTravelRouterFindFirstArgs<ExtArgs>>): Prisma__TunnelTravelRouterClient<$Result.GetResult<Prisma.$TunnelTravelRouterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TunnelTravelRouter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelTravelRouterFindFirstOrThrowArgs} args - Arguments to find a TunnelTravelRouter
     * @example
     * // Get one TunnelTravelRouter
     * const tunnelTravelRouter = await prisma.tunnelTravelRouter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TunnelTravelRouterFindFirstOrThrowArgs>(args?: SelectSubset<T, TunnelTravelRouterFindFirstOrThrowArgs<ExtArgs>>): Prisma__TunnelTravelRouterClient<$Result.GetResult<Prisma.$TunnelTravelRouterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TunnelTravelRouters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelTravelRouterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TunnelTravelRouters
     * const tunnelTravelRouters = await prisma.tunnelTravelRouter.findMany()
     * 
     * // Get first 10 TunnelTravelRouters
     * const tunnelTravelRouters = await prisma.tunnelTravelRouter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tunnelTravelRouterWithIdOnly = await prisma.tunnelTravelRouter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TunnelTravelRouterFindManyArgs>(args?: SelectSubset<T, TunnelTravelRouterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TunnelTravelRouterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TunnelTravelRouter.
     * @param {TunnelTravelRouterCreateArgs} args - Arguments to create a TunnelTravelRouter.
     * @example
     * // Create one TunnelTravelRouter
     * const TunnelTravelRouter = await prisma.tunnelTravelRouter.create({
     *   data: {
     *     // ... data to create a TunnelTravelRouter
     *   }
     * })
     * 
     */
    create<T extends TunnelTravelRouterCreateArgs>(args: SelectSubset<T, TunnelTravelRouterCreateArgs<ExtArgs>>): Prisma__TunnelTravelRouterClient<$Result.GetResult<Prisma.$TunnelTravelRouterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TunnelTravelRouters.
     * @param {TunnelTravelRouterCreateManyArgs} args - Arguments to create many TunnelTravelRouters.
     * @example
     * // Create many TunnelTravelRouters
     * const tunnelTravelRouter = await prisma.tunnelTravelRouter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TunnelTravelRouterCreateManyArgs>(args?: SelectSubset<T, TunnelTravelRouterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TunnelTravelRouters and returns the data saved in the database.
     * @param {TunnelTravelRouterCreateManyAndReturnArgs} args - Arguments to create many TunnelTravelRouters.
     * @example
     * // Create many TunnelTravelRouters
     * const tunnelTravelRouter = await prisma.tunnelTravelRouter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TunnelTravelRouters and only return the `id`
     * const tunnelTravelRouterWithIdOnly = await prisma.tunnelTravelRouter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TunnelTravelRouterCreateManyAndReturnArgs>(args?: SelectSubset<T, TunnelTravelRouterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TunnelTravelRouterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TunnelTravelRouter.
     * @param {TunnelTravelRouterDeleteArgs} args - Arguments to delete one TunnelTravelRouter.
     * @example
     * // Delete one TunnelTravelRouter
     * const TunnelTravelRouter = await prisma.tunnelTravelRouter.delete({
     *   where: {
     *     // ... filter to delete one TunnelTravelRouter
     *   }
     * })
     * 
     */
    delete<T extends TunnelTravelRouterDeleteArgs>(args: SelectSubset<T, TunnelTravelRouterDeleteArgs<ExtArgs>>): Prisma__TunnelTravelRouterClient<$Result.GetResult<Prisma.$TunnelTravelRouterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TunnelTravelRouter.
     * @param {TunnelTravelRouterUpdateArgs} args - Arguments to update one TunnelTravelRouter.
     * @example
     * // Update one TunnelTravelRouter
     * const tunnelTravelRouter = await prisma.tunnelTravelRouter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TunnelTravelRouterUpdateArgs>(args: SelectSubset<T, TunnelTravelRouterUpdateArgs<ExtArgs>>): Prisma__TunnelTravelRouterClient<$Result.GetResult<Prisma.$TunnelTravelRouterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TunnelTravelRouters.
     * @param {TunnelTravelRouterDeleteManyArgs} args - Arguments to filter TunnelTravelRouters to delete.
     * @example
     * // Delete a few TunnelTravelRouters
     * const { count } = await prisma.tunnelTravelRouter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TunnelTravelRouterDeleteManyArgs>(args?: SelectSubset<T, TunnelTravelRouterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TunnelTravelRouters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelTravelRouterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TunnelTravelRouters
     * const tunnelTravelRouter = await prisma.tunnelTravelRouter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TunnelTravelRouterUpdateManyArgs>(args: SelectSubset<T, TunnelTravelRouterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TunnelTravelRouters and returns the data updated in the database.
     * @param {TunnelTravelRouterUpdateManyAndReturnArgs} args - Arguments to update many TunnelTravelRouters.
     * @example
     * // Update many TunnelTravelRouters
     * const tunnelTravelRouter = await prisma.tunnelTravelRouter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TunnelTravelRouters and only return the `id`
     * const tunnelTravelRouterWithIdOnly = await prisma.tunnelTravelRouter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TunnelTravelRouterUpdateManyAndReturnArgs>(args: SelectSubset<T, TunnelTravelRouterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TunnelTravelRouterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TunnelTravelRouter.
     * @param {TunnelTravelRouterUpsertArgs} args - Arguments to update or create a TunnelTravelRouter.
     * @example
     * // Update or create a TunnelTravelRouter
     * const tunnelTravelRouter = await prisma.tunnelTravelRouter.upsert({
     *   create: {
     *     // ... data to create a TunnelTravelRouter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TunnelTravelRouter we want to update
     *   }
     * })
     */
    upsert<T extends TunnelTravelRouterUpsertArgs>(args: SelectSubset<T, TunnelTravelRouterUpsertArgs<ExtArgs>>): Prisma__TunnelTravelRouterClient<$Result.GetResult<Prisma.$TunnelTravelRouterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TunnelTravelRouters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelTravelRouterCountArgs} args - Arguments to filter TunnelTravelRouters to count.
     * @example
     * // Count the number of TunnelTravelRouters
     * const count = await prisma.tunnelTravelRouter.count({
     *   where: {
     *     // ... the filter for the TunnelTravelRouters we want to count
     *   }
     * })
    **/
    count<T extends TunnelTravelRouterCountArgs>(
      args?: Subset<T, TunnelTravelRouterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TunnelTravelRouterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TunnelTravelRouter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelTravelRouterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TunnelTravelRouterAggregateArgs>(args: Subset<T, TunnelTravelRouterAggregateArgs>): Prisma.PrismaPromise<GetTunnelTravelRouterAggregateType<T>>

    /**
     * Group by TunnelTravelRouter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TunnelTravelRouterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TunnelTravelRouterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TunnelTravelRouterGroupByArgs['orderBy'] }
        : { orderBy?: TunnelTravelRouterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TunnelTravelRouterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTunnelTravelRouterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TunnelTravelRouter model
   */
  readonly fields: TunnelTravelRouterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TunnelTravelRouter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TunnelTravelRouterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tunnel<T extends TunnelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TunnelDefaultArgs<ExtArgs>>): Prisma__TunnelClient<$Result.GetResult<Prisma.$TunnelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    peer<T extends PeerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeerDefaultArgs<ExtArgs>>): Prisma__PeerClient<$Result.GetResult<Prisma.$PeerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TunnelTravelRouter model
   */
  interface TunnelTravelRouterFieldRefs {
    readonly id: FieldRef<"TunnelTravelRouter", 'String'>
    readonly tunnelId: FieldRef<"TunnelTravelRouter", 'String'>
    readonly peerId: FieldRef<"TunnelTravelRouter", 'String'>
    readonly addedAt: FieldRef<"TunnelTravelRouter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TunnelTravelRouter findUnique
   */
  export type TunnelTravelRouterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterInclude<ExtArgs> | null
    /**
     * Filter, which TunnelTravelRouter to fetch.
     */
    where: TunnelTravelRouterWhereUniqueInput
  }

  /**
   * TunnelTravelRouter findUniqueOrThrow
   */
  export type TunnelTravelRouterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterInclude<ExtArgs> | null
    /**
     * Filter, which TunnelTravelRouter to fetch.
     */
    where: TunnelTravelRouterWhereUniqueInput
  }

  /**
   * TunnelTravelRouter findFirst
   */
  export type TunnelTravelRouterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterInclude<ExtArgs> | null
    /**
     * Filter, which TunnelTravelRouter to fetch.
     */
    where?: TunnelTravelRouterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TunnelTravelRouters to fetch.
     */
    orderBy?: TunnelTravelRouterOrderByWithRelationInput | TunnelTravelRouterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TunnelTravelRouters.
     */
    cursor?: TunnelTravelRouterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TunnelTravelRouters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TunnelTravelRouters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TunnelTravelRouters.
     */
    distinct?: TunnelTravelRouterScalarFieldEnum | TunnelTravelRouterScalarFieldEnum[]
  }

  /**
   * TunnelTravelRouter findFirstOrThrow
   */
  export type TunnelTravelRouterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterInclude<ExtArgs> | null
    /**
     * Filter, which TunnelTravelRouter to fetch.
     */
    where?: TunnelTravelRouterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TunnelTravelRouters to fetch.
     */
    orderBy?: TunnelTravelRouterOrderByWithRelationInput | TunnelTravelRouterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TunnelTravelRouters.
     */
    cursor?: TunnelTravelRouterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TunnelTravelRouters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TunnelTravelRouters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TunnelTravelRouters.
     */
    distinct?: TunnelTravelRouterScalarFieldEnum | TunnelTravelRouterScalarFieldEnum[]
  }

  /**
   * TunnelTravelRouter findMany
   */
  export type TunnelTravelRouterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterInclude<ExtArgs> | null
    /**
     * Filter, which TunnelTravelRouters to fetch.
     */
    where?: TunnelTravelRouterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TunnelTravelRouters to fetch.
     */
    orderBy?: TunnelTravelRouterOrderByWithRelationInput | TunnelTravelRouterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TunnelTravelRouters.
     */
    cursor?: TunnelTravelRouterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TunnelTravelRouters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TunnelTravelRouters.
     */
    skip?: number
    distinct?: TunnelTravelRouterScalarFieldEnum | TunnelTravelRouterScalarFieldEnum[]
  }

  /**
   * TunnelTravelRouter create
   */
  export type TunnelTravelRouterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterInclude<ExtArgs> | null
    /**
     * The data needed to create a TunnelTravelRouter.
     */
    data: XOR<TunnelTravelRouterCreateInput, TunnelTravelRouterUncheckedCreateInput>
  }

  /**
   * TunnelTravelRouter createMany
   */
  export type TunnelTravelRouterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TunnelTravelRouters.
     */
    data: TunnelTravelRouterCreateManyInput | TunnelTravelRouterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TunnelTravelRouter createManyAndReturn
   */
  export type TunnelTravelRouterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * The data used to create many TunnelTravelRouters.
     */
    data: TunnelTravelRouterCreateManyInput | TunnelTravelRouterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TunnelTravelRouter update
   */
  export type TunnelTravelRouterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterInclude<ExtArgs> | null
    /**
     * The data needed to update a TunnelTravelRouter.
     */
    data: XOR<TunnelTravelRouterUpdateInput, TunnelTravelRouterUncheckedUpdateInput>
    /**
     * Choose, which TunnelTravelRouter to update.
     */
    where: TunnelTravelRouterWhereUniqueInput
  }

  /**
   * TunnelTravelRouter updateMany
   */
  export type TunnelTravelRouterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TunnelTravelRouters.
     */
    data: XOR<TunnelTravelRouterUpdateManyMutationInput, TunnelTravelRouterUncheckedUpdateManyInput>
    /**
     * Filter which TunnelTravelRouters to update
     */
    where?: TunnelTravelRouterWhereInput
    /**
     * Limit how many TunnelTravelRouters to update.
     */
    limit?: number
  }

  /**
   * TunnelTravelRouter updateManyAndReturn
   */
  export type TunnelTravelRouterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * The data used to update TunnelTravelRouters.
     */
    data: XOR<TunnelTravelRouterUpdateManyMutationInput, TunnelTravelRouterUncheckedUpdateManyInput>
    /**
     * Filter which TunnelTravelRouters to update
     */
    where?: TunnelTravelRouterWhereInput
    /**
     * Limit how many TunnelTravelRouters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TunnelTravelRouter upsert
   */
  export type TunnelTravelRouterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterInclude<ExtArgs> | null
    /**
     * The filter to search for the TunnelTravelRouter to update in case it exists.
     */
    where: TunnelTravelRouterWhereUniqueInput
    /**
     * In case the TunnelTravelRouter found by the `where` argument doesn't exist, create a new TunnelTravelRouter with this data.
     */
    create: XOR<TunnelTravelRouterCreateInput, TunnelTravelRouterUncheckedCreateInput>
    /**
     * In case the TunnelTravelRouter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TunnelTravelRouterUpdateInput, TunnelTravelRouterUncheckedUpdateInput>
  }

  /**
   * TunnelTravelRouter delete
   */
  export type TunnelTravelRouterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterInclude<ExtArgs> | null
    /**
     * Filter which TunnelTravelRouter to delete.
     */
    where: TunnelTravelRouterWhereUniqueInput
  }

  /**
   * TunnelTravelRouter deleteMany
   */
  export type TunnelTravelRouterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TunnelTravelRouters to delete
     */
    where?: TunnelTravelRouterWhereInput
    /**
     * Limit how many TunnelTravelRouters to delete.
     */
    limit?: number
  }

  /**
   * TunnelTravelRouter without action
   */
  export type TunnelTravelRouterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TunnelTravelRouter
     */
    select?: TunnelTravelRouterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TunnelTravelRouter
     */
    omit?: TunnelTravelRouterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TunnelTravelRouterInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    netbirdGroupId: 'netbirdGroupId',
    name: 'name',
    userId: 'userId',
    peersCount: 'peersCount',
    resourcesCount: 'resourcesCount',
    issued: 'issued',
    resources: 'resources',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const PeerScalarFieldEnum: {
    id: 'id',
    netbirdPeerId: 'netbirdPeerId',
    name: 'name',
    ip: 'ip',
    connectionIp: 'connectionIp',
    dnsLabel: 'dnsLabel',
    extraDnsLabels: 'extraDnsLabels',
    connected: 'connected',
    lastSeen: 'lastSeen',
    lastLogin: 'lastLogin',
    os: 'os',
    kernelVersion: 'kernelVersion',
    version: 'version',
    uiVersion: 'uiVersion',
    hostname: 'hostname',
    serialNumber: 'serialNumber',
    geonameId: 'geonameId',
    countryCode: 'countryCode',
    cityName: 'cityName',
    userId: 'userId',
    sshEnabled: 'sshEnabled',
    approvalRequired: 'approvalRequired',
    ephemeral: 'ephemeral',
    loginExpirationEnabled: 'loginExpirationEnabled',
    loginExpired: 'loginExpired',
    inactivityExpirationEnabled: 'inactivityExpirationEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PeerScalarFieldEnum = (typeof PeerScalarFieldEnum)[keyof typeof PeerScalarFieldEnum]


  export const GroupPeerScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    peerId: 'peerId',
    addedAt: 'addedAt'
  };

  export type GroupPeerScalarFieldEnum = (typeof GroupPeerScalarFieldEnum)[keyof typeof GroupPeerScalarFieldEnum]


  export const TunnelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    exitNodeId: 'exitNodeId',
    name: 'name',
    enabled: 'enabled',
    netbirdGroupId: 'netbirdGroupId',
    netbirdRouteId: 'netbirdRouteId',
    netbirdPolicyId: 'netbirdPolicyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TunnelScalarFieldEnum = (typeof TunnelScalarFieldEnum)[keyof typeof TunnelScalarFieldEnum]


  export const TunnelTravelRouterScalarFieldEnum: {
    id: 'id',
    tunnelId: 'tunnelId',
    peerId: 'peerId',
    addedAt: 'addedAt'
  };

  export type TunnelTravelRouterScalarFieldEnum = (typeof TunnelTravelRouterScalarFieldEnum)[keyof typeof TunnelTravelRouterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    groups?: GroupListRelationFilter
    tunnels?: TunnelListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groups?: GroupOrderByRelationAggregateInput
    tunnels?: TunnelOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    groups?: GroupListRelationFilter
    tunnels?: TunnelListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    netbirdGroupId?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    userId?: StringFilter<"Group"> | string
    peersCount?: IntFilter<"Group"> | number
    resourcesCount?: IntFilter<"Group"> | number
    issued?: StringNullableFilter<"Group"> | string | null
    resources?: JsonNullableFilter<"Group">
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    groupPeers?: GroupPeerListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    netbirdGroupId?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    peersCount?: SortOrder
    resourcesCount?: SortOrder
    issued?: SortOrderInput | SortOrder
    resources?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    groupPeers?: GroupPeerOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    netbirdGroupId?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    userId?: StringFilter<"Group"> | string
    peersCount?: IntFilter<"Group"> | number
    resourcesCount?: IntFilter<"Group"> | number
    issued?: StringNullableFilter<"Group"> | string | null
    resources?: JsonNullableFilter<"Group">
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    groupPeers?: GroupPeerListRelationFilter
  }, "id" | "netbirdGroupId">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    netbirdGroupId?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    peersCount?: SortOrder
    resourcesCount?: SortOrder
    issued?: SortOrderInput | SortOrder
    resources?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    netbirdGroupId?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    userId?: StringWithAggregatesFilter<"Group"> | string
    peersCount?: IntWithAggregatesFilter<"Group"> | number
    resourcesCount?: IntWithAggregatesFilter<"Group"> | number
    issued?: StringNullableWithAggregatesFilter<"Group"> | string | null
    resources?: JsonNullableWithAggregatesFilter<"Group">
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type PeerWhereInput = {
    AND?: PeerWhereInput | PeerWhereInput[]
    OR?: PeerWhereInput[]
    NOT?: PeerWhereInput | PeerWhereInput[]
    id?: StringFilter<"Peer"> | string
    netbirdPeerId?: StringFilter<"Peer"> | string
    name?: StringFilter<"Peer"> | string
    ip?: StringNullableFilter<"Peer"> | string | null
    connectionIp?: StringNullableFilter<"Peer"> | string | null
    dnsLabel?: StringNullableFilter<"Peer"> | string | null
    extraDnsLabels?: StringNullableListFilter<"Peer">
    connected?: BoolFilter<"Peer"> | boolean
    lastSeen?: DateTimeNullableFilter<"Peer"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"Peer"> | Date | string | null
    os?: StringNullableFilter<"Peer"> | string | null
    kernelVersion?: StringNullableFilter<"Peer"> | string | null
    version?: StringNullableFilter<"Peer"> | string | null
    uiVersion?: StringNullableFilter<"Peer"> | string | null
    hostname?: StringNullableFilter<"Peer"> | string | null
    serialNumber?: StringNullableFilter<"Peer"> | string | null
    geonameId?: IntNullableFilter<"Peer"> | number | null
    countryCode?: StringNullableFilter<"Peer"> | string | null
    cityName?: StringNullableFilter<"Peer"> | string | null
    userId?: StringNullableFilter<"Peer"> | string | null
    sshEnabled?: BoolFilter<"Peer"> | boolean
    approvalRequired?: BoolFilter<"Peer"> | boolean
    ephemeral?: BoolFilter<"Peer"> | boolean
    loginExpirationEnabled?: BoolFilter<"Peer"> | boolean
    loginExpired?: BoolFilter<"Peer"> | boolean
    inactivityExpirationEnabled?: BoolFilter<"Peer"> | boolean
    createdAt?: DateTimeFilter<"Peer"> | Date | string
    updatedAt?: DateTimeFilter<"Peer"> | Date | string
    groupPeers?: GroupPeerListRelationFilter
    tunnelsAsExitNode?: TunnelListRelationFilter
    tunnelsAsTravelRouter?: TunnelTravelRouterListRelationFilter
  }

  export type PeerOrderByWithRelationInput = {
    id?: SortOrder
    netbirdPeerId?: SortOrder
    name?: SortOrder
    ip?: SortOrderInput | SortOrder
    connectionIp?: SortOrderInput | SortOrder
    dnsLabel?: SortOrderInput | SortOrder
    extraDnsLabels?: SortOrder
    connected?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    kernelVersion?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    uiVersion?: SortOrderInput | SortOrder
    hostname?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    geonameId?: SortOrderInput | SortOrder
    countryCode?: SortOrderInput | SortOrder
    cityName?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    sshEnabled?: SortOrder
    approvalRequired?: SortOrder
    ephemeral?: SortOrder
    loginExpirationEnabled?: SortOrder
    loginExpired?: SortOrder
    inactivityExpirationEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupPeers?: GroupPeerOrderByRelationAggregateInput
    tunnelsAsExitNode?: TunnelOrderByRelationAggregateInput
    tunnelsAsTravelRouter?: TunnelTravelRouterOrderByRelationAggregateInput
  }

  export type PeerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    netbirdPeerId?: string
    AND?: PeerWhereInput | PeerWhereInput[]
    OR?: PeerWhereInput[]
    NOT?: PeerWhereInput | PeerWhereInput[]
    name?: StringFilter<"Peer"> | string
    ip?: StringNullableFilter<"Peer"> | string | null
    connectionIp?: StringNullableFilter<"Peer"> | string | null
    dnsLabel?: StringNullableFilter<"Peer"> | string | null
    extraDnsLabels?: StringNullableListFilter<"Peer">
    connected?: BoolFilter<"Peer"> | boolean
    lastSeen?: DateTimeNullableFilter<"Peer"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"Peer"> | Date | string | null
    os?: StringNullableFilter<"Peer"> | string | null
    kernelVersion?: StringNullableFilter<"Peer"> | string | null
    version?: StringNullableFilter<"Peer"> | string | null
    uiVersion?: StringNullableFilter<"Peer"> | string | null
    hostname?: StringNullableFilter<"Peer"> | string | null
    serialNumber?: StringNullableFilter<"Peer"> | string | null
    geonameId?: IntNullableFilter<"Peer"> | number | null
    countryCode?: StringNullableFilter<"Peer"> | string | null
    cityName?: StringNullableFilter<"Peer"> | string | null
    userId?: StringNullableFilter<"Peer"> | string | null
    sshEnabled?: BoolFilter<"Peer"> | boolean
    approvalRequired?: BoolFilter<"Peer"> | boolean
    ephemeral?: BoolFilter<"Peer"> | boolean
    loginExpirationEnabled?: BoolFilter<"Peer"> | boolean
    loginExpired?: BoolFilter<"Peer"> | boolean
    inactivityExpirationEnabled?: BoolFilter<"Peer"> | boolean
    createdAt?: DateTimeFilter<"Peer"> | Date | string
    updatedAt?: DateTimeFilter<"Peer"> | Date | string
    groupPeers?: GroupPeerListRelationFilter
    tunnelsAsExitNode?: TunnelListRelationFilter
    tunnelsAsTravelRouter?: TunnelTravelRouterListRelationFilter
  }, "id" | "netbirdPeerId">

  export type PeerOrderByWithAggregationInput = {
    id?: SortOrder
    netbirdPeerId?: SortOrder
    name?: SortOrder
    ip?: SortOrderInput | SortOrder
    connectionIp?: SortOrderInput | SortOrder
    dnsLabel?: SortOrderInput | SortOrder
    extraDnsLabels?: SortOrder
    connected?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    kernelVersion?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    uiVersion?: SortOrderInput | SortOrder
    hostname?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    geonameId?: SortOrderInput | SortOrder
    countryCode?: SortOrderInput | SortOrder
    cityName?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    sshEnabled?: SortOrder
    approvalRequired?: SortOrder
    ephemeral?: SortOrder
    loginExpirationEnabled?: SortOrder
    loginExpired?: SortOrder
    inactivityExpirationEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PeerCountOrderByAggregateInput
    _avg?: PeerAvgOrderByAggregateInput
    _max?: PeerMaxOrderByAggregateInput
    _min?: PeerMinOrderByAggregateInput
    _sum?: PeerSumOrderByAggregateInput
  }

  export type PeerScalarWhereWithAggregatesInput = {
    AND?: PeerScalarWhereWithAggregatesInput | PeerScalarWhereWithAggregatesInput[]
    OR?: PeerScalarWhereWithAggregatesInput[]
    NOT?: PeerScalarWhereWithAggregatesInput | PeerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Peer"> | string
    netbirdPeerId?: StringWithAggregatesFilter<"Peer"> | string
    name?: StringWithAggregatesFilter<"Peer"> | string
    ip?: StringNullableWithAggregatesFilter<"Peer"> | string | null
    connectionIp?: StringNullableWithAggregatesFilter<"Peer"> | string | null
    dnsLabel?: StringNullableWithAggregatesFilter<"Peer"> | string | null
    extraDnsLabels?: StringNullableListFilter<"Peer">
    connected?: BoolWithAggregatesFilter<"Peer"> | boolean
    lastSeen?: DateTimeNullableWithAggregatesFilter<"Peer"> | Date | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"Peer"> | Date | string | null
    os?: StringNullableWithAggregatesFilter<"Peer"> | string | null
    kernelVersion?: StringNullableWithAggregatesFilter<"Peer"> | string | null
    version?: StringNullableWithAggregatesFilter<"Peer"> | string | null
    uiVersion?: StringNullableWithAggregatesFilter<"Peer"> | string | null
    hostname?: StringNullableWithAggregatesFilter<"Peer"> | string | null
    serialNumber?: StringNullableWithAggregatesFilter<"Peer"> | string | null
    geonameId?: IntNullableWithAggregatesFilter<"Peer"> | number | null
    countryCode?: StringNullableWithAggregatesFilter<"Peer"> | string | null
    cityName?: StringNullableWithAggregatesFilter<"Peer"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Peer"> | string | null
    sshEnabled?: BoolWithAggregatesFilter<"Peer"> | boolean
    approvalRequired?: BoolWithAggregatesFilter<"Peer"> | boolean
    ephemeral?: BoolWithAggregatesFilter<"Peer"> | boolean
    loginExpirationEnabled?: BoolWithAggregatesFilter<"Peer"> | boolean
    loginExpired?: BoolWithAggregatesFilter<"Peer"> | boolean
    inactivityExpirationEnabled?: BoolWithAggregatesFilter<"Peer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Peer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Peer"> | Date | string
  }

  export type GroupPeerWhereInput = {
    AND?: GroupPeerWhereInput | GroupPeerWhereInput[]
    OR?: GroupPeerWhereInput[]
    NOT?: GroupPeerWhereInput | GroupPeerWhereInput[]
    id?: StringFilter<"GroupPeer"> | string
    groupId?: StringFilter<"GroupPeer"> | string
    peerId?: StringFilter<"GroupPeer"> | string
    addedAt?: DateTimeFilter<"GroupPeer"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    peer?: XOR<PeerScalarRelationFilter, PeerWhereInput>
  }

  export type GroupPeerOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    peerId?: SortOrder
    addedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    peer?: PeerOrderByWithRelationInput
  }

  export type GroupPeerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId_peerId?: GroupPeerGroupIdPeerIdCompoundUniqueInput
    AND?: GroupPeerWhereInput | GroupPeerWhereInput[]
    OR?: GroupPeerWhereInput[]
    NOT?: GroupPeerWhereInput | GroupPeerWhereInput[]
    groupId?: StringFilter<"GroupPeer"> | string
    peerId?: StringFilter<"GroupPeer"> | string
    addedAt?: DateTimeFilter<"GroupPeer"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    peer?: XOR<PeerScalarRelationFilter, PeerWhereInput>
  }, "id" | "groupId_peerId">

  export type GroupPeerOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    peerId?: SortOrder
    addedAt?: SortOrder
    _count?: GroupPeerCountOrderByAggregateInput
    _max?: GroupPeerMaxOrderByAggregateInput
    _min?: GroupPeerMinOrderByAggregateInput
  }

  export type GroupPeerScalarWhereWithAggregatesInput = {
    AND?: GroupPeerScalarWhereWithAggregatesInput | GroupPeerScalarWhereWithAggregatesInput[]
    OR?: GroupPeerScalarWhereWithAggregatesInput[]
    NOT?: GroupPeerScalarWhereWithAggregatesInput | GroupPeerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupPeer"> | string
    groupId?: StringWithAggregatesFilter<"GroupPeer"> | string
    peerId?: StringWithAggregatesFilter<"GroupPeer"> | string
    addedAt?: DateTimeWithAggregatesFilter<"GroupPeer"> | Date | string
  }

  export type TunnelWhereInput = {
    AND?: TunnelWhereInput | TunnelWhereInput[]
    OR?: TunnelWhereInput[]
    NOT?: TunnelWhereInput | TunnelWhereInput[]
    id?: StringFilter<"Tunnel"> | string
    userId?: StringFilter<"Tunnel"> | string
    exitNodeId?: StringFilter<"Tunnel"> | string
    name?: StringNullableFilter<"Tunnel"> | string | null
    enabled?: BoolFilter<"Tunnel"> | boolean
    netbirdGroupId?: StringNullableFilter<"Tunnel"> | string | null
    netbirdRouteId?: StringNullableFilter<"Tunnel"> | string | null
    netbirdPolicyId?: StringNullableFilter<"Tunnel"> | string | null
    createdAt?: DateTimeFilter<"Tunnel"> | Date | string
    updatedAt?: DateTimeFilter<"Tunnel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exitNode?: XOR<PeerScalarRelationFilter, PeerWhereInput>
    travelRouters?: TunnelTravelRouterListRelationFilter
  }

  export type TunnelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    exitNodeId?: SortOrder
    name?: SortOrderInput | SortOrder
    enabled?: SortOrder
    netbirdGroupId?: SortOrderInput | SortOrder
    netbirdRouteId?: SortOrderInput | SortOrder
    netbirdPolicyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    exitNode?: PeerOrderByWithRelationInput
    travelRouters?: TunnelTravelRouterOrderByRelationAggregateInput
  }

  export type TunnelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TunnelWhereInput | TunnelWhereInput[]
    OR?: TunnelWhereInput[]
    NOT?: TunnelWhereInput | TunnelWhereInput[]
    userId?: StringFilter<"Tunnel"> | string
    exitNodeId?: StringFilter<"Tunnel"> | string
    name?: StringNullableFilter<"Tunnel"> | string | null
    enabled?: BoolFilter<"Tunnel"> | boolean
    netbirdGroupId?: StringNullableFilter<"Tunnel"> | string | null
    netbirdRouteId?: StringNullableFilter<"Tunnel"> | string | null
    netbirdPolicyId?: StringNullableFilter<"Tunnel"> | string | null
    createdAt?: DateTimeFilter<"Tunnel"> | Date | string
    updatedAt?: DateTimeFilter<"Tunnel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exitNode?: XOR<PeerScalarRelationFilter, PeerWhereInput>
    travelRouters?: TunnelTravelRouterListRelationFilter
  }, "id">

  export type TunnelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    exitNodeId?: SortOrder
    name?: SortOrderInput | SortOrder
    enabled?: SortOrder
    netbirdGroupId?: SortOrderInput | SortOrder
    netbirdRouteId?: SortOrderInput | SortOrder
    netbirdPolicyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TunnelCountOrderByAggregateInput
    _max?: TunnelMaxOrderByAggregateInput
    _min?: TunnelMinOrderByAggregateInput
  }

  export type TunnelScalarWhereWithAggregatesInput = {
    AND?: TunnelScalarWhereWithAggregatesInput | TunnelScalarWhereWithAggregatesInput[]
    OR?: TunnelScalarWhereWithAggregatesInput[]
    NOT?: TunnelScalarWhereWithAggregatesInput | TunnelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tunnel"> | string
    userId?: StringWithAggregatesFilter<"Tunnel"> | string
    exitNodeId?: StringWithAggregatesFilter<"Tunnel"> | string
    name?: StringNullableWithAggregatesFilter<"Tunnel"> | string | null
    enabled?: BoolWithAggregatesFilter<"Tunnel"> | boolean
    netbirdGroupId?: StringNullableWithAggregatesFilter<"Tunnel"> | string | null
    netbirdRouteId?: StringNullableWithAggregatesFilter<"Tunnel"> | string | null
    netbirdPolicyId?: StringNullableWithAggregatesFilter<"Tunnel"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tunnel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tunnel"> | Date | string
  }

  export type TunnelTravelRouterWhereInput = {
    AND?: TunnelTravelRouterWhereInput | TunnelTravelRouterWhereInput[]
    OR?: TunnelTravelRouterWhereInput[]
    NOT?: TunnelTravelRouterWhereInput | TunnelTravelRouterWhereInput[]
    id?: StringFilter<"TunnelTravelRouter"> | string
    tunnelId?: StringFilter<"TunnelTravelRouter"> | string
    peerId?: StringFilter<"TunnelTravelRouter"> | string
    addedAt?: DateTimeFilter<"TunnelTravelRouter"> | Date | string
    tunnel?: XOR<TunnelScalarRelationFilter, TunnelWhereInput>
    peer?: XOR<PeerScalarRelationFilter, PeerWhereInput>
  }

  export type TunnelTravelRouterOrderByWithRelationInput = {
    id?: SortOrder
    tunnelId?: SortOrder
    peerId?: SortOrder
    addedAt?: SortOrder
    tunnel?: TunnelOrderByWithRelationInput
    peer?: PeerOrderByWithRelationInput
  }

  export type TunnelTravelRouterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tunnelId_peerId?: TunnelTravelRouterTunnelIdPeerIdCompoundUniqueInput
    AND?: TunnelTravelRouterWhereInput | TunnelTravelRouterWhereInput[]
    OR?: TunnelTravelRouterWhereInput[]
    NOT?: TunnelTravelRouterWhereInput | TunnelTravelRouterWhereInput[]
    tunnelId?: StringFilter<"TunnelTravelRouter"> | string
    peerId?: StringFilter<"TunnelTravelRouter"> | string
    addedAt?: DateTimeFilter<"TunnelTravelRouter"> | Date | string
    tunnel?: XOR<TunnelScalarRelationFilter, TunnelWhereInput>
    peer?: XOR<PeerScalarRelationFilter, PeerWhereInput>
  }, "id" | "tunnelId_peerId">

  export type TunnelTravelRouterOrderByWithAggregationInput = {
    id?: SortOrder
    tunnelId?: SortOrder
    peerId?: SortOrder
    addedAt?: SortOrder
    _count?: TunnelTravelRouterCountOrderByAggregateInput
    _max?: TunnelTravelRouterMaxOrderByAggregateInput
    _min?: TunnelTravelRouterMinOrderByAggregateInput
  }

  export type TunnelTravelRouterScalarWhereWithAggregatesInput = {
    AND?: TunnelTravelRouterScalarWhereWithAggregatesInput | TunnelTravelRouterScalarWhereWithAggregatesInput[]
    OR?: TunnelTravelRouterScalarWhereWithAggregatesInput[]
    NOT?: TunnelTravelRouterScalarWhereWithAggregatesInput | TunnelTravelRouterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TunnelTravelRouter"> | string
    tunnelId?: StringWithAggregatesFilter<"TunnelTravelRouter"> | string
    peerId?: StringWithAggregatesFilter<"TunnelTravelRouter"> | string
    addedAt?: DateTimeWithAggregatesFilter<"TunnelTravelRouter"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutUserInput
    tunnels?: TunnelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
    tunnels?: TunnelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutUserNestedInput
    tunnels?: TunnelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutUserNestedInput
    tunnels?: TunnelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    netbirdGroupId: string
    name: string
    peersCount?: number
    resourcesCount?: number
    issued?: string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGroupsInput
    groupPeers?: GroupPeerCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    netbirdGroupId: string
    name: string
    userId: string
    peersCount?: number
    resourcesCount?: number
    issued?: string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPeers?: GroupPeerUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdGroupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    peersCount?: IntFieldUpdateOperationsInput | number
    resourcesCount?: IntFieldUpdateOperationsInput | number
    issued?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
    groupPeers?: GroupPeerUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdGroupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    peersCount?: IntFieldUpdateOperationsInput | number
    resourcesCount?: IntFieldUpdateOperationsInput | number
    issued?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPeers?: GroupPeerUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    netbirdGroupId: string
    name: string
    userId: string
    peersCount?: number
    resourcesCount?: number
    issued?: string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdGroupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    peersCount?: IntFieldUpdateOperationsInput | number
    resourcesCount?: IntFieldUpdateOperationsInput | number
    issued?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdGroupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    peersCount?: IntFieldUpdateOperationsInput | number
    resourcesCount?: IntFieldUpdateOperationsInput | number
    issued?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeerCreateInput = {
    id?: string
    netbirdPeerId: string
    name: string
    ip?: string | null
    connectionIp?: string | null
    dnsLabel?: string | null
    extraDnsLabels?: PeerCreateextraDnsLabelsInput | string[]
    connected?: boolean
    lastSeen?: Date | string | null
    lastLogin?: Date | string | null
    os?: string | null
    kernelVersion?: string | null
    version?: string | null
    uiVersion?: string | null
    hostname?: string | null
    serialNumber?: string | null
    geonameId?: number | null
    countryCode?: string | null
    cityName?: string | null
    userId?: string | null
    sshEnabled?: boolean
    approvalRequired?: boolean
    ephemeral?: boolean
    loginExpirationEnabled?: boolean
    loginExpired?: boolean
    inactivityExpirationEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPeers?: GroupPeerCreateNestedManyWithoutPeerInput
    tunnelsAsExitNode?: TunnelCreateNestedManyWithoutExitNodeInput
    tunnelsAsTravelRouter?: TunnelTravelRouterCreateNestedManyWithoutPeerInput
  }

  export type PeerUncheckedCreateInput = {
    id?: string
    netbirdPeerId: string
    name: string
    ip?: string | null
    connectionIp?: string | null
    dnsLabel?: string | null
    extraDnsLabels?: PeerCreateextraDnsLabelsInput | string[]
    connected?: boolean
    lastSeen?: Date | string | null
    lastLogin?: Date | string | null
    os?: string | null
    kernelVersion?: string | null
    version?: string | null
    uiVersion?: string | null
    hostname?: string | null
    serialNumber?: string | null
    geonameId?: number | null
    countryCode?: string | null
    cityName?: string | null
    userId?: string | null
    sshEnabled?: boolean
    approvalRequired?: boolean
    ephemeral?: boolean
    loginExpirationEnabled?: boolean
    loginExpired?: boolean
    inactivityExpirationEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPeers?: GroupPeerUncheckedCreateNestedManyWithoutPeerInput
    tunnelsAsExitNode?: TunnelUncheckedCreateNestedManyWithoutExitNodeInput
    tunnelsAsTravelRouter?: TunnelTravelRouterUncheckedCreateNestedManyWithoutPeerInput
  }

  export type PeerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdPeerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    connectionIp?: NullableStringFieldUpdateOperationsInput | string | null
    dnsLabel?: NullableStringFieldUpdateOperationsInput | string | null
    extraDnsLabels?: PeerUpdateextraDnsLabelsInput | string[]
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    kernelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    uiVersion?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    geonameId?: NullableIntFieldUpdateOperationsInput | number | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sshEnabled?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    ephemeral?: BoolFieldUpdateOperationsInput | boolean
    loginExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginExpired?: BoolFieldUpdateOperationsInput | boolean
    inactivityExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPeers?: GroupPeerUpdateManyWithoutPeerNestedInput
    tunnelsAsExitNode?: TunnelUpdateManyWithoutExitNodeNestedInput
    tunnelsAsTravelRouter?: TunnelTravelRouterUpdateManyWithoutPeerNestedInput
  }

  export type PeerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdPeerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    connectionIp?: NullableStringFieldUpdateOperationsInput | string | null
    dnsLabel?: NullableStringFieldUpdateOperationsInput | string | null
    extraDnsLabels?: PeerUpdateextraDnsLabelsInput | string[]
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    kernelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    uiVersion?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    geonameId?: NullableIntFieldUpdateOperationsInput | number | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sshEnabled?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    ephemeral?: BoolFieldUpdateOperationsInput | boolean
    loginExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginExpired?: BoolFieldUpdateOperationsInput | boolean
    inactivityExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPeers?: GroupPeerUncheckedUpdateManyWithoutPeerNestedInput
    tunnelsAsExitNode?: TunnelUncheckedUpdateManyWithoutExitNodeNestedInput
    tunnelsAsTravelRouter?: TunnelTravelRouterUncheckedUpdateManyWithoutPeerNestedInput
  }

  export type PeerCreateManyInput = {
    id?: string
    netbirdPeerId: string
    name: string
    ip?: string | null
    connectionIp?: string | null
    dnsLabel?: string | null
    extraDnsLabels?: PeerCreateextraDnsLabelsInput | string[]
    connected?: boolean
    lastSeen?: Date | string | null
    lastLogin?: Date | string | null
    os?: string | null
    kernelVersion?: string | null
    version?: string | null
    uiVersion?: string | null
    hostname?: string | null
    serialNumber?: string | null
    geonameId?: number | null
    countryCode?: string | null
    cityName?: string | null
    userId?: string | null
    sshEnabled?: boolean
    approvalRequired?: boolean
    ephemeral?: boolean
    loginExpirationEnabled?: boolean
    loginExpired?: boolean
    inactivityExpirationEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdPeerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    connectionIp?: NullableStringFieldUpdateOperationsInput | string | null
    dnsLabel?: NullableStringFieldUpdateOperationsInput | string | null
    extraDnsLabels?: PeerUpdateextraDnsLabelsInput | string[]
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    kernelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    uiVersion?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    geonameId?: NullableIntFieldUpdateOperationsInput | number | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sshEnabled?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    ephemeral?: BoolFieldUpdateOperationsInput | boolean
    loginExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginExpired?: BoolFieldUpdateOperationsInput | boolean
    inactivityExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdPeerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    connectionIp?: NullableStringFieldUpdateOperationsInput | string | null
    dnsLabel?: NullableStringFieldUpdateOperationsInput | string | null
    extraDnsLabels?: PeerUpdateextraDnsLabelsInput | string[]
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    kernelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    uiVersion?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    geonameId?: NullableIntFieldUpdateOperationsInput | number | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sshEnabled?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    ephemeral?: BoolFieldUpdateOperationsInput | boolean
    loginExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginExpired?: BoolFieldUpdateOperationsInput | boolean
    inactivityExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupPeerCreateInput = {
    id?: string
    addedAt?: Date | string
    group: GroupCreateNestedOneWithoutGroupPeersInput
    peer: PeerCreateNestedOneWithoutGroupPeersInput
  }

  export type GroupPeerUncheckedCreateInput = {
    id?: string
    groupId: string
    peerId: string
    addedAt?: Date | string
  }

  export type GroupPeerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutGroupPeersNestedInput
    peer?: PeerUpdateOneRequiredWithoutGroupPeersNestedInput
  }

  export type GroupPeerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    peerId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupPeerCreateManyInput = {
    id?: string
    groupId: string
    peerId: string
    addedAt?: Date | string
  }

  export type GroupPeerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupPeerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    peerId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TunnelCreateInput = {
    id?: string
    name?: string | null
    enabled?: boolean
    netbirdGroupId?: string | null
    netbirdRouteId?: string | null
    netbirdPolicyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTunnelsInput
    exitNode: PeerCreateNestedOneWithoutTunnelsAsExitNodeInput
    travelRouters?: TunnelTravelRouterCreateNestedManyWithoutTunnelInput
  }

  export type TunnelUncheckedCreateInput = {
    id?: string
    userId: string
    exitNodeId: string
    name?: string | null
    enabled?: boolean
    netbirdGroupId?: string | null
    netbirdRouteId?: string | null
    netbirdPolicyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    travelRouters?: TunnelTravelRouterUncheckedCreateNestedManyWithoutTunnelInput
  }

  export type TunnelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    netbirdGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdPolicyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTunnelsNestedInput
    exitNode?: PeerUpdateOneRequiredWithoutTunnelsAsExitNodeNestedInput
    travelRouters?: TunnelTravelRouterUpdateManyWithoutTunnelNestedInput
  }

  export type TunnelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exitNodeId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    netbirdGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdPolicyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelRouters?: TunnelTravelRouterUncheckedUpdateManyWithoutTunnelNestedInput
  }

  export type TunnelCreateManyInput = {
    id?: string
    userId: string
    exitNodeId: string
    name?: string | null
    enabled?: boolean
    netbirdGroupId?: string | null
    netbirdRouteId?: string | null
    netbirdPolicyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TunnelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    netbirdGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdPolicyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TunnelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exitNodeId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    netbirdGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdPolicyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TunnelTravelRouterCreateInput = {
    id?: string
    addedAt?: Date | string
    tunnel: TunnelCreateNestedOneWithoutTravelRoutersInput
    peer: PeerCreateNestedOneWithoutTunnelsAsTravelRouterInput
  }

  export type TunnelTravelRouterUncheckedCreateInput = {
    id?: string
    tunnelId: string
    peerId: string
    addedAt?: Date | string
  }

  export type TunnelTravelRouterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tunnel?: TunnelUpdateOneRequiredWithoutTravelRoutersNestedInput
    peer?: PeerUpdateOneRequiredWithoutTunnelsAsTravelRouterNestedInput
  }

  export type TunnelTravelRouterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tunnelId?: StringFieldUpdateOperationsInput | string
    peerId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TunnelTravelRouterCreateManyInput = {
    id?: string
    tunnelId: string
    peerId: string
    addedAt?: Date | string
  }

  export type TunnelTravelRouterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TunnelTravelRouterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tunnelId?: StringFieldUpdateOperationsInput | string
    peerId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type TunnelListRelationFilter = {
    every?: TunnelWhereInput
    some?: TunnelWhereInput
    none?: TunnelWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TunnelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GroupPeerListRelationFilter = {
    every?: GroupPeerWhereInput
    some?: GroupPeerWhereInput
    none?: GroupPeerWhereInput
  }

  export type GroupPeerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    netbirdGroupId?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    peersCount?: SortOrder
    resourcesCount?: SortOrder
    issued?: SortOrder
    resources?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    peersCount?: SortOrder
    resourcesCount?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    netbirdGroupId?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    peersCount?: SortOrder
    resourcesCount?: SortOrder
    issued?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    netbirdGroupId?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    peersCount?: SortOrder
    resourcesCount?: SortOrder
    issued?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    peersCount?: SortOrder
    resourcesCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TunnelTravelRouterListRelationFilter = {
    every?: TunnelTravelRouterWhereInput
    some?: TunnelTravelRouterWhereInput
    none?: TunnelTravelRouterWhereInput
  }

  export type TunnelTravelRouterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeerCountOrderByAggregateInput = {
    id?: SortOrder
    netbirdPeerId?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    connectionIp?: SortOrder
    dnsLabel?: SortOrder
    extraDnsLabels?: SortOrder
    connected?: SortOrder
    lastSeen?: SortOrder
    lastLogin?: SortOrder
    os?: SortOrder
    kernelVersion?: SortOrder
    version?: SortOrder
    uiVersion?: SortOrder
    hostname?: SortOrder
    serialNumber?: SortOrder
    geonameId?: SortOrder
    countryCode?: SortOrder
    cityName?: SortOrder
    userId?: SortOrder
    sshEnabled?: SortOrder
    approvalRequired?: SortOrder
    ephemeral?: SortOrder
    loginExpirationEnabled?: SortOrder
    loginExpired?: SortOrder
    inactivityExpirationEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeerAvgOrderByAggregateInput = {
    geonameId?: SortOrder
  }

  export type PeerMaxOrderByAggregateInput = {
    id?: SortOrder
    netbirdPeerId?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    connectionIp?: SortOrder
    dnsLabel?: SortOrder
    connected?: SortOrder
    lastSeen?: SortOrder
    lastLogin?: SortOrder
    os?: SortOrder
    kernelVersion?: SortOrder
    version?: SortOrder
    uiVersion?: SortOrder
    hostname?: SortOrder
    serialNumber?: SortOrder
    geonameId?: SortOrder
    countryCode?: SortOrder
    cityName?: SortOrder
    userId?: SortOrder
    sshEnabled?: SortOrder
    approvalRequired?: SortOrder
    ephemeral?: SortOrder
    loginExpirationEnabled?: SortOrder
    loginExpired?: SortOrder
    inactivityExpirationEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeerMinOrderByAggregateInput = {
    id?: SortOrder
    netbirdPeerId?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    connectionIp?: SortOrder
    dnsLabel?: SortOrder
    connected?: SortOrder
    lastSeen?: SortOrder
    lastLogin?: SortOrder
    os?: SortOrder
    kernelVersion?: SortOrder
    version?: SortOrder
    uiVersion?: SortOrder
    hostname?: SortOrder
    serialNumber?: SortOrder
    geonameId?: SortOrder
    countryCode?: SortOrder
    cityName?: SortOrder
    userId?: SortOrder
    sshEnabled?: SortOrder
    approvalRequired?: SortOrder
    ephemeral?: SortOrder
    loginExpirationEnabled?: SortOrder
    loginExpired?: SortOrder
    inactivityExpirationEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeerSumOrderByAggregateInput = {
    geonameId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type PeerScalarRelationFilter = {
    is?: PeerWhereInput
    isNot?: PeerWhereInput
  }

  export type GroupPeerGroupIdPeerIdCompoundUniqueInput = {
    groupId: string
    peerId: string
  }

  export type GroupPeerCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    peerId?: SortOrder
    addedAt?: SortOrder
  }

  export type GroupPeerMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    peerId?: SortOrder
    addedAt?: SortOrder
  }

  export type GroupPeerMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    peerId?: SortOrder
    addedAt?: SortOrder
  }

  export type TunnelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exitNodeId?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    netbirdGroupId?: SortOrder
    netbirdRouteId?: SortOrder
    netbirdPolicyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TunnelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exitNodeId?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    netbirdGroupId?: SortOrder
    netbirdRouteId?: SortOrder
    netbirdPolicyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TunnelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exitNodeId?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    netbirdGroupId?: SortOrder
    netbirdRouteId?: SortOrder
    netbirdPolicyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TunnelScalarRelationFilter = {
    is?: TunnelWhereInput
    isNot?: TunnelWhereInput
  }

  export type TunnelTravelRouterTunnelIdPeerIdCompoundUniqueInput = {
    tunnelId: string
    peerId: string
  }

  export type TunnelTravelRouterCountOrderByAggregateInput = {
    id?: SortOrder
    tunnelId?: SortOrder
    peerId?: SortOrder
    addedAt?: SortOrder
  }

  export type TunnelTravelRouterMaxOrderByAggregateInput = {
    id?: SortOrder
    tunnelId?: SortOrder
    peerId?: SortOrder
    addedAt?: SortOrder
  }

  export type TunnelTravelRouterMinOrderByAggregateInput = {
    id?: SortOrder
    tunnelId?: SortOrder
    peerId?: SortOrder
    addedAt?: SortOrder
  }

  export type GroupCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput> | GroupCreateWithoutUserInput[] | GroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput | GroupCreateOrConnectWithoutUserInput[]
    createMany?: GroupCreateManyUserInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type TunnelCreateNestedManyWithoutUserInput = {
    create?: XOR<TunnelCreateWithoutUserInput, TunnelUncheckedCreateWithoutUserInput> | TunnelCreateWithoutUserInput[] | TunnelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TunnelCreateOrConnectWithoutUserInput | TunnelCreateOrConnectWithoutUserInput[]
    createMany?: TunnelCreateManyUserInputEnvelope
    connect?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput> | GroupCreateWithoutUserInput[] | GroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput | GroupCreateOrConnectWithoutUserInput[]
    createMany?: GroupCreateManyUserInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type TunnelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TunnelCreateWithoutUserInput, TunnelUncheckedCreateWithoutUserInput> | TunnelCreateWithoutUserInput[] | TunnelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TunnelCreateOrConnectWithoutUserInput | TunnelCreateOrConnectWithoutUserInput[]
    createMany?: TunnelCreateManyUserInputEnvelope
    connect?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput> | GroupCreateWithoutUserInput[] | GroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput | GroupCreateOrConnectWithoutUserInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutUserInput | GroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupCreateManyUserInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutUserInput | GroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutUserInput | GroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type TunnelUpdateManyWithoutUserNestedInput = {
    create?: XOR<TunnelCreateWithoutUserInput, TunnelUncheckedCreateWithoutUserInput> | TunnelCreateWithoutUserInput[] | TunnelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TunnelCreateOrConnectWithoutUserInput | TunnelCreateOrConnectWithoutUserInput[]
    upsert?: TunnelUpsertWithWhereUniqueWithoutUserInput | TunnelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TunnelCreateManyUserInputEnvelope
    set?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    disconnect?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    delete?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    connect?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    update?: TunnelUpdateWithWhereUniqueWithoutUserInput | TunnelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TunnelUpdateManyWithWhereWithoutUserInput | TunnelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TunnelScalarWhereInput | TunnelScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput> | GroupCreateWithoutUserInput[] | GroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutUserInput | GroupCreateOrConnectWithoutUserInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutUserInput | GroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupCreateManyUserInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutUserInput | GroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutUserInput | GroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type TunnelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TunnelCreateWithoutUserInput, TunnelUncheckedCreateWithoutUserInput> | TunnelCreateWithoutUserInput[] | TunnelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TunnelCreateOrConnectWithoutUserInput | TunnelCreateOrConnectWithoutUserInput[]
    upsert?: TunnelUpsertWithWhereUniqueWithoutUserInput | TunnelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TunnelCreateManyUserInputEnvelope
    set?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    disconnect?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    delete?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    connect?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    update?: TunnelUpdateWithWhereUniqueWithoutUserInput | TunnelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TunnelUpdateManyWithWhereWithoutUserInput | TunnelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TunnelScalarWhereInput | TunnelScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupPeerCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupPeerCreateWithoutGroupInput, GroupPeerUncheckedCreateWithoutGroupInput> | GroupPeerCreateWithoutGroupInput[] | GroupPeerUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupPeerCreateOrConnectWithoutGroupInput | GroupPeerCreateOrConnectWithoutGroupInput[]
    createMany?: GroupPeerCreateManyGroupInputEnvelope
    connect?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
  }

  export type GroupPeerUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupPeerCreateWithoutGroupInput, GroupPeerUncheckedCreateWithoutGroupInput> | GroupPeerCreateWithoutGroupInput[] | GroupPeerUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupPeerCreateOrConnectWithoutGroupInput | GroupPeerCreateOrConnectWithoutGroupInput[]
    createMany?: GroupPeerCreateManyGroupInputEnvelope
    connect?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    upsert?: UserUpsertWithoutGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupsInput, UserUpdateWithoutGroupsInput>, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupPeerUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupPeerCreateWithoutGroupInput, GroupPeerUncheckedCreateWithoutGroupInput> | GroupPeerCreateWithoutGroupInput[] | GroupPeerUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupPeerCreateOrConnectWithoutGroupInput | GroupPeerCreateOrConnectWithoutGroupInput[]
    upsert?: GroupPeerUpsertWithWhereUniqueWithoutGroupInput | GroupPeerUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupPeerCreateManyGroupInputEnvelope
    set?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    disconnect?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    delete?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    connect?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    update?: GroupPeerUpdateWithWhereUniqueWithoutGroupInput | GroupPeerUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupPeerUpdateManyWithWhereWithoutGroupInput | GroupPeerUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupPeerScalarWhereInput | GroupPeerScalarWhereInput[]
  }

  export type GroupPeerUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupPeerCreateWithoutGroupInput, GroupPeerUncheckedCreateWithoutGroupInput> | GroupPeerCreateWithoutGroupInput[] | GroupPeerUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupPeerCreateOrConnectWithoutGroupInput | GroupPeerCreateOrConnectWithoutGroupInput[]
    upsert?: GroupPeerUpsertWithWhereUniqueWithoutGroupInput | GroupPeerUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupPeerCreateManyGroupInputEnvelope
    set?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    disconnect?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    delete?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    connect?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    update?: GroupPeerUpdateWithWhereUniqueWithoutGroupInput | GroupPeerUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupPeerUpdateManyWithWhereWithoutGroupInput | GroupPeerUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupPeerScalarWhereInput | GroupPeerScalarWhereInput[]
  }

  export type PeerCreateextraDnsLabelsInput = {
    set: string[]
  }

  export type GroupPeerCreateNestedManyWithoutPeerInput = {
    create?: XOR<GroupPeerCreateWithoutPeerInput, GroupPeerUncheckedCreateWithoutPeerInput> | GroupPeerCreateWithoutPeerInput[] | GroupPeerUncheckedCreateWithoutPeerInput[]
    connectOrCreate?: GroupPeerCreateOrConnectWithoutPeerInput | GroupPeerCreateOrConnectWithoutPeerInput[]
    createMany?: GroupPeerCreateManyPeerInputEnvelope
    connect?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
  }

  export type TunnelCreateNestedManyWithoutExitNodeInput = {
    create?: XOR<TunnelCreateWithoutExitNodeInput, TunnelUncheckedCreateWithoutExitNodeInput> | TunnelCreateWithoutExitNodeInput[] | TunnelUncheckedCreateWithoutExitNodeInput[]
    connectOrCreate?: TunnelCreateOrConnectWithoutExitNodeInput | TunnelCreateOrConnectWithoutExitNodeInput[]
    createMany?: TunnelCreateManyExitNodeInputEnvelope
    connect?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
  }

  export type TunnelTravelRouterCreateNestedManyWithoutPeerInput = {
    create?: XOR<TunnelTravelRouterCreateWithoutPeerInput, TunnelTravelRouterUncheckedCreateWithoutPeerInput> | TunnelTravelRouterCreateWithoutPeerInput[] | TunnelTravelRouterUncheckedCreateWithoutPeerInput[]
    connectOrCreate?: TunnelTravelRouterCreateOrConnectWithoutPeerInput | TunnelTravelRouterCreateOrConnectWithoutPeerInput[]
    createMany?: TunnelTravelRouterCreateManyPeerInputEnvelope
    connect?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
  }

  export type GroupPeerUncheckedCreateNestedManyWithoutPeerInput = {
    create?: XOR<GroupPeerCreateWithoutPeerInput, GroupPeerUncheckedCreateWithoutPeerInput> | GroupPeerCreateWithoutPeerInput[] | GroupPeerUncheckedCreateWithoutPeerInput[]
    connectOrCreate?: GroupPeerCreateOrConnectWithoutPeerInput | GroupPeerCreateOrConnectWithoutPeerInput[]
    createMany?: GroupPeerCreateManyPeerInputEnvelope
    connect?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
  }

  export type TunnelUncheckedCreateNestedManyWithoutExitNodeInput = {
    create?: XOR<TunnelCreateWithoutExitNodeInput, TunnelUncheckedCreateWithoutExitNodeInput> | TunnelCreateWithoutExitNodeInput[] | TunnelUncheckedCreateWithoutExitNodeInput[]
    connectOrCreate?: TunnelCreateOrConnectWithoutExitNodeInput | TunnelCreateOrConnectWithoutExitNodeInput[]
    createMany?: TunnelCreateManyExitNodeInputEnvelope
    connect?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
  }

  export type TunnelTravelRouterUncheckedCreateNestedManyWithoutPeerInput = {
    create?: XOR<TunnelTravelRouterCreateWithoutPeerInput, TunnelTravelRouterUncheckedCreateWithoutPeerInput> | TunnelTravelRouterCreateWithoutPeerInput[] | TunnelTravelRouterUncheckedCreateWithoutPeerInput[]
    connectOrCreate?: TunnelTravelRouterCreateOrConnectWithoutPeerInput | TunnelTravelRouterCreateOrConnectWithoutPeerInput[]
    createMany?: TunnelTravelRouterCreateManyPeerInputEnvelope
    connect?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
  }

  export type PeerUpdateextraDnsLabelsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GroupPeerUpdateManyWithoutPeerNestedInput = {
    create?: XOR<GroupPeerCreateWithoutPeerInput, GroupPeerUncheckedCreateWithoutPeerInput> | GroupPeerCreateWithoutPeerInput[] | GroupPeerUncheckedCreateWithoutPeerInput[]
    connectOrCreate?: GroupPeerCreateOrConnectWithoutPeerInput | GroupPeerCreateOrConnectWithoutPeerInput[]
    upsert?: GroupPeerUpsertWithWhereUniqueWithoutPeerInput | GroupPeerUpsertWithWhereUniqueWithoutPeerInput[]
    createMany?: GroupPeerCreateManyPeerInputEnvelope
    set?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    disconnect?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    delete?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    connect?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    update?: GroupPeerUpdateWithWhereUniqueWithoutPeerInput | GroupPeerUpdateWithWhereUniqueWithoutPeerInput[]
    updateMany?: GroupPeerUpdateManyWithWhereWithoutPeerInput | GroupPeerUpdateManyWithWhereWithoutPeerInput[]
    deleteMany?: GroupPeerScalarWhereInput | GroupPeerScalarWhereInput[]
  }

  export type TunnelUpdateManyWithoutExitNodeNestedInput = {
    create?: XOR<TunnelCreateWithoutExitNodeInput, TunnelUncheckedCreateWithoutExitNodeInput> | TunnelCreateWithoutExitNodeInput[] | TunnelUncheckedCreateWithoutExitNodeInput[]
    connectOrCreate?: TunnelCreateOrConnectWithoutExitNodeInput | TunnelCreateOrConnectWithoutExitNodeInput[]
    upsert?: TunnelUpsertWithWhereUniqueWithoutExitNodeInput | TunnelUpsertWithWhereUniqueWithoutExitNodeInput[]
    createMany?: TunnelCreateManyExitNodeInputEnvelope
    set?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    disconnect?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    delete?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    connect?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    update?: TunnelUpdateWithWhereUniqueWithoutExitNodeInput | TunnelUpdateWithWhereUniqueWithoutExitNodeInput[]
    updateMany?: TunnelUpdateManyWithWhereWithoutExitNodeInput | TunnelUpdateManyWithWhereWithoutExitNodeInput[]
    deleteMany?: TunnelScalarWhereInput | TunnelScalarWhereInput[]
  }

  export type TunnelTravelRouterUpdateManyWithoutPeerNestedInput = {
    create?: XOR<TunnelTravelRouterCreateWithoutPeerInput, TunnelTravelRouterUncheckedCreateWithoutPeerInput> | TunnelTravelRouterCreateWithoutPeerInput[] | TunnelTravelRouterUncheckedCreateWithoutPeerInput[]
    connectOrCreate?: TunnelTravelRouterCreateOrConnectWithoutPeerInput | TunnelTravelRouterCreateOrConnectWithoutPeerInput[]
    upsert?: TunnelTravelRouterUpsertWithWhereUniqueWithoutPeerInput | TunnelTravelRouterUpsertWithWhereUniqueWithoutPeerInput[]
    createMany?: TunnelTravelRouterCreateManyPeerInputEnvelope
    set?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    disconnect?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    delete?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    connect?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    update?: TunnelTravelRouterUpdateWithWhereUniqueWithoutPeerInput | TunnelTravelRouterUpdateWithWhereUniqueWithoutPeerInput[]
    updateMany?: TunnelTravelRouterUpdateManyWithWhereWithoutPeerInput | TunnelTravelRouterUpdateManyWithWhereWithoutPeerInput[]
    deleteMany?: TunnelTravelRouterScalarWhereInput | TunnelTravelRouterScalarWhereInput[]
  }

  export type GroupPeerUncheckedUpdateManyWithoutPeerNestedInput = {
    create?: XOR<GroupPeerCreateWithoutPeerInput, GroupPeerUncheckedCreateWithoutPeerInput> | GroupPeerCreateWithoutPeerInput[] | GroupPeerUncheckedCreateWithoutPeerInput[]
    connectOrCreate?: GroupPeerCreateOrConnectWithoutPeerInput | GroupPeerCreateOrConnectWithoutPeerInput[]
    upsert?: GroupPeerUpsertWithWhereUniqueWithoutPeerInput | GroupPeerUpsertWithWhereUniqueWithoutPeerInput[]
    createMany?: GroupPeerCreateManyPeerInputEnvelope
    set?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    disconnect?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    delete?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    connect?: GroupPeerWhereUniqueInput | GroupPeerWhereUniqueInput[]
    update?: GroupPeerUpdateWithWhereUniqueWithoutPeerInput | GroupPeerUpdateWithWhereUniqueWithoutPeerInput[]
    updateMany?: GroupPeerUpdateManyWithWhereWithoutPeerInput | GroupPeerUpdateManyWithWhereWithoutPeerInput[]
    deleteMany?: GroupPeerScalarWhereInput | GroupPeerScalarWhereInput[]
  }

  export type TunnelUncheckedUpdateManyWithoutExitNodeNestedInput = {
    create?: XOR<TunnelCreateWithoutExitNodeInput, TunnelUncheckedCreateWithoutExitNodeInput> | TunnelCreateWithoutExitNodeInput[] | TunnelUncheckedCreateWithoutExitNodeInput[]
    connectOrCreate?: TunnelCreateOrConnectWithoutExitNodeInput | TunnelCreateOrConnectWithoutExitNodeInput[]
    upsert?: TunnelUpsertWithWhereUniqueWithoutExitNodeInput | TunnelUpsertWithWhereUniqueWithoutExitNodeInput[]
    createMany?: TunnelCreateManyExitNodeInputEnvelope
    set?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    disconnect?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    delete?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    connect?: TunnelWhereUniqueInput | TunnelWhereUniqueInput[]
    update?: TunnelUpdateWithWhereUniqueWithoutExitNodeInput | TunnelUpdateWithWhereUniqueWithoutExitNodeInput[]
    updateMany?: TunnelUpdateManyWithWhereWithoutExitNodeInput | TunnelUpdateManyWithWhereWithoutExitNodeInput[]
    deleteMany?: TunnelScalarWhereInput | TunnelScalarWhereInput[]
  }

  export type TunnelTravelRouterUncheckedUpdateManyWithoutPeerNestedInput = {
    create?: XOR<TunnelTravelRouterCreateWithoutPeerInput, TunnelTravelRouterUncheckedCreateWithoutPeerInput> | TunnelTravelRouterCreateWithoutPeerInput[] | TunnelTravelRouterUncheckedCreateWithoutPeerInput[]
    connectOrCreate?: TunnelTravelRouterCreateOrConnectWithoutPeerInput | TunnelTravelRouterCreateOrConnectWithoutPeerInput[]
    upsert?: TunnelTravelRouterUpsertWithWhereUniqueWithoutPeerInput | TunnelTravelRouterUpsertWithWhereUniqueWithoutPeerInput[]
    createMany?: TunnelTravelRouterCreateManyPeerInputEnvelope
    set?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    disconnect?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    delete?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    connect?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    update?: TunnelTravelRouterUpdateWithWhereUniqueWithoutPeerInput | TunnelTravelRouterUpdateWithWhereUniqueWithoutPeerInput[]
    updateMany?: TunnelTravelRouterUpdateManyWithWhereWithoutPeerInput | TunnelTravelRouterUpdateManyWithWhereWithoutPeerInput[]
    deleteMany?: TunnelTravelRouterScalarWhereInput | TunnelTravelRouterScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutGroupPeersInput = {
    create?: XOR<GroupCreateWithoutGroupPeersInput, GroupUncheckedCreateWithoutGroupPeersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGroupPeersInput
    connect?: GroupWhereUniqueInput
  }

  export type PeerCreateNestedOneWithoutGroupPeersInput = {
    create?: XOR<PeerCreateWithoutGroupPeersInput, PeerUncheckedCreateWithoutGroupPeersInput>
    connectOrCreate?: PeerCreateOrConnectWithoutGroupPeersInput
    connect?: PeerWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutGroupPeersNestedInput = {
    create?: XOR<GroupCreateWithoutGroupPeersInput, GroupUncheckedCreateWithoutGroupPeersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutGroupPeersInput
    upsert?: GroupUpsertWithoutGroupPeersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutGroupPeersInput, GroupUpdateWithoutGroupPeersInput>, GroupUncheckedUpdateWithoutGroupPeersInput>
  }

  export type PeerUpdateOneRequiredWithoutGroupPeersNestedInput = {
    create?: XOR<PeerCreateWithoutGroupPeersInput, PeerUncheckedCreateWithoutGroupPeersInput>
    connectOrCreate?: PeerCreateOrConnectWithoutGroupPeersInput
    upsert?: PeerUpsertWithoutGroupPeersInput
    connect?: PeerWhereUniqueInput
    update?: XOR<XOR<PeerUpdateToOneWithWhereWithoutGroupPeersInput, PeerUpdateWithoutGroupPeersInput>, PeerUncheckedUpdateWithoutGroupPeersInput>
  }

  export type UserCreateNestedOneWithoutTunnelsInput = {
    create?: XOR<UserCreateWithoutTunnelsInput, UserUncheckedCreateWithoutTunnelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTunnelsInput
    connect?: UserWhereUniqueInput
  }

  export type PeerCreateNestedOneWithoutTunnelsAsExitNodeInput = {
    create?: XOR<PeerCreateWithoutTunnelsAsExitNodeInput, PeerUncheckedCreateWithoutTunnelsAsExitNodeInput>
    connectOrCreate?: PeerCreateOrConnectWithoutTunnelsAsExitNodeInput
    connect?: PeerWhereUniqueInput
  }

  export type TunnelTravelRouterCreateNestedManyWithoutTunnelInput = {
    create?: XOR<TunnelTravelRouterCreateWithoutTunnelInput, TunnelTravelRouterUncheckedCreateWithoutTunnelInput> | TunnelTravelRouterCreateWithoutTunnelInput[] | TunnelTravelRouterUncheckedCreateWithoutTunnelInput[]
    connectOrCreate?: TunnelTravelRouterCreateOrConnectWithoutTunnelInput | TunnelTravelRouterCreateOrConnectWithoutTunnelInput[]
    createMany?: TunnelTravelRouterCreateManyTunnelInputEnvelope
    connect?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
  }

  export type TunnelTravelRouterUncheckedCreateNestedManyWithoutTunnelInput = {
    create?: XOR<TunnelTravelRouterCreateWithoutTunnelInput, TunnelTravelRouterUncheckedCreateWithoutTunnelInput> | TunnelTravelRouterCreateWithoutTunnelInput[] | TunnelTravelRouterUncheckedCreateWithoutTunnelInput[]
    connectOrCreate?: TunnelTravelRouterCreateOrConnectWithoutTunnelInput | TunnelTravelRouterCreateOrConnectWithoutTunnelInput[]
    createMany?: TunnelTravelRouterCreateManyTunnelInputEnvelope
    connect?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTunnelsNestedInput = {
    create?: XOR<UserCreateWithoutTunnelsInput, UserUncheckedCreateWithoutTunnelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTunnelsInput
    upsert?: UserUpsertWithoutTunnelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTunnelsInput, UserUpdateWithoutTunnelsInput>, UserUncheckedUpdateWithoutTunnelsInput>
  }

  export type PeerUpdateOneRequiredWithoutTunnelsAsExitNodeNestedInput = {
    create?: XOR<PeerCreateWithoutTunnelsAsExitNodeInput, PeerUncheckedCreateWithoutTunnelsAsExitNodeInput>
    connectOrCreate?: PeerCreateOrConnectWithoutTunnelsAsExitNodeInput
    upsert?: PeerUpsertWithoutTunnelsAsExitNodeInput
    connect?: PeerWhereUniqueInput
    update?: XOR<XOR<PeerUpdateToOneWithWhereWithoutTunnelsAsExitNodeInput, PeerUpdateWithoutTunnelsAsExitNodeInput>, PeerUncheckedUpdateWithoutTunnelsAsExitNodeInput>
  }

  export type TunnelTravelRouterUpdateManyWithoutTunnelNestedInput = {
    create?: XOR<TunnelTravelRouterCreateWithoutTunnelInput, TunnelTravelRouterUncheckedCreateWithoutTunnelInput> | TunnelTravelRouterCreateWithoutTunnelInput[] | TunnelTravelRouterUncheckedCreateWithoutTunnelInput[]
    connectOrCreate?: TunnelTravelRouterCreateOrConnectWithoutTunnelInput | TunnelTravelRouterCreateOrConnectWithoutTunnelInput[]
    upsert?: TunnelTravelRouterUpsertWithWhereUniqueWithoutTunnelInput | TunnelTravelRouterUpsertWithWhereUniqueWithoutTunnelInput[]
    createMany?: TunnelTravelRouterCreateManyTunnelInputEnvelope
    set?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    disconnect?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    delete?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    connect?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    update?: TunnelTravelRouterUpdateWithWhereUniqueWithoutTunnelInput | TunnelTravelRouterUpdateWithWhereUniqueWithoutTunnelInput[]
    updateMany?: TunnelTravelRouterUpdateManyWithWhereWithoutTunnelInput | TunnelTravelRouterUpdateManyWithWhereWithoutTunnelInput[]
    deleteMany?: TunnelTravelRouterScalarWhereInput | TunnelTravelRouterScalarWhereInput[]
  }

  export type TunnelTravelRouterUncheckedUpdateManyWithoutTunnelNestedInput = {
    create?: XOR<TunnelTravelRouterCreateWithoutTunnelInput, TunnelTravelRouterUncheckedCreateWithoutTunnelInput> | TunnelTravelRouterCreateWithoutTunnelInput[] | TunnelTravelRouterUncheckedCreateWithoutTunnelInput[]
    connectOrCreate?: TunnelTravelRouterCreateOrConnectWithoutTunnelInput | TunnelTravelRouterCreateOrConnectWithoutTunnelInput[]
    upsert?: TunnelTravelRouterUpsertWithWhereUniqueWithoutTunnelInput | TunnelTravelRouterUpsertWithWhereUniqueWithoutTunnelInput[]
    createMany?: TunnelTravelRouterCreateManyTunnelInputEnvelope
    set?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    disconnect?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    delete?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    connect?: TunnelTravelRouterWhereUniqueInput | TunnelTravelRouterWhereUniqueInput[]
    update?: TunnelTravelRouterUpdateWithWhereUniqueWithoutTunnelInput | TunnelTravelRouterUpdateWithWhereUniqueWithoutTunnelInput[]
    updateMany?: TunnelTravelRouterUpdateManyWithWhereWithoutTunnelInput | TunnelTravelRouterUpdateManyWithWhereWithoutTunnelInput[]
    deleteMany?: TunnelTravelRouterScalarWhereInput | TunnelTravelRouterScalarWhereInput[]
  }

  export type TunnelCreateNestedOneWithoutTravelRoutersInput = {
    create?: XOR<TunnelCreateWithoutTravelRoutersInput, TunnelUncheckedCreateWithoutTravelRoutersInput>
    connectOrCreate?: TunnelCreateOrConnectWithoutTravelRoutersInput
    connect?: TunnelWhereUniqueInput
  }

  export type PeerCreateNestedOneWithoutTunnelsAsTravelRouterInput = {
    create?: XOR<PeerCreateWithoutTunnelsAsTravelRouterInput, PeerUncheckedCreateWithoutTunnelsAsTravelRouterInput>
    connectOrCreate?: PeerCreateOrConnectWithoutTunnelsAsTravelRouterInput
    connect?: PeerWhereUniqueInput
  }

  export type TunnelUpdateOneRequiredWithoutTravelRoutersNestedInput = {
    create?: XOR<TunnelCreateWithoutTravelRoutersInput, TunnelUncheckedCreateWithoutTravelRoutersInput>
    connectOrCreate?: TunnelCreateOrConnectWithoutTravelRoutersInput
    upsert?: TunnelUpsertWithoutTravelRoutersInput
    connect?: TunnelWhereUniqueInput
    update?: XOR<XOR<TunnelUpdateToOneWithWhereWithoutTravelRoutersInput, TunnelUpdateWithoutTravelRoutersInput>, TunnelUncheckedUpdateWithoutTravelRoutersInput>
  }

  export type PeerUpdateOneRequiredWithoutTunnelsAsTravelRouterNestedInput = {
    create?: XOR<PeerCreateWithoutTunnelsAsTravelRouterInput, PeerUncheckedCreateWithoutTunnelsAsTravelRouterInput>
    connectOrCreate?: PeerCreateOrConnectWithoutTunnelsAsTravelRouterInput
    upsert?: PeerUpsertWithoutTunnelsAsTravelRouterInput
    connect?: PeerWhereUniqueInput
    update?: XOR<XOR<PeerUpdateToOneWithWhereWithoutTunnelsAsTravelRouterInput, PeerUpdateWithoutTunnelsAsTravelRouterInput>, PeerUncheckedUpdateWithoutTunnelsAsTravelRouterInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type GroupCreateWithoutUserInput = {
    id?: string
    netbirdGroupId: string
    name: string
    peersCount?: number
    resourcesCount?: number
    issued?: string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPeers?: GroupPeerCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUserInput = {
    id?: string
    netbirdGroupId: string
    name: string
    peersCount?: number
    resourcesCount?: number
    issued?: string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPeers?: GroupPeerUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutUserInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
  }

  export type GroupCreateManyUserInputEnvelope = {
    data: GroupCreateManyUserInput | GroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TunnelCreateWithoutUserInput = {
    id?: string
    name?: string | null
    enabled?: boolean
    netbirdGroupId?: string | null
    netbirdRouteId?: string | null
    netbirdPolicyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exitNode: PeerCreateNestedOneWithoutTunnelsAsExitNodeInput
    travelRouters?: TunnelTravelRouterCreateNestedManyWithoutTunnelInput
  }

  export type TunnelUncheckedCreateWithoutUserInput = {
    id?: string
    exitNodeId: string
    name?: string | null
    enabled?: boolean
    netbirdGroupId?: string | null
    netbirdRouteId?: string | null
    netbirdPolicyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    travelRouters?: TunnelTravelRouterUncheckedCreateNestedManyWithoutTunnelInput
  }

  export type TunnelCreateOrConnectWithoutUserInput = {
    where: TunnelWhereUniqueInput
    create: XOR<TunnelCreateWithoutUserInput, TunnelUncheckedCreateWithoutUserInput>
  }

  export type TunnelCreateManyUserInputEnvelope = {
    data: TunnelCreateManyUserInput | TunnelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutUserInput, GroupUncheckedUpdateWithoutUserInput>
    create: XOR<GroupCreateWithoutUserInput, GroupUncheckedCreateWithoutUserInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutUserInput, GroupUncheckedUpdateWithoutUserInput>
  }

  export type GroupUpdateManyWithWhereWithoutUserInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    netbirdGroupId?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    userId?: StringFilter<"Group"> | string
    peersCount?: IntFilter<"Group"> | number
    resourcesCount?: IntFilter<"Group"> | number
    issued?: StringNullableFilter<"Group"> | string | null
    resources?: JsonNullableFilter<"Group">
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type TunnelUpsertWithWhereUniqueWithoutUserInput = {
    where: TunnelWhereUniqueInput
    update: XOR<TunnelUpdateWithoutUserInput, TunnelUncheckedUpdateWithoutUserInput>
    create: XOR<TunnelCreateWithoutUserInput, TunnelUncheckedCreateWithoutUserInput>
  }

  export type TunnelUpdateWithWhereUniqueWithoutUserInput = {
    where: TunnelWhereUniqueInput
    data: XOR<TunnelUpdateWithoutUserInput, TunnelUncheckedUpdateWithoutUserInput>
  }

  export type TunnelUpdateManyWithWhereWithoutUserInput = {
    where: TunnelScalarWhereInput
    data: XOR<TunnelUpdateManyMutationInput, TunnelUncheckedUpdateManyWithoutUserInput>
  }

  export type TunnelScalarWhereInput = {
    AND?: TunnelScalarWhereInput | TunnelScalarWhereInput[]
    OR?: TunnelScalarWhereInput[]
    NOT?: TunnelScalarWhereInput | TunnelScalarWhereInput[]
    id?: StringFilter<"Tunnel"> | string
    userId?: StringFilter<"Tunnel"> | string
    exitNodeId?: StringFilter<"Tunnel"> | string
    name?: StringNullableFilter<"Tunnel"> | string | null
    enabled?: BoolFilter<"Tunnel"> | boolean
    netbirdGroupId?: StringNullableFilter<"Tunnel"> | string | null
    netbirdRouteId?: StringNullableFilter<"Tunnel"> | string | null
    netbirdPolicyId?: StringNullableFilter<"Tunnel"> | string | null
    createdAt?: DateTimeFilter<"Tunnel"> | Date | string
    updatedAt?: DateTimeFilter<"Tunnel"> | Date | string
  }

  export type UserCreateWithoutGroupsInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tunnels?: TunnelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tunnels?: TunnelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type GroupPeerCreateWithoutGroupInput = {
    id?: string
    addedAt?: Date | string
    peer: PeerCreateNestedOneWithoutGroupPeersInput
  }

  export type GroupPeerUncheckedCreateWithoutGroupInput = {
    id?: string
    peerId: string
    addedAt?: Date | string
  }

  export type GroupPeerCreateOrConnectWithoutGroupInput = {
    where: GroupPeerWhereUniqueInput
    create: XOR<GroupPeerCreateWithoutGroupInput, GroupPeerUncheckedCreateWithoutGroupInput>
  }

  export type GroupPeerCreateManyGroupInputEnvelope = {
    data: GroupPeerCreateManyGroupInput | GroupPeerCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGroupsInput = {
    update: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tunnels?: TunnelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tunnels?: TunnelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupPeerUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupPeerWhereUniqueInput
    update: XOR<GroupPeerUpdateWithoutGroupInput, GroupPeerUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupPeerCreateWithoutGroupInput, GroupPeerUncheckedCreateWithoutGroupInput>
  }

  export type GroupPeerUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupPeerWhereUniqueInput
    data: XOR<GroupPeerUpdateWithoutGroupInput, GroupPeerUncheckedUpdateWithoutGroupInput>
  }

  export type GroupPeerUpdateManyWithWhereWithoutGroupInput = {
    where: GroupPeerScalarWhereInput
    data: XOR<GroupPeerUpdateManyMutationInput, GroupPeerUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupPeerScalarWhereInput = {
    AND?: GroupPeerScalarWhereInput | GroupPeerScalarWhereInput[]
    OR?: GroupPeerScalarWhereInput[]
    NOT?: GroupPeerScalarWhereInput | GroupPeerScalarWhereInput[]
    id?: StringFilter<"GroupPeer"> | string
    groupId?: StringFilter<"GroupPeer"> | string
    peerId?: StringFilter<"GroupPeer"> | string
    addedAt?: DateTimeFilter<"GroupPeer"> | Date | string
  }

  export type GroupPeerCreateWithoutPeerInput = {
    id?: string
    addedAt?: Date | string
    group: GroupCreateNestedOneWithoutGroupPeersInput
  }

  export type GroupPeerUncheckedCreateWithoutPeerInput = {
    id?: string
    groupId: string
    addedAt?: Date | string
  }

  export type GroupPeerCreateOrConnectWithoutPeerInput = {
    where: GroupPeerWhereUniqueInput
    create: XOR<GroupPeerCreateWithoutPeerInput, GroupPeerUncheckedCreateWithoutPeerInput>
  }

  export type GroupPeerCreateManyPeerInputEnvelope = {
    data: GroupPeerCreateManyPeerInput | GroupPeerCreateManyPeerInput[]
    skipDuplicates?: boolean
  }

  export type TunnelCreateWithoutExitNodeInput = {
    id?: string
    name?: string | null
    enabled?: boolean
    netbirdGroupId?: string | null
    netbirdRouteId?: string | null
    netbirdPolicyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTunnelsInput
    travelRouters?: TunnelTravelRouterCreateNestedManyWithoutTunnelInput
  }

  export type TunnelUncheckedCreateWithoutExitNodeInput = {
    id?: string
    userId: string
    name?: string | null
    enabled?: boolean
    netbirdGroupId?: string | null
    netbirdRouteId?: string | null
    netbirdPolicyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    travelRouters?: TunnelTravelRouterUncheckedCreateNestedManyWithoutTunnelInput
  }

  export type TunnelCreateOrConnectWithoutExitNodeInput = {
    where: TunnelWhereUniqueInput
    create: XOR<TunnelCreateWithoutExitNodeInput, TunnelUncheckedCreateWithoutExitNodeInput>
  }

  export type TunnelCreateManyExitNodeInputEnvelope = {
    data: TunnelCreateManyExitNodeInput | TunnelCreateManyExitNodeInput[]
    skipDuplicates?: boolean
  }

  export type TunnelTravelRouterCreateWithoutPeerInput = {
    id?: string
    addedAt?: Date | string
    tunnel: TunnelCreateNestedOneWithoutTravelRoutersInput
  }

  export type TunnelTravelRouterUncheckedCreateWithoutPeerInput = {
    id?: string
    tunnelId: string
    addedAt?: Date | string
  }

  export type TunnelTravelRouterCreateOrConnectWithoutPeerInput = {
    where: TunnelTravelRouterWhereUniqueInput
    create: XOR<TunnelTravelRouterCreateWithoutPeerInput, TunnelTravelRouterUncheckedCreateWithoutPeerInput>
  }

  export type TunnelTravelRouterCreateManyPeerInputEnvelope = {
    data: TunnelTravelRouterCreateManyPeerInput | TunnelTravelRouterCreateManyPeerInput[]
    skipDuplicates?: boolean
  }

  export type GroupPeerUpsertWithWhereUniqueWithoutPeerInput = {
    where: GroupPeerWhereUniqueInput
    update: XOR<GroupPeerUpdateWithoutPeerInput, GroupPeerUncheckedUpdateWithoutPeerInput>
    create: XOR<GroupPeerCreateWithoutPeerInput, GroupPeerUncheckedCreateWithoutPeerInput>
  }

  export type GroupPeerUpdateWithWhereUniqueWithoutPeerInput = {
    where: GroupPeerWhereUniqueInput
    data: XOR<GroupPeerUpdateWithoutPeerInput, GroupPeerUncheckedUpdateWithoutPeerInput>
  }

  export type GroupPeerUpdateManyWithWhereWithoutPeerInput = {
    where: GroupPeerScalarWhereInput
    data: XOR<GroupPeerUpdateManyMutationInput, GroupPeerUncheckedUpdateManyWithoutPeerInput>
  }

  export type TunnelUpsertWithWhereUniqueWithoutExitNodeInput = {
    where: TunnelWhereUniqueInput
    update: XOR<TunnelUpdateWithoutExitNodeInput, TunnelUncheckedUpdateWithoutExitNodeInput>
    create: XOR<TunnelCreateWithoutExitNodeInput, TunnelUncheckedCreateWithoutExitNodeInput>
  }

  export type TunnelUpdateWithWhereUniqueWithoutExitNodeInput = {
    where: TunnelWhereUniqueInput
    data: XOR<TunnelUpdateWithoutExitNodeInput, TunnelUncheckedUpdateWithoutExitNodeInput>
  }

  export type TunnelUpdateManyWithWhereWithoutExitNodeInput = {
    where: TunnelScalarWhereInput
    data: XOR<TunnelUpdateManyMutationInput, TunnelUncheckedUpdateManyWithoutExitNodeInput>
  }

  export type TunnelTravelRouterUpsertWithWhereUniqueWithoutPeerInput = {
    where: TunnelTravelRouterWhereUniqueInput
    update: XOR<TunnelTravelRouterUpdateWithoutPeerInput, TunnelTravelRouterUncheckedUpdateWithoutPeerInput>
    create: XOR<TunnelTravelRouterCreateWithoutPeerInput, TunnelTravelRouterUncheckedCreateWithoutPeerInput>
  }

  export type TunnelTravelRouterUpdateWithWhereUniqueWithoutPeerInput = {
    where: TunnelTravelRouterWhereUniqueInput
    data: XOR<TunnelTravelRouterUpdateWithoutPeerInput, TunnelTravelRouterUncheckedUpdateWithoutPeerInput>
  }

  export type TunnelTravelRouterUpdateManyWithWhereWithoutPeerInput = {
    where: TunnelTravelRouterScalarWhereInput
    data: XOR<TunnelTravelRouterUpdateManyMutationInput, TunnelTravelRouterUncheckedUpdateManyWithoutPeerInput>
  }

  export type TunnelTravelRouterScalarWhereInput = {
    AND?: TunnelTravelRouterScalarWhereInput | TunnelTravelRouterScalarWhereInput[]
    OR?: TunnelTravelRouterScalarWhereInput[]
    NOT?: TunnelTravelRouterScalarWhereInput | TunnelTravelRouterScalarWhereInput[]
    id?: StringFilter<"TunnelTravelRouter"> | string
    tunnelId?: StringFilter<"TunnelTravelRouter"> | string
    peerId?: StringFilter<"TunnelTravelRouter"> | string
    addedAt?: DateTimeFilter<"TunnelTravelRouter"> | Date | string
  }

  export type GroupCreateWithoutGroupPeersInput = {
    id?: string
    netbirdGroupId: string
    name: string
    peersCount?: number
    resourcesCount?: number
    issued?: string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutGroupPeersInput = {
    id?: string
    netbirdGroupId: string
    name: string
    userId: string
    peersCount?: number
    resourcesCount?: number
    issued?: string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupCreateOrConnectWithoutGroupPeersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutGroupPeersInput, GroupUncheckedCreateWithoutGroupPeersInput>
  }

  export type PeerCreateWithoutGroupPeersInput = {
    id?: string
    netbirdPeerId: string
    name: string
    ip?: string | null
    connectionIp?: string | null
    dnsLabel?: string | null
    extraDnsLabels?: PeerCreateextraDnsLabelsInput | string[]
    connected?: boolean
    lastSeen?: Date | string | null
    lastLogin?: Date | string | null
    os?: string | null
    kernelVersion?: string | null
    version?: string | null
    uiVersion?: string | null
    hostname?: string | null
    serialNumber?: string | null
    geonameId?: number | null
    countryCode?: string | null
    cityName?: string | null
    userId?: string | null
    sshEnabled?: boolean
    approvalRequired?: boolean
    ephemeral?: boolean
    loginExpirationEnabled?: boolean
    loginExpired?: boolean
    inactivityExpirationEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tunnelsAsExitNode?: TunnelCreateNestedManyWithoutExitNodeInput
    tunnelsAsTravelRouter?: TunnelTravelRouterCreateNestedManyWithoutPeerInput
  }

  export type PeerUncheckedCreateWithoutGroupPeersInput = {
    id?: string
    netbirdPeerId: string
    name: string
    ip?: string | null
    connectionIp?: string | null
    dnsLabel?: string | null
    extraDnsLabels?: PeerCreateextraDnsLabelsInput | string[]
    connected?: boolean
    lastSeen?: Date | string | null
    lastLogin?: Date | string | null
    os?: string | null
    kernelVersion?: string | null
    version?: string | null
    uiVersion?: string | null
    hostname?: string | null
    serialNumber?: string | null
    geonameId?: number | null
    countryCode?: string | null
    cityName?: string | null
    userId?: string | null
    sshEnabled?: boolean
    approvalRequired?: boolean
    ephemeral?: boolean
    loginExpirationEnabled?: boolean
    loginExpired?: boolean
    inactivityExpirationEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tunnelsAsExitNode?: TunnelUncheckedCreateNestedManyWithoutExitNodeInput
    tunnelsAsTravelRouter?: TunnelTravelRouterUncheckedCreateNestedManyWithoutPeerInput
  }

  export type PeerCreateOrConnectWithoutGroupPeersInput = {
    where: PeerWhereUniqueInput
    create: XOR<PeerCreateWithoutGroupPeersInput, PeerUncheckedCreateWithoutGroupPeersInput>
  }

  export type GroupUpsertWithoutGroupPeersInput = {
    update: XOR<GroupUpdateWithoutGroupPeersInput, GroupUncheckedUpdateWithoutGroupPeersInput>
    create: XOR<GroupCreateWithoutGroupPeersInput, GroupUncheckedCreateWithoutGroupPeersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutGroupPeersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutGroupPeersInput, GroupUncheckedUpdateWithoutGroupPeersInput>
  }

  export type GroupUpdateWithoutGroupPeersInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdGroupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    peersCount?: IntFieldUpdateOperationsInput | number
    resourcesCount?: IntFieldUpdateOperationsInput | number
    issued?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutGroupPeersInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdGroupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    peersCount?: IntFieldUpdateOperationsInput | number
    resourcesCount?: IntFieldUpdateOperationsInput | number
    issued?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeerUpsertWithoutGroupPeersInput = {
    update: XOR<PeerUpdateWithoutGroupPeersInput, PeerUncheckedUpdateWithoutGroupPeersInput>
    create: XOR<PeerCreateWithoutGroupPeersInput, PeerUncheckedCreateWithoutGroupPeersInput>
    where?: PeerWhereInput
  }

  export type PeerUpdateToOneWithWhereWithoutGroupPeersInput = {
    where?: PeerWhereInput
    data: XOR<PeerUpdateWithoutGroupPeersInput, PeerUncheckedUpdateWithoutGroupPeersInput>
  }

  export type PeerUpdateWithoutGroupPeersInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdPeerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    connectionIp?: NullableStringFieldUpdateOperationsInput | string | null
    dnsLabel?: NullableStringFieldUpdateOperationsInput | string | null
    extraDnsLabels?: PeerUpdateextraDnsLabelsInput | string[]
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    kernelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    uiVersion?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    geonameId?: NullableIntFieldUpdateOperationsInput | number | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sshEnabled?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    ephemeral?: BoolFieldUpdateOperationsInput | boolean
    loginExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginExpired?: BoolFieldUpdateOperationsInput | boolean
    inactivityExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tunnelsAsExitNode?: TunnelUpdateManyWithoutExitNodeNestedInput
    tunnelsAsTravelRouter?: TunnelTravelRouterUpdateManyWithoutPeerNestedInput
  }

  export type PeerUncheckedUpdateWithoutGroupPeersInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdPeerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    connectionIp?: NullableStringFieldUpdateOperationsInput | string | null
    dnsLabel?: NullableStringFieldUpdateOperationsInput | string | null
    extraDnsLabels?: PeerUpdateextraDnsLabelsInput | string[]
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    kernelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    uiVersion?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    geonameId?: NullableIntFieldUpdateOperationsInput | number | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sshEnabled?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    ephemeral?: BoolFieldUpdateOperationsInput | boolean
    loginExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginExpired?: BoolFieldUpdateOperationsInput | boolean
    inactivityExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tunnelsAsExitNode?: TunnelUncheckedUpdateManyWithoutExitNodeNestedInput
    tunnelsAsTravelRouter?: TunnelTravelRouterUncheckedUpdateManyWithoutPeerNestedInput
  }

  export type UserCreateWithoutTunnelsInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTunnelsInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTunnelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTunnelsInput, UserUncheckedCreateWithoutTunnelsInput>
  }

  export type PeerCreateWithoutTunnelsAsExitNodeInput = {
    id?: string
    netbirdPeerId: string
    name: string
    ip?: string | null
    connectionIp?: string | null
    dnsLabel?: string | null
    extraDnsLabels?: PeerCreateextraDnsLabelsInput | string[]
    connected?: boolean
    lastSeen?: Date | string | null
    lastLogin?: Date | string | null
    os?: string | null
    kernelVersion?: string | null
    version?: string | null
    uiVersion?: string | null
    hostname?: string | null
    serialNumber?: string | null
    geonameId?: number | null
    countryCode?: string | null
    cityName?: string | null
    userId?: string | null
    sshEnabled?: boolean
    approvalRequired?: boolean
    ephemeral?: boolean
    loginExpirationEnabled?: boolean
    loginExpired?: boolean
    inactivityExpirationEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPeers?: GroupPeerCreateNestedManyWithoutPeerInput
    tunnelsAsTravelRouter?: TunnelTravelRouterCreateNestedManyWithoutPeerInput
  }

  export type PeerUncheckedCreateWithoutTunnelsAsExitNodeInput = {
    id?: string
    netbirdPeerId: string
    name: string
    ip?: string | null
    connectionIp?: string | null
    dnsLabel?: string | null
    extraDnsLabels?: PeerCreateextraDnsLabelsInput | string[]
    connected?: boolean
    lastSeen?: Date | string | null
    lastLogin?: Date | string | null
    os?: string | null
    kernelVersion?: string | null
    version?: string | null
    uiVersion?: string | null
    hostname?: string | null
    serialNumber?: string | null
    geonameId?: number | null
    countryCode?: string | null
    cityName?: string | null
    userId?: string | null
    sshEnabled?: boolean
    approvalRequired?: boolean
    ephemeral?: boolean
    loginExpirationEnabled?: boolean
    loginExpired?: boolean
    inactivityExpirationEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPeers?: GroupPeerUncheckedCreateNestedManyWithoutPeerInput
    tunnelsAsTravelRouter?: TunnelTravelRouterUncheckedCreateNestedManyWithoutPeerInput
  }

  export type PeerCreateOrConnectWithoutTunnelsAsExitNodeInput = {
    where: PeerWhereUniqueInput
    create: XOR<PeerCreateWithoutTunnelsAsExitNodeInput, PeerUncheckedCreateWithoutTunnelsAsExitNodeInput>
  }

  export type TunnelTravelRouterCreateWithoutTunnelInput = {
    id?: string
    addedAt?: Date | string
    peer: PeerCreateNestedOneWithoutTunnelsAsTravelRouterInput
  }

  export type TunnelTravelRouterUncheckedCreateWithoutTunnelInput = {
    id?: string
    peerId: string
    addedAt?: Date | string
  }

  export type TunnelTravelRouterCreateOrConnectWithoutTunnelInput = {
    where: TunnelTravelRouterWhereUniqueInput
    create: XOR<TunnelTravelRouterCreateWithoutTunnelInput, TunnelTravelRouterUncheckedCreateWithoutTunnelInput>
  }

  export type TunnelTravelRouterCreateManyTunnelInputEnvelope = {
    data: TunnelTravelRouterCreateManyTunnelInput | TunnelTravelRouterCreateManyTunnelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTunnelsInput = {
    update: XOR<UserUpdateWithoutTunnelsInput, UserUncheckedUpdateWithoutTunnelsInput>
    create: XOR<UserCreateWithoutTunnelsInput, UserUncheckedCreateWithoutTunnelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTunnelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTunnelsInput, UserUncheckedUpdateWithoutTunnelsInput>
  }

  export type UserUpdateWithoutTunnelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTunnelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PeerUpsertWithoutTunnelsAsExitNodeInput = {
    update: XOR<PeerUpdateWithoutTunnelsAsExitNodeInput, PeerUncheckedUpdateWithoutTunnelsAsExitNodeInput>
    create: XOR<PeerCreateWithoutTunnelsAsExitNodeInput, PeerUncheckedCreateWithoutTunnelsAsExitNodeInput>
    where?: PeerWhereInput
  }

  export type PeerUpdateToOneWithWhereWithoutTunnelsAsExitNodeInput = {
    where?: PeerWhereInput
    data: XOR<PeerUpdateWithoutTunnelsAsExitNodeInput, PeerUncheckedUpdateWithoutTunnelsAsExitNodeInput>
  }

  export type PeerUpdateWithoutTunnelsAsExitNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdPeerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    connectionIp?: NullableStringFieldUpdateOperationsInput | string | null
    dnsLabel?: NullableStringFieldUpdateOperationsInput | string | null
    extraDnsLabels?: PeerUpdateextraDnsLabelsInput | string[]
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    kernelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    uiVersion?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    geonameId?: NullableIntFieldUpdateOperationsInput | number | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sshEnabled?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    ephemeral?: BoolFieldUpdateOperationsInput | boolean
    loginExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginExpired?: BoolFieldUpdateOperationsInput | boolean
    inactivityExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPeers?: GroupPeerUpdateManyWithoutPeerNestedInput
    tunnelsAsTravelRouter?: TunnelTravelRouterUpdateManyWithoutPeerNestedInput
  }

  export type PeerUncheckedUpdateWithoutTunnelsAsExitNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdPeerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    connectionIp?: NullableStringFieldUpdateOperationsInput | string | null
    dnsLabel?: NullableStringFieldUpdateOperationsInput | string | null
    extraDnsLabels?: PeerUpdateextraDnsLabelsInput | string[]
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    kernelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    uiVersion?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    geonameId?: NullableIntFieldUpdateOperationsInput | number | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sshEnabled?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    ephemeral?: BoolFieldUpdateOperationsInput | boolean
    loginExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginExpired?: BoolFieldUpdateOperationsInput | boolean
    inactivityExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPeers?: GroupPeerUncheckedUpdateManyWithoutPeerNestedInput
    tunnelsAsTravelRouter?: TunnelTravelRouterUncheckedUpdateManyWithoutPeerNestedInput
  }

  export type TunnelTravelRouterUpsertWithWhereUniqueWithoutTunnelInput = {
    where: TunnelTravelRouterWhereUniqueInput
    update: XOR<TunnelTravelRouterUpdateWithoutTunnelInput, TunnelTravelRouterUncheckedUpdateWithoutTunnelInput>
    create: XOR<TunnelTravelRouterCreateWithoutTunnelInput, TunnelTravelRouterUncheckedCreateWithoutTunnelInput>
  }

  export type TunnelTravelRouterUpdateWithWhereUniqueWithoutTunnelInput = {
    where: TunnelTravelRouterWhereUniqueInput
    data: XOR<TunnelTravelRouterUpdateWithoutTunnelInput, TunnelTravelRouterUncheckedUpdateWithoutTunnelInput>
  }

  export type TunnelTravelRouterUpdateManyWithWhereWithoutTunnelInput = {
    where: TunnelTravelRouterScalarWhereInput
    data: XOR<TunnelTravelRouterUpdateManyMutationInput, TunnelTravelRouterUncheckedUpdateManyWithoutTunnelInput>
  }

  export type TunnelCreateWithoutTravelRoutersInput = {
    id?: string
    name?: string | null
    enabled?: boolean
    netbirdGroupId?: string | null
    netbirdRouteId?: string | null
    netbirdPolicyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTunnelsInput
    exitNode: PeerCreateNestedOneWithoutTunnelsAsExitNodeInput
  }

  export type TunnelUncheckedCreateWithoutTravelRoutersInput = {
    id?: string
    userId: string
    exitNodeId: string
    name?: string | null
    enabled?: boolean
    netbirdGroupId?: string | null
    netbirdRouteId?: string | null
    netbirdPolicyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TunnelCreateOrConnectWithoutTravelRoutersInput = {
    where: TunnelWhereUniqueInput
    create: XOR<TunnelCreateWithoutTravelRoutersInput, TunnelUncheckedCreateWithoutTravelRoutersInput>
  }

  export type PeerCreateWithoutTunnelsAsTravelRouterInput = {
    id?: string
    netbirdPeerId: string
    name: string
    ip?: string | null
    connectionIp?: string | null
    dnsLabel?: string | null
    extraDnsLabels?: PeerCreateextraDnsLabelsInput | string[]
    connected?: boolean
    lastSeen?: Date | string | null
    lastLogin?: Date | string | null
    os?: string | null
    kernelVersion?: string | null
    version?: string | null
    uiVersion?: string | null
    hostname?: string | null
    serialNumber?: string | null
    geonameId?: number | null
    countryCode?: string | null
    cityName?: string | null
    userId?: string | null
    sshEnabled?: boolean
    approvalRequired?: boolean
    ephemeral?: boolean
    loginExpirationEnabled?: boolean
    loginExpired?: boolean
    inactivityExpirationEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPeers?: GroupPeerCreateNestedManyWithoutPeerInput
    tunnelsAsExitNode?: TunnelCreateNestedManyWithoutExitNodeInput
  }

  export type PeerUncheckedCreateWithoutTunnelsAsTravelRouterInput = {
    id?: string
    netbirdPeerId: string
    name: string
    ip?: string | null
    connectionIp?: string | null
    dnsLabel?: string | null
    extraDnsLabels?: PeerCreateextraDnsLabelsInput | string[]
    connected?: boolean
    lastSeen?: Date | string | null
    lastLogin?: Date | string | null
    os?: string | null
    kernelVersion?: string | null
    version?: string | null
    uiVersion?: string | null
    hostname?: string | null
    serialNumber?: string | null
    geonameId?: number | null
    countryCode?: string | null
    cityName?: string | null
    userId?: string | null
    sshEnabled?: boolean
    approvalRequired?: boolean
    ephemeral?: boolean
    loginExpirationEnabled?: boolean
    loginExpired?: boolean
    inactivityExpirationEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    groupPeers?: GroupPeerUncheckedCreateNestedManyWithoutPeerInput
    tunnelsAsExitNode?: TunnelUncheckedCreateNestedManyWithoutExitNodeInput
  }

  export type PeerCreateOrConnectWithoutTunnelsAsTravelRouterInput = {
    where: PeerWhereUniqueInput
    create: XOR<PeerCreateWithoutTunnelsAsTravelRouterInput, PeerUncheckedCreateWithoutTunnelsAsTravelRouterInput>
  }

  export type TunnelUpsertWithoutTravelRoutersInput = {
    update: XOR<TunnelUpdateWithoutTravelRoutersInput, TunnelUncheckedUpdateWithoutTravelRoutersInput>
    create: XOR<TunnelCreateWithoutTravelRoutersInput, TunnelUncheckedCreateWithoutTravelRoutersInput>
    where?: TunnelWhereInput
  }

  export type TunnelUpdateToOneWithWhereWithoutTravelRoutersInput = {
    where?: TunnelWhereInput
    data: XOR<TunnelUpdateWithoutTravelRoutersInput, TunnelUncheckedUpdateWithoutTravelRoutersInput>
  }

  export type TunnelUpdateWithoutTravelRoutersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    netbirdGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdPolicyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTunnelsNestedInput
    exitNode?: PeerUpdateOneRequiredWithoutTunnelsAsExitNodeNestedInput
  }

  export type TunnelUncheckedUpdateWithoutTravelRoutersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exitNodeId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    netbirdGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdPolicyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeerUpsertWithoutTunnelsAsTravelRouterInput = {
    update: XOR<PeerUpdateWithoutTunnelsAsTravelRouterInput, PeerUncheckedUpdateWithoutTunnelsAsTravelRouterInput>
    create: XOR<PeerCreateWithoutTunnelsAsTravelRouterInput, PeerUncheckedCreateWithoutTunnelsAsTravelRouterInput>
    where?: PeerWhereInput
  }

  export type PeerUpdateToOneWithWhereWithoutTunnelsAsTravelRouterInput = {
    where?: PeerWhereInput
    data: XOR<PeerUpdateWithoutTunnelsAsTravelRouterInput, PeerUncheckedUpdateWithoutTunnelsAsTravelRouterInput>
  }

  export type PeerUpdateWithoutTunnelsAsTravelRouterInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdPeerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    connectionIp?: NullableStringFieldUpdateOperationsInput | string | null
    dnsLabel?: NullableStringFieldUpdateOperationsInput | string | null
    extraDnsLabels?: PeerUpdateextraDnsLabelsInput | string[]
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    kernelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    uiVersion?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    geonameId?: NullableIntFieldUpdateOperationsInput | number | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sshEnabled?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    ephemeral?: BoolFieldUpdateOperationsInput | boolean
    loginExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginExpired?: BoolFieldUpdateOperationsInput | boolean
    inactivityExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPeers?: GroupPeerUpdateManyWithoutPeerNestedInput
    tunnelsAsExitNode?: TunnelUpdateManyWithoutExitNodeNestedInput
  }

  export type PeerUncheckedUpdateWithoutTunnelsAsTravelRouterInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdPeerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    connectionIp?: NullableStringFieldUpdateOperationsInput | string | null
    dnsLabel?: NullableStringFieldUpdateOperationsInput | string | null
    extraDnsLabels?: PeerUpdateextraDnsLabelsInput | string[]
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    kernelVersion?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    uiVersion?: NullableStringFieldUpdateOperationsInput | string | null
    hostname?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    geonameId?: NullableIntFieldUpdateOperationsInput | number | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sshEnabled?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    ephemeral?: BoolFieldUpdateOperationsInput | boolean
    loginExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    loginExpired?: BoolFieldUpdateOperationsInput | boolean
    inactivityExpirationEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPeers?: GroupPeerUncheckedUpdateManyWithoutPeerNestedInput
    tunnelsAsExitNode?: TunnelUncheckedUpdateManyWithoutExitNodeNestedInput
  }

  export type GroupCreateManyUserInput = {
    id?: string
    netbirdGroupId: string
    name: string
    peersCount?: number
    resourcesCount?: number
    issued?: string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TunnelCreateManyUserInput = {
    id?: string
    exitNodeId: string
    name?: string | null
    enabled?: boolean
    netbirdGroupId?: string | null
    netbirdRouteId?: string | null
    netbirdPolicyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdGroupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    peersCount?: IntFieldUpdateOperationsInput | number
    resourcesCount?: IntFieldUpdateOperationsInput | number
    issued?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPeers?: GroupPeerUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdGroupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    peersCount?: IntFieldUpdateOperationsInput | number
    resourcesCount?: IntFieldUpdateOperationsInput | number
    issued?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupPeers?: GroupPeerUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    netbirdGroupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    peersCount?: IntFieldUpdateOperationsInput | number
    resourcesCount?: IntFieldUpdateOperationsInput | number
    issued?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TunnelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    netbirdGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdPolicyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exitNode?: PeerUpdateOneRequiredWithoutTunnelsAsExitNodeNestedInput
    travelRouters?: TunnelTravelRouterUpdateManyWithoutTunnelNestedInput
  }

  export type TunnelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    exitNodeId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    netbirdGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdPolicyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelRouters?: TunnelTravelRouterUncheckedUpdateManyWithoutTunnelNestedInput
  }

  export type TunnelUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    exitNodeId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    netbirdGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdPolicyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupPeerCreateManyGroupInput = {
    id?: string
    peerId: string
    addedAt?: Date | string
  }

  export type GroupPeerUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peer?: PeerUpdateOneRequiredWithoutGroupPeersNestedInput
  }

  export type GroupPeerUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    peerId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupPeerUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    peerId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupPeerCreateManyPeerInput = {
    id?: string
    groupId: string
    addedAt?: Date | string
  }

  export type TunnelCreateManyExitNodeInput = {
    id?: string
    userId: string
    name?: string | null
    enabled?: boolean
    netbirdGroupId?: string | null
    netbirdRouteId?: string | null
    netbirdPolicyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TunnelTravelRouterCreateManyPeerInput = {
    id?: string
    tunnelId: string
    addedAt?: Date | string
  }

  export type GroupPeerUpdateWithoutPeerInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutGroupPeersNestedInput
  }

  export type GroupPeerUncheckedUpdateWithoutPeerInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupPeerUncheckedUpdateManyWithoutPeerInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TunnelUpdateWithoutExitNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    netbirdGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdPolicyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTunnelsNestedInput
    travelRouters?: TunnelTravelRouterUpdateManyWithoutTunnelNestedInput
  }

  export type TunnelUncheckedUpdateWithoutExitNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    netbirdGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdPolicyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelRouters?: TunnelTravelRouterUncheckedUpdateManyWithoutTunnelNestedInput
  }

  export type TunnelUncheckedUpdateManyWithoutExitNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    netbirdGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdRouteId?: NullableStringFieldUpdateOperationsInput | string | null
    netbirdPolicyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TunnelTravelRouterUpdateWithoutPeerInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tunnel?: TunnelUpdateOneRequiredWithoutTravelRoutersNestedInput
  }

  export type TunnelTravelRouterUncheckedUpdateWithoutPeerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tunnelId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TunnelTravelRouterUncheckedUpdateManyWithoutPeerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tunnelId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TunnelTravelRouterCreateManyTunnelInput = {
    id?: string
    peerId: string
    addedAt?: Date | string
  }

  export type TunnelTravelRouterUpdateWithoutTunnelInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peer?: PeerUpdateOneRequiredWithoutTunnelsAsTravelRouterNestedInput
  }

  export type TunnelTravelRouterUncheckedUpdateWithoutTunnelInput = {
    id?: StringFieldUpdateOperationsInput | string
    peerId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TunnelTravelRouterUncheckedUpdateManyWithoutTunnelInput = {
    id?: StringFieldUpdateOperationsInput | string
    peerId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}