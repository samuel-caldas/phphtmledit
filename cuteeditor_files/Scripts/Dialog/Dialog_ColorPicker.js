var OxO9698=["=","; path=/;"," expires=",";","cookie","length","","#ffffff","CECC","onmouseover","event","srcElement","target","className","colordiv","style","onmouseout","onclick","CheckboxColorNames","checked","cname","backgroundColor","cvalue","colorpicker.php?UC=","Culture","\x26setting=","EditorSetting","dialogWidth:500px;dialogHeight:420px;help:0;status:0;resizable:1","dialogArguments","object","onchange","color","editor","divpreview","value","#","RecentColors","SPAN","ValidColor"];function SetCookie(name,Ox289,Ox28a){var Ox28b=name+OxO9698[0]+escape(Ox289)+OxO9698[1];if(Ox28a){var Ox272= new Date();Ox272.setSeconds(Ox272.getSeconds()+Ox28a);Ox28b+=OxO9698[2]+Ox272.toUTCString()+OxO9698[3];} ;document[OxO9698[4]]=Ox28b;} ;function GetCookie(name){var Ox28d=document[OxO9698[4]].split(OxO9698[3]);for(var i=0;i<Ox28d[OxO9698[5]];i++){var Ox28e=Ox28d[i].split(OxO9698[0]);if(name==Ox28e[0].replace(/\s/g,OxO9698[6])){return unescape(Ox28e[1]);} ;} ;} ;function GetCookieDictionary(){var Ox290={};var Ox28d=document[OxO9698[4]].split(OxO9698[3]);for(var i=0;i<Ox28d[OxO9698[5]];i++){var Ox28e=Ox28d[i].split(OxO9698[0]);Ox290[Ox28e[0].replace(/\s/g,OxO9698[6])]=unescape(Ox28e[1]);} ;return Ox290;} ;function GetCookieArray(){var arr=[];var Ox28d=document[OxO9698[4]].split(OxO9698[3]);for(var i=0;i<Ox28d[OxO9698[5]];i++){var Ox28e=Ox28d[i].split(OxO9698[0]);var Ox28b={name:Ox28e[0].replace(/\s/g,OxO9698[6]),value:unescape(Ox28e[1])};arr[arr[OxO9698[5]]]=Ox28b;} ;return arr;} ;var __defaultcustomlist=[OxO9698[7],OxO9698[7],OxO9698[7],OxO9698[7],OxO9698[7],OxO9698[7],OxO9698[7],OxO9698[7]];function GetCustomColors(){var Ox295=__defaultcustomlist.concat();for(var i=0;i<18;i++){var Ox296=GetCustomColor(i);if(Ox296){Ox295[i]=Ox296;} ;} ;return Ox295;} ;function GetCustomColor(Ox298){return GetCookie(OxO9698[8]+Ox298);} ;function SetCustomColor(Ox298,Ox296){SetCookie(OxO9698[8]+Ox298,Ox296,60*60*24*365);} ;var _origincolor=OxO9698[6];document[OxO9698[9]]=function (Ox332){Ox332=window[OxO9698[10]]||Ox332;var Ox2ba=Ox332[OxO9698[11]]||Ox332[OxO9698[12]];if(Ox2ba[OxO9698[13]]==OxO9698[14]){firecolorchange(Ox2ba[OxO9698[15]].backgroundColor);} ;} ;document[OxO9698[16]]=function (Ox332){Ox332=window[OxO9698[10]]||Ox332;var Ox2ba=Ox332[OxO9698[11]]||Ox332[OxO9698[12]];if(Ox2ba[OxO9698[13]]==OxO9698[14]){firecolorchange(_origincolor);} ;} ;document[OxO9698[17]]=function (Ox332){Ox332=window[OxO9698[10]]||Ox332;var Ox2ba=Ox332[OxO9698[11]]||Ox332[OxO9698[12]];if(Ox2ba[OxO9698[13]]==OxO9698[14]){var Ox405=document.getElementById(OxO9698[18])&&document.getElementById(OxO9698[18])[OxO9698[19]];if(Ox405){do_select(Ox2ba.getAttribute(OxO9698[20])||Ox2ba[OxO9698[15]][OxO9698[21]]);} else {do_select(Ox2ba.getAttribute(OxO9698[22])||Ox2ba[OxO9698[15]][OxO9698[21]]);} ;} ;} ;var _editor;function firecolorchange(Ox408){} ;function ShowColorDialog(Ox398){var Ox2a4=OxO9698[23]+editor.GetScriptProperty(OxO9698[24])+OxO9698[25]+editor.GetScriptProperty(OxO9698[26]);var Ox40a=OxO9698[27];var Ox2a6=showModalDialog(Ox2a4,null,Ox40a);if(Ox2a6!=null&&Ox2a6!==false){Ox398(Ox2a6);} ;} ;if(top[OxO9698[28]]){if( typeof (top[OxO9698[28]])==OxO9698[29]){if(top[OxO9698[28]][OxO9698[30]]){firecolorchange=top[OxO9698[28]][OxO9698[30]];_origincolor=top[OxO9698[28]][OxO9698[31]];_editor=top[OxO9698[28]][OxO9698[32]];} ;} ;} ;var _selectedcolor=null;function do_select(Ox296){_selectedcolor=Ox296;firecolorchange(Ox296);var Ox10=document.getElementById(OxO9698[33]);if(Ox10){Ox10[OxO9698[34]]=Ox296;} ;} ;function do_saverecent(Ox296){if(!Ox296){return ;} ;if(Ox296[OxO9698[5]]!=7){return ;} ;if(Ox296.substring(0,1)!=OxO9698[35]){return ;} ;var Ox29b=Ox296.substring(1,7);var Ox40e=GetCookie(OxO9698[36]);if(!Ox40e){Ox40e=OxO9698[6];} ;if((Ox40e[OxO9698[5]]%6)!=0){Ox40e=OxO9698[6];} ;for(var i=0;i<Ox40e[OxO9698[5]];i+=6){if(Ox40e.substr(i,6)==Ox29b){Ox40e=Ox40e.substr(0,i)+Ox40e.substr(i+6);i-=6;} ;} ;if(Ox40e[OxO9698[5]]>31*6){Ox40e=Ox40e.substr(0,31*6);} ;Ox40e=Ox29b+Ox40e;SetCookie(OxO9698[36],Ox40e,60*60*24*365);} ;function do_insert(){var Ox296;var divpreview=document.getElementById(OxO9698[33]);if(divpreview){Ox296=divpreview[OxO9698[34]];} else {Ox296=_selectedcolor;} ;try{document.createElement(OxO9698[37])[OxO9698[15]][OxO9698[31]]=Ox296;do_saverecent(Ox296);Window_SetDialogReturnValue(window,Ox296);Window_CloseDialog(window);} catch(x){alert(CE_GetStr(OxO9698[38]));divpreview[OxO9698[34]]=OxO9698[6];return false;} ;} ;