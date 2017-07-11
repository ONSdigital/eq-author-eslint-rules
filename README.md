# eslint-config-ons-author

Shared config for eq-author projects.

## Installation

```bash
yarn add ONSdigital/eslint-config-ons-author
```

## Usage

There are two configs available in this repo - one general (`eslint-config-ons-author`), and one react-specific (`eslint-config-ons-author/react`). Use one or both, depending on your needs.

They should be added to the `extends` section of your eslint config, like so:

```js
{
  "extends": [
    "eslint-config-ons-author",
    "eslint-config-ons-author/react"
  ]
}
```

## Releasing

```bash
git checkout master
yarn version # enter new version
git push origin master --tags
```

These commands perform the following actions:

* Switch to master
* Bump version number in `package.json`
* Commit changes to `package.json`
* Create git tag for that version
* Push changes and tag to github