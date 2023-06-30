import React from 'react';
import css from './accountControlPanel.module.css';
import MyButton from '../../UI/MyButton/MyButton';
import { useNavigate } from 'react-router-dom';

function AccountControlPanel() {
  const router = useNavigate();
  return (
    <div className={css.accountControlPanel}>
      <MyButton style={{marginRight: '8px'}}>
        Зарегистрироваться        
      </MyButton>
      <div className={css.verticalLine}></div>
      <MyButton style={{background: '#7CE3E1', fontFamily: 'Inter-Medium', color: 'black'}}
                onClick={() => router('/autorization')}>
                {/* onClick={() => router.push(`/posts/${props.post.id}`)}> */}
        Войти      
      </MyButton>
    </div>
  )
}

export default AccountControlPanel;