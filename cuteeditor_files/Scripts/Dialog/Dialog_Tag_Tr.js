var OxO9e78=["inp_width","inp_height","sel_align","sel_valign","inp_bgColor","inp_borderColor","inp_borderColorLight","inp_borderColorDark","inp_class","inp_id","inp_tooltip","value","bgColor","backgroundColor","style","","id","borderColor","borderColorLight","borderColorDark","className","width","height","align","vAlign","title","ValidNumber","ValidID","class","valign","onclick"];var inp_width=Window_GetElement(window,OxO9e78[0],true);var inp_height=Window_GetElement(window,OxO9e78[1],true);var sel_align=Window_GetElement(window,OxO9e78[2],true);var sel_valign=Window_GetElement(window,OxO9e78[3],true);var inp_bgColor=Window_GetElement(window,OxO9e78[4],true);var inp_borderColor=Window_GetElement(window,OxO9e78[5],true);var inp_borderColorLight=Window_GetElement(window,OxO9e78[6],true);var inp_borderColorDark=Window_GetElement(window,OxO9e78[7],true);var inp_class=Window_GetElement(window,OxO9e78[8],true);var inp_id=Window_GetElement(window,OxO9e78[9],true);var inp_tooltip=Window_GetElement(window,OxO9e78[10],true);SyncToView=function SyncToView_Tr(){inp_bgColor[OxO9e78[11]]=element.getAttribute(OxO9e78[12])||element[OxO9e78[14]][OxO9e78[13]]||OxO9e78[15];inp_id[OxO9e78[11]]=element.getAttribute(OxO9e78[16])||OxO9e78[15];inp_bgColor[OxO9e78[14]][OxO9e78[13]]=inp_bgColor[OxO9e78[11]];inp_borderColor[OxO9e78[11]]=element.getAttribute(OxO9e78[17])||OxO9e78[15];inp_borderColor[OxO9e78[14]][OxO9e78[13]]=inp_borderColor[OxO9e78[11]];inp_borderColorLight[OxO9e78[11]]=element.getAttribute(OxO9e78[18])||OxO9e78[15];inp_borderColorLight[OxO9e78[14]][OxO9e78[13]]=inp_borderColorLight[OxO9e78[11]];inp_borderColorDark[OxO9e78[11]]=element.getAttribute(OxO9e78[19])||OxO9e78[15];inp_borderColorDark[OxO9e78[14]][OxO9e78[13]]=inp_borderColorDark[OxO9e78[11]];inp_class[OxO9e78[11]]=element[OxO9e78[20]];inp_width[OxO9e78[11]]=element.getAttribute(OxO9e78[21])||element[OxO9e78[14]][OxO9e78[21]]||OxO9e78[15];inp_height[OxO9e78[11]]=element.getAttribute(OxO9e78[22])||element[OxO9e78[14]][OxO9e78[22]]||OxO9e78[15];sel_align[OxO9e78[11]]=element.getAttribute(OxO9e78[23])||OxO9e78[15];sel_valign[OxO9e78[11]]=element.getAttribute(OxO9e78[24])||OxO9e78[15];inp_tooltip[OxO9e78[11]]=element.getAttribute(OxO9e78[25])||OxO9e78[15];} ;SyncTo=function SyncTo_Tr(element){if(inp_bgColor[OxO9e78[11]]){if(element[OxO9e78[14]][OxO9e78[13]]){element[OxO9e78[14]][OxO9e78[13]]=inp_bgColor[OxO9e78[11]];} else {element[OxO9e78[12]]=inp_bgColor[OxO9e78[11]];} ;} else {element.removeAttribute(OxO9e78[12]);} ;element[OxO9e78[17]]=inp_borderColor[OxO9e78[11]];element[OxO9e78[18]]=inp_borderColorLight[OxO9e78[11]];element[OxO9e78[19]]=inp_borderColorDark[OxO9e78[11]];element[OxO9e78[20]]=inp_class[OxO9e78[11]];if(element[OxO9e78[14]][OxO9e78[21]]||element[OxO9e78[14]][OxO9e78[22]]){try{element[OxO9e78[14]][OxO9e78[21]]=inp_width[OxO9e78[11]];element[OxO9e78[14]][OxO9e78[22]]=inp_height[OxO9e78[11]];} catch(er){alert(CE_GetStr(OxO9e78[26]));} ;} else {try{element[OxO9e78[21]]=inp_width[OxO9e78[11]];element[OxO9e78[22]]=inp_height[OxO9e78[11]];} catch(er){alert(CE_GetStr(OxO9e78[26]));} ;} ;var Ox4e2=/[^a-z\d]/i;if(Ox4e2.test(inp_id.value)){alert(CE_GetStr(OxO9e78[27]));return ;} ;element[OxO9e78[23]]=sel_align[OxO9e78[11]];element[OxO9e78[16]]=inp_id[OxO9e78[11]];element[OxO9e78[24]]=sel_valign[OxO9e78[11]];element[OxO9e78[25]]=inp_tooltip[OxO9e78[11]];if(element[OxO9e78[16]]==OxO9e78[15]){element.removeAttribute(OxO9e78[16]);} ;if(element[OxO9e78[12]]==OxO9e78[15]){element.removeAttribute(OxO9e78[12]);} ;if(element[OxO9e78[17]]==OxO9e78[15]){element.removeAttribute(OxO9e78[17]);} ;if(element[OxO9e78[18]]==OxO9e78[15]){element.removeAttribute(OxO9e78[18]);} ;if(element[OxO9e78[7]]==OxO9e78[15]){element.removeAttribute(OxO9e78[7]);} ;if(element[OxO9e78[20]]==OxO9e78[15]){element.removeAttribute(OxO9e78[20]);} ;if(element[OxO9e78[20]]==OxO9e78[15]){element.removeAttribute(OxO9e78[28]);} ;if(element[OxO9e78[23]]==OxO9e78[15]){element.removeAttribute(OxO9e78[23]);} ;if(element[OxO9e78[24]]==OxO9e78[15]){element.removeAttribute(OxO9e78[29]);} ;if(element[OxO9e78[25]]==OxO9e78[15]){element.removeAttribute(OxO9e78[25]);} ;if(element[OxO9e78[21]]==OxO9e78[15]){element.removeAttribute(OxO9e78[21]);} ;if(element[OxO9e78[22]]==OxO9e78[15]){element.removeAttribute(OxO9e78[22]);} ;} ;inp_borderColor[OxO9e78[30]]=function inp_borderColor_onclick(){SelectColor(inp_borderColor);} ;inp_bgColor[OxO9e78[30]]=function inp_bgColor_onclick(){SelectColor(inp_bgColor);} ;inp_borderColorLight[OxO9e78[30]]=function inp_borderColorLight_onclick(){SelectColor(inp_borderColorLight);} ;inp_borderColorDark[OxO9e78[30]]=function inp_borderColorDark_onclick(){SelectColor(inp_borderColorDark);} ;