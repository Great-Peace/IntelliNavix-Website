<?php
require_once 'db_config.php';
header('Content-Type: application/json');
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
if ($conn->connect_error) { echo json_encode(['result'=>'error']); exit; }

$selectedEvent = $_POST['selectedEvent'] ?? '';
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

$stmt = $conn->prepare("INSERT INTO event_registrations (selected_event, name, email, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $selectedEvent, $name, $email, $message);
$stmt->execute();

echo json_encode(['result' => $stmt->affected_rows > 0 ? 'success' : 'error']);
$stmt->close();
$conn->close();
?> 