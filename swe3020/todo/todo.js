var URLS = {
    prefix:"https://dannyyeom.github.io/swe3020/",
    icon:{
        uncheckedIcon = "http://www.myiconfinder.com/uploads/iconsets/256-256-61602bb3d5f907c150d29127362045e9-cross.png",
        checkedIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1TkSpSHuCEc6aB9yy_GNEYYe4uOJLqxTGtpzK4F2xdodOx2My"
    },
    list:"groupList.json",
    eachList:"list.html",
    groupAdd:"groupAdd.json"
};
data ={
    data:[{},{},{}]
};
function network(command, end, arg){
    switch(command){
    case"eachList":
        location.href = URLS.prefix + URLS.eachList+"?name="+encodeURIComponent(arg);
        break;
    case"addList":
        $.get(URLS.prefix + URLS.groupAdd,{name:arg}, end);
        
        data.data.push({name:arg});
        end(data);
        
        break;
    case"list":
        $.get(URLS.prefix + URLS.list, end);
        end(data);
        break;
    default:throw "invalid command";
    }
}