import requests

# 填入你剛剛取得的資訊
CHANNEL_ACCESS_TOKEN = "ryFj7ll6seqoUqJdhcBcm2g7uV+nm8VF/exP+p2aDFZe+MDu70sjC5RzqMuzbXhpaVrP9kCyZ+Xfk7BL2KHe0JoQArH56Bu7ZimMEqDO+Q5D4Grc73NQ1QXkwTdpkKhc3BcZYRIXKcFa1jx3CT9CkwdB04t89/1O/w1cDnyilFU="
USER_ID = "Ubeac01d0c5ef68e009451b2a82ea324d"

def send_line_message(message):
    url = "https://api.line.me/v2/bot/message/push"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {CHANNEL_ACCESS_TOKEN}"
    }
    data = {
        "to": USER_ID,
        "messages": [
            {
                "type": "text",
                "text": message
            }
        ]
    }
    
    response = requests.post(url, headers=headers, json=data)
    
    if response.status_code == 200:
        print("訊息發送成功！快看手機有沒有叮咚！")
    else:
        print(f"發送失敗，錯誤代碼：{response.status_code}")
        print(response.text)

if __name__ == "__main__":
    send_line_message("安安！這是我的第一個 Python 自動化 LINE 機器人通知測試！")