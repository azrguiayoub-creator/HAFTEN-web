import React from 'react';
import LegalLayout from '../components/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Política de Privacidad y Protección de Datos">
      <div className="text-sm text-gray-400 mb-8">
        <p>Última actualización: 20 de febrero de 2026</p>
        <p className="mt-2">La versión en español de este documento es la versión oficial. Las versiones traducidas se proporcionan únicamente para su conveniencia. En caso de discrepancia entre versiones, prevalecerá la versión en español.</p>
      </div>

      <div className="space-y-8">
        <section>
          <p className="mb-4">
            Esta Política de Privacidad explica la información que Haften Haften ("La Compañía", "nosotros" o "nuestro") recopila sobre los usuarios de la aplicación móvil Haften Haften ("la Aplicación", "el Servicio" o "la Plataforma"), cómo se utiliza dicha información, con quiénes se comparte y las opciones que usted tiene respecto a tales usos y divulgaciones.
          </p>
          <p>
            Al proporcionarnos sus datos personales, usted reconoce y acepta que ha leído y comprendido completamente esta política, y consiente la recopilación, uso, procesamiento y divulgación de sus datos personales según lo descrito en este documento. Si no está de acuerdo con alguna disposición de esta Política de Privacidad, le rogamos que deje de utilizar Haften Haften inmediatamente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Elegibilidad</h2>
          <p className="mb-4">
            Al registrarse en Haften Haften, usted celebra un acuerdo legal con nosotros y procesaremos la información que proporcione para prestar el servicio conforme a los términos de dicho acuerdo.
          </p>
          <p>
            Solo los usuarios mayores de 18 años son elegibles para utilizar esta Plataforma. Si un usuario es menor de 18 años, informe del perfil utilizando la función de reporte integrada. Haften Haften está diseñada para entornos de ocio nocturno, por lo que el requisito de mayoría de edad es estricto e irrenunciable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. Nuestro Compromiso de Privacidad</h2>
          <p className="mb-4">Haften Haften se diferencia de otras plataformas por su enfoque centrado en la privacidad del usuario:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li><strong>Sin rastreo GPS exacto:</strong> Jamás recopilamos ni almacenamos las coordenadas GPS precisas de nuestros usuarios. Solo registramos el local o establecimiento donde el usuario decide hacer Check-in voluntariamente.</li>
            <li><strong>Contenido efímero:</strong> Las Historias en Vivo (Live Stories) se eliminan automáticamente transcurridas 24 horas desde su publicación.</li>
            <li><strong>Control total del usuario:</strong> Usted decide quién puede ver su contenido, enviarle invitaciones y comunicarse con usted.</li>
            <li><strong>Comunicación por alias:</strong> Los usuarios interactúan mediante alias, protegiendo su identidad real en todo momento.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. Cookies y Tecnologías de Seguimiento</h2>
          <p className="mb-4">
            Utilizamos archivos de cookies almacenados en su dispositivo para fines de autenticación y funcionamiento del servicio. También podemos usar cookies para entregar contenido relevante a sus intereses, guardar sus preferencias y facilitar su experiencia de uso.
          </p>
          <p>
            Si configura su navegador o dispositivo para deshabilitar las cookies, es posible que no pueda acceder a ciertas funcionalidades de nuestra Plataforma.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. Registro e Inicio de Sesión mediante Terceros</h2>
          <p className="mb-4">
            Si elige registrarse utilizando un proveedor externo (por ejemplo, su cuenta de Google, Apple o Facebook), recopilaremos datos básicos de dicha plataforma para simplificar el proceso de registro. Esto incluye únicamente su nombre, dirección de correo electrónico y foto de perfil (si está disponible).
          </p>
          <p>
            En ningún caso accedemos a su lista de contactos, publicaciones ni otra información privada de sus cuentas de terceros sin su consentimiento explícito.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">5. Información Recopilada Automáticamente</h2>
          <p className="mb-4">Recopilamos automáticamente cierta información técnica cuando utiliza Haften Haften:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4">
            <li>Identificador único de dispositivo.</li>
            <li>Información del dispositivo (tipo, sistema operativo, versión del navegador).</li>
            <li>Preferencias y configuraciones (zona horaria, idioma, preferencias de privacidad).</li>
            <li>Estadísticas de uso de la aplicación (duración de sesión, funciones utilizadas).</li>
            <li>Estado de la aplicación (en línea o fuera de línea).</li>
            <li>Zona aproximada de ubicación (nunca coordenadas GPS exactas), expresada en rangos generales como "Cerca" o "En tu zona".</li>
          </ul>
          <p className="font-medium text-white">
            Importante: NO recopilamos ubicación GPS continua ni coordenadas exactas. Solo procesamos zonas aproximadas y el Check-in voluntario que el usuario realiza en un establecimiento específico a través de tecnología de geofencing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">6. Información que Usted nos Proporciona</h2>
          <p className="mb-4">Usted elige proporcionarnos cierta información al utilizar nuestros servicios:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4">
            <li>Información de registro: alias, edad, género (opcional), contraseña, idioma y dirección de correo electrónico.</li>
            <li>Información de perfil: alias, biografía, intereses, idiomas e imágenes de perfil.</li>
            <li>Etiquetas de preferencias: tags de música, bebida y planes favoritos.</li>
            <li>Contenido generado: Historias en Vivo (fotos y videos cortos), comentarios e interacciones.</li>
            <li>Preferencias de comunicación y notificaciones.</li>
            <li>Información para verificación de cuenta.</li>
            <li>Correspondencia que nos envíe a través de los canales de soporte.</li>
          </ul>
          <p>
            Le recomendamos no incluir información personal sensible (dirección real, números de teléfono, datos financieros) en su perfil público o en las Historias en Vivo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">6b. Radar y Filtros de Descubrimiento</h2>
          <p className="mb-4">
            La función Radar permite descubrir locales, eventos y personas cercanas. Para personalizar esta experiencia, procesamos los siguientes datos con base en su consentimiento (Art. 6.1.a RGPD) y nuestro interés legítimo en mejorar el servicio (Art. 6.1.f RGPD):
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4">
            <li>Zona aproximada (nunca ubicación exacta).</li>
            <li>Filtros de preferencia: tipo de música, tipo de local, rango de edad preferido y género (todos opcionales y configurables por el usuario).</li>
            <li>Estado de actividad (en fiesta, conectado, etc.).</li>
          </ul>
          <p>
            Los filtros de edad y género se utilizan exclusivamente para personalizar los resultados del Radar y nunca se comparten con terceros ni se utilizan con fines publicitarios. Usted puede desactivar o modificar estos filtros en cualquier momento desde la configuración de la aplicación.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">7. Historias en Vivo y Contenido Efímero</h2>
          <p className="mb-4">Las Historias en Vivo son la funcionalidad principal de Haften Haften. Su tratamiento de datos se rige por las siguientes reglas:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li><strong>Geolocalización por local:</strong> Las historias se anclan al nombre del establecimiento, nunca a coordenadas GPS precisas.</li>
            <li><strong>Eliminación automática:</strong> Todo el contenido de las Historias en Vivo se elimina automáticamente de nuestros servidores transcurridas 24 horas.</li>
            <li><strong>Control de visibilidad:</strong> El usuario elige si su historia es Pública (visible para cualquier usuario que explore el local en el mapa) o Solo Amigos (visible únicamente para sus conexiones).</li>
            <li><strong>Sin almacenamiento permanente:</strong> No conservamos copias de las historias eliminadas, salvo que exista una obligación legal que lo requiera (por ejemplo, una denuncia activa).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">8. Sistema de Check-in y Geofencing</h2>
          <p className="mb-4">Haften Haften utiliza tecnología de geofencing para el sistema de Check-in en locales:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>El Check-in es siempre voluntario y requiere acción explícita del usuario.</li>
            <li>Solo se registra el nombre del establecimiento, nunca la posición exacta dentro del recinto.</li>
            <li>El usuario puede finalizar su Check-in en cualquier momento.</li>
            <li>Las invitaciones a amigos envían el nombre del local y un enlace a servicios de mapas externos, pero jamás la posición del usuario que invita.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">9. Cómo Utilizamos su Información</h2>
          <p className="mb-4">Utilizamos la información recopilada para los siguientes fines:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Administrar su cuenta y proporcionarle nuestros servicios.</li>
            <li>Mostrar el Mapa de Experiencias en Vivo con los locales y sus historias activas.</li>
            <li>Calcular los Puntos de Calor (Heatmap) basados en la cantidad de historias en cada local.</li>
            <li>Facilitar la conexión entre usuarios a través de invitaciones y chat grupal.</li>
            <li>Personalizar el contenido según sus preferencias e intereses.</li>
            <li>Mejorar y desarrollar nuevas funcionalidades de la Plataforma.</li>
            <li>Prevenir, detectar y combatir fraudes, abusos o actividades ilegales.</li>
            <li>Garantizar el cumplimiento legal y la seguridad de la comunidad.</li>
            <li>Comunicarnos con usted sobre cambios en el servicio o actualizaciones relevantes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">10. Comunicaciones</h2>
          <p className="mb-4">Podemos utilizar su dirección de correo electrónico para:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4">
            <li>Comunicaciones operacionales: confirmaciones, actualizaciones de seguridad, cambios en el servicio y notificaciones importantes.</li>
            <li>Notificaciones de la app: invitaciones de amigos, alertas de historias en locales cercanos (si las tiene activadas) y mensajes de chat.</li>
            <li>Comunicaciones promocionales: ofertas, eventos destacados y novedades de la Plataforma.</li>
          </ul>
          <p>
            Puede gestionar sus preferencias de notificación desde la sección de Ajustes de la aplicación en cualquier momento.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">11. Cómo Compartimos su Información</h2>
          <p className="mb-4">El intercambio principal de información es con otros usuarios, según su configuración de privacidad. Además, podemos compartir información con:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4">
            <li>Proveedores de servicios: empresas que nos ayudan a operar la Plataforma (hosting, analítica, soporte técnico), bajo estrictos acuerdos de confidencialidad.</li>
            <li>Establecimientos asociados: información anónima y agregada sobre la actividad en sus locales (número de historias, tendencias), sin identificar a usuarios individuales.</li>
            <li>Autoridades legales: cuando sea requerido por ley, orden judicial o para proteger la seguridad de nuestros usuarios.</li>
          </ul>
          <p className="font-medium text-white">
            Jamás vendemos sus datos personales a terceros con fines publicitarios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">12. Chat Grupal y Mensajería</h2>
          <p className="mb-4">Los chats grupales en Haften Haften se rigen por las siguientes reglas de privacidad:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4">
            <li><strong>Invitación requerida:</strong> Nadie puede añadirle a un grupo sin que usted sea amigo del creador o acepte una invitación explícita.</li>
            <li><strong>Comunicación por alias:</strong> Los usuarios se comunican mediante sus alias, protegiendo su identidad real.</li>
            <li><strong>Chats temporales de local:</strong> Los chats asociados a un establecimiento se eliminan automáticamente transcurridas 24 horas.</li>
          </ul>
          <p>
            Los mensajes enviados a otros usuarios serán accesibles para dichos usuarios. No somos responsables del uso que otros hagan de los mensajes recibidos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">13. Protección de Menores</h2>
          <p className="mb-4">
            Haften Haften está destinada exclusivamente a usuarios mayores de 18 años. No permitimos el registro de personas menores de edad y no recopilamos conscientemente información de menores.
          </p>
          <p className="mb-4">
            Si detectamos que un menor se ha registrado, procederemos a cancelar inmediatamente su cuenta y eliminar toda la información asociada. Podemos conservar la dirección de correo electrónico y la dirección IP para prevenir nuevos registros fraudulentos.
          </p>
          <p>
            Si tiene conocimiento de que un menor está utilizando la Plataforma, le rogamos que nos lo comunique utilizando la función de reporte de perfil.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">14. Consentimiento</h2>
          <p className="mb-4">
            Al utilizar Haften Haften, usted otorga su consentimiento específico e informado para la recopilación, uso, retención, divulgación y transferencia de sus datos personales conforme a las secciones de esta Política.
          </p>
          <p>
            En cualquier momento puede retirar su consentimiento contactando a nuestro Delegado de Protección de Datos. Tenga en cuenta que la retirada del consentimiento puede imposibilitar la prestación del servicio, resultando en la terminación de su cuenta y la pérdida de acceso a sus datos, créditos y preferencias.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">15. Acceso, Rectificación y Portabilidad de Datos</h2>
          <p className="mb-4">Conforme al RGPD y la legislación aplicable, usted tiene derecho a:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4">
            <li>Acceder a una copia de los datos personales que tenemos sobre usted.</li>
            <li>Solicitar la rectificación de datos incorrectos o incompletos.</li>
            <li>Solicitar la portabilidad de sus datos en un formato estructurado y de uso común.</li>
            <li>Oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
          </ul>
          <p>
            Para ejercer estos derechos, contacte a nuestro Delegado de Protección de Datos a través de <a href="mailto:contact@haftenhaften.com" className="text-primary hover:underline">contact@haftenhaften.com</a>. Responderemos en un plazo máximo de 30 días hábiles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">16. Solicitudes de Eliminación de Datos</h2>
          <p className="mb-4">Usted tiene derecho a solicitar la eliminación completa de sus datos personales:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4">
            <li>Desde la aplicación: En Ajustes, seleccione "Eliminar cuenta y datos".</li>
            <li>Si se registró mediante un proveedor externo (Google, Apple, Facebook), puede revocar los permisos desde la configuración de dicho proveedor.</li>
            <li>Por correo electrónico: Envíe su solicitud a <a href="mailto:contact@haftenhaften.com" className="text-primary hover:underline">contact@haftenhaften.com</a> indicando la dirección de correo asociada a su cuenta.</li>
          </ul>
          <p>
            Una vez procesada la solicitud, sus datos serán eliminados de forma inmediata, excepto la información necesaria para cumplir con obligaciones legales o proteger intereses legítimos. Este proceso es irreversible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">17. Medidas de Seguridad</h2>
          <p className="mb-4">Implementamos medidas administrativas, físicas y técnicas para proteger sus datos personales:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4">
            <li>Cifrado de datos en tránsito (TLS/SSL) y en reposo.</li>
            <li>Protección antivirus y sistemas de detección de intrusiones.</li>
            <li>Acceso restringido a datos personales solo al personal autorizado.</li>
            <li>Auditorías periódicas de seguridad.</li>
            <li>Eliminación automática de contenido efímero conforme a los plazos establecidos.</li>
          </ul>
          <p>
            Ningún método de transmisión por Internet es completamente seguro. Aunque no podemos garantizar seguridad absoluta, nos esforzamos continuamente por mejorar nuestras medidas de protección.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">18. Retención de Datos</h2>
          <p className="mb-4">Conservamos sus datos personales durante el tiempo necesario para cumplir con los fines para los que fueron recopilados:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4">
            <li>Datos de cuenta: Mientras su cuenta esté activa.</li>
            <li>Historias en Vivo: Máximo 24 horas desde su publicación.</li>
            <li>Chats temporales de local: Máximo 24 horas.</li>
            <li>Chats de grupo de amigos: Mientras el grupo esté activo.</li>
            <li>Datos de Check-in: Se anonomizan transcurridas 48 horas.</li>
          </ul>
          <p>
            Tras la eliminación de su cuenta, borraremos sus datos en un plazo máximo de 30 días, salvo que la ley exija su conservación por un periodo mayor.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">19. Transferencia Internacional de Datos</h2>
          <p className="mb-4">
            Sus datos personales pueden ser transferidos y procesados en servidores ubicados fuera de su país de residencia, incluyendo la Unión Europea y otros países con legislación de protección de datos equivalente.
          </p>
          <p>
            Al utilizar Haften Haften, usted consiente dicha transferencia, entendiendo que los destinatarios están sujetos a obligaciones contractuales y legales equivalentes a las del RGPD.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">20. Establecimientos y Contenido Destacado</h2>
          <p className="mb-4">Los establecimientos asociados a Haften Haften pueden:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4">
            <li>Publicar contenido oficial destacado (ofertas, eventos, disponibilidad) visible en el mapa.</li>
            <li>Acceder a estadísticas anónimas y agregadas sobre la actividad en su local.</li>
            <li>Interactuar con usuarios a través del sistema de reservas y chat.</li>
          </ul>
          <p>
            En ningún caso los establecimientos acceden a datos personales identificables de los usuarios sin consentimiento explícito del usuario.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">21. Modificaciones de esta Política</h2>
          <p className="mb-4">Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Le notificaremos sobre cambios sustanciales mediante:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-4">
            <li>Notificación push en la aplicación.</li>
            <li>Correo electrónico a la dirección asociada a su cuenta.</li>
            <li>Aviso visible en la pantalla de inicio de la aplicación.</li>
          </ul>
          <p>
            Los cambios entrarán en vigor 30 días después de su publicación, aplicándose únicamente a la información recopilada a partir de dicha fecha. Es su responsabilidad revisar periódicamente esta Política.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">22. Delegado de Protección de Datos</h2>
          <p>
            Para cualquier consulta, comentario o solicitud relacionada con esta Política de Privacidad o el tratamiento de sus datos personales, contacte a nuestro Delegado de Protección de Datos: <a href="mailto:contact@haftenhaften.com" className="text-primary hover:underline">contact@haftenhaften.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">23. Aceptación</h2>
          <p className="mb-4">
            Al crear una cuenta, utilizar o visitar Haften Haften, usted queda vinculado por esta Política de Privacidad e indica su aceptación continua de los términos aquí establecidos, así como de nuestros Términos de Servicio.
          </p>
          <p>
            Si no está de acuerdo con alguna disposición, le rogamos que suspenda inmediatamente todo uso del Servicio.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="font-bold text-lg text-white mb-2">HAFTEN HAFTEN</p>
          <p className="text-primary mb-4">Tu privacidad, nuestra prioridad.</p>
          <p className="text-sm text-gray-500">© 2026 Haften Haften. Todos los derechos reservados.</p>
        </div>
      </div>
    </LegalLayout>
  );
}
