<?php
/**
 * Aarniksha Solutions - contact + enquiry form handler.
 * General enquiries go to $TO_ENQUIRY; job applications go to $TO_JOBS.
 * Forms flag applications by posting kind=job.
 */
$TO_ENQUIRY = 'info@aarnikshasolutions.com';
$TO_JOBS    = 'hr@aarnikshasolutions.com';

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
$kind    = field('kind');
$role    = field('role');

$isJob   = ($kind === 'job');
$TO      = $isJob ? $TO_JOBS : $TO_ENQUIRY;
$SUBJECT = $isJob ? ('Job application' . ($role !== '' ? ' — ' . $role : '')) : 'New website enquiry';

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Please complete all required fields.']);
  exit;
}

$body = ($isJob ? "New job application from the website\n\n" : "New enquiry from the website\n\n")
      . "Name:    $name\n"
      . "Email:   $email\n"
      . "Company: $company\n"
      . ($isJob ? "Role:    $role\n\n" : "Service: $service\n\n")
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
