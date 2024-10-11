<?php
include 'db.php';

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $result = $conn->query("SELECT * FROM shop03 WHERE id=$id");
            $data = $result->fetch_assoc();
            echo json_encode($data);
        } else {
            $result = $conn->query("SELECT * FROM shop03");
            $laptops = [];
            while ($row = $result->fetch_assoc()) {
                $laptops[] = $row;
            }
            echo json_encode($laptops);
        }
        break;

    case 'POST':
        $model_name = $input['model_name'];
        $price = $input['price'];
        $warranty = $input['warranty'];
        $in_stock = $input['in_stock'];
        
        $conn->query("INSERT INTO shop03 (model_name, price, warranty, in_stock) VALUES ('$model_name', $price, '$warranty', $in_stock)");
        echo json_encode(["message" => "Laptop added successfully"]);
        break;

    case 'PUT':
        $id = $_GET['id'];
        $model_name = $input['model_name'];
        $price = $input['price'];
        $warranty = $input['warranty'];
        $in_stock = $input['in_stock'];
        
        $conn->query("UPDATE shop03 SET model_name='$model_name', price=$price, warranty='$warranty', in_stock=$in_stock WHERE id=$id");
        echo json_encode(["message" => "Laptop updated successfully"]);
        break;

    case 'DELETE':
        $id = $_GET['id'];
        $conn->query("DELETE FROM shop03 WHERE id=$id");
        echo json_encode(["message" => "Laptop deleted successfully"]);
        break;

    default:
        echo json_encode(["message" => "Invalid request method"]);
        break;
}

$conn->close();
?>