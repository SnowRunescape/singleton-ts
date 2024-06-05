# singleton-ts

[![Version](https://img.shields.io/github/package-json/v/SnowRunescape/singleton-ts)](https://github.com/SnowRunescape/react-discord-widget/releases)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/SnowRunescape/singleton-ts/blob/main/LICENSE)

**Singleton** is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

## Installation

```
npm install singleton-ts
```

## Example Usage

```typescript
import Singleton from "singleton-ts";
import Redis from "ioredis";

class Redis extends Singleton {
    public client: Redis;

    public constructor() {
        super();

        this.client = new Redis("localhost");
    }
}

const redisClient = Redis.getInstance().client;
```
