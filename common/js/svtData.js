﻿master.mstSvt=master.mstSvt.sort(sortByElmentNo);function sortByElmentNo(e,h){return e.collectionNo-h.collectionNo}
function svtDataTable(e){var h=["","0000ff","ff0000","00ff00"],l=" A B C D E EX ? ? \uff0d".split(" "),t="  + ++ ? ? ? ? ? ".split(" "),p=[[2E3,"\u795e\u6027"],[2001,"\u4eba\u578b"],[2002,"\u9f8d"],[2004,"\u7f85\u99ac"],[2005,"\u731b\u7378"],[2007,"\u963f\u723e\u6258\u8389\u4e9e\u81c9"],[2008,"\u88ab\u300c\u5929\u5730\u4e56\u96e2\u958b\u8f9f\u4e4b\u661f\u300d\u6240\u524b"],[2009,"\u9a0e\u4e58"],[2010,"\u4e9e\u745f"],[2011,"\u88ab\u300c\u4eba\u985e\u795e\u8a71\u30fb\u96f7\u96fb\u964d\u81e8\u300d\u6240\u524b"],
[2012,"\u611b\u4eba"],[2018,"\u6b7b\u9748\u8207\u60e1\u9b54"]],c,k;for(k=0;k<master.mstSvt.length&&master.mstSvt[k].id!=e;k++);var n;for(n=0;n<master.mstSvtLimit.length&&master.mstSvtLimit[n].svtId!=e;n++);var a="",a="<tr><td rowspan=7 align=center style='width:25%;'>"+("<img src=common/images/Servant/"+e+"_status_servant_2.png onerror=\"javascript:this.style='display:none'\" width=256 height=256></img>")+("</td><th style='width:10%;'><b>\u7de8\u865f</b></th><th style='width:10%;'><b>\u661f\u6578</b></th><th colspan=2 style='width:35%;'><b>\u540d\u7a31</b></th><th style='width:15%;'><b>\u8077\u968e</b></th><th style='width:10%;'><b>\u5206\u985e</b></th></tr><tr align=\"center\"><td>No."+
master.mstSvt[k].collectionNo+'</td><td class="star">');for(c=0;c<master.mstSvtLimit[n].rarity;c++)a+="\u2605";a+="</td><td colspan=2>";a=(c=findSvtNameZh(master.mstSvt[k].id))&&!document.getElementById("isJpTxt").checked?a+("<div class=ruby>"+master.mstSvt[k].ruby+"</div>"+c):a+master.mstSvt[k].name;a+="</td>";document.title=findSvtNameZh2(e)+" - Servant\u8cc7\u6599\u67e5\u8a62";for(c=0;c<mstClass.length;c++)if(mstClass[c].id==master.mstSvt[k].classId){a+="<td>"+mstClass[c].name+"</td>";break}a+=
"<td>"+" \u4eba \u5929 \u5730 \u661f \u7378".split(" ")[master.mstSvt[k].attri]+"</td></tr><tr><th><b>HP</b></th><th><b>ATK</b></th><th style='width:10%;'><b>\u7e6a\u5e2b</b></th><th style='width:10%;'><b>CV</b></th><th><b>\u5c6c\u6027</b></th><th><b>\u6027\u5225</b></th></tr><tr align=\"center\"><td>"+master.mstSvtLimit[n].hpBase+" / "+master.mstSvtLimit[n].hpMax+"</td><td>"+master.mstSvtLimit[n].atkBase+" / "+master.mstSvtLimit[n].atkMax+"</td>";for(c=0;c<master.mstIllustrator.length;c++)if(master.mstIllustrator[c].id==
master.mstSvt[k].illustratorId){a+="<td><a href='illustrator.html#"+master.mstSvt[k].illustratorId+"'>"+master.mstIllustrator[c].name.replace(/\(/g,"<br>(")+"</a></td>";break}a+="<td>";if(-1!=master.mstSvt[k].cvId)for(c=0;c<master.mstCv.length;c++){if(master.mstCv[c].id==master.mstSvt[k].cvId){a+="<a href='cv.html#"+master.mstSvt[k].cvId+"'>"+master.mstCv[c].name.replace(/\uff06/g,"<br>\uff06<br>")+"</a>";break}}else a+="\uff1f\uff1f\uff1f";var a=a+"</td>",a=a+("<td>"+" \u4e2d\u7acb \u6df7\u6c8c \u79e9\u5e8f ? ? \u4e2d\u7acb".split(" ")[master.mstSvtLimit[n].policy]+
"\u30fb"+" \u5584 \u60e1 ? \u72c2 \u4e2d\u5eb8 ? \u82b1\u5ac1".split(" ")[master.mstSvtLimit[n].personality]+"</td><td>"+["","\u7537\u6027","\u5973\u6027","\u7121"][master.mstSvt[k].genderType]+"</td></tr>"),q=[];for(c in master.mstSvt[k].individuality)for(var b in p)master.mstSvt[k].individuality[c]==p[b][0]&&q.push(p[b][1]);a+="<tr><th>\u7279\u6027</th><td colspan=5 align=center>"+q+"</td></tr>";document.getElementById("svtNrmlData").innerHTML=a;p='<tr><th rowspan=2><b>\u6307\u4ee4\u5361</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th rowspan=2><b>\u96b1\u85cf\u6578\u503c</b></th><th><b>\u661f\u661f\u767c\u751f\u7387</b></th><th><b>\u88ab\u5373\u6b7b\u7387</b></th><th><b>\u661f\u661f\u5206\u914d\u6bd4\u91cd</b></th><th><b>\u57fa\u672cNP\u7372\u5f97\u7387(Atk / Def)</b></th></tr><tr align="center">';
for(b=1;4>=b;b++){for(c=a=0;c<master.mstSvt[k].cardIds.length;c++)master.mstSvt[k].cardIds[c]==b&&a++;for(c=0;c<master.mstSvtCard.length;c++)master.mstSvtCard[c].svtId==master.mstSvt[k].id&&master.mstSvtCard[c].cardId==b&&(p+="<td>",4!=b&&(p+=a+"\u5f35 \u5404"),p+=master.mstSvtCard[c].normalDamage.length+"Hit",1<master.mstSvtCard[c].normalDamage.length&&(p+="s"),p+="</td>")}p+="<td>"+master.mstSvt[k].starRate/10+"%</td><td>"+master.mstSvt[k].deathRate/10+"%</td><td>"+master.mstSvtLimit[n].criticalWeight+
"</td><td>";for(c=0;c<master.mstTreasureDeviceLv.length;c++)if(Math.floor(master.mstTreasureDeviceLv[c].treaureDeviceId/100)==Math.floor(master.mstSvt[k].id/100)){p+=master.mstTreasureDeviceLv[c].tdPoint/100+"% / "+master.mstTreasureDeviceLv[c].tdPointDef/100+"%";break}p+="</td></tr>";document.getElementById("svtCtrlData").innerHTML=p;a=p="";q=1;for(c=0;c<master.mstSvtSkill.length;c++)if(master.mstSvtSkill[c].svtId==master.mstSvt[k].id){q++;for(b=0;b<master.mstSkill.length;b++)if(master.mstSvtSkill[c].skillId==
master.mstSkill[b].id){a+="<td><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[b].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td><b>"+master.mstSkill[b].name+"</b></td>";break}for(b=0;b<master.mstSkillLv.length;b++)master.mstSvtSkill[c].skillId==master.mstSkillLv[b].skillId&&1==master.mstSkillLv[b].lv&&(a+="<td colspan=5>\u51b7\u537b"+master.mstSkillLv[b].chargeTurn+"\u56de\u5408</td>");a+="<td colspan=5>";0==master.mstSvtSkill[c].condLimitCount&&
0==master.mstSvtSkill[c].condQuestId&&0==master.mstSvtSkill[c].condLv&&(a+="\u521d\u671f");0!=master.mstSvtSkill[c].condLimitCount&&(a+="\u9748\u57fa\u518d\u81e8\u7b2c"+master.mstSvtSkill[c].condLimitCount+"\u968e\u6bb5<br>");0!=master.mstSvtSkill[c].condLv&&(a+="Lv."+master.mstSvtSkill[c].condLv+"<br>");0!=master.mstSvtSkill[c].condQuestId&&(a+="\u901a\u904e\u4efb\u52d9 "+questRea(master.mstSvtSkill[c].condQuestId)+"<br>");var a=a+"</td></tr>",f=[];for(b=0;b<skDetail.length;b++)if(master.mstSvtSkill[c].skillId==
skDetail[b][0]){f=skDetail[b].slice(0);break}if(document.getElementById("isJpTxt").checked||!f[1])for(b=0;b<master.mstSkillDetail.length;b++)if(master.mstSvtSkill[c].skillId==master.mstSkillDetail[b].id){f[1]=master.mstSkillDetail[b].detail;break}var m=[];document.getElementById("isJpTxt").checked?m[0]=f[1].slice(0):(f[1]=f[1].replace(/ |\u3000/g,""),f[1]=f[1].replace(/\uff06/g,"\uff06\u2517"),m=f[1].split(/\uff06|\uff0b/));for(var q=q+m.length,d=0;d<m.length;d++){m[d].search(/\{0\}|Lv/);m[d]=m[d].replace(/\{0\}/g,
"Lv.");m[d]=m[d].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');m[d]=m[d].replace(/\u3010/g,'<font color="#006400 ">\u3010');m[d]=m[d].replace(/\u3011/g,"\u3011</font>");if(document.getElementById("isJpTxt").checked)a+="<tr><td colspan=12>"+m[d]+"</td>";else if(a+="<tr><td colspan=2>"+m[d]+"</td>",f[2+d]&&1<f[2+d].split("/").length-1){var r=[],r=f[2+d].split(/\//);for(b in r)a+="<td align=center style='width:50px'>"+r[b]+"</td>"}else a+="<td colspan=10>",a=f[2+d]?a+("\u3000"+f[2+d].replace(/\//g,
" / ")):"undefined"!==typeof f[2+d]&&0==f[2+d].length?a+"\u3000---":a+"\u3000\u5f85\u88dc";a+="</td></tr>"}}0<a.length&&(p+="<tr><th style='width:60px' rowspan="+q+"><b>\u4fdd\u6709\u6280\u80fd</b></th><th colspan=2 style='width:300px'>\u6280\u80fd</th><th colspan=5 style='width:250px'>\u51b7\u537b\u6642\u9593</th><th colspan=5 style='width:250px'>\u958b\u653e\u689d\u4ef6</th></tr><tr>"+a+"");if(0!=master.mstSvt[k].classPassive.length){a="";for(c=q=0;c<master.mstSvt[k].classPassive.length;c++){q++;
for(b=0;b<master.mstSkill.length;b++)if(master.mstSvt[k].classPassive[c]==master.mstSkill[b].id){a+="<td style='width:55px'><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[b].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td><b>"+master.mstSkill[b].name+"</b></td>";break}for(b=0;b<skDetail.length;b++)if(master.mstSvt[k].classPassive[c]==skDetail[b][0]){f=skDetail[b].slice(0);break}if(document.getElementById("isJpTxt").checked||
!f[1])for(b=0;b<master.mstSkillDetail.length;b++)if(master.mstSvt[k].classPassive[c]==master.mstSkillDetail[b].id){f[1]=master.mstSkillDetail[b].detail;break}m=[];document.getElementById("isJpTxt").checked?m[0]=f[1].slice(0):(f[1]=f[1].replace(/ |\u3000/g,""),f[1]=f[1].replace(/\uff06/g,"\uff06\u2517"),m=f[1].split(/\uff06|\uff0b|\+/));a+="<td colspan=10>";for(d=0;d<m.length;d++)if(m[d].search(/\{0\}|Lv/),m[d]=m[d].replace(/\{0\}/g,"Lv."),m[d]=m[d].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>'),
m[d]=m[d].replace(/\u3010/g,'<font color="#006400 ">\u3010'),m[d]=m[d].replace(/\u3011/g,"\u3011</font>"),document.getElementById("isJpTxt").checked)a+=m[d];else if(0!=d&&(a+="<br>"),a+=m[d],f[2+d]&&1<f[2+d].split("/").length-1)for(b in a+=m[d]+"\uff1a",r=[],r=f[2+d].split(/\//),r)a+=r[b];else a=f[2+d]?a+("\uff1a"+f[2+d].replace(/\//g," / ")):"undefined"!==typeof f[2+d]&&0==f[2+d].length?a+"":a+"\uff1a\u5f85\u88dc";a+="</td></tr>"}p+="<tr><th rowspan="+master.mstSvt[k].classPassive.length+"><b>\u8077\u968e\u6280\u80fd</b></th>"+
a+""}a="";for(c=q=0;c<master.mstTreasureDevice.length;c++)if(master.mstTreasureDevice[c].seqId==master.mstSvt[k].id){q+=2;b=0;a+="<th colspan=2><b>\u540d\u7a31</b></th><th colspan=2><b>\u7b49\u7d1a</b></th><th colspan=2><b>\u7a2e\u985e</b></th><th colspan=4><b>\u89e3\u653e\u4efb\u52d9</b></th><th colspan=2>\u653b\u64ca\u6b21\u6578</th></tr>";a+='<tr align="center"><td colspan=2><div class=ruby>'+master.mstTreasureDevice[c].ruby+"</div>";for(b=0;b<master.mstSvtTreasureDevice.length;b++)if(master.mstTreasureDevice[c].id==
master.mstSvtTreasureDevice[b].treasureDeviceId){a+='<b><font color="#'+h[master.mstSvtTreasureDevice[b].cardId]+'">'+master.mstTreasureDevice[c].name+"</font></b></td><td colspan=2>"+master.mstTreasureDevice[c].rank+"</td><td colspan=2>"+master.mstTreasureDevice[c].typeText.replace(/\u5bfe/g,"\u5c0d").replace(/\u5b9d/g,"\u5bf6").replace(/\u5263/g,"\u528d").replace(/\u60aa/g,"\u60e1").replace(/\u5965/g,"\u5967").replace(/\u30bb\u30a4\u30d0\u30fc/g,"Saber")+"</td><td colspan=4>";a=0==master.mstSvtTreasureDevice[b].condQuestId&&
0==master.mstSvtTreasureDevice[b].condLv&&0==master.mstSvtTreasureDevice[b].condFriendshipRank?a+"\u521d\u671f":null!=findName(master.mstQuest,master.mstSvtTreasureDevice[b].condQuestId)?a+questRea(master.mstSvtTreasureDevice[b].condQuestId):0!=master.mstSvtTreasureDevice[b].condLv?a+("Lv."+master.mstSvtTreasureDevice[b].condLv+"\u89e3\u653e"):0!=master.mstSvtTreasureDevice[b].condFriendshipRank?a+("\u7d46\u7b49\u7d1a"+master.mstSvtTreasureDevice[b].condFriendshipRank+"\u89e3\u653e"):a+"\u672a\u958b\u653e";
a+="</td>";break}f=[];for(d in tdDetail)if(master.mstTreasureDevice[c].id==tdDetail[d][0]){f=tdDetail[d].slice(0);break}if(document.getElementById("isJpTxt").checked||!f[1])for(d in master.mstTreasureDeviceDetail)if(master.mstTreasureDevice[c].id==master.mstTreasureDeviceDetail[d].id){f[1]=master.mstTreasureDeviceDetail[d].detail;break}a+="<td colspan=2>";-1==f[1].search(/\u653b\u64ca[^\u529b]|\u653b\u6483[^\u529b]/)?a+="\uff0d":(a=0<master.mstSvtTreasureDevice[b].damage.length?a+master.mstSvtTreasureDevice[b].damage.length:
a+"1",a+="Hit",1<master.mstSvtTreasureDevice[b].damage.length&&(a+="s"));a+="</td></tr>";b=[];document.getElementById("isJpTxt").checked?b[0]=f[1].slice(0):(f[1]=f[1].replace(/ |\u3000/g,""),f[1]=f[1].replace(/\uff06/g,"\uff06\u2517"),b=f[1].split(/\uff06|\uff0b/));q+=b.length;for(d=0;d<b.length;d++){b[d].search(/\{0\}|Lv/);b[d].search(/<O|<\u30aa/);b[d]=b[d].replace(/\{0\}/g,"Lv.");b[d]=b[d].replace(/<O/g,'<font color="#CC6600"><br>< O');b[d]=b[d].replace(/<\u30aa/g,'<font color="#CC6600"><\u30aa');
b[d]=b[d].replace(/P>/g,"P></font>");b[d]=b[d].replace(/\u30d7>/g,"\u30d7></font>");b[d]=b[d].replace(/\u3010/g,'<font color="#006400 ">\u3010');b[d]=b[d].replace(/\u3011/g,"\u3011</font>");b[d]=b[d].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');b[d]=b[d].replace(/\n/g,"<br>");if(document.getElementById("isJpTxt").checked)a+="<td colspan=12>"+b[d]+"</td>";else if(0!=d&&(a+="<tr>"),a+="<td colspan=2>"+b[d]+"</td>",f[2+d]&&1<f[2+d].split("/").length-1)for(g in r=[],r=f[2+d].split(/\//),r)a+=
"<td align=center colspan=2>"+r[g]+"</td>";else a+="<td colspan=10>",a=f[2+d]?a+("\u3000"+f[2+d]):"undefined"!==typeof f[2+d]&&0==f[2+d].length?a+"\u3000---":a+"\u3000\u5f85\u88dc";a+="</td></tr>"}}p+="<tr><th rowspan="+q+"><b>\u5bf6\u5177</b></th>"+a+"";document.getElementById("svtSkTdData").innerHTML=p;h="";h="<tr><th rowspan=2 style='width:250px'>\u80fd\u529b\u503c</th><th style='width:50px'>\u7b4b\u529b</th><th style='width:50px'>\u8010\u4e45</th><th style='width:50px'>\u654f\u6377</th><th style='width:50px'>\u9b54\u529b</th><th style='width:50px'>\u5e78\u904b</th><th style='width:50px'>\u5bf6\u5177</th></tr><tr align=\"center\"><td>"+
l[Math.floor(master.mstSvtLimit[n].power/10)]+t[master.mstSvtLimit[n].power%10]+"</td><td>"+l[Math.floor(master.mstSvtLimit[n].defense/10)]+t[master.mstSvtLimit[n].defense%10]+"</td><td>"+l[Math.floor(master.mstSvtLimit[n].agility/10)]+t[master.mstSvtLimit[n].agility%10]+"</td><td>"+l[Math.floor(master.mstSvtLimit[n].magic/10)]+t[master.mstSvtLimit[n].magic%10]+"</td><td>"+l[Math.floor(master.mstSvtLimit[n].luck/10)]+t[master.mstSvtLimit[n].luck%10]+"</td><td>"+l[Math.floor(master.mstSvtLimit[n].treasureDevice/
10)]+t[master.mstSvtLimit[n].treasureDevice%10]+"</td></tr>";for(c=0;c<master.mstSvtComment.length;c++)if(b="",master.mstSvt[k].id==master.mstSvtComment[c].svtId){h+="<tr><th width=150>";if(0==master.mstSvtComment[c].condValue)h+="<b>\u89d2\u8272\u8a73\u7d30</b>";else if(6>master.mstSvtComment[c].condValue)for(d in h+="<b>\u7d46\u7b49\u7d1a"+master.mstSvtComment[c].condValue+"</b>",master.mstFriendship){if(master.mstFriendship[d].id==master.mstSvt[k].friendshipId&&master.mstFriendship[d].rank==master.mstSvtComment[c].condValue-
1){h+="<br>("+master.mstFriendship[d].friendship+")";break}}else 1==master.mstSvtComment[c].condType&&(h+="<b>\u901a\u904e\u4efb\u52d9</b><br>"+questRea(master.mstSvtComment[c].condValue));h+="</th>";b=0==master.mstSvtComment[c].condValue%2?' bgcolor=" #ECF2F3"':"";h+="<td colspan=6"+b+">"+master.mstSvtComment[c].comment.replace(/\n/g,"<br>");h+="</td></tr>"}document.getElementById("svtInfoData").innerHTML=h;d="";d="<tr><th rowspan=4><b>\u9748\u57fa\u518d\u81e8</b></th>";for(l=0;4>l;l++){b="";0==
l%2&&(b=' bgcolor=" #ECF2F3"');0!=l&&(d+="<tr>");d+="<td"+b+">\u7b2c"+(l+1)+"\u968e\u6bb5</td><td"+b+">";for(c=0;c<master.mstCombineLimit.length;c++)if(master.mstCombineLimit[c].id==master.mstSvt[k].id&&master.mstCombineLimit[c].svtLimit==l){for(b=0;b<master.mstCombineLimit[c].itemIds.length;b++)d+="<a href='item_drop.html#"+master.mstCombineLimit[c].itemIds[b]+"'><img src='common/images/icon/items/"+master.mstCombineLimit[c].itemIds[b]+".png' title='"+findItemName(master.mstCombineLimit[c].itemIds[b])+
"' onerror=\"javascript:this.src='common/images/icon/faces/0.png'\" class='itemM' /></a>x"+master.mstCombineLimit[c].itemNums[b]+"\u3000";d+=addCommas(master.mstCombineLimit[c].qp)+"QP"}d+="</td></tr>"}d+="<tr><th rowspan=9><b>\u6280\u80fd\u5f37\u5316</b></th>";for(c=l=0;c<master.mstCombineSkill.length;c++)if(b="",0==c%2&&(b=' bgcolor=" #ECF2F3"'),master.mstCombineSkill[c].id==master.mstSvt[k].id){1!=master.mstCombineSkill[c].skillLv&&(d+="<tr>");d+="<td"+b+">Lv."+master.mstCombineSkill[c].skillLv+
"\u2192Lv."+(master.mstCombineSkill[c].skillLv+1)+"</td><td"+b+">";for(b=0;b<master.mstCombineSkill[c].itemIds.length;b++)d+="<a href='item_drop.html#"+master.mstCombineSkill[c].itemIds[b]+"'><img src='common/images/icon/items/"+master.mstCombineSkill[c].itemIds[b]+".png' title='"+findItemName(master.mstCombineSkill[c].itemIds[b])+"' onerror=\"javascript:this.src='common/images/icon/faces/0.png'\" class='itemM' /></a>x"+master.mstCombineSkill[c].itemNums[b]+"\u3000";d+=addCommas(master.mstCombineSkill[c].qp)+
"QP</td></tr>";l++}0==l&&(d+="<td colspan=2>\u7121</td></tr>");document.getElementById("svtCmbnData").innerHTML=d;document.getElementById("svtImgData").innerHTML="";document.getElementById("svtImgData").innerHTML="<tr><td><img src=common/images/Servant/"+e+"_card_servant_1.png onerror=\"this.style='display:none'\"></img><img src=common/images/Servant/"+e+"_card_servant_2.png onerror=\"this.style='display:none'\"></img><img src=common/images/Servant/"+e+"_card_servant_3.png onerror=\"this.style='display:none'\"></img><br><img src=common/images/CharaGraph/"+
e+"a.png onerror=\"this.style='display:none'\"></img><br><img src=common/images/CharaGraph/"+e+"b.png onerror=\"this.style='display:none'\"></img><br><img src=common/images/CharaGraph/"+e+"c.png onerror=\"this.style='display:none'\"></img></td></tr>";e="<tr><th>\u7b49\u7d1a</th><th>ATK</th><th>HP</th><th>\u4e0a\u5347\u5e45\u5ea6</th></tr>";for(c=0;c<master.mstSvt[k].rewardLv;c++)for(l=0;l<master.mstSvtExp.length;l++)if(master.mstSvt[k].expType==master.mstSvtExp[l].type&&master.mstSvtExp[l].lv==c+
1){b="";1==master.mstSvtExp[l].lv%2&&(b=' bgcolor=" #ECF2F3"');e+='<tr align="center"><td'+b+">Lv."+master.mstSvtExp[l].lv+"</td><td"+b+">"+Math.floor(master.mstSvtLimit[n].atkBase+(master.mstSvtLimit[n].atkMax-master.mstSvtLimit[n].atkBase)*master.mstSvtExp[l].curve/1E3)+"</td><td"+b+">"+Math.floor(master.mstSvtLimit[n].hpBase+(master.mstSvtLimit[n].hpMax-master.mstSvtLimit[n].hpBase)*master.mstSvtExp[l].curve/1E3)+"</td><td"+b+">"+(master.mstSvtExp[l].curve-master.mstSvtExp[l-1].curve)/10+"%</td></tr>";
break}document.getElementById("svtLvData").innerHTML=e;$("img").error(function(){$(this).css({visibility:"hidden"})})}
function classidChange(){var e;for(e=svtid.options.length-1;0<=e;e--)svtid.remove(e);if(0==classid.value)for(e=0;e<master.mstSvt.length;e++){if(1==master.mstSvt[e].type||2==master.mstSvt[e].type||5==master.mstSvt[e].type||9==master.mstSvt[e].type){var h=findSvtNameZh(master.mstSvt[e].id);h?svtid.options.add(new Option("No."+master.mstSvt[e].collectionNo+" "+h,master.mstSvt[e].id)):svtid.options.add(new Option("No."+master.mstSvt[e].collectionNo+" "+master.mstSvt[e].name,master.mstSvt[e].id))}}else for(e=
0;e<master.mstSvt.length;e++)master.mstSvt[e].classId!=classid.value||1!=master.mstSvt[e].type&&2!=master.mstSvt[e].type&&5!=master.mstSvt[e].type&&9!=master.mstSvt[e].type||((h=findSvtNameZh(master.mstSvt[e].id))?svtid.options.add(new Option("No."+master.mstSvt[e].collectionNo+" "+h,master.mstSvt[e].id)):svtid.options.add(new Option("No."+master.mstSvt[e].collectionNo+" "+master.mstSvt[e].name,master.mstSvt[e].id)));0!=classid.value&&svtlocation(svtid[0].value)}
function svtidset(){classidChange();svtlocation(svtid[0].value)}function svtidChange(){var e;for(e=svtlv.options.length-1;0<=e;e--)svtlv.remove(e);for(e=0;e<master.mstSvt.length;e++)if(master.mstSvt[e].id==svtid.value){for(var h=1;h<=master.mstSvt[e].rewardLv;h++)svtlv.options.add(new Option("Lv."+h,h));break}svtlvChange();svtDataTable(svtid.value);drawChart()}
function svtlocation(e){e="";for(var h in master.mstSvt)if(master.mstSvt[h].id==svtid.value){e=0!=master.mstSvt[h].collectionNo?e+("?no="+master.mstSvt[h].collectionNo):e+("?id="+master.mstSvt[h].id);break}changeURL(location.protocol+"//"+location.pathname+e);svtidChange()}
function svtlvChange(){var e;for(e=0;e<master.mstSvtLimit.length;e++)if(master.mstSvtLimit[e].svtId==svtid.value){for(var h=0;h<master.mstSvt.length;h++)if(master.mstSvt[h].id==svtid.value){for(var l=0;l<master.mstSvtExp.length;l++)if(master.mstSvt[h].expType==master.mstSvtExp[l].type&&master.mstSvtExp[l].lv==svtlv.value){atk.value=Math.floor(master.mstSvtLimit[e].atkBase+(master.mstSvtLimit[e].atkMax-master.mstSvtLimit[e].atkBase)*master.mstSvtExp[l].curve/1E3);atkp.value=parseInt(atk.value)+990;
hp.value=Math.floor(master.mstSvtLimit[e].hpBase+(master.mstSvtLimit[e].hpMax-master.mstSvtLimit[e].hpBase)*master.mstSvtExp[l].curve/1E3);hpp.value=parseInt(hp.value)+990;break}break}break}}
function urlId(){$("#classid").val(0);classidChange();var e="1",h="";getUrl("no")&&(e=getUrl("no"));getUrl("id")&&(h=getUrl("id"));if(e){if(0!=h.length)for(i in master.mstSvt){if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||5==master.mstSvt[i].type||9==master.mstSvt[i].type)&&h==master.mstSvt[i].id){$("#svtid").val(master.mstSvt[i].id);break}}else for(i in master.mstSvt)if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||5==master.mstSvt[i].type||9==master.mstSvt[i].type)&&e==master.mstSvt[i].collectionNo){$("#svtid").val(master.mstSvt[i].id);
break}i==master.mstSvt.length-1&&$("#svtid").val(800100)}svtidChange()};