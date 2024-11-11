## Getting Started

```bash
npm install
npm run dev
```
## Study notes

### Nextjs 14
#### :question: What kind of components need to be client components, and what need to be server components?
- Client components: Where the component need to process interactions, like event listeners or key board actions.

:exclamation: Anything related to data security CANNOT be client commpnent(e.g. user auth functions, API tokens).
- Server components: 
#### :question: How to create layouts for different workflow?

### Form 
#### :question: What's a good way to reuse form schema?
By creating a type object in util file
#### :question: How to reuse form for sign-in and sign-up routes?
#### :question: Why do we use `authFormSchema` as a function instead of a zod object?
#### :question: Submit handler: why use arrow function instead of regular function?

### Server action and mutation