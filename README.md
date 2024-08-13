# EZModules Documentation

## FirstComp

`FirstComp` is a React component provided by the EZModules library. It is a simple, reusable component designed to display a title and content in a styled container.

### Installation

To use `FirstComp`, you first need to install the EZModules library. You can do this via npm or yarn:

```bash
npm install ezmodules
# or
yarn add ezmodules
```


### Importing the Component

You can import `FirstComp` into your React application as follows:

```jsx
import { FirstComp } from 'ezmodules';
```

### Usage

The `FirstComp` component accepts two props:

- `title` (string): The title to be displayed at the top of the component.
- `content` (string): The content to be displayed below the title.

Here is a basic example of how to use `FirstComp`:

```jsx
import React from 'react';
import { FirstComp } from 'ezmodules';

function App() {
  return (
    <div className="App">
      <FirstComp title="Welcome to EZModules" content="This is the content of the FirstComp component." />
    </div>
  );
}

export default App;
```

### Props

| Prop    | Type   | Description                     | Default |
|---------|--------|---------------------------------|---------|
| `title` | string | The title text to display.       | None    |
| `content` | string | The content text to display.     | None    |

### CSS and Styling

`FirstComp` comes with built-in styles that ensure the component is responsive and looks good on both mobile and desktop devices. You can customize the styles by overriding the default CSS classes if needed.

### Example

```jsx
import React from 'react';
import { FirstComp } from 'ezmodules';

function Example() {
  return (
    <div>
      <FirstComp 
        title="My Custom Title" 
        content="This is some custom content. You can style this component using CSS." 
      />
    </div>
  );
}

export default Example;
```

### Testing and Development

To test the `FirstComp` component in your local development environment:

1. **Start Your Development Server**:
   ```bash
   npm start
   # or
   yarn start
   ```

2. **View in Browser**:
   Open your application in a web browser (usually at `http://localhost:3000` or `http://localhost:5173` for Vite) to see the `FirstComp` component in action.

3. **Check Responsiveness**:
   Use browser developer tools to test the component on different screen sizes and devices.

### Contribution

If you want to contribute to the EZModules library or suggest improvements:

1. **Fork the Repository**: Fork the EZModules repository on GitHub.
2. **Clone Your Fork**: Clone your forked repository to your local machine.
3. **Create a Branch**: Create a new branch for your changes.
4. **Make Changes**: Implement your changes or additions.
5. **Submit a Pull Request**: Push your branch to GitHub and submit a pull request.

### License

EZModules is open-source and available under the [MIT License](LICENSE).