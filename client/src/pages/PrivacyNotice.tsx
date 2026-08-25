/**
 * Design: Color que Trabaja — a calm, high-contrast legal-information page using the established blue, red, and yellow brand language.
 * Purpose: present the staging privacy notice clearly, including the limited Formspree synthetic-test pilot without analytics or files.
 */
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";

const officialLogo = "/media/logo-firma-bordados.jpeg";
const privacyEmail = "firmabordados@yahoo.com";

export default function PrivacyNotice() {
  return (
    <div className="min-h-screen bg-[#fffdf7] text-[#183d79]">
      <a className="skip-link" href="#aviso-privacidad">Saltar al aviso de privacidad</a>
      <header className="border-b border-[#d8e0ec] bg-white shadow-[0_5px_20px_rgba(17,57,117,0.08)]">
        <div className="h-2 bg-[#0d4c9e]" />
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-5 px-5 py-4 lg:px-10">
          <a href="/" className="group flex items-center gap-3" aria-label="Volver al inicio de Firma Bordados">
            <span className="flex h-11 w-13 items-center justify-center rounded-md bg-white p-0.5 shadow-[0_4px_14px_rgba(19,58,121,0.14)] transition-transform duration-200 group-hover:scale-105">
              <img src={officialLogo} alt="Logo oficial de Firma Bordados" className="h-full w-full object-contain" />
            </span>
            <span className="leading-none">
              <strong className="block font-display text-[0.93rem] font-bold tracking-[0.12em] text-[#163c79]">FIRMA</strong>
              <span className="mt-0.5 block text-[0.62rem] font-bold tracking-[0.29em] text-[#df2b2c]">BORDADOS</span>
            </span>
          </a>
          <a href="/" className="inline-flex items-center gap-2 rounded-md border border-[#cbd8eb] px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#123d80] transition-colors hover:border-[#0d4c9e] hover:bg-[#edf4ff]">
            <ArrowLeft size={15} /> Volver al sitio
          </a>
        </div>
      </header>

      <main id="aviso-privacidad" tabIndex={-1} className="mx-auto max-w-[1120px] px-5 py-12 lg:px-10 lg:py-18">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#df2b2c]"><span className="h-2.5 w-2.5 rounded-full bg-[#f3bd25]" /> Información de privacidad</p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.045em] text-[#123d80] sm:text-5xl">Aviso de privacidad</h1>
          <p className="mt-5 text-base leading-7 text-[#5d6c82]">Firma Bordados informa cómo tratará los datos personales de quienes soliciten información o una cotización.</p>
        </div>

        <section className="mt-10 rounded-2xl border-l-[6px] border-[#f3bd25] bg-[#fff7da] p-6 shadow-[0_10px_24px_rgba(18,61,128,0.06)]" aria-labelledby="estado-staging">
          <div className="flex items-start gap-4"><ShieldCheck className="mt-0.5 shrink-0 text-[#0d4c9e]" size={22} /><div><h2 id="estado-staging" className="font-display text-xl font-bold text-[#123d80]">Piloto de pruebas para el staging</h2><p className="mt-2 text-sm leading-6 text-[#5d6c82]">El sitio mantiene el correo guiado como vía oficial. El formulario visible es un piloto limitado a pruebas sintéticas: no envíe datos reales, archivos ni información de clientes mientras el buzón oficial se verifica en el proveedor.</p></div></div>
        </section>

        <article className="mt-10 rounded-2xl bg-white p-6 shadow-[0_16px_36px_rgba(18,61,128,0.09)] sm:p-9 lg:p-11">
          <div className="grid gap-4 border-b border-[#d8e0ec] pb-7 sm:grid-cols-2"><div><p className="text-[0.64rem] font-bold uppercase tracking-[0.15em] text-[#6d7c92]">Última actualización</p><p className="mt-1 text-sm font-semibold text-[#123d80]">24 de agosto de 2026</p></div><div><p className="text-[0.64rem] font-bold uppercase tracking-[0.15em] text-[#6d7c92]">Versión</p><p className="mt-1 text-sm font-semibold text-[#123d80]">Staging · piloto sintético con Formspree</p></div></div>

          <NoticeSection title="Responsable"><p>Firma Bordados, con domicilio en Emilio Carranza #1021 Int. 113, Col. Burócratas, Piedras Negras, Coahuila, es responsable del tratamiento de los datos personales descritos en este aviso.</p></NoticeSection>

          <NoticeSection title="Datos personales que podrán tratarse"><p>Para atender una solicitud de información o cotización, Firma Bordados podrá tratar nombre, correo electrónico, teléfono, empresa —si la persona decide proporcionarlos— y los datos incluidos en la consulta, como tipo de prenda, técnica de interés, cantidad aproximada y uso o requerimiento.</p><p>Firma Bordados no solicita datos personales sensibles, financieros, patrimoniales ni documentos de identificación para esta finalidad. Se pide no enviarlos por el correo de consulta.</p></NoticeSection>

          <NoticeSection title="Finalidades"><p>Los datos se usarán para recibir y atender la consulta, comunicarse con la persona solicitante, comprender sus necesidades de prendas, bordado o serigrafía, preparar o dar seguimiento a una posible cotización y, si se contrata un servicio, gestionar la comunicación relacionada con ese servicio.</p><p>Firma Bordados no usará los datos de consulta para campañas, boletines o publicidad sin actualizar este aviso y aplicar el consentimiento que corresponda.</p></NoticeSection>

          <NoticeSection title="Limitación de uso o divulgación"><p>Puede solicitar que sus datos no se utilicen para finalidades distintas de atender su consulta, cuando corresponda, escribiendo a <a className="font-semibold text-[#0d4c9e] underline decoration-[#f3bd25] decoration-2 underline-offset-4 hover:text-[#df2b2c]" href={`mailto:${privacyEmail}?subject=Privacidad%20%E2%80%94%20limitar%20uso%20de%20datos`}>{privacyEmail}</a> con el asunto “Privacidad — limitar uso de datos”. Firma Bordados asignará atención interna a estos correos.</p></NoticeSection>

          <NoticeSection title="Derechos ARCO"><p>Puede solicitar acceso a sus datos, rectificación, cancelación u oposición al tratamiento cuando proceda. Para iniciar una solicitud, escriba a <a className="font-semibold text-[#0d4c9e] underline decoration-[#f3bd25] decoration-2 underline-offset-4 hover:text-[#df2b2c]" href={`mailto:${privacyEmail}?subject=Solicitud%20ARCO`}>{privacyEmail}</a> con el asunto “Solicitud ARCO”, indicando su nombre, un medio para recibir respuesta, el derecho que desea ejercer y una descripción clara de su solicitud.</p><p>Firma Bordados podrá solicitar la información necesaria para verificar identidad y dar trámite a la petición conforme a los requisitos aplicables. Se recomienda no enviar documentos de identidad ni datos sensibles por correo salvo que se soliciten mediante un canal adecuado.</p></NoticeSection>

          <NoticeSection title="Revocación y conservación"><p>Cuando el tratamiento se base en consentimiento y sea procedente revocarlo, puede solicitarlo al mismo correo con el asunto “Privacidad — revocación de consentimiento”.</p><p>Como política operativa propuesta, las consultas se conservarán hasta por doce meses desde la última interacción y posteriormente se eliminarán o disociarán, salvo que exista una relación comercial o una obligación legal o contractual aplicable.</p></NoticeSection>

          <NoticeSection title="Proveedores, seguridad y cambios"><p>Durante este piloto de pruebas sintéticas, el formulario envía los campos de prueba a Formspree para validar el flujo. Formspree actúa como proveedor técnico y puede conservar un archivo técnico de envíos conforme a su configuración de plan. El piloto no está autorizado para consultas reales hasta verificar el buzón oficial de Firma Bordados como destinatario.</p><p>El piloto no admite archivos, no usa analítica, no activa autorespuestas ni agrega destinatarios adicionales. Firma Bordados procurará aplicar medidas administrativas, técnicas y físicas razonables para evitar el daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado de los datos. Los cambios relevantes a este aviso se comunicarán en esta misma página.</p></NoticeSection>

          <div className="mt-10 rounded-xl bg-[#f2f7ff] p-5"><p className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#0d4c9e]"><Mail size={15} /> Contacto de privacidad</p><a className="mt-2 inline-block text-base font-bold text-[#123d80] underline decoration-[#df2b2c] decoration-2 underline-offset-4 hover:text-[#df2b2c]" href={`mailto:${privacyEmail}?subject=Privacidad%20%E2%80%94%20consulta`}>{privacyEmail}</a></div>
        </article>
      </main>

      <footer className="bg-[#123d80] py-8 text-white/75"><div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-4 px-5 text-xs sm:flex-row sm:items-center lg:px-10"><p>© {new Date().getFullYear()} Firma Bordados. Todos los derechos reservados.</p><a href="/" className="font-bold uppercase tracking-[0.11em] text-white/75 transition-colors hover:text-[#ffe584]">Volver al sitio</a></div></footer>
    </div>
  );
}

function NoticeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-9 border-b border-[#e4ebf5] pb-9 last:border-0"><h2 className="font-display text-2xl font-bold tracking-[-0.025em] text-[#123d80]">{title}</h2><div className="mt-3 space-y-3 text-sm leading-7 text-[#5d6c82]">{children}</div></section>;
}
