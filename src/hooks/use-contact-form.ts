import { zodResolver } from '@hookform/resolvers/zod'
import { useHookFormAction } from '@next-safe-action/adapter-react-hook-form/hooks'
import { useTranslations } from 'next-intl'
import { z } from 'zod'
import { sendEmail } from '@/actions'

export function useContactForm() {
  const t = useTranslations('ContactForm')

  return useHookFormAction(
    sendEmail,
    zodResolver(
      z.object({
        name: z
          .string()
          .trim()
          .nonempty(t('errors.name.nonempty'))
          .min(5, t('errors.name.min'))
          .max(50, t('errors.name.max')),
        email: z.email(t('errors.email')).trim().lowercase(),
        message: z
          .string()
          .trim()
          .nonempty(t('errors.message.nonempty'))
          .min(5, t('errors.message.min'))
          .max(255, t('errors.message.max')),
      })
    ),
    {
      formProps: {
        mode: 'onChange',
        defaultValues: {
          name: '',
          email: '',
          message: '',
        },
      },
    }
  )
}
