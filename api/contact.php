<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Get the origin
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

// Allowed origins
$allowed_origins = [
    'https://bryanparreira.com',
    'http://bryanparreira.com',
    'https://mintcream-lyrebird-681238.hostingersite.com',
    'http://mintcream-lyrebird-681238.hostingersite.com'
];

// Set CORS headers if origin is allowed
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: {$origin}");
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Get POST data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate input
$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$company = isset($data['company']) ? trim($data['company']) : 'N/A';
$message = isset($data['message']) ? trim($data['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$company = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Email configuration
$to = 'bryan@webvisionrank.com';
$subject = 'Portfolio Contact Form: ' . $name;

// HTML email body
$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #4a5568; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f7fafc; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2d3748; }
        .value { color: #4a5568; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Contact Form Submission</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Name:</div>
                <div class='value'>{$name}</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'>{$email}</div>
            </div>
            <div class='field'>
                <div class='label'>Company:</div>
                <div class='value'>{$company}</div>
            </div>
            <div class='field'>
                <div class='label'>Message:</div>
                <div class='value'>" . nl2br($message) . "</div>
            </div>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: Portfolio Contact Form <noreply@bryanparreira.com>" . "\r\n";
$headers .= "Reply-To: {$email}" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mailSent = mail($to, $subject, $emailBody, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    error_log("Failed to send email from contact form. Name: {$name}, Email: {$email}");
    echo json_encode(['success' => false, 'error' => 'Failed to send email. Please try again later.']);
}
?>