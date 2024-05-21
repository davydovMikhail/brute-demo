import { useCallback } from "react";
const botToken = process.env.REACT_APP_BOT_TOKEN;
const chatId = process.env.REACT_APP_CHAT_ID;
const api = `https://api.telegram.org/bot${botToken}/sendMessage`

export const useSendMessage = () => {
  
    return useCallback(
      async (message: string) => {
        try {
            await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
            });
        } catch (e: any) {
          console.error(e);
        }
      },
      []
    );
  };