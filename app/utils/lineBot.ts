export async function sendLineNotification(messageText: string) {
    const LINE_TOKEN = process.env.LINE_ACCESS_TOKEN || "ryFj7ll6seqoUqJdhcBcm2g7uV+nm8VF/exP+p2aDFZe+MDu70sjC5RzqMuzbXhpaVrP9kCyZ+Xfk7BL2KHe0JoQArH56Bu7ZimMEqDO+Q5D4Grc73NQ1QXkwTdpkKhc3BcZYRIXKcFa1jx3CT9CkwdB04t89/1O/w1cDnyilFU=";
    const USER_ID = process.env.LINE_USER_ID || "Ubeac01d05ef68e009451b2a82ea324d";
  
    const url = "https://api.line.me/v2/bot/message/push";
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${LINE_TOKEN}`
        },
        body: JSON.stringify({
          to: USER_ID,
          messages: [
            {
              type: "text",
              text: messageText
            }
          ]
        })
      });
  
      if (response.ok) {
        console.log("LINE 通知發送成功！");
        return true;
      } else {
        const errorText = await response.text();
        console.error("發送失敗，錯誤訊息：", errorText);
        return false;
      }
    } catch (error) {
      console.error("發送 LINE 通知時發生例外錯誤：", error);
      return false;
    }
  }