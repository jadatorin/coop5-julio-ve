import { useState } from 'react';
import { toast } from 'sonner';

interface ContactFormProps {
  title?: string;
}

export default function ContactForm({ title = 'Envíanos un Mensaje' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success('Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section data-cmp="ContactForm" className="bg-white rounded-xl shadow-custom border border-border p-6 md:p-8">
      <h3 className="font-display font-bold text-xl text-foreground mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1.5">
              Nombre completo <span className="text-destructive">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">
              Correo electrónico <span className="text-destructive">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground mb-1.5">Teléfono</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+58 000-000-0000"
              className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground mb-1.5">
              Asunto <span className="text-destructive">*</span>
            </label>
            <select
              id="contact-subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            >
              <option value="">Seleccionar...</option>
              <option value="afiliacion">Afiliación</option>
              <option value="ferias">Ferias de Consumo</option>
              <option value="salud">Red de Salud</option>
              <option value="sepelio">Fondo Funerario</option>
              <option value="ahorro">Ahorro Comunitario</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">
            Mensaje <span className="text-destructive">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-vertical"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg shadow-custom transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
    </section>
  );
}
