import os
import requests

# 建議正式環境改用環境變數，測試時可以直接填入你的 Token 和 User ID
LINE_TOKEN = os.getenv("LINE_ACCESS_TOKEN", "ryFj7ll6seqoUqJdhcBcm2g7uV+nm8VF/exP+p2aDFZe+MDu70sjC5RzqMuzbXhpaVrP9kCyZ+Xfk7BL2KHe0JoQArH56Bu7ZimMEqDO+Q5D4Grc73NQ1QXkwTdpkKhc3BcZYRIXKcFa1jx3CT9CkwdB04t89/1O/w1cDnyilFU=")
USER_ID = os.getenv("LINE_USER_ID", "Ubeac01d0c5ef68e009451b2a82ea324d")

def send_line_notification(message_text: str):
    """發送 LINE 推播通知的共用函數"""
    url = "https://api.line.me/v2/bot/message/push"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {LINE_TOKEN}"
    }
    payload = {
        "to": USER_ID,
        "messages": [
            {
                "type": "text",
                "text": message_text
            }
        ]
    }
    
    response = requests.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        print("LINE 通知發送成功！")
        return True
    else:
        print(f"發送失敗，錯誤代碼：{response.status_code}")
        print(response.text)
        return False