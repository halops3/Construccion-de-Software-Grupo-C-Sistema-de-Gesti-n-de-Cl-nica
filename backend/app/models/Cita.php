<?php
require_once '../app/core/Database.php';

class Cita {
  private PDO $db;

  public function __construct() {
    $this->db = (new Database())->connect();
  }

  public function all(): array {
    $sql = 'SELECT c.*, u.nombre AS paciente, s.nombre AS servicio
            FROM citas c
            INNER JOIN usuarios u ON c.usuario_id = u.usuario_id
            INNER JOIN servicios s ON c.servicio_id = s.servicio_id
            ORDER BY c.fecha DESC, c.hora DESC';
    return $this->db->query($sql)->fetchAll(PDO::FETCH_ASSOC);
  }

  public function create(object $data): bool {
    $stmt = $this->db->prepare('INSERT INTO citas (usuario_id,servicio_id,fecha,hora) VALUES (?,?,?,?)');
    return $stmt->execute([$data->usuario_id,$data->servicio_id,$data->fecha,$data->hora]);
  }

  public function checkSlot(string $fecha, string $hora) {
    $stmt = $this->db->prepare("SELECT * FROM citas WHERE fecha = ? AND hora = ? AND estado != 'cancelada'");
    $stmt->execute([$fecha,$hora]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public function cancel(int $id): bool {
    $stmt = $this->db->prepare("UPDATE citas SET estado='cancelada' WHERE cita_id = ?");
    return $stmt->execute([$id]);
  }
}
