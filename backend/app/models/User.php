<?php
require_once '../app/core/Database.php';

class User {
  private PDO $db;

  public function __construct() {
    $this->db = (new Database())->connect();
  }

  public function findByEmail(string $email) {
    $stmt = $this->db->prepare('SELECT * FROM usuarios WHERE email = ?');
    $stmt->execute([$email]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public function create(object $data): bool {
    $rol = isset($data->rol_id) ? (int)$data->rol_id : 2;
    $stmt = $this->db->prepare('INSERT INTO usuarios (nombre,email,password,rol_id) VALUES (?,?,?,?)');
    return $stmt->execute([
      $data->nombre,
      $data->email,
      password_hash($data->password, PASSWORD_BCRYPT),
      $rol
    ]);
  }

  public function getAll(): array {
    $sql = 'SELECT u.usuario_id,u.nombre,u.email,u.fecha_registro,u.ultima_actividad,u.rol_id,r.nombre AS rol
            FROM usuarios u LEFT JOIN roles r ON u.rol_id = r.rol_id ORDER BY u.usuario_id ASC';
    return $this->db->query($sql)->fetchAll(PDO::FETCH_ASSOC);
  }

  public function updateActivity(int $id): bool {
    $stmt = $this->db->prepare('UPDATE usuarios SET ultima_actividad = NOW() WHERE usuario_id = ?');
    return $stmt->execute([$id]);
  }

  public function delete(int $id): bool {
    $stmt = $this->db->prepare('DELETE FROM usuarios WHERE usuario_id = ?');
    return $stmt->execute([$id]);
  }
}
