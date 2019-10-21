import { format, parseISO } from 'date-fns';
import en from 'date-fns/locale/en-US';
import Mail from '../../lib/Mail';

class CacellationMail {
  get key() {
    return 'CacellationMail';
  }

  async handle({ data }) {
    const { appointment } = data;
    console.log('job: email');
    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Appointment canceled',
      template: 'cancelation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(parseISO(appointment.date), "MMMM dd', at' H:mm'h'", {
          locale: en,
        }),
      },
    });
  }
}

export default new CacellationMail();
