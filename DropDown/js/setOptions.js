
// **************************************************
// id
// => 指定的ID
// canCancel 
// => 是否允許不選 0: 不允許/ 1: 允許
// hasDefault
// => 是否有預設值（沒有則為第一個選項） 0: 沒有/ 1: 有
// defaultIndex
// => 預設值的索引（參考options）
// options
// => 下拉選單內的選項（起始索引為1）
// **************************************************
const SETTING_DROPDOWN_LIST = [{
    id: 'DropDownID1',
    canCancel: 0,
    hasDefault: 1,
    defaultIndex: 2,
    options: '選項1, 選項2'
}];


// ※※※※※※※※※※※※※※※※※※※※※※※※※※※※
// ※※※※※※※※※※初始化下拉式選單※※※※※※※※※※
// ※※※※※※※※※※※※※※※※※※※※※※※※※※※※
for (var i = 0; i < SETTING_DROPDOWN_LIST.length; i++) {
    var item = SETTING_DROPDOWN_LIST[i];
    var options;
    for (var a = 0; a < item.options.length; a++) {
        options = SplitStringWithComma(item.options);
    }
    if (item.canCancel == 0) {
        if (item.hasDefault == 0) {
            $('#' + item.id + ' #defaultArea > ul').append('<li id="default" class="option" value="1">' + options[0] + '</li>');
        } else {
            $('#' + item.id + ' #defaultArea > ul').append('<li id="default" class="option" value="' + item.defaultIndex + '">' +
                options[item.defaultIndex - 1] + '</li>');
        }
    } else {
        if (item.hasDefault == 0) {
            $('#' + item.id + ' #defaultArea > ul').append('<li id="default" class="option" value=" -- 選擇 -- "> -- 選擇 -- </li>');
        } else {
            $('#' + item.id + ' #defaultArea > ul').append('<li id="default" class="option" value="' + item.defaultIndex + '">' +
                options[item.defaultIndex - 1] + '</li>');
        }
    }

    if (item.canCancel == 1) {
        $('#' + item.id + ' .options > ul').append('<li class="option" onclick="javascript:SelectItem(this)" value=" -- 選擇 -- "> -- 選擇 -- </li>');
    }
    for (var a = 0; a < options.length; a++) {
        $('#' + item.id + ' .options > ul').append('<li class="option" onclick="javascript:SelectItem(this)" value="' + (a + 1) + '">' + options[a] + '</li>');
    }
}

function SplitStringWithComma(string) {
    var arr = [];
    var stop = false;
    while (!stop) {
        if (string.indexOf(',') != -1) {
            arr.push(string.substr(0, string.indexOf(',')).trim());
            string = string.substr(string.indexOf(',') + 1, string.length);
        } else {
            arr.push(string.trim());
            stop = true;
        }
    }
    return arr;
}