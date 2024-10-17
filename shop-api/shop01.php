<?php
include 'db.php';

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $stmt = $conn->prepare("SELECT * FROM shop01 WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            $data = $result->fetch_assoc();
            
            if ($data) {
                echo json_encode($data);
            } else {
                echo json_encode(["message" => "Laptop not found"]);
            }
        } else {
            $result = $conn->query("SELECT * FROM shop01");
            $laptops = [];
            while ($row = $result->fetch_assoc()) {
                $laptops[] = $row;
            }
            echo json_encode($laptops);
        }
        break;

    case 'POST':
        if (isset($input['model_name'], $input['price'], $input['warranty'], $input['in_stock'])) {
            $model_name = $input['model_name'];
            $price = $input['price'];
            $warranty = $input['warranty'];
            $in_stock = $input['in_stock'];

            $stmt = $conn->prepare("INSERT INTO shop01 (model_name, price, warranty, in_stock) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("sisi", $model_name, $price, $warranty, $in_stock);
            $stmt->execute();
            
            if ($stmt->affected_rows > 0) {
                echo json_encode(["message" => "Laptop added successfully"]);
            } else {
                echo json_encode(["message" => "Error adding laptop"]);
            }
        } else {
            echo json_encode(["message" => "Missing required fields"]);
        }
        break;

    case 'PUT':
        if (isset($_GET['id']) && isset($input['model_name'], $input['price'], $input['warranty'], $input['in_stock'])) {
            $id = $_GET['id'];
            $model_name = $input['model_name'];
            $price = $input['price'];
            $warranty = $input['warranty'];
            $in_stock = $input['in_stock'];

            $stmt = $conn->prepare("UPDATE shop01 SET model_name = ?, price = ?, warranty = ?, in_stock = ? WHERE id = ?");
            $stmt->bind_param("sisii", $model_name, $price, $warranty, $in_stock, $id);
            $stmt->execute();

            if ($stmt->affected_rows > 0) {
                echo json_encode(["message" => "Laptop updated successfully"]);
            } else {
                echo json_encode(["message" => "Laptop not found or no change in data"]);
            }
        } else {
            echo json_encode(["message" => "Missing required fields or ID"]);
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $stmt = $conn->prepare("DELETE FROM shop01 WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            
            if ($stmt->affected_rows > 0) {
                echo json_encode(["message" => "Laptop deleted successfully"]);
            } else {
                echo json_encode(["message" => "Laptop not found"]);
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