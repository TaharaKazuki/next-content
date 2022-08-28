import React from 'react'
import { Button } from '@/components/button'
import { useForm } from 'react-hook-form'

type User = {
  name: string
  nickName: string
  profile: string
}

const CreateAccount = () => {
  const { register, handleSubmit } = useForm<User>()

  const submit = (data: User) => {
    console.info(data)
  }

  return (
    <div>
      <h1>アカウント作成</h1>

      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name">名前</label>
          <input
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
        </div>

        <div>
          <label htmlFor="nickName">ニックネーム</label>
          <input
            {...register('nickName', { required: '必須入力です' })}
            id="nickName"
            name="nickName"
            type="text"
          />
        </div>

        <div>
          <label htmlFor="profile">プロフィール</label>
          <textarea
            {...register('profile', {
              required: '必須入力です',
              maxLength: { value: 255, message: '最大100文字です' },
            })}
            id="profile"
            name="profile"
          />
        </div>

        <Button>アカウント作成</Button>
      </form>
    </div>
  )
}

export default CreateAccount
