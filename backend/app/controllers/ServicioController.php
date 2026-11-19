<?php
require_once '../app/core/Controller.php';
require_once '../app/models/Servicio.php';

class ServicioController extends Controller {
  public function index(): void {
    $this->json((new Servicio())->all());
  }

  public function create(): void {
    $nombre = $_POST['nombre'] ?? '';
    $descripcion = $_POST['descripcion'] ?? '';
    $duracion = (int)($_POST['duracion'] ?? 0);
    $precio = (float)($_POST['precio'] ?? 0);

    if ($nombre === '' || $duracion <= 0 || $precio <= 0) {
      $this->json(['error' => 'Datos incompletos para el servicio.'], 400);
      return;
    }

    $imagen = null;
    if (isset($_FILES['imagen']) && $_FILES['imagen']['tmp_name']) {
      $archivo = time() . '_' . basename($_FILES['imagen']['name']);
      @move_uploaded_file($_FILES['imagen']['tmp_name'], '../public/uploads/' . $archivo);
      $imagen = $archivo;
    }

    (new Servicio())->create([
      'nombre' => $nombre,
      'descripcion' => $descripcion,
      'duracion' => $duracion,
      'precio' => $precio,
      'imagen' => $imagen
    ]);

    $this->json(['mensaje' => 'Servicio clínico creado.']);
  }

  public function delete(): void {
    $data = json_decode(file_get_contents('php://input'), true);
    if (empty($data['servicio_id'])) {
      $this->json(['error' => 'Servicio inválido.'], 400);
      return;
    }

    (new Servicio())->delete((int)$data['servicio_id']);
    $this->json(['mensaje' => 'Servicio eliminado.']);
  }
}
