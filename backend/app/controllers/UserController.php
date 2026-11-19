<?php
require_once '../app/core/Controller.php';
require_once '../app/models/User.php';

class UserController extends Controller {
  public function index(): void {
    $this->json((new User())->getAll());
  }

  public function delete(): void {
    $data = json_decode(file_get_contents('php://input'), true);
    if (empty($data['usuario_id'])) {
      $this->json(['error' => 'Usuario inválido.'], 400);
      return;
    }

    (new User())->delete((int)$data['usuario_id']);
    $this->json(['mensaje' => 'Usuario eliminado.']);
  }
}
