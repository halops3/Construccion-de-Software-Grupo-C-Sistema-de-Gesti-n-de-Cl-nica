<?php
require_once '../app/core/Controller.php';
require_once '../app/core/Database.php';

class DashboardController extends Controller {
  private PDO $db;

  public function __construct() {
    $this->db = (new Database())->connect();
  }

  public function stats(): void {
    $citas = $this->db->query('SELECT COUNT(*) AS total FROM citas')->fetch(PDO::FETCH_ASSOC);
    $usuarios = $this->db->query('SELECT COUNT(*) AS total FROM usuarios')->fetch(PDO::FETCH_ASSOC);
    $servicios = $this->db->query('SELECT COUNT(*) AS total FROM servicios')->fetch(PDO::FETCH_ASSOC);

    $this->json([
      'citas' => (int)$citas['total'],
      'usuarios' => (int)$usuarios['total'],
      'servicios' => (int)$servicios['total']
    ]);
  }
}
