import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Política de Privacidad">
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">1. Información que recopilamos</h2>
        <p>
          Recopilamos información personal que nos proporcionas directamente al crear una cuenta, actualizar tu perfil o interactuar con nuestra plataforma. Esto incluye tu nombre, dirección de correo electrónico, fecha de nacimiento, fotografías de perfil y datos de ubicación (si nos otorgas permiso).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">2. Uso de la información</h2>
        <p className="mb-4">
          Utilizamos la información que recopilamos para diversos fines, entre ellos:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
          <li>Personalizar tu experiencia y mostrarte eventos relevantes.</li>
          <li>Comunicarnos contigo sobre actualizaciones, alertas de seguridad y mensajes de soporte.</li>
          <li>Proteger a nuestra comunidad y prevenir actividades fraudulentas o ilegales.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">3. Compartir información</h2>
        <p>
          No vendemos tu información personal a terceros. Solo compartimos tu información en las siguientes circunstancias:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400 mt-4">
          <li>Con otros usuarios de HAFTEN, según la configuración de privacidad de tu perfil.</li>
          <li>Con proveedores de servicios que nos ayudan a operar nuestra plataforma (ej. alojamiento web, análisis de datos).</li>
          <li>Cuando sea requerido por la ley o para proteger nuestros derechos legales.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">4. Seguridad de los datos</h2>
        <p>
          Implementamos medidas de seguridad técnicas y organizativas diseñadas para proteger tu información personal contra el acceso no autorizado, la pérdida o la alteración. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">5. Tus derechos</h2>
        <p>
          Tienes derecho a acceder, corregir, actualizar o solicitar la eliminación de tu información personal. Puedes gestionar la mayor parte de esta información directamente desde la configuración de tu cuenta en la aplicación.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">6. Cambios en esta política</h2>
        <p>
          Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cualquier cambio significativo publicando la nueva política en esta página y actualizando la fecha de "Última modificación".
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-white/10">
        Última modificación: Octubre 2023
      </p>
    </LegalLayout>
  );
}
