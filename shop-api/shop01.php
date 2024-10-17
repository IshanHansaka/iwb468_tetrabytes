<?php
include 'db.php';

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $result = $conn->query("SELECT * FROM shop01 WHERE id=$id");
            $data = $result->fetch_assoc();
            echo json_encode($data);
        } else {
            $result = $conn->query("SELECT * FROM shop01");
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

        $checkId = $conn->query("SELECT * FROM shop01 WHERE id=$id");
        if ($checkId->num_rows > 0) {
            echo json_encode(["message" => "Error: ID already exists. Please use a different ID."]);
            exit;
        }

        $conn->query("INSERT INTO shop01 (id, model_name, price, warranty, in_stock) VALUES ($id, '$model_name', $price, '$warranty', $in_stock)");
        
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

        $conn->query("UPDATE shop01 SET model_name='$model_name', price=$price, warranty='$warranty', in_stock=$in_stock WHERE id=$id");
        
        echo json_encode(["message" => "Product updated successfully"]);
        break;

    case 'DELETE':
        if (!isset($_GET['id'])) {
            echo json_encode(["message" => "Error: 'id' is required to delete a product."]);
            exit;
        }

        $id = intval($_GET['id']);
        $conn->query("DELETE FROM shop01 WHERE id=$id");
        
        echo json_encode(["message" => "Product deleted successfully"]);
        break;

    default:
        echo json_encode(["message" => "Invalid request method"]);
        break;
}

$conn->close();
?>