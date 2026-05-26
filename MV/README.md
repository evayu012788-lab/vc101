# Eva-AIMV 表單 (本地測試)

包含：

- `ai_mv_investment_landing_page_iframe.html` - 嵌入 Google Forms 的包裝頁。
- `ai_mv_investment_landing_page_fallback.html` - 備援靜態表單（會送到本機示範後端）。
- `backend_sample.js` - 無相依套件的 Node.js 範例後端（port 3000）。

如何本機測試：

1. 啟動後端（需要安裝 Node.js）：

```powershell
node "MV\\backend_sample.js"
```

2. 在瀏覽器開啟備援表單：

file:///C:/Users/ws906/OneDrive/桌面/Vibe%20Coding101/MV/ai_mv_investment_landing_page_fallback.html

3. 試著填寫並送出，後端 terminal 會顯示收到的 JSON。

備註：此後端僅為示範，實務上需加入驗證、CORS、安全性與持久化。

Google 表單直接提交說明：

- 若您想將資料直接送到 Google 表單（不經本機後端），備援表單中已內建「同步送出至 Google 表單」選項，會使用隱藏表單與 iframe 提交到 Google 的 `formResponse` URL。
- 已配置的 Google Action URL（示意，來源：解析）：
	`https://docs.google.com/forms/d/e/1FAIpQLScyvI98_7N6-G9N-6Y_3N6-Zg4-E_BxoG2A5W9o_7T-u-A5Qw/formResponse`
- 已配置的 Entry ID 對應：
	- `entry.1779694841` = 姓名
	- `entry.66285000` = Email
	- `entry.45759550` = 企劃類型
	- `entry.45765567` = 需求簡述

注意：若表單擁有者對表單設定了需要登入或關閉回覆，透過此方法仍無法送出。
