CREATE DATABASE IF NOT EXISTS clinica_ug;
USE clinica_ug;

CREATE TABLE roles (
  rol_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL UNIQUE
);
INSERT INTO roles (nombre) VALUES ('admin'), ('paciente');

CREATE TABLE usuarios (
  usuario_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  rol_id INT NOT NULL,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ultima_actividad TIMESTAMP NULL,
  FOREIGN KEY (rol_id) REFERENCES roles(rol_id)
);

CREATE TABLE servicios (
  servicio_id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL,
  descripcion TEXT,
  duracion INT NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  imagen VARCHAR(255),
  estado BOOLEAN DEFAULT TRUE
);

CREATE TABLE horarios (
  horario_id INT AUTO_INCREMENT PRIMARY KEY,
  dia_semana ENUM('Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'),
  hora_inicio TIME NOT NULL,
  hora_fin TIME NOT NULL
);

CREATE TABLE citas (
  cita_id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  servicio_id INT NOT NULL,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  estado ENUM('pendiente','confirmada','cancelada') DEFAULT 'pendiente',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
  FOREIGN KEY (servicio_id) REFERENCES servicios(servicio_id)
);

CREATE TABLE bloqueos (
  bloqueo_id INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATE NOT NULL,
  hora_inicio TIME NOT NULL,
  hora_fin TIME NOT NULL,
  motivo VARCHAR(255)
);

CREATE TABLE notificaciones (
  notificacion_id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  mensaje VARCHAR(255),
  leido BOOLEAN DEFAULT FALSE,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id)
);
