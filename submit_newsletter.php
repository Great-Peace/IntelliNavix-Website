<?php
require_once 'db_config.php';
header('Content-Type: application/json');
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
if ($conn->connect_error) { echo json_encode(['result'=>'error']); exit; }

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';

$stmt = $conn->prepare("INSERT INTO newsletter_subscribers (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);
$stmt->execute();

echo json_encode(['result' => $stmt->affected_rows > 0 ? 'success' : 'error']);
$stmt->close();
$conn->close();
?> 