
# Vitoast - Vue Toast Package

![vitoast](https://github.com/itsalimanuel/vitoast/assets/44509661/92d43dd5-d4e4-4257-9b52-0a32cec782ec)


Vitoast is a simple and customizable toast package for Vue.js, designed to provide user-friendly notifications. It supports various options such as title, message, type (success, warning, info, error), and duration.

## Installation

You can install vitoast using npm or yarn.

```bash
# npm
npm install vitoast

# yarn
yarn add vitoast
```

## Usage

### Importing in your Vue component

```javascript
import Vue from 'vue';
import toast from 'vitoast';

Vue.use(toast);
```

### Displaying a Toast

```javascript
this.$toast.show({
  title: 'Success',
  message: 'Operation completed successfully!',
  type: 'success',
  duration: 3000, // Duration in milliseconds
});
```
### OR 
```javascript
toast({
  title: 'Success',
  message: 'Operation completed successfully!',
  type: 'success',
  duration: 3000, // Duration in milliseconds
});
```


### Options

- **title**: (String) The title of the toast.
- **message**: (String) The main message of the toast.
- **type**: (String) The type of the toast. Possible values are 'success', 'warning', 'info', and 'error'.
- **duration**: (Number) The duration for which the toast will be displayed in milliseconds.



## Authors

- Ali Khalouf
