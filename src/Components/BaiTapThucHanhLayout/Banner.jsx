import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='banner py-5'>
        <div className='container'>
            <div className='p-5 bg-light rounded text-center'>
                <div className='m-4'>
                    <h1 className='fw-bold display-5'>A warm welcome!</h1>
                    <p className='fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                    <a href="./" className='btn btn-primary btn-lg'>Call to action</a>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
