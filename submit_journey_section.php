<?php
require_once 'db_config.php';
header('Content-Type: application/json');
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
if ($conn->connect_error) { echo json_encode(['result'=>'error']); exit; }

$fullName = $_POST['fullName'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$careerField = $_POST['careerField'] ?? '';
$goals = $_POST['goals'] ?? '';
$terms = isset($_POST['terms']) ? 1 : 0;
$newsletter = isset($_POST['newsletter']) ? 1 : 0;

$stmt = $conn->prepare("INSERT INTO journey_signups (full_name, email, phone, career_field, goals, terms, newsletter) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssi", $fullName, $email, $phone, $careerField, $goals, $terms, $newsletter);
$stmt->execute();

echo json_encode(['result' => $stmt->affected_rows > 0 ? 'success' : 'error']);
$stmt->close();
$conn->close();
?> 