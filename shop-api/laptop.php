<?php
include 'db.php';

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $result = $conn->query("SELECT * FROM laptop WHERE id=$id");
            if ($result->num_rows > 0) {
                $data = $result->fetch_assoc();
                echo json_encode($data);
            } else {
                echo json_encode(["message" => "Laptop not found"]);
            }
        } else {
            $result = $conn->query("SELECT * FROM laptop");
            $laptops = [];
            while ($row = $result->fetch_assoc()) {
                $laptops[] = $row;
            }
            echo json_encode($laptops);
        }
        break;

    case 'POST':
        // Ensure all fields are passed
        if (isset($input['brand'], $input['model'], $input['processor'], $input['ram'], $input['storage'], $input['display'], $input['gpu'], $input['weight'], $input['battery'])) {
            $brand = $input['brand'];
            $model = $input['model'];
            $processor = $input['processor'];
            $ram = $input['ram'];
            $storage = $input['storage'];
            $display = $input['display'];
            $gpu = $input['gpu'];
            $weight = $input['weight'];
            $battery = $input['battery'];

            $conn->query("INSERT INTO laptop (brand, model, processor, ram, storage, display, gpu, weight, battery) 
                          VALUES ('$brand', '$model', '$processor', '$ram', '$storage', '$display', '$gpu', '$weight', '$battery')");
            echo json_encode(["message" => "Laptop added successfully"]);
        } else {
            echo json_encode(["message" => "Missing required fields"]);
        }
        break;

    case 'PUT':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            if (isset($input['brand'], $input['model'], $input['processor'], $input['ram'], $input['storage'], $input['display'], $input['gpu'], $input['weight'], $input['battery'])) {
                $brand = $input['brand'];
                $model = $input['model'];
                $processor = $input['processor'];
                $ram = $input['ram'];
                $storage = $input['storage'];
                $display = $input['display'];
                $gpu = $input['gpu'];
                $weight = $input['weight'];
                $battery = $input['battery'];

                $conn->query("UPDATE laptop SET brand='$brand', model='$model', processor='$processor', ram='$ram', storage='$storage', display='$display', gpu='$gpu', weight='$weight', battery='$battery' WHERE id=$id");
                echo json_encode(["message" => "Laptop updated successfully"]);
            } else {
                echo json_encode(["message" => "Missing required fields"]);
            }
        } else {
            echo json_encode(["message" => "Laptop ID not provided"]);
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $result = $conn->query("DELETE FROM laptop WHERE id=$id");
            if ($conn->affected_rows > 0) {
                echo json_encode(["message" => "Laptop deleted successfully"]);
            } else {
                echo json_encode(["message" => "Laptop not found or could not be deleted"]);
            }
        } else {
            echo json_encode(["message" => "Laptop ID not provided"]);
        }
        break;

    default:
        echo json_encode(["message" => "Invalid request method"]);
        break;
}

$conn->close();
?>