# Iframe Tool

Iframe tool to create an iframe for the [Editor.js](https://ifmo.su/editor).

## Installation

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...
  
  tools: {
    ...
    iframe: {
      class: Iframe,
    },
  },
  
  ...
});
```

## Config Params

This Tool has no config params

## Output data

```json
{
    "type" : "iframe",
    "data" : {
      "url": "https://youriframeurl.com"
    }
}
```
