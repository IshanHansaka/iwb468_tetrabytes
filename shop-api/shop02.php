<?php
include 'db.php';

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $result = $conn->query("SELECT * FROM shop02 WHERE id=$id");
            
            if ($result->num_rows > 0) {
                $data = $result->fetch_assoc();
                echo json_encode($data);
            } else {
                echo json_encode(["message" => "No product found with ID: $id"]);
            }
        } else {
            $result = $conn->query("SELECT * FROM shop02");
            $products = [];
            while ($row = $result->fetch_assoc()) {
                $products[] = $row;
            }
            echo json_encode($products);
        }
        break;

    case 'POST':
        $id = intval($input['id']);
        $model_name = $conn->real_escape_string($input['model_name']);
        $price = intval($input['price']);
        $warranty = $conn->real_escape_string($input['warranty']);
        $in_stock = isset($input['in_stock']) ? ($input['in_stock'] ? 1 : 0) : 0;

        $checkId = $conn->query("SELECT * FROM shop02 WHERE id=$id");
        if ($checkId->num_rows > 0) {
            echo json_encode(["message" => "Error: ID already exists. Please use a different ID."]);
            exit;
        }

        $stmt = $conn->prepare("INSERT INTO shop02 (id, model_name, price, warranty, in_stock) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("isisi", $id, $model_name, $price, $warranty, $in_stock);
        $stmt->execute();

        echo json_encode(["message" => "Product added successfully"]);
        break;

    case 'PUT':
        if (!isset($input['id'])) {
            echo json_encode(["message" => "Error: 'id' is required to update a product."]);
            exit;
        }

        $id = intval($input['id']);
        $model_name = $conn->real_escape_string($input['model_name']);
        $price = intval($input['price']);
        $warranty = $conn->real_escape_string($input['warranty']);
        $in_stock = isset($input['in_stock']) ? ($input['in_stock'] ? 1 : 0) : 0;

        $stmt = $conn->prepare("UPDATE shop02 SET model_name=?, price=?, warranty=?, in_stock=? WHERE id=?");
        $stmt->bind_param("sisii", $model_name, $price, $warranty, $in_stock, $id);
        $stmt->execute();

        echo json_encode(["message" => "Product updated successfully"]);
        break;

    case 'DELETE':
        if (!isset($_GET['id'])) {
            echo json_encode(["message" => "Error: 'id' is required to delete a product."]);
            exit;
        }

        $id = intval($_GET['id']);
        $conn->query("DELETE FROM shop02 WHERE id=$id");

        if ($conn->affected_rows > 0) {
            echo json_encode(["message" => "Product deleted successfully"]);
        } else {
            echo json_encode(["message" => "No product found with ID: $id"]);
        }
        break;

    default:
        echo json_encode(["message" => "Invalid request method"]);
        break;
}

$conn->close();
?>