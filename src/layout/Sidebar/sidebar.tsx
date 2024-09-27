import {v4} from 'uuid'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Container } from './Sidebar.styles'
import { ItemsBox, MainBox, StyledLogo } from './Sidebar.styles';
import { FaArchive, FaLightbulb, FaTag, FaTrash } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom'
import { toggleMenu } from '../../store/menu/menuSlice';
import { toggleTagsModal } from '../../store/modal/modalSlice';
import getStandardName from '../../utils/getStandardName';

const items =[
    {icon: <FaArchive />, title: "Arch", id:v4()},
    {icon: <FaTrash />, title: "Trash", id:v4()},
]

const Sidebar =() => {
    const dispatch = useAppDispatch();
    // 스토어에 있는 값을 가져올때는 useSelector 훅을 이용한다.
    // 셀렉터를 이용해 state를 모두 가져오고 그 중 메뉴에 관한 것만 가져와준다.
    const {isOpen} = useAppSelector((state) => state.menu);
    const { tagsList} = useAppSelector((state) => state.tags)

    const { pathname } = useLocation();

    if (pathname === "/404") {
        return null;
      }
    return (
        <Container openMenu={isOpen? "open" : ""}>
            <MainBox openMenu={isOpen ? "open" : ""}>
                <StyledLogo>
                    <h1>Keep</h1>
                </StyledLogo>

                <ItemsBox>
                    {/* 컴포넌트를 클릭하면 메뉴를 없애야한다. */}
                    <li onClick={() => dispatch(toggleMenu(false))}>
                        {/* NavLink를 사용하면 active사용이 가능하다. */}
                        <NavLink
                            to={`/`} //main경로로 이동
                            state={`notes`} //????
                            className={({isActive}) =>
                                isActive ? "active-item" : "inactive-item"
                            }
                        >
                            <span>
                                <FaLightbulb />
                            </span>
                            <span>
                                Notes
                            </span>
                        </NavLink>
                    </li>
                
                    {/* 이 밑으로는 태그들을 가져와야함 */}
                    {
                        // tagsList가 존재하면 실행
                        tagsList?.map(({tag, id}) => (
                            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
                                {/* NavLink를 사용하면 active사용이 가능하다. */}
                                <NavLink
                                    to={`/tag/${tag}`} //main경로로 이동
                                    state ={tag}
                                    className={({isActive}) => isActive ? "active-item" : "inactive-item"}
                                >
                                    <span>
                                        <FaTag />
                                    </span>
                                    <span>
                                        {getStandardName(tag)}
                                    </span>
                                </NavLink>
                            </li>
                        ))
                    }
                    
                    <li
                        className='sidebar__edit-item'
                        onClick={() => {
                            dispatch(toggleTagsModal({
                                type:'edit',
                                view: true
                            })) //무언가 액션이 있어야하는데 아직 안만들었다.
                        }}
                    >
                        <span>
                            <MdEdit />
                        </span>
                        <span>Edit Notes</span>

                    </li>
                    {/* other item */}
                    {
                        items.map(({icon, title, id}) => (
                            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
                                {/* NavLink를 사용하면 active사용이 가능하다. */}
                                <NavLink
                                    to={`/${title.toLowerCase()}`} //main경로로 이동
                                    state ={title}
                                    className={({isActive}) =>
                                        isActive ? "active-item" : "inactive-item"
                                    }
                                >
                                    <span>
                                        {icon}
                                    </span>
                                    <span>
                                        {title}
                                    </span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ItemsBox>
            </MainBox>
        </Container>
    )
}

export default Sidebar