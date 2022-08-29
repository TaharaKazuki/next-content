import React from 'react'
import { Button } from '@/components/button'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'

type User = {
  name: string
  nickName: string
  profile: string
}

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<User>()

  const submit = (data: User) => {
    console.info(data)
  }

  return (
    <div className="container">
      <h1>アカウント作成</h1>

      <form onSubmit={handleSubmit(submit)} className="space-y-6">
        <div>
          <label className="block mb-0.5" htmlFor="name">
            名前*
          </label>
          <input
            autoComplete="name"
            className={classNames(
              'rounded border',
              errors.name ? 'border-red-500' : 'border-slate-300'
            )}
            {...register('name', {
              required: '必須入力です',
              maxLength: {
                value: 50,
                message: '最大50文字です',
              },
            })}
            id="name"
            name="name"
            type="text"
          />
          {errors.name && <p className="text-red-500 mt-0.5">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-0.5" htmlFor="nickName">
            ニックネーム*
          </label>
          <input
            autoComplete="off"
            className={classNames(
              'rounded border',
              errors.nickName ? 'border-red-500' : 'border-slate-300'
            )}
            {...register('nickName', {
              required: '必須入力です',
              maxLength: { value: 50, message: '最大50文字です' },
            })}
            id="nickName"
            name="nickName"
            type="text"
          />
          {errors.nickName && <p className="text-red-500 mt-0.5">{errors.nickName.message}</p>}
        </div>

        <div>
          <label className="block mb-0.5" htmlFor="profile">
            プロフィール*
          </label>
          <textarea
            className={classNames(
              'rounded border',
              errors.profile ? 'border-red-500' : 'border-slate-300'
            )}
            {...register('profile', {
              required: '必須入力です',
              maxLength: { value: 255, message: '最大255文字です' },
            })}
            id="profile"
            name="profile"
          />
          <p className="text-sm text-slate-400 leading-none">{watch('profile')?.length || 0}/255</p>
          {errors.profile && <p className="text-red-500 mt-0.5">{errors.profile.message}</p>}
        </div>

        <Button>アカウント作成</Button>
      </form>
    </div>
  )
}

export default CreateAccount
