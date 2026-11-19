<?php
require_once '../app/core/Controller.php';
require_once '../app/models/Cita.php';
require_once '../app/services/CitaService.php';

class CitaController extends Controller {
  private CitaService $service;

  public function __construct() {
    $this->service = new CitaService();
  }

  public function index(): void {
    $this->json((new Cita())->all());
  }

  public function store(): void {
    $data = json_decode(file_get_contents('php://input'), true);

    if (empty($data['usuario_id']) || empty($data['servicio_id']) || empty($data['fecha']) || empty($data['hora'])) {
      $this->json(['error' => 'Faltan campos obligatorios.'], 400);
      return;
    }

    if ($data['fecha'] < date('Y-m-d')) {
      $this->json(['error' => 'No se permiten fechas pasadas.'], 400);
      return;
    }

    $hora = strtotime($data['hora']);
    if ($hora < strtotime('08:00') || $hora > strtotime('18:00')) {
      $this->json(['error' => 'Horario fuera de atención.'], 400);
      return;
    }

    if ((new Cita())->checkSlot($data['fecha'], $data['hora'])) {
      $this->json(['error' => 'Ese horario ya está ocupado.'], 409);
      return;
    }

    $this->json($this->service->crear($data));
  }

  public function cancelar(): void {
    $data = json_decode(file_get_contents('php://input'), true);

    if (empty($data['cita_id'])) {
      $this->json(['error' => 'Cita inválida.'], 400);
      return;
    }

    (new Cita())->cancel((int)$data['cita_id']);
    $this->json(['mensaje' => 'Cita cancelada correctamente.']);
  }
}
