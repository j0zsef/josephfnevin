# Simple Chatbot
I created a simple ChatGPT chatbot. I wanted to do a proof of concept with Vercel's AI SDK. Vercel's AI SDK proved to be very powerful and easy to integrate with.

## Technologies
- React
- Next
- ChatGPT
- Vercel's AI SDK
- Material UI

## UI
The styling is very basic, nothing special. I used material UI for the styling:

![chatbot.png](/images/chatbot.png)

## Vercel AI SDK

Vercel's `useChat()` hook made the integration with ChatGPT seamless. The hook will respond to a user's input and generate a response. Here is an example from my code:

```typescript
const Home = () => {
  const {
    messages, input, handleInputChange, handleSubmit,
  } = useChat();

  return (
    <main>
      <Grid2 container sx={{ height: '98vh' }}>
        <Container>
          <Paper square={false} sx={{ height: '98vh', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
              <ChatHistory chatHistory={messages} />
            </Box>
            <ChatForm
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </Paper>
        </Container>
      </Grid2>
    </main>
  );
};
```
That's it!

This very basic implementation shows:
- `useChat()` hook will handle the input and output of the chatbot.
- `ChatHistoy` component will display the chat history.
- `ChatForm` component will handle the user input.

More on the ChatGPT integration from Vercel can be found [here](https://sdk.vercel.ai/docs/reference/ai-sdk-ui/use-chat).

## Sources
- Source Code: [here](https://github.com/j0zsef/ai-chatbot)
- Vercel AI SDK: [here](https://sdk.vercel.ai/docs/reference/ai-sdk-ui)


