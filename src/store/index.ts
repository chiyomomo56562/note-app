import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './menu/menuSlice';
import modalReducer from './modal/modalSlice';
import notesListReducer from './notesList/notesListSlice';
import tagsReducer from './tags/tagsSlice';

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        modal: modalReducer,
        tags: tagsReducer,
        notesList: notesListReducer
    }
})

// 리덕스 스토어 전체의 상태를 나타내는 타입
export type RootState = ReturnType<typeof store.getState>;

// 리덕스 스토어에서 액션을 디스패치하는 함수의 타입
// 훅을 통해 얻은 디스패치 함수의 타입으로 사용된다.
export type AppDispatch = typeof store.dispatch;