import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface IFormInput {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
}

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<IFormInput>();

  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data.password !== data.repeatPassword) {
      return alert('Passwords do not match');
    }

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        username: data.username,
        password: data.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //const resJSON = await res.json()
    
    if (res.ok) {
      router.push('/auth/login')
    }
  };

  const password = watch('password');

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mt-16 mx-auto p-6 bg-slate-800 text-white rounded-lg shadow-lg shadow-slate-900 ring-1 ring-yellow-500"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-500">Register</h2>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
          type="email"
          className="w-full p-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.email && <p className="text-yellow-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Username */}
      <div className="mb-4">
        <label className="block mb-1">Username</label>
        <input
          {...register('username', {
            required: 'Username is required',
            minLength: { value: 3, message: 'Username must be at least 3 characters' },
          })}
          type="text"
          className="w-full p-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.username && <p className="text-yellow-500 text-sm mt-1">{errors.username.message}</p>}
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block mb-1">Password</label>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' },
          })}
          type="password"
          className="w-full p-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.password && <p className="text-yellow-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      {/* Repeat Password */}
      <div className="mb-6">
        <label className="block mb-1">Repeat Password</label>
        <input
          {...register('repeatPassword', {
            required: 'Please confirm your password',
            validate: (value) => value === password || 'Passwords do not match',
          })}
          type="password"
          className="w-full p-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {errors.repeatPassword && <p className="text-yellow-500 text-sm mt-1">{errors.repeatPassword.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md font-semibold transition-colors"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
