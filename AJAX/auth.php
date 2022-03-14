<?php

if (isset($_GET['name'])) {
	echo 'Hello ' . $_GET['name'] . 'Your Last Login At ' . $_GET['lastlogin'];
}
