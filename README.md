# @henrytkirk/react-tag-input-component

A forked version of @react-tag-input-component that's headless.

## 🔧 Installation

```bash
npm i @henrytkirk/react-tag-input-component    # npm
yarn add @henrytkirk/react-tag-input-component # yarn
```

## 📦 Example

![Example](https://user-images.githubusercontent.com/5774849/179722762-4d7feef6-52af-4662-ba97-129191fb4f26.gif)

[![Edit react-tag-input-component](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-tag-input-component-rgf97?fontsize=14&hidenavigation=1&theme=dark)

```tsx
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const Example = () => {
  const [selected, setSelected] = useState(["papaya"]);

  return (
    <div>
      <h1>Add Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="enter fruits"
      />
      <em>press enter or comma to add new tag</em>
    </div>
  );
};

export default Example;
```

## 👀 Props

| Prop                | Description                                                                     | Type                                               | Default         |
| ------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------- | --------------- |
| `name`              | value for name of input                                                         | `string`                                           |                 |
| `placeholder`       | placeholder for text input                                                      | `string`                                           |                 |
| `value`             | initial tags                                                                    | `string[]`                                         | `[]`            |
| `onChange`          | onChange callback (added/removed)                                               | `string[]`                                         |                 |
| `classNames`        | className for styling input and tags (i.e {tag:'tag-cls', input: 'input-cls'})  | `object[tag, input]`                               |                 |
| `onKeyUp`           | input `onKeyUp` callback                                                        | `event`                                            |                 |
| `onBlur`            | input `onBlur` callback                                                         | `event`                                            |                 |
| `separators`         | when to add tag (i.e. `"Enter"`, `" "`)                                        | `string[]`                                         | `["Enter"]`     |
| `removers`          | Remove last tag if textbox empty and `Backspace` is pressed                     | `string[]`                                         | `["Backspace"]` |
| `onExisting`        | if tag is already added then callback                                           | `(tag: string) => void`                            |                 |
| `onRemoved`         | on tag removed callback                                                         | `(tag: string) => void`                            |                 |
| `beforeAddValidate` | Custom validation before adding tag                                             | `(tag: string, existingTags: string[]) => boolean` |                 |
| `isEditOnRemove`    | Remove the tag but keep the word in the input to edit it on using Backscape Key | `boolean`                                          | `false`         |

## 💅 Themeing

You can override CSS variables to customize the appearance

```css
.rti--container {
  --rti-bg: "#fff",
  --rti-border: "#ccc",
  --rti-main: "#3182ce",
  --rti-radius: "0.375rem",
  --rti-s: "0.5rem", /* spacing */
  --rti-tag: "#edf2f7",
  --rti-tag-remove: "#e53e3e",
}
```

> use `!important` if CSS variables are not getting applied

## 🤠 Credits

- [TypeScript](https://github.com/microsoft/typescript)
- [TSDX](https://github.com/jaredpalmer/tsdx)
- [Goober](https://github.com/cristianbote/goober)

## 📜 License

MIT &copy; [harshzalavadiya](https://github.com/harshzalavadiya)
