var OxOa3f6=["_forms","_getWordObject","_wordInputStr","_adjustIndexes","_isWordChar","_lastPos","wordChar","windowType","wordWindow","originalSpellings","suggestions","checkWordBgColor","pink","normWordBgColor","white","text","","textInputs","indexes","resetForm","totalMisspellings","totalWords","totalPreviousWords","getTextVal","setFocus","removeFocus","setText","writeBody","printForHtml","length","value","type","backgroundColor","style","size","document","\x3Cform name=\x22textInput","\x22\x3E","\x3Cdiv class=\x22plainText\x22\x3E","\x3C/div\x3E","\x3C/form\x3E","forms","elements","\x3Cinput readonly ","class=\x22blend\x22 type=\x22text\x22 value=\x22","\x22 size=\x22"];function wordWindow(){this[OxOa3f6[0]]=[];this[OxOa3f6[1]]=_getWordObject;this[OxOa3f6[2]]=_wordInputStr;this[OxOa3f6[3]]=_adjustIndexes;this[OxOa3f6[4]]=_isWordChar;this[OxOa3f6[5]]=_lastPos;this[OxOa3f6[6]]=/[a-zA-Z]/;this[OxOa3f6[7]]=OxOa3f6[8];this[OxOa3f6[9]]= new Array();this[OxOa3f6[10]]= new Array();this[OxOa3f6[11]]=OxOa3f6[12];this[OxOa3f6[13]]=OxOa3f6[14];this[OxOa3f6[15]]=OxOa3f6[16];this[OxOa3f6[17]]= new Array();this[OxOa3f6[18]]= new Array();this[OxOa3f6[19]]=resetForm;this[OxOa3f6[20]]=totalMisspellings;this[OxOa3f6[21]]=totalWords;this[OxOa3f6[22]]=totalPreviousWords;this[OxOa3f6[23]]=getTextVal;this[OxOa3f6[24]]=setFocus;this[OxOa3f6[25]]=removeFocus;this[OxOa3f6[26]]=setText;this[OxOa3f6[27]]=writeBody;this[OxOa3f6[28]]=printForHtml;} ;function resetForm(){if(this[OxOa3f6[0]]){for(var i=0;i<this[OxOa3f6[0]][OxOa3f6[29]];i++){this[OxOa3f6[0]][i].reset();} ;} ;return true;} ;function totalMisspellings(){var Ox262=0;for(var i=0;i<this[OxOa3f6[17]][OxOa3f6[29]];i++){Ox262+=this.totalWords(i);} ;return Ox262;} ;function totalWords(Ox264){return this[OxOa3f6[9]][Ox264][OxOa3f6[29]];} ;function totalPreviousWords(Ox264,Ox266){var Ox262=0;for(var i=0;i<=Ox264;i++){for(var Ox22c=0;Ox22c<this.totalWords(i);Ox22c++){if(i==Ox264&&Ox22c==Ox266){break ;} else {Ox262++;} ;} ;} ;return Ox262;} ;function getTextVal(Ox264,Ox266){var Ox268=this._getWordObject(Ox264,Ox266);if(Ox268){return Ox268[OxOa3f6[30]];} ;} ;function setFocus(Ox264,Ox266){var Ox268=this._getWordObject(Ox264,Ox266);if(Ox268){if(Ox268[OxOa3f6[31]]==OxOa3f6[15]){Ox268.focus();Ox268[OxOa3f6[33]][OxOa3f6[32]]=this[OxOa3f6[11]];} ;} ;} ;function removeFocus(Ox264,Ox266){var Ox268=this._getWordObject(Ox264,Ox266);if(Ox268){if(Ox268[OxOa3f6[31]]==OxOa3f6[15]){Ox268.blur();Ox268[OxOa3f6[33]][OxOa3f6[32]]=this[OxOa3f6[13]];} ;} ;} ;function setText(Ox264,Ox266,Ox25c){var Ox268=this._getWordObject(Ox264,Ox266);var Ox26c;var Ox26d;if(Ox268){var Ox26e=this[OxOa3f6[18]][Ox264][Ox266];var Ox26f=Ox268[OxOa3f6[30]];Ox26c=this[OxOa3f6[17]][Ox264].substring(0,Ox26e);Ox26d=this[OxOa3f6[17]][Ox264].substring(Ox26e+Ox26f[OxOa3f6[29]],this[OxOa3f6[17]][Ox264].length);this[OxOa3f6[17]][Ox264]=Ox26c+Ox25c+Ox26d;var Ox270=Ox25c[OxOa3f6[29]]-Ox26f[OxOa3f6[29]];this._adjustIndexes(Ox264,Ox266,Ox270);Ox268[OxOa3f6[34]]=Ox25c[OxOa3f6[29]];Ox268[OxOa3f6[30]]=Ox25c;this.removeFocus(Ox264,Ox266);} ;} ;function writeBody(){var Ox272=window[OxOa3f6[35]];var Ox273=false;Ox272.open();for(var Ox274=0;Ox274<this[OxOa3f6[17]][OxOa3f6[29]];Ox274++){var Ox275=0;var Ox276=0;Ox272.writeln(OxOa3f6[36]+Ox274+OxOa3f6[37]);var Ox277=this[OxOa3f6[17]][Ox274];this[OxOa3f6[18]][Ox274]=[];if(Ox277){var Ox278=this[OxOa3f6[9]][Ox274];if(!Ox278){break ;} ;Ox272.writeln(OxOa3f6[38]);for(var i=0;i<Ox278[OxOa3f6[29]];i++){do{Ox276=Ox277.indexOf(Ox278[i],Ox275);Ox275=Ox276+Ox278[i][OxOa3f6[29]];if(Ox276==-1){break ;} ;var Ox279=Ox277.charAt(Ox276-1);var Ox27a=Ox277.charAt(Ox275);} while(this._isWordChar(Ox279)||this._isWordChar(Ox27a));;this[OxOa3f6[18]][Ox274][i]=Ox276;for(var Ox22c=this._lastPos(Ox274,i);Ox22c<Ox276;Ox22c++){Ox272.write(this.printForHtml(Ox277.charAt(Ox22c)));} ;Ox272.write(this._wordInputStr(Ox278[i]));if(i==Ox278[OxOa3f6[29]]-1){Ox272.write(printForHtml(Ox277.substr(Ox275)));} ;} ;Ox272.writeln(OxOa3f6[39]);} ;Ox272.writeln(OxOa3f6[40]);} ;this[OxOa3f6[0]]=Ox272[OxOa3f6[41]];Ox272.close();} ;function _lastPos(Ox274,Ox24c){if(Ox24c>0){return this[OxOa3f6[18]][Ox274][Ox24c-1]+this[OxOa3f6[9]][Ox274][Ox24c-1][OxOa3f6[29]];} else {return 0;} ;} ;function printForHtml(Ox27d){return Ox27d;} ;function _isWordChar(Ox27f){if(Ox27f.search(this.wordChar)==-1){return false;} else {return true;} ;} ;function _getWordObject(Ox264,Ox266){if(this[OxOa3f6[0]][Ox264]){if(this[OxOa3f6[0]][Ox264][OxOa3f6[42]][Ox266]){return this[OxOa3f6[0]][Ox264][OxOa3f6[42]][Ox266];} ;} ;return null;} ;function _wordInputStr(Ox268){var Oxb=OxOa3f6[43];Oxb+=OxOa3f6[44]+Ox268+OxOa3f6[45]+Ox268[OxOa3f6[29]]+OxOa3f6[37];return Oxb;} ;function _adjustIndexes(Ox264,Ox266,Ox270){for(var i=Ox266+1;i<this[OxOa3f6[9]][Ox264][OxOa3f6[29]];i++){this[OxOa3f6[18]][Ox264][i]=this[OxOa3f6[18]][Ox264][i]+Ox270;} ;} ;