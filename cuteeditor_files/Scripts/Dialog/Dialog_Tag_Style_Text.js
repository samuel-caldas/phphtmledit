var OxObf98=["","sel_align","sel_valign","sel_justify","sel_letter","tb_letter","sel_letter_unit","sel_line","tb_line","sel_line_unit","tb_indent","sel_indent_unit","sel_direction","sel_writingmode","outer","div_demo","disabled","selectedIndex","cssText","style","value","textAlign","verticalAlign","textJustify","letterSpacing","length","options","lineHeight","textIndent","direction","writingMode"];function ParseFloatToString(Oxb){var Ox2fe=parseFloat(Oxb);if(isNaN(Ox2fe)){return OxObf98[0];} ;return Ox2fe+OxObf98[0];} ;var sel_align=Window_GetElement(window,OxObf98[1],true);var sel_valign=Window_GetElement(window,OxObf98[2],true);var sel_justify=Window_GetElement(window,OxObf98[3],true);var sel_letter=Window_GetElement(window,OxObf98[4],true);var tb_letter=Window_GetElement(window,OxObf98[5],true);var sel_letter_unit=Window_GetElement(window,OxObf98[6],true);var sel_line=Window_GetElement(window,OxObf98[7],true);var tb_line=Window_GetElement(window,OxObf98[8],true);var sel_line_unit=Window_GetElement(window,OxObf98[9],true);var tb_indent=Window_GetElement(window,OxObf98[10],true);var sel_indent_unit=Window_GetElement(window,OxObf98[11],true);var sel_direction=Window_GetElement(window,OxObf98[12],true);var sel_writingmode=Window_GetElement(window,OxObf98[13],true);var outer=Window_GetElement(window,OxObf98[14],true);var div_demo=Window_GetElement(window,OxObf98[15],true);UpdateState=function UpdateState_Text(){tb_letter[OxObf98[16]]=sel_letter_unit[OxObf98[16]]=(sel_letter[OxObf98[17]]>0);tb_line[OxObf98[16]]=sel_line_unit[OxObf98[16]]=(sel_line[OxObf98[17]]>0);div_demo[OxObf98[19]][OxObf98[18]]=element[OxObf98[19]][OxObf98[18]];} ;SyncToView=function SyncToView_Text(){sel_align[OxObf98[20]]=element[OxObf98[19]][OxObf98[21]];sel_valign[OxObf98[20]]=element[OxObf98[19]][OxObf98[22]];sel_justify[OxObf98[20]]=element[OxObf98[19]][OxObf98[23]];sel_letter[OxObf98[20]]=element[OxObf98[19]][OxObf98[24]];sel_letter_unit[OxObf98[17]]=0;if(sel_letter[OxObf98[17]]==-1){if(ParseFloatToString(element[OxObf98[19]].letterSpacing)){tb_letter[OxObf98[20]]=ParseFloatToString(element[OxObf98[19]].letterSpacing);for(var i=0;i<sel_letter_unit[OxObf98[26]][OxObf98[25]];i++){var Ox2aa=sel_letter_unit[OxObf98[26]][i][OxObf98[20]];if(Ox2aa&&element[OxObf98[19]][OxObf98[24]].indexOf(Ox2aa)!=-1){sel_letter_unit[OxObf98[17]]=i;break ;} ;} ;} ;} ;sel_line[OxObf98[20]]=element[OxObf98[19]][OxObf98[27]];sel_line_unit[OxObf98[17]]=0;if(sel_line[OxObf98[17]]==-1){if(ParseFloatToString(element[OxObf98[19]].lineHeight)){tb_line[OxObf98[20]]=ParseFloatToString(element[OxObf98[19]].lineHeight);for(var i=0;i<sel_line_unit[OxObf98[26]][OxObf98[25]];i++){var Ox2aa=sel_line_unit[OxObf98[26]][i][OxObf98[20]];if(Ox2aa&&element[OxObf98[19]][OxObf98[27]].indexOf(Ox2aa)!=-1){sel_line_unit[OxObf98[17]]=i;break ;} ;} ;} ;} ;sel_indent_unit[OxObf98[17]]=0;if(!isNaN(ParseFloatToString(element[OxObf98[19]].textIndent))){tb_indent[OxObf98[20]]=ParseFloatToString(element[OxObf98[19]].textIndent);for(var i=0;i<sel_indent_unit[OxObf98[26]][OxObf98[25]];i++){var Ox2aa=sel_indent_unit[OxObf98[26]][i][OxObf98[20]];if(Ox2aa&&element[OxObf98[19]][OxObf98[28]].indexOf(Ox2aa)!=-1){sel_indent_unit[OxObf98[17]]=i;break ;} ;} ;} ;sel_direction[OxObf98[20]]=element[OxObf98[19]][OxObf98[29]];sel_writingmode[OxObf98[20]]=element[OxObf98[19]][OxObf98[30]];} ;SyncTo=function SyncTo_Text(element){element[OxObf98[19]][OxObf98[21]]=sel_align[OxObf98[20]];element[OxObf98[19]][OxObf98[22]]=sel_valign[OxObf98[20]];element[OxObf98[19]][OxObf98[23]]=sel_justify[OxObf98[20]];if(sel_letter[OxObf98[17]]>0){element[OxObf98[19]][OxObf98[24]]=sel_letter[OxObf98[20]];} else {if(ParseFloatToString(tb_letter.value)){element[OxObf98[19]][OxObf98[24]]=ParseFloatToString(tb_letter.value)+sel_letter_unit[OxObf98[20]];} else {element[OxObf98[19]][OxObf98[24]]=OxObf98[0];} ;} ;if(sel_line[OxObf98[17]]>0){element[OxObf98[19]][OxObf98[27]]=sel_line[OxObf98[20]];} else {if(ParseFloatToString(tb_line.value)){element[OxObf98[19]][OxObf98[27]]=ParseFloatToString(tb_line.value)+sel_line_unit[OxObf98[20]];} else {element[OxObf98[19]][OxObf98[27]]=OxObf98[0];} ;} ;if(ParseFloatToString(tb_indent.value)){element[OxObf98[19]][OxObf98[28]]=ParseFloatToString(tb_indent.value)+sel_indent_unit[OxObf98[20]];} else {element[OxObf98[19]][OxObf98[28]]=OxObf98[0];} ;element[OxObf98[19]][OxObf98[29]]=sel_direction[OxObf98[20]]||OxObf98[0];element[OxObf98[19]][OxObf98[30]]=sel_writingmode[OxObf98[20]]||OxObf98[0];} ;