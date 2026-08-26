<?php
/**
 * Aarniksha Solutions - job application handler (multipart, with CV attachment).
 * Applications go to $TO_JOBS. General enquiries stay in contact.php.
 */
$TO_JOBS = 'hr@aarnikshasolutions.com';
$MAX_BYTES = 5 * 1024 * 1024;
$ALLOWED = array('pdf', 'doc', 'docx', 'rtf', 'odt');

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(array('ok' => false, 'error' => 'Method not allowed'));
  exit;
}

function field($k) { return isset($_POST[$k]) ? trim(strip_tags($_POST[$k])) : ''; }

$role       = field('role');
$name       = field('name');
$email      = field('email');
$phone      = field('phone');
$experience = field('experience');
$message    = field('message');

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $phone === '') {
  http_response_code(422);
  echo json_encode(array('ok' => false, 'error' => 'Please complete all required fields.'));
  exit;
}

$attachName = '';
$attachData = '';
if (isset($_FILES['cv']) && $_FILES['cv']['error'] === UPLOAD_ERR_OK) {
  $tmp  = $_FILES['cv']['tmp_name'];
  $orig = $_FILES['cv']['name'];
  $ext  = strtolower(pathinfo($orig, PATHINFO_EXTENSION));
  if (!in_array($ext, $ALLOWED, true)) {
    http_response_code(422);
    echo json_encode(array('ok' => false, 'error' => 'CV must be a PDF, DOC, DOCX, RTF or ODT file.'));
    exit;
  }
  if (filesize($tmp) > $MAX_BYTES) {
    http_response_code(422);
    echo json_encode(array('ok' => false, 'error' => 'CV is larger than 5 MB.'));
    exit;
  }
  $attachName = preg_replace('/[^A-Za-z0-9._-]/', '_', $orig);
  $attachData = chunk_split(base64_encode(file_get_contents($tmp)));
} elseif (isset($_FILES['cv']) && $_FILES['cv']['error'] !== UPLOAD_ERR_NO_FILE) {
  http_response_code(422);
  echo json_encode(array('ok' => false, 'error' => 'The CV upload did not complete. Please try again.'));
  exit;
}

$SUBJECT = 'Job application' . ($role !== '' ? ' - ' . $role : '');
$host    = preg_replace('/^www\./', '', isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'aarnikshasolutions.com');

$text = "New job application from the website\n\n"
      . "Role:       " . ($role !== '' ? $role : 'General profile') . "\n"
      . "Name:       $name\n"
      . "Email:      $email\n"
      . "Phone:      $phone\n"
      . "Experience: $experience\n"
      . "CV:         " . ($attachName !== '' ? $attachName . ' (attached)' : 'not attached') . "\n\n"
      . "Cover note:\n" . ($message !== '' ? $message : '-') . "\n";

$boundary = '=_aarniksha_' . md5(uniqid((string) mt_rand(), true));

$headers  = "From: Aarniksha Website <no-reply@$host>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

$body  = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=utf-8\r\n";
$body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$body .= $text . "\r\n";

if ($attachName !== '') {
  $body .= "--$boundary\r\n";
  $body .= "Content-Type: application/octet-stream; name=\"$attachName\"\r\n";
  $body .= "Content-Transfer-Encoding: base64\r\n";
  $body .= "Content-Disposition: attachment; filename=\"$attachName\"\r\n\r\n";
  $body .= $attachData . "\r\n";
}
$body .= "--$boundary--";

$sent = @mail($TO_JOBS, $SUBJECT, $body, $headers);

if (!$sent) {
  http_response_code(500);
  echo json_encode(array('ok' => false, 'error' => 'Mail server rejected the message.'));
  exit;
}

echo json_encode(array('ok' => true));
