var OxOd0d1=["top","opener","_dialog_arguments","document","dialogArguments","editor","window","element","changed","propertyName","value","checked","trim","prototype",""];function Window_GetDialogTop(Ox309){return Ox309[OxOd0d1[0]];} ;function Window_FindDialogArguments(Ox309){var Ox39e=Ox309[OxOd0d1[0]];try{var Ox39f=Ox39e[OxOd0d1[1]];if(Ox39f&&Ox39f[OxOd0d1[3]][OxOd0d1[2]]){return Ox39f[OxOd0d1[3]][OxOd0d1[2]];} ;} catch(x){} ;if(Ox39e[OxOd0d1[3]][OxOd0d1[2]]){return Ox39e[OxOd0d1[3]][OxOd0d1[2]];} ;if(Ox39e[OxOd0d1[4]]){return Ox39e[OxOd0d1[4]];} ;return Ox39e[OxOd0d1[3]][OxOd0d1[2]];} ;var arg=Window_FindDialogArguments(window);var editor=arg[OxOd0d1[5]];var editwin=arg[OxOd0d1[6]];var editdoc=arg[OxOd0d1[3]];var element=arg[OxOd0d1[7]];var syncingtoview=false;Window_GetDialogTop(window)[OxOd0d1[8]]=Window_GetDialogTop(window)[OxOd0d1[8]]||arg[OxOd0d1[8]];function OnPropertyChange(){if(syncingtoview){return ;} ;var Ox49c=Event_GetEvent();if(Ox49c[OxOd0d1[9]]!=OxOd0d1[10]&&Ox49c[OxOd0d1[9]]!=OxOd0d1[11]){return ;} ;FireUIChanged();} ;function FireUIChanged(){Window_GetDialogTop(window)[OxOd0d1[8]]=true;SyncTo(element);UpdateState();} ;function SyncToViewInternal(){syncingtoview=true;try{SyncToView();UpdateState();} finally{syncingtoview=false;} ;} ;String[OxOd0d1[13]][OxOd0d1[12]]=function (){return this.replace(/(^\s*)|(\s*$)/g,OxOd0d1[14]);} ;function UpdateState(){} ;function SyncTo(element){} ;function SyncToView(){} ;