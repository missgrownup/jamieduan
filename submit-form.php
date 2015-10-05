<?php
	if ( isset($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message']) ) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];
		$to = "jamie@tundra.com.au";
		$header = 'From: ' . $email . "\r\n" . "website - Jamie Duan";

		if ( mail($to, $subject, $message, $header) ) {
			echo 1;
		} else {
			echo 0;
		}
	}
?>