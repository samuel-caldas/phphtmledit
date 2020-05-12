<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sem título</title>
<?php require_once "cuteeditor_files/include_CuteEditor.php" ?>  
</head>
<body>
	<form id="form1" method="POST">
    <?php
		$editor=new CuteEditor();
		$editor->Width="100%";
		$editor->Height="100%";
		$editor->ID="Editor1";
		$editor->Draw();
	?>
    </form>
</body>
</html>