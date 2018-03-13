import React from 'react';
import { connect } from 'react-redux';
import { categoryCreate } from '../../actions/category-actions';
import CategoryForm from '../category/category-form/category-form';
import CategoryItem from '../category/category-item/category-item';

class Google extends React.Component {
  render() {
    return (
      <section className='google'>
        <h1><a href='https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/oauth/google/code&scope=openid%20email%20profile&client_id=744824543633-kp7g880o2mms0mlov99sp9auqtumc033.apps.googleusercontent.com&prompt=consent&response_type=code'>login or signup with google</a></h1>
      </section>
    );
  }
}

export default Google;