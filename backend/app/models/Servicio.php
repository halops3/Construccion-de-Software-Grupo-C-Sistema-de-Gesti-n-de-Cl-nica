<?php
require_once '../app/core/Database.php';

class Servicio {
  private PDO $db;

  public function __construct() {
    $this->db = (new Database())->connect();
  }

  public function all(): array {
    return $this->db->query('SELECT * FROM servicios ORDER BY servicio_id DESC')->fetchAll(PDO::FETCH_ASSOC);
  }

  public function create(array $data): bool {
    $stmt = $this->db->prepare('INSERT INTO servicios (nombre,descripcion,duracion,precio,imagen) VALUES (?,?,?,?,?)');
    return $stmt->execute([$data['nombre'],$data['descripcion'],$data['duracion'],$data['precio'],$data['imagen']]);
  }

  public function delete(int $id): bool {
    $stmt = $this->db->prepare('DELETE FROM servicios WHERE servicio_id = ?');
    return $stmt->execute([$id]);
  }
}
