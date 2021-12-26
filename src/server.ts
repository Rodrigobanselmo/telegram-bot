import { app } from './app';
import TelegramBot from 'node-telegram-bot-api';

require('dotenv').config();

const token = process.env.TOKEN;
const chatId = 1301254235;

const message = `
rodrigo
<b>bold</b> <strong>bold</strong>
<i>italic</i>, <em>italic</em>
<u>underline</u>, <ins>underline</ins>
<s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>
<b>bold <i>italic bold <s>italic bold strikethrough</s> <u>underline italic bold</u></i> bold</b>
<a href="http://www.example.com/">inline URL</a>
<a href="tg://user?id=1301254235">inline mention of a user</a>
<code>inline fixed-width code</code>
<pre>pre-formatted fixed-width code block</pre>
<pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>
`;

if (token) {
  const bot = new TelegramBot(token, { polling: true });
  bot.on('message', msg => {
    const chatId = msg.chat.id;
    console.log(`chatId`, chatId);
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, message, {
      parse_mode: 'HTML',
    });
  });
}
// app.listen(3333, () =>
//   console.log(`Server is running on http://localhost:${3333}/`),
// );
