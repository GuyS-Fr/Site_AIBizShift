import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className, loading = 'lazy', priority } = props

  return (
    <Image
      src="/images/logo3-horizontal-dark.png"
      alt="AIBizShift"
      width={748}
      height={300}
      loading={loading}
      priority={priority === 'high'}
      className={clsx('h-20 w-auto', className)}
    />
  )
}
