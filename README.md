
  # Modal Craft


## A React solution for elegantly presenting modals.


**Credits**

This Modal Craft library is inspired by [jquery-modal](https://github.com/kylefox/jquery-modal) originally created by [kylefox](https://github.com/kylefox). A special thanks to him for the initial concept and implementation.


**Introduction:**

Modal Craft is a lightweight, efficient React component for displaying modals. It offers high flexibility and customization options to easily integrate with any project.

  ## Live Demo

Check out a live demonstration of this library in action at [Modal Craft Demo](https://elvisgalvez.github.io/modal-craft-demo/).

**Why Choose Modal Craft?**


There are many modal libraries for React. However, some are bulky and complex to set up. Modal Craft stands out for its ease of use while offering a wide variety of customization options. Moreover, it focuses solely on rendering modals without adding any superfluous features.

  

**Key Features:**


-  **Transition Management**: Modal Craft offers options for controlling the duration and delay of the transition, along with the ability to add your own custom transition.

-  **Event Listeners**: The component automatically detects when the user presses the "Escape" key, thus facilitating modal closure.

-  **Customization**: You have full control over the style and classes of the modal, making it easy to perfectly integrate it into your design.

-  **Footer Management**: Whether you want to use default buttons or have an entirely custom footer, Modal Craft is flexible enough to meet your needs.

  

**Installation:**

Easily install Modal Craft via npm or yarn:

`npm install modal-craft-lib`

or

`yarn add modal-craft-lib`
  

**Basic Usage:**


Creating a modal is a breeze. You just need to use the `useState` hook to control the opening and closing of the modal:


`import React, { useState } from 'react';

import Modal from 'modal-craft-lib';

const App = () => {

const [isOpen, setIsOpen] = useState(false);

return (

<div>

<button onClick={() => setIsOpen(true)}>Open Modal</button>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>

Your content here.

</Modal>

</div>

);

};`

  

**Advanced Customization:**


Modal Craft is designed to be highly customizable. Let's explore some of the ways to tailor it to your specific needs.


1.  **Event Management**:

In addition to automatically closing the modal when the user presses the "Escape" key, you can manage other events similarly by adding additional event listeners.

2.  **Custom Transitions**:

You're not limited to the default fade effect. With the `customTransition` prop, you can specify your own CSS transition string, allowing you a wide variety of opening and closing effects.

3.  **Custom Footer**:

The component offers great flexibility in customizing the footer. If you don't need the default buttons or want to add additional elements, use the `renderFooter` prop to define your own footer.

4.  **Custom Styles and Classes**:

With the `style` and `classNames` props, you can easily adapt the look of your modal. Whether you need to override styles or add classes for responsiveness or animations, React Modal has you covered.

5.  **Display Management**:

The display of the modal is controlled by the `isOpen` prop. This means you can easily integrate the modal with other components or logic, such as validation forms or animations.

6.  **Cleanup**:

Modal Craft automatically manages the cleanup of event listeners and timers, ensuring the modal operates smoothly without causing memory leaks.

  

**PropTypes and Validation:**

Prop validation is crucial to ensure that your component works as expected. Modal Craft uses `PropTypes` to make sure the passed props are of the correct type. Here's a summary of the available props:


-  `isOpen`: A boolean indicating whether the modal should be displayed.

-  `onClose`: A function called when the modal needs to be closed.

-  `children`: The child elements to display inside the modal.

-  `className` and `classNames`: Strings and objects for adding custom classes to the modal and its child elements.

-  `fadeDuration` and `fadeDelay`: Numbers to control the fade effect of the modal.

-  `customTransition`: A string to define a custom CSS transition.

-  `customButtons`: Nodes to replace or supplement the default buttons in the footer.

-  `style`: An object to override the default styles of the modal.

-  `renderFooter`: A function to customize the modal's footer.


**Conclusion:**

Modal Craft is more than just a simple modal library. It's a comprehensive solution for creating exceptional modal experiences in your React apps. Its simplicity combined with its power makes it a must-have choice for all React developers. Try it today and see the difference for yourself!