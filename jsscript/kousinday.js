const lastmm = new Date(document.lastModified);
const yearmm = lastmm.getFullYear();
const monthmm = lastmm.getMonth() + 1;
const datemm = lastmm.getDate();
/* 日付を書き換える */
const target = document.getElementById("getday");
target.textContent = "更新日" + yearmm + "/" + monthmm + "/" + datemm;