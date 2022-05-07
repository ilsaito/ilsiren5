/* 更新日の取得 */
const last = new Date(document.lastModified);
const year = last.getFullYear();
const month = last.getMonth() + 1;
const date = last.getDate();
/* 日付を書き換える */
const target = document.getElementById("getday");
target.textContent = "更新" + year + "年" + month + "月" + date + "日";