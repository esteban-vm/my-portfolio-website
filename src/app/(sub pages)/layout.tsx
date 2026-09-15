import tw from 'tailwind-styled-components'

export default function SubPagesLayout({ children }: LayoutProps<'/'>) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = tw.div`container mx-auto flex h-full min-h-screen items-center justify-center py-[calc(var(--header-height)+(--spacing(4)))]`
