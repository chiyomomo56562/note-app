import React from 'react'
import { Container, StyledNav } from './Navbar.styles'
import { FiMenu } from 'react-icons/fi';
import { toggleMenu } from '../../store/menu/menuSlice';
import { useAppDispatch } from '../../hooks/redux';
import getStandardName from '../../utils/getStandardName';
import { useLocation } from 'react-router-dom';
import { ButtonFill } from '../../styles/styles';
import { toggleCreateNoteModal } from '../../store/modal/modalSlice';

const Navbar = () => {
    const dispatch = useAppDispatch();

    const { pathname, state } = useLocation()
    if (pathname === "/404") {
      return null;
    }
  
  return (
    <StyledNav>
        <div className='nav__menu'>
            {/* 이 버튼을 누르면 액션 생성자가 실행된다.*/}
            <FiMenu onClick={() => dispatch(toggleMenu(true))}/>
        </div>
      <Container>
        <div className='nav__page-title'>{getStandardName(state)} </div>

        {state !== "Trash" && state !== "Archive" &&
          <ButtonFill
            onClick={() => dispatch(toggleCreateNoteModal(true))}
            className="nav__btn"
          >
            <span>+</span>
          </ButtonFill>
        }
      </Container>
    </StyledNav>
  )
}

export default Navbar
