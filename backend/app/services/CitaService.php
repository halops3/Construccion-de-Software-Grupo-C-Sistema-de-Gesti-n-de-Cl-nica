<?php
require_once '../models/Cita.php';

class CitaService {
  public function crear(array $payload): array {
    $ok = (new Cita())->create((object)$payload);
    return $ok
      ? ['mensaje' => 'Cita médica registrada con éxito.']
      : ['error' => 'No fue posible registrar la cita médica.'];
  }
}
