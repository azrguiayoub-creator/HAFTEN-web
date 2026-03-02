import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function TermsOfUse() {
  return (
    <LegalLayout title="Términos de Uso">
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">1. Aceptación de los Términos</h2>
        <p>
          Al acceder, descargar o utilizar la aplicación HAFTEN, aceptas estar sujeto a estos Términos de Uso y a todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, tienes prohibido usar o acceder a este sitio y a nuestra aplicación.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">2. Uso del Servicio</h2>
        <p className="mb-4">
          Te comprometes a utilizar el servicio solo con fines legales y de una manera que no infrinja los derechos de, ni restrinja o inhiba el uso y disfrute del servicio por parte de cualquier tercero. El comportamiento prohibido incluye:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Acosar o causar angustia o inconvenientes a cualquier persona.</li>
          <li>Transmitir contenido obsceno u ofensivo.</li>
          <li>Interrumpir el flujo normal de diálogo dentro de nuestra plataforma.</li>
          <li>Intentar obtener acceso no autorizado a nuestros sistemas.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">3. Cuentas de Usuario</h2>
        <p>
          Para utilizar ciertas funciones de HAFTEN, debes registrarte para obtener una cuenta. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y aceptas la responsabilidad de todas las actividades que ocurran bajo tu cuenta. Nos reservamos el derecho de rechazar el servicio, cancelar cuentas o eliminar contenido a nuestra entera discreción.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">4. Propiedad Intelectual</h2>
        <p>
          Todo el contenido, marcas registradas y otros derechos de propiedad intelectual en el servicio (incluyendo, sin limitación, el diseño, texto, gráficos y todo el software y códigos fuente conectados con la aplicación) son propiedad de HAFTEN o de sus licenciantes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">5. Contenido Generado por el Usuario</h2>
        <p>
          Al publicar contenido en HAFTEN, nos otorgas una licencia mundial, no exclusiva, libre de regalías y transferible para usar, reproducir, distribuir y mostrar dicho contenido en relación con el servicio. Eres el único responsable del contenido que publicas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">6. Limitación de Responsabilidad</h2>
        <p>
          En la medida máxima permitida por la ley aplicable, HAFTEN no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo, o de cualquier pérdida de beneficios o ingresos, ya sea incurrida directa o indirectamente.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">7. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Tu uso continuado del servicio después de cualquier cambio constituye tu aceptación de los nuevos términos.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-white/10">
        Última modificación: Octubre 2023
      </p>
    </LegalLayout>
  );
}
