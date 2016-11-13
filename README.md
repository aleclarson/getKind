
# getKind 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Takes a type and returns its supertype (if one exists).

```coffee
getKind = require "getKind"

getKind Function  # => Object

getKind Object    # => undefined

getKind null      # => undefined
```
