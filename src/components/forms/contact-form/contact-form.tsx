'use client'

import * as $ from './contact-form.styled'

export function ContactForm() {
  return (
    <$.Wrapper>
      <$.Fieldset>
        <$.Legend>Get in touch</$.Legend>
        <$.Label>
          Name:
          <$.Input type='text' />
        </$.Label>
        <$.Label>
          Email:
          <$.Input type='email' />
        </$.Label>
        <$.Label>
          Message:
          <$.Textarea spellCheck={false} />
        </$.Label>
        <$.Button type='button'>Send Message</$.Button>
      </$.Fieldset>
    </$.Wrapper>
  )
}
