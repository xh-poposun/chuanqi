function TryMakePellet(id,wh){
    let count=Math.min(100-player.pelletNum[id][wh],Math.min(player.money.div(pelletAttribute[id][7]).floor(),player.bag[pelletAttribute[id][6]]))
    player.bag[pelletAttribute[id][6]]-=count
    player.money=player.money.sub(pelletAttribute[id][7].mul(count))
    player.pelletNum[id][wh]+=count
    console.log(count)
    if(count==0){
        NotEnough(pelletAttribute[id][6])
    }
    else{
        logs.push("成功炼制 "+(id+1)+"品"+["生命","攻击","防御"][wh]+"丹药×"+count)
    }
}
function TryBuildWeapon(id,wh){
    if(player.bag[weaponAttribute[id][3]]<(player.weaponType[id]+1)*weaponAttribute[id][4]){
        NotEnough(weaponAttribute[id][3])
    }
    else{
        player.weaponType[id]+=1
        player.bag[weaponAttribute[id][3]]-=player.weaponType[id]*weaponAttribute[id][4]
        logs.push(weaponFrontName[player.weaponType[id]-1]+weaponAttribute[id][0]
            +" 成功炼制成 "+weaponFrontName[player.weaponType[id]]+weaponAttribute[id][0])
    }
}
function NotEnough(id){
    logs.push("材料不够 ("+idToName[id]+" 出自 "+idFrom[id]+")")
}
function TryUpgradeMeridian(id){
    if(player.meridianLv[id][0]==meridianAttribute.length){
        return
    }
    if(player.meridianLv[id][1]==10 && player.money.gte(n(10000).mul(meridianAttribute[player.meridianLv[id][0]][0]))){
        player.money=player.money.sub(n(10000).mul(meridianAttribute[player.meridianLv[id][0]][0]))
        player.meridianLv[id][0]+=1
        player.meridianLv[id][1]=0
    }
    else if(player.meridianLv[id][1]<10 && player.bag[3]>=meridianAttribute[player.meridianLv[id][0]][0]){
        player.bag[3]-=meridianAttribute[player.meridianLv[id][0]][0]
        player.meridianLv[id][1]+=1
    }
    else{
        NotEnough(3)
    }
}
function TryUpgradeImmortal(id){
    if(player.cultivation.lt(immortalAttribute[player.immortalLv][3])){
        logs.push("修为不够")
    }
    else{
        player.cultivation=player.cultivation.sub(immortalAttribute[player.immortalLv][3])
        if(random()<=0.1*(player.immortalTimes+1)){
            player.immortalLv+=1
            player.immortalTimes=0
            logs.push("飞升 "+immortalAttribute[player.immortalLv][0]+" 成功")
        }
        else{
            player.immortalTimes+=1
            logs.push("飞升 "+immortalAttribute[player.immortalLv+1][0]+" 失败 , 再接再厉")
        }
    }
}
function validateNumber(event) {
    var input = event.target;
    if(input.value.length==0){
        input.value='0'
        return
    }
    if (input.value % 1 !== 0 || input.value <= 0) {
      // 输入值不是整数或者小于等于0，则设置为上一个有效值
      input.value = input.oldValue;
    } else {
      // 有效值更新
      input.oldValue = input.value;
    }
  }