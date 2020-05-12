var OxOea51=["onerror","onload","onclick","btnCancel","btnOK","onkeyup","txtHSB_Hue","onkeypress","txtHSB_Saturation","txtHSB_Brightness","txtRGB_Red","txtRGB_Green","txtRGB_Blue","txtHex","btnWebSafeColor","rdoHSB_Hue","rdoHSB_Saturation","rdoHSB_Brightness","rdoRGB_Red","rdoRGB_Green","rdoRGB_Blue","onmousemove","onmousedown","onmouseup","{format}","length","\x5C{","\x5C}","BadNumber","A number between {0} and {1} is required. Closest value inserted.","Title","Color Picker","SelectAColor","Select a color:","OKButton","OK","CancelButton","Cancel","AboutButton","About","Recent","WebSafeWarning","Warning: not a web safe color","WebSafeClick","Click to select web safe color","HsbHue","H:","HsbHueTooltip","Hue","HsbHueUnit","%","HsbSaturation","S:","HsbSaturationTooltip","Saturation","HsbSaturationUnit","HsbBrightness","B:","HsbBrightnessTooltip","Brightness","HsbBrightnessUnit","RgbRed","R:","RgbRedTooltip","Red","RgbGreen","G:","RgbGreenTooltip","Green","RgbBlue","RgbBlueTooltip","Blue","Hex","#","RecentTooltip","Recent:","\x0D\x0ALewies Color Pickerversion 1.1\x0D\x0A\x0D\x0AThis form was created by Lewis Moten in May of 2004.\x0D\x0AIt simulates the color picker in a popular graphics application.\x0D\x0AIt gives users a visual way to choose colors from a large and dynamic palette.\x0D\x0A\x0D\x0AVisit the authors web page?\x0D\x0Awww.lewismoten.com\x0D\x0A","UNDEFINED","FFFFFF","value","checked","ColorMode","ColorType","RecentColors","","pnlRecent","all","border","style","0px","backgroundColor","srcElement","display","none","title","innerHTML","backgroundPosition","px ","px","000000","zIndex","01234567879","keyCode","abcdef","01234567879ABCDEF","returnValue","0123456789ABCDEFabcdef","0","id","pnlGradient_Top","pnlVertical_Top","top","opacity","filters","backgroundImage","url(../Images/cpie_GradientPositionDark.gif)","url(../Images/cpie_GradientPositionLight.gif)","cancelBubble","clientX","clientY","className","GradientNormal","button","GradientFullScreen","=","; path=/;"," expires=",";","cookie","00336699CCFF","0x","do_select","frm","__cphex"];var POSITIONADJUSTX=21;var POSITIONADJUSTY=46;var POSITIONADJUSTZ=43;var msg= new Object();window[OxOea51[0]]=alert;var ColorMode=1;var GradientPositionDark= new Boolean(false);var frm= new Object();window[OxOea51[1]]=window_load;function initialize(){frm[OxOea51[3]][OxOea51[2]]=btnCancel_Click;frm[OxOea51[4]][OxOea51[2]]=btnOK_Click;frm[OxOea51[6]][OxOea51[5]]=Hsb_Changed;frm[OxOea51[6]][OxOea51[7]]=validateNumber;frm[OxOea51[8]][OxOea51[5]]=Hsb_Changed;frm[OxOea51[8]][OxOea51[7]]=validateNumber;frm[OxOea51[9]][OxOea51[5]]=Hsb_Changed;frm[OxOea51[9]][OxOea51[7]]=validateNumber;frm[OxOea51[10]][OxOea51[5]]=Rgb_Changed;frm[OxOea51[10]][OxOea51[7]]=validateNumber;frm[OxOea51[11]][OxOea51[5]]=Rgb_Changed;frm[OxOea51[11]][OxOea51[7]]=validateNumber;frm[OxOea51[12]][OxOea51[5]]=Rgb_Changed;frm[OxOea51[12]][OxOea51[7]]=validateNumber;frm[OxOea51[13]][OxOea51[5]]=Hex_Changed;frm[OxOea51[13]][OxOea51[7]]=validateHex;frm[OxOea51[14]][OxOea51[2]]=btnWebSafeColor_Click;frm[OxOea51[15]][OxOea51[2]]=rdoHsb_Hue_Click;frm[OxOea51[16]][OxOea51[2]]=rdoHsb_Saturation_Click;frm[OxOea51[17]][OxOea51[2]]=rdoHsb_Brightness_Click;frm[OxOea51[18]][OxOea51[2]]=rdoRgb_Red_Click;frm[OxOea51[19]][OxOea51[2]]=rdoRgb_Green_Click;frm[OxOea51[20]][OxOea51[2]]=rdoRgb_Blue_Click;pnlGradient_Top[OxOea51[2]]=pnlGradient_Top_Click;pnlGradient_Top[OxOea51[21]]=pnlGradient_Top_MouseMove;pnlGradient_Top[OxOea51[22]]=pnlGradient_Top_MouseDown;pnlGradient_Top[OxOea51[23]]=pnlGradient_Top_MouseUp;pnlVertical_Top[OxOea51[2]]=pnlVertical_Top_Click;pnlVertical_Top[OxOea51[21]]=pnlVertical_Top_MouseMove;pnlVertical_Top[OxOea51[22]]=pnlVertical_Top_MouseDown;pnlVertical_Top[OxOea51[23]]=pnlVertical_Top_MouseUp;pnlWebSafeColor[OxOea51[2]]=btnWebSafeColor_Click;pnlWebSafeColorBorder[OxOea51[2]]=btnWebSafeColor_Click;pnlOldColor[OxOea51[2]]=pnlOldClick_Click;lblHSB_Hue[OxOea51[2]]=rdoHsb_Hue_Click;lblHSB_Saturation[OxOea51[2]]=rdoHsb_Saturation_Click;lblHSB_Brightness[OxOea51[2]]=rdoHsb_Brightness_Click;lblRGB_Red[OxOea51[2]]=rdoRgb_Red_Click;lblRGB_Green[OxOea51[2]]=rdoRgb_Green_Click;lblRGB_Blue[OxOea51[2]]=rdoRgb_Blue_Click;pnlGradient_Top.focus();} ;function formatString(Ox419){if(!Ox419){return OxOea51[24];} ;for(var i=1;i<arguments[OxOea51[25]];i++){Ox419=Ox419.replace( new RegExp(OxOea51[26]+(i-1)+OxOea51[27]),arguments[i]);} ;return Ox419;} ;function AddValue(Ox41b,Ox289){Ox289=Ox289.toLowerCase();for(var i=0;i<Ox41b[OxOea51[25]];i++){if(Ox41b[i]==Ox289){return ;} ;} ;Ox41b[Ox41b[OxOea51[25]]]=Ox289;} ;function SniffLanguage(Oxd){} ;function LoadLanguage(){msg[OxOea51[28]]=OxOea51[29];msg[OxOea51[30]]=OxOea51[31];msg[OxOea51[32]]=OxOea51[33];msg[OxOea51[34]]=OxOea51[35];msg[OxOea51[36]]=OxOea51[37];msg[OxOea51[38]]=OxOea51[39];msg[OxOea51[40]]=OxOea51[40];msg[OxOea51[41]]=OxOea51[42];msg[OxOea51[43]]=OxOea51[44];msg[OxOea51[45]]=OxOea51[46];msg[OxOea51[47]]=OxOea51[48];msg[OxOea51[49]]=OxOea51[50];msg[OxOea51[51]]=OxOea51[52];msg[OxOea51[53]]=OxOea51[54];msg[OxOea51[55]]=OxOea51[50];msg[OxOea51[56]]=OxOea51[57];msg[OxOea51[58]]=OxOea51[59];msg[OxOea51[60]]=OxOea51[50];msg[OxOea51[61]]=OxOea51[62];msg[OxOea51[63]]=OxOea51[64];msg[OxOea51[65]]=OxOea51[66];msg[OxOea51[67]]=OxOea51[68];msg[OxOea51[69]]=OxOea51[57];msg[OxOea51[70]]=OxOea51[71];msg[OxOea51[72]]=OxOea51[73];msg[OxOea51[74]]=OxOea51[75];msg[OxOea51[39]]=OxOea51[76];} ;function localize(){} ;function window_load(){frm=frmColorPicker;LoadLanguage();localize();initialize();var Ox29b=OxOea51[77];if(Ox29b==OxOea51[77]){Ox29b=OxOea51[78];} ;if(Ox29b[OxOea51[25]]==7){Ox29b=Ox29b.substr(1,6);} ;frm[OxOea51[13]][OxOea51[79]]=Ox29b;Hex_Changed();Ox29b=Form_Get_Hex();SetBg(pnlOldColor,Ox29b);frm[OxOea51[82]][ new Number(GetCookie(OxOea51[81])||0)][OxOea51[80]]=true;ColorMode_Changed();var Ox40e=GetCookie(OxOea51[83])||OxOea51[84];var Ox420=msg[OxOea51[74]];for(var i=1;i<33;i++){if(Ox40e[OxOea51[25]]/6>=i){Ox29b=Ox40e.substr((i-1)*6,6);var Ox421=HexToRgb(Ox29b);var title=formatString(msg.RecentTooltip,Ox29b,Ox421[0],Ox421[1],Ox421[2]);SetBg(document[OxOea51[86]][OxOea51[85]+i],Ox29b);SetTitle(document[OxOea51[86]][OxOea51[85]+i],title);document[OxOea51[86]][OxOea51[85]+i][OxOea51[2]]=pnlRecent_Click;} else {document[OxOea51[86]][OxOea51[85]+i][OxOea51[88]][OxOea51[87]]=OxOea51[89];} ;} ;} ;function pnlRecent_Click(){frm[OxOea51[13]][OxOea51[79]]=event[OxOea51[91]][OxOea51[88]][OxOea51[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function pnlOldClick_Click(){frm[OxOea51[13]][OxOea51[79]]=pnlOldColor[OxOea51[88]][OxOea51[90]].substr(1,6).toUpperCase();Hex_Changed();} ;function rdoHsb_Hue_Click(){frm[OxOea51[15]][OxOea51[80]]=true;ColorMode_Changed();} ;function rdoHsb_Saturation_Click(){frm[OxOea51[16]][OxOea51[80]]=true;ColorMode_Changed();} ;function rdoHsb_Brightness_Click(){frm[OxOea51[17]][OxOea51[80]]=true;ColorMode_Changed();} ;function rdoRgb_Red_Click(){frm[OxOea51[18]][OxOea51[80]]=true;ColorMode_Changed();} ;function rdoRgb_Green_Click(){frm[OxOea51[19]][OxOea51[80]]=true;ColorMode_Changed();} ;function rdoRgb_Blue_Click(){frm[OxOea51[20]][OxOea51[80]]=true;ColorMode_Changed();} ;function Hide(){for(var i=0;i<arguments[OxOea51[25]];i++){arguments[i][OxOea51[88]][OxOea51[92]]=OxOea51[93];} ;} ;function Show(){for(var i=0;i<arguments[OxOea51[25]];i++){arguments[i][OxOea51[88]][OxOea51[92]]=OxOea51[84];} ;} ;function SetValue(){for(var i=0;i<arguments[OxOea51[25]];i+=2){arguments[i][OxOea51[79]]=arguments[i+1];} ;} ;function SetTitle(){for(var i=0;i<arguments[OxOea51[25]];i+=2){arguments[i][OxOea51[94]]=arguments[i+1];} ;} ;function SetHTML(){for(var i=0;i<arguments[OxOea51[25]];i+=2){arguments[i][OxOea51[95]]=arguments[i+1];} ;} ;function SetBg(){for(var i=0;i<arguments[OxOea51[25]];i+=2){arguments[i][OxOea51[88]][OxOea51[90]]=OxOea51[73]+arguments[i+1];} ;} ;function SetBgPosition(){for(var i=0;i<arguments[OxOea51[25]];i+=3){arguments[i][OxOea51[88]][OxOea51[96]]=arguments[i+1]+OxOea51[97]+arguments[i+2]+OxOea51[98];} ;} ;function ColorMode_Changed(){for(var i=0;i<6;i++){if(frm[OxOea51[82]][i][OxOea51[80]]){ColorMode=i;} ;} ;SetCookie(OxOea51[81],ColorMode,60*60*24*365);Hide(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background,pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);switch(ColorMode){case 0:Show(pnlGradientHsbHue_Hue,pnlGradientHsbHue_Black,pnlGradientHsbHue_White,pnlVerticalHsbHue_Background);Hsb_Changed();break ;;case 1:Show(pnlVerticalHsbSaturation_Hue,pnlVerticalHsbSaturation_White,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxOea51[78],pnlGradientRgb_Overlay2,OxOea51[99]);pnlGradientRgb_Overlay1[OxOea51[88]][OxOea51[100]]=5;pnlGradientRgb_Overlay2[OxOea51[88]][OxOea51[100]]=6;Hsb_Changed();break ;;case 2:Show(pnlVerticalHsbBrightness_Hue,pnlVerticalHsbBrightness_Black,pnlGradientRgb_Base,pnlGradientRgb_Overlay1,pnlGradientRgb_Overlay2);SetBgPosition(pnlGradientRgb_Base,0,0);SetBg(pnlGradientRgb_Overlay1,OxOea51[99],pnlGradientRgb_Overlay2,OxOea51[78]);pnlGradientRgb_Overlay1[OxOea51[88]][OxOea51[100]]=6;pnlGradientRgb_Overlay2[OxOea51[88]][OxOea51[100]]=5;Hsb_Changed();break ;;case 3:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,0,pnlGradientRgb_Invert,256,0);Rgb_Changed();break ;;case 4:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,0,256,pnlGradientRgb_Invert,0,256);Rgb_Changed();break ;;case 5:Show(pnlVerticalRgb_Start,pnlVerticalRgb_End,pnlGradientRgb_Base,pnlGradientRgb_Invert);SetBgPosition(pnlGradientRgb_Base,256,256,pnlGradientRgb_Invert,256,256);Rgb_Changed();break ;;default:break ;;} ;} ;function btnWebSafeColor_Click(){var Ox421=HexToRgb(frm[OxOea51[13]].value);Ox421=RgbToWebSafeRgb(Ox421);frm[OxOea51[13]][OxOea51[79]]=RgbToHex(Ox421);Hex_Changed();} ;function checkWebSafe(){var Ox421=Form_Get_Rgb();if(RgbIsWebSafe(Ox421)){Hide(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} else {Ox421=RgbToWebSafeRgb(Ox421);SetBg(pnlWebSafeColor,RgbToHex(Ox421));Show(frm.btnWebSafeColor,pnlWebSafeColor,pnlWebSafeColorBorder);} ;} ;function validateNumber(){var Ox436=String.fromCharCode(event.keyCode);if(IgnoreKey()){return ;} ;if(OxOea51[101].indexOf(Ox436)!=-1){return ;} ;event[OxOea51[102]]=0;} ;function validateHex(){if(IgnoreKey()){return ;} ;var Ox436=String.fromCharCode(event.keyCode);if(OxOea51[103].indexOf(Ox436)!=-1){event[OxOea51[102]]=Ox436.toUpperCase().charCodeAt(0);return ;} ;if(OxOea51[104].indexOf(Ox436)!=-1){return ;} ;event[OxOea51[102]]=0;} ;function IgnoreKey(){var Ox436=String.fromCharCode(event.keyCode);var Ox439= new Array(0,8,9,13,27);if(Ox436==null){return true;} ;for(var i=0;i<5;i++){if(event[OxOea51[102]]==Ox439[i]){return true;} ;} ;return false;} ;function btnCancel_Click(){top.close();} ;function btnOK_Click(){var Ox29b= new String(frm[OxOea51[13]].value);try{window[OxOea51[105]]=Ox29b;} catch(e){} ;recent=GetCookie(OxOea51[83])||OxOea51[84];for(var i=0;i<recent[OxOea51[25]];i+=6){if(recent.substr(i,6)==Ox29b){recent=recent.substr(0,i)+recent.substr(i+6);i-=6;} ;} ;if(recent[OxOea51[25]]>31*6){recent=recent.substr(0,31*6);} ;recent=frm[OxOea51[13]][OxOea51[79]]+recent;SetCookie(OxOea51[83],recent,60*60*24*365);top.close();} ;function SetGradientPosition(Ox367,Ox337){Ox367=Ox367-POSITIONADJUSTX+5;Ox337=Ox337-POSITIONADJUSTY+5;Ox367-=7;Ox337-=27;Ox367=Ox367<0?0:Ox367>255?255:Ox367;Ox337=Ox337<0?0:Ox337>255?255:Ox337;SetBgPosition(pnlGradientPosition,Ox367-5,Ox337-5);switch(ColorMode){case 0:var Ox43d= new Array(0,0,0);Ox43d[1]=Ox367/255;Ox43d[2]=1-(Ox337/255);frm[OxOea51[8]][OxOea51[79]]=Math.round(Ox43d[1]*100);frm[OxOea51[9]][OxOea51[79]]=Math.round(Ox43d[2]*100);Hsb_Changed();break ;;case 1:var Ox43d= new Array(0,0,0);Ox43d[0]=Ox367/255;Ox43d[2]=1-(Ox337/255);frm[OxOea51[6]][OxOea51[79]]=Ox43d[0]==1?0:Math.round(Ox43d[0]*360);frm[OxOea51[9]][OxOea51[79]]=Math.round(Ox43d[2]*100);Hsb_Changed();break ;;case 2:var Ox43d= new Array(0,0,0);Ox43d[0]=Ox367/255;Ox43d[1]=1-(Ox337/255);frm[OxOea51[6]][OxOea51[79]]=Ox43d[0]==1?0:Math.round(Ox43d[0]*360);frm[OxOea51[8]][OxOea51[79]]=Math.round(Ox43d[1]*100);Hsb_Changed();break ;;case 3:var Ox421= new Array(0,0,0);Ox421[1]=255-Ox337;Ox421[2]=Ox367;frm[OxOea51[11]][OxOea51[79]]=Ox421[1];frm[OxOea51[12]][OxOea51[79]]=Ox421[2];Rgb_Changed();break ;;case 4:var Ox421= new Array(0,0,0);Ox421[0]=255-Ox337;Ox421[2]=Ox367;frm[OxOea51[10]][OxOea51[79]]=Ox421[0];frm[OxOea51[12]][OxOea51[79]]=Ox421[2];Rgb_Changed();break ;;case 5:var Ox421= new Array(0,0,0);Ox421[0]=Ox367;Ox421[1]=255-Ox337;frm[OxOea51[10]][OxOea51[79]]=Ox421[0];frm[OxOea51[11]][OxOea51[79]]=Ox421[1];Rgb_Changed();break ;;} ;} ;function Hex_Changed(){var Ox29b=Form_Get_Hex();var Ox421=HexToRgb(Ox29b);var Ox43d=RgbToHsb(Ox421);Form_Set_Rgb(Ox421);Form_Set_Hsb(Ox43d);SetBg(pnlNewColor,Ox29b);SetupCursors();SetupGradients();checkWebSafe();} ;function Rgb_Changed(){var Ox421=Form_Get_Rgb();var Ox43d=RgbToHsb(Ox421);var Ox29b=RgbToHex(Ox421);Form_Set_Hsb(Ox43d);Form_Set_Hex(Ox29b);SetBg(pnlNewColor,Ox29b);SetupCursors();SetupGradients();checkWebSafe();} ;function Hsb_Changed(){var Ox43d=Form_Get_Hsb();var Ox421=HsbToRgb(Ox43d);var Ox29b=RgbToHex(Ox421);Form_Set_Rgb(Ox421);Form_Set_Hex(Ox29b);SetBg(pnlNewColor,Ox29b);SetupCursors();SetupGradients();checkWebSafe();} ;function Form_Set_Hex(Ox29b){frm[OxOea51[13]][OxOea51[79]]=Ox29b;} ;function Form_Get_Hex(){var Ox29b= new String(frm[OxOea51[13]].value);for(var i=0;i<Ox29b[OxOea51[25]];i++){if(OxOea51[106].indexOf(Ox29b.substr(i,1))==-1){Ox29b=OxOea51[99];frm[OxOea51[13]][OxOea51[79]]=Ox29b;alert(formatString(msg.BadNumber,OxOea51[99],OxOea51[78]));break ;} ;} ;while(Ox29b[OxOea51[25]]<6){Ox29b=OxOea51[107]+Ox29b;} ;return Ox29b;} ;function Form_Get_Hsb(){var Ox43d= new Array(0,0,0);Ox43d[0]= new Number(frm[OxOea51[6]].value)/360;Ox43d[1]= new Number(frm[OxOea51[8]].value)/100;Ox43d[2]= new Number(frm[OxOea51[9]].value)/100;if(Ox43d[0]>1||isNaN(Ox43d[0])){Ox43d[0]=1;frm[OxOea51[6]][OxOea51[79]]=360;alert(formatString(msg.BadNumber,0,360));} ;if(Ox43d[1]>1||isNaN(Ox43d[1])){Ox43d[1]=1;frm[OxOea51[8]][OxOea51[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;if(Ox43d[2]>1||isNaN(Ox43d[2])){Ox43d[2]=1;frm[OxOea51[9]][OxOea51[79]]=100;alert(formatString(msg.BadNumber,0,100));} ;return Ox43d;} ;function Form_Set_Hsb(Ox43d){SetValue(frm.txtHSB_Hue,Math.round(Ox43d[0]*360),frm.txtHSB_Saturation,Math.round(Ox43d[1]*100),frm.txtHSB_Brightness,Math.round(Ox43d[2]*100));} ;function Form_Get_Rgb(){var Ox421= new Array(0,0,0);Ox421[0]= new Number(frm[OxOea51[10]].value);Ox421[1]= new Number(frm[OxOea51[11]].value);Ox421[2]= new Number(frm[OxOea51[12]].value);if(Ox421[0]>255||isNaN(Ox421[0])||Ox421[0]!=Math.round(Ox421[0])){Ox421[0]=255;frm[OxOea51[10]][OxOea51[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox421[1]>255||isNaN(Ox421[1])||Ox421[1]!=Math.round(Ox421[1])){Ox421[1]=255;frm[OxOea51[11]][OxOea51[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;if(Ox421[2]>255||isNaN(Ox421[2])||Ox421[2]!=Math.round(Ox421[2])){Ox421[2]=255;frm[OxOea51[12]][OxOea51[79]]=255;alert(formatString(msg.BadNumber,0,255));} ;return Ox421;} ;function Form_Set_Rgb(Ox421){frm[OxOea51[10]][OxOea51[79]]=Ox421[0];frm[OxOea51[11]][OxOea51[79]]=Ox421[1];frm[OxOea51[12]][OxOea51[79]]=Ox421[2];} ;function SetupCursors(){var Ox43d=Form_Get_Hsb();var Ox421=Form_Get_Rgb();if(RgbToYuv(Ox421)[0]>=0.5){SetGradientPositionDark();} else {SetGradientPositionLight();} ;if(event[OxOea51[91]]!=null){if(event[OxOea51[91]][OxOea51[108]]==OxOea51[109]){return ;} ;if(event[OxOea51[91]][OxOea51[108]]==OxOea51[110]){return ;} ;} ;var Ox367;var Ox337;var Ox448;if(ColorMode>=0&&ColorMode<=2){for(var i=0;i<3;i++){Ox43d[i]*=255;} ;} ;switch(ColorMode){case 0:Ox367=Ox43d[1];Ox337=Ox43d[2];Ox448=Ox43d[0]==0?1:Ox43d[0];break ;;case 1:Ox367=Ox43d[0]==0?1:Ox43d[0];Ox337=Ox43d[2];Ox448=Ox43d[1];break ;;case 2:Ox367=Ox43d[0]==0?1:Ox43d[0];Ox337=Ox43d[1];Ox448=Ox43d[2];break ;;case 3:Ox367=Ox421[2];Ox337=Ox421[1];Ox448=Ox421[0];break ;;case 4:Ox367=Ox421[2];Ox337=Ox421[0];Ox448=Ox421[1];break ;;case 5:Ox367=Ox421[0];Ox337=Ox421[1];Ox448=Ox421[2];break ;;} ;Ox337=255-Ox337;Ox448=255-Ox448;SetBgPosition(pnlGradientPosition,Ox367-5,Ox337-5);pnlVerticalPosition[OxOea51[88]][OxOea51[111]]=(Ox448+27)+OxOea51[98];} ;function SetupGradients(){var Ox43d=Form_Get_Hsb();var Ox421=Form_Get_Rgb();switch(ColorMode){case 0:SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox43d[0])));break ;;case 1:var Ox1c= new Array();for(var i=0;i<3;i++){Ox1c[i]=Math.round(Ox43d[2]*255);} ;SetBg(pnlGradientHsbHue_Hue,RgbToHex(HueToRgb(Ox43d[0])),pnlVerticalHsbSaturation_Hue,RgbToHex(HsbToRgb( new Array(Ox43d[0],1,Ox43d[2]))),pnlVerticalHsbSaturation_White,RgbToHex(Ox1c));pnlGradientRgb_Overlay1[OxOea51[113]][0][OxOea51[112]]=(100-Math.round(Ox43d[1]*100));break ;;case 2:SetBg(pnlVerticalHsbBrightness_Hue,RgbToHex(HsbToRgb( new Array(Ox43d[0],Ox43d[1],1))));pnlGradientRgb_Overlay1[OxOea51[113]][0][OxOea51[112]]=(100-Math.round(Ox43d[2]*100));break ;;case 3:pnlGradientRgb_Invert[OxOea51[113]][3][OxOea51[112]]=100-Math.round((Ox421[0]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(0xFF,Ox421[1],Ox421[2])),pnlVerticalRgb_End,RgbToHex( new Array(0x00,Ox421[1],Ox421[2])));break ;;case 4:pnlGradientRgb_Invert[OxOea51[113]][3][OxOea51[112]]=100-Math.round((Ox421[1]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox421[0],0xFF,Ox421[2])),pnlVerticalRgb_End,RgbToHex( new Array(Ox421[0],0x00,Ox421[2])));break ;;case 5:pnlGradientRgb_Invert[OxOea51[113]][3][OxOea51[112]]=100-Math.round((Ox421[2]/255)*100);SetBg(pnlVerticalRgb_Start,RgbToHex( new Array(Ox421[0],Ox421[1],0xFF)),pnlVerticalRgb_End,RgbToHex( new Array(Ox421[0],Ox421[1],0x00)));break ;;default:;} ;} ;function SetGradientPositionDark(){if(GradientPositionDark){return ;} ;GradientPositionDark=true;pnlGradientPosition[OxOea51[88]][OxOea51[114]]=OxOea51[115];} ;function SetGradientPositionLight(){if(!GradientPositionDark){return ;} ;GradientPositionDark=false;pnlGradientPosition[OxOea51[88]][OxOea51[114]]=OxOea51[116];} ;function pnlGradient_Top_Click(){event[OxOea51[117]]=true;SetGradientPosition(event[OxOea51[118]]-5,event[OxOea51[119]]-5);pnlGradient_Top[OxOea51[120]]=OxOea51[121];} ;function pnlGradient_Top_MouseMove(){event[OxOea51[117]]=true;if(event[OxOea51[122]]!=1){return ;} ;SetGradientPosition(event[OxOea51[118]]-5,event[OxOea51[119]]-5);} ;function pnlGradient_Top_MouseDown(){event[OxOea51[117]]=true;SetGradientPosition(event[OxOea51[118]]-5,event[OxOea51[119]]-5);pnlGradient_Top[OxOea51[120]]=OxOea51[123];} ;function pnlGradient_Top_MouseUp(){event[OxOea51[117]]=true;SetGradientPosition(event[OxOea51[118]]-5,event[OxOea51[119]]-5);pnlGradient_Top[OxOea51[120]]=OxOea51[121];} ;function Document_MouseUp(){event[OxOea51[117]]=true;pnlGradient_Top[OxOea51[120]]=OxOea51[121];} ;function SetVerticalPosition(Ox448){var Ox448=Ox448-POSITIONADJUSTZ;if(Ox448<27){Ox448=27;} ;if(Ox448>282){Ox448=282;} ;pnlVerticalPosition[OxOea51[88]][OxOea51[111]]=Ox448+OxOea51[98];Ox448=1-((Ox448-27)/255);switch(ColorMode){case 0:if(Ox448==1){Ox448=0;} ;frm[OxOea51[6]][OxOea51[79]]=Math.round(Ox448*360);Hsb_Changed();break ;;case 1:frm[OxOea51[8]][OxOea51[79]]=Math.round(Ox448*100);Hsb_Changed();break ;;case 2:frm[OxOea51[9]][OxOea51[79]]=Math.round(Ox448*100);Hsb_Changed();break ;;case 3:frm[OxOea51[10]][OxOea51[79]]=Math.round(Ox448*255);Rgb_Changed();break ;;case 4:frm[OxOea51[11]][OxOea51[79]]=Math.round(Ox448*255);Rgb_Changed();break ;;case 5:frm[OxOea51[12]][OxOea51[79]]=Math.round(Ox448*255);Rgb_Changed();break ;;} ;} ;function pnlVertical_Top_Click(){SetVerticalPosition(event[OxOea51[119]]-5);event[OxOea51[117]]=true;} ;function pnlVertical_Top_MouseMove(){if(event[OxOea51[122]]!=1){return ;} ;SetVerticalPosition(event[OxOea51[119]]-5);event[OxOea51[117]]=true;} ;function pnlVertical_Top_MouseDown(){SetVerticalPosition(event[OxOea51[119]]-5);event[OxOea51[117]]=true;} ;function pnlVertical_Top_MouseUp(){SetVerticalPosition(event[OxOea51[119]]-5);event[OxOea51[117]]=true;} ;function SetCookie(name,Ox289,Ox28a){var Ox28b=name+OxOea51[124]+escape(Ox289)+OxOea51[125];if(Ox28a){var Ox272= new Date();Ox272.setSeconds(Ox272.getSeconds()+Ox28a);Ox28b+=OxOea51[126]+Ox272.toUTCString()+OxOea51[127];} ;document[OxOea51[128]]=Ox28b;} ;function GetCookie(name){var Ox28d=document[OxOea51[128]].split(OxOea51[127]);for(var i=0;i<Ox28d[OxOea51[25]];i++){var Ox28e=Ox28d[i].split(OxOea51[124]);if(name==Ox28e[0].replace(/\s/g,OxOea51[84])){return unescape(Ox28e[1]);} ;} ;} ;function GetCookieDictionary(){var Ox290={};var Ox28d=document[OxOea51[128]].split(OxOea51[127]);for(var i=0;i<Ox28d[OxOea51[25]];i++){var Ox28e=Ox28d[i].split(OxOea51[124]);Ox290[Ox28e[0].replace(/\s/g,OxOea51[84])]=unescape(Ox28e[1]);} ;return Ox290;} ;function RgbIsWebSafe(Ox421){var Ox29b=RgbToHex(Ox421);for(var i=0;i<3;i++){if(OxOea51[129].indexOf(Ox29b.substr(i*2,2))==-1){return false;} ;} ;return true;} ;function RgbToWebSafeRgb(Ox421){var Ox458= new Array(Ox421[0],Ox421[1],Ox421[2]);if(RgbIsWebSafe(Ox421)){return Ox458;} ;var Ox459= new Array(0x00,0x33,0x66,0x99,0xCC,0xFF);for(var i=0;i<3;i++){for(var Ox22c=1;Ox22c<6;Ox22c++){if(Ox458[i]>Ox459[Ox22c-1]&&Ox458[i]<Ox459[Ox22c]){if(Ox458[i]-Ox459[Ox22c-1]>Ox459[Ox22c]-Ox458[i]){Ox458[i]=Ox459[Ox22c];} else {Ox458[i]=Ox459[Ox22c-1];} ;break ;} ;} ;} ;return Ox458;} ;function RgbToYuv(Ox421){var Ox45b= new Array();Ox45b[0]=(Ox421[0]*0.299+Ox421[1]*0.587+Ox421[2]*0.114)/255;Ox45b[1]=(Ox421[0]*-0.169+Ox421[1]*-0.332+Ox421[2]*0.500+128)/255;Ox45b[2]=(Ox421[0]*0.500+Ox421[1]*-0.419+Ox421[2]*-0.0813+128)/255;return Ox45b;} ;function RgbToHsb(Ox421){var Ox45d= new Array(Ox421[0],Ox421[1],Ox421[2]);var Ox45e= new Number(1);var Ox45f= new Number(0);var Ox460= new Number(1);var Ox43d= new Array(0,0,0);var Ox461= new Array();for(var i=0;i<3;i++){Ox45d[i]=Ox421[i]/255;if(Ox45d[i]<Ox45e){Ox45e=Ox45d[i];} ;if(Ox45d[i]>Ox45f){Ox45f=Ox45d[i];} ;} ;Ox460=Ox45f-Ox45e;Ox43d[2]=Ox45f;if(Ox460==0){return Ox43d;} ;Ox43d[1]=Ox460/Ox45f;for(var i=0;i<3;i++){Ox461[i]=(((Ox45f-Ox45d[i])/6)+(Ox460/2))/Ox460;} ;if(Ox45d[0]==Ox45f){Ox43d[0]=Ox461[2]-Ox461[1];} else {if(Ox45d[1]==Ox45f){Ox43d[0]=(1/3)+Ox461[0]-Ox461[2];} else {if(Ox45d[2]==Ox45f){Ox43d[0]=(2/3)+Ox461[1]-Ox461[0];} ;} ;} ;if(Ox43d[0]<0){Ox43d[0]+=1;} else {if(Ox43d[0]>1){Ox43d[0]-=1;} ;} ;return Ox43d;} ;function HsbToRgb(Ox43d){var Ox421=HueToRgb(Ox43d[0]);var Ox234=Ox43d[2]*255;for(var i=0;i<3;i++){Ox421[i]=Ox421[i]*Ox43d[2];Ox421[i]=((Ox421[i]-Ox234)*Ox43d[1])+Ox234;Ox421[i]=Math.round(Ox421[i]);} ;return Ox421;} ;function RgbToHex(Ox421){var Ox29b= new String();for(var i=0;i<3;i++){Ox421[2-i]=Math.round(Ox421[2-i]);Ox29b=Ox421[2-i].toString(16)+Ox29b;if(Ox29b[OxOea51[25]]%2==1){Ox29b=OxOea51[107]+Ox29b;} ;} ;return Ox29b.toUpperCase();} ;function HexToRgb(Ox29b){var Ox421= new Array();for(var i=0;i<3;i++){Ox421[i]= new Number(OxOea51[130]+Ox29b.substr(i*2,2));} ;return Ox421;} ;function HueToRgb(Ox466){var Ox467=Ox466*360;var Ox421= new Array(0,0,0);var Ox468=(Ox467%60)/60;if(Ox467<60){Ox421[0]=255;Ox421[1]=Ox468*255;} else {if(Ox467<120){Ox421[1]=255;Ox421[0]=(1-Ox468)*255;} else {if(Ox467<180){Ox421[1]=255;Ox421[2]=Ox468*255;} else {if(Ox467<240){Ox421[2]=255;Ox421[1]=(1-Ox468)*255;} else {if(Ox467<300){Ox421[2]=255;Ox421[0]=Ox468*255;} else {if(Ox467<360){Ox421[0]=255;Ox421[2]=(1-Ox468)*255;} ;} ;} ;} ;} ;} ;return Ox421;} ;function CheckHexSelect(){if(window[OxOea51[131]]&&window[OxOea51[132]]&&frm[OxOea51[13]]){var Ox296=OxOea51[73]+frm[OxOea51[13]][OxOea51[79]];if(Ox296[OxOea51[25]]==7){if(window[OxOea51[133]]!=Ox296){window[OxOea51[133]]=Ox296;window.do_select(Ox296);} ;} ;} ;} ;setInterval(CheckHexSelect,10);