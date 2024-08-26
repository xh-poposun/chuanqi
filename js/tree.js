var keys={
    a:false,b:false,c:false,d:false,e:false,f:false,g:false,
    h:false,i:false,j:false,k:false,l:false,m:false,n:false,
    o:false,p:false,q:false,r:false,s:false,t:false,
    u:false,v:false,w:false,x:false,y:false,z:false,
    space: false,shift:false,
}
var strstrstr="abcdefghijklmnopqrstuvwxyz"
var charToNum={"a":65,"b":66,"c":67,"d":68,"e":69,"f":70,"g":71,
    "h":72,"i":73,"j":74,"k":75,"l":76,"m":77,"n":78,
    "o":79,"p":80,"q":81,"r":82,"s":83,"t":84,
    "u":85,"v":86,"w":87,"x":88,"y":89,"z":90}
function keydown(event) {
    if(event.keyCode==16){
        keys["shift"]=true;
    }
    else if(event.keyCode==32){
        keys["space"]=true;
    }
    else if(event.keyCode>=65 && event.keyCode<=90){
        keys[strstrstr[event.keyCode-65]]=true
    }
}
function keyup(event){
    if(event.keyCode==16){
        keys["shift"]=false;
    }
    else if(event.keyCode==32){
        keys["space"]=false;
    }
    else if(event.keyCode>=65 && event.keyCode<=90){
        keys[strstrstr[event.keyCode-65]]=false
    }
}
function random() {
    player.seed1 >>>= 0; player.seed2 >>>= 0; player.seed3 >>>= 0; player.seed4 >>>= 0;
    let cast32 = (player.seed1 + player.seed2) | 0;
    player.seed1 = player.seed2 ^ player.seed2 >>> 9;
    player.seed2 = player.seed3 + (player.seed3 << 3) | 0;
    player.seed3 = (player.seed3 << 21 | player.seed3 >>> 11);
    player.seed4 = player.seed4 + 1 | 0;
    cast32 = cast32 + player.seed4 | 0;
    player.seed3 = player.seed3 + cast32 | 0;
    return (cast32 >>> 0) / 4294967296;
}
addLayer("tree-tab",{
    update(diff){
        {//update fix
        if(document.getElementById("outer")!==undefined && document.getElementById("outer")!==null)
        document.getElementById("outer")["style"]["background-color"]="rgba(0,0,0,"+player.themeId*0.1+")"
        if(document.getElementsByClassName("upgTable")[0]===undefined && document.getElementsByClassName("upgTable")[0]===null){

        }
        else{
            document.getElementById("text")["style"]["left"]=(document.getElementsByClassName("upgTable")[0].getBoundingClientRect().width-document.getElementById("text").getBoundingClientRect().width)/2+"px"
        }
        while(player.maxKillDifficulty.length<monster.length){
            player.maxKillDifficulty.push(-1)
        }
        while(player.bag.length<bagDisplayList.length){
            player.bag.push(0)
        }
        while(player.pelletNum.length<pelletAttribute.length){
            player.pelletNum.push([0,0,0])
        }
        while(player.weaponType.length<weaponAttribute.length){
            player.weaponType.push(0)
        }
        }
        player.devSpeed=1
        let dif=(Date.now()/1e3-player.tmtmtm)
        // dif*=1000
        player.tmtmtm=Date.now()/1e3
        CalcAttribute()
        if(player.inHanging!=-1){
            player.hangingTime+=dif
        }
        if(player.inFight!=-1){
            player.fightingTime+=dif
            while(player.fightingTime>=0.5){
                DealFight()
            }
        }
    },
    tabFormat:[
        "blank",
        "blank",
        ["display-text",function(){
            let str=""
            str+="<table><tr>"
            str+="<td>"+format(player.lv,0)+"级</td>"
            str+="<td style='width:50px'></td>"
            str+="<td>战力"+format(player.fightAbility,0)+"</td>"
            str+="<td style='width:50px'></td>"
            str+="<td>经验 "+format(player.exp,0)+"/"+format(CalcExpNeed(),0)+"</td>"
            str+="<td style='width:50px'></td>"
            str+="<td>金币 "+format(player.money,0)+"</td>"
            str+="</tr></table>"
            return str
        }],
        "blank",
        ["display-text",function(){
            let str=""
            str+="<table><tr>"
            str+="<td><button onclick='player.mainTabId=-1,player.nowBigTab="+'"main"'+"'>主页</button></td>"
            str+="<td><button style='margin-left:-10px' onclick='"+(player.onMonsterId!=-1?"player.fightTabId="+(10000+player.onMonsterId)+",":"")+"player.nowBigTab="+'"fight"'+"'>挂机</button></td>"
            str+="</tr></table><br>"

            if(player.nowBigTab=='main'){
                if(player.mainTabId==-1){
                    for(let i=0;i<subTabList[0].length;i++){
                        str+="<button style='margin-left:2px' onclick='player.mainTabId="+i+"'>"+subTabList[0][i]+"</button>"
                    }
                }
                else{
                    str+=getMainSubTabDisplay()
                    str+="<br>"
                    str+="<button onclick='player.mainTabId=-1'>返回</button>"
                }
            }
            else if(player.nowBigTab=='fight'){
                if(player.fightTabId==-1){
                    for(let i=0;i<subTabList[1].length;i++){
                        str+="<button style='margin-left:2px' onclick='player.fightTabId="+i+"'>"+subTabList[1][i]+"</button>"
                    }
                }
                else{
                    str+=getFightSubTabDisplay()
                    str+="<br>"
                    str+="<button onclick='player.fightTabId=-1'>返回</button>"
                }
            }
            return str
        }],
        "blank",
        ["display-text",function(){
            let str=""
            if((player.nowBigTab=='main' && player.mainTabId==-1) || (player.nowBigTab=='fight' && player.fightTabId<=99999)){
                str+="<div style='padding-left:10px;padding-top:10px;text-align:left;position:absolute;left:50%;top:50%;transform:translate(-300px,0px);height:400px;width:600px;border:2px solid black;overflow:auto'>"
                for(let i=logs.length-1;i>=Math.max(0,logs.length-100);i--){
                    str+=logs[i]
                    str+="<br>"
                }
                str+="</div>"
            }
            return str
        }]
    ],
    previousTab: "",
    leftTab: true,
})