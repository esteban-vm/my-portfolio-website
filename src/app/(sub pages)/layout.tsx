import tw from 'tailwind-styled-components'

export type Props = LayoutProps<'/'>

export default function SubPagesLayout({ children }: Props) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = tw.div`container mx-auto flex min-h-full items-start justify-center py-[14vh] md:py-[15vh] lg:py-[16vh]`
