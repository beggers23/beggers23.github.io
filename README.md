## Brendan Eggers Portfolio

Welcome to everything there is to know about me

This README is doing exactly what it should for me

### REFERENCES

create new scope within project

`npm init --scope=port --yes`

add to lerna so it can be used in app

`lerna add @port/<thing to add> --scope=@port/<where it will be used>`
_this is essentially yarn add to your package.json_

### App structure

apps/\*

- This is where the API and Frontend live.

packages/\*

- These are like custom packages I can install into my app at any given point
