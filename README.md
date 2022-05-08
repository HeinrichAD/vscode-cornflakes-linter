# Readme

"cornflakes-linter" is a wrapper for `flake8`.

** added `onType` linting (0.5) **

vscode currently already has flake8 integration HOWEVER it doesn't play nicely with
flake8 plugins in that the regex can't parse the output correctly. This means that the
errors/warnings/information do not show up in the problems tab. This extension rectifies
that.

## Quick Start.

1. Make sure you have installed flake8 somewhere..
2. Set the path to the flake8 in `Settings.json` (or search in the vscode settings tab).

```json
{
	"cornflakes.linter.executablePath": "path/to/venvs/myvenv/bin/flake8"
}
```

3. Open a `.py` file and then save it and the extension will run showing all of the lint issues in the problems tab.


## Configuration

### For the extension
You need to include the full path to the flake8 executable that you wish to use.

To find the path to the appropriate flake8 you can _(on *nix)_ do. I'm sure you can do something similar on Windows too.

```bash
which flake8
```

The set it in `Settings.json`

```json
{
	"cornflakes.linter.executablePath": "path/to/venvs/myvenv/bin/flake8"
}
```

#### Change when the linter is run
There are a couple of options here so that you can decide when to re-lint the
current file. You can choose either on save or on type! Again all settings are
available through the settings page, or the json.

```json
{
	"cornflakes.linter.run": "onType"
}
```

### Flake8 configuration

The way to configure flake8 extensions / settings / ignores and all other configuration
for flake8 is by using the standard [flake8 configuration](https://flake8.pycqa.org/en/latest/user/configuration.html)
rules. The extension will be run from the root directory of the workspace.

Personally I like a `tox.ini` in the workspace root.

```ini
[flake8]
ignore = E226,E302,E41
max-line-length = 88
exclude = tests/*
max-complexity = 10
```

## Acknowledgements

And is virtually a direct copy of [ruby-linter](https://github.com/hoovercj/vscode-ruby-linter).

The extension architecture is based off of the PHPValidationProvider from the built-in
[php extension](https://github.com/Microsoft/vscode/tree/master/extensions/php).

## Attributions

<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>

<!-- cspell:ignore venvs,myvenv,Smashicons,Flaticon,flaticon -->
