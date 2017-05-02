# Changelog

## [Unreleased]

## [2.0.0] - 2017-05-02
### Added
- Added new `tslint` [v5.0.0](https://github.com/palantir/tslint/blob/master/CHANGELOG.md#v500), [v5.1.0](https://github.com/palantir/tslint/blob/master/CHANGELOG.md#v510) rules and new `tslint-react`[v2.6.0](https://github.com/palantir/tslint-react/releases/tag/2.6.0) rules [(#61)](https://github.com/Shopify/tslint-config-shopify/pull/61)
    * `no-invalid-template-strings`
    * `no-sparse-arrays`
    * `no-unnecessary-callback-wrapper`
    * `jsx-no-bind` (tslint-react)
    * `no-reference-import`
    * `prefer-template`
    * `return-undefined`

## [1.5.0] - 2017-03-15
### Added
- Update tslint react to v2.5.0 [#52](https://github.com/Shopify/tslint-config-shopify/pull/52)
- Created a custom rule for import-type-order [#48](https://github.com/Shopify/tslint-config-shopify/pull/48)


## [1.4.0] - 2017-03-06
### Added
- Added new tslint rules from [v4.4.0](https://github.com/palantir/tslint/blob/master/CHANGELOG.md#v440) and [v4.5.0](https://github.com/palantir/tslint/blob/master/CHANGELOG.md#v450) releases [(#33)](https://github.com/Shopify/tslint-config-shopify/pull/33):
    - `arrow-return-shorthand`
    - `await-promise`
    - `ban-types`
    - `match-default-export-name`
    - `newline-before-return`
    - `no-duplicate-super`
    - `no-floating-promises`
    - `no-import-side-effect`
    - `no-misused-new`
    - `no-non-null-assertion`
    - `no-unbound-method`
    - `no-unnecessary-initializer`
    - `no-unnecessary-qualifier`
    - `no-unsafe-any`
    - `prefer-function-over-method`
    - `prefer-method-signature`
    - `strict-type-predicates`

## [1.3.0] - 2017-03-01
### Add
- Add Custom rules: `trailing-comma-interface`, `jsx-boolean-value` [(#34)](https://github.com/Shopify/tslint-config-shopify/pull/34)

## [1.2.0] - 2017-02-28
### Add
- Migrate code base to fully utilize Typescript [(#31)](https://github.com/Shopify/tslint-config-shopify/pull/31)

## [1.1.5] - 2017-02-22
### Changed
- Add `tslint-config-shopify/base`, `tslint-config-shopify/typed`, and `tslint-config-shopify/untyped` configs [(#29)](https://github.com/Shopify/tslint-config-shopify/pull/29)

## [1.1.4] - 2017-02-17
### Changed
- Update `variable-name` rule [(27)](https://github.com/Shopify/tslint-config-shopify/pull/27)
- Remove commitizen and cz-conventional-changelog [(#26) (https://github.com/Shopify/tslint-config-shopify/pull/26)

## [1.1.3] - 2017-02-09
### Changed
- Update `typedef` rule ([#23](https://github.com/Shopify/tslint-config-shopify/pull/23))

## [1.1.2] - 2017-02-06
### Changed
- Update `space-before-function-paren` rule ([#20](https://github.com/Shopify/tslint-config-shopify/pull/20))


## [1.1.1] - 2017-02-01
### Changed
- Moved [`tslint-react`](https://github.com/palantir/tslint-react) as a dependency ([#17](https://github.com/Shopify/tslint-config-shopify/pull/17/files))


## [1.1.0] - 2017-01-31
### Added
- Added [`tslint-react`](https://github.com/palantir/tslint-react) ([#12](https://github.com/Shopify/tslint-config-shopify/pull/12))

### Changed
- Updated `triple-equals` to include `allow-null-check` ([#13](https://github.com/Shopify/tslint-config-shopify/pull/13))

## [1.0.2] - 2017-01-23

### Changed
- Updated `no-inferred-empty-object-type` rule ([#7](https://github.com/Shopify/tslint-config-shopify/pull/7))

## [1.0.1] - 2017-01-23
### Added

- Initial release ([#5](https://github.com/Shopify/tslint-config-shopify/pull/5))
