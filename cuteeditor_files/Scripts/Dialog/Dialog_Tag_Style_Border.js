var OxOa45d=["SetStyle","length","","GetStyle","GetText",":",";","cssText","div_selector_event","div_selector","sel_part","tb_margin","sel_margin_unit","tb_padding","sel_padding_unit","tb_border","sel_border_unit","sel_border","sel_style","inp_color","inp_color_Preview","outer","div_demo","offsetWidth","offsetHeight","Top","Left","Bottom","Right","onmousemove","runtimeStyle","border","4px solid red","style","onmouseout","onclick","value","onchange","disabled","selectedIndex","4px solid blue","-","Color"," ","#7f7c75","backgroundColor","Style","Width","options","margin","padding"];function pause(Ox5e4){var Ox565= new Date();var Ox5e5=Ox565.getTime()+Ox5e4;while(true){Ox565= new Date();if(Ox565.getTime()>Ox5e5){return ;} ;} ;} ;function StyleClass(Ox363){var Ox5e7=[];var Ox5e8={};if(Ox363){Ox5ed();} ;this[OxOa45d[0]]=function SetStyle(name,Ox289,Ox5ea){name=name.toLowerCase();for(var i=0;i<Ox5e7[OxOa45d[1]];i++){if(Ox5e7[i]==name){break ;} ;} ;Ox5e7[i]=name;Ox5e8[name]=Ox289?(Ox289+(Ox5ea||OxOa45d[2])):OxOa45d[2];} ;this[OxOa45d[3]]=function GetStyle(name){name=name.toLowerCase();return Ox5e8[name]||OxOa45d[2];} ;this[OxOa45d[4]]=function Ox5ec(){var Ox363=OxOa45d[2];for(var i=0;i<Ox5e7[OxOa45d[1]];i++){var Ox27d=Ox5e7[i];var p=Ox5e8[Ox27d];if(p){Ox363+=Ox27d+OxOa45d[5]+p+OxOa45d[6];} ;} ;return Ox363;} ;function Ox5ed(){var arr=Ox363.split(OxOa45d[6]);for(var i=0;i<arr[OxOa45d[1]];i++){var p=arr[i].split(OxOa45d[5]);var Ox27d=p[0].replace(/^\s+/g,OxOa45d[2]).replace(/\s+$/g,OxOa45d[2]).toLowerCase();Ox5e7[Ox5e7[OxOa45d[1]]]=Ox27d;Ox5e8[Ox27d]=p[1];} ;} ;} ;function GetStyle(Ox2a0,name){return  new StyleClass(Ox2a0.cssText).GetStyle(name);} ;function SetStyle(Ox2a0,name,Ox289,Ox5ee){var Ox5ef= new StyleClass(Ox2a0.cssText);Ox5ef.SetStyle(name,Ox289,Ox5ee);Ox2a0[OxOa45d[7]]=Ox5ef.GetText();} ;function ParseFloatToString(Oxb){var Ox2fe=parseFloat(Oxb);if(isNaN(Ox2fe)){return OxOa45d[2];} ;return Ox2fe+OxOa45d[2];} ;var div_selector_event=Window_GetElement(window,OxOa45d[8],true);var div_selector=Window_GetElement(window,OxOa45d[9],true);var sel_part=Window_GetElement(window,OxOa45d[10],true);var tb_margin=Window_GetElement(window,OxOa45d[11],true);var sel_margin_unit=Window_GetElement(window,OxOa45d[12],true);var tb_padding=Window_GetElement(window,OxOa45d[13],true);var sel_padding_unit=Window_GetElement(window,OxOa45d[14],true);var tb_border=Window_GetElement(window,OxOa45d[15],true);var sel_border_unit=Window_GetElement(window,OxOa45d[16],true);var sel_border=Window_GetElement(window,OxOa45d[17],true);var sel_style=Window_GetElement(window,OxOa45d[18],true);var inp_color=Window_GetElement(window,OxOa45d[19],true);var inp_color_Preview=Window_GetElement(window,OxOa45d[20],true);var outer=Window_GetElement(window,OxOa45d[21],true);var div_demo=Window_GetElement(window,OxOa45d[22],true);function GetPartFromEvent(){var src=Event_GetSrcElement();var Ox367=Event_GetOffsetX();var Ox337=Event_GetOffsetY();if(src==div_selector){Ox367+=10;Ox337+=10;} ;var Oxd=15-Ox367;var Ox26=Ox367-(div_selector_event[OxOa45d[23]]-15);var Ox2ba=15-Ox337;var Ox1c=Ox337-(div_selector_event[OxOa45d[24]]-15);if(Oxd>0){if(Ox2ba>0){return Oxd>Ox2ba?OxOa45d[25]:OxOa45d[26];} ;if(Ox1c>0){return Oxd>Ox1c?OxOa45d[27]:OxOa45d[26];} ;return OxOa45d[26];} ;if(Ox26>0){if(Ox2ba>0){return Ox26>Ox2ba?OxOa45d[25]:OxOa45d[28];} ;if(Ox1c>0){return Ox26>Ox1c?OxOa45d[27]:OxOa45d[28];} ;return OxOa45d[28];} ;if(Ox2ba>0){return OxOa45d[25];} ;if(Ox1c>0){return OxOa45d[27];} ;return OxOa45d[2];} ;div_selector_event[OxOa45d[29]]=function div_selector_event_onmousemove(){var Ox608=GetPartFromEvent();if(Browser_IsWinIE()){div_selector[OxOa45d[30]][OxOa45d[7]]=OxOa45d[2];div_selector[OxOa45d[30]][OxOa45d[31]+Ox608]=OxOa45d[32];} else {div_selector[OxOa45d[33]][OxOa45d[7]]=OxOa45d[2];div_selector[OxOa45d[33]][OxOa45d[31]+Ox608]=OxOa45d[32];} ;} ;div_selector_event[OxOa45d[34]]=function div_selector_event_onmouseout(){if(Browser_IsWinIE()){div_selector[OxOa45d[30]][OxOa45d[7]]=OxOa45d[2];} else {div_selector[OxOa45d[33]][OxOa45d[7]]=OxOa45d[2];} ;} ;div_selector_event[OxOa45d[35]]=function div_selector_event_onclick(){sel_part[OxOa45d[36]]=GetPartFromEvent();SyncToViewInternal();UpdateState();} ;sel_part[OxOa45d[37]]=function sel_part_onchange(){SyncToViewInternal();UpdateState();} ;UpdateState=function UpdateState_Border(){tb_border[OxOa45d[38]]=sel_border_unit[OxOa45d[38]]=(sel_border[OxOa45d[39]]>0);div_demo[OxOa45d[33]][OxOa45d[7]]=element[OxOa45d[33]][OxOa45d[7]];div_selector[OxOa45d[33]][OxOa45d[7]]=OxOa45d[2];div_selector[OxOa45d[33]][OxOa45d[31]+(sel_part[OxOa45d[36]]||OxOa45d[2])]=OxOa45d[40];} ;SyncToView=function SyncToView_Border(){var Ox608=sel_part[OxOa45d[36]];var Ox609=Ox608?OxOa45d[41]+Ox608:Ox608;if(Browser_IsWinIE()){inp_color[OxOa45d[36]]=element[OxOa45d[33]][OxOa45d[31]+Ox608+OxOa45d[42]];} else {var arr=revertColor(element[OxOa45d[33]][OxOa45d[31]+Ox608+OxOa45d[42]]).split(OxOa45d[43]);if(arr[0]!=OxOa45d[44]){inp_color[OxOa45d[36]]=arr[0];} ;} ;inp_color[OxOa45d[33]][OxOa45d[45]]=inp_color[OxOa45d[36]];sel_style[OxOa45d[36]]=element[OxOa45d[33]][OxOa45d[31]+Ox608+OxOa45d[46]];sel_border[OxOa45d[36]]=element[OxOa45d[33]][OxOa45d[31]+Ox608+OxOa45d[47]];var Ox716=element[OxOa45d[33]][OxOa45d[31]+Ox608+OxOa45d[47]];tb_border[OxOa45d[36]]=ParseFloatToString(Ox716);if(tb_border[OxOa45d[36]]){for(var i=0;i<sel_border_unit[OxOa45d[48]][OxOa45d[1]];i++){var Ox2aa=sel_border_unit[OxOa45d[48]][i][OxOa45d[36]];if(Ox2aa&&Ox716.indexOf(Ox2aa)!=-1){sel_border_unit[OxOa45d[39]]=i;break ;} ;} ;} ;var Ox717=element[OxOa45d[33]][OxOa45d[49]+Ox608];tb_margin[OxOa45d[36]]=ParseFloatToString(Ox717);if(tb_margin[OxOa45d[36]]){for(var i=0;i<sel_margin_unit[OxOa45d[48]][OxOa45d[1]];i++){var Ox2aa=sel_margin_unit[OxOa45d[48]][i][OxOa45d[36]];if(Ox2aa&&Ox717.indexOf(Ox2aa)!=-1){sel_margin_unit[OxOa45d[39]]=i;break ;} ;} ;} ;var Ox718=element[OxOa45d[33]][OxOa45d[50]+Ox608];tb_padding[OxOa45d[36]]=ParseFloatToString(Ox718);if(tb_padding[OxOa45d[36]]){for(var i=0;i<sel_padding_unit[OxOa45d[48]][OxOa45d[1]];i++){var Ox2aa=sel_padding_unit[OxOa45d[48]][i][OxOa45d[36]];if(Ox2aa&&Ox718.indexOf(Ox2aa)!=-1){sel_padding_unit[OxOa45d[39]]=i;break ;} ;} ;} ;} ;SyncTo=function SyncTo_Border(element){var Ox608=sel_part[OxOa45d[36]];var Ox609=Ox608?OxOa45d[41]+Ox608:Ox608;var Ox60a=OxOa45d[2];if(sel_border[OxOa45d[39]]>0){Ox60a=sel_border[OxOa45d[36]];} else {if(ParseFloatToString(tb_border.value)){Ox60a=ParseFloatToString(tb_border.value)+sel_border_unit[OxOa45d[36]];} else {Ox60a=OxOa45d[2];} ;} ;var Ox296=inp_color[OxOa45d[36]]||OxOa45d[2];var Ox2a0=sel_style[OxOa45d[36]]||OxOa45d[2];if(Ox60a||Ox2a0){SetStyle(element.style,OxOa45d[31]+Ox609,Ox60a+OxOa45d[43]+Ox2a0+OxOa45d[43]+Ox296);} else {SetStyle(element.style,OxOa45d[31]+Ox609,OxOa45d[2]);} ;SetStyle(element.style,OxOa45d[49]+Ox609,ParseFloatToString(tb_margin.value),sel_margin_unit.value);SetStyle(element.style,OxOa45d[50]+Ox609,ParseFloatToString(tb_padding.value),sel_padding_unit.value);} ;inp_color[OxOa45d[35]]=inp_color_Preview[OxOa45d[35]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_Preview);} ;