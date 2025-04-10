import React from 'react'

const ErrorPage = () => {
  return (
    <div className="p-4  text-red-600 flex flex-col  items-center justify-center">
      <h1 className="text-2xl font-bold">Oops! Something went wrong.</h1>
      <p>We couldn’t find the page you’re looking for.</p>
    </div>

  )
}

export default ErrorPage
