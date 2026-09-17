'use client'

import { useTranslations } from 'next-intl'
import { useContactForm } from '@/hooks'
import * as $ from './contact-form.styled'

export function ContactForm() {
  const t = useTranslations('ContactForm')

  const {
    form: {
      register,
      formState: { isSubmitting, errors },
    },
    handleSubmitWithAction,
  } = useContactForm()

  return (
    <$.Wrapper noValidate onSubmit={handleSubmitWithAction}>
      <$.Fieldset disabled={isSubmitting}>
        <$.Legend>{t('legend')}</$.Legend>
        <$.Label>
          {t('labels.name')}:
          <$.Input
            maxLength={50}
            minLength={5}
            placeholder={t('placeholders.name')}
            type='text'
            {...register('name')}
          />
          <$.Small>{errors.name?.message}</$.Small>
        </$.Label>
        <$.Label>
          {t('labels.email')}:
          <$.Input placeholder={t('placeholders.email')} type='email' {...register('email')} />
          <$.Small>{errors.email?.message}</$.Small>
        </$.Label>
        <$.Label>
          {t('labels.message')}:
          <$.Textarea maxLength={255} minLength={5} placeholder={t('placeholders.message')} {...register('message')} />
          <$.Small>{errors.message?.message}</$.Small>
        </$.Label>
        <$.Button type='submit'>{t('button')}</$.Button>
      </$.Fieldset>
    </$.Wrapper>
  )
}
