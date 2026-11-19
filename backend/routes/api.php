<?php
require_once '../app/controllers/AuthController.php';
require_once '../app/controllers/CitaController.php';
require_once '../app/controllers/ServicioController.php';
require_once '../app/controllers/DashboardController.php';
require_once '../app/controllers/UserController.php';

$url = $_GET['url'] ?? '';

switch ($url) {
  case 'login':
    (new AuthController())->login();
    break;

  case 'register':
    (new AuthController())->register();
    break;

  case 'citas':
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
      (new CitaController())->index();
    } else {
      (new CitaController())->store();
    }
    break;

  case 'cancelar-cita':
    (new CitaController())->cancelar();
    break;

  case 'servicios':
    (new ServicioController())->index();
    break;

  case 'servicios/create':
    (new ServicioController())->create();
    break;

  case 'servicios/delete':
    (new ServicioController())->delete();
    break;

  case 'dashboard/stats':
    (new DashboardController())->stats();
    break;

  case 'usuarios':
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
      (new UserController())->index();
    }
    break;

  case 'eliminar-usuario':
    (new UserController())->delete();
    break;

  default:
    echo json_encode(['error' => 'Ruta no encontrada']);
}
