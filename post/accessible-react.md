# Building Accessible React Applications

Accessibility should be a cornerstone of every web application. Here's how to build React apps that work for everyone.

## Semantic HTML First

Always start with proper semantic HTML elements before adding React magic.

```jsx
// Good
<button onClick={handleClick}>Submit</button>

// Bad - requires extra ARIA
<div role="button" tabIndex={0} onClick={handleClick}>
  Submit
</div>
```

## Focus Management

Managing focus is crucial for keyboard navigation and screen readers.

```jsx
function Modal({ isOpen, onClose, children }) {
  const focusRef = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      focusRef.current?.focus();
    }
  }, [isOpen]);
  
  return isOpen ? (
    <div role="dialog" aria-modal="true">
      <button ref={focusRef} onClick={onClose}>
        Close
      </button>
      {children}
    </div>
  ) : null;
}
```

## Screen Reader Support

Use ARIA attributes appropriately to provide context for assistive technologies.

## Color and Contrast

Ensure sufficient color contrast ratios and don't rely solely on color to convey information.

Building accessible apps isn't just about compliance—it's about creating inclusive experiences for all users.