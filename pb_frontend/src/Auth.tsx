import React from 'react'
import { useForm } from 'react-hook-form'
import useLogout from '@src/hooks/useLogout';
import useLogin, { FormData } from '@src/hooks/useLogin';
import pb from '@src/lib/pocketbase'

function Auth() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const { mutate: login, isLoading, isError } = useLogin();
  const isLoggedIn = pb.authStore.isValid;
  const { logout } = useLogout();
  console.log({ isLoggedIn })

  const handleLogin = async (data: FormData) => {
    login(data)
  };

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      {
        isLoggedIn ? (
          <div>
            <h2>Welcome back!</h2>
            <button onClick={() => logout(reset)}>Logout</button>
          </div>
        ) : (
          <>
            {isError && <p>Invalid email or password</p>}
            <form onSubmit={handleSubmit(handleLogin)}>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              <div>
                <label>Password</label>
                <input
                  type="password"
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <span>{errors.password.message}</span>}
              </div>

              <button type="submit">Login</button>
            </form>
          </>
        )
      }
    </>
  );
}

export default Auth;
