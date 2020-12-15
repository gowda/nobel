# nobel-prizes
![](https://github.com/gowda/nobel-prizes/workflows/rubocop/badge.svg)
![](https://github.com/gowda/nobel-prizes/workflows/eslint/badge.svg)

light-weight web interface for browsing through nobel prize winners list

## Usage
### Setup & install dependencies

```bash
$ bin/setup
```

### Lint
```bash
$ bin/rubocop
$ npm --prefix frontend run lint
```

### Run development server

[Procfile](Procfile) defines required services. [foreman](https://github.com/ddollar/foreman) can be used to start all of them:
```bash
$ foreman start
```

By default `rails` application listens at [http://localhost:4224](http://localhost:4224)
& `webpack-dev-server` at [http://localhost:42024](http://localhost:42024).
Ports for backend & frontend development servers can be configured in `.env`:

```bash
# .env
BACKEND_PORT=2442
FRONTEND_PORT=24042
```

## License

> "THE BEER-WARE LICENSE" (Revision 42):
> [Gowda](https://github.com/gowda) wrote this file. As long as you retain
> this notice you can do whatever you want with this stuff. If we meet
> some day, and you think this stuff is worth it, you can buy me a beer in return.
