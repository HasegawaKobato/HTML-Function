## DropDown

------------
### 描述：
　　HTML的 `<select>` 標籤，選項的內容是無法放置圖片的。這個套件可以取代`<select>`的功能並且能在選項中放置圖片等其他任何用html標籤做得出來的畫面。
  
------------
### 使用方法：
　　1. 將css與js檔放入至網頁中並連結。
　　2. index.html裡從`<div id="DropDownID1">`開始，整個複製到欲加入下拉式選單的位置中。（此ID可以修改）
　　　<span style="color:red">※可以複製多組，但是id不能重複。</span>
　　3. 打開 <span style="color:blue">setOptions.js</span> ，開始下拉式選單的設定。
 
　　其中`id="DropDownID1"`便是這個下拉選單的ID，你可以用jQuery或Javascript獲取這個ID個別對下拉式選單進行各種操作。同時，這個ID也是設定選項內容的關鍵。
  
　　DropDown.css 與 DropDown.js 是為了維持下拉選單的基本機能與基本樣式而存在的檔案。
  
　　在 <span style="color:blue">setOptions.js</span> 中，可以在 <span style="color:green">SETTING_DROPDOWN_LIST</span> 常數變數裡設定每個下拉選項的內容。包含：
　　1. 要設定的下拉選單的ID。（就是剛剛的`id="DropDownID1"`）
　　2. 這個下拉選單是否允許不選擇。（0: 不允許/ 1: 允許）
　　3. 這個下拉選單是否有預設值。（0: 沒有/ 1: 有）
　　4. 如果有預設值，預設選項為？（參考第五點的選項順序，索引值從1開始）
　　5. 這個下拉選單包含的所有選項。（以字串表示，用`,`區分每個選項。）
　　　<span style="color:red">※不只是輸入字串，也可以輸入html標籤來當作選項內容。</span>
   
　　如果不想透過 <span style="color:blue">setOptions.js</span> 來設定選項，想要自己直接在HTML上面自行定義也可以。關於預設值與各個選項的寫法都已經在 index.html 中註解起來了，若有需要的話可以自行解開或自行新增選項。
　　<span style="color:red">※注意：`id="default"`為預設選項，必須只有一個。</span>
  
　　設定完成以後，便大功告成囉！