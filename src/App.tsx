/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { 
  Target,
  Map,
  ShieldCheck,
  Camera, 
  Upload, 
  Sparkles, 
  Moon, 
  Users, 
  Music, 
  ArrowRight, 
  Loader2, 
  Copy, 
  Check,
  Download,
  Smartphone,
  Play,
  Globe,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  Clock,
  Heart,
  MessageSquare,
  Info
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Translations ---

const translations = {
  es: {
    nav_about: "Sobre la App",
    nav_languages: "Idiomas",
    hero_subtitle: "HAFTEN es la red social definitiva para los amantes de la fiesta. Conecta con gente real, descubre los mejores eventos y haz que cada noche sea legendaria.",
    hero_change: "Cambiar",
    hero_perfil: "Perfil",
    hero_mapa: "Mapa",
    hero_eventos: "Eventos",
    ai_title: "HAFTEN AI ANALYZER",
    ai_subtitle: "Sube una imagen para obtener una descripción detallada y su estilo artístico, optimizada para redibujarla con IA.",
    ai_drop: "Suelta tu imagen aquí",
    ai_click: "o haz clic para seleccionar un archivo",
    ai_analyze: "Analizar Imagen",
    ai_analyzing: "Analizando Estilo...",
    ai_another: "Analizar otra imagen",
    ai_copied: "Copiado",
    ai_copy: "Copiar",
    ai_desc_es: "Descripción (Español)",
    ai_desc_en: "AI Prompt (Inglés)",
    footer_rights: "© 2026 HAFTEN. Todos los derechos reservados. Vive la noche.",
    footer_guidelines: "Normas de la Comunidad",
    footer_terms: "Términos de Uso",
    footer_privacy: "Política de Privacidad",
    close: "Cerrar",
    how_title_1: "Cómo",
    how_title_2: "funciona",
    how_step_1_title: "Crea",
    how_step_1_desc: "Tu perfil único y empieza a compartir tus mejores momentos.",
    how_step_2_title: "Explora",
    how_step_2_desc: "El mapa en tiempo real para ver dónde está la acción.",
    how_step_3_title: "Conecta",
    how_step_3_desc: "Con gente real y haz planes increíbles para la noche.",
    how_step_4_title: "Encuentra",
    how_step_4_desc: "Los eventos más exclusivos y vive experiencias legendarias.",
    why_title: "Por qué HAFTEN HAFTEN",
    why_1_title: "Matching por Vibe",
    why_1_desc: "Deja de deslizar y empieza a vivir. Nuestro Matching por Vibe te conecta con personas que buscan el mismo tipo de noche que tú. Sin filtros falsos, solo afinidad real basada en la música, el lugar y el momento.",
    why_2_title: "Mapa de Energía",
    why_2_desc: "No es un mapa de direcciones, es un mapa de energía.",
    why_3_title: "Verificado y seguro",
    why_3_desc: "Haften no es una app de vigilancia, es una app de confianza. Hemos eliminado el rastreo de rutas y los perfiles anónimos para que tu única preocupación sea elegir la siguiente canción.",
    map_title: "Mapa de Energía",
    map_subtitle: "Explora los hotspots en tiempo real. Siente el vibe de la ciudad antes de llegar.",
    map_live_stories: "Historias en Vivo",
    map_checkins: "Check-ins",
    map_featured: "Destacado",
    map_venue_info: "Información del Local",
    map_close: "Cerrar Mapa"
  },
  en: {
    nav_about: "About the App",
    nav_languages: "Languages",
    hero_subtitle: "HAFTEN is the ultimate social network for party lovers. Connect with real people, discover the best events, and make every night legendary.",
    hero_change: "Change",
    hero_perfil: "Profile",
    hero_mapa: "Map",
    hero_eventos: "Events",
    ai_title: "HAFTEN AI ANALYZER",
    ai_subtitle: "Upload an image to get a detailed description and its artistic style, optimized for AI redrawing.",
    ai_drop: "Drop your image here",
    ai_click: "or click to select a file",
    ai_analyze: "Analyze Image",
    ai_analyzing: "Analyzing Style...",
    ai_another: "Analyze another image",
    ai_copied: "Copied",
    ai_copy: "Copy",
    ai_desc_es: "Description (Spanish)",
    ai_desc_en: "AI Prompt (English)",
    footer_rights: "© 2026 HAFTEN. All rights reserved. Live the night.",
    footer_guidelines: "Community Guidelines",
    footer_terms: "Terms of Use",
    footer_privacy: "Privacy Policy",
    close: "Close",
    how_title_1: "How it",
    how_title_2: "works",
    how_step_1_title: "Create",
    how_step_1_desc: "Your unique profile and start sharing your best moments.",
    how_step_2_title: "Explore",
    how_step_2_desc: "The real-time map to see where the action is.",
    how_step_3_title: "Connect",
    how_step_3_desc: "With real people and make amazing plans for the night.",
    how_step_4_title: "Find",
    how_step_4_desc: "The most exclusive events and live legendary experiences.",
    why_title: "Why HAFTEN HAFTEN",
    why_1_title: "Vibe Matching",
    why_1_desc: "Stop swiping and start living. Our Vibe Matching connects you with people looking for the same kind of night as you. No fake filters, just real affinity based on music, place, and moment.",
    why_2_title: "Energy Map",
    why_2_desc: "It's not a map of directions, it's a map of energy.",
    why_3_title: "Verified and Secure",
    why_3_desc: "Haften is not a surveillance app, it's a trust app. We've eliminated route tracking and anonymous profiles so your only concern is choosing the next song.",
    map_title: "Energy Map",
    map_subtitle: "Explore real-time hotspots. Feel the city's vibe before you arrive.",
    map_live_stories: "Live Stories",
    map_checkins: "Check-ins",
    map_featured: "Featured",
    map_venue_info: "Venue Info",
    map_close: "Close Map"
  }
};

const COMMUNITY_GUIDELINES_ES = `
# Normas de la Comunidad HAFTEN

En HAFTEN, nuestra misión es crear un entorno seguro, respetuoso y divertido para que los amantes de la fiesta conecten. Estas normas son esenciales para mantener la vibrante energía de nuestra comunidad.

### 1. Respeto Mutuo
Trata a todos los miembros con respeto. No toleramos el acoso, el odio, la discriminación ni el lenguaje ofensivo. HAFTEN es un espacio inclusivo para todos.

### 2. Autenticidad
Sé tú mismo. No permitimos perfiles falsos ni suplantación de identidad. La confianza es la base de nuestra red social.

### 3. Seguridad en el Ocio Nocturno
HAFTEN está diseñada para mayores de 18 años. Promovemos el consumo responsable y la seguridad en los locales. Si presencias alguna situación de riesgo, utiliza nuestras herramientas de reporte.

### 4. Contenido Apropiado
Las Historias en Vivo deben reflejar el ambiente de la fiesta de forma positiva. No permitimos contenido sexualmente explícito, violencia ni promoción de actividades ilegales.

### 5. Privacidad de Terceros
Respeta la privacidad de los demás. No publiques información personal de terceros sin su consentimiento. Recuerda que HAFTEN utiliza alias para proteger tu identidad.

### 6. Uso de la Tecnología
No intentes manipular la aplicación, usar bots ni extraer datos de forma no autorizada. El Mapa de Energía es para uso personal y disfrute de la comunidad.

### 7. Reporte y Moderación
Contamos con un sistema de reporte activo. Si ves algo que infringe estas normas, infórmanos. Nuestro equipo de moderación revisará cada caso para garantizar la seguridad de todos.

El incumplimiento de estas normas puede resultar en la suspensión o eliminación permanente de tu cuenta. ¡Hagamos que cada noche sea legendaria juntos!
`;

const PRIVACY_POLICY_ES = `
La versión en español de este documento es la versión oficial. Las versiones traducidas se proporcionan únicamente para su conveniencia. En caso de discrepancia entre versiones, prevalecerá la versión en español.

Esta Política de Privacidad explica la información que Haften Haften ("La Compañía", "nosotros" o "nuestro") recopila sobre los usuarios de la aplicación móvil Haften Haften ("la Aplicación", "el Servicio" o "la Plataforma"), cómo se utiliza dicha información, con quiénes se comparte y las opciones que usted tiene respecto a tales usos y divulgaciones.

Al proporcionarnos sus datos personales, usted reconoce y acepta que ha leído y comprendido completamente esta política, y consiente la recopilación, uso, procesamiento y divulgación de sus datos personales según lo descrito en este documento. Si no está de acuerdo con alguna disposición de esta Política de Privacidad, le rogamos que deje de utilizar Haften Haften inmediatamente.

### 1. Elegibilidad
Al registrarse en Haften Haften, usted celebra un acuerdo legal con nosotros y procesaremos la información que proporcione para prestar el servicio conforme a los términos de dicho acuerdo.
Solo los usuarios mayores de 18 años son elegibles para utilizar esta Plataforma. Si un usuario es menor de 18 años, informe del perfil utilizando la función de reporte integrada. Haften Haften está diseñada para entornos de ocio nocturno, por lo que el requisito de mayoría de edad es estricto e irrenunciable.

### 2. Nuestro Compromiso de Privacidad
Haften Haften se diferencia de otras plataformas por su enfoque centrado en la privacidad del usuario:
- **Sin rastreo GPS exacto:** Jamás recopilamos ni almacenamos las coordenadas GPS precisas de nuestros usuarios. Solo registramos el local o establecimiento donde el usuario decide hacer Check-in voluntariamente.
- **Contenido efímero:** Las Historias en Vivo (Live Stories) se eliminan automáticamente transcurridas 24 horas desde su publicación.
- **Control total del usuario:** Usted decide quién puede ver su contenido, enviarle invitaciones y comunicarse con usted.
- **Comunicación por alias:** Los usuarios interactúan mediante alias, protegiendo su identidad real en todo momento.

### 3. Cookies y Tecnologías de Seguimiento
Utilizamos archivos de cookies almacenados en su dispositivo para fines de autenticación y funcionamiento del servicio. También podemos usar cookies para entregar contenido relevante a sus intereses, guardar sus preferencias y facilitar su experiencia de uso.
Si configura su navegador o dispositivo para deshabilitar las cookies, es posible que no pueda acceder a ciertas funcionalidades de nuestra Plataforma.

### 4. Registro e Inicio de Sesión mediante Terceros
Si elige registrarse utilizando un proveedor externo (por ejemplo, su cuenta de Google, Apple o Facebook), recopilaremos datos básicos de dicha plataforma para simplificar el proceso de registro. Esto incluye únicamente su nombre, dirección de correo electrónico y foto de perfil (si está disponible).
En ningún caso accedemos a su lista de contactos, publicaciones ni otra información privada de sus cuentas de terceros sin su consentimiento explícito.

### 5. Información Recopilada Automáticamente
Recopilamos automáticamente cierta información técnica cuando utiliza Haften Haften:
- Identificador único de dispositivo.
- Información del dispositivo (tipo, sistema operativo, versión del navegador).
- Preferencias y configuraciones (zona horaria, idioma, preferencias de privacidad).
- Estadísticas de uso de la aplicación (duración de sesión, funciones utilizadas).
- Estado de la aplicación (en línea o fuera de línea).

**Importante:** NO recopilamos ubicación GPS continua. La única información de ubicación que procesamos es el Check-in voluntario que el usuario realiza en un establecimiento específico a través de tecnología de geofencing.

### 6. Información que Usted nos Proporciona
Usted elige proporcionarnos cierta información al utilizar nuestros servicios:
- Información de registro: alias, edad, contraseña, idioma y dirección de correo electrónico.
- Información de perfil: alias, biografía, intereses, idiomas e imágenes de perfil.
- Contenido generado: Historias en Vivo (fotos y videos cortos), comentarios e interacciones.
- Preferencias de comunicación y notificaciones.
- Información para verificación de cuenta.
- Correspondencia que nos envíe a través de los canales de soporte.

Le recomendamos no incluir información personal sensible (dirección real, números de teléfono, datos financieros) en su perfil público o en las Historias en Vivo.

### 7. Historias en Vivo y Contenido Efímero
Las Historias en Vivo son la funcionalidad principal de Haften Haften. Su tratamiento de datos se rige por las siguientes reglas:
- **Geolocalización por local:** Las historias se anclan al nombre del establecimiento, nunca a coordenadas GPS precisas.
- **Eliminación automática:** Todo el contenido de las Historias en Vivo se elimina automáticamente de nuestros servidores transcurridas 24 horas.
- **Control de visibilidad:** El usuario elige si su historia es Pública (visible para cualquier usuario que explore el local en el mapa) o Solo Amigos (visible únicamente para sus conexiones).
- **Sin almacenamiento permanente:** No conservamos copias de las historias eliminadas, salvo que exista una obligación legal que lo requiera (por ejemplo, una denuncia activa).

### 8. Sistema de Check-in y Geofencing
Haften Haften utiliza tecnología de geofencing para el sistema de Check-in en locales:
- El Check-in es siempre voluntario y requiere acción explícita del usuario.
- Solo se registra el nombre del establecimiento, nunca la posición exacta dentro del recinto.
- El usuario puede finalizar su Check-in en cualquier momento.
- Las invitaciones a amigos envían el nombre del local y un enlace a servicios de mapas externos, pero jamás la posición del usuario que invita.

### 9. Cómo Utilizamos su Información
Utilizamos la información recopilada para los siguientes fines:
- Administrar su cuenta y proporcionarle nuestros servicios.
- Mostrar el Mapa de Experiencias en Vivo con los locales y sus historias activas.
- Calcular los Puntos de Calor (Heatmap) basados en la cantidad de historias en cada local.
- Facilitar la conexión entre usuarios a través de invitaciones y chat grupal.
- Personalizar el contenido según sus preferencias e intereses.
- Mejorar y desarrollar nuevas funcionalidades de la Plataforma.
- Prevenir, detectar y combatir fraudes, abusos o actividades ilegales.
- Garantizar el cumplimiento legal y la seguridad de la comunidad.
- Comunicarnos con usted sobre cambios en el servicio o actualizaciones relevantes.

### 10. Comunicaciones
Podemos utilizar su dirección de correo electrónico para:
- Comunicaciones operacionales: confirmaciones, actualizaciones de seguridad, cambios en el servicio y notificaciones importantes.
- Notificaciones de la app: invitaciones de amigos, alertas de historias en locales cercanos (si las tiene activadas) y mensajes de chat.
- Comunicaciones promocionales: ofertas, eventos destacados y novedades de la Plataforma.

Puede gestionar sus preferencias de notificación desde la sección de Ajustes de la aplicación en cualquier momento.

### 11. Cómo Compartimos su Información
El intercambio principal de información es con otros usuarios, según su configuración de privacidad. Además, podemos compartir información con:
- Proveedores de servicios: empresas que nos ayudan a operar la Plataforma (hosting, analítica, soporte técnico), bajo estrictos acuerdos de confidencialidad.
- Establecimientos asociados: información anónima y agregada sobre la actividad en sus locales (número de historias, tendencias), sin identificar a usuarios individuales.
- Autoridades legales: cuando sea requerido por ley, orden judicial o para proteger la seguridad de nuestros usuarios.

Jamas vendemos sus datos personales a terceros con fines publicitarios.

### 12. Chat Grupal y Mensajería
Los chats grupales en Haften Haften se rigen por las siguientes reglas de privacidad:
- **Invitación requerida:** Nadie puede añadirle a un grupo sin que usted sea amigo del creador o acepte una invitación explícita.
- **Comunicación por alias:** Los usuarios se comunican mediante sus alias, protegiendo su identidad real.
- **Chats temporales de local:** Los chats asociados a un establecimiento se eliminan automáticamente transcurridas 24 horas.

Los mensajes enviados a otros usuarios serán accesibles para dichos usuarios. No somos responsables del uso que otros hagan de los mensajes recibidos.

### 13. Protección de Menores
Haften Haften está destinada exclusivamente a usuarios mayores de 18 años. No permitimos el registro de personas menores de edad y no recopilamos conscientemente información de menores.
Si detectamos que un menor se ha registrado, procederemos a cancelar inmediatamente su cuenta y eliminar toda la información asociada. Podemos conservar la dirección de correo electrónico y la dirección IP para prevenir nuevos registros fraudulentos.
Si tiene conocimiento de que un menor está utilizando la Plataforma, le rogamos que nos lo comunique utilizando la función de reporte de perfil.

### 14. Consentimiento
Al utilizar Haften Haften, usted otorga su consentimiento específico e informado para la recopilación, uso, retención, divulgación y transferencia de sus datos personales conforme a las secciones de esta Política.
En cualquier momento puede retirar su consentimiento contactando a nuestro Delegado de Protección de Datos. Tenga en cuenta que la retirada del consentimiento puede imposibilitar la prestación del servicio, resultando en la terminación de su cuenta y la pérdida de acceso a sus datos, créditos y preferencias.

### 15. Acceso, Rectificación y Portabilidad de Datos
Conforme al RGPD y la legislación aplicable, usted tiene derecho a:
- Acceder a una copia de los datos personales que tenemos sobre usted.
- Solicitar la rectificación de datos incorrectos o incompletos.
- Solicitar la portabilidad de sus datos en un formato estructurado y de uso común.
- Oponerse al tratamiento de sus datos en determinadas circunstancias.

Para ejercer estos derechos, contacte a nuestro Delegado de Protección de Datos a través de dpo@haftenhaften.com. Responderemos en un plazo máximo de 30 días hábiles.

### 16. Solicitudes de Eliminación de Datos
Usted tiene derecho a solicitar la eliminación completa de sus datos personales:
- Desde la aplicación: En Ajustes, seleccione "Eliminar cuenta y datos".
- Si se registró mediante un proveedor externo (Google, Apple, Facebook), puede revocar los permisos desde la configuración de dicho proveedor.
- Por correo electrónico: Envíe su solicitud a dpo@haftenhaften.com indicando la dirección de correo asociada a su cuenta.

Una vez procesada la solicitud, sus datos serán eliminados de forma inmediata, excepto la información necesaria para cumplir con obligaciones legales o proteger intereses legítimos. Este proceso es irreversible.

### 17. Medidas de Seguridad
Implementamos medidas administrativas, físicas y técnicas para proteger sus datos personales:
- Cifrado de datos en tránsito (TLS/SSL) y en reposo.
- Protección antivirus y sistemas de detección de intrusiones.
- Acceso restringido a datos personales solo al personal autorizado.
- Auditorías periódicas de seguridad.
- Eliminación automática de contenido efímero conforme a los plazos establecidos.

Ningún método de transmisión por Internet es completamente seguro. Aunque no podemos garantizar seguridad absoluta, nos esforzamos continuamente por mejorar nuestras medidas de protección.

### 18. Retención de Datos
Conservamos sus datos personales durante el tiempo necesario para cumplir con los fines para los que fueron recopilados:
- Datos de cuenta: Mientras su cuenta esté activa.
- Historias en Vivo: Máximo 24 horas desde su publicación.
- Chats temporales de local: Máximo 24 horas.
- Chats de grupo de amigos: Mientras el grupo esté activo.
- Datos de Check-in: Se anonomizan transcurridas 48 horas.

Tras la eliminación de su cuenta, borraremos sus datos en un plazo máximo de 30 días, salvo que la ley exija su conservación por un periodo mayor.

### 19. Transferencia Internacional de Datos
Sus datos personales pueden ser transferidos y procesados en servidores ubicados fuera de su país de residencia, incluyendo la Unión Europea y otros países con legislación de protección de datos equivalente.
Al utilizar Haften Haften, usted consiente dicha transferencia, entendiendo que los destinatarios están sujetos a obligaciones contractuales y legales equivalentes a las del RGPD.

### 20. Establecimientos y Contenido Destacado
Los establecimientos asociados a Haften Haften pueden:
- Publicar contenido oficial destacado (ofertas, eventos, disponibilidad) visible en el mapa.
- Acceder a estadísticas anónimas y agregadas sobre la actividad en su local.
- Interactuar con usuarios a través del sistema de reservas y chat.

En ningún caso los establecimientos acceden a datos personales identificables de los usuarios sin consentimiento explícito del usuario.

### 21. Modificaciones de esta Política
Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Le notificaremos sobre cambios sustanciales mediante:
- Notificación push en la aplicación.
- Correo electrónico a la dirección asociada a su cuenta.
- Aviso visible en la pantalla de inicio de la aplicación.

Los cambios entrarán en vigor 30 días después de su publicación, aplicándose únicamente a la información recopilada a partir de dicha fecha. Es su responsabilidad revisar periódicamente esta Política.

### 22. Delegado de Protección de Datos
Para cualquier consulta, comentario o solicitud relacionada con esta Política de Privacidad o el tratamiento de sus datos personales, contacte a nuestro Delegado de Protección de Datos en dpo@haftenhaften.com.

### 23. Aceptación
Al crear una cuenta, utilizar o visitar Haften Haften, usted queda vinculado por esta Política de Privacidad e indica su aceptación continua de los términos aquí establecidos, así como de nuestros Términos de Servicio.
Si no está de acuerdo con alguna disposición, le rogamos que suspenda inmediatamente todo uso del Servicio.
`;

const TERMS_OF_USE_ES = `
La versión en español de este documento es la versión oficial. Las versiones traducidas se proporcionan únicamente para su conveniencia. En caso de discrepancia entre versiones, prevalecerá la versión en español.

Al crear una cuenta de usuario, al utilizar la aplicación móvil Haften Haften ("Aplicación") o el sitio web asociado ("Sitio Web"), ya sea a través de un dispositivo móvil o una computadora (en conjunto, el "Servicio"), usted acepta quedar obligado por estos Términos de Uso y nuestra Política de Privacidad, que está incorporada por referencia en este Acuerdo.

Si no acepta estos términos, le rogamos que no utilice el Servicio. Si desea convertirse en Miembro, comunicarse con otros Miembros y hacer uso del Servicio, lea atentamente las siguientes condiciones y muestre su aceptación durante el proceso de registro.

### 1. Aceptación de las Condiciones
El uso del Servicio está condicionado a su aceptación de estos Términos de Uso. Se considerará que ha aceptado estos Términos al utilizar la Aplicación o el Sitio Web, independientemente de si se registra como Miembro.

Haften Haften se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones serán publicadas en la Aplicación y el Sitio Web. Es su responsabilidad revisar periódicamente los Términos de Uso. Si no está de acuerdo con las modificaciones, deberá dejar de utilizar el Servicio.

### 2. Elegibilidad
Para registrarse como Miembro del Servicio o utilizar la Aplicación, debe:
- Tener al menos dieciocho (18) años de edad, o la mayoría de edad en su país de residencia si esta es superior a dieciocho años.
- Tener el derecho, la autoridad y la capacidad legal para celebrar este Acuerdo.
- No haber sido condenado por ningún acto de violencia, agresión sexual o acoso, ni estar sujeto a ninguna orden judicial al respecto.

Al utilizar el Servicio, usted declara y garantiza que cumple con todos los requisitos anteriores y que no violará ninguna ley o regulación aplicable en su jurisdicción. Haften Haften está diseñada para entornos de ocio nocturno, por lo que el requisito de mayoría de edad es estricto e irrenunciable.

### 3. Registro y Cuenta de Usuario
Al registrarse en Haften Haften, usted se compromete a:
- Proporcionar información veraz, actualizada y completa durante el proceso de registro.
- Mantener la confidencialidad de sus credenciales de acceso.
- Notificarnos inmediatamente de cualquier uso no autorizado de su cuenta.
- No crear más de una cuenta por persona.
- No transferir o ceder su cuenta a terceros.

Usted es el único responsable de toda la actividad que ocurra bajo su cuenta.

### 4. Duración y Terminación
Este Acuerdo permanecerá en vigor mientras utilice la Aplicación y/o sea Miembro del Servicio.
- **Cancelación por el usuario:** Puede cancelar su membresía en cualquier momento desde Ajustes > "Eliminar cuenta y datos", o contactando a nuestro equipo de soporte.
- **Cancelación por Haften Haften:** Podemos suspender, deshabilitar o cancelar su acceso si determinamos que ha violado alguna disposición de este Acuerdo o que su comportamiento puede dañar la seguridad de otros usuarios o la reputación de la Plataforma.

Tras la terminación, todas las licencias otorgadas bajo este Acuerdo se rescindirán. El contenido previamente enviado puede dejar de estar disponible. Haften Haften no será responsable de la pérdida de dicho contenido. Las disposiciones sobre limitación de responsabilidad, indemnización y propiedad intelectual sobrevivirán a la terminación.

### 5. Principios de Privacidad de la Plataforma
Haften Haften se fundamenta en los siguientes principios de privacidad que rigen toda la experiencia del usuario:
- **Sin rastreo GPS:** Jamás rastreamos la ubicación exacta de nuestros usuarios. El único dato de ubicación es el Check-in voluntario en un establecimiento mediante tecnología de geofencing.
- **Contenido efímero:** Las Historias en Vivo y los chats temporales de local se eliminan automáticamente en 24 horas.
- **Identidad protegida:** Los usuarios interactúan mediante alias, sin revelar datos personales reales a otros usuarios.
- **Control total:** Usted decide quién puede ver su contenido, invitarle a planes y comunicarse con usted.

### 6. Uso Permitido del Servicio
El Servicio es para uso personal y no comercial. Al utilizar Haften Haften, usted se compromete a:
- Utilizar el Servicio de conformidad con todas las leyes y regulaciones aplicables.
- No utilizar la Plataforma con fines comerciales, publicitarios o de promoción sin autorización escrita previa.
- No recopilar información de otros usuarios por medios automatizados o manuales con fines no autorizados.
- No intentar acceder a cuentas, sistemas o redes sin autorización.
- No interferir con el funcionamiento normal del Servicio.
- Respetar los derechos y la privacidad de otros usuarios en todo momento.

### 7. Historias en Vivo y Contenido del Usuario
Al publicar contenido en Haften Haften (Historias en Vivo, mensajes, fotos, videos u otro material), usted:
- Declara que es el propietario del contenido o tiene los derechos necesarios para publicarlo.
- Otorga a Haften Haften una licencia limitada, no exclusiva y revocable para mostrar, distribuir y procesar dicho contenido dentro de la Plataforma durante el periodo de vigencia (máximo 24 horas para contenido efímero).
- Acepta que el contenido efímero será eliminado automáticamente de nuestros servidores transcurrido el plazo establecido.

Haften Haften no reclama la propiedad del contenido generado por los usuarios. Una vez eliminado el contenido efímero, no conservamos copias salvo obligación legal.

### 8. Restricciones de Contenido
Haften Haften se reserva el derecho de revisar y eliminar cualquier contenido que viole este Acuerdo. Queda estrictamente prohibido publicar contenido que:
- Promueva el racismo, el odio, la violencia o la discriminación contra cualquier individuo o grupo.
- Acose, intimide o amenace a otros usuarios.
- Contenga material sexualmente explícito, pornográfico o que explote a menores.
- Promueva información falsa, engañosa o actividades ilegales.
- Infrinja derechos de autor, marcas registradas u otros derechos de propiedad intelectual de terceros.
- Incluya spam, publicidad no solicitada, esquemas piramidales o cadenas de mensajes.
- Contenga datos personales de terceros sin su consentimiento (direcciones, números de teléfono, etc.).
- Promueva el consumo irresponsable de sustancias o actividades que pongan en riesgo la seguridad.

Le recordamos no compartir datos personales ni ubicaciones exactas con personas que no sean de su confianza. Haften Haften muestra un aviso de seguridad al entrar en chats grupales.

### 9. Propiedad Intelectual
Haften Haften es propietaria de todos los derechos de propiedad intelectual sobre la Aplicación, el Sitio Web, el diseño, la marca, los logotipos, el código fuente y todo el contenido original del Servicio.
No está permitido copiar, modificar, distribuir, vender, alquilar ni crear obras derivadas basadas en el Servicio o cualquiera de sus componentes sin autorización escrita previa de Haften Haften.

Si considera que algún contenido publicado en la Plataforma infringe sus derechos de propiedad intelectual, contáctenos a través de legal@haftenhaften.com proporcionando la información necesaria para investigar y resolver la reclamación.

### 10. Sistema de Check-in e Invitaciones
El sistema de Check-in de Haften Haften funciona bajo las siguientes condiciones:
- El Check-in es siempre voluntario y requiere acción explícita del usuario.
- Solo se registra el nombre del establecimiento, nunca coordenadas GPS precisas.
- Las invitaciones a amigos ("Vente a...") envían únicamente el nombre del local y un enlace a servicios de mapas externos, sin revelar la posición exacta del usuario.
- El usuario puede finalizar su Check-in en cualquier momento.

Al utilizar la función de invitación, usted acepta que el destinatario recibirá una notificación con el nombre del local donde se encuentra.

### 11. Chat Grupal y Mensajería
Los chats grupales de Haften Haften se rigen por las siguientes normas:
- **Grupos de Amigos:** Creados manualmente por los usuarios para planificar salidas. Solo se puede añadir a un grupo a usuarios que sean amigos del creador o que acepten una invitación.
- **Grupos de Local:** Chats temporales que se activan en un establecimiento específico. Se eliminan automáticamente a las 24 horas.

Los usuarios se comunican mediante su alias, protegiendo su identidad real. Haften Haften no es responsable del contenido de los mensajes enviados entre usuarios ni del uso que los destinatarios hagan de los mismos.

### 12. Establecimientos Asociados
Los establecimientos asociados a Haften Haften pueden:
- Publicar contenido oficial destacado (ofertas, eventos, disponibilidad) visible en el mapa.
- Acceder a estadísticas anónimas y agregadas sobre la actividad en su local.
- Interactuar con usuarios a través del sistema de reservas integrado.

En ningún caso los establecimientos acceden a datos personales identificables de los usuarios sin su consentimiento explícito. Haften Haften no es responsable de los servicios, productos u ofertas proporcionados por establecimientos de terceros.

### 13. Suscripciones y Pagos
Haften Haften puede ofrecer servicios gratuitos y de pago:
- **Funciones gratuitas:** Registro, creación de perfil, publicación de Historias en Vivo, Check-in en locales, chat grupal y funciones básicas de la Plataforma.
- **Funciones Premium:** Funcionalidades adicionales disponibles mediante suscripción o compra de créditos.

Si adquiere suscripciones o servicios a través de Apple App Store o Google Play Store, dichas tiendas son las únicas responsables de sus procesos y condiciones de pago. Haften Haften no controla los métodos de pago, tipos de cambio ni reembolsos gestionados por estas plataformas.

Si cancela su suscripción, podrá utilizar las funciones Premium hasta el final del periodo actual. Los créditos no utilizados expiran 12 meses después de la última actividad en la cuenta. Los créditos no son canjeables por efectivo ni valor monetario.

### 14. Descargo de Responsabilidad
Haften Haften no es responsable de:
- El contenido incorrecto o inexacto publicado por los usuarios en la Plataforma.
- La conducta, en línea o fuera de línea, de cualquier usuario del Servicio.
- Errores, omisiones, interrupciones, defectos o retrasos en la operación o transmisión del Servicio.
- Problemas técnicos de redes, servidores, equipos o software.
- Pérdidas o daños derivados del uso del Servicio, incluidas las interacciones entre usuarios.

El Servicio se proporciona "tal cual" y "según disponibilidad". Haften Haften renuncia expresamente a cualquier garantía de idoneidad para un propósito particular. No garantizamos resultados específicos del uso de la Plataforma.

### 15. Limitación de Responsabilidad
En la máxima medida permitida por la ley aplicable, Haften Haften no será responsable por daños indirectos, consecuentes, ejemplares, incidentales, especiales o punitivos, incluida la pérdida de beneficios, que surjan del uso del Servicio.
La responsabilidad total de Haften Haften hacia usted por cualquier causa se limitará a la cantidad efectivamente pagada por usted por el Servicio durante los doce (12) meses anteriores al evento que generó la responsabilidad.

### 16. Indemnización
Usted acepta indemnizar y eximir de responsabilidad a Haften Haften, sus subsidiarias, afiliadas, directivos, agentes, socios y empleados de cualquier pérdida, responsabilidad, reclamación o demanda, incluidos los honorarios razonables de abogados, presentados por terceros debido a:
- Su uso del Servicio en violación de este Acuerdo.
- Cualquier violación de sus declaraciones y garantías establecidas en estos Términos.
- La infracción de derechos de terceros, incluidos derechos de propiedad intelectual y privacidad.

### 17. Resolución de Disputas
Haften Haften hará lo posible por resolver cualquier problema que pueda surgir con el Servicio.
Cualquier disputa relacionada con el Servicio se regirá por las leyes de la jurisdicción donde Haften Haften tiene su sede social, sin tener en cuenta las disposiciones sobre conflicto de leyes. Usted acepta someterse a la jurisdicción personal y exclusiva de los tribunales de dicha jurisdicción.

Antes de iniciar cualquier procedimiento legal, ambas partes se comprometen a intentar resolver la disputa de forma amistosa durante un periodo mínimo de treinta (30) días a partir de la notificación escrita de la controversia.

### 18. Protección de Menores
Haften Haften está destinada exclusivamente a personas mayores de 18 años. No permitimos el registro de menores de edad.
Si detectamos que un menor se ha registrado, cancelaremos inmediatamente su cuenta y eliminaremos toda la información asociada. Si tiene conocimiento de que un menor está utilizando la Plataforma, utilice la función de reporte de perfil.

### 19. Datos Personales y Privacidad
Sus datos personales se rigen por nuestra Política de Privacidad, disponible en la sección de Ajustes de la Aplicación. Le recomendamos leerla detenidamente.

Al ser una plataforma social, la divulgación de datos personales a otros usuarios está sujeta al riesgo inherente de que dichos datos puedan ser utilizados indebidamente por terceros. Cualquier dato personal que elija compartir con otros usuarios es bajo su propia responsabilidad.

Haften Haften implementa medidas técnicas y organizativas para proteger sus datos, pero no puede garantizar la seguridad absoluta de la información transmitida a través de Internet.

### 20. Modificaciones del Servicio
Haften Haften se reserva el derecho de modificar, suspender o cancelar el Servicio (o cualquier parte del mismo) en cualquier momento, con o sin previo aviso.
Usted acepta que Haften Haften no será responsable ante usted ni ante terceros por las modificaciones, suspensiones o cancelaciones del Servicio. Para proteger la integridad de la Plataforma, nos reservamos el derecho de bloquear el acceso a usuarios que violen estos Términos.

### 21. Disposiciones Generales
Este Acuerdo constituye el acuerdo completo entre usted y Haften Haften con respecto al uso del Servicio y reemplaza todos los acuerdos anteriores sobre el mismo tema.
Si alguna disposición se considera inválida, el resto del Acuerdo permanecerá en vigor.
La falta de ejercicio de cualquier derecho no constituirá una renuncia a dicho derecho.
Su cuenta no es transferible y todos sus derechos sobre su perfil o contenido finalizan con su fallecimiento.
No se crea ninguna agencia, sociedad o relación laboral como resultado de este Acuerdo.

### 22. Contacto
Para cualquier consulta, comentario o reclamación relacionada con estos Términos de Uso, puede contactarnos a través de legal@haftenhaften.com.

### 23. Aceptación
CONFIRMO QUE HE LEÍDO ESTE ACUERDO Y ACEPTO TODAS LAS DISPOSICIONES CONTENIDAS EN EL MISMO.

Al crear una cuenta, utilizar o visitar Haften Haften, usted queda vinculado por estos Términos de Uso e indica su aceptación continua de las condiciones aquí establecidas, así como de nuestra Política de Privacidad.
Si no está de acuerdo con alguna disposición, le rogamos que suspenda inmediatamente todo uso del Servicio.
`;

type Language = 'es' | 'en';

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof translations.es) => string;
}>({
  lang: 'es',
  setLang: () => {},
  t: () => ''
});

const useTranslation = () => useContext(LanguageContext);

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const PlayStoreIcon = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6">
    <path d="M32.5 37.3c-2.8 3-4.5 7.8-4.5 14v411.4c0 6.2 1.7 11 4.5 14l.8.8L256 256.8v-1.6l-222.7-218.7-.8.8z" fill="#00e5ff" />
    <path d="M329.3 329.9L256 256.8v-1.6l73.3-73.1 1.7 1c17.4 9.9 43.5 24.8 65.1 37.1 6.2 3.5 10.8 8.4 10.8 14.1s-4.6 10.6-10.8 14.1c-21.6 12.3-47.7 27.2-65.1 37.1l-1.7 1.3z" fill="#ffeb3b" />
    <path d="M331 330.9l-75-75.7L32.5 477.1c5.8 6.1 15.4 6.9 26.4 0.6 31-17.7 213.2-121.7 272.1-146.8z" fill="#ff1744" />
    <path d="M331 182.7L58.9 27.5c-11-6.3-20.6-5.5-26.4 0.6L256 255.2l75-72.5z" fill="#4caf50" />
  </svg>
);

const AppStoreIcon = () => (
  <svg viewBox="0 0 384 512" className="w-6 h-6" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const HaftenLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={cn("text-primary", className)} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="currentColor" fillOpacity="0.1" />
    <path d="M30 25V75M70 25V75M30 50H70" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
  </svg>
);

const Navbar = () => {
  const { lang, setLang, t } = useTranslation();
  const [showLangs, setShowLangs] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <HaftenLogo className="w-10 h-10" />
          <span className="text-2xl font-bold tracking-tighter font-display">HAFTEN</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#about" className="hover:text-primary transition-colors">{t('nav_about')}</a>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setShowLangs(!showLangs)}
            className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all neon-glow"
          >
            <Globe className="w-4 h-4" />
            {t('nav_languages')}
            <ChevronDown className={cn("w-4 h-4 transition-transform", showLangs && "rotate-180")} />
          </button>
          
          <AnimatePresence>
            {showLangs && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <button 
                  onClick={() => { setLang('es'); setShowLangs(false); }}
                  className={cn(
                    "w-full px-4 py-3 text-left text-sm hover:bg-white/5 transition-colors",
                    lang === 'es' ? "text-primary font-bold" : "text-white/70"
                  )}
                >
                  Español
                </button>
                <button 
                  onClick={() => { setLang('en'); setShowLangs(false); }}
                  className={cn(
                    "w-full px-4 py-3 text-left text-sm hover:bg-white/5 transition-colors",
                    lang === 'en' ? "text-primary font-bold" : "text-white/70"
                  )}
                >
                  English
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

const LegalModal = ({ isOpen, onClose, title, content }: { isOpen: boolean; onClose: () => void; title: string; content: string }) => {
  const { t } = useTranslation();
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[80vh] bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-display font-bold">{title}</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
              <div className="markdown-body text-white/70 leading-relaxed">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
            <div className="p-6 border-t border-white/10 flex justify-end">
              <button 
                onClick={onClose}
                className="bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-xl font-bold transition-all"
              >
                {t('close')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mockupImages, setMockupImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?auto=format&fit=crop&q=80&w=600&h=1200",
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=600&h=1200",
    "https://images.unsplash.com/photo-1514525253344-99a4299965c2?auto=format&fit=crop&q=80&w=600&h=1200",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=600&h=1200"
  ]);

  const screens = [
    { label: t('hero_mapa') },
    { label: t('hero_eventos') },
    { label: t('how_step_1_title') },
    { label: t('how_step_3_title') }
  ];

  const handleImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImages = [...mockupImages];
        newImages[index] = reader.result as string;
        setMockupImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mockupImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mockupImages.length) % mockupImages.length);
  };

  return (
    <section id="about" className="relative pt-40 pb-32 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 blur-[150px] rounded-full" />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-9xl font-display font-bold leading-none mb-8 tracking-tighter">
            HAFTEN <span className="text-primary">HAFTEN</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero_subtitle')}
          </p>

          {/* App Screen Carousel */}
          <div className="relative flex justify-center items-center mb-20 px-4 group">
            <button 
              onClick={prevSlide}
              className="absolute left-0 md:-left-20 z-40 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="relative w-64 md:w-80 aspect-[9/19] rounded-[3rem] overflow-hidden border-[8px] border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)] bg-zinc-900 transition-all duration-500 group cursor-pointer shadow-primary/20"
                onClick={() => document.getElementById(`upload-${currentIndex}`)?.click()}
              >
                {/* Hidden Input */}
                <input 
                  type="file" 
                  id={`upload-${currentIndex}`} 
                  className="hidden" 
                  accept="image/*"
                  onChange={(e) => handleImageUpload(currentIndex, e)}
                />

                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-30" />
                
                <img 
                  src={mockupImages[currentIndex]} 
                  alt={screens[currentIndex].label} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:opacity-20 transition-opacity" />

                {/* Upload Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="w-10 h-10 text-white" />
                    <span className="text-sm font-bold uppercase tracking-widest">{t('hero_change')} {screens[currentIndex].label}</span>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 border-2 border-primary/30 rounded-[3rem] pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            <button 
              onClick={nextSlide}
              className="absolute right-0 md:-right-20 z-40 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Carousel Dots */}
            <div className="absolute -bottom-12 flex gap-2">
              {mockupImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentIndex === i ? "w-8 bg-primary" : "bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-sans font-bold text-base transition-all active:scale-95">
              <PlayStoreIcon />
              <span className="tracking-tight">Google Play</span>
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-sans font-bold text-base transition-all active:scale-95">
              <AppStoreIcon />
              <span className="tracking-tight">App Store</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      number: "1",
      title: t('how_step_1_title'),
      desc: t('how_step_1_desc'),
      color: "border-pink-500 shadow-pink-500/50",
      icon: "heart"
    },
    {
      number: "2",
      title: t('how_step_2_title'),
      desc: t('how_step_2_desc'),
      color: "border-purple-500 shadow-purple-500/50",
      icon: null
    },
    {
      number: "3",
      title: t('how_step_3_title'),
      desc: t('how_step_3_desc'),
      color: "border-blue-500 shadow-blue-500/50",
      icon: null
    },
    {
      number: "4",
      title: t('how_step_4_title'),
      desc: t('how_step_4_desc'),
      color: "border-orange-500 shadow-orange-500/50",
      icon: "star"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-zinc-950">
      {/* Film Grain Effect Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter"
          >
            {t('how_title_1')} <span className="text-primary neon-glow-text">{t('how_title_2')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-8">
                {/* Background decorative elements */}
                {step.icon === 'heart' && (
                  <div className="absolute -top-16 -left-16 w-32 h-32 opacity-20 pointer-events-none">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-pink-500 w-full h-full animate-pulse">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                )}
                {step.icon === 'star' && (
                  <div className="absolute -bottom-16 -right-16 w-32 h-32 opacity-20 pointer-events-none">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-orange-500 w-full h-full animate-spin-slow">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                )}
                
                <div className={cn(
                  "w-20 h-20 rounded-2xl border-2 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]",
                  step.color
                )}>
                  <span className="text-3xl font-display font-bold text-white">{step.number}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

const WhyHaften = () => {
  const { t } = useTranslation();
  
  const reasons = [
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: t('why_1_title'),
      desc: t('why_1_desc'),
      emoji: "🎯"
    },
    {
      icon: <Map className="w-10 h-10 text-secondary" />,
      title: t('why_2_title'),
      desc: t('why_2_desc'),
      emoji: "🗺️"
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: t('why_3_title'),
      desc: t('why_3_desc'),
      emoji: "🔐"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter neon-glow-text"
          >
            {t('why_title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-8 bg-zinc-900 border border-white/10 rounded-3xl h-full flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-white/5 rounded-2xl relative">
                  {reason.icon}
                  <span className="absolute -top-2 -right-2 text-2xl">{reason.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EnergyMap = () => {
  const { t } = useTranslation();
  const [selectedVenue, setSelectedVenue] = useState<any>(null);

  const venues = [
    {
      id: 1,
      name: "Neon Jungle",
      type: "Club",
      energy: 95,
      checkins: 450,
      x: "25%",
      y: "35%",
      color: "bg-primary",
      stories: [
        "https://picsum.photos/seed/nj1/200/300",
        "https://picsum.photos/seed/nj2/200/300"
      ],
      featured: "¡Barra libre de 23:00 a 00:00 para usuarios de HAFTEN!"
    },
    {
      id: 2,
      name: "The Underground",
      type: "Techno Club",
      energy: 88,
      checkins: 320,
      x: "65%",
      y: "25%",
      color: "bg-secondary",
      stories: [
        "https://picsum.photos/seed/tu1/200/300"
      ],
      featured: "Special Guest: DJ Shadow"
    },
    {
      id: 3,
      name: "Sunset Terrace",
      type: "Rooftop Bar",
      energy: 65,
      checkins: 180,
      x: "45%",
      y: "65%",
      color: "bg-orange-500",
      stories: [
        "https://picsum.photos/seed/st1/200/300",
        "https://picsum.photos/seed/st2/200/300",
        "https://picsum.photos/seed/st3/200/300"
      ],
      featured: "Happy Hour extendida hasta las 21:00"
    },
    {
      id: 4,
      name: "Electric Avenue",
      type: "Cocktail Bar",
      energy: 75,
      checkins: 210,
      x: "80%",
      y: "70%",
      color: "bg-blue-500",
      stories: [],
      featured: "Nuevos cocktails de autor disponibles"
    }
  ];

  return (
    <section className="py-32 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4"
          >
            {t('map_title')}
          </motion.h2>
          <p className="text-white/60 max-w-xl mx-auto">
            {t('map_subtitle')}
          </p>
        </div>

        <div className="relative aspect-[16/9] w-full bg-zinc-950 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
          {/* Atmospheric Blurry Background */}
          <div className="absolute inset-0 overflow-hidden opacity-60">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/30 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/30 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-orange-500/20 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-[20%] left-[10%] w-[40%] h-[40%] bg-blue-500/20 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
          </div>

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          {/* Hotspots */}
          {venues.map((venue) => (
            <motion.button
              key={venue.id}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setSelectedVenue(venue)}
              className="absolute group z-20"
              style={{ left: venue.x, top: venue.y }}
            >
              <div className={cn(
                "w-4 h-4 rounded-full relative",
                venue.color
              )}>
                <div className={cn(
                  "absolute inset-0 rounded-full animate-ping opacity-75",
                  venue.color
                )} />
                <div className={cn(
                  "absolute -inset-4 rounded-full blur-xl opacity-50 transition-opacity group-hover:opacity-100",
                  venue.color
                )} />
              </div>
              
              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                  <p className="text-xs font-bold text-white">{venue.name}</p>
                  <p className="text-[10px] text-white/50">{venue.energy}% Energy</p>
                </div>
              </div>
            </motion.button>
          ))}

          {/* Venue Details Overlay */}
          <AnimatePresence>
            {selectedVenue && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="absolute top-0 right-0 w-full md:w-96 h-full bg-zinc-950/95 backdrop-blur-xl border-l border-white/10 z-30 p-8 overflow-y-auto"
              >
                <button 
                  onClick={() => setSelectedVenue(null)}
                  className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-widest">{selectedVenue.type}</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold">{selectedVenue.name}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{t('map_checkins')}</p>
                      <p className="text-xl font-bold">{selectedVenue.checkins}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Energy</p>
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-bold">{selectedVenue.energy}%</p>
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${selectedVenue.energy}%` }} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {selectedVenue.featured && (
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex gap-3">
                      <Sparkles className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">{t('map_featured')}</p>
                        <p className="text-sm text-white/80">{selectedVenue.featured}</p>
                      </div>
                    </div>
                  )}

                  {selectedVenue.stories.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">{t('map_live_stories')}</h4>
                        <span className="text-[10px] bg-secondary/20 text-secondary px-2 py-0.5 rounded-full font-bold">LIVE</span>
                      </div>
                      <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                        {selectedVenue.stories.map((story: string, i: number) => (
                          <div key={i} className="w-24 aspect-[9/16] rounded-xl overflow-hidden shrink-0 border border-white/10">
                            <img src={story} alt="Story" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <button className="w-full bg-white text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-all">
                    <Smartphone className="w-5 h-5" />
                    Abrir en la App
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};



const Footer = ({ onOpenLegal }: { onOpenLegal: (type: 'guidelines' | 'terms' | 'privacy') => void }) => {
  const { t } = useTranslation();
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex items-center gap-3">
            <HaftenLogo className="w-10 h-10" />
            <span className="text-2xl font-bold tracking-tighter font-display">HAFTEN</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2">
            <button onClick={() => onOpenLegal('guidelines')} className="text-white/40 hover:text-primary transition-colors text-[10px] uppercase tracking-[0.2em] font-bold">{t('footer_guidelines')}</button>
            <button onClick={() => onOpenLegal('terms')} className="text-white/40 hover:text-primary transition-colors text-[10px] uppercase tracking-[0.2em] font-bold">{t('footer_terms')}</button>
            <button onClick={() => onOpenLegal('privacy')} className="text-white/40 hover:text-primary transition-colors text-[10px] uppercase tracking-[0.2em] font-bold">{t('footer_privacy')}</button>
          </div>
        </div>
        <p className="text-white/20 text-[10px] uppercase tracking-widest font-medium">{t('footer_rights')}</p>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'guidelines' | 'terms' | 'privacy' | null }>({
    isOpen: false,
    type: null
  });

  const t = (key: keyof typeof translations.es) => {
    return translations[lang][key] || translations.es[key];
  };

  const getLegalContent = () => {
    if (legalModal.type === 'guidelines') return COMMUNITY_GUIDELINES_ES;
    if (legalModal.type === 'privacy') return PRIVACY_POLICY_ES;
    if (legalModal.type === 'terms') return TERMS_OF_USE_ES;
    return "Contenido en desarrollo...";
  };

  const getLegalTitle = () => {
    if (legalModal.type === 'guidelines') return t('footer_guidelines');
    if (legalModal.type === 'terms') return t('footer_terms');
    if (legalModal.type === 'privacy') return t('footer_privacy');
    return "";
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen selection:bg-primary/30">
        <Navbar />
        <main>
          <Hero />
          <HowItWorks />
          <WhyHaften />
          <EnergyMap />
        </main>
        <Footer onOpenLegal={(type) => setLegalModal({ isOpen: true, type })} />
        
        <LegalModal 
          isOpen={legalModal.isOpen} 
          onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
          title={getLegalTitle()}
          content={getLegalContent()}
        />
      </div>
    </LanguageContext.Provider>
  );
}
