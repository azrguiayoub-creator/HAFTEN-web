import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function CommunityGuidelines() {
  return (
    <LegalLayout title="Normas de la Comunidad">
      <section>
        <p className="text-lg text-gray-400 mb-8">
          En HAFTEN, queremos crear un entorno seguro, divertido y respetuoso para todos los amantes de la fiesta. Estas normas están diseñadas para asegurar que todos tengan la mejor experiencia posible.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">1. Respeto Mutuo</h2>
        <p>
          Trata a todos los miembros de la comunidad con respeto. No toleramos el acoso, la intimidación, la discriminación ni el lenguaje de odio. Esto incluye comentarios sobre raza, etnia, origen nacional, religión, orientación sexual, género o discapacidad.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">2. Contenido Apropiado</h2>
        <p className="mb-4">
          Asegúrate de que el contenido que compartes sea apropiado. No se permite:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Contenido sexual explícito o pornografía.</li>
          <li>Violencia gráfica o amenazas de daño físico.</li>
          <li>Promoción de actividades ilegales, incluyendo el uso de drogas ilegales.</li>
          <li>Spam, estafas o publicidad no autorizada.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">3. Autenticidad</h2>
        <p>
          Sé tú mismo. No te hagas pasar por otras personas, marcas u organizaciones. No crees cuentas falsas ni utilices la plataforma para engañar a otros usuarios. La suplantación de identidad es una violación grave de nuestras normas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">4. Seguridad y Privacidad</h2>
        <p>
          No compartas información personal de otros sin su consentimiento explícito. Esto incluye números de teléfono, direcciones, información financiera o cualquier otro dato privado (doxxing). Protege tu propia información y sé cauteloso al interactuar con personas que no conoces en la vida real.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">5. Reporte de Infracciones</h2>
        <p>
          Si ves algo que viola estas normas, por favor repórtalo utilizando las herramientas integradas en la aplicación. Nuestro equipo revisará los reportes y tomará las medidas adecuadas. No uses la función de reporte de manera abusiva.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">6. Consecuencias</h2>
        <p>
          El incumplimiento de estas normas puede resultar en advertencias, eliminación de contenido, suspensión temporal o eliminación permanente de tu cuenta, dependiendo de la gravedad de la infracción.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-white/10">
        Última modificación: Octubre 2023
      </p>
    </LegalLayout>
  );
}
