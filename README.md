# parcel-plugin-ejs-template

EJS support for Parcel bundler

## Installation

```bash
npm install -D parcel-plugin-ejs-template
```

## Usage

Use your `.ejs` files as entry files to start bundling using `parcel-bundler`.

## Customization

You can pass some local variables to your `.ejs` file by creating a config file named `ejs.config.js` in your directory. File schema should be like following example:

```js
module.export = {
  locals: {
    foo: "bar",
  },
};
```

These variables will be available in your `.ejs` file.

```html
<div>
  <%= locals.foo %>
</div>
```

For more information, please refer to https://parceljs.org/ and https://ejs.co/
