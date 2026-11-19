<?php
require_once '../app/core/Controller.php';
require_once '../app/models/User.php';

class AuthController extends Controller {
  public function login(): void {
    $data = json_decode(file_get_contents('php://input'));

    if (!isset($data->email, $data->password)) {
      $this->json(['error' => 'Datos incompletos.'], 400);
      return;
    }

    $model = new User();
    $user = $model->findByEmail($data->email);

    if (!$user || !password_verify($data->password, $user['password'])) {
      $this->json(['error' => 'Credenciales inválidas.'], 401);
      return;
    }

    $model->updateActivity((int)$user['usuario_id']);
    unset($user['password']);
    $this->json($user);
  }

  public function register(): void {
    $data = json_decode(file_get_contents('php://input'));

    if (!isset($data->nombre, $data->email, $data->password)) {
      $this->json(['error' => 'Complete todos los campos.'], 400);
      return;
    }

    $ok = (new User())->create($data);
    $this->json($ok ? ['mensaje' => 'Cuenta registrada.'] : ['error' => 'No se pudo registrar la cuenta.']);
  }
}
