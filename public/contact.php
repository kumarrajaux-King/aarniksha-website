<?php
/**
 * Aarniksha Solutions - contact + enquiry form handler.
 * Receives POSTs from the site forms and emails them to $TO.
 * Change $TO to the inbox that should receive enquiries.
 */
$TO      = 'info@aarnikshasolutions.com, hr@aarnikshasolutions.com';
$SUBJECT = 'New website enquiry';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

function field($k) { return isset($_POST[$k]) ? trim(strip_tags($_POST[$k])) : ''; }

$name    = field('name');
$email   = field('email');
$company = field('company');
$service = field('service');
$message = field('message');

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Please complete all required fields.']);
  exit;
}

$body = "New enquiry from the website\n\n"
      . "Name:    $name\n"
      . "Email:   $email\n"
      . "Company: $company\n"
      . "Service: $service\n\n"
      . "Message:\n$message\n";

$headers  = "From: Aarniksha Website <no-reply@" . preg_replace('/^www\./', '', $_SERVER['HTTP_HOST']) . ">\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

$sent = @mail($TO, $SUBJECT, $body, $headers);

if (!$sent) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Mail server rejected the message.']);
  exit;
}

echo json_encode(['ok' => true]);
