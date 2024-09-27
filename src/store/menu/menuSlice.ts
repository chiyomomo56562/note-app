import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
    isOpen: boolean;
}

const initialState: MenuState = {
    isOpen: false,
}

// createSlice함수는 리듀서를 정의할 분만 아니라, 그 리듀서를 호출하는 데 필요한 액션 생성자를 자동으로 생성해준다.
const menuSlice = createSlice({
    name: 'menu', //슬라이스의 이름
    initialState, //슬라이스의 초기상태
    reducers: { //이 슬라이스에서 사용할 리듀서(상태 변경 함수) 목록
        toggleMenu: (state, action)=> {
            // state => 현재 상태, action => 액션 객체
            // dispatch(toggleMenu(true))와 같이 사용하면 action.payload = true값으로 들어오게 된다.
            state.isOpen = action.payload; 
        }
    }
})

// 토글 메뉴 함수도 밖에서 사용가능하도록 export해야한다.
// 리듀서가 아니라 액션 생성자를 내보내는 것
// 리듀서: 상태가 어떻게 변경될 지 정의하는 함수, 새로운 상태를 반환한다.
// 액션 생성자: 액션 객체를 반환하는 함수, 특정 이벤트가 발생할 때 액션 객체를 만들어주는 역할, 리듀서를 호출하는게 아니다. 디스패치할 때 액션 객체를 생성한다.
// menu.slice.actions는 액션 생성자를 담고 있는 객체, 리듀서를 담고 있지 않다.
export const {toggleMenu} = menuSlice.actions; //actions에 존재하는 액션 생성자 중에서 toggleMenu라는 이름의 액션 생성자를 내보내는 것
export default menuSlice.reducer;