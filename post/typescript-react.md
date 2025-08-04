# TypeScript Best Practices in React

TypeScript has become the standard for large React applications. Here are the patterns that will make your code more maintainable.

## Proper Type Definitions

Start with clear, specific types rather than using `any`.

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  roles: Role[];
}

interface Props {
  user: User;
  onUpdate: (user: User) => void;
  isLoading?: boolean;
}
```

## Generic Components

Use generics to create reusable components with type safety.

```typescript
interface SelectProps<T> {
  items: T[];
  value: T | null;
  onChange: (value: T) => void;
  renderItem: (item: T) => React.ReactNode;
}

function Select<T>({ items, value, onChange, renderItem }: SelectProps<T>) {
  return (
    <select onChange={(e) => onChange(items[parseInt(e.target.value)])}>
      {items.map((item, index) => (
        <option key={index} value={index}>
          {renderItem(item)}
        </option>
      ))}
    </select>
  );
}
```

## Discriminated Unions

Use discriminated unions for components with different states.

```typescript
type LoadingState = 
  | { status: 'loading' }
  | { status: 'success'; data: User[] }
  | { status: 'error'; message: string };
```

TypeScript makes React development more predictable and catches errors before they reach production.